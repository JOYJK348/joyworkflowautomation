"use client";

import React, { useState } from 'react';
import styles from './ProblemSolution.module.css';

/* ═══ Icons ═══ */
const Icons = {
  checkCircle: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  xCircle: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),
  arrowRight: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
};

export default function ProblemSolution({ dict, lang }: { dict: any; lang: string }) {
  const { beforeAfter } = dict.hero;
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('after');

  return (
    <section className={styles.ps} id="problem-solution" data-lang={lang}>
      <div className={`container ${styles.ps__inner}`}>
        
        {/* Section Header */}
        <div className={styles.ps__header}>
          <h2 className="section-title">
            {lang === 'ta' ? 'இப்போ என்ன நடக்குது vs ' : 'Current Reality vs '}
            <span className={styles.highlight}>{lang === 'ta' ? 'நடக்கணும்' : 'Modern Way'}</span>
          </h2>
          <p className="section-sub">
            {lang === 'ta' 
              ? 'உங்கள் Business-ன் தினசரி பிரச்சனைகளை Automate செய்தால் எப்படி இருக்கும்?' 
              : 'What happens when you replace manual bottlenecks with intelligent automation?'}
          </p>
        </div>

        {/* Mobile Radio Button / Toggle */}
        <div className={styles.mobile_toggle}>
          <div className={`${styles.toggle_slider} ${activeTab === 'before' ? styles.isBefore : styles.isAfter}`} />
          <button 
            className={`${styles.toggle_btn} ${activeTab === 'before' ? styles.active : ''}`}
            onClick={() => setActiveTab('before')}
            suppressHydrationWarning
          >
            {beforeAfter.header_before}
          </button>
          <button 
            className={`${styles.toggle_btn} ${activeTab === 'after' ? styles.active : ''}`}
            onClick={() => setActiveTab('after')}
            suppressHydrationWarning
          >
            {beforeAfter.header_after}
          </button>
        </div>

        {/* Comparison Board */}
        <div className={styles.board}>
          
          {/* LEFT: The Problem (Red Theme) */}
          <div className={`${styles.column} ${styles.col__before} ${activeTab === 'before' ? styles.active : ''}`}>
            <div className={styles.col__header}>
              <div className={styles.col__title}>
                <span className={styles.pulse_red}></span>
                <h3>{beforeAfter.header_before}</h3>
              </div>
            </div>
            
            <div className={styles.list}>
              {beforeAfter.rows.map((row: any, i: number) => (
                <div key={`before-${i}`} className={styles.card__problem}>
                  <div className={styles.icon__red}>{Icons.xCircle}</div>
                  <p>{row.before}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: The Solution (Green Theme) */}
          <div className={`${styles.column} ${styles.col__after} ${activeTab === 'after' ? styles.active : ''}`}>
            <div className={styles.col__header}>
              <div className={styles.col__title}>
                <span className={styles.pulse_green}></span>
                <h3>{beforeAfter.header_after}</h3>
              </div>
            </div>

            <div className={styles.list}>
              {beforeAfter.rows.map((row: any, i: number) => (
                <div key={`after-${i}`} className={styles.card__solution}>
                  <div className={styles.connector}>{Icons.arrowRight}</div>
                  <div className={styles.icon__green}>{Icons.checkCircle}</div>
                  <p>{row.after}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Trust Footer */}
        <div className={styles.ps__footer}>
           <p className={styles.footer__main}>{beforeAfter.footer}</p>
           <p className={styles.footer__sub}>{beforeAfter.footer_sub}</p>
        </div>

      </div>
    </section>
  );
}
