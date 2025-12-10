Write-Host "🧪 Testando Webhook GGCheckout..." -ForegroundColor Cyan
Write-Host ""

$webhookUrl = "http://localhost:3000/api/webhook/ggcheckout"

$payload = @{
    event    = "pix.paid"
    customer = @{
        name  = "Cliente Teste"
        email = "teste@teste.com"
    }
    payment  = @{
        status = "paid"
        amount = 9700
    }
} | ConvertTo-Json

Write-Host "📤 Enviando payload..." -ForegroundColor Yellow

try {
    $response = Invoke-RestMethod -Uri $webhookUrl -Method Post -Body $payload -ContentType "application/json"
    Write-Host "✅ Sucesso!" -ForegroundColor Green
    Write-Host ($response | ConvertTo-Json)
}
catch {
    Write-Host "❌ Erro: $($_.Exception.Message)" -ForegroundColor Red
}
