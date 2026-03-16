import React from 'react';
import styles from './ContactHero.module.css';

export default function ContactHero({ dict, lang }: { dict: any; lang: string }) {
  const { hero } = dict.contactPage;

  return (
    <section className={styles.hero}>
      <div className={styles.hero__glow} aria-hidden="true" />
      
      <div className={`container ${styles.inner}`}>
        <div className={styles.badge}>
          {hero.badge}
        </div>
        
        <h1 className={styles.title}>
          {hero.title}
        </h1>
        
        <p className={styles.subtitle}>
          {hero.subtitle}
        </p>

        <div className={styles.pills}>
          {hero.pills.map((pill: string, i: number) => (
            <div key={i} className={styles.pill}>
              <span className={styles.check}>✓</span>
              {pill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
