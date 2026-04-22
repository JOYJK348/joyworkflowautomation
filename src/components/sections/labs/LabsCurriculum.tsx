'use client';

import React, { useState } from 'react';
import styles from './LabsCurriculum.module.css';
import LabsModal from './LabsModal';

const IconCheck = () => (
    <svg className={styles.check} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

export default function LabsCurriculum({ dict, lang }: { dict: any; lang: string }) {
  const { levels } = dict.ailabs;
  const [selectedLevel, setSelectedLevel] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewMore = (item: any) => {
    setSelectedLevel(item);
    setIsModalOpen(true);
  };

  return (
    <section id="curriculum" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.tag}>{levels.tag}</span>
          <h2 className={styles.title}>{levels.title}</h2>
        </div>

        <div className={styles.grid}>
          {levels.items.map((item: any, i: number) => (
            <div key={i} className={`${styles.card} ${i === 1 ? styles.card_active : ''}`}>
              <span className={styles.card__badge}>{item.badge}</span>
              <h3 className={styles.card__title}>{item.title}</h3>
              <p className={styles.card__desc}>{item.desc}</p>
              
              <ul className={styles.list}>
                {item.outcomes.map((point: string, j: number) => (
                  <li key={j} className={styles.list__item}>
                    <IconCheck />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.footer}>
                <span className={styles.result__label}>{lang === 'ta' ? 'முடிவு' : 'Outcome'}</span>
                <p className={styles.result__text}>"{item.result}"</p>
                
                <button 
                  className={styles.view__btn}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewMore(item);
                  }}
                  style={{ position: 'relative', zIndex: 50, pointerEvents: 'auto' }}
                >
                  {levels.viewMore}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedLevel && (
        <LabsModal 
          key={selectedLevel.title}
          isOpen={isModalOpen} 
          onClose={() => {
            setIsModalOpen(false);
            setSelectedLevel(null);
          }} 
          level={selectedLevel} 
          lang={lang}
        />
      )}
    </section>
  );
}
