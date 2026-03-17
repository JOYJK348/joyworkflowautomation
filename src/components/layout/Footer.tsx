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
              Joy<span>Automations</span>
            </Link>
            <p className={styles.tagline}>{footer.tagline}</p>
          </div>

          {/* Links Column */}
          <div className={styles.links__col}>
            <h4>{footer.sections.links}</h4>
            <nav>
              {footer.quickLinks.map((link: any, i: number) => (
                <Link key={i} href={link.href.startsWith('/') ? `/${lang}${link.href}` : link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services Column */}
          <div className={styles.links__col}>
            <h4>{footer.sections.services}</h4>
            <nav>
              {hero.services.cards.map((card: any) => (
                <Link key={card.id} href={`/${lang}/services`}>{card.title}</Link>
              ))}
            </nav>
          </div>

          <div className={styles.contact__col}>
            <h4>{footer.sections.contact}</h4>
            <div className={styles.contact__details}>
              <a href={`mailto:${footer.contact.email}`} className={styles.contact__item}>
                {footer.contact.email}
              </a>
              <a href={footer.contact.phone_href} className={styles.contact__item}>
                {footer.contact.phone}
              </a>
              <div className={styles.socials}>
                <a href="#" aria-label="LinkedIn">LN</a>
                <a href="#" aria-label="X (Twitter)">X</a>
                <a href="#" aria-label="Instagram">IG</a>
              </div>
            </div>
            <Link href={`/${lang}/contact`} className={styles.footer__cta}>
              {nav.cta}
            </Link>
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
