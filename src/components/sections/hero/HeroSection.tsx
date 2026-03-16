import Link from 'next/link';
import styles from './HeroSection.module.css';

/* ═══ Icons ═══ */
const Icons = {
  zap: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  arrowRight: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  play: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  notebook: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  ),
  phone: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  clock: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  xCircle: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),
  checkCircle: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
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
  trend: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
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

export default function HeroSection({ dict, lang }: { dict: any; lang: string }) {
  const { hero } = dict;

  return (
    <section className={styles.hero} id="hero" data-lang={lang}>
      <div className={styles.hero__glow} aria-hidden="true" />

      <div className={`container ${styles.hero__inner}`}>
        {/* ═══ LEFT SIDE: MESSAGING ═══ */}
        <div className={styles.hero__left}>
          <div className={styles.hero__badge}>
            <span className={styles.badge__dot} />
            {hero.badge}
          </div>

          <h1 className={styles.hero__headline}>
            <span className={styles.headline_top}>{hero.headline.top}</span>
            <span>{hero.headline.main}</span>
            <mark>{hero.headline.highlight}</mark>
          </h1>

          <div className={styles.hero__desc}>
            <p>
              <strong>{hero.subline.main}</strong> {hero.subline.secondary}
            </p>
          </div>

          <div className={styles.hero__cta}>
            <Link href="/contact" className={styles.hero__btn__primary}>
              {hero.cta.primary}
              {Icons.arrowRight}
            </Link>
            <Link href="#how-it-works" className={styles.hero__btn__secondary}>
              {Icons.play}
              {hero.cta.secondary}
            </Link>
          </div>

          <div className={styles.hero__trust}>
            <div className={styles.avatars}>
              <div className={styles.avatar} style={{ backgroundImage: "url('https://i.pravatar.cc/100?img=11')" }} />
              <div className={styles.avatar} style={{ backgroundImage: "url('https://i.pravatar.cc/100?img=12')" }} />
              <div className={styles.avatar} style={{ backgroundImage: "url('https://i.pravatar.cc/100?img=33')" }} />
              <div className={styles.avatar} style={{ backgroundImage: "url('https://i.pravatar.cc/100?img=44')" }} />
            </div>
            <div className={styles.trust__text}>
              <div className={styles.stars}>★★★★★</div>
              <p>Trusted by businesses for <strong>Smart Automation</strong></p>
            </div>
          </div>
        </div>

        {/* ═══ RIGHT SIDE: PERFORMANCE-FIRST BENTO GRID ═══ */}
        <div className={styles.hero__right}>
          <div className={styles.bento}>

            {/* Bento Card 1: AI Chat (Wide) */}
            <div className={`${styles.bento__card} ${styles.bento__wide}`}>
              <div className={styles.bento__header}>
                <div className={styles.icon_wrap} style={{ color: '#25D366', background: 'rgba(37, 211, 102, 0.1)' }}>
                  {Icons.bot}
                </div>
                <span className={styles.bento__title}>{hero.visual.botTitle}</span>
              </div>
              <div className={styles.bento__chat}>
                <div className={styles.chat__bubble_in}>{hero.visual.chatIn}</div>
                <div className={styles.chat__bubble_out}>{hero.visual.chatOut}</div>
              </div>
            </div>

            {/* Bento Card 2: Smart Lead Manager */}
            <div className={styles.bento__card}>
              <div className={styles.bento__header}>
                <div className={styles.icon_wrap} style={{ color: '#ff4d4d', background: 'rgba(255, 77, 77, 0.1)' }}>
                  {Icons.database}
                </div>
                <span className={styles.bento__title}>{hero.visual.leadTitle}</span>
              </div>
              <div className={styles.bento__data}>
                <div className={styles.data__row}><span>{hero.visual.leadJay}</span><span className={styles.tag_green}>{hero.visual.statusSaved}</span></div>
                <div className={styles.data__row}><span>{hero.visual.leadPriya}</span><span className={styles.tag_orange}>{hero.visual.statusConfirmed}</span></div>
              </div>
              <div className={styles.bento__metric} style={{ marginTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.75rem' }}>
                <h3 style={{ fontSize: '1.5rem' }}>100<span>%</span></h3>
                <p style={{ fontSize: '0.7rem', marginTop: '2px' }}>{hero.visual.zeroLeadLabel}</p>
              </div>
            </div>

            {/* Bento Card 3: Solutions Suite (Now Normal Width) */}
            <div className={`${styles.bento__card} ${styles.bento__suite}`}>
              <div className={styles.bento__header}>
                <div className={styles.icon_wrap} style={{ color: '#fff', background: 'rgba(255, 255, 255, 0.1)' }}>
                  {Icons.layers}
                </div>
                <span className={styles.bento__title}>{hero.visual.expertiseTitle}</span>
              </div>
              <div className={styles.suite__grid}>
                <div className={styles.suite__item}>{Icons.layers} {hero.visual.erp}</div>
                <div className={styles.suite__item}>{Icons.globe} {hero.visual.webMobile}</div>
                <div className={styles.suite__item}>{Icons.bot} {hero.visual.aiChatbot}</div>
                <div className={styles.suite__item}>{Icons.cap} {hero.visual.aiLms}</div>
                <div className={styles.suite__item}>{Icons.receipt} {hero.visual.billing}</div>
                <div className={styles.suite__item}>{hero.visual.more}</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
