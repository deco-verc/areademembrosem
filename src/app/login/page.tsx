'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './login.module.css'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            })

            const data = await response.json()

            if (!response.ok) {
                setError(data.error || 'Erro ao fazer login')
                setLoading(false)
                return
            }

            // Store user data in localStorage
            localStorage.setItem('user', JSON.stringify(data.user))

            // Redirect to dashboard
            router.push('/dashboard')
        } catch (err) {
            setError('Erro de conexão. Tente novamente.')
            setLoading(false)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <div className={styles.gradient1}></div>
                <div className={styles.gradient2}></div>
                <div className={styles.gradient3}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.card}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>
                            Bem-vindo de volta! 🎉
                        </h1>
                        <p className={styles.subtitle}>
                            Acesse sua área de membros com seu email
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email" className={styles.label}>
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="seu@email.com"
                                className={styles.input}
                                required
                                disabled={loading}
                            />
                        </div>

                        {error && (
                            <div className={styles.error}>
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className={styles.button}
                            disabled={loading}
                        >
                            {loading ? (
                                <span className={styles.spinner}></span>
                            ) : (
                                'Acessar Área de Membros'
                            )}
                        </button>
                    </form>

                    <div className={styles.footer}>
                        <p className={styles.footerText}>
                            Ainda não tem acesso?{' '}
                            <a href="#" className={styles.link}>
                                Adquira agora
                            </a>
                        </p>
                    </div>
                </div>

                <div className={styles.features}>
                    <div className={styles.feature}>
                        <div className={styles.featureIcon}>📚</div>
                        <h3>200+ Receitas</h3>
                        <p>Simples, gostosas e acessíveis</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.featureIcon}>🎯</div>
                        <h3>Cardápios Prontos</h3>
                        <p>Planejamento semanal completo</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.featureIcon}>💎</div>
                        <h3>Bônus Exclusivos</h3>
                        <p>Guias e materiais extras</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
