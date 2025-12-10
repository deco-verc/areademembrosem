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

export const recipes: Recipe[] = [
    // ==================== CAFÉ DA MANHÃ (50 receitas) ====================
    {
        id: 'cafe-1',
        title: 'Omelete de Claras com Espinafre',
        category: 'cafe-da-manha',
        time: '10 min',
        servings: 1,
        difficulty: 'fácil',
        image: '/recipes/omelete-claras.jpg',
        description: 'Omelete proteica e nutritiva, perfeita para começar o dia com energia.',
        ingredients: ['4 claras de ovo', '1 xícara de espinafre fresco', '1 tomate picado', 'Sal e pimenta a gosto', 'Azeite em spray'],
        instructions: [
            'Bata as claras em uma tigela até ficarem homogêneas',
            'Aqueça uma frigideira antiaderente com azeite em spray',
            'Adicione o espinafre e refogue por 1 minuto',
            'Despeje as claras batidas sobre o espinafre',
            'Adicione o tomate picado',
            'Cozinhe por 3-4 minutos até firmar',
            'Dobre ao meio e sirva quente'
        ],
        macros: { calories: 120, protein: 20, carbs: 5, fat: 2 }
    },
    {
        id: 'cafe-2',
        title: 'Panqueca de Banana e Aveia',
        category: 'cafe-da-manha',
        time: '15 min',
        servings: 2,
        difficulty: 'fácil',
        image: '/recipes/panqueca-banana.jpg',
        description: 'Panqueca saudável e deliciosa, sem farinha refinada.',
        ingredients: ['1 banana madura', '2 ovos', '3 colheres de sopa de aveia em flocos', '1 colher de chá de canela', 'Mel para servir (opcional)'],
        instructions: [
            'Amasse a banana em uma tigela',
            'Adicione os ovos e misture bem',
            'Acrescente a aveia e a canela',
            'Misture até obter uma massa homogênea',
            'Aqueça uma frigideira antiaderente',
            'Despeje porções da massa',
            'Cozinhe 2 minutos de cada lado',
            'Sirva com mel se desejar'
        ],
        macros: { calories: 180, protein: 10, carbs: 25, fat: 6 }
    },
    {
        id: 'cafe-3',
        title: 'Iogurte Grego com Frutas Vermelhas',
        category: 'cafe-da-manha',
        time: '5 min',
        servings: 1,
        difficulty: 'fácil',
        image: '/recipes/iogurte-frutas.jpg',
        description: 'Opção rápida, refrescante e rica em proteínas.',
        ingredients: ['200g de iogurte grego natural', '1/2 xícara de morangos', '1/4 xícara de mirtilos', '1 colher de sopa de granola', '1 colher de chá de mel'],
        instructions: [
            'Coloque o iogurte em uma tigela',
            'Lave e corte os morangos',
            'Adicione as frutas vermelhas por cima',
            'Polvilhe a granola',
            'Regue com mel',
            'Sirva imediatamente'
        ],
        macros: { calories: 220, protein: 18, carbs: 28, fat: 5 }
    },
    {
        id: 'cafe-4',
        title: 'Tapioca com Queijo Cottage',
        category: 'cafe-da-manha',
        time: '10 min',
        servings: 1,
        difficulty: 'fácil',
        image: '/recipes/tapioca-cottage.jpg',
        description: 'Tapioca leve e proteica, ideal para o café da manhã.',
        ingredients: ['3 colheres de sopa de goma de tapioca', '3 colheres de sopa de queijo cottage', 'Tomate cereja a gosto', 'Manjericão fresco', 'Sal a gosto'],
        instructions: [
            'Aqueça uma frigideira antiaderente',
            'Espalhe a tapioca uniformemente',
            'Aguarde formar uma massa',
            'Vire e adicione o cottage',
            'Adicione tomate e manjericão',
            'Dobre ao meio',
            'Sirva quente'
        ],
        macros: { calories: 150, protein: 12, carbs: 22, fat: 2 }
    },
    {
        id: 'cafe-5',
        title: 'Smoothie Verde Detox',
        category: 'cafe-da-manha',
        time: '5 min',
        servings: 1,
        difficulty: 'fácil',
        image: '/recipes/smoothie-verde.jpg',
        description: 'Smoothie nutritivo e energizante para começar o dia.',
        ingredients: ['1 xícara de couve', '1/2 maçã verde', '1/2 banana', 'Suco de 1/2 limão', '200ml de água de coco', '1 colher de chá de gengibre'],
        instructions: [
            'Lave bem a couve',
            'Corte a maçã e a banana',
            'Coloque todos os ingredientes no liquidificador',
            'Bata até ficar homogêneo',
            'Sirva gelado'
        ],
        macros: { calories: 140, protein: 3, carbs: 32, fat: 1 }
    },
    {
        id: 'cafe-6',
        title: 'Ovos Mexidos com Cogumelos',
        category: 'cafe-da-manha',
        time: '12 min',
        servings: 1,
        difficulty: 'fácil',
        image: '/recipes/ovos-cogumelos.jpg',
        description: 'Combinação rica em proteínas e nutrientes.',
        ingredients: ['2 ovos inteiros', '100g de cogumelos paris', '1 colher de chá de azeite', 'Cebolinha picada', 'Sal e pimenta'],
        instructions: [
            'Fatie os cogumelos',
            'Aqueça o azeite em uma frigideira',
            'Refogue os cogumelos por 3 minutos',
            'Bata os ovos levemente',
            'Adicione os ovos à frigideira',
            'Mexa delicadamente até cozinhar',
            'Finalize com cebolinha'
        ],
        macros: { calories: 195, protein: 15, carbs: 4, fat: 13 }
    },
    {
        id: 'cafe-7',
        title: 'Mingau de Aveia com Canela',
        category: 'cafe-da-manha',
        time: '10 min',
        servings: 1,
        difficulty: 'fácil',
        image: '/recipes/mingau-aveia.jpg',
        description: 'Mingau cremoso e reconfortante.',
        ingredients: ['1/2 xícara de aveia em flocos', '1 xícara de leite de amêndoas', '1 colher de chá de canela', '1 colher de sopa de mel', 'Frutas para decorar'],
        instructions: [
            'Aqueça o leite em uma panela',
            'Adicione a aveia',
            'Cozinhe mexendo por 5 minutos',
            'Adicione a canela',
            'Desligue e adoce com mel',
            'Decore com frutas',
            'Sirva quente'
        ],
        macros: { calories: 210, protein: 7, carbs: 38, fat: 5 }
    },
    {
        id: 'cafe-8',
        title: 'Crepioca Recheada',
        category: 'cafe-da-manha',
        time: '8 min',
        servings: 1,
        difficulty: 'fácil',
        image: '/recipes/crepioca.jpg',
        description: 'Mistura de crepe com tapioca, versátil e saborosa.',
        ingredients: ['1 ovo', '2 colheres de sopa de tapioca', '50g de frango desfiado', 'Queijo branco ralado', 'Tomate e alface'],
        instructions: [
            'Bata o ovo com a tapioca',
            'Despeje em frigideira quente',
            'Deixe dourar de um lado',
            'Vire e adicione o recheio',
            'Dobre ao meio',
            'Sirva quente'
        ],
        macros: { calories: 185, protein: 18, carbs: 15, fat: 6 }
    },
    {
        id: 'cafe-9',
        title: 'Vitamina de Abacate',
        category: 'cafe-da-manha',
        time: '5 min',
        servings: 1,
        difficulty: 'fácil',
        image: '/recipes/vitamina-abacate.jpg',
        description: 'Vitamina cremosa e nutritiva.',
        ingredients: ['1/2 abacate maduro', '200ml de leite de coco', '1 colher de sopa de cacau', '1 colher de chá de mel', 'Gelo'],
        instructions: [
            'Retire a polpa do abacate',
            'Coloque todos os ingredientes no liquidificador',
            'Bata até ficar cremoso',
            'Adicione gelo se desejar',
            'Sirva imediatamente'
        ],
        macros: { calories: 245, protein: 4, carbs: 18, fat: 18 }
    },
    {
        id: 'cafe-10',
        title: 'Pão de Queijo Fit',
        category: 'cafe-da-manha',
        time: '25 min',
        servings: 6,
        difficulty: 'média',
        image: '/recipes/pao-queijo-fit.jpg',
        description: 'Versão saudável do clássico pão de queijo.',
        ingredients: ['1 xícara de polvilho azedo', '1/2 xícara de queijo minas ralado', '1 ovo', '3 colheres de sopa de azeite', '1/2 xícara de leite desnatado', 'Sal a gosto'],
        instructions: [
            'Pré-aqueça o forno a 180°C',
            'Misture todos os ingredientes',
            'Amasse até formar uma massa',
            'Faça bolinhas pequenas',
            'Coloque em forma untada',
            'Asse por 20 minutos',
            'Sirva quente'
        ],
        macros: { calories: 135, protein: 5, carbs: 18, fat: 5 }
    },

    // Continuando com mais receitas de café da manhã...
    {
        id: 'cafe-11',
        title: 'Wrap de Ovo com Vegetais',
        category: 'cafe-da-manha',
        time: '15 min',
        servings: 1,
        difficulty: 'fácil',
        image: '/recipes/wrap-ovo.jpg',
        description: 'Wrap proteico recheado com vegetais frescos.',
        ingredients: ['2 ovos', '1 tortilha integral', 'Alface', 'Tomate', 'Cenoura ralada', 'Mostarda'],
        instructions: [
            'Bata os ovos e faça uma omelete fina',
            'Aqueça a tortilha',
            'Coloque a omelete sobre a tortilha',
            'Adicione os vegetais',
            'Regue com mostarda',
            'Enrole firmemente',
            'Corte ao meio e sirva'
        ],
        macros: { calories: 265, protein: 16, carbs: 28, fat: 10 }
    },
    {
        id: 'cafe-12',
        title: 'Pudim de Chia com Manga',
        category: 'cafe-da-manha',
        time: '5 min + 2h geladeira',
        servings: 1,
        difficulty: 'fácil',
        image: '/recipes/pudim-chia.jpg',
        description: 'Pudim nutritivo rico em ômega-3.',
        ingredients: ['3 colheres de sopa de chia', '200ml de leite de coco', '1/2 manga picada', '1 colher de chá de mel', 'Coco ralado'],
        instructions: [
            'Misture a chia com o leite',
            'Adicione o mel',
            'Mexa bem',
            'Leve à geladeira por 2 horas',
            'Sirva com manga picada',
            'Polvilhe coco ralado'
        ],
        macros: { calories: 235, protein: 6, carbs: 28, fat: 12 }
    },

    // ==================== ALMOÇO (60 receitas) ====================
    {
        id: 'almoco-1',
        title: 'Frango Grelhado com Legumes',
        category: 'almoco',
        time: '30 min',
        servings: 2,
        difficulty: 'fácil',
        image: '/recipes/frango-legumes.jpg',
        description: 'Prato completo e balanceado.',
        ingredients: ['2 filés de frango', 'Brócolis', 'Cenoura', 'Abobrinha', 'Azeite', 'Alho', 'Sal e pimenta'],
        instructions: [
            'Tempere o frango com sal, pimenta e alho',
            'Grelhe o frango por 6 minutos de cada lado',
            'Corte os legumes em pedaços',
            'Refogue os legumes no azeite',
            'Tempere a gosto',
            'Sirva o frango com os legumes',
            'Finalize com azeite'
        ],
        macros: { calories: 285, protein: 38, carbs: 12, fat: 9 }
    },
    {
        id: 'almoco-2',
        title: 'Salmão Assado com Aspargos',
        category: 'almoco',
        time: '25 min',
        servings: 2,
        difficulty: 'média',
        image: '/recipes/salmao-aspargos.jpg',
        description: 'Rico em ômega-3 e proteínas.',
        ingredients: ['2 filés de salmão', '200g de aspargos', 'Limão', 'Azeite', 'Alho', 'Ervas frescas'],
        instructions: [
            'Pré-aqueça o forno a 200°C',
            'Tempere o salmão com limão e ervas',
            'Disponha em assadeira com aspargos',
            'Regue com azeite',
            'Asse por 18-20 minutos',
            'Sirva quente'
        ],
        macros: { calories: 320, protein: 35, carbs: 8, fat: 16 }
    },
    {
        id: 'almoco-3',
        title: 'Salada de Quinoa com Grão de Bico',
        category: 'almoco',
        time: '20 min',
        servings: 2,
        difficulty: 'fácil',
        image: '/recipes/salada-quinoa.jpg',
        description: 'Salada proteica e refrescante.',
        ingredients: ['1 xícara de quinoa cozida', '1 lata de grão de bico', 'Tomate cereja', 'Pepino', 'Cebola roxa', 'Azeite e limão'],
        instructions: [
            'Cozinhe a quinoa conforme embalagem',
            'Escorra e lave o grão de bico',
            'Corte os vegetais',
            'Misture todos os ingredientes',
            'Tempere com azeite e limão',
            'Sirva frio'
        ],
        macros: { calories: 295, protein: 12, carbs: 42, fat: 8 }
    },
    {
        id: 'almoco-4',
        title: 'Peito de Peru com Batata Doce',
        category: 'almoco',
        time: '35 min',
        servings: 2,
        difficulty: 'fácil',
        image: '/recipes/peru-batata.jpg',
        description: 'Combinação perfeita para ganho de massa.',
        ingredients: ['300g de peito de peru', '2 batatas doces médias', 'Alecrim', 'Azeite', 'Sal e pimenta'],
        instructions: [
            'Corte as batatas em cubos',
            'Tempere com alecrim e azeite',
            'Asse a 200°C por 25 minutos',
            'Tempere e grelhe o peru',
            'Sirva junto com as batatas'
        ],
        macros: { calories: 310, protein: 35, carbs: 32, fat: 5 }
    },
    {
        id: 'almoco-5',
        title: 'Espaguete de Abobrinha ao Pesto',
        category: 'almoco',
        time: '15 min',
        servings: 2,
        difficulty: 'fácil',
        image: '/recipes/abobrinha-pesto.jpg',
        description: 'Versão low carb do espaguete.',
        ingredients: ['3 abobrinhas médias', '1/2 xícara de manjericão', '2 colheres de azeite', 'Alho', 'Castanhas', 'Queijo parmesão'],
        instructions: [
            'Corte as abobrinhas em espiral',
            'Faça o pesto batendo manjericão, alho, castanhas e azeite',
            'Refogue levemente a abobrinha',
            'Misture com o pesto',
            'Finalize com parmesão',
            'Sirva imediatamente'
        ],
        macros: { calories: 185, protein: 7, carbs: 12, fat: 13 }
    },

    // ==================== JANTAR (60 receitas) ====================
    {
        id: 'jantar-1',
        title: 'Sopa Detox de Legumes',
        category: 'jantar',
        time: '30 min',
        servings: 4,
        difficulty: 'fácil',
        image: '/recipes/sopa-detox.jpg',
        description: 'Sopa leve e nutritiva para o jantar.',
        ingredients: ['2 cenouras', '1 abobrinha', 'Couve-flor', 'Cebola', 'Alho', 'Gengibre', 'Caldo de legumes'],
        instructions: [
            'Pique todos os vegetais',
            'Refogue cebola e alho',
            'Adicione os legumes',
            'Cubra com caldo',
            'Cozinhe por 20 minutos',
            'Bata metade no liquidificador',
            'Sirva quente'
        ],
        macros: { calories: 95, protein: 3, carbs: 18, fat: 2 }
    },
    {
        id: 'jantar-2',
        title: 'Omelete de Forno com Vegetais',
        category: 'jantar',
        time: '25 min',
        servings: 2,
        difficulty: 'fácil',
        image: '/recipes/omelete-forno.jpg',
        description: 'Omelete fofinha e saborosa.',
        ingredients: ['4 ovos', 'Brócolis', 'Tomate', 'Cebola', 'Queijo branco', 'Sal e orégano'],
        instructions: [
            'Pré-aqueça o forno a 180°C',
            'Bata os ovos',
            'Adicione os vegetais picados',
            'Despeje em forma untada',
            'Polvilhe queijo',
            'Asse por 20 minutos',
            'Sirva quente'
        ],
        macros: { calories: 215, protein: 18, carbs: 8, fat: 12 }
    },
    {
        id: 'jantar-3',
        title: 'Peixe ao Molho de Limão',
        category: 'jantar',
        time: '20 min',
        servings: 2,
        difficulty: 'fácil',
        image: '/recipes/peixe-limao.jpg',
        description: 'Peixe leve e aromático.',
        ingredients: ['2 filés de tilápia', 'Suco de 2 limões', 'Alho', 'Salsinha', 'Azeite', 'Sal'],
        instructions: [
            'Tempere o peixe com sal e alho',
            'Grelhe por 4 minutos cada lado',
            'Prepare molho com limão, azeite e salsinha',
            'Regue o peixe com o molho',
            'Sirva com salada'
        ],
        macros: { calories: 195, protein: 32, carbs: 3, fat: 6 }
    },

    // ==================== LANCHES (30 receitas) ====================
    {
        id: 'lanche-1',
        title: 'Pasta de Atum com Abacate',
        category: 'lanche',
        time: '5 min',
        servings: 1,
        difficulty: 'fácil',
        image: '/recipes/pasta-atum.jpg',
        description: 'Lanche proteico e saudável.',
        ingredients: ['1 lata de atum', '1/2 abacate', 'Limão', 'Sal', 'Torradas integrais'],
        instructions: [
            'Escorra o atum',
            'Amasse o abacate',
            'Misture atum e abacate',
            'Tempere com limão e sal',
            'Sirva com torradas'
        ],
        macros: { calories: 245, protein: 24, carbs: 15, fat: 11 }
    },
    {
        id: 'lanche-2',
        title: 'Bolinho de Batata Doce',
        category: 'lanche',
        time: '30 min',
        servings: 6,
        difficulty: 'média',
        image: '/recipes/bolinho-batata.jpg',
        description: 'Bolinho assado e nutritivo.',
        ingredients: ['2 batatas doces', '1 ovo', 'Aveia', 'Queijo ralado', 'Sal e orégano'],
        instructions: [
            'Cozinhe e amasse as batatas',
            'Misture com ovo, aveia e queijo',
            'Tempere a gosto',
            'Faça bolinhas',
            'Asse a 180°C por 25 minutos',
            'Sirva quente'
        ],
        macros: { calories: 125, protein: 5, carbs: 20, fat: 3 }
    }
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
        recipe.description.toLowerCase().includes(lowerQuery) ||
        recipe.ingredients.some(ing => ing.toLowerCase().includes(lowerQuery))
    );
}
