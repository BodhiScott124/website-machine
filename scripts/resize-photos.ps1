# Makes web-friendly copies of every photo in public/photos/<Country>/.
#
#   public/photos/<Country>/<anything>.jpg        <- you put originals here
#     -> public/photos/web/<country>-<name>.jpg   (large, max 2400px)
#     -> public/photos/thumb/<country>-<name>.jpg (small, max 1000px)
#
# It trims any thin white border off the edges, then resizes. It also writes
# scripts/photos-manifest.json listing every photo produced and its country.
#
# Run after adding or moving photos:
#   powershell -ExecutionPolicy Bypass -File scripts/resize-photos.ps1
#
# Any subfolder is processed, not just countries. For a photo that isn't gallery
# work (e.g. a photo of Bodhi for the About page) make a folder like
# public/photos/Portrait/, drop the file in, run this, then point `aboutPhoto`
# in knowledge.json at the generated name (see photos-manifest.json).
#
# Uses .NET System.Drawing, built into Windows — no extra installs.

Add-Type -AssemblyName System.Drawing
$photosRoot = Join-Path $PSScriptRoot "..\public\photos" | Resolve-Path
$outFull = Join-Path $photosRoot "web"
$outThumb = Join-Path $photosRoot "thumb"

Remove-Item $outFull, $outThumb -Recurse -Force -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Force -Path $outFull, $outThumb | Out-Null

function Get-OrientationSafe($img) {
    try {
        if ($img.PropertyIdList -contains 0x0112) { return [int]($img.GetPropertyItem(0x0112).Value[0]) }
    } catch {}
    return 1
}

# Find how many pixels of near-white border to crop off each edge.
# Capped at 7% of the dimension so it can never eat real content.
function Get-BorderCrop($bmp) {
    $w = $bmp.Width; $h = $bmp.Height
    $maxX = [int]($w * 0.07); $maxY = [int]($h * 0.07)
    $isWhiteLine = {
        param($fixed, $isRow)
        $near = 0; $total = 0
        for ($i = 0; $i -lt ($(if ($isRow) { $w } else { $h })); $i += 17) {
            $p = if ($isRow) { $bmp.GetPixel($i, $fixed) } else { $bmp.GetPixel($fixed, $i) }
            $total++
            if ($p.R -ge 238 -and $p.G -ge 238 -and $p.B -ge 238) { $near++ }
        }
        return ($total -gt 0 -and ($near / $total) -ge 0.92)
    }
    $top = 0;    while ($top -lt $maxY -and (& $isWhiteLine $top $true)) { $top++ }
    $bottom = 0; while ($bottom -lt $maxY -and (& $isWhiteLine ($h - 1 - $bottom) $true)) { $bottom++ }
    $left = 0;   while ($left -lt $maxX -and (& $isWhiteLine $left $false)) { $left++ }
    $right = 0;  while ($right -lt $maxX -and (& $isWhiteLine ($w - 1 - $right) $false)) { $right++ }
    # only act if it really looks like a frame (all four edges have some)
    if ($top -gt 1 -and $bottom -gt 1 -and $left -gt 1 -and $right -gt 1) {
        return New-Object System.Drawing.Rectangle $left, $top, ($w - $left - $right), ($h - $top - $bottom)
    }
    return New-Object System.Drawing.Rectangle 0, 0, $w, $h
}

function Save-Resized($srcBmp, $crop, $maxEdge, $destDir, $quality, $name) {
    $cw = $crop.Width; $ch = $crop.Height
    $scale = [Math]::Min(1.0, $maxEdge / [Math]::Max($cw, $ch))
    $nw = [int]($cw * $scale); $nh = [int]($ch * $scale)
    $bmp = New-Object System.Drawing.Bitmap $nw, $nh
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $destRect = New-Object System.Drawing.Rectangle 0, 0, $nw, $nh
    $g.DrawImage($srcBmp, $destRect, $crop.X, $crop.Y, $cw, $ch, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $dest = Join-Path $destDir "$name.jpg"
    $enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $ep = New-Object System.Drawing.Imaging.EncoderParameters 1
    $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), ([long]$quality)
    $bmp.Save($dest, $enc, $ep)
    $result = [ordered]@{ w = $nw; h = $nh; kb = [math]::Round((Get-Item $dest).Length / 1KB) }
    $bmp.Dispose()
    return $result
}

