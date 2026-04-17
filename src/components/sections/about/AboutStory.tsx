'use client';

import React from 'react';
import styles from './AboutStory.module.css';

const IconProblem = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
);

const IconSolution = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
);

const IconStrength = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
    </svg>
);

export default function AboutStory({ dict, lang }: { dict: any; lang: string }) {
  const { problem, solution, strength, who, vision, labs, trust } = dict.about;

  return (
    <section className={styles.section} data-lang={lang}>
      <div className="container">
        
        {/* BENTO GRID START */}
        <div className={styles.bento}>
          
          {/* 1. Problem - Large */}
          <div className={`${styles.card} ${styles.card__problem}`}>
            <div className={styles.icon__box}><IconProblem /></div>
            <h3 className={styles.card__title}>{problem.title}</h3>
            <p className={styles.card__text}>{problem.text}</p>
            <div className={styles.visual__problem}>
                <div className={styles.noise}></div>
            </div>
          </div>

          {/* 2. Solution - Wide */}
          <div className={`${styles.card} ${styles.card__solution}`}>
             <div className={styles.icon__box}><IconSolution /></div>
             <div className={styles.card__content}>
                <h3 className={styles.card__title}>{solution.title}</h3>
                <p className={styles.card__text}>{solution.text}</p>
             </div>
          </div>

          {/* 3. Who - Small */}
          <div className={`${styles.card} ${styles.card__who}`}>
             <h3 className={styles.card__title}>{who.title}</h3>
             <p className={styles.card__text}>{who.text}</p>
             <div className={styles.who__circles}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
             </div>
          </div>

          {/* 4. Strength - Tall */}
          <div className={`${styles.card} ${styles.card__strength}`}>
            <div className={styles.icon__box}><IconStrength /></div>
            <h3 className={styles.card__title}>{strength.title}</h3>
            <p className={styles.card__text}>{strength.text}</p>
          </div>

          {/* 5. JoyAI Labs - Large Horizontal */}
          <div className={`${styles.card} ${styles.card__labs}`}>
             <div className={styles.labs__inner}>
                <div className={styles.labs__content}>
                    <span className={styles.labs__tag}>Community</span>
                    <h3 className={styles.card__title}>{labs.title}</h3>
                    <p className={styles.card__text}>{labs.text}</p>
                    <button className={styles.labs__button}>
                        {lang === 'ta' ? 'JoyAI Labs-ஐ ஆராயுங்கள் →' : 'Explore JoyAI Labs →'}
                    </button>
                </div>
                <div className={styles.labs__visual}>
                    <div className={styles.labs__glow}></div>
                    <div className={styles.neural__net}>
                        <div className={styles.net__node}></div>
                        <div className={styles.net__orbit}></div>
                        <div className={styles.net__orbit}></div>
                        <div className={styles.net__orbit}></div>
                    </div>
                    <div className={styles.prompt__stack}>
                        <span className={styles.prompt__line}>{'>'} Initializing Neural Core...</span>
                        <span className={styles.prompt__line}>{'>'} Prompting JoyAI Agent...</span>
                        <span className={styles.prompt__line}>{'>'} System: Growth.ready</span>
                    </div>
                </div>
             </div>
          </div>

        </div>

        {/* Vision - Detailed Banner */}
        <div className={styles.vision__banner}>
            <div className={styles.vision__bg}></div>
            <div className={styles.vision__content}>
                <div className={styles.vision__header}>
                    <span className={styles.vision__badge}>{lang === 'ta' ? 'நோக்கம்' : 'Mission'}</span>
                    <h2 className={styles.vision__title}>{vision.title}</h2>
                </div>
                <div className={styles.vision__grid}>
                    <div className={styles.vision__main}>
                        <p className={styles.vision__text}>{vision.text}</p>
                    </div>
                    <div className={styles.vision__points}>
                        {vision.points.map((point: string, i: number) => (
                            <div key={i} className={styles.vision__point}>
                                <div className={styles.vision__point__icon}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <span>{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Why Us / Trust Section - Expanded & Professional */}
        <div className={styles.trust__section}>
            <div className={styles.trust__header}>
                <h2 className={styles.trust__title}>{trust.title}</h2>
                <div className={styles.trust__line}></div>
            </div>
            
            <div className={styles.trust__grid}>
                {trust.items.map((item: any, i: number) => (
                    <div key={i} className={styles.trust__card}>
                        <div className={styles.trust__icon}>
                            {i === 0 && (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                </svg>
                            )}
                            {i === 1 && (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                                </svg>
                            )}
                            {i === 2 && (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>
                                </svg>
                            )}
                        </div>
                        <h4 className={styles.trust__item__title}>{item.title}</h4>
                        <p className={styles.trust__item__desc}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}
