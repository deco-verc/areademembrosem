'use client'

import { bonuses } from '@/data/bonuses'
import { notFound } from 'next/navigation'
import styles from './bonus-detail.module.css'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { use } from 'react'

export default function BonusDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const bonus = bonuses.find(b => b.id === id)

    if (!bonus) {
        notFound()
    }

    return (
        <div className={styles.container}>
            <Link href="/dashboard/bonus" className={styles.backButton}>
                ← Voltar para bônus
            </Link>

            <div className={styles.bonusHeader}>
                <div className={styles.bonusIcon}>{bonus.icon}</div>
                <h1>{bonus.title}</h1>
                <p className={styles.description}>{bonus.description}</p>
                <span className={styles.bonusType}>{bonus.type}</span>
            </div>

            <div className={styles.bonusContent}>
                {bonus.content.map((section, index) => (
                    <div key={index} className={styles.contentSection}>
                        <ReactMarkdown>{section}</ReactMarkdown>
                    </div>
                ))}
            </div>
        </div>
    )
}

