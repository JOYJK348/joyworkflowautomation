'use client';

import React from 'react';
import Link from 'next/link';
import styles from './LabsCTA.module.css';

export default function LabsCTA({ dict, lang }: { dict: any; lang: string }) {
  const { cta } = dict.ailabs;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.glow}></div>
          <div className={styles.content}>
            <h2 className={styles.title}>{cta.title}</h2>
            <p className={styles.subtitle}>{cta.subtitle}</p>
            <Link href={`/${lang}/contact`} className={styles.btn}>
              {cta.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
