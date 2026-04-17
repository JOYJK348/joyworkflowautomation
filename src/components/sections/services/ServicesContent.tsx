'use client';

import Link from 'next/link';
import styles from './ServicesPage.module.css';

/* ═══════════════════════════════════════════
   CREATIVE SERVICES PAGE — V3
   Each section is unique, not copy-paste boxes.
   Design inspiration: Linear, Vercel, Stripe
═══════════════════════════════════════════ */

export default function ServicesContent({ dict, lang }: { dict: any; lang: string }) {
  const sp = dict?.servicesPage || {};
  const hero = sp.hero || {};
  const journey = sp.journey || { steps: [] };
  const features = sp.features || { items: [] };
  const pricing = sp.pricing || { plans: [] };
  const results = sp.results || { items: [] };
  const process = sp.process || { steps: [] };
  const secondary = sp.secondary || { items: [] };
  const finalCta = sp.finalCta || {};

  return (
    <div className={styles.page}>

      {/* ═══════ 1. HERO — Cinematic split with live dashboard mockup ═══════ */}
      <section className={styles.hero}>
        <div className={styles.hero__mesh} />
        <div className={styles.hero__orb1} />
        <div className={styles.hero__orb2} />

        <div className={styles.hero__container}>
          <div className={styles.hero__left}>
            {hero.badge && (
              <div className={styles.hero__badge}>
                <span className={styles.badge__dot} />
                {hero.badge}
              </div>
            )}
            <h1 className={styles.hero__title}>{hero.title}</h1>
            <p className={styles.hero__sub}>{hero.subtitle}</p>
            <div className={styles.hero__actions}>
              <Link href={`/${lang}/contact#audit-form`} className={styles.btn__primary}>
                {hero.cta}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>

          {/* Right: Live system mockup instead of boring stat cards */}
          <div className={styles.hero__right}>
            <div className={styles.mockup}>
              <div className={styles.mockup__topbar}>
                <div className={styles.mockup__dots}>
                  <span /><span /><span />
                </div>
                <span className={styles.mockup__url}>dashboard.joyautomations.com</span>
              </div>
              <div className={styles.mockup__body}>
                {/* Stat row */}
                <div className={styles.mockup__stats}>
                  {hero.stats?.map((s: any, i: number) => (
                    <div key={i} className={styles.mockup__stat}>
                      <div className={styles.mockup__stat__val}>{s.value}</div>
                      <div className={styles.mockup__stat__lbl}>{s.label}</div>
                    </div>
                  ))}
                </div>
                {/* Fake activity feed */}
                <div className={styles.mockup__feed}>
                  <div className={styles.feed__item}>
                    <span className={styles.feed__dot} style={{background:'#22c55e'}} />
                    <span>New enquiry from WhatsApp</span>
                    <span className={styles.feed__time}>2s ago</span>
                  </div>
                  <div className={styles.feed__item}>
                    <span className={styles.feed__dot} style={{background:'#3b82f6'}} />
                    <span>Payment received — ₹9,999</span>
                    <span className={styles.feed__time}>1m ago</span>
                  </div>
                  <div className={styles.feed__item}>
                    <span className={styles.feed__dot} style={{background:'#f59e0b'}} />
                    <span>Follow-up sent automatically</span>
                    <span className={styles.feed__time}>5m ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 2. JOURNEY — Horizontal pipeline with animated connecting line ═══════ */}
      <section className={styles.journey}>
        <div className={styles.journey__header}>
          <span className={styles.tag}>{journey.tag}</span>
          <h2 className={styles.sectionTitle}>{journey.title}</h2>
          <p className={styles.sectionSub}>{journey.desc}</p>
        </div>

        <div className={styles.pipeline}>
          <div className={styles.pipeline__line} />
          {journey.steps.map((step: any, i: number) => (
            <div key={i} className={styles.pipeline__node}>
              <div className={styles.node__number}>{step.num}</div>
              <div className={styles.node__content}>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ 3. FEATURES — Bento grid, not equal boring cards ═══════ */}
      <section className={styles.features}>
        <div className={styles.features__header}>
          <span className={styles.tag}>{features.tag}</span>
          <h2 className={styles.sectionTitle}>{features.title}</h2>
        </div>

        <div className={styles.bento}>
          {features.items.map((f: any, i: number) => (
            <div key={i} className={`${styles.bento__item} ${i < 2 ? styles.bento__large : styles.bento__small}`}>
              <div className={styles.bento__icon} data-index={i}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {i === 0 && <><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/></>}
                  {i === 1 && <><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></>}
                  {i === 2 && <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20V5H6.5A2.5 2.5 0 0 0 4 7.5z"/></>}
                  {i === 3 && <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>}
                  {i === 4 && <><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></>}
                  {i === 5 && <><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></>}
                </svg>
              </div>
              <h3 className={styles.bento__title}>{f.title}</h3>
              <p className={styles.bento__desc}>{f.desc}</p>
              {i < 2 && <div className={styles.bento__accent} />}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ 4. RESULTS — Full-width metric bar, not cards ═══════ */}
      <section className={styles.results}>
        <div className={styles.results__inner}>
          <div className={styles.results__header}>
            <span className={styles.tag}>{results.tag}</span>
            <h2 className={styles.sectionTitle}>{results.title}</h2>
          </div>
          <div className={styles.metrics__strip}>
            {results.items.map((r: any, i: number) => (
              <div key={i} className={styles.metric}>
                <div className={styles.metric__value}>{r.value}</div>
                <div className={styles.metric__label}>{r.label}</div>
                <div className={styles.metric__desc}>{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 5. PRICING — Dramatic contrast cards ═══════ */}
      <section className={styles.pricing}>
        <div className={styles.pricing__inner}>
          <span className={styles.tag}>{pricing.tag}</span>
          <h2 className={styles.sectionTitle}>{pricing.title}</h2>
          <p className={styles.sectionSub}>{pricing.subtitle}</p>

          <div className={styles.pricing__duo}>
            {pricing.plans.map((plan: any, i: number) => (
              <div key={i} className={`${styles.plan} ${plan.popular ? styles.plan__featured : styles.plan__base}`}>
                {plan.popular && <div className={styles.plan__ribbon}>★ RECOMMENDED</div>}
                <div className={styles.plan__head}>
                  <div className={styles.plan__name}>{plan.name}</div>
                  <div className={styles.plan__price}>
                    <span className={styles.plan__amount}>{plan.price}</span>
                    <span className={styles.plan__period}>/ {plan.period}</span>
                  </div>
                  <p className={styles.plan__desc}>{plan.desc}</p>
                </div>
                <ul className={styles.plan__list}>
                  {plan.features.map((feat: string, j: number) => (
                    <li key={j}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link href={`/${lang}/contact#audit-form`} className={plan.popular ? styles.plan__btn_primary : styles.plan__btn_ghost}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          {pricing.note && <p className={styles.pricing__note}>{pricing.note}</p>}
        </div>
      </section>

      {/* ═══════ 6. PROCESS — Horizontal Steps ═══════ */}
      <section className={styles.process}>
        <div className={styles.process__inner}>
          <span className={styles.tag}>{process.tag}</span>
          <h2 className={styles.sectionTitle}>{process.title}</h2>

          <div className={styles.steps__row}>
            {process.steps.map((s: any, i: number) => (
              <div key={i} className={styles.step__item}>
                <div className={styles.step__badge}>
                  <span>{s.num}</span>
                </div>
                <div className={styles.step__card}>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 7. SECONDARY — Solution Grid (RE-DESIGNED) ═══════ */}
      <section className={styles.solutions}>
        <div className="container">
          <div className={styles.solutions__header}>
            <span className={styles.tag}>{secondary.tag}</span>
            <h2 className={styles.sectionTitle}>{secondary.title}</h2>
            <p className={styles.sectionSub}>{secondary.desc}</p>
          </div>

          <div className={styles.solutions__grid}>
            {secondary.items.map((item: string, i: number) => (
              <div key={i} className={styles.solution__card}>
                <div className={styles.solution__icon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {i === 0 && <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20V5H6.5A2.5 2.5 0 0 0 4 7.5z"/></>}
                    {i === 1 && <><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></>}
                    {i === 2 && <><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>}
                    {i === 3 && <><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></>}
                    {i === 4 && <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>}
                  </svg>
                </div>
                <h3 className={styles.solution__name}>{item}</h3>
                <div className={styles.solution__glow} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 8. FINAL CTA — Dramatic full-bleed ═══════ */}
      <section className={styles.cta}>
        <div className={styles.cta__glow} />
        <div className={styles.cta__inner}>
          <h2 className={styles.cta__title}>{finalCta.title}</h2>
          <p className={styles.cta__sub}>{finalCta.subtitle}</p>
          <Link href={`/${lang}/contact#audit-form`} className={styles.btn__primary}>
            {finalCta.cta}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
