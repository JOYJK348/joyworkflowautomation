'use client';

import React from 'react';
import Link from 'next/link';
import styles from './BannerCTA.module.css';

export default function BannerCTA({ dict, lang }: { dict: any; lang: string }) {
  const content = lang === 'ta' 
    ? { top: 'இன்றே உங்கள் அகாடமியை', highlight: 'ஆட்டோமேட்', bottom: 'செய்யுங்கள்' }
    : { top: 'Ready to scale your', highlight: 'academy', bottom: 'admissions?' };

  return (
    <section className={styles.section} data-lang={lang}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.title}>
            {content.top} <mark>{content.highlight}</mark> {content.bottom}
          </h2>
          <Link href={`/${lang}/contact`} className={styles.btn}>
             {dict.common.bookDemo}
          </Link>
        </div>
      </div>
    </section>
  );
}
