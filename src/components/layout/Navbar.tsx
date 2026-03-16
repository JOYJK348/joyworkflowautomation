'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar({ dict, lang }: { dict: any; lang: 'en' | 'ta' }) {
  const { nav } = dict;
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Scroll to top only on actual page changes (not just locale)
  const prevPathRef = useRef(pathname);
  useEffect(() => {
    const getPurePath = (path: string) => path.split('/').slice(2).join('/');
    
    if (getPurePath(prevPathRef.current) !== getPurePath(pathname)) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
    prevPathRef.current = pathname;
  }, [pathname]);

  const closeMenu = () => setMenuOpen(false);

  const NAV_LINKS = [
    { label: nav.home, href: `/${lang}` },
    { label: nav.about, href: `/${lang}/about` }, // keeping original hrefs but adding prefix
    { label: nav.services, href: `/${lang}/services` },
    { label: nav.caseStudies, href: `/${lang}/case-studies` },
    { label: nav.contact, href: `/${lang}/contact` },
  ];

  // Logic to toggle language
  const targetLang = lang === 'en' ? 'ta' : 'en';
  const redirectedPathname = (targetLocale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = targetLocale;
    return segments.join("/");
  };

  return (
    <>
      <header
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        role="banner"
      >
        <div className={`container ${styles.navbar__inner}`}>
          {/* LOGO */}
          <Link href={`/${lang}`} className={styles.navbar__logo} aria-label="JoyAutomations Home">
            <div className={styles.navbar__logo__icon} aria-hidden="true">⚡</div>
            Joy<span>Automations</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className={styles.navbar__links} role="navigation" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.navbar__link}
                onClick={() => {
                  if (pathname === link.href) {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + LANG SWITCHER + HAMBURGER */}
          <div className={styles.nav__actions} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Language Switcher */}
            <Link
              href={redirectedPathname(targetLang)}
              className={`${styles.navbar__link} ${styles.lang__switch}`}
              scroll={false}
            >
              {lang === 'en' ? 'தமிழ்' : 'EN'}
            </Link>

            <Link
              href={`/${lang}/contact`}
              className={styles.navbar__cta}
              id="nav-contact-btn"
            >
              {nav.cta}
            </Link>

            <button
              className={`${styles.navbar__hamburger} ${menuOpen ? styles.open : ''}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              id="hamburger-btn"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <nav
        className={`${styles.navbar__mobile} ${menuOpen ? styles.open : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.navbar__link}
            onClick={() => {
              closeMenu();
              if (pathname === link.href) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                window.scrollTo({ top: 0, behavior: 'auto' });
              }
            }}
          >
            {link.label}
          </Link>
        ))}

        {/* Mobile Language SwitchER */}
        <Link
          href={redirectedPathname(targetLang)}
          className={styles.navbar__link}
          onClick={closeMenu}
          scroll={false}
          style={{ color: 'var(--accent)' }}
        >
          {lang === 'en' ? 'தமிழ்-க்கு மாற்றவும்' : 'Switch to English'}
        </Link>

        <Link
          href={`/${lang}/contact`}
          className={styles.navbar__cta}
          onClick={closeMenu}
          id="mobile-contact-btn"
        >
          {nav.cta}
        </Link>
      </nav>
    </>
  );
}
