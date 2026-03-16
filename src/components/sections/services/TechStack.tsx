'use client';

import React from 'react';
import styles from './TechStack.module.css';

export default function TechStack({ dict }: { dict: any }) {
  const { techStack } = dict.servicesPage;

  return (
    <section className={styles.section}>
      <div className={styles.blueprint__mesh}></div>
      
      <div className={styles.inner}>
        {/* Centered Header */}
        <div className="container">
          <div className={styles.header}>
            <div className={styles.usp__badge}>
              <span className={styles.badge__dot}></span>
              CUSTOM_CODE_ENGINE
            </div>
            <h2 className={styles.title}>{techStack.title}</h2>
            <p className={styles.subtitle}>{techStack.subtitle}</p>
          </div>
        </div>

        {/* Full-Width Marquee */}
        <div className={styles.marquee__wrapper}>
          <div className={styles.marquee__container}>
            <div className={styles.tech__track}>
              {[...techStack.badges, ...techStack.badges, ...techStack.badges].map((tech: string, i: number) => {
                const logoMap: Record<string, string> = {
                  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
                  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
                  "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
                  "WhatsApp API": "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
                  "Google Sheets": "https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg",
                  "Gemini AI": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
                  "Railway": "https://railway.app/brand/logo-light.svg",
                  "Vercel": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
                };

                const invertLogos = ["Next.js", "Vercel"];

                return (
                  <div key={`${tech}-${i}`} className={styles.tech__cell}>
                    <div className={styles.cell__frame}>
                      <span></span><span></span><span></span><span></span>
                    </div>
                    
                    <div className={styles.logo__wrapper}>
                      <div className={styles.logo__aura}></div>
                      {logoMap[tech] && (
                        <img
                          src={logoMap[tech]}
                          alt={`${tech} logo`}
                          className={styles.tech__logo}
                          style={{ filter: invertLogos.includes(tech) ? 'invert(1)' : 'none' }}
                        />
                      )}
                    </div>

                    <div className={styles.tech__info}>
                      <span className={styles.tech__name}>{tech}</span>
                      <div className={styles.status__line}>
                        <span className={styles.status__indicator}></span>
                        <span className={styles.status__text}>CORE_MODULE</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Centered Footer */}
        <div className="container">
          <div className={styles.disclaimer__box}>
            <div className={styles.box__corner}></div>
            <p className={styles.disclaimer__text}>
              <span className={styles.accent__bracket}>[</span> 
              {techStack.disclaimer} 
              <span className={styles.accent__bracket}>]</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
