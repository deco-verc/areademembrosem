'use client'

import { bonuses } from '@/data/bonuses'
import styles from './bonus.module.css'
import Link from 'next/link'

export default function BonusPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Bônus Exclusivos</h1>
                <p>Materiais complementares para turbinar seus resultados</p>
            </header>

            <div className={styles.bonusGrid}>
                {bonuses.map(bonus => (
                    <Link href={`/dashboard/bonus/${bonus.id}`} key={bonus.id} className={styles.bonusCard}>
                        <div className={styles.bonusIcon}>{bonus.icon}</div>
                        <h3>{bonus.title}</h3>
                        <p>{bonus.description}</p>
                        <span className={styles.bonusType}>{bonus.type}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}
