import React from 'react';
import styles from './HowItWorks.module.css';

export default function HowItWorks({ dict }: { dict: any }) {
  const howItWorks = dict.process;
  
  const icons = [
    <svg key="audit" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
    <svg key="build" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 22 4-10 4 10"/></svg>,
    <svg key="scale" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"/><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"/></svg>
  ];

  return (
    <section className={styles.process} id="how-it-works">
      <div className={`container ${styles.process__inner}`}>
        
        <div className={styles.header}>
          <h2 className="section-title">{howItWorks.title}</h2>
        </div>

        <div className={styles.logic__path}>
          {howItWorks.steps.map((step: any, index: number) => (
            <React.Fragment key={step.id}>
              <div className={`${styles.step__container} ${styles[`step_${index}`]}`}>
                <div className={styles.node__box}>
                  <div className={styles.node__icon}>{icons[index]}</div>
                  <div className={styles.node__number}>{step.number}</div>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.step__title}>{step.title}</h3>
                  <p className={styles.step__desc}>{step.desc}</p>
                </div>
              </div>
              
              {index < howItWorks.steps.length - 1 && (
                <div className={styles.path__connector}>
                  <div className={styles.arrow__line}></div>
                  <div className={styles.arrow__head}></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
