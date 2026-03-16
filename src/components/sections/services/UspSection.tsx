'use client';

import React from 'react';
import styles from './UspSection.module.css';

export default function UspSection({ dict }: { dict: any }) {
  const { uspSection } = dict.servicesPage;

  return (
    <section className={styles.section}>
      <div className={styles.grid__overlay}></div>
      <div className={`container ${styles.inner}`}>
        
        <div className={styles.header}>
          <div className={styles.audit__chip}>
            <span className={styles.chip__dot}></span>
            COMPARATIVE_SYSTEM_AUDIT
          </div>
          <h2 className={styles.title}>{uspSection.title}</h2>
        </div>

        <div className={styles.matrix__container}>
          {/* Left Column: Legacy / Others */}
          <div className={styles.column__legacy}>
            <div className={styles.column__header}>
              <span className={styles.header__label}>LEGACY_PROTOCOLS</span>
              <h3 className={styles.column__title}>{uspSection.labels.others}</h3>
            </div>
            
            <div className={styles.item__list}>
              {uspSection.comparisons.map((row: any, i: number) => (
                <div key={i} className={styles.legacy__item}>
                  <div className={styles.item__meta}>0{i + 1}</div>
                  <div className={styles.item__content}>
                    <h4 className={styles.item__title}>
                      <span className={styles.fail__icon}>×</span>
                      {row.others_title}
                    </h4>
                    <p className={styles.item__desc}>{row.others_desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Central Logic Hub - Visual Bridge */}
          <div className={styles.logic__hub}>
            <div className={styles.vertical__line}></div>
            <div className={styles.vs__badge}>VS</div>
            <div className={styles.vertical__line}></div>
          </div>

          {/* Right Column: JoyAutomations */}
          <div className={styles.column__prime}>
            <div className={styles.prime__aura}></div>
            <div className={styles.column__header}>
              <div className={styles.prime__tag}>OPTIMIZED_ENGINE</div>
              <h3 className={styles.column__title_prime}>{uspSection.labels.volt}</h3>
            </div>

            <div className={styles.item__list}>
              {uspSection.comparisons.map((row: any, i: number) => (
                <div key={i} className={styles.prime__item}>
                  <div className={styles.prime__meta}>RUN_0{i + 1}</div>
                  <div className={styles.item__content}>
                    <h4 className={styles.prime__item_title}>
                      <span className={styles.check__icon}>✓</span>
                      {row.volt_title}
                    </h4>
                    <p className={styles.prime__item_desc}>{row.volt_desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.footer__accent}>
          <div className={styles.footer__line}></div>
          <p className={styles.footer__text}>// AUDIT COMPLETE: JOY_AUTOMATIONS_SUPREMACY_CONFIRMED</p>
          <div className={styles.footer__line}></div>
        </div>
      </div>
    </section>
  );
}