# A tiny (~24px) blurry JPEG as a base64 data URL, for the blur-up placeholder
# shown while the real photo loads.
function Get-BlurDataUrl($srcBmp, $crop) {
    $cw = $crop.Width; $ch = $crop.Height
    $scale = 24.0 / [Math]::Max($cw, $ch)
    $nw = [Math]::Max(1, [int]($cw * $scale)); $nh = [Math]::Max(1, [int]($ch * $scale))
    $bmp = New-Object System.Drawing.Bitmap $nw, $nh
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($srcBmp, (New-Object System.Drawing.Rectangle 0, 0, $nw, $nh), $crop.X, $crop.Y, $cw, $ch, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $ep = New-Object System.Drawing.Imaging.EncoderParameters 1
    $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), ([long]40)
    $ms = New-Object System.IO.MemoryStream
    $bmp.Save($ms, $enc, $ep)
    $bmp.Dispose()
    $b64 = [Convert]::ToBase64String($ms.ToArray())
    $ms.Dispose()
    return "data:image/jpeg;base64,$b64"
}

function Slug($s) { ($s -replace '[^A-Za-z0-9]+', '-').Trim('-').ToLower() }

$manifest = @()
Get-ChildItem $photosRoot -Directory | Where-Object { $_.Name -notin @('web', 'thumb') } | ForEach-Object {
    $country = $_.Name
    $countrySlug = Slug $country
    Write-Output "== $country =="
    Get-ChildItem $_.FullName -File | Where-Object { $_.Extension -match '\.(jpg|jpeg|png)$' } | ForEach-Object {
        $name = "$countrySlug-$(Slug ([System.IO.Path]::GetFileNameWithoutExtension($_.Name)))"
        try {
            $img = [System.Drawing.Image]::FromFile($_.FullName)
            $orient = Get-OrientationSafe $img
            $bmp = New-Object System.Drawing.Bitmap $img
            $img.Dispose()
            switch ($orient) {
                3 { $bmp.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
                6 { $bmp.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
                8 { $bmp.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
            }
            $crop = Get-BorderCrop $bmp
            $full = Save-Resized $bmp $crop 2400 $outFull 82 $name
            $thumb = Save-Resized $bmp $crop 1000 $outThumb 78 $name
            $blur = Get-BlurDataUrl $bmp $crop
            $bmp.Dispose()
            $manifest += [ordered]@{ file = $name; country = $country; source = $_.Name; w = $thumb.w; h = $thumb.h; blur = $blur }
            Write-Output ("  {0}  ({1}KB)  {2}x{3}" -f $name, $full.kb, $thumb.w, $thumb.h)
        } catch {
            Write-Output "  FAILED $($_.Name): $_"
        }
    }
}

# plain UTF-8, no byte-order mark (the JSON loader rejects a BOM)
$utf8 = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText((Join-Path $PSScriptRoot "photos-manifest.json"), ($manifest | ConvertTo-Json), $utf8)

# A { "<file>": [w, h, blurDataUrl] } map the website reads to lay photos out at
# their real shape and show a blur-up placeholder while they load.
$sizes = [ordered]@{}
foreach ($m in $manifest) { $sizes[$m.file] = @($m.w, $m.h, $m.blur) }
$sizesPath = Join-Path $PSScriptRoot "..\src\app\_data\photo-sizes.json"
[System.IO.File]::WriteAllText($sizesPath, ($sizes | ConvertTo-Json), $utf8)

Write-Output ""
Write-Output "$($manifest.Count) photos processed."
Write-Output "  scripts/photos-manifest.json"
Write-Output "  src/app/_data/photo-sizes.json"
