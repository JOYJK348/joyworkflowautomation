"use client";

import React from 'react';
import styles from './Services.module.css';

const Icons = {
  globe: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  cpu: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/>
    </svg>
  ),
  layers: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/><polygon points="2 17 12 22 22 17"/><polygon points="2 12 12 17 22 12"/>
    </svg>
  ),
  check: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  arrow: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  )
};

const serviceIcons: Record<string, React.ReactNode> = {
  website: Icons.globe,
  automation: Icons.cpu,
  software: Icons.layers
};

export default function Services({ dict }: { dict: any }) {
  const { services } = dict.hero;
  const [activeIndex, setActiveIndex] = React.useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const width = scrollRef.current.offsetWidth;
    const cardWidth = width * 0.88; // Matches 88vw in CSS
    const index = Math.round(scrollLeft / cardWidth);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <section className={styles.services} id="services">
      <div className={`container ${styles.services__inner}`}>
        <div className={styles.header}>
          <h2 className="section-title">{services.title}</h2>
          <p className="section-sub">{services.subtitle}</p>
        </div>

        <div 
          className={styles.grid}
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {services.cards.map((card: any) => (
            <div 
              key={card.id} 
              className={styles.card} 
              data-type={card.id}
              onMouseMove={handleMouseMove}
            >
              {/* Floating Decoration Icon */}
              <div className={styles.card__bg_icon} aria-hidden="true">
                {serviceIcons[card.id]}
              </div>

              <div className={styles.card__top}>
                <div className={styles.icon__box}>
                  {serviceIcons[card.id]}
                </div>
                <span className={styles.tag}>{card.tag}</span>
              </div>

              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.description}>{card.description}</p>

              <ul className={styles.feature__list}>
                {card.features.map((feature: string, i: number) => (
                  <li key={i} className={styles.feature__item}>
                    <span className={styles.feature__icon}>{Icons.check}</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.card__footer}>
                <div className={styles.price__badge}>
                   <span className={styles.price__label}>One-Time Investment</span>
                   <span className={styles.price__value}>{card.price}</span>
                </div>
                <button className={styles.cta}>
                  {card.cta}
                  <span className={styles.cta__icon}>{Icons.arrow}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Indicators */}
        <div className={styles.mobile_indicator}>
          {services.cards.map((_: any, i: number) => (
            <div 
              key={i} 
              className={`${styles.dot} ${activeIndex === i ? styles.dot_active : ''}`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
