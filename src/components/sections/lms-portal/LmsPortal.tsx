"use client";

import React from 'react';
import Image from 'next/image';
import styles from './LmsPortal.module.css';

const Icons = {
  bot: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" y1="16" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" />
    </svg>
  ),
  database: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  layers: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  globe: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  cap: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  receipt: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z" /><path d="M16 8H8" /><path d="M16 12H8" /><path d="M15 16H8" />
    </svg>
  )
};

export default function LmsPortal({ dict, lang }: { dict: any, lang: string }) {
  const { tag, title, subtitle, features } = dict.hero.lmsPortal;

  return (
    <section className={styles.section} id="lms-portal" data-lang={lang}>
      <div className="container">
        <div className={styles.layout}>
          
          <div className={styles.content}>
            <span className={styles.badge}>{tag}</span>
            <h2 className={styles.section_title_custom}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
            
            {/* Added detailed feature list to fill height and add depth */}
            <div className={styles.featureList}>
               {features?.map((feature: any, idx: number) => (
                 <div key={idx} className={styles.featureItem}>
                    <div className={styles.featureIcon}>
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                       </svg>
                    </div>
                    <div className={styles.featureText}>
                       <h4>{feature.title}</h4>
                       <p>{feature.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          {/* ═══ SWAPPED RIGHT SIDE: BENTO GRID ═══ */}
          <div className={styles.hero__right}>

            <div className={styles.bento}>

              {/* Bento Card 1: AI Chat (Wide) */}
              <div className={`${styles.bento__card} ${styles.bento__wide}`}>
                <div className={styles.bento__header}>
                  <div className={styles.icon_wrap} style={{ color: '#25D366', background: 'rgba(37, 211, 102, 0.1)' }}>
                    {Icons.bot}
                  </div>
                  <span className={styles.bento__title}>{dict.hero.visual.botTitle}</span>
                </div>
                <div className={styles.bento__chat}>
                  <div className={styles.chat__bubble_in}>{dict.hero.visual.chatIn}</div>
                  <div className={styles.chat__bubble_out}>{dict.hero.visual.chatOut}</div>
                </div>
              </div>

              {/* Bento Card 2: Smart Lead Manager */}
              <div className={styles.bento__card}>
                <div className={styles.bento__header}>
                  <div className={styles.icon_wrap} style={{ color: '#ff4d4d', background: 'rgba(255, 77, 77, 0.1)' }}>
                    {Icons.database}
                  </div>
                  <span className={styles.bento__title}>{dict.hero.visual.leadTitle}</span>
                </div>
                <div className={styles.bento__data}>
                  <div className={styles.data__row}><span>{dict.hero.visual.leadJay}</span><span className={styles.tag_green}>{dict.hero.visual.statusSaved}</span></div>
                  <div className={styles.data__row}><span>{dict.hero.visual.leadPriya}</span><span className={styles.tag_orange}>{dict.hero.visual.statusConfirmed}</span></div>
                </div>
                <div className={styles.bento__metric} style={{ marginTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.75rem' }}>
                  <h3 style={{ fontSize: '1.5rem' }}>100<span>%</span></h3>
                  <p style={{ fontSize: '0.7rem', margin: 0, marginTop: '2px' }}>{dict.hero.visual.zeroLeadLabel}</p>
                </div>
              </div>

              {/* Bento Card 3: Solutions Suite */}
              <div className={`${styles.bento__card} ${styles.bento__suite}`}>
                <div className={styles.bento__header}>
                  <div className={styles.icon_wrap} style={{ color: '#fff', background: 'rgba(255, 255, 255, 0.1)' }}>
                    {Icons.layers}
                  </div>
                  <span className={styles.bento__title}>{dict.hero.visual.expertiseTitle}</span>
                </div>
                <div className={styles.suite__grid}>
                  <div className={styles.suite__item}>{Icons.layers} {dict.hero.visual.erp}</div>
                  <div className={styles.suite__item}>{Icons.globe} {dict.hero.visual.webMobile}</div>
                  <div className={styles.suite__item}>{Icons.bot} {dict.hero.visual.aiChatbot}</div>
                  <div className={styles.suite__item}>{Icons.cap} {dict.hero.visual.aiLms}</div>
                  <div className={styles.suite__item}>{Icons.receipt} {dict.hero.visual.billing}</div>
                  <div className={styles.suite__item}>{dict.hero.visual.more}</div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
