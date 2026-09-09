# Draws the site icon (a little camera, white on near-black) and writes both
#   src/app/icon.png    (512px, the main icon)
#   src/app/favicon.ico (64px, for browsers that ask for /favicon.ico)
#
# Run if you want to change the icon:
#   powershell -ExecutionPolicy Bypass -File scripts/make-favicon.ps1

Add-Type -AssemblyName System.Drawing

$bg = [System.Drawing.ColorTranslator]::FromHtml("#17171A")
$fg = [System.Drawing.ColorTranslator]::FromHtml("#FAF9F7")

function New-RoundedRect([single]$x, [single]$y, [single]$w, [single]$h, [single]$r) {
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $d = $r * 2
    $path.AddArc($x, $y, $d, $d, 180, 90)
    $path.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
    $path.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
    $path.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
    $path.CloseFigure()
    return $path
}

function New-CameraBitmap([int]$size) {
    $s = [single]$size
    $bmp = New-Object System.Drawing.Bitmap $size, $size
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.Clear($bg)
    $fgBrush = New-Object System.Drawing.SolidBrush $fg
    $bgBrush = New-Object System.Drawing.SolidBrush $bg

    $g.FillPath($fgBrush, (New-RoundedRect ($s * 0.30) ($s * 0.21) ($s * 0.22) ($s * 0.10) ($s * 0.03)))  # viewfinder hump
    $g.FillPath($fgBrush, (New-RoundedRect ($s * 0.15) ($s * 0.29) ($s * 0.70) ($s * 0.50) ($s * 0.075))) # body
    $lr = $s * 0.185
    $g.FillEllipse($bgBrush, ($s * 0.5 - $lr), ($s * 0.545 - $lr), ($lr * 2), ($lr * 2))                  # lens opening
    $gr = $s * 0.085
    $g.FillEllipse($fgBrush, ($s * 0.5 - $gr), ($s * 0.545 - $gr), ($gr * 2), ($gr * 2))                  # lens glass
    $g.FillEllipse($bgBrush, ($s * 0.70), ($s * 0.335), ($s * 0.055), ($s * 0.055))                       # shutter button

    $g.Dispose()
    return $bmp
}

$appDir = Join-Path $PSScriptRoot "..\src\app"

$png = New-CameraBitmap 512
$png.Save((Join-Path $appDir "icon.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$png.Dispose()

$ico = New-CameraBitmap 64
$icon = [System.Drawing.Icon]::FromHandle($ico.GetHicon())
$fs = [System.IO.File]::Create((Join-Path $appDir "favicon.ico"))
$icon.Save($fs)
$fs.Close()
$icon.Dispose(); $ico.Dispose()

Write-Output "wrote src/app/icon.png + src/app/favicon.ico"
