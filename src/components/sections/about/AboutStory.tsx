'use client';

import React, { useRef } from 'react';
import styles from './AboutStory.module.css';

const PainIcons = {
  time: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  lead: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  money: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
};

export default function AboutStory({ dict, lang }: { dict: any; lang: string }) {
  const { story } = dict.aboutPage;

  return (
    <section className={styles.section} data-lang={lang}>
      <div className={`container ${styles.inner}`}>

        {/* Section Label */}
        <div className={styles.label__row}>
          <span className={styles.section__tag}>{story.tag}</span>
        </div>

        {/* Opening Title */}
        <div className={styles.title__block}>
          <h2 className={styles.title}>{story.title}</h2>
          <p className={styles.subtitle}>{story.subtitle}</p>
        </div>

        {/* Pain Point Cards */}
        <div className={styles.pain__grid}>
          {story.pains.map((pain: any, i: number) => (
            <div key={i} className={styles.pain__card}>
              <div className={styles.pain__icon}>
                {PainIcons[pain.icon as keyof typeof PainIcons]}
              </div>
              <div className={styles.pain__stat}>{pain.stat}</div>
              <div className={styles.pain__text}>{pain.text}</div>
            </div>
          ))}
        </div>

        {/* The Story Block */}
        <div className={styles.story__layout}>
          <div className={styles.story__visual}>
            <div className={styles.scene}>
              <div className={styles.scene__icon}>📓</div>
              <div className={styles.scene__caption}>{story.visual.before}</div>
            </div>
            <div className={styles.arrow__down}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </div>
            <div className={`${styles.scene} ${styles.scene__after}`}>
              <div className={styles.scene__icon}>⚡</div>
              <div className={styles.scene__caption}>{story.visual.after}</div>
            </div>
          </div>

          <div className={styles.story__text}>
            <blockquote className={styles.quote}>
              <span className={styles.quote__mark}>"</span>
              {story.quote}
            </blockquote>
            {story.paragraphs.map((p: string, i: number) => (
              <p key={i} className={styles.paragraph}>{p}</p>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className={styles.mission__bar}>
          <div className={styles.mission__icon}>🎯</div>
          <p className={styles.mission__text}>{story.mission}</p>
        </div>

      </div>
    </section>
  );
}
