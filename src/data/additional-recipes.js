// Script para gerar receitas adicionais
// Execute: node generate-recipes.js para adicionar ao recipes.ts

const additionalRecipes = [
    // CAFÉ DA MANHÃ - Receitas 13-50
    {
        id: 'cafe-13',
        title: 'Torrada Francesa Fit',
        category: 'cafe-da-manha',
        time: '12 min',
        servings: 2,
        difficulty: 'fácil',
        image: '/recipes/torrada-francesa.jpg',
        description: 'Versão saudável da rabanada.',
        ingredients: ['2 fatias de pão integral', '2 ovos', '50ml de leite desnatado', 'Canela', 'Adoçante', 'Frutas vermelhas'],
        instructions: [
            'Bata ovos com leite e canela',
            'Mergulhe o pão na mistura',
            'Grelhe em frigideira antiaderente',
            'Doure dos dois lados',
            'Sirva com frutas vermelhas',
            'Adoce a gosto'
        ],
        macros: { calories: 195, protein: 12, carbs: 24, fat: 6 }
    },
    {
        id: 'cafe-14',
        title: 'Bowl de Açaí Proteico',
        category: 'cafe-da-manha',
        time: '8 min',
        servings: 1,
        difficulty: 'fácil',
        image: '/recipes/bowl-acai.jpg',
        description: 'Açaí energético com toppings saudáveis.',
        ingredients: ['100g de polpa de açaí', '1 banana congelada', '1 scoop de whey protein', 'Granola', 'Frutas', 'Mel'],
        instructions: [
            'Bata açaí, banana e whey',
            'Despeje em uma tigela',
            'Decore com granola',
            'Adicione frutas frescas',
            'Regue com mel',
            'Sirva imediatamente'
        ],
        macros: { calories: 385, protein: 28, carbs: 52, fat: 8 }
    },
    {
        id: 'cafe-15',
        title: 'Muffin de Banana sem Açúcar',
        category: 'cafe-da-manha',
        time: '30 min',
        servings: 6,
        difficulty: 'média',
        image: '/recipes/muffin-banana.jpg',
        description: 'Muffin saudável para a semana toda.',
        ingredients: ['3 bananas maduras', '2 ovos', '1 xícara de aveia', '1 colher de fermento', 'Canela', 'Nozes picadas'],
        instructions: [
            'Pré-aqueça o forno a 180°C',
            'Amasse as bananas',
            'Misture todos os ingredientes',
            'Distribua em forminhas',
            'Asse por 25 minutos',
            'Deixe esfriar antes de servir'
        ],
        macros: { calories: 145, protein: 6, carbs: 24, fat: 4 }
    },

    // ALMOÇO - Receitas adicionais
    {
        id: 'almoco-6',
        title: 'Arroz Integral com Lentilhas',
        category: 'almoco',
        time: '40 min',
        servings: 4,
        difficulty: 'fácil',
        image: '/recipes/arroz-lentilha.jpg',
        description: 'Combinação proteica vegetariana.',
        ingredients: ['1 xícara de arroz integral', '1 xícara de lentilhas', 'Cebola', 'Alho', 'Cominho', 'Coentro'],
        instructions: [
            'Cozinhe o arroz conforme embalagem',
            'Cozinhe as lentilhas separadamente',
            'Refogue cebola e alho',
            'Misture arroz e lentilhas',
            'Tempere com cominho',
            'Finalize com coentro fresco'
        ],
        macros: { calories: 285, protein: 12, carbs: 52, fat: 3 }
    },
    {
        id: 'almoco-7',
        title: 'Strogonoff de Frango Light',
        category: 'almoco',
        time: '25 min',
        servings: 3,
        difficulty: 'média',
        image: '/recipes/strogonoff-light.jpg',
        description: 'Versão saudável do clássico.',
        ingredients: ['400g de frango em cubos', 'Champignon', 'Cebola', 'Iogurte grego', 'Mostarda', 'Molho de tomate'],
        instructions: [
            'Refogue o frango com cebola',
            'Adicione champignon',
            'Acrescente molho de tomate',
            'Misture iogurte e mostarda',
            'Cozinhe por 10 minutos',
            'Sirva com arroz integral'
        ],
        macros: { calories: 245, protein: 32, carbs: 12, fat: 8 }
    },
    {
        id: 'almoco-8',
        title: 'Hambúrguer de Grão de Bico',
        category: 'almoco',
        time: '30 min',
        servings: 4,
        difficulty: 'média',
        image: '/recipes/hamburguer-grao.jpg',
        description: 'Hambúrguer vegetariano proteico.',
        ingredients: ['2 xícaras de grão de bico cozido', 'Cebola', 'Alho', 'Cominho', 'Farinha de aveia', 'Salsinha'],
        instructions: [
            'Processe o grão de bico',
            'Misture com temperos',
            'Adicione aveia para ligar',
            'Modele os hambúrgueres',
            'Grelhe ou asse',
            'Sirva em pão integral'
        ],
        macros: { calories: 185, protein: 9, carbs: 28, fat: 4 }
    },

    // JANTAR - Receitas adicionais
    {
        id: 'jantar-4',
        title: 'Creme de Abóbora',
        category: 'jantar',
        time: '25 min',
        servings: 4,
        difficulty: 'fácil',
        image: '/recipes/creme-abobora.jpg',
        description: 'Sopa cremosa e reconfortante.',
        ingredients: ['500g de abóbora', 'Cebola', 'Alho', 'Gengibre', 'Leite de coco', 'Caldo de legumes'],
        instructions: [
            'Cozinhe a abóbora em cubos',
            'Refogue cebola, alho e gengibre',
            'Adicione a abóbora cozida',
            'Cubra com caldo',
            'Bata no liquidificador',
            'Finalize com leite de coco'
        ],
        macros: { calories: 125, protein: 3, carbs: 18, fat: 5 }
    },
    {
        id: 'jantar-5',
        title: 'Salada Caesar com Frango',
        category: 'jantar',
        time: '20 min',
        servings: 2,
        difficulty: 'fácil',
        image: '/recipes/caesar-frango.jpg',
        description: 'Salada completa e saborosa.',
        ingredients: ['Alface romana', '200g de frango grelhado', 'Parmesão', 'Croutons integrais', 'Molho caesar light'],
        instructions: [
            'Lave e corte a alface',
            'Grelhe e fatie o frango',
            'Monte a salada',
            'Adicione croutons',
            'Regue com molho',
            'Finalize com parmesão'
        ],
        macros: { calories: 285, protein: 32, carbs: 18, fat: 10 }
    },

    // LANCHES - Receitas adicionais
    {
        id: 'lanche-3',
        title: 'Chips de Batata Doce',
        category: 'lanche',
        time: '35 min',
        servings: 2,
        difficulty: 'fácil',
        image: '/recipes/chips-batata.jpg',
        description: 'Snack crocante e saudável.',
        ingredients: ['1 batata doce grande', 'Azeite spray', 'Sal marinho', 'Páprica', 'Alecrim'],
        instructions: [
            'Corte a batata em fatias finas',
            'Disponha em assadeira',
            'Borrife azeite',
            'Tempere a gosto',
            'Asse a 180°C por 30 minutos',
            'Vire na metade do tempo'
        ],
        macros: { calories: 115, protein: 2, carbs: 24, fat: 2 }
    },
    {
        id: 'lanche-4',
        title: 'Energy Balls de Tâmaras',
        category: 'lanche',
        time: '10 min',
        servings: 10,
        difficulty: 'fácil',
        image: '/recipes/energy-balls.jpg',
        description: 'Bolinha energética natural.',
        ingredients: ['1 xícara de tâmaras', '1/2 xícara de castanhas', '2 colheres de cacau', 'Coco ralado', 'Essência de baunilha'],
        instructions: [
            'Processe tâmaras e castanhas',
            'Adicione cacau e baunilha',
            'Misture bem',
            'Faça bolinhas',
            'Passe no coco ralado',
            'Refrigere por 1 hora'
        ],
        macros: { calories: 95, protein: 2, carbs: 14, fat: 4 }
    },
    {
        id: 'lanche-5',
        title: 'Homus de Grão de Bico',
        category: 'lanche',
        time: '10 min',
        servings: 4,
        difficulty: 'fácil',
        image: '/recipes/homus.jpg',
        description: 'Pasta proteica do Oriente Médio.',
        ingredients: ['1 lata de grão de bico', 'Tahine', 'Limão', 'Alho', 'Azeite', 'Cominho'],
        instructions: [
            'Escorra o grão de bico',
            'Bata todos os ingredientes',
            'Ajuste consistência com água',
            'Tempere a gosto',
            'Sirva com vegetais',
            'Regue com azeite'
        ],
        macros: { calories: 145, protein: 6, carbs: 18, fat: 6 }
    }
];

console.log(`Total de receitas adicionais: ${additionalRecipes.length}`);
console.log('Copie e cole estas receitas no array recipes em recipes.ts');
