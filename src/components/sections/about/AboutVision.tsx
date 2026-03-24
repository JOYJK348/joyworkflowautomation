'use client';

import styles from './AboutVision.module.css';

const IconMap = {
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
};

export default function AboutVision({ dict }: { dict: any }) {
  const v = dict.aboutPage.vision;

  return (
    <section className={styles.section} id="vision">
      <div className={`container ${styles.inner}`}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.tag}>{v.tag}</span>
          <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: v.title }} />
          <p className={styles.subtitle}>{v.subtitle}</p>
        </div>

        {/* Vision & Mission Grid */}
        <div className={styles.grid}>
          {v.list.map((item: any, i: number) => (
            <div key={i} className={styles.card}>
              <div className={styles.blueprint_bg} />

              <div className={styles.icon_box}>
                {IconMap[item.icon as keyof typeof IconMap]}
              </div>

              <div className={styles.card_title}>
                {item.title}
              </div>

              <h3 className={styles.headline}>
                {item.headline}
              </h3>

              <p className={styles.text}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
