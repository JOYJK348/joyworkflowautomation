"use client";

import React from 'react';
import styles from './Services.module.css';

const Icons = {
  check: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  arrow: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  )
};

export default function Services({ dict }: { dict: any }) {
  // Accessing cards from the updated dictionary path
  const { title, subtitle, cards } = dict.hero.services;
  const [activeIndex, setActiveIndex] = React.useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const width = scrollRef.current.offsetWidth;
    const cardWidth = width * 0.85; 
    const index = Math.round(scrollLeft / cardWidth);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <section className={styles.services} id="services">
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">{title}</h2>
          <p className="section-sub">{subtitle}</p>
        </div>

        <div 
          className={styles.grid}
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {cards.map((card: any, i: number) => (
            <div key={card.id} className={styles.card_wrap}>
              <div className={styles.card}>
                <div className={styles.card__top}>
                  <span className={styles.tag}>{card.tag}</span>
                  <span className={styles.logic_badge}>// {card.logic}</span>
                </div>

                <h3 className={styles.title}>{card.title}</h3>
                <p 
                  className={styles.description} 
                  dangerouslySetInnerHTML={{ __html: card.desc || card.subtitle }} 
                />

                <ul className={styles.feature__list}>
                  {card.features.map((feature: string, fIdx: number) => (
                    <li key={fIdx} className={styles.feature__item}>
                      <span className={styles.feature__icon}>{Icons.check}</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className={styles.card__footer}>
                  <div className={styles.price_wrap}>
                    <span className={styles.price__label}>{card.priceLabel}</span>
                    <span className={styles.price__value}>{card.price}</span>
                  </div>
                  <button 
                    className={styles.cta} 
                    aria-label={`Choose ${card.title}`}
                    suppressHydrationWarning
                  >
                    {Icons.arrow}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
