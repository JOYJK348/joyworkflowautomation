'use client';
import Link from 'next/link';
import styles from './FloatingAnnouncement.module.css';

export default function FloatingAnnouncement({ lang }: { lang: 'en' | 'ta' }) {
  return (
    <Link href={`/${lang}/labs`} className={styles.floatingPill}>
      <div className={styles.floatingPill__content}>
        <span className={styles.floatingPill__badge}>NEW</span>
        <span className={styles.floatingPill__text}>
          JoyAI Labs: Learn AI Coding 🚀
        </span>
      </div>
    </Link>
  );
}
