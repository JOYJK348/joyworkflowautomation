import React from 'react';
import styles from './HowItWorks.module.css';

export default function HowItWorks({ dict }: { dict: any }) {
  const { howItWorks } = dict;

  return (
    <section className={styles.process} id="how-it-works">
      <div className={`container ${styles.process__inner}`}>
        
        <div className={styles.header}>
          <h2 className="section-title">{howItWorks.title}</h2>
          <p className="section-sub">{howItWorks.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {howItWorks.steps.map((step: any, index: number) => (
            <div key={step.id} className={styles.step__card}>
              <div className={styles.step__number}>{step.number}</div>
              <div className={styles.content}>
                <h3 className={styles.step__title}>{step.title}</h3>
                <p className={styles.step__desc}>{step.desc}</p>
              </div>
              {index < howItWorks.steps.length - 1 && (
                <div className={styles.connector}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
