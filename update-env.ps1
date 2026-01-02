# Script to update backend/.env with Docker PostgreSQL connection
$envFile = "backend\.env"

if (Test-Path $envFile) {
    Write-Host "Updating $envFile..." -ForegroundColor Cyan
    
    # Read current content
    $content = Get-Content $envFile -Raw
    
    # Replace DATABASE_URL line
    $newDatabaseUrl = 'DATABASE_URL="postgresql://postgres:postgres123@localhost:5433/dairy_erp?schema=public"'
    
    if ($content -match 'DATABASE_URL\s*=') {
        $content = $content -replace 'DATABASE_URL\s*=.*', $newDatabaseUrl
        Write-Host "✅ Updated DATABASE_URL" -ForegroundColor Green
    } else {
        # Add if doesn't exist
        $content += "`n$newDatabaseUrl`n"
        Write-Host "✅ Added DATABASE_URL" -ForegroundColor Green
    }
    
    # Write back
    Set-Content -Path $envFile -Value $content -NoNewline
    Write-Host "✅ File updated successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next: Run 'cd backend && npm run prisma:migrate && npm run prisma:seed'" -ForegroundColor Yellow
} else {
    Write-Host "❌ File not found: $envFile" -ForegroundColor Red
    Write-Host "Creating new .env file..." -ForegroundColor Yellow
    
    $newContent = @"
DATABASE_URL="postgresql://postgres:postgres123@localhost:5433/dairy_erp?schema=public"
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
JWT_EXPIRES_IN="7d"
PORT=5000
NODE_ENV=development
CORS_ORIGIN="http://localhost:5173"
"@
    
    New-Item -Path $envFile -ItemType File -Value $newContent -Force | Out-Null
    Write-Host "✅ Created new .env file!" -ForegroundColor Green
}


