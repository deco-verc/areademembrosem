'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import styles from './dashboard.module.css'
import type { User } from '@/lib/supabase'

export default function DashboardPage() {
    const [user, setUser] = useState<User | null>(null)
    const router = useRouter()

    useEffect(() => {
        const userData = localStorage.getItem('user')
        if (!userData) {
            router.push('/login')
            return
        }
        setUser(JSON.parse(userData))
    }, [router])

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

            <div className={styles.mainContent}>
                <Link href="/dashboard/receitas" className={styles.mainCard}>
                    <div className={styles.mainCardIcon}>🍽️</div>
                    <div className={styles.mainCardContent}>
                        <h2>200+ Receitas Saudáveis</h2>
                        <p>Receitas completas com ingredientes, modo de preparo, macronutrientes e tempo de preparo. Categorizadas por café da manhã, almoço, jantar e lanches.</p>
                        <span className={styles.mainCardButton}>Explorar Receitas →</span>
                    </div>
                </Link>

                <Link href="/dashboard/bonus" className={styles.mainCard}>
                    <div className={styles.mainCardIcon}>🎁</div>
                    <div className={styles.mainCardContent}>
                        <h2>Bônus Exclusivos</h2>
                        <p>Guias, ferramentas e materiais complementares para turbinar seus resultados e facilitar sua jornada de emagrecimento.</p>
                        <span className={styles.mainCardButton}>Ver Bônus →</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
