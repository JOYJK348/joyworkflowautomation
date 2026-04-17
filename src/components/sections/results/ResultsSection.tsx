'use client';

import React from 'react';
import styles from './ResultsSection.module.css';

export default function ResultsSection({ dict, lang }: { dict: any; lang: string }) {
  const { results } = dict;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title} style={{ fontSize: lang === 'ta' ? 'clamp(1.6rem, 3.5vw, 2.2rem)' : undefined }}>
            {results.title}
          </h2>
          <p className={styles.subtitle}>{results.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {results.items.map((item: any, index: number) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.value}>{item.value}</div>
                <h3 className={styles.label}>{item.label}</h3>
                <p className={styles.desc}>{item.desc}</p>
                <div className={styles.accent} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
