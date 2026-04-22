'use client';

import React from 'react';
import styles from './LabsPhilosophy.module.css';

export default function LabsPhilosophy({ dict }: { dict: any }) {
  const { philosophy } = dict.ailabs;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
           <span className={styles.tag}>{philosophy.tag}</span>
           <h2 className={styles.title}>{philosophy.title}</h2>
        </div>
        
        <div className={styles.grid}>
          {philosophy.items.map((item: any, i: number) => (
            <div key={i} className={styles.card}>
              <div className={styles.card__index}>0{i + 1}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className={styles.card__glow} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
