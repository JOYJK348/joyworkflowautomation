"use client";

import React, { useState } from 'react';
import styles from './Faq.module.css';

export default function Faq({ dict, lang }: { dict: any; lang?: string }) {
  const { faq } = dict;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faq} id="faq">
      <div className={`container ${styles.faq__inner}`}>
        
        <div className={styles.header}>
          <h2 className="section-title" style={{ fontSize: lang === 'ta' ? 'clamp(1.5rem, 3.5vw, 2.2rem)' : undefined }}>{faq.title}</h2>
          <p className="section-sub">{faq.subtitle}</p>
        </div>

        <div className={styles.accordion}>
          {faq.questions.map((item: any, index: number) => (
            <div 
              key={index} 
              className={`${styles.item} ${activeIndex === index ? styles.active : ''}`}
            >
              <button 
                className={styles.question} 
                onClick={() => toggleAccordion(index)}
                suppressHydrationWarning
              >
                <span>{item.q}</span>
                <span className={styles.icon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>
              <div className={styles.answer}>
                <div className={styles.answer__content}>
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
