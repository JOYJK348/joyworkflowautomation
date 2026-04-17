'use client';

import styles from './NicheScroll.module.css';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Ultra-HD High-Contrast Unsplash IDs for maximum clarity (800px source)
const FIXED_NICHE_IMAGES = [
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&h=800&fit=crop&q=100", // Salon
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=800&fit=crop&q=100", // Dental
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=800&fit=crop&q=100", // Gym
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=800&fit=crop&q=100", // Cafe
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=800&fit=crop&q=100", // Tuition
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=800&fit=crop&q=100", // Pharmacy
  "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&h=800&fit=crop&q=100", // Bike
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&h=800&fit=crop&q=100", // Beauty Parlour
  "https://images.unsplash.com/photo-1517677129300-07b130802f46?w=800&h=800&fit=crop&q=100", // Tailoring
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=800&fit=crop&q=100", // Real Estate
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=800&fit=crop&q=100", // Event
  "https://images.unsplash.com/photo-1452784444945-3f422708fe5e?w=800&h=800&fit=crop&q=100", // Photo
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=800&fit=crop&q=100", // Driving
  "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&h=800&fit=crop&q=100", // Car Wash
  "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&h=800&fit=crop&q=100", // Hardware
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=800&fit=crop&q=100", // Education
  "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&h=800&fit=crop&q=100"  // Fireworks
];

export default function NicheScroll({ dict }: { dict: any }) {
  const { lang } = useParams();
  const { title, list } = dict.hero.niches;

  // Duplicate list and fixed images to create seamless loop
  const displayList = [...list, ...list];
  
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.wrapper}>
        <div className={styles.track}>
          {displayList.map((niche: string, i: number) => {
            const imageIndex = i % 17;
            return (
              <Link 
                key={`${niche}-${i}`} 
                href={`/${lang}/contact#audit-form`}
                className={styles.item}
              >
                <div className={styles.image__wrap}>
                  <img 
                    src={FIXED_NICHE_IMAGES[imageIndex]} 
                    alt={niche}
                    className={styles.niche_img}
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
                <span className={styles.name}>{niche}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
