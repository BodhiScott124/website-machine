# Makes web-friendly copies of every photo in public/photos.
#   public/photos/web/<name>.jpg    — large version (max 2400px), used for the hero
#   public/photos/thumb/<name>.jpg  — smaller version (max 1000px), used in the gallery grid
#
# Run it after adding new photos to public/photos:
#   powershell -ExecutionPolicy Bypass -File scripts/resize-photos.ps1
#
# Uses .NET System.Drawing, which is built into Windows — no extra installs.

Add-Type -AssemblyName System.Drawing
$src = Join-Path $PSScriptRoot "..\public\photos" | Resolve-Path
$outFull = Join-Path $src "web"
$outThumb = Join-Path $src "thumb"
New-Item -ItemType Directory -Force -Path $outFull, $outThumb | Out-Null

function Get-OrientationSafe($img) {
    try {
        if ($img.PropertyIdList -contains 0x0112) {
            return [int]($img.GetPropertyItem(0x0112).Value[0])
        }
    } catch {}
    return 1
}

function Save-Resized($path, $maxEdge, $destDir, $quality) {
    $img = [System.Drawing.Image]::FromFile($path)
    try {
        $orient = Get-OrientationSafe $img
        $w = $img.Width; $h = $img.Height
        $scale = [Math]::Min(1.0, $maxEdge / [Math]::Max($w, $h))
        $nw = [int]($w * $scale); $nh = [int]($h * $scale)
        $bmp = New-Object System.Drawing.Bitmap $nw, $nh
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $g.DrawImage($img, 0, 0, $nw, $nh)
        $g.Dispose()
        switch ($orient) {
            3 { $bmp.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
            6 { $bmp.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
            8 { $bmp.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
        }
        $base = [System.IO.Path]::GetFileNameWithoutExtension($path)
        $safe = ($base -replace '[^A-Za-z0-9]+', '-').Trim('-').ToLower()
        $dest = Join-Path $destDir "$safe.jpg"
        $enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
        $ep = New-Object System.Drawing.Imaging.EncoderParameters 1
        $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), ([long]$quality)
        $bmp.Save($dest, $enc, $ep)
        $bmp.Dispose()
        Write-Output ("  {0}  {1}x{2}  {3}KB" -f "$safe.jpg", $nw, $nh, [math]::Round((Get-Item $dest).Length / 1KB))
    } finally { $img.Dispose() }
}

Get-ChildItem $src -File | Where-Object { $_.Extension -match '\.(jpg|jpeg|png)$' } | ForEach-Object {
    Write-Output $_.Name
    try {
        Save-Resized $_.FullName 2400 $outFull 82
        Save-Resized $_.FullName 1000 $outThumb 78
    } catch { Write-Output "  FAILED: $_" }
}
