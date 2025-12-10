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

// Helper function to generate Unsplash food images
const getUnsplashImage = (query: string, id: number) =>
    `https://images.unsplash.com/photo-${1500000000000 + id}?w=800&q=80&fit=crop&auto=format`;

// Generate 200+ recipes programmatically
export const recipes: Recipe[] = [
    // CAFÉ DA MANHÃ (60 receitas)
    ...Array.from({ length: 60 }, (_, i) => {
        const recipeTemplates = [
            {
                title: `Omelete ${['Proteica', 'de Claras', 'Completa', 'Light', 'Fitness'][i % 5]}`,
                description: 'Omelete nutritiva e saborosa para começar o dia',
                ingredients: ['Ovos', 'Vegetais', 'Temperos', 'Azeite'],
                instructions: ['Bata os ovos', 'Refogue vegetais', 'Adicione ovos', 'Cozinhe até firmar'],
                macros: { calories: 180 + (i * 5), protein: 15 + (i % 5), carbs: 8 + (i % 3), fat: 10 + (i % 4) }
            },
            {
                title: `Panqueca de ${['Aveia', 'Banana', 'Proteína', 'Integral', 'Fit'][i % 5]}`,
                description: 'Panqueca saudável sem farinha refinada',
                ingredients: ['Aveia', 'Ovos', 'Banana', 'Canela'],
                instructions: ['Misture ingredientes', 'Aqueça frigideira', 'Despeje massa', 'Doure dos lados'],
                macros: { calories: 200 + (i * 4), protein: 12 + (i % 4), carbs: 28 + (i % 5), fat: 6 + (i % 3) }
            },
            {
                title: `Smoothie ${['Verde', 'Proteico', 'Detox', 'Energético', 'Tropical'][i % 5]}`,
                description: 'Vitamina refrescante e nutritiva',
                ingredients: ['Frutas', 'Leite vegetal', 'Proteína', 'Gelo'],
                instructions: ['Adicione ingredientes ao liquidificador', 'Bata até cremoso', 'Sirva gelado'],
                macros: { calories: 160 + (i * 3), protein: 18 + (i % 6), carbs: 22 + (i % 4), fat: 4 + (i % 2) }
            },
            {
                title: `Bowl de ${['Açaí', 'Iogurte', 'Frutas', 'Granola', 'Proteína'][i % 5]}`,
                description: 'Bowl completo e energético',
                ingredients: ['Base proteica', 'Frutas frescas', 'Granola', 'Mel'],
                instructions: ['Prepare a base', 'Adicione toppings', 'Decore com frutas', 'Sirva imediatamente'],
                macros: { calories: 280 + (i * 6), protein: 20 + (i % 5), carbs: 38 + (i % 6), fat: 8 + (i % 3) }
            },
            {
                title: `Tapioca ${['Fit', 'Proteica', 'Recheada', 'Light', 'Completa'][i % 5]}`,
                description: 'Tapioca versátil e saudável',
                ingredients: ['Goma de tapioca', 'Recheio proteico', 'Vegetais'],
                instructions: ['Espalhe tapioca', 'Adicione recheio', 'Dobre', 'Sirva quente'],
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
            image: `https://source.unsplash.com/800x600/?breakfast,healthy,${encodeURIComponent(template.title.split(' ')[0])}`,
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
                description: 'Prato proteico e saboroso',
                ingredients: ['Frango', 'Temperos', 'Vegetais', 'Azeite'],
                instructions: ['Tempere o frango', 'Cozinhe conforme método', 'Prepare acompanhamentos', 'Sirva quente'],
                macros: { calories: 320 + (i * 5), protein: 38 + (i % 8), carbs: 12 + (i % 6), fat: 12 + (i % 5) }
            },
            {
                title: `Peixe ${['Grelhado', 'Assado', 'ao Molho', 'com Ervas', 'Light'][i % 5]}`,
                description: 'Peixe saudável rico em ômega-3',
                ingredients: ['Peixe branco', 'Limão', 'Ervas', 'Vegetais'],
                instructions: ['Tempere o peixe', 'Grelhe ou asse', 'Prepare molho', 'Sirva com legumes'],
                macros: { calories: 280 + (i * 4), protein: 35 + (i % 7), carbs: 8 + (i % 4), fat: 10 + (i % 4) }
            },
            {
                title: `Salada ${['Completa', 'Proteica', 'Caesar', 'Mediterrânea', 'Tropical'][i % 5]}`,
                description: 'Salada nutritiva e refrescante',
                ingredients: ['Folhas verdes', 'Proteína', 'Vegetais', 'Molho'],
                instructions: ['Lave vegetais', 'Prepare proteína', 'Monte salada', 'Adicione molho'],
                macros: { calories: 250 + (i * 5), protein: 28 + (i % 6), carbs: 18 + (i % 5), fat: 8 + (i % 3) }
            },
            {
                title: `Bowl ${['de Quinoa', 'Proteico', 'Vegano', 'Completo', 'Fitness'][i % 5]}`,
                description: 'Bowl balanceado e nutritivo',
                ingredients: ['Base de grãos', 'Proteína', 'Vegetais', 'Molho'],
                instructions: ['Cozinhe base', 'Prepare componentes', 'Monte bowl', 'Finalize com molho'],
                macros: { calories: 380 + (i * 6), protein: 24 + (i % 6), carbs: 42 + (i % 8), fat: 12 + (i % 4) }
            },
            {
                title: `${['Arroz', 'Macarrão', 'Risoto', 'Wrap', 'Hambúrguer'][i % 5]} Fit`,
                description: 'Versão saudável do clássico',
                ingredients: ['Carboidrato integral', 'Proteína magra', 'Vegetais', 'Temperos'],
                instructions: ['Prepare base', 'Cozinhe proteína', 'Combine ingredientes', 'Sirva quente'],
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
            image: `https://source.unsplash.com/800x600/?lunch,healthy,${encodeURIComponent(template.title.split(' ')[0])}`,
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
                description: 'Sopa leve e reconfortante',
                ingredients: ['Legumes variados', 'Caldo', 'Temperos', 'Ervas'],
                instructions: ['Refogue base', 'Adicione legumes', 'Cubra com caldo', 'Cozinhe até amolecer'],
                macros: { calories: 150 + (i * 4), protein: 8 + (i % 4), carbs: 22 + (i % 5), fat: 4 + (i % 2) }
            },
            {
                title: `Omelete ${['de Forno', 'Recheada', 'Light', 'Proteica', 'Completa'][i % 5]}`,
                description: 'Omelete nutritiva para o jantar',
                ingredients: ['Ovos', 'Vegetais', 'Queijo light', 'Temperos'],
                instructions: ['Bata ovos', 'Adicione recheio', 'Asse ou grelhe', 'Sirva quente'],
                macros: { calories: 220 + (i * 5), protein: 20 + (i % 5), carbs: 10 + (i % 4), fat: 12 + (i % 4) }
            },
            {
                title: `Salada ${['Quente', 'Morna', 'Completa', 'Proteica', 'Especial'][i % 5]}`,
                description: 'Salada substancial para o jantar',
                ingredients: ['Mix de folhas', 'Proteína', 'Vegetais assados', 'Molho'],
                instructions: ['Prepare vegetais', 'Cozinhe proteína', 'Monte salada', 'Finalize'],
                macros: { calories: 280 + (i * 5), protein: 26 + (i % 6), carbs: 18 + (i % 5), fat: 10 + (i % 3) }
            },
            {
                title: `Creme de ${['Abóbora', 'Brócolis', 'Espinafre', 'Cogumelos', 'Legumes'][i % 5]}`,
                description: 'Creme nutritivo e cremoso',
                ingredients: ['Vegetais', 'Caldo', 'Leite vegetal', 'Temperos'],
                instructions: ['Cozinhe vegetais', 'Bata no liquidificador', 'Ajuste consistência', 'Sirva quente'],
                macros: { calories: 180 + (i * 4), protein: 6 + (i % 3), carbs: 24 + (i % 5), fat: 6 + (i % 3) }
            },
            {
                title: `Wrap ${['Light', 'Proteico', 'Vegano', 'Completo', 'Fit'][i % 5]}`,
                description: 'Wrap leve e saboroso',
                ingredients: ['Tortilha integral', 'Proteína', 'Vegetais', 'Molho'],
                instructions: ['Prepare recheio', 'Monte wrap', 'Aqueça levemente', 'Sirva'],
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
            image: `https://source.unsplash.com/800x600/?dinner,healthy,${encodeURIComponent(template.title.split(' ')[1] || 'food')}`,
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
                description: 'Lanche proteico e saudável',
                ingredients: ['Base proteica', 'Temperos', 'Vegetais', 'Ervas'],
                instructions: ['Processe ingredientes', 'Ajuste tempero', 'Refrigere', 'Sirva com acompanhamento'],
                macros: { calories: 180 + (i * 4), protein: 15 + (i % 5), carbs: 12 + (i % 4), fat: 8 + (i % 3) }
            },
            {
                title: `${['Bolinho', 'Muffin', 'Cookie', 'Barra', 'Energy Ball'][i % 5]} Proteico`,
                description: 'Snack saudável e prático',
                ingredients: ['Aveia', 'Proteína', 'Frutas', 'Adoçante natural'],
                instructions: ['Misture ingredientes', 'Modele', 'Asse ou refrigere', 'Armazene'],
                macros: { calories: 140 + (i * 3), protein: 10 + (i % 4), carbs: 18 + (i % 5), fat: 5 + (i % 2) }
            },
            {
                title: `Chips de ${['Batata Doce', 'Abobrinha', 'Berinjela', 'Kale', 'Beterraba'][i % 5]}`,
                description: 'Snack crocante e saudável',
                ingredients: ['Vegetal', 'Azeite spray', 'Temperos', 'Sal marinho'],
                instructions: ['Fatie fino', 'Tempere', 'Asse até crocante', 'Deixe esfriar'],
                macros: { calories: 120 + (i * 3), protein: 3 + (i % 2), carbs: 20 + (i % 5), fat: 3 + (i % 2) }
            },
            {
                title: `Mix de ${['Nuts', 'Castanhas', 'Sementes', 'Trail Mix', 'Granola'][i % 5]}`,
                description: 'Mix energético e nutritivo',
                ingredients: ['Castanhas', 'Sementes', 'Frutas secas', 'Especiarias'],
                instructions: ['Misture ingredientes', 'Asse levemente', 'Deixe esfriar', 'Armazene'],
                macros: { calories: 200 + (i * 5), protein: 8 + (i % 3), carbs: 16 + (i % 4), fat: 14 + (i % 4) }
            },
            {
                title: `${['Iogurte', 'Queijo', 'Smoothie', 'Shake', 'Vitamina'][i % 5]} Proteico`,
                description: 'Lanche líquido ou cremoso',
                ingredients: ['Base láctea', 'Proteína', 'Frutas', 'Adoçante'],
                instructions: ['Misture ingredientes', 'Bata se necessário', 'Sirva gelado'],
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
            image: `https://source.unsplash.com/800x600/?snack,healthy,${encodeURIComponent(template.title.split(' ')[0])}`,
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
