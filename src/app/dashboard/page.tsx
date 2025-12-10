'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './dashboard.module.css'
import type { User } from '@/lib/supabase'

type Recipe = {
    id: string
    title: string
    category: string
    time: string
    difficulty: string
    image: string
    description: string
}

type Guide = {
    id: string
    title: string
    description: string
    icon: string
    type: 'pdf' | 'text'
}

export default function DashboardPage() {
    const [user, setUser] = useState<User | null>(null)
    const [activeTab, setActiveTab] = useState<'recipes' | 'guides'>('recipes')
    const [selectedCategory, setSelectedCategory] = useState<string>('all')
    const router = useRouter()

    useEffect(() => {
        const userData = localStorage.getItem('user')
        if (!userData) {
            router.push('/login')
            return
        }
        setUser(JSON.parse(userData))
    }, [router])

    const recipes: Recipe[] = [
        {
            id: '1',
            title: 'Café da Manhã Anti-inflamatório',
            category: 'breakfast',
            time: '15 min',
            difficulty: 'Fácil',
            image: '🥑',
            description: 'Abacate com ovos mexidos e temperos naturais'
        },
        {
            id: '2',
            title: 'Almoço Metabólico',
            category: 'lunch',
            time: '30 min',
            difficulty: 'Médio',
            image: '🥗',
            description: 'Salada completa com proteína e vegetais coloridos'
        },
        {
            id: '3',
            title: 'Jantar Detox',
            category: 'dinner',
            time: '25 min',
            difficulty: 'Fácil',
            image: '🥘',
            description: 'Sopa leve com legumes e ervas desinflamatórias'
        },
        {
            id: '4',
            title: 'Suco Tira-Fome',
            category: 'drinks',
            time: '5 min',
            difficulty: 'Fácil',
            image: '🥤',
            description: 'Bebida natural que controla a saciedade'
        },
        {
            id: '5',
            title: 'Sobremesa Inteligente',
            category: 'dessert',
            time: '20 min',
            difficulty: 'Médio',
            image: '🍰',
            description: 'Doce que engana o cérebro sem disparar insulina'
        },
        {
            id: '6',
            title: 'Smoothie Energético',
            category: 'breakfast',
            time: '10 min',
            difficulty: 'Fácil',
            image: '🍓',
            description: 'Vitamina rica em nutrientes para começar o dia'
        }
    ]

    const guides: Guide[] = [
        {
            id: '1',
            title: 'Guia Anti-Falso Saudável',
            description: 'Lista de compras secreta com alimentos acessíveis que realmente ajudam a emagrecer',
            icon: '📋',
            type: 'pdf'
        },
        {
            id: '2',
            title: '3 Bebidas Naturais',
            description: 'Receitas para limpar seus receptores de açúcar e cortar a vontade de doce',
            icon: '🍹',
            type: 'pdf'
        },
        {
            id: '3',
            title: 'Sobremesas que Enganam o Cérebro',
            description: 'Doces que dão prazer sem disparar a insulina',
            icon: '🍮',
            type: 'pdf'
        },
        {
            id: '4',
            title: 'Manual da Economia no Mercado',
            description: 'Substituições baratas com o mesmo efeito desinflamatório',
            icon: '💰',
            type: 'pdf'
        },
        {
            id: '5',
            title: 'Cardápios Semanais Prontos',
            description: 'Planejamento completo para 4 semanas',
            icon: '📅',
            type: 'pdf'
        }
    ]

    const categories = [
        { id: 'all', label: 'Todas', icon: '🍽️' },
        { id: 'breakfast', label: 'Café da Manhã', icon: '🌅' },
        { id: 'lunch', label: 'Almoço', icon: '☀️' },
        { id: 'dinner', label: 'Jantar', icon: '🌙' },
        { id: 'drinks', label: 'Bebidas', icon: '🥤' },
        { id: 'dessert', label: 'Sobremesas', icon: '🍰' }
    ]

    const filteredRecipes = selectedCategory === 'all'
        ? recipes
        : recipes.filter(r => r.category === selectedCategory)

    if (!user) {
        return null
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <div>
                        <h1 className={styles.welcomeTitle}>
                            Olá, {user.name}! 👋
                        </h1>
                        <p className={styles.welcomeSubtitle}>
                            Bem-vindo à sua área de membros
                        </p>
                    </div>
                    <button
                        className={styles.logoutButton}
                        onClick={() => {
                            localStorage.removeItem('user')
                            router.push('/login')
                        }}
                    >
                        Sair
                    </button>
                </div>
            </header>

            <div className={styles.stats}>
                <div className={styles.statCard}>
                    <div className={styles.statIcon}>📚</div>
                    <div>
                        <div className={styles.statValue}>200+</div>
                        <div className={styles.statLabel}>Receitas</div>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon}>🎯</div>
                    <div>
                        <div className={styles.statValue}>5</div>
                        <div className={styles.statLabel}>Bônus Exclusivos</div>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon}>⚡</div>
                    <div>
                        <div className={styles.statValue}>Vitalício</div>
                        <div className={styles.statLabel}>Acesso</div>
                    </div>
                </div>
            </div>

            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${activeTab === 'recipes' ? styles.tabActive : ''}`}
                    onClick={() => setActiveTab('recipes')}
                >
                    <span className={styles.tabIcon}>🍽️</span>
                    Receitas
                </button>
                <button
                    className={`${styles.tab} ${activeTab === 'guides' ? styles.tabActive : ''}`}
                    onClick={() => setActiveTab('guides')}
                >
                    <span className={styles.tabIcon}>📖</span>
                    Guias & Bônus
                </button>
            </div>

            {activeTab === 'recipes' && (
                <>
                    <div className={styles.categories}>
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                className={`${styles.categoryButton} ${selectedCategory === cat.id ? styles.categoryActive : ''}`}
                                onClick={() => setSelectedCategory(cat.id)}
                            >
                                <span className={styles.categoryIcon}>{cat.icon}</span>
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className={styles.grid}>
                        {filteredRecipes.map(recipe => (
                            <div key={recipe.id} className={styles.card}>
                                <div className={styles.cardImage}>{recipe.image}</div>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>{recipe.title}</h3>
                                    <p className={styles.cardDescription}>{recipe.description}</p>
                                    <div className={styles.cardMeta}>
                                        <span className={styles.metaItem}>⏱️ {recipe.time}</span>
                                        <span className={styles.metaItem}>📊 {recipe.difficulty}</span>
                                    </div>
                                    <button className={styles.cardButton}>
                                        Ver Receita →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {activeTab === 'guides' && (
                <div className={styles.guidesList}>
                    {guides.map(guide => (
                        <div key={guide.id} className={styles.guideCard}>
                            <div className={styles.guideIcon}>{guide.icon}</div>
                            <div className={styles.guideContent}>
                                <h3 className={styles.guideTitle}>{guide.title}</h3>
                                <p className={styles.guideDescription}>{guide.description}</p>
                            </div>
                            <button className={styles.guideButton}>
                                {guide.type === 'pdf' ? 'Baixar PDF' : 'Acessar'} →
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
