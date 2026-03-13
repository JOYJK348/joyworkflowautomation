import Link from 'next/link';
import styles from './HeroSection.module.css';

/* ═══ SVG Icon Components ═══ */
const Icons = {
  notebook: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
      <line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="13" y2="11"/>
    </svg>
  ),
  phone: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  xCircle: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
    </svg>
  ),
  clipboard: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
      <line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/>
    </svg>
  ),
  calendar: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
    </svg>
  ),
  messageCircle: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
  ),
  checkCircle: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ),
  barChart: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  ),
  bot: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/>
      <path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/>
    </svg>
  ),
  calculator: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/>
      <line x1="8" y1="10" x2="8" y2="10"/><line x1="12" y1="10" x2="12" y2="10"/>
      <line x1="16" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="8" y2="14"/>
      <line x1="12" y1="14" x2="12" y2="14"/><line x1="16" y1="14" x2="16" y2="14"/>
      <line x1="8" y1="18" x2="8" y2="18"/><line x1="12" y1="18" x2="16" y2="18"/>
    </svg>
  ),
  target: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  arrowRight: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  zap: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  check: (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8l3.5 3.5L13 4.5"/>
    </svg>
  ),
  chevronDown: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  ),
  scrollDown: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12l7 7 7-7"/>
    </svg>
  ),
  creditCard: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
    </svg>
  ),
  sparkles: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.91 5.81L20 10.73l-4.55 4.31 1.07 6.13L12 18.27l-4.52 2.9 1.07-6.13L4 10.73l6.09-1.92L12 3z"/>
    </svg>
  ),
};

const TOOLS = [
  { icon: Icons.bot,        name: 'AI Assistant',    href: '#ai-assistant',  id: 'tool-ai' },
  { icon: Icons.calculator,  name: 'Loss Calculator', href: '/calculator',    id: 'tool-calc' },
  { icon: Icons.target,      name: 'Free Plan',       href: '/contact',       id: 'tool-plan' },
];

export default function HeroSection({ dict }: { dict: any }) {
  const { hero } = dict;

  const beforeAfterIcons = [
    { iconBefore: Icons.notebook,  iconAfter: Icons.calendar },
    { iconBefore: Icons.phone,     iconAfter: Icons.messageCircle },
    { iconBefore: Icons.xCircle,   iconAfter: Icons.checkCircle },
    { iconBefore: Icons.clipboard, iconAfter: Icons.barChart },
    { iconBefore: Icons.phone,     iconAfter: Icons.creditCard },
  ];

  return (
    <section className={styles.hero} aria-label="Hero" id="hero">
      {/* Background mesh */}
      <div className={styles.hero__mesh} aria-hidden="true">
        <div className={styles.hero__mesh__blob1} />
        <div className={styles.hero__mesh__blob2} />
        <div className={styles.hero__mesh__blob3} />
      </div>

      <div className={`container ${styles.hero__inner}`}>
        {/* ═══ LEFT ═══ */}
        <div className={styles.hero__left}>
          <div className={styles.hero__badge}>
            <span className={styles.hero__badge__dot} aria-hidden="true">
              {Icons.sparkles}
            </span>
            {hero.badge}
          </div>

          <h1 className={styles.hero__headline}>
            <span className={styles.hero__headline__ta}>
              {hero.headline.top}
            </span>
            {hero.headline.main}
            <br />
            on <mark>{hero.headline.highlight}</mark>
          </h1>

          <p className={styles.hero__sub}>
            <strong>{hero.subline.main}</strong>
            <span className={styles.hero__sub__ta}>
              {hero.subline.secondary}
            </span>
          </p>

          <div className={styles.hero__trust}>
            {hero.trust.map((t: string, i: number) => (
              <span key={i} className={styles.hero__trust__item}>
                <span className={styles.hero__trust__icon} aria-hidden="true">{Icons.check}</span>
                {t}
              </span>
            ))}
          </div>


          <div className={styles.hero__cta}>
            <Link href="/contact" className={styles.hero__cta__primary} id="hero-cta">
              {hero.cta.primary}
              <span className={styles.hero__cta__arrow} aria-hidden="true">{Icons.arrowRight}</span>
            </Link>
            <Link href="#how-it-works" className={styles.hero__cta__secondary} id="hero-how">
              {hero.cta.secondary}
              <span aria-hidden="true">{Icons.chevronDown}</span>
            </Link>
          </div>

          <div className={styles.hero__tools}>
            {TOOLS.map((t) => (
              <Link key={t.id} href={t.href} className={styles.hero__tool} id={t.id}>
                <span className={styles.hero__tool__icon} aria-hidden="true">{t.icon}</span>
                <span className={styles.hero__tool__name}>{t.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* ═══ RIGHT — Card ═══ */}
        <div className={styles.hero__right}>
          <div className={styles.hero__card}>
            <div className={styles.hero__card__header}>
              <div className={`${styles.hero__card__col} ${styles.hero__card__col__before}`}>
                <span className={styles.hero__card__col__icon} aria-hidden="true">{Icons.xCircle}</span>
                {hero.beforeAfter.header_before}
              </div>
              <div className={`${styles.hero__card__col} ${styles.hero__card__col__after}`}>
                <span className={styles.hero__card__col__icon} aria-hidden="true">{Icons.checkCircle}</span>
                {hero.beforeAfter.header_after}
              </div>
            </div>

            <div className={styles.hero__card__body}>
              {hero.beforeAfter.rows.map((row: any, i: number) => (
                <div key={i} className={styles.hero__card__row}>
                  <div className={`${styles.hero__card__cell} ${styles.hero__card__cell__before}`}>
                    <span className={styles.hero__card__cellIcon__before} aria-hidden="true">
                      {beforeAfterIcons[i].iconBefore}
                    </span>
                    <span>
                      {row.before}
                    </span>
                  </div>
                  <div className={`${styles.hero__card__cell} ${styles.hero__card__cell__after}`}>
                    <span className={styles.hero__card__cellIcon__after} aria-hidden="true">
                      {beforeAfterIcons[i].iconAfter}
                    </span>
                    <span>
                      {row.after}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.hero__card__footer}>
              <span className={styles.hero__card__footer__icon} aria-hidden="true">{Icons.zap}</span>
              <p>
                <strong>{hero.beforeAfter.footer}</strong>
                <span style={{ display: 'block', fontSize: '0.65rem', marginTop: '0.05rem' }}>
                  {hero.beforeAfter.footer_sub}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.hero__scroll} aria-hidden="true">
        {Icons.scrollDown}
        <span>scroll</span>
      </div>
    </section>
  );
}
