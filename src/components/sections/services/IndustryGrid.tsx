'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './IndustryGrid.module.css';

function IndustryGridContent({ dict }: { dict: any }) {
  const { industryGrid } = dict.servicesPage;
  const [activeNiche, setActiveNiche] = useState<string | null>(null);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const lastScrolledNiche = React.useRef<string | null>(null);
  const searchParams = useSearchParams();
  const nicheParam = searchParams.get('niche');

  const icons: Record<string, string> = {
    "Cafes & Restaurants": "🍳",
    "Bike Service Centers": "🔧",
    "Real Estate": "🏠",
    "Event Planners": "🎉",
    "Salons & Spas": "💆",
    "Dental Clinics": "🦷",
    "Gyms & Fitness": "💪",
    "Tuition Centers": "📚",
    "Pharmacies": "💊",
    "Tailoring Shops": "🪡",
    "Photography Studios": "📸",
    "Driving School": "🚗",
    "Car Wash Center": "🧼",
    "Education Management": "🎓",
    "Fireworks Industry": "🎆",
    "Hardware Store": "🔨",
    "Beauty Parlour": "💄"
  };

  const activeData = activeNiche ? industryGrid.solutions[activeNiche] : null;

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    if (nicheParam && industryGrid.solutions[nicheParam]) {
      setActiveNiche(nicheParam);
    }
  }, [nicheParam, industryGrid.solutions]);

  React.useEffect(() => {
    // Only scroll if it's NOT the first mount (manual click)
    if (mounted && activeNiche && cardRef.current && lastScrolledNiche.current !== activeNiche) {
      lastScrolledNiche.current = activeNiche;

      setTimeout(() => {
        const navHeight = 80;
        const elementPosition = cardRef.current?.getBoundingClientRect().top || 0;
        const offsetPosition = elementPosition + window.scrollY - navHeight - 40;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 50);
    }
  }, [activeNiche, mounted]);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <div className={styles.header__id}>DIAGNOSTIC_MODULE_01</div>
          <h2 className={styles.title}>{industryGrid.title}</h2>
          <p className={styles.subtitle}>{industryGrid.subtitle}</p>
        </div>

        <div className={styles.selector__container}>
          <div className={styles.nav__arrows}>
            <button onClick={() => scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })} className={styles.arrow__btn}>←</button>
            <button onClick={() => scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })} className={styles.arrow__btn}>→</button>
          </div>
          
          <div className={styles.niche__track} ref={scrollRef}>
            {Object.entries(industryGrid.solutions).map(([id, data]: [string, any]) => (
              <button
                key={id}
                className={`${styles.niche__tile} ${activeNiche === id ? styles.niche__tile_active : ''}`}
                onClick={() => setActiveNiche(id)}
              >
                <span className={styles.tile__icon}>{icons[id] || "🏢"}</span>
                <span className={styles.tile__label}>{data.label}</span>
              </button>
            ))}
          </div>
        </div>

        {activeData && (
          <div className={styles.diagnostic__card} ref={cardRef}>
            {/* High-End Technical Decorations */}
            <div className={styles.scan__line} />
            <div className={styles.mesh__glow_red} />
            <div className={styles.mesh__glow_blue} />
            <div className={styles.card__aura} />
            
            <div className={styles.card__header}>
              <div className={styles.header__main}>
                <span className={styles.header__icon}>{icons[activeNiche!] || "🏢"}</span>
                <div className={styles.header__text}>
                  <div className={styles.red__chip}>
                    <span className={styles.chip__dot} />
                    {industryGrid.ui.selectedTag}
                  </div>
                  <h3 className={styles.card__title}>{activeData.label}</h3>
                </div>
              </div>
            </div>

            <div className={styles.card__body}>
              {/* Problem Column: Manual Chaos */}
              <div className={styles.column__chaos}>
                <div className={styles.column__label}>
                  <span className={styles.status__dot_red}></span>
                  {industryGrid.ui.problemsTitle}
                </div>
                <div className={styles.chaos__list}>
                  {activeData.problems.map((p: string, i: number) => (
                    <div key={i} className={styles.chaos__item}>
                      <span className={styles.chaos__bullet}>✕</span>
                      <p>{p}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transition Divider (Animated Logic) */}
              <div className={styles.logic__divider}>
                <div className={styles.logic__line}></div>
                <div className={styles.logic__core}>⚡</div>
                <div className={styles.logic__line}></div>
              </div>

              {/* Solution Column: Automated Order */}
              <div className={styles.column__order}>
                <div className={styles.column__label}>
                  <span className={styles.status__dot_green}></span>
                  {industryGrid.ui.solutionTitle}
                </div>
                <div className={styles.order__list}>
                  {activeData.solution.features.map((f: string, i: number) => (
                    <div key={i} className={styles.order__item}>
                      <span className={styles.order__bullet}>✓</span>
                      <p>{f}</p>
                    </div>
                  ))}
                </div>

                <div className={styles.result__toast}>
                  <span className={styles.toast__icon}>🚀</span>
                  <p>{activeData.solution.result}</p>
                </div>
              </div>
            </div>

            {activeData.solution.toolStack && (
              <div className={styles.card__footer}>
                <span className={styles.footer__label}>PROPOSED_TECH_STACK::</span>
                <div className={styles.footer__tags}>
                  {activeData.solution.toolStack.map((tool: string, i: number) => (
                    <span key={i} className={styles.tech__tag}>{tool}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default function IndustryGrid(props: { dict: any }) {
  return (
    <Suspense fallback={null}>
      <IndustryGridContent {...props} />
    </Suspense>
  );
}
