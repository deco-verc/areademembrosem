export interface Recipe {
    id: string;
    title: string;
    category: 'cafe-da-manha' | 'almoco' | 'jantar' | 'lanche';
    time: string;
    servings: number;
    difficulty: 'fácil' | 'média' | 'difícil';
    image: string;
    description: string;
    ingredients: string[];
    instructions: string[];
    macros: {
        calories: number;
        protein: number;
        carbs: number;
        fat: number;
    };
}

// Generate 200+ recipes programmatically
export const recipes: Recipe[] = [
    // CAFÉ DA MANHÃ (60 receitas)
    ...Array.from({ length: 60 }, (_, i) => {
        const recipeTemplates = [
            {
                title: `Omelete ${['Proteica', 'de Claras', 'Completa', 'Light', 'Fitness'][i % 5]}`,
                description: 'Omelete nutritiva e saborosa para começar o dia com energia e saciedade.',
                ingredients: ['3 ovos (ou 4 claras)', '1/2 xícara de espinafre picado', '1 tomate picado', 'Sal e pimenta a gosto', '1 fio de azeite'],
                instructions: ['Bata os ovos em uma tigela', 'Aqueça a frigideira com azeite', 'Refogue os vegetais rapidamente', 'Adicione os ovos batidos', 'Cozinhe em fogo médio até firmar', 'Dobre e sirva quente'],
                macros: { calories: 180 + (i * 5), protein: 15 + (i % 5), carbs: 8 + (i % 3), fat: 10 + (i % 4) }
            },
            {
                title: `Panqueca de ${['Aveia', 'Banana', 'Proteína', 'Integral', 'Fit'][i % 5]}`,
                description: 'Panqueca saudável sem farinha refinada, perfeita para um café da manhã doce e nutritivo.',
                ingredients: ['2 colheres de sopa de aveia', '1 ovo', '1 banana madura amassada', 'Canela a gosto', '1 colher de chá de mel (opcional)'],
                instructions: ['Amasse a banana e misture com o ovo', 'Adicione a aveia e a canela', 'Misture bem até ficar homogêneo', 'Aqueça uma frigideira antiaderente', 'Despeje a massa e doure dos dois lados'],
                macros: { calories: 200 + (i * 4), protein: 12 + (i % 4), carbs: 28 + (i % 5), fat: 6 + (i % 3) }
            },
            {
                title: `Smoothie ${['Verde', 'Proteico', 'Detox', 'Energético', 'Tropical'][i % 5]}`,
                description: 'Vitamina refrescante e nutritiva, ideal para quem tem pressa mas não abre mão da saúde.',
                ingredients: ['1 xícara de frutas congeladas', '200ml de leite vegetal ou água de coco', '1 medida de proteína em pó (opcional)', 'Gelo a gosto', 'Sementes de chia'],
                instructions: ['Coloque todos os ingredientes no liquidificador', 'Bata até obter uma consistência cremosa', 'Adicione mais líquido se necessário', 'Sirva imediatamente em um copo alto'],
                macros: { calories: 160 + (i * 3), protein: 18 + (i % 6), carbs: 22 + (i % 4), fat: 4 + (i % 2) }
            },
            {
                title: `Bowl de ${['Açaí', 'Iogurte', 'Frutas', 'Granola', 'Proteína'][i % 5]}`,
                description: 'Bowl completo e energético, rico em antioxidantes e fibras.',
                ingredients: ['200g de base (açaí zero ou iogurte grego)', '1/2 banana fatiada', '2 morangos picados', '1 colher de sopa de granola sem açúcar', '1 fio de mel'],
                instructions: ['Coloque a base em uma tigela', 'Arrume as frutas por cima de forma decorativa', 'Polvilhe a granola', 'Finalize com o mel', 'Sirva imediatamente'],
                macros: { calories: 280 + (i * 6), protein: 20 + (i % 5), carbs: 38 + (i % 6), fat: 8 + (i % 3) }
            },
            {
                title: `Tapioca ${['Fit', 'Proteica', 'Recheada', 'Light', 'Completa'][i % 5]}`,
                description: 'Tapioca versátil e saudável, uma ótima fonte de energia livre de glúten.',
                ingredients: ['2 colheres de sopa de goma de tapioca', '1 ovo mexido ou frango desfiado', '1 fatia de queijo branco', 'Orégano a gosto', 'Tomate picado'],
                instructions: ['Peneire a goma em uma frigideira quente', 'Espalhe bem e deixe firmar', 'Vire a massa', 'Adicione o recheio na metade', 'Dobre ao meio e deixe o queijo derreter'],
                macros: { calories: 170 + (i * 4), protein: 14 + (i % 4), carbs: 24 + (i % 5), fat: 4 + (i % 2) }
            }
        ];

        const template = recipeTemplates[i % 5];
        return {
            id: `cafe-${i + 1}`,
            title: template.title,
            category: 'cafe-da-manha' as const,
            time: `${10 + (i % 20)} min`,
            servings: 1 + (i % 3),
            difficulty: (['fácil', 'média', 'fácil'][i % 3]) as 'fácil' | 'média',
            image: `https://image.pollinations.ai/prompt/${encodeURIComponent(template.title + ' food photography realistic 4k')}?width=800&height=600&nologo=true`,
            description: template.description,
            ingredients: template.ingredients,
            instructions: template.instructions,
            macros: template.macros
        };
    }),

    // ALMOÇO (70 receitas)
    ...Array.from({ length: 70 }, (_, i) => {
        const recipeTemplates = [
            {
                title: `Frango ${['Grelhado', 'Assado', 'ao Curry', 'com Legumes', 'Fit'][i % 5]}`,
                description: 'Prato proteico e saboroso, essencial para construção muscular e saciedade.',
                ingredients: ['150g de peito de frango', 'Suco de 1/2 limão', 'Alho e sal a gosto', 'Mix de legumes (brócolis, cenoura)', '1 colher de azeite'],
                instructions: ['Tempere o frango com limão, alho e sal', 'Deixe marinar por 15 minutos', 'Grelhe em frigideira quente com azeite', 'Refogue os legumes na mesma frigideira', 'Sirva o frango acompanhado dos legumes'],
                macros: { calories: 320 + (i * 5), protein: 38 + (i % 8), carbs: 12 + (i % 6), fat: 12 + (i % 5) }
            },
            {
                title: `Peixe ${['Grelhado', 'Assado', 'ao Molho', 'com Ervas', 'Light'][i % 5]}`,
                description: 'Peixe saudável rico em ômega-3, leve e de fácil digestão.',
                ingredients: ['1 filé de peixe branco ou salmão', 'Ervas finas (alecrim, tomilho)', 'Azeite de oliva', 'Sal e pimenta do reino', 'Aspargos ou vagem'],
                instructions: ['Tempere o peixe com sal, pimenta e ervas', 'Coloque em uma assadeira ou grelha', 'Adicione os vegetais ao lado', 'Regue com azeite', 'Asse/grelhe por 15-20 minutos até dourar'],
                macros: { calories: 280 + (i * 4), protein: 35 + (i % 7), carbs: 8 + (i % 4), fat: 10 + (i % 4) }
            },
            {
                title: `Salada ${['Completa', 'Proteica', 'Caesar', 'Mediterrânea', 'Tropical'][i % 5]}`,
                description: 'Salada nutritiva e refrescante, uma refeição completa em um prato só.',
                ingredients: ['Mix de folhas verdes (alface, rúcula)', '100g de proteína (frango, atum, ovo)', 'Tomate cereja e pepino', 'Sementes de girassol', 'Molho de iogurte e mostarda'],
                instructions: ['Lave e seque bem as folhas', 'Corte os vegetais e a proteína em cubos', 'Monte a salada em um prato fundo', 'Salpique as sementes', 'Regue com o molho na hora de servir'],
                macros: { calories: 250 + (i * 5), protein: 28 + (i % 6), carbs: 18 + (i % 5), fat: 8 + (i % 3) }
            },
            {
                title: `Bowl ${['de Quinoa', 'Proteico', 'Vegano', 'Completo', 'Fitness'][i % 5]}`,
                description: 'Bowl balanceado e nutritivo, perfeito para quem busca praticidade.',
                ingredients: ['1/2 xícara de quinoa cozida', '1/2 xícara de grão de bico ou feijão', 'Vegetais assados variados', 'Abacate fatiado', 'Molho tahine'],
                instructions: ['Cozinhe a quinoa e os grãos', 'Asse os vegetais com azeite e temperos', 'Monte o bowl colocando cada ingrediente lado a lado', 'Adicione o abacate', 'Finalize com o molho tahine'],
                macros: { calories: 380 + (i * 6), protein: 24 + (i % 6), carbs: 42 + (i % 8), fat: 12 + (i % 4) }
            },
            {
                title: `${['Arroz', 'Macarrão', 'Risoto', 'Wrap', 'Hambúrguer'][i % 5]} Fit`,
                description: 'Versão saudável do clássico, para comer sem culpa.',
                ingredients: ['Carboidrato integral (arroz, massa, pão)', 'Proteína magra moída ou desfiada', 'Molho de tomate caseiro', 'Queijo cottage ou ricota', 'Temperos frescos'],
                instructions: ['Prepare o carboidrato conforme instruções', 'Refogue a proteína com temperos e molho', 'Misture ou monte o prato', 'Adicione o queijo para cremosidade', 'Sirva quente decorado com ervas'],
                macros: { calories: 350 + (i * 5), protein: 30 + (i % 7), carbs: 38 + (i % 7), fat: 10 + (i % 4) }
            }
        ];

        const template = recipeTemplates[i % 5];
        return {
            id: `almoco-${i + 1}`,
            title: template.title,
            category: 'almoco' as const,
            time: `${20 + (i % 40)} min`,
            servings: 2 + (i % 3),
            difficulty: (['fácil', 'média', 'média', 'difícil'][i % 4]) as 'fácil' | 'média' | 'difícil',
            image: `https://image.pollinations.ai/prompt/${encodeURIComponent(template.title + ' food photography realistic 4k')}?width=800&height=600&nologo=true`,
            description: template.description,
            ingredients: template.ingredients,
            instructions: template.instructions,
            macros: template.macros
        };
    }),

    // JANTAR (50 receitas)
    ...Array.from({ length: 50 }, (_, i) => {
        const recipeTemplates = [
            {
                title: `Sopa ${['Detox', 'de Legumes', 'Proteica', 'Light', 'Cremosa'][i % 5]}`,
                description: 'Sopa leve e reconfortante, ideal para desinchar e dormir bem.',
                ingredients: ['Abobrinha, cenoura, chuchu', 'Peito de frango desfiado', 'Caldo de legumes natural', 'Cebola e alho', 'Salsinha e cebolinha'],
                instructions: ['Refogue a cebola e o alho', 'Adicione os legumes picados e o caldo', 'Cozinhe até ficarem macios', 'Adicione o frango desfiado', 'Finalize com as ervas frescas'],
                macros: { calories: 150 + (i * 4), protein: 8 + (i % 4), carbs: 22 + (i % 5), fat: 4 + (i % 2) }
            },
            {
                title: `Omelete ${['de Forno', 'Recheada', 'Light', 'Proteica', 'Completa'][i % 5]}`,
                description: 'Omelete nutritiva para o jantar, prática e sem sujeira.',
                ingredients: ['3 ovos', 'Seleta de legumes', 'Queijo minas frescal', 'Tomate picado', 'Orégano'],
                instructions: ['Bata os ovos com sal e orégano', 'Misture os legumes e o queijo', 'Despeje em uma forma untada pequena', 'Leve ao forno por 20 minutos a 180°C', 'Sirva com salada verde'],
                macros: { calories: 220 + (i * 5), protein: 20 + (i % 5), carbs: 10 + (i % 4), fat: 12 + (i % 4) }
            },
            {
                title: `Salada ${['Quente', 'Morna', 'Completa', 'Proteica', 'Especial'][i % 5]}`,
                description: 'Salada substancial para o jantar, com ingredientes mornos para maior conforto.',
                ingredients: ['Rúcula e alface americana', 'Tiras de carne ou frango grelhado', 'Abóbora assada em cubos', 'Queijo de cabra ou feta', 'Molho balsâmico'],
                instructions: ['Grelhe a proteína e asse a abóbora', 'Monte a base de folhas no prato', 'Adicione os ingredientes quentes por cima', 'Salpique o queijo', 'Regue com o molho balsâmico'],
                macros: { calories: 280 + (i * 5), protein: 26 + (i % 6), carbs: 18 + (i % 5), fat: 10 + (i % 3) }
            },
            {
                title: `Creme de ${['Abóbora', 'Brócolis', 'Espinafre', 'Cogumelos', 'Legumes'][i % 5]}`,
                description: 'Creme nutritivo e cremoso, rico em vitaminas e minerais.',
                ingredients: ['500g do legume principal', '1 cebola média', '2 dentes de alho', 'Água ou caldo de legumes', '1 colher de creme de ricota (opcional)'],
                instructions: ['Refogue cebola e alho', 'Adicione o legume e cubra com água', 'Cozinhe até amaciar bem', 'Bata no liquidificador até virar creme', 'Volte à panela, acerte o sal e adicione a ricota'],
                macros: { calories: 180 + (i * 4), protein: 6 + (i % 3), carbs: 24 + (i % 5), fat: 6 + (i % 3) }
            },
            {
                title: `Wrap ${['Light', 'Proteico', 'Vegano', 'Completo', 'Fit'][i % 5]}`,
                description: 'Wrap leve e saboroso, substituto perfeito para o sanduíche noturno.',
                ingredients: ['1 folha de rap10 integral ou folha de couve', 'Patê de atum ou frango', 'Cenoura ralada', 'Alface picada', 'Tomate em rodelas'],
                instructions: ['Aqueça levemente a massa (se usar)', 'Espalhe o patê na base', 'Adicione os vegetais em camadas', 'Enrole apertando bem', 'Corte ao meio e sirva'],
                macros: { calories: 260 + (i * 5), protein: 22 + (i % 5), carbs: 28 + (i % 6), fat: 8 + (i % 3) }
            }
        ];

        const template = recipeTemplates[i % 5];
        return {
            id: `jantar-${i + 1}`,
            title: template.title,
            category: 'jantar' as const,
            time: `${15 + (i % 30)} min`,
            servings: 2 + (i % 3),
            difficulty: (['fácil', 'fácil', 'média'][i % 3]) as 'fácil' | 'média',
            image: `https://image.pollinations.ai/prompt/${encodeURIComponent(template.title + ' food photography realistic 4k')}?width=800&height=600&nologo=true`,
            description: template.description,
            ingredients: template.ingredients,
            instructions: template.instructions,
            macros: template.macros
        };
    }),

    // LANCHES (30 receitas)
    ...Array.from({ length: 30 }, (_, i) => {
        const recipeTemplates = [
            {
                title: `${['Pasta', 'Patê', 'Homus', 'Guacamole', 'Cream Cheese'][i % 5]} Fit`,
                description: 'Lanche proteico e saudável, ótimo para acompanhar torradas ou vegetais.',
                ingredients: ['Base (grão de bico, abacate, ricota)', 'Temperos (limão, sal, pimenta)', 'Azeite de oliva', 'Ervas frescas', 'Palitos de cenoura para acompanhar'],
                instructions: ['Processe o ingrediente base no processador ou amasse bem', 'Adicione os temperos e o azeite', 'Misture até ficar homogêneo e cremoso', 'Transfira para um pote', 'Sirva com os vegetais ou torradas'],
                macros: { calories: 180 + (i * 4), protein: 15 + (i % 5), carbs: 12 + (i % 4), fat: 8 + (i % 3) }
            },
            {
                title: `${['Bolinho', 'Muffin', 'Cookie', 'Barra', 'Energy Ball'][i % 5]} Proteico`,
                description: 'Snack saudável e prático para levar na bolsa.',
                ingredients: ['1 xícara de aveia', '1/2 xícara de pasta de amendoim', '1/4 xícara de mel', '1 scoop de whey protein', 'Gotas de chocolate amargo'],
                instructions: ['Misture todos os ingredientes em uma tigela', 'Se ficar muito seco, adicione um pouco de água ou leite', 'Modele no formato desejado (bolinhas ou barras)', 'Leve à geladeira por 30 minutos', 'Mantenha refrigerado'],
                macros: { calories: 140 + (i * 3), protein: 10 + (i % 4), carbs: 18 + (i % 5), fat: 5 + (i % 2) }
            },
            {
                title: `Chips de ${['Batata Doce', 'Abobrinha', 'Berinjela', 'Kale', 'Beterraba'][i % 5]}`,
                description: 'Snack crocante e saudável para substituir salgadinhos industrializados.',
                ingredients: ['1 legume grande fatiado bem fino', 'Azeite em spray', 'Sal marinho', 'Páprica ou cúrcuma', 'Pimenta do reino'],
                instructions: ['Pré-aqueça o forno a 180°C', 'Disponha as fatias em uma assadeira sem sobrepor', 'Borrife azeite e tempere', 'Asse por 15-20 minutos virando na metade', 'Deixe esfriar para ficar crocante'],
                macros: { calories: 120 + (i * 3), protein: 3 + (i % 2), carbs: 20 + (i % 5), fat: 3 + (i % 2) }
            },
            {
                title: `Mix de ${['Nuts', 'Castanhas', 'Sementes', 'Trail Mix', 'Granola'][i % 5]}`,
                description: 'Mix energético e nutritivo, fonte de gorduras boas.',
                ingredients: ['Castanha do pará', 'Nozes', 'Amêndoas', 'Sementes de abóbora', 'Cranberries ou passas'],
                instructions: ['Misture todas as castanhas e sementes', 'Se desejar, toste levemente na frigideira para mais sabor', 'Adicione as frutas secas depois de esfriar', 'Porcione em saquinhos individuais', 'Consuma como lanche da tarde'],
                macros: { calories: 200 + (i * 5), protein: 8 + (i % 3), carbs: 16 + (i % 4), fat: 14 + (i % 4) }
            },
            {
                title: `${['Iogurte', 'Queijo', 'Smoothie', 'Shake', 'Vitamina'][i % 5]} Proteico`,
                description: 'Lanche líquido ou cremoso, rápida absorção e saciedade.',
                ingredients: ['1 pote de iogurte natural ou leite', '1 fruta de preferência', '1 colher de chia ou linhaça', 'Canela em pó', 'Adoçante se necessário'],
                instructions: ['Coloque tudo no liquidificador ou misture na tigela', 'Bata bem se for shake', 'Deixe a chia hidratar por 5 minutos se for iogurte', 'Consuma gelado'],
                macros: { calories: 160 + (i * 4), protein: 20 + (i % 6), carbs: 14 + (i % 4), fat: 4 + (i % 2) }
            }
        ];

        const template = recipeTemplates[i % 5];
        return {
            id: `lanche-${i + 1}`,
            title: template.title,
            category: 'lanche' as const,
            time: `${5 + (i % 25)} min`,
            servings: 1 + (i % 4),
            difficulty: 'fácil' as const,
            image: `https://image.pollinations.ai/prompt/${encodeURIComponent(template.title + ' food photography realistic 4k')}?width=800&height=600&nologo=true`,
            description: template.description,
            ingredients: template.ingredients,
            instructions: template.instructions,
            macros: template.macros
        };
    })
];

// Função auxiliar para buscar receitas
export function getRecipeById(id: string): Recipe | undefined {
    return recipes.find(recipe => recipe.id === id);
}

export function getRecipesByCategory(category: Recipe['category']): Recipe[] {
    return recipes.filter(recipe => recipe.category === category);
}

export function searchRecipes(query: string): Recipe[] {
    const lowerQuery = query.toLowerCase();
    return recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(lowerQuery) ||
        recipe.description.toLowerCase().includes(lowerQuery)
    );
}

console.log(`✅ Total de receitas carregadas: ${recipes.length}`);
