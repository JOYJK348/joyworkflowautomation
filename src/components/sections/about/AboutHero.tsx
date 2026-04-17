'use client';

import React from 'react';
import styles from './AboutHero.module.css';

export default function AboutHero({ dict, lang }: { dict: any; lang: string }) {
  const { hero } = dict.about;
  // Fallback for chart labels if missing in new dict
  const chartLabels = {
    manual: lang === 'ta' ? 'மேனுவல் முறை' : 'Manual Burnout',
    pivot: lang === 'ta' ? 'JoyAI மாற்றம்' : 'JoyAI Flywheel',
    freedom: lang === 'ta' ? 'நிர்வாக சுதந்திரம்' : 'Scalable Freedom'
  };

  return (
    <section className={styles.hero} data-lang={lang}>
      <div className={styles.background__decor}>
        <div className={styles.circle__gradient}></div>
        <div className={styles.grid__mesh}></div>
      </div>
      
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.content}>
            <div className={styles.badge__wrap}>
              <span className={styles.badge}>{hero.badge}</span>
              <div className={styles.badge__line}></div>
            </div>
            <h1 className={styles.title}>{hero.title}</h1>
            <p className={styles.opening}>{hero.opening}</p>
          </div>
          
          {/* REVERTED TO CHART VISUAL AS REQUESTED */}
          <div className={styles.visual}>
            <div className={styles.chart__box}>
              <div className={styles.chart__header}>
                <div className={styles.chart__title}>RELENTLESS GROWTH PROTOCOL</div>
                <div className={styles.chart__coords}>SYSTEM_ACTIVE // STABLE</div>
              </div>

              <div className={styles.chart__area}>
                <svg className={styles.svg__canvas} viewBox="0 0 400 240" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="glowGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Manual Line (Steady/Slow) */}
                  <path 
                    d="M0,200 L100,195 L200,192 L300,190 L400,188" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.1)" 
                    strokeWidth="2" 
                    strokeDasharray="4 4"
                  />
                  
                  {/* Automation Area (Exponential) */}
                  <path 
                    className={styles.area__path}
                    d="M0,200 C100,200 150,180 200,120 C250,60 350,40 400,20 L400,240 L0,240 Z" 
                    fill="url(#glowGradient)" 
                  />

                  {/* Top Highlight Line */}
                  <path 
                    className={styles.line__path}
                    d="M0,200 C100,200 150,180 200,120 C250,60 350,40 400,20" 
                    fill="none" 
                    stroke="var(--accent)" 
                    strokeWidth="3" 
                  />

                </svg>

                {/* Animated Scanner Bar - Moved outside SVG for correct rendering */}
                <div className={styles.scanner__container}>
                    <div className={styles.scanner__beam}></div>
                </div>

                {/* Data Points */}
                <div className={styles.data__label} style={{ left: '0%', bottom: '15%' }}>
                   <div className={styles.dot}></div>
                   <span>{chartLabels.manual}</span>
                </div>
                <div className={styles.data__label} style={{ left: '50%', bottom: '50%' }}>
                   <div className={styles.dot} style={{ background: 'var(--accent)' }}></div>
                   <span style={{ color: 'var(--accent)' }}>{chartLabels.pivot}</span>
                </div>
                <div className={styles.data__label} style={{ left: '90%', bottom: '85%' }}>
                   <div className={styles.dot} style={{ background: '#fff' }}></div>
                   <span style={{ color: '#fff' }}>{chartLabels.freedom}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
