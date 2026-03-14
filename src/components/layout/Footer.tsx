import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer({ dict, lang }: { dict: any, lang: string }) {
  const { footer, nav, hero } = dict;
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__inner}`}>
        <div className={styles.footer__grid}>
          
          {/* Brand Column */}
          <div className={styles.brand__col}>
            <Link href={`/${lang}`} className={styles.logo}>
              Workflow<span>Craft</span>
            </Link>
            <p className={styles.tagline}>{footer.tagline}</p>
          </div>

          {/* Links Column */}
          <div className={styles.links__col}>
            <h4>{footer.sections.links}</h4>
            <nav>
              <Link href="#problem-solution">{lang === 'ta' ? 'Reality Check' : 'Reality Check'}</Link>
              <Link href="#calculator">{lang === 'ta' ? 'ROI Calculator' : 'ROI Calculator'}</Link>
              <Link href="#services">{nav.services}</Link>
              <Link href="/">{nav.caseStudies}</Link>
            </nav>
          </div>

          {/* Services Column */}
          <div className={styles.links__col}>
            <h4>{footer.sections.services}</h4>
            <nav>
              {hero.services.cards.map((card: any) => (
                <Link key={card.id} href="#services">{card.title}</Link>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div className={styles.contact__col}>
            <h4>{footer.sections.contact}</h4>
            <div className={styles.contact__details}>
              <a href="mailto:hello@workflowcraft.in" className={styles.contact__item}>
                hello@workflowcraft.in
              </a>
              <a href="tel:+91XXXXXXXXXX" className={styles.contact__item}>
                +91 9XX XXX XXXX
              </a>
              <div className={styles.socials}>
                <a href="#" aria-label="LinkedIn">LN</a>
                <a href="#" aria-label="X (Twitter)">X</a>
                <a href="#" aria-label="Instagram">IG</a>
              </div>
            </div>
            <button className={styles.footer__cta}>
              {nav.cta}
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom__bar}>
          <p>{footer.copyright}</p>
          <p className={styles.credit}>{footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
