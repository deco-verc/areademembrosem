# 📚 Sistema de Receitas - Guia de Expansão

## 🎯 Status Atual
- ✅ **22 receitas** implementadas e funcionais
- ✅ Sistema completo de categorização
- ✅ Filtros e busca implementados
- ✅ Páginas individuais de receitas
- ✅ 5 bônus exclusivos

## 📝 Como Expandir para 200+ Receitas

### Método 1: Copiar e Adaptar (Recomendado)
1. Abra `src/data/recipes.ts`
2. Copie uma receita existente
3. Modifique:
   - `id`: Incremente o número (ex: `cafe-51`)
   - `title`: Novo nome da receita
   - `ingredients`: Lista de ingredientes
   - `instructions`: Passo a passo
   - `macros`: Valores nutricionais
4. Cole no array `recipes`

### Método 2: Usar o Arquivo de Receitas Adicionais
1. Abra `src/data/additional-recipes.js`
2. Copie as receitas prontas
3. Cole em `src/data/recipes.ts`
4. Continue adicionando seguindo o padrão

## 🍳 Distribuição Sugerida de Receitas

### Café da Manhã (50 receitas)
- Panquecas e crepes (10)
- Smoothies e vitaminas (10)
- Ovos (omeletes, mexidos, cozidos) (10)
- Mingaus e pudins (10)
- Pães e bolos fit (10)

### Almoço (60 receitas)
- Carnes brancas (frango, peru) (15)
- Peixes e frutos do mar (15)
- Saladas completas (15)
- Pratos vegetarianos (15)

### Jantar (60 receitas)
- Sopas e cremes (20)
- Pratos leves com proteína (20)
- Saladas e wraps (20)

### Lanches (30 receitas)
- Snacks assados (10)
- Pastas e patês (10)
- Bolinhos e energy balls (10)

## 💡 Ideias de Receitas para Adicionar

### Café da Manhã
- Waffle proteico
- Overnight oats
- Crepe de espinafre
- Vitamina de frutas vermelhas
- Pão de queijo de frigideira
- Omelete de forno
- Mingau de quinoa
- Pudim de tapioca
- Smoothie bowl
- Torrada de abacate

### Almoço
- Frango ao curry
- Tilápia grelhada
- Bowl de salmão
- Risoto de couve-flor
- Lasanha de berinjela
- Wrap de frango
- Salada grega
- Poke bowl
- Frango xadrez
- Camarão grelhado

### Jantar
- Sopa de lentilha
- Caldo verde
- Salada caprese
- Omelete de legumes
- Creme de brócolis
- Sopa de tomate
- Salada de atum
- Wrap de vegetais
- Sopa de abóbora
- Creme de espinafre

### Lanches
- Guacamole
- Baba ganoush
- Palitos de vegetais
- Cookies de aveia
- Brownie fit
- Pipoca temperada
- Mix de nuts
- Iogurte com granola
- Queijo branco com ervas
- Rolinho de peito de peru

## 🎨 Gerando Imagens para as Receitas

Você pode usar a ferramenta `generate_image` para criar imagens realistas:

```typescript
// Exemplo de prompt
"Foto profissional de um prato de omelete de claras com espinafre, 
em um prato branco, iluminação natural, estilo food photography, 
alta qualidade, fundo desfocado"
```

## 📊 Calculando Macronutrientes

Use estas referências aproximadas (por 100g):

**Proteínas:**
- Frango: 165 kcal, 31g proteína
- Ovo: 155 kcal, 13g proteína
- Peixe branco: 110 kcal, 24g proteína
- Iogurte grego: 60 kcal, 10g proteína

**Carboidratos:**
- Batata doce: 86 kcal, 20g carbs
- Aveia: 389 kcal, 66g carbs
- Banana: 89 kcal, 23g carbs
- Arroz integral: 111 kcal, 23g carbs

**Gorduras Saudáveis:**
- Abacate: 160 kcal, 15g gordura
- Azeite: 884 kcal, 100g gordura
- Castanhas: 654 kcal, 54g gordura

## ✅ Checklist de Qualidade

Antes de adicionar uma receita, verifique:
- [ ] ID único e sequencial
- [ ] Categoria correta
- [ ] Tempo realista de preparo
- [ ] Ingredientes claros e mensuráveis
- [ ] Instruções passo a passo
- [ ] Macros calculados
- [ ] Descrição atrativa

## 🚀 Próximos Passos

1. **Expandir receitas** usando os métodos acima
2. **Gerar imagens** para cada receita
3. **Testar localmente** com `npm run dev`
4. **Fazer commit** das alterações
5. **Deploy** na Vercel

## 💬 Dicas

- Mantenha as receitas **simples e práticas**
- Use **ingredientes acessíveis**
- Varie as **fontes de proteína**
- Inclua opções **vegetarianas**
- Pense em **praticidade** (meal prep, congelamento)
- Adicione **variações** de receitas populares

---

**Lembre-se:** A qualidade é mais importante que a quantidade. 
É melhor ter 50 receitas excelentes do que 200 medianas!
