import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

function FooterComponent({ dict, lang }: { dict: any, lang: string }) {
  const { footer, nav, hero } = dict;
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__inner}`}>
        
        {/* BOTTOM: 4-Column Grid */}
        <div className={styles.footer__grid_v4}>
          
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

          <div className={styles.links__col}>
            <h4>{footer.sections.solutions}</h4>
            <nav>
              {footer.solutions.map((link: any, i: number) => (
                <Link key={i} href={link.href.startsWith('/') ? `/${lang}${link.href}` : link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className={styles.contact__col}>
            <h4>{footer.sections.contact}</h4>
            <div className={styles.contact__details}>
              <a href={`mailto:${footer.contact.email}`} className={styles.contact__item}>{footer.contact.email}</a>
              <a href={footer.contact.phone_href} className={styles.contact__item}>{footer.contact.phone}</a>
            </div>
          </div>

          <div className={styles.contact__col}>
            <h4>{footer.sections.connect}</h4>
            <div className={styles.socials}>
              <a href="#" aria-label="LinkedIn">LN</a>
              <a href="#" aria-label="X">X</a>
              <a href="#" aria-label="Instagram">IG</a>
            </div>
            <Link href={`/${lang}/contact`} className={styles.footer__mini_cta}>
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

export default memo(FooterComponent);
