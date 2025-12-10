'use client'

import { recipes } from '@/data/recipes'
import { notFound } from 'next/navigation'
import styles from './receita.module.css'
import Link from 'next/link'

export default function ReceitaPage({ params }: { params: { id: string } }) {
    const recipe = recipes.find(r => r.id === params.id)

    if (!recipe) {
        notFound()
    }

    return (
        <div className={styles.container}>
            <Link href="/dashboard/receitas" className={styles.backButton}>
                ← Voltar para receitas
            </Link>

            <div className={styles.recipeHeader}>
                <div className={styles.recipeImage}>
                    <img src={recipe.image} alt={recipe.title} />
                </div>
                <div className={styles.recipeInfo}>
                    <h1>{recipe.title}</h1>
                    <p className={styles.description}>{recipe.description}</p>

                    <div className={styles.quickInfo}>
                        <div className={styles.infoItem}>
                            <span className={styles.icon}>⏱️</span>
                            <div>
                                <strong>Tempo</strong>
                                <p>{recipe.time}</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.icon}>👥</span>
                            <div>
                                <strong>Porções</strong>
                                <p>{recipe.servings}</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.icon}>📊</span>
                            <div>
                                <strong>Dificuldade</strong>
                                <p style={{ textTransform: 'capitalize' }}>{recipe.difficulty}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.macros}>
                        <h3>Informações Nutricionais (por porção)</h3>
                        <div className={styles.macroGrid}>
                            <div className={styles.macroItem}>
                                <span className={styles.macroValue}>{recipe.macros.calories}</span>
                                <span className={styles.macroLabel}>Calorias</span>
                            </div>
                            <div className={styles.macroItem}>
                                <span className={styles.macroValue}>{recipe.macros.protein}g</span>
                                <span className={styles.macroLabel}>Proteínas</span>
                            </div>
                            <div className={styles.macroItem}>
                                <span className={styles.macroValue}>{recipe.macros.carbs}g</span>
                                <span className={styles.macroLabel}>Carboidratos</span>
                            </div>
                            <div className={styles.macroItem}>
                                <span className={styles.macroValue}>{recipe.macros.fat}g</span>
                                <span className={styles.macroLabel}>Gorduras</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.recipeContent}>
                <div className={styles.ingredients}>
                    <h2>🛒 Ingredientes</h2>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.instructions}>
                    <h2>👨‍🍳 Modo de Preparo</h2>
                    <ol>
                        {recipe.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}
