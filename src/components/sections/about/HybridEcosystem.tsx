'use client';

import styles from './HybridEcosystem.module.css';

export default function HybridEcosystem({ dict, lang }: { dict: any; lang: string }) {
  const { hybridEcosystem } = dict;

  return (
    <section className={styles.section} id="hybrid-ecosystem" data-lang={lang}>
      <div className={`container ${styles.inner}`}>
        
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.tag}>{hybridEcosystem.tag}</span>
          <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: hybridEcosystem.title }} />
          <p className={styles.subtitle}>{hybridEcosystem.subtitle}</p>
        </div>

        <div className={styles.grid}>
          
          {/* BUSINESS TRACK */}
          <div className={`${styles.track} ${styles.track_b2b}`}>
            <div className={styles.track__content}>
              <div className={`${styles.track__label} ${styles.label_b2b}`}>{hybridEcosystem.business.id}</div>
              <h3 className={styles.track__name} dangerouslySetInnerHTML={{ __html: hybridEcosystem.business.name }} />
              <h4 className={styles.track__headline}>{hybridEcosystem.business.headline}</h4>
              <p className={styles.track__desc} dangerouslySetInnerHTML={{ __html: hybridEcosystem.business.desc }} />
              
              <div className={styles.metrics}>
                {hybridEcosystem.business.metrics.map((m: any, i: number) => (
                  <div key={i} className={styles.metric}>
                    <span className={`${styles.metric__val} ${styles.val_b2b}`}>{m.value}</span>
                    <span className={styles.metric__lab}>{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Professional SVG: Engine Hub */}
            <div className={styles.visual_container}>
               <div className={`${styles.visual_label} ${styles.label_top}`}>SYSTEM CORE</div>
               <svg className={styles.svg_icon} viewBox="0 0 100 100">
                  {/* Outer Hexagon */}
                  <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" fill="none" className={styles.stroke_b2b} strokeWidth="0.5" opacity="0.2" />
                  
                  {/* Rotating Rings */}
                  <circle cx="50" cy="50" r="35" fill="none" className={`${styles.stroke_b2b} ${styles.engine_ring}`} strokeWidth="0.5" strokeDasharray="5,10" />
                  <circle cx="50" cy="50" r="42" fill="none" className={`${styles.stroke_b2b} ${styles.engine_ring_rev}`} strokeWidth="0.5" strokeDasharray="2,5" opacity="0.5" />
                  
                  {/* Center Node */}
                  <circle cx="50" cy="50" r="8" fill="none" className={styles.stroke_b2b} strokeWidth="2" />
                  <circle cx="50" cy="50" r="4" className={`${styles.stroke_b2b} ${styles.node_pulse}`} fill="#ff0000" />
                  
                  {/* Connection Lines */}
                  <line x1="50" y1="50" x2="85" y2="25" className={styles.stroke_b2b} strokeWidth="0.5" opacity="0.3" />
                  <line x1="50" y1="50" x2="15" y2="25" className={styles.stroke_b2b} strokeWidth="0.5" opacity="0.3" />
                  <line x1="50" y1="50" x2="50" y2="90" className={styles.stroke_b2b} strokeWidth="0.5" opacity="0.3" />
               </svg>
               <div className={`${styles.visual_label} ${styles.label_bottom}`}>AUTONOMOUS ENGINE</div>
            </div>
          </div>

          {/* THE CONNECTOR */}
          <div className={styles.connector}>
             <div className={styles.connector__box}>
                <span className={styles.connector__title}>{hybridEcosystem.link}</span>
                <span className={styles.connector__text}>{hybridEcosystem.linkDesc}</span>
             </div>
          </div>

          {/* EDUCATION TRACK */}
          <div className={`${styles.track} ${styles.track_edu}`}>
            <div className={styles.track__content}>
              <div className={`${styles.track__label} ${styles.label_edu}`}>{hybridEcosystem.education.id}</div>
              <h3 className={styles.track__name} dangerouslySetInnerHTML={{ __html: hybridEcosystem.education.name }} />
              <h4 className={styles.track__headline}>{hybridEcosystem.education.headline}</h4>
              <p className={styles.track__desc} dangerouslySetInnerHTML={{ __html: hybridEcosystem.education.desc }} />
              
              <div className={styles.metrics}>
                {hybridEcosystem.education.metrics.map((m: any, i: number) => (
                  <div key={i} className={styles.metric}>
                    <span className={`${styles.metric__val} ${styles.val_edu}`}>{m.value}</span>
                    <span className={styles.metric__lab}>{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional SVG: Learning Stack */}
            <div className={styles.visual_container}>
               <div className={`${styles.visual_label} ${styles.label_top}`}>ACADEMY NODE</div>
               <svg className={styles.svg_icon} viewBox="0 0 100 100">
                  {/* Stacked Diamonds */}
                  <polygon points="50,20 80,40 50,60 20,40" fill="none" className={styles.stroke_edu} strokeWidth="1" opacity="0.8" />
                  <polygon points="50,40 80,60 50,80 20,60" fill="none" className={styles.stroke_edu} strokeWidth="1" opacity="0.5" />
                  <polygon points="50,60 80,80 50,100 20,80" fill="none" className={styles.stroke_edu} strokeWidth="1" opacity="0.2" />
                  
                  {/* Data Flows */}
                  <path d="M50,10 L50,90" fill="none" className={`${styles.stroke_edu} ${styles.data_beam}`} strokeWidth="0.5" strokeDasharray="5,5" />
                  
                  {/* Floating Particles */}
                  <circle cx="30" cy="30" r="1.5" fill="#a855f7" className={styles.node_pulse} />
                  <circle cx="70" cy="50" r="1.5" fill="#a855f7" className={styles.node_pulse} style={{animationDelay: '1s'}} />
                  <circle cx="50" cy="70" r="2" fill="#a855f7" />
               </svg>
               <div className={`${styles.visual_label} ${styles.label_bottom}`}>LEARNING STACK</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
