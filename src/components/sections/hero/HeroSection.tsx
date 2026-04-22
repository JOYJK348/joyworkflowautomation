import Link from 'next/link';
import Image from 'next/image';
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
            <Link href={`/${lang}/contact#audit-form`} className={styles.hero__btn__primary}>
              {hero.cta.primary}
              {Icons.arrowRight}
            </Link>
            <div className={styles.painPoint}>
              <div className={styles.painPoint__icon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff4d4d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <div className={styles.painPoint__text}>
                <span className={styles.painPoint__title}>{hero.painPoint.title}</span>
                <span className={styles.painPoint__subtitle}>{hero.painPoint.subtitle}</span>
              </div>
            </div>
          </div>

          <div className={styles.hero__trust}>
            <div className={styles.trust__badge}>
              <div className={styles.stars}>★★★★★</div>
              <div className={styles.trust__divider}></div>
              <div className={styles.trust__content}>
                <p>{hero.trustTitle}</p>
                <span>{lang === 'ta' ? 'உயர்நிலை தரச்சான்றிதழ் பெற்றது' : 'Global Industry Standard'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ SWAPPED RIGHT SIDE: LMS PORTAL VISUAL ═══ */}
        <div className={styles.visual}>
          <div className={styles.dashboardFrame}>
             
             <div className={styles.frameHeader}>
                <div className={styles.dots}>
                  <span className={styles.dotRed}></span>
                  <span className={styles.dotYellow}></span>
                  <span className={styles.dotGreen}></span>
                </div>
                <div className={styles.urlBar}>academy.lms.cloud</div>
                <div className={styles.menuIcon}></div>
             </div>

             <div className={styles.frameBody}>
               
                <div className={styles.dashboardGrid}>
                   
                   {/* Static Header */}
                   <div className={styles.profileCard}>
                      <div className={styles.avatar}>
                         <Image src="/images/JK.jpg" alt="Student Profile" width={48} height={48} className={styles.profilePic} />
                      </div>
                      <div className={styles.studentInfo}>
                         <div className={styles.sessionTitle}>{lang === 'ta' ? 'மாணவர்: ஜாய் ஜேகே' : 'Student: Joy JK'}</div>
                         <div className={styles.sessionDetail}>{lang === 'ta' ? 'பயிற்சி: AI மாஸ்டர்கிளாஸ்' : 'Course: AI Masterclass'}</div>
                      </div>
                      <div className={styles.liveIndicator}>
                         <span className={styles.liveDot}></span> LIVE
                      </div>
                   </div>

                   {/* 1. Face & Geo-Location Tracker (Always Scanning) */}
                   <div className={`${styles.widget} ${styles.widgetAttSuccess}`}>
                      <div className={styles.faceScanner}>
                         <div className={styles.corner} style={{top: -2, left: -2, borderRight: 0, borderBottom: 0}}></div>
                         <div className={styles.corner} style={{top: -2, right: -2, borderLeft: 0, borderBottom: 0}}></div>
                         <div className={styles.corner} style={{bottom: -2, left: -2, borderRight: 0, borderTop: 0}}></div>
                         <div className={styles.corner} style={{bottom: -2, right: -2, borderLeft: 0, borderTop: 0}}></div>
                         <div className={`${styles.faceSilhouette} ${styles.faceVerified}`}></div>
                         <div className={styles.laser}></div>
                      </div>
                      <div className={styles.widgetInfo}>
                         <h4>{lang === 'ta' ? 'முக மற்றும் இருப்பிட சரிபார்ப்பு' : 'Face & Geo-Lock'}</h4>
                         <div className={styles.geoTag}>
                            <span className={styles.pulseDot}></span>
                            {lang === 'ta' ? 'பாளையம்பட்டி, TN' : 'Palayampatti TN'}
                         </div>
                         <span className={styles.statusSuccess}>{lang === 'ta' ? 'லைவ் டிராக்கிங்' : 'Active Tracking'}</span>
                      </div>
                   </div>

                   {/* 2. Live Performance Gauge (Always Animating) */}
                   <div className={`${styles.widget} ${styles.widgetPerf} ${styles.widgetActive}`}>
                      <div className={styles.perfHeader}>
                        <h4>{lang === 'ta' ? 'நிகழ்நேர செயல்பாடு' : 'Live Performance'}</h4>
                      </div>
                      <div className={styles.gaugeContainer}>
                        <svg viewBox="0 0 100 50" className={styles.gaugeMeter}>
                          <path className={styles.gaugeBg} d="M 10 45 A 35 35 0 0 1 90 45" fill="none" />
                          <path className={`${styles.gaugeFill} ${styles.gaugeAnimate}`} d="M 10 45 A 35 35 0 0 1 90 45" fill="none" />
                        </svg>
                        <div className={styles.gaugeValue}>
                          85<span className={styles.percentText}>%</span>
                        </div>
                      </div>
                      <div className={styles.trendUp}>
                        +12% {lang === 'ta' ? 'உயர்வு' : 'Increase'}
                      </div>
                   </div>

                   {/* 3. Adaptive AI Smart Assistant */}
                   <div className={`${styles.widget} ${styles.widgetTutor} ${styles.widgetActive}`}>
                      <div className={styles.orbContainer}>
                         <div className={styles.aiOrb}></div>
                         <div className={styles.orbRing}></div>
                      </div>
                      <div className={styles.tutorContent}>
                         <h4>{lang === 'ta' ? 'AI ஸ்மார்ட் அசிஸ்டன்ட்' : 'AI Smart Assistant'}</h4>
                         <p>{lang === 'ta' ? 'உங்களுக்கான பிரத்யேக பாடக்குறிப்புகள் தயாராகிறது...' : 'Auto-generating personalized session notes...'}</p>
                      </div>
                   </div>

                </div>

             </div>
          </div>
          <div className={styles.glowBg}></div>
        </div>
      </div>
    </section>
  );
}
