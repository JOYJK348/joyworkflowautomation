'use client';

import React from 'react';
import styles from './ComparisonTable.module.css';

export default function ComparisonTable({ dict }: { dict: any }) {
  const { comparisonSection } = dict.servicesPage;

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <h2 className="section-title">{comparisonSection.title}</h2>
        </div>

        <div className={styles.table__wrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th__feature}>{comparisonSection.featureLabel || 'Feature'}</th>
                <th>Tier 1</th>
                <th>Tier 2</th>
                <th>Tier 3</th>
              </tr>
            </thead>
            <tbody>
              {comparisonSection.rows.map((row: any, i: number) => (
                <tr key={i}>
                  <td className={styles.td__feature}>{row.feature}</td>
                  <td>{row.t1 ? <span className={styles.check}>✅</span> : <span className={styles.cross}>❌</span>}</td>
                  <td>{row.t2 ? <span className={styles.check}>✅</span> : <span className={styles.cross}>❌</span>}</td>
                  <td>{row.t3 ? <span className={styles.check}>✅</span> : <span className={styles.cross}>❌</span>}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className={styles.row__price}>
                <td className={styles.td__label}>{comparisonSection.labels.price}</td>
                {comparisonSection.footer.price.map((p: string, i: number) => (
                  <td key={i} className={styles.val__price}>{p}</td>
                ))}
              </tr>
              <tr className={styles.row__support}>
                <td className={styles.td__label}>{comparisonSection.labels.support}</td>
                {comparisonSection.footer.support.map((s: string, i: number) => (
                  <td key={i}>{s}</td>
                ))}
              </tr>
              <tr className={styles.row__time}>
                <td className={styles.td__label}>{comparisonSection.labels.delivery}</td>
                {comparisonSection.footer.time.map((t: string, i: number) => (
                  <td key={i}>{t}</td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>

        <div className={styles.audit__box}>
            <p>{comparisonSection.audit.text}</p>
            <button className={styles.audit__btn}>{comparisonSection.audit.cta}</button>
        </div>
      </div>
    </section>
  );
}
