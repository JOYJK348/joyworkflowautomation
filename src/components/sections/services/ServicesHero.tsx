'use client';

import Link from 'next/link';
import styles from './ServicesHero.module.css';

export default function ServicesHero({ dict, lang }: { dict: any; lang: string }) {
  const servicesPage = dict?.servicesPage || {};
  const hero = servicesPage.hero || {};
  const mainProduct = servicesPage.mainProduct || { tag: "", features: [] };
  const secondaryProduct = servicesPage.secondaryProduct || { tag: "", title: "", desc: "" };

  return (
    <section className={styles.hero} data-lang={lang}>
      <div className={styles.glow} />
      
      <div className={`container ${styles.hero__inner}`}>
        <div className={styles.badge}>
          {mainProduct.tag}
        </div>
        
        <h1 className={styles.title}>
          {hero.title}
        </h1>
        
        <p className={styles.subtitle}>
          {hero.subtitle}
        </p>

        <div className={styles.cta__group}>
          <Link href={`/${lang}/contact#audit-form`} className={styles.btn__primary}>
            {hero.cta}
          </Link>
        </div>

        {/* Highlight Section for the Main Product */}
        <div className={styles.product__focus}>
          {mainProduct.features.map((feature: string, index: number) => (
            <div key={index} className={styles.feature__card}>
              <div className={styles.feature__icon}>
                {index === 0 && '⚡'}
                {index === 1 && '💬'}
                {index === 2 && '🎓'}
                {index === 3 && '💰'}
              </div>
              <h3 className={styles.feature__title}>{feature}</h3>
              {/* Optional: Add small desc if available in dictionary, otherwise keep it compact */}
            </div>
          ))}
        </div>

        {/* Secondary Services Note */}
        <div className={styles.secondary__box}>
           <div className={styles.secondary__tag}>{secondaryProduct.tag}</div>
           <h3 className={styles.secondary__title}>{secondaryProduct.title}</h3>
           <p className={styles.secondary__desc}>{secondaryProduct.desc}</p>
        </div>
      </div>
    </section>
  );
}
