# Netlify deployment script
# Usage: Set $env:NETLIFY_TOKEN and run this script
# Or: ./deploy-to-netlify.ps1 -Token "your-token-here"

param(
    [string]$Token = $env:NETLIFY_TOKEN,
    [string]$SiteId = "coachify112"
)

if (-not $Token) {
    Write-Error "NETLIFY_TOKEN not set. Set it via: `$env:NETLIFY_TOKEN = 'your-token'"
    exit 1
}

$headers = @{
    "Authorization" = "Bearer $Token"
    "Content-Type" = "application/json"
}

Write-Host "Triggering build for site: $SiteId"

try {
    $response = Invoke-RestMethod -Uri "https://api.netlify.com/api/v1/sites/$SiteId/builds" `
        -Method POST `
        -Headers $headers

    Write-Host "Deploy triggered successfully!"
    Write-Host "Build ID: $($response.id)"
    Write-Host "Deploy URL: https://app.netlify.com/sites/$SiteId/deploys/$($response.id)"
    Write-Host ""
    Write-Host "Monitoring build status (checking every 5 seconds)..."
    
    $maxAttempts = 120
    $attempt = 0
    
    do {
        Start-Sleep -Seconds 5
        $attempt++
        
        $status = Invoke-RestMethod -Uri "https://api.netlify.com/api/v1/builds/$($response.id)" `
            -Method GET `
            -Headers $headers
        
        Write-Host "Build status: $($status.state) (attempt $attempt/$maxAttempts)"
        
        if ($status.state -eq "built") {
            Write-Host "✓ Build completed successfully!"
            Write-Host "Live URL: https://$SiteId.netlify.app"
            exit 0
        }
        elseif ($status.state -eq "error") {
            Write-Error "Build failed!"
            Write-Host "Error: $($status.error_message)"
            exit 1
        }
        
    } while ($attempt -lt $maxAttempts)
    
    Write-Error "Build timeout after 10 minutes"
    exit 1
}
catch {
    Write-Error "API error: $($_.Exception.Message)"
    exit 1
}
