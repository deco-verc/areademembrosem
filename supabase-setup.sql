-- ============================================
-- SCRIPT DE CONFIGURAÇÃO DO SUPABASE
-- Programa de Emagrecimento - Área de Membros
-- ============================================

-- 1. CRIAR TABELA DE USUÁRIOS
-- ============================================

CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Comentários das colunas
COMMENT ON TABLE users IS 'Tabela de usuários com acesso à área de membros';
COMMENT ON COLUMN users.id IS 'ID único do usuário (UUID)';
COMMENT ON COLUMN users.email IS 'Email do usuário (único, usado para login)';
COMMENT ON COLUMN users.name IS 'Nome completo do usuário';
COMMENT ON COLUMN users.status IS 'Status do acesso (active/inactive)';
COMMENT ON COLUMN users.created_at IS 'Data de criação do registro';


-- 2. CRIAR ÍNDICES PARA PERFORMANCE
-- ============================================

-- Índice para busca rápida por email (usado no login)
CREATE INDEX idx_users_email ON users(email);

-- Índice para filtrar por status
CREATE INDEX idx_users_status ON users(status);

-- Índice para ordenar por data de criação
CREATE INDEX idx_users_created_at ON users(created_at DESC);


-- 3. HABILITAR ROW LEVEL SECURITY (RLS)
-- ============================================

ALTER TABLE users ENABLE ROW LEVEL SECURITY;


-- 4. CRIAR POLÍTICAS DE SEGURANÇA
-- ============================================

-- Política: Permitir leitura para todos (necessário para login)
CREATE POLICY "Enable read access for all users" ON users
  FOR SELECT USING (true);

-- Política: Permitir insert via service role (webhook)
CREATE POLICY "Enable insert for service role" ON users
  FOR INSERT WITH CHECK (true);

-- Política: Permitir update via service role (webhook)
CREATE POLICY "Enable update for service role" ON users
  FOR UPDATE USING (true);


-- 5. INSERIR USUÁRIO DE TESTE
-- ============================================

INSERT INTO users (email, name, status)
VALUES ('teste@teste.com', 'Usuário Teste', 'active')
ON CONFLICT (email) DO NOTHING;


-- 6. VERIFICAR SE FUNCIONOU
-- ============================================

-- Listar todos os usuários
SELECT * FROM users;

-- Contar usuários ativos
SELECT COUNT(*) as total_usuarios_ativos 
FROM users 
WHERE status = 'active';


-- ============================================
-- QUERIES ÚTEIS PARA ADMINISTRAÇÃO
-- ============================================

-- Ver todos os usuários cadastrados hoje
SELECT * FROM users 
WHERE created_at::date = CURRENT_DATE
ORDER BY created_at DESC;

-- Desativar um usuário
-- UPDATE users SET status = 'inactive' WHERE email = 'email@exemplo.com';

-- Reativar um usuário
-- UPDATE users SET status = 'active' WHERE email = 'email@exemplo.com';

-- Deletar um usuário (cuidado!)
-- DELETE FROM users WHERE email = 'email@exemplo.com';

-- Ver estatísticas
SELECT 
  status,
  COUNT(*) as total,
  MIN(created_at) as primeiro_usuario,
  MAX(created_at) as ultimo_usuario
FROM users
GROUP BY status;
