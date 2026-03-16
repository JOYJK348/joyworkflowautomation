'use client';

import React from 'react';
import styles from './ExpertiseSection.module.css';

const ICONS: Record<string, React.ReactNode> = {
  "erp": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
      <path d="M6 8h12"></path>
      <path d="M6 12h12"></path>
    </svg>
  ),
  "web-mobile": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
      <line x1="12" y1="18" x2="12.01" y2="18"></line>
      <path d="M8 2v2"></path>
      <path d="M16 2v2"></path>
    </svg>
  ),
  "ai-chatbots": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      <circle cx="9" cy="10" r="1"></circle>
      <circle cx="15" cy="10" r="1"></circle>
    </svg>
  ),
  "billing": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
      <rect x="9" y="9" width="6" height="6"></rect>
      <line x1="9" y1="1" x2="9" y2="4"></line>
      <line x1="15" y1="1" x2="15" y2="4"></line>
      <line x1="9" y1="20" x2="9" y2="23"></line>
      <line x1="15" y1="20" x2="15" y2="23"></line>
      <line x1="20" y1="9" x2="23" y2="9"></line>
      <line x1="20" y1="14" x2="23" y2="14"></line>
      <line x1="1" y1="9" x2="4" y2="9"></line>
      <line x1="1" y1="14" x2="4" y2="14"></line>
    </svg>
  ),
  "ai-lms": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
    </svg>
  ),
  "automation-crm": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  )
};

export default function ExpertiseSection({ dict }: { dict: any }) {
  const { expertiseSection } = dict.servicesPage;

  if (!expertiseSection) return null;

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        
        <div className={styles.header}>
          <span className={styles.tag}>// PROFESSIONAL_STACK</span>
          <h2 className={styles.title}>{expertiseSection.title}</h2>
          <p className={styles.subtitle}>{expertiseSection.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {expertiseSection.items.map((item: any, i: number) => (
            <div key={item.id} className={styles.module}>
              {/* Technical Frame Decor */}
              <div className={styles.frame__corners}>
                <span></span><span></span><span></span><span></span>
              </div>
              
              <div className={styles.module__header}>
                <div className={styles.meta}>
                  <span className={styles.coord}>X: 0{i + 1} / Y: 100%</span>
                  <span className={styles.status}>// {item.id.toUpperCase()}_ENGINE</span>
                </div>
                <div className={styles.icon__wrapper}>
                  {ICONS[item.id]}
                </div>
              </div>

              <div className={styles.module__body}>
                <h3 className={styles.module__title}>{item.title}</h3>
                <p className={styles.module__text}>{item.desc}</p>
              </div>

              <div className={styles.features}>
                {item.features.map((feature: string, idx: number) => (
                  <div key={idx} className={styles.feature__node}>
                    <span className={styles.node__marker}></span>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Dimension Line Decor */}
              <div className={styles.dimension__line}>
                <div className={styles.dim__arrow}></div>
                <div className={styles.dim__label}>0{i + 1}_LOGIC_ARCHITECTURE</div>
                <div className={styles.dim__arrow}></div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.blueprint__footer}>
          <div className={styles.footer__line}></div>
          <span className={styles.more__text}>{expertiseSection.more_badge}</span>
        </div>

      </div>
    </section>
  );
}
