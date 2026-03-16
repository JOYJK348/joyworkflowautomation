'use client';

import React from 'react';
import styles from './AboutHero.module.css';

export default function AboutHero({ dict, lang }: { dict: any; lang: string }) {
  const { hero } = dict.aboutPage;

  return (
    <section className={styles.hero} data-lang={lang}>
      {/* Ultra-Clean Background */}
      <div className={styles.grid__overlay}></div>
      <div className={styles.glow__a}></div>
      <div className={styles.glow__b}></div>
      
      <div className={`container ${styles.inner}`}>
        <div className={styles.layout}>
          
          {/* LEFT: STRATEGIC CONTENT */}
          <div className={styles.content}>
            <div className={styles.badge__wrapper}>
              <span className={styles.badge}>{hero.badge}</span>
            </div>
            
            <h1 className={styles.headline}>
              <span className={styles.headline_top}>{hero.headline.top}</span>
              <span className={styles.main__text}>{hero.headline.main}</span>
              <span className={styles.architect}>{hero.headline.highlight}</span>
            </h1>
            
            <div className={styles.description__box}>
              <div className={styles.accent__line}></div>
              <p className={styles.subline}>
                {hero.subline}
              </p>
            </div>
          </div>

          {/* RIGHT: STRATEGIC DASHBOARD (Modern Area Chart) */}
          <div className={styles.visual__box}>
            <div className={styles.chart__container}>
              
              <div className={styles.chart__header}>
                <div className={styles.chart__title}>RELENTLESS GROWTH PROTOCOL</div>
                <div className={styles.chart__coords}>LAT: 11.01 // LONG: 76.95</div>
              </div>

              <div className={styles.chart__area}>
                <svg className={styles.modern__svg} viewBox="0 0 400 240" preserveAspectRatio="none">
                  {/* Definition for Gradients */}
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

                  {/* Animated Scanner Bar */}
                  <line x1="0" y1="0" x2="0" y2="240" className={styles.scanner__bar} stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.5" />
                </svg>

                {/* Data Points - Storytelling Labels */}
                <div className={styles.data__point} style={{ left: '0%', bottom: '15%' }}>
                  <div className={styles.dot}></div>
                  <span>{hero.chart.manual}</span>
                </div>
                <div className={styles.data__point} style={{ left: '50%', bottom: '50%' }}>
                  <div className={styles.dot} style={{ backgroundColor: 'var(--accent)' }}></div>
                  <span style={{ color: 'var(--accent)' }}>{hero.chart.pivot}</span>
                </div>
                <div className={styles.data__point} style={{ left: '90%', bottom: '85%' }}>
                  <div className={styles.dot} style={{ backgroundColor: '#fff' }}></div>
                  <span style={{ color: '#fff' }}>{hero.chart.freedom}</span>
                </div>
              </div>

              {/* Telemetry Footer */}
              <div className={styles.telemetry}>
                <div className={styles.tel__item}>
                  <div className={styles.tel__label}>SYSTEM LOAD</div>
                  <div className={styles.tel__val}>-- OPTIMIZED</div>
                </div>
                <div className={styles.tel__item}>
                  <div className={styles.tel__label}>RECLAIMED_HRS</div>
                  <div className={styles.tel__val}>12.5% → 94%</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
