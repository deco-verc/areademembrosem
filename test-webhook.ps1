# Script para testar o webhook do GGCheckout localmente
# Execute: .\test-webhook.ps1

Write-Host "🧪 Testando Webhook GGCheckout..." -ForegroundColor Cyan
Write-Host ""

# URL do webhook (altere se necessário)
$webhookUrl = "http://localhost:3000/api/webhook/ggcheckout"

# Payload de teste
$payload = @{
    event = "pix.paid"
    createdAt = @{
        _seconds = 1754393130
        _nanoseconds = 582000000
    }
    customer = @{
        name = "Cliente Teste"
        email = "teste@teste.com"
        document = $null
        phone = $null
        ip = "::1"
    }
    payment = @{
        id = "9f8fa5ee-b346-43ec-a032-ca2e504f6485"
        method = "pix.paid"
        status = "paid"
        amount = 9700
    }
    product = @{
        id = "8g6ug9Vr7zlmU2zx0prp"
        type = "main"
    }
    products = @(
        @{
            id = "8g6ug9Vr7zlmU2zx0prp"
            type = "main"
        }
    )
    webhook = @{
        id = "ivKsQqxetJc1q8d2hfKt"
        businessId = "MYLKdEN3ppZ1GIrLZTns4PNSvc21"
        events = @("pix.paid", "card.paid")
    }
    src = $null
    sck = $null
    utm_source = $null
    utm_campaign = $null
    utm_medium = $null
    utm_content = $null
    utm_term = $null
    customerIp = "::1"
}

# Converter para JSON
$jsonPayload = $payload | ConvertTo-Json -Depth 10

Write-Host "📤 Enviando payload para: $webhookUrl" -ForegroundColor Yellow
Write-Host ""
Write-Host "Payload:" -ForegroundColor Gray
Write-Host $jsonPayload -ForegroundColor DarkGray
Write-Host ""

try {
    # Fazer a requisição
    $response = Invoke-RestMethod -Uri $webhookUrl `
        -Method Post `
        -Body $jsonPayload `
        -ContentType "application/json" `
        -ErrorAction Stop
    
    Write-Host "✅ Webhook executado com sucesso!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Resposta:" -ForegroundColor Gray
    Write-Host ($response | ConvertTo-Json -Depth 5) -ForegroundColor Green
    Write-Host ""
    Write-Host "🎉 Usuário criado/atualizado no banco de dados!" -ForegroundColor Cyan
    Write-Host "📧 Email: teste@teste.com" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Agora você pode fazer login em: http://localhost:3000/login" -ForegroundColor Yellow
    
} catch {
    Write-Host "❌ Erro ao executar webhook!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Detalhes do erro:" -ForegroundColor Gray
    Write-Host $_.Exception.Message -ForegroundColor Red
    Write-Host ""
    Write-Host "Possíveis causas:" -ForegroundColor Yellow
    Write-Host "  1. O servidor não está rodando (execute: npm run dev)" -ForegroundColor Gray
    Write-Host "  2. As variáveis de ambiente não estão configuradas" -ForegroundColor Gray
    Write-Host "  3. Erro de conexão com o Supabase" -ForegroundColor Gray
}

Write-Host ""
Write-Host "Pressione qualquer tecla para sair..." -ForegroundColor DarkGray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
