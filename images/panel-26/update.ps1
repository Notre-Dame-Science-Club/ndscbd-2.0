$folder = "X:\DEV\html\ndsc_website\ndscbd-2.0\images\panel-26"

Get-ChildItem -Path $folder -File | ForEach-Object {

    $base = $_.BaseName
    $ext = $_.Extension

    # Replace spaces with underscores
    $newName = $base -replace ' ', '_'

    # Remove numbers and symbols
    $newName = $newName -replace '[^a-zA-Z_]', ''

    # Prevent empty names
    if ([string]::IsNullOrWhiteSpace($newName)) {
        $newName = "file"
    }

    $finalName = "$newName$ext"
    $counter = 1

    # Handle duplicates
    while (Test-Path (Join-Path $folder $finalName)) {

        # Skip if same file
        if ($finalName -eq $_.Name) {
            break
        }

        $finalName = "${newName}_$counter$ext"
        $counter++
    }

    Write-Host "Renaming '$($_.Name)' -> '$finalName'"

    Rename-Item $_.FullName $finalName
}