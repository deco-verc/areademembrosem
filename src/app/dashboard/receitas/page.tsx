'use client'

import { useState } from 'react'
import { recipes } from '@/data/recipes'
import styles from './receitas.module.css'
import Link from 'next/link'

export default function ReceitasPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('todas')
    const [searchTerm, setSearchTerm] = useState('')

    const categories = [
        { id: 'todas', label: 'Todas' },
        { id: 'cafe-da-manha', label: 'Café da Manhã' },
        { id: 'almoco', label: 'Almoço' },
        { id: 'jantar', label: 'Jantar' },
        { id: 'lanche', label: 'Lanches' }
    ]

    const filteredRecipes = recipes.filter(recipe => {
        const matchesCategory = selectedCategory === 'todas' || recipe.category === selectedCategory
        const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>200+ Receitas Saudáveis</h1>
                <p>Receitas deliciosas e nutritivas para sua jornada de emagrecimento</p>
            </header>

            <div className={styles.filters}>
                <input
                    type="text"
                    placeholder="Buscar receita..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.searchInput}
                />

                <div className={styles.categoryButtons}>
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={selectedCategory === cat.id ? styles.active : ''}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.recipeGrid}>
                {filteredRecipes.map(recipe => (
                    <Link href={`/dashboard/receitas/${recipe.id}`} key={recipe.id} className={styles.recipeCard}>
                        <div className={styles.recipeImage}>
                            <img src={recipe.image} alt={recipe.title} />
                            <span className={styles.difficulty}>{recipe.difficulty}</span>
                        </div>
                        <div className={styles.recipeContent}>
                            <h3>{recipe.title}</h3>
                            <p>{recipe.description}</p>
                            <div className={styles.recipeInfo}>
                                <span>⏱️ {recipe.time}</span>
                                <span>🔥 {recipe.macros.calories} kcal</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
