'use client';

import React, { useState } from 'react';
import styles from './ServicesHero.module.css';

const PILL_KEYS = ["Appointments", "Reply", "Numbers"];

export default function ServicesHero({ dict, lang }: { dict: any; lang: string }) {
  const { hero } = dict.servicesPage;
  const { masterSolutions } = hero;
  const [activeIndex, setActiveIndex] = useState(0);
  const solutionRef = React.useRef<HTMLDivElement>(null);


  const handlePillClick = (index: number) => {
    setActiveIndex(index);
  };

  const lastIndex = React.useRef<number>(0);

  React.useEffect(() => {
    if (solutionRef.current && lastIndex.current !== activeIndex) {
      lastIndex.current = activeIndex;
      
      const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 80;
      const elementPosition = solutionRef.current?.getBoundingClientRect().top || 0;
      const offsetPosition = elementPosition + window.scrollY - navHeight - 60;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  return (
    <section className={styles.hero} data-lang={lang}>
      <div className={`container ${styles.hero__inner}`}>
        
        <div className={styles.badge}>
          <span className={styles.tag__icon}>⚡</span>
          {hero.tag}
          <div className={styles.scan__line}></div>
        </div>

        <div className={styles.title__wrapper}>
          <div className={`${styles.corner} ${styles.tl}`}></div>
          <div className={`${styles.corner} ${styles.tr}`}></div>
          <div className={`${styles.corner} ${styles.bl}`}></div>
          <div className={`${styles.corner} ${styles.br}`}></div>
          <h1 className={styles.title}>
            {hero.title}
          </h1>
        </div>
        
        <p className={styles.subtitle}>
          {hero.subtitle}
        </p>

        <div className={styles.pills}>
          {hero.pills.map((pill: string, index: number) => {
            return (
              <button 
                key={index} 
                className={`${styles.pill} ${activeIndex === index ? styles.pill_active : ''}`}
                onClick={() => handlePillClick(index)}
              >
                {pill}
                <span className={styles.pill__glow} />
              </button>
            );
          })}
        </div>

        {/* Carousel Container */}
        <div className={styles.carousel__container} ref={solutionRef}>
          <div 
            className={styles.carousel__track} 
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {PILL_KEYS.map((key, index) => {
              const data = masterSolutions[key];
              return (
                <div key={key} className={styles.carousel__slide}>
                  <div className={styles.master__solution}>
                    <div className={styles.terminal__status}>
                      <div className={styles.status__dot}></div>
                      <span className={styles.status__text}>STRATEGY_DECK::{key.toUpperCase()}</span>
                      <span className={styles.status__coord}>[REF_0{index + 1}]</span>
                    </div>

                    <div className={styles.solution__grid}>
                      <div className={styles.solution__info}>
                        <div className={styles.solution__header}>
                          <div className={styles.solution__tag}>{hero.ui.expertTag}</div>
                          <h3 className={styles.solution__title}>{data.title}</h3>
                          <p className={styles.solution__desc}>{data.strategy}</p>
                        </div>
                        
                        <div className={styles.impact__badge}>
                          <span className={styles.impact__label}>{hero.ui.impactLabel}</span>
                          <span className={styles.impact__text}>{data.impact}</span>
                        </div>
                      </div>

                      <div className={styles.solution__visual}>
                        <BlueprintVisual activeTab={key} />
                        <ul className={styles.step__list}>
                          {data.steps.map((step: string, i: number) => (
                            <li key={i} className={styles.step__item}>
                              <span className={styles.step__num}>0{i+1}</span>
                              <span className={styles.step__text}>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Navigation Arrows */}
          <div className={styles.carousel__nav}>
            <button 
              className={styles.nav__arrow} 
              onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : PILL_KEYS.length - 1))}
              aria-label="Previous slide"
            >
              ←
            </button>
            <div className={styles.nav__dots}>
              {PILL_KEYS.map((_, i) => (
                <div key={i} className={`${styles.nav__dot} ${activeIndex === i ? styles.nav__dot_active : ''}`} />
              ))}
            </div>
            <button 
              className={styles.nav__arrow} 
              onClick={() => setActiveIndex((prev) => (prev < PILL_KEYS.length - 1 ? prev + 1 : 0))}
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Premium Aurora Background Blobs */}
      <div className={styles.aurora__1} aria-hidden="true" />
      <div className={styles.aurora__2} aria-hidden="true" />
      <div className={styles.aurora__3} aria-hidden="true" />
      
      {/* Background Decorative Elements */}
      <div className={styles.decor__glow} aria-hidden="true" />
      <div className={styles.decor__grid} aria-hidden="true" />
      <div className={styles.spotlight} aria-hidden="true" />
    </section>
  );
}

function BlueprintVisual({ activeTab }: { activeTab: string | null }) {
  if (!activeTab) return null;

  return (
    <div className={styles.blueprint__box}>
      <svg className={styles.blueprint__svg} viewBox="0 0 400 200" fill="none">
        {/* Appointments Visual */}
        {activeTab === 'Appointments' && (
          <g className={styles.blue__group}>
            <rect x="50" y="50" width="80" height="100" rx="4" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="90" cy="100" r="20" stroke="currentColor" strokeWidth="1.5" />
            <path d="M160 50h100M160 100h150M160 150h80" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <circle className={styles.ping} cx="90" cy="100" r="5" fill="var(--accent)" />
            <path d="M120 100l30-30m-30 30l30 30" stroke="currentColor" strokeWidth="1" />
          </g>
        )}
        {/* Reply Visual */}
        {activeTab === 'Reply' && (
          <g className={styles.blue__group}>
            <path d="M50 100h100M250 100h100" stroke="currentColor" strokeWidth="1" strokeDasharray="6 3" />
            <rect x="150" y="60" width="100" height="80" rx="10" stroke="currentColor" strokeWidth="2" />
            <path d="M175 90h50M175 110h30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="200" cy="40" r="4" fill="var(--cyan)" />
            <path d="M200 44v16" stroke="var(--cyan)" strokeWidth="1.5" />
          </g>
        )}
        {/* Numbers Visual */}
        {activeTab === 'Numbers' && (
          <g className={styles.blue__group}>
            <path d="M50 160V40h300" stroke="currentColor" strokeWidth="1" />
            <path d="M60 140l50-40 40 20 80-80 60 30" stroke="var(--accent)" strokeWidth="2" fill="none" />
            <circle cx="110" cy="100" r="3" fill="#fff" />
            <circle cx="150" cy="120" r="3" fill="#fff" />
            <circle cx="230" cy="40" r="3" fill="#fff" />
            <path d="M300 160h40M300 140h40M300 120h40" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          </g>
        )}
      </svg>
    </div>
  );
}
