'use client';

import React from 'react';
import styles from './AboutBeliefs.module.css';

const BeliefIcons = {
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  handshake: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 11.37a4 4 0 1 1 5.63-5.63"/>
    </svg>
  ),
};

export default function AboutBeliefs({ dict, lang }: { dict: any; lang: string }) {
  const { beliefs } = dict.aboutPage;

  return (
    <section className={styles.section} data-lang={lang}>
      <div className={`container ${styles.inner}`}>
        
        <div className={styles.header}>
          <span className={styles.tag}>{beliefs.tag}</span>
          <h2 className={styles.title}>{beliefs.title}</h2>
          <p className={styles.subtitle}>{beliefs.subtitle}</p>
        </div>

        <div className={styles.blueprint}>
          {beliefs.list.map((belief: any, i: number) => (
            <div key={i} className={styles.module}>
              {/* Technical Frame Decor */}
              <div className={styles.frame__corners}>
                <span></span><span></span><span></span><span></span>
              </div>
              
              <div className={styles.module__header}>
                <div className={styles.meta}>
                  <span className={styles.coord}>X: 0{i + 1} / Y: 100%</span>
                  <span className={styles.status}>// ACTIVE_CORE</span>
                </div>
                <div className={styles.icon__circle}>
                  {BeliefIcons[belief.icon as keyof typeof BeliefIcons]}
                </div>
              </div>

              <div className={styles.module__body}>
                <h3 className={styles.module__title}>{belief.title}</h3>
                <p className={styles.module__text}>{belief.text}</p>
              </div>

              {/* Dimension Line Decor */}
              <div className={styles.dimension__line}>
                <div className={styles.dim__arrow}></div>
                <div className={styles.dim__label}>{belief.id.toUpperCase()}_LOGIC</div>
                <div className={styles.dim__arrow}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Creative Footer Accent */}
        <div className={styles.beliefs__footer}>
          <div className={styles.trust__line}></div>
          <span className={styles.trust__text}>A partnership built on pure logic and direct accountability.</span>
        </div>

      </div>
    </section>
  );
}
