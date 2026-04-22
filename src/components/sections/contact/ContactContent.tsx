'use client';

import React from 'react';
import Link from 'next/link';
import styles from './ContactContent.module.css';

interface ContactContentProps {
  dict: any;
  lang: string;
}

export default function ContactContent({ dict, lang }: ContactContentProps) {
  const { contact } = dict;
  const ta = lang === 'ta';

  return (
    <div className={styles.page}>
      {/* ═══ Ambient Background ═══ */}
      <div className={styles.ambient}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.grid_overlay} />
      </div>

      {/* ═══ 1. HERO — Cinematic CTA ═══ */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.hero__content}>
            <span className={styles.badge}>
              <span className={styles.badge_dot} />
              {contact.hero.badge}
            </span>
            <h1 className={styles.hero__title}>{contact.hero.title}</h1>
            <p className={styles.hero__sub}>{contact.hero.subtitle}</p>

            <div className={styles.hero__ctas}>
              <button
                className={styles.cta_primary}
                onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}
                suppressHydrationWarning
              >
                {contact.hero.primaryCta}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <a
                href={`https://wa.me/${contact.direct.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cta_wa}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {contact.hero.waCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. MAIN CONTENT — Two-Column Grid ═══ */}
      <section className={styles.content}>
        <div className={`container ${styles.content__grid}`}>

          {/* LEFT: Dual Forms + WhatsApp */}
          <div className={styles.col_left}>
            <div className={styles.dual_forms}>
              
              {/* FORM 1: BUSINESS AUDIT */}
              <div id="audit-form" className={styles.form_card}>
                <div className={styles.form_card__header}>
                  <div className={styles.form_icon}>🏢</div>
                  <h2>{contact.form.title}</h2>
                  <p>{contact.form.subtitle}</p>
                </div>

                <form className={styles.form}>
                  <div className={styles.form_row}>
                    <div className={styles.field}>
                      <label>{contact.form.fields.name}</label>
                      <input type="text" placeholder="Your name" required suppressHydrationWarning />
                    </div>
                    <div className={styles.field}>
                      <label>{contact.form.fields.phone}</label>
                      <input type="tel" placeholder="WhatsApp number" required suppressHydrationWarning />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label>{contact.form.fields.business}</label>
                    <input type="text" placeholder="Academy/Company name" required suppressHydrationWarning />
                  </div>
                  <div className={styles.field}>
                    <label>{contact.form.fields.message}</label>
                    <textarea placeholder="Tell us about your manual bottlenecks..." rows={3}></textarea>
                  </div>
                  <button type="submit" className={styles.submit} suppressHydrationWarning>
                    {contact.form.fields.submit}
                  </button>
                </form>
              </div>

              {/* FORM 2: ACADEMY ADMISSION */}
              <div id="admission-form" className={`${styles.form_card} ${styles.academy_card}`}>
                <div className={styles.form_card__header}>
                  <div className={styles.form_icon}>🎓</div>
                  <h2>{contact.educationForm.title}</h2>
                  <p>{contact.educationForm.subtitle}</p>
                </div>

                <form className={styles.form}>
                  <div className={styles.form_row}>
                    <div className={styles.field}>
                      <label>{contact.educationForm.fields.name}</label>
                      <input type="text" placeholder="Student name" required suppressHydrationWarning />
                    </div>
                    <div className={styles.field}>
                      <label>{contact.educationForm.fields.phone}</label>
                      <input type="tel" placeholder="WhatsApp number" required suppressHydrationWarning />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label>{contact.educationForm.fields.course}</label>
                    <select required className={styles.select} defaultValue="" suppressHydrationWarning>
                      <option value="" disabled>-- {ta ? 'தேர்வு செய்க' : 'Choose Level'} --</option>
                      {contact.educationForm.fields.options.map((opt: string) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label>{contact.educationForm.fields.message}</label>
                    <textarea placeholder="Mastery goals or questions..." rows={3}></textarea>
                  </div>
                  <button type="submit" className={`${styles.submit} ${styles.academy_submit}`} suppressHydrationWarning>
                    {contact.educationForm.fields.submit}
                  </button>
                </form>
              </div>

            </div>

            {/* WhatsApp Strip */}
            <div className={styles.wa_strip}>
              <div className={styles.wa_strip__icon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <div className={styles.wa_strip__text}>
                <h4>{contact.whatsapp.title}</h4>
                <p>{contact.whatsapp.desc}</p>
              </div>
              <a
                href={`https://wa.me/${contact.direct.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.wa_strip__btn}
              >
                {contact.whatsapp.cta}
              </a>
            </div>
          </div>

          {/* RIGHT: Sidebar Cards */}
          <aside className={styles.col_right}>

            {/* Direct Contact */}
            <div className={styles.sidebar_card}>
              <h3>{contact.direct.title}</h3>
              <a href={`mailto:${contact.direct.email}`} className={styles.contact_link}>
                <div className={styles.contact_icon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <span>{contact.direct.email}</span>
              </a>
              <a href={`tel:${contact.direct.phone.replace(/[^0-9+]/g, '')}`} className={styles.contact_link}>
                <div className={styles.contact_icon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <span>{contact.direct.phone}</span>
              </a>
            </div>

            {/* Process Steps */}
            <div className={styles.sidebar_card}>
              <h3>{contact.process.title}</h3>
              <div className={styles.process_steps}>
                {contact.process.steps.map((step: string, i: number) => (
                  <div key={i} className={styles.process_step}>
                    <div className={styles.process_num}>{i + 1}</div>
                    <div className={styles.process_line} />
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Filter */}
            <div className={`${styles.sidebar_card} ${styles.filter_card}`}>
              <h3>{contact.filter.title}</h3>
              <ul className={styles.filter_list}>
                {contact.filter.items.map((item: string, i: number) => (
                  <li key={i}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </aside>
        </div>
      </section>
    </div>
  );
}
