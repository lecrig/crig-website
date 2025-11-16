# Script de synchronisation des repositories
# Push vers le repository personnel et le repository du club

Write-Host "Pushing to personal repository (origin)..." -ForegroundColor Cyan
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Successfully pushed to personal repository" -ForegroundColor Green
    Write-Host "`nPushing to club repository (club)..." -ForegroundColor Cyan
    git push club main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Successfully pushed to club repository" -ForegroundColor Green
        Write-Host "`n✓ Both repositories are now synchronized!" -ForegroundColor Green
    } else {
        Write-Host "✗ Failed to push to club repository. Check your permissions." -ForegroundColor Red
    }
} else {
    Write-Host "✗ Failed to push to personal repository." -ForegroundColor Red
}


