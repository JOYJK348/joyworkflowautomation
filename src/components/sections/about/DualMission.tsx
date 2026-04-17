'use client';

import Link from 'next/link';
import styles from './DualMission.module.css';

export default function DualMission({ dict, lang }: { dict: any; lang: string }) {
  const { dualMission } = dict;
  
  return (
    <section className={styles.section} id="dual-mission">
      <div className={`container ${styles.inner}`}>

        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.tag}>{dualMission.tag}</span>
          <h2 className={styles.title}>
            {dualMission.title.main} <span className={styles.accent}>{dualMission.title.accent}</span>
          </h2>
          <p className={styles.subtitle}>
            {dualMission.subtitle}
          </p>
        </div>

        {/* The Two Pillars */}
        <div className={styles.grid}>

          {/* PILLAR 1: B2B — JoyAutomations */}
          <div className={`${styles.card} ${styles.card_b2b}`}>
            <div className={styles.card__glow} />
            
            <div className={styles.card__badge}>{dualMission.automation.badge}</div>
            
            <div className={styles.card__icon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <h3 className={styles.card__title}>
              {dualMission.automation.title.main}<span className={styles.card__title_accent}>{dualMission.automation.title.accent}</span>
            </h3>
            
            <p className={styles.card__tagline}>
              {dualMission.automation.tagline}
            </p>

            <ul className={styles.card__list}>
              {dualMission.automation.features.map((feature: string, i: number) => (
                <li key={i}>
                  <span className={styles.bullet}>▸</span>
                  {feature}
                </li>
              ))}
            </ul>

          </div>

          {/* CENTER CONNECTOR */}
          <div className={styles.connector}>
            <div className={styles.connector__line} />
            <div className={styles.connector__circle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M8 7h12m0 0l-4-4m4 4l-4 4M16 17H4m0 0l4-4m-4 4l4 4" />
              </svg>
            </div>
            <div className={styles.connector__label}>{dualMission.connector}</div>
            <div className={styles.connector__line} />
          </div>

          {/* PILLAR 2: B2C — JoyAI Labs */}
          <div className={`${styles.card} ${styles.card_edu}`}>
            <div className={styles.card__glow_edu} />
            
            <div className={`${styles.card__badge} ${styles.badge_edu}`}>{dualMission.labs.badge}</div>
            
            <div className={`${styles.card__icon} ${styles.icon_edu}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path d="M12 14l9-5-9-5-9 5 9 5zM12 14v6" />
              </svg>
            </div>

            <h3 className={styles.card__title}>
              {dualMission.labs.title.main} <span className={styles.card__title_edu}>{dualMission.labs.title.accent}</span>
            </h3>
            
            <p className={styles.card__tagline}>
              {dualMission.labs.tagline}
            </p>

            <ul className={styles.card__list}>
              {dualMission.labs.features.map((feature: string, i: number) => (
                <li key={i}>
                  <span className={`${styles.bullet} ${styles.bullet_edu}`}>▸</span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link href={`/${lang}#dual-mission`} className={styles.card__cta}>
              {dualMission.labs.cta}
            </Link>
          </div>
        </div>

        {/* Bottom Philosophy */}
        <div className={styles.philosophy}>
          <div className={styles.philosophy__line} />
          <p 
            className={styles.philosophy__text}
            dangerouslySetInnerHTML={{ __html: dualMission.philosophy }}
          />
          <div className={styles.philosophy__line} />
        </div>

      </div>
    </section>
  );
}
