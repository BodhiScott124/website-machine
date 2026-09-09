# Builds the social-share images (the picture that shows when the link is
# pasted into a message).
#
#   public/og.jpg            <- from knowledge.heroPhoto (the whole site)
#   public/og/<country>.jpg  <- from each country's `cover` photo
#
# Each is a 1200x630 crop of the web-size photo. Run after changing the hero or
# a country cover in knowledge.json:
#   powershell -ExecutionPolicy Bypass -File scripts/make-og-images.ps1

Add-Type -AssemblyName System.Drawing
$root = Join-Path $PSScriptRoot ".." | Resolve-Path
$web = Join-Path $root "public\photos\web"
$knowledge = Get-Content (Join-Path $root "src\app\_data\knowledge.json") -Raw | ConvertFrom-Json

function Save-Og($sourceFile, $destPath) {
    $src = Join-Path $web "$sourceFile.jpg"
    if (-not (Test-Path $src)) { Write-Output "  missing: $sourceFile"; return }
    $tw = 1200; $th = 630
    $img = [System.Drawing.Image]::FromFile($src)
    $scale = [Math]::Max($tw / $img.Width, $th / $img.Height)
    $sw = $tw / $scale; $sh = $th / $scale
    $sx = ($img.Width - $sw) / 2; $sy = ($img.Height - $sh) / 2
    $bmp = New-Object System.Drawing.Bitmap $tw, $th
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.DrawImage($img, (New-Object System.Drawing.Rectangle 0, 0, $tw, $th), $sx, $sy, $sw, $sh, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $ep = New-Object System.Drawing.Imaging.EncoderParameters 1
    $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), ([long]85)
    New-Item -ItemType Directory -Force -Path (Split-Path $destPath) | Out-Null
    $bmp.Save($destPath, $enc, $ep)
    $bmp.Dispose(); $img.Dispose()
    Write-Output ("  {0}  ({1}KB)" -f (Split-Path $destPath -Leaf), [math]::Round((Get-Item $destPath).Length / 1KB))
}

Save-Og $knowledge.ogPhoto (Join-Path $root "public\og.jpg")

foreach ($country in $knowledge.countries) {
    $cover = $knowledge.photos | Where-Object { $_.country -eq $country.name -and $_.cover } | Select-Object -First 1
    if (-not $cover) { $cover = $knowledge.photos | Where-Object { $_.country -eq $country.name } | Select-Object -First 1 }
    if ($cover) { Save-Og $cover.file (Join-Path $root "public\og\$($country.slug).jpg") }
}
