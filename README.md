# 🏋️ Programa de Emagrecimento - Área de Membros

Aplicativo web completo com integração Supabase e GGCheckout para gerenciamento de membros e acesso a conteúdo exclusivo.

## 🚀 Funcionalidades

- ✅ **Login por Email** - Autenticação simples e segura
- 📚 **200+ Receitas** - Organizadas por categoria (Café da Manhã, Almoço, Jantar, Bebidas, Sobremesas)
- 📖 **Guias Exclusivos** - Bônus e materiais complementares
- 🎨 **Design Premium** - Interface moderna com glassmorphism e animações suaves
- 🔄 **Webhook GGCheckout** - Integração automática para liberação de acesso
- 💾 **Supabase** - Banco de dados em tempo real

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Conta no Supabase
- Conta no GGCheckout

## 🛠️ Configuração

### 1. Configurar Supabase

1. Acesse [supabase.com](https://supabase.com) e crie um novo projeto
2. No SQL Editor, execute o seguinte comando para criar a tabela de usuários:

```sql
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Criar índice para busca rápida por email
CREATE INDEX idx_users_email ON users(email);
```

3. Copie as credenciais do projeto:
   - Vá em **Settings** → **API**
   - Copie a **URL** e a **anon/public key**

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
```

### 3. Instalar Dependências

```bash
npm install
```

### 4. Executar em Desenvolvimento

```bash
npm run dev
```

Acesse: `http://localhost:3000`

## 🔗 Configurar Webhook GGCheckout

1. No painel do GGCheckout, configure o webhook para apontar para:
   ```
   https://seu-dominio.com/api/webhook/ggcheckout
   ```

2. Selecione os eventos:
   - `pix.paid`
   - `card.paid`

3. O webhook irá automaticamente:
   - Receber o evento de pagamento
   - Extrair o email do cliente
   - Criar/atualizar o usuário no banco de dados
   - Liberar acesso à área de membros

### Exemplo de Payload do Webhook

```json
{
  "event": "pix.paid",
  "customer": {
    "name": "João Silva",
    "email": "joao@email.com"
  },
  "payment": {
    "status": "paid",
    "amount": 9700
  }
}
```

## 📱 Estrutura do Projeto

```
app/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   └── login/
│   │   │   │       └── route.ts          # API de login
│   │   │   └── webhook/
│   │   │       └── ggcheckout/
│   │   │           └── route.ts          # Webhook GGCheckout
│   │   ├── dashboard/
│   │   │   ├── page.tsx                  # Área de membros
│   │   │   └── dashboard.module.css
│   │   ├── login/
│   │   │   ├── page.tsx                  # Página de login
│   │   │   └── login.module.css
│   │   ├── globals.css                   # Estilos globais
│   │   ├── layout.tsx                    # Layout principal
│   │   └── page.tsx                      # Página inicial (redireciona)
│   └── lib/
│       └── supabase.ts                   # Cliente Supabase
└── ENV_SETUP.md                          # Este arquivo
```

## 🎨 Design System

O projeto utiliza um design system premium com:

- **Cores**: Paleta HSL customizada com gradientes vibrantes
- **Tipografia**: Inter (Google Fonts)
- **Efeitos**: Glassmorphism, sombras suaves, animações
- **Tema**: Dark mode por padrão
- **Responsivo**: Mobile-first

## 🧪 Testar Localmente

### 1. Testar Webhook (usando curl ou Postman)

```bash
curl -X POST http://localhost:3000/api/webhook/ggcheckout \
  -H "Content-Type: application/json" \
  -d '{
    "event": "pix.paid",
    "customer": {
      "name": "Teste",
      "email": "teste@teste.com"
    },
    "payment": {
      "status": "paid",
      "amount": 9700
    }
  }'
```

### 2. Fazer Login

1. Acesse `http://localhost:3000/login`
2. Digite o email: `teste@teste.com`
3. Clique em "Acessar Área de Membros"

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub
2. Conecte o repositório no [Vercel](https://vercel.com)
3. Configure as variáveis de ambiente
4. Deploy automático!

### Outras Plataformas

O projeto é compatível com qualquer plataforma que suporte Next.js:
- Netlify
- Railway
- Render
- AWS Amplify

## 📝 Próximos Passos

- [ ] Adicionar páginas individuais de receitas
- [ ] Implementar sistema de favoritos
- [ ] Adicionar busca e filtros avançados
- [ ] Upload de PDFs para os guias
- [ ] Sistema de progresso do usuário
- [ ] Notificações por email

## 🆘 Suporte

Para dúvidas ou problemas:
1. Verifique os logs do console
2. Confirme que as variáveis de ambiente estão corretas
3. Teste a conexão com o Supabase

## 📄 Licença

Projeto privado - Todos os direitos reservados
