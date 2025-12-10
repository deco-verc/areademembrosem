# ✅ Checklist de Configuração

Use este checklist para garantir que tudo está configurado corretamente.

---

## 📊 PARTE 1: Supabase

### 1.1 Criar Conta e Projeto
- [ ] Acessei https://supabase.com
- [ ] Criei uma conta
- [ ] Criei um novo projeto
- [ ] Anotei a senha do banco de dados
- [ ] Aguardei o projeto ser criado (2-3 min)

### 1.2 Configurar Banco de Dados
- [ ] Abri o SQL Editor no Supabase
- [ ] Copiei o conteúdo do arquivo `supabase-setup.sql`
- [ ] Executei o script SQL (Run)
- [ ] Vi a mensagem de sucesso
- [ ] Verifiquei que a tabela `users` foi criada (Table Editor)

### 1.3 Obter Credenciais
- [ ] Fui em Settings → API
- [ ] Copiei a **Project URL**
- [ ] Copiei a **anon/public key**

### 1.4 Configurar no Aplicativo
- [ ] Criei o arquivo `.env.local` na raiz do projeto
- [ ] Adicionei `NEXT_PUBLIC_SUPABASE_URL=...`
- [ ] Adicionei `NEXT_PUBLIC_SUPABASE_ANON_KEY=...`
- [ ] Salvei o arquivo

### 1.5 Testar Conexão
- [ ] Reiniciei o servidor (`Ctrl+C` → `npm run dev`)
- [ ] Acessei http://localhost:3000/login
- [ ] Não vi erros no console (F12)
- [ ] Consegui fazer login com `teste@teste.com`
- [ ] Fui redirecionado para o dashboard

---

## 💳 PARTE 2: GGCheckout

### 2.1 Preparar Deploy
Escolha UMA das opções:

#### Opção A: Vercel (Produção - Recomendado)
- [ ] Criei conta no Vercel (https://vercel.com)
- [ ] Conectei com GitHub
- [ ] Fiz push do código para GitHub
- [ ] Importei o projeto no Vercel
- [ ] Configurei as variáveis de ambiente
- [ ] Fiz o deploy
- [ ] Anotei a URL: `https://__________.vercel.app`

#### Opção B: Ngrok (Teste Local)
- [ ] Instalei o ngrok (`winget install ngrok`)
- [ ] Executei `ngrok http 3000`
- [ ] Anotei a URL: `https://__________.ngrok.io`

### 2.2 Configurar Webhook
- [ ] Acessei o painel do GGCheckout
- [ ] Fui na seção de Webhooks
- [ ] Cliquei em "Adicionar Webhook"
- [ ] Configurei a URL: `https://minha-url/api/webhook/ggcheckout`
- [ ] Selecionei os eventos: `pix.paid`, `card.paid`
- [ ] Salvei a configuração

### 2.3 Testar Webhook

#### Teste Manual (Local)
- [ ] Executei o script: `.\test-webhook.ps1`
- [ ] Vi a mensagem de sucesso
- [ ] Verifiquei no Supabase que o usuário foi criado
- [ ] Consegui fazer login com o email de teste

#### Teste Real (Produção)
- [ ] Criei um produto de teste no GGCheckout
- [ ] Fiz uma compra de teste
- [ ] Aguardei o pagamento ser confirmado
- [ ] Verifiquei no Supabase que o usuário foi criado
- [ ] Consegui fazer login com o email da compra

---

## 🔍 PARTE 3: Verificação Final

### 3.1 Fluxo Completo
- [ ] Cliente faz compra no GGCheckout
- [ ] Webhook é disparado automaticamente
- [ ] Usuário é criado no Supabase
- [ ] Cliente recebe email de boas-vindas (opcional)
- [ ] Cliente acessa a área de membros
- [ ] Cliente vê as receitas e guias

### 3.2 Testes de Segurança
- [ ] Tentei acessar `/dashboard` sem login → fui redirecionado
- [ ] Tentei fazer login com email inexistente → vi mensagem de erro
- [ ] Verifiquei que senhas não são necessárias (email-only)

### 3.3 Performance
- [ ] A página de login carrega em < 2 segundos
- [ ] O dashboard carrega em < 3 segundos
- [ ] As animações estão suaves
- [ ] O design está responsivo (testei no mobile)

---

## 📱 PARTE 4: Personalização (Opcional)

### 4.1 Conteúdo
- [ ] Substituí as receitas de exemplo por receitas reais
- [ ] Adicionei mais categorias se necessário
- [ ] Atualizei os textos e descrições

### 4.2 Design
- [ ] Personalizei as cores no `globals.css`
- [ ] Adicionei logo da marca
- [ ] Ajustei fontes se necessário

### 4.3 Funcionalidades Extras
- [ ] Configurei envio de email de boas-vindas
- [ ] Adicionei Google Analytics
- [ ] Configurei domínio customizado
- [ ] Adicionei upload de PDFs (Supabase Storage)

---

## 🎯 Status Geral

Marque quando TUDO estiver funcionando:

- [ ] ✅ Supabase 100% configurado
- [ ] ✅ GGCheckout 100% integrado
- [ ] ✅ Webhook testado e funcionando
- [ ] ✅ Login testado e funcionando
- [ ] ✅ Dashboard exibindo conteúdo
- [ ] ✅ Aplicativo em produção

---

## 🆘 Problemas Comuns

Se algo não funcionar, consulte:

1. **[guia_conexao.md](file:///C:/Users/aldxm/.gemini/antigravity/brain/0be79f76-a5b4-46f4-b4c6-c55e50f4bc10/guia_conexao.md)** - Guia completo passo a passo
2. **[README.md](file:///c:/Users/aldxm/Documents/Emagrecimento/Entregavel/app/README.md)** - Documentação técnica
3. **Console do navegador** (F12) - Ver erros JavaScript
4. **Logs do Supabase** - Ver erros de banco de dados
5. **Logs do Vercel** - Ver erros do servidor

---

## 📞 Próximos Passos

Depois de tudo configurado:

1. [ ] Fazer backup do banco de dados
2. [ ] Documentar o processo para a equipe
3. [ ] Criar materiais de suporte para clientes
4. [ ] Monitorar os primeiros usuários
5. [ ] Coletar feedback e melhorar

---

**Data de conclusão**: ___/___/______

**Configurado por**: _________________

**Notas adicionais**:
_________________________________________________
_________________________________________________
_________________________________________________
