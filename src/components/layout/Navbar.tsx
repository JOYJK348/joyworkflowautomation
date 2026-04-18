'use client';

import { useState, useEffect, useRef, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

function NavbarComponent({ dict, lang }: { dict: any; lang: 'en' | 'ta' }) {
  const { nav } = dict;
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tickerVisible, setTickerVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      // Use requestAnimationFrame for smooth scroll detection
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  // Scroll to top optimized
  useEffect(() => {
    if (menuOpen) setMenuOpen(false);
  }, [pathname]);

  const closeMenu = () => setMenuOpen(false);

  const NAV_LINKS = [
    { label: nav.home, href: `/${lang}` },
    { label: nav.about, href: `/${lang}/about` },
    { label: nav.services, href: `/${lang}/services` },
    { label: "AILabs 🎓", href: `/${lang}#dual-mission`, isHighlight: true },
    { label: nav.contact, href: `/${lang}/contact` },
  ];

  const targetLang = lang === 'en' ? 'ta' : 'en';
  const redirectedPathname = (targetLocale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = targetLocale;
    return segments.join("/");
  };

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        {tickerVisible && (
          <div className={styles.tickerWrapper}>
            <div className={styles.tickerTrack}>
              {[...Array(6)].map((_, i) => (
                <div key={i} className={styles.tickerItem}>
                  <span className={styles.tickerBadge}>NEW</span>
                  <span className={styles.tickerText}>
                    Launching JoyAI Labs: Master AI-First Web Development & Launch Apps in 7 Days.
                  </span>
                  <Link href={`/${lang}/labs`} className={styles.tickerLink}>Explore Labs &rarr;</Link>
                  <span className={styles.tickerDot}></span>
                </div>
              ))}
            </div>
            <button 
              className={styles.tickerClose} 
              onClick={() => setTickerVisible(false)}
              aria-label="Close Announcement"
              suppressHydrationWarning
            >
              &times;
            </button>
          </div>
        )}

        <div className={`container ${styles.navbar__inner}`}>
          <Link href={`/${lang}`} className={styles.navbar__logo}>
            <div className={styles.navbar__logo__icon}>
              <Image
                src="/images/offl_logo.png"
                alt="JoyAutomations"
                width={80}
                height={80}
                className={styles.logo_img}
                priority
              />
            </div>
            <div className={styles.navbar__brand_text}>
              <div className={styles.brand_main}>
                <span className={styles.brand_j}>JOY</span>
                <div className={styles.brand_divider}></div>
                <span className={styles.brand_a}>AUTOMATIONS</span>
              </div>
            </div>
          </Link>

          <nav className={styles.navbar__links}>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navbar__link} ${isActive ? styles.navbar__link_active : ''} ${link.isHighlight ? styles.navbar__link_highlight : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className={styles.nav__actions}>
            <Link
              href={redirectedPathname(targetLang)}
              className={`${styles.navbar__link} ${styles.lang__switch}`}
              scroll={false}
            >
              {lang === 'en' ? 'தமிழ்' : 'EN'}
            </Link>

            <button
              className={`${styles.navbar__hamburger} ${menuOpen ? styles.open : ''}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <nav className={`${styles.navbar__mobile} ${menuOpen ? styles.open : ''}`} onClick={closeMenu}>
        <div className={styles.navbar__mobile_content} onClick={(e) => e.stopPropagation()}>
          <div className={styles.drawer__handle}></div>
          <div className={styles.navbar__mobile_links}>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navbar__link} ${isActive ? styles.navbar__link_active : ''} ${link.isHighlight ? styles.navbar__link_highlight : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}

export default memo(NavbarComponent);
