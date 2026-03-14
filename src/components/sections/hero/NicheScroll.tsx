'use client';

import styles from './NicheScroll.module.css';

// Fixed Ultra-HD Unsplash IDs to ensure 100% constancy
const FIXED_NICHE_IMAGES = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop&q=100", // Salon
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=400&fit=crop&q=100", // Dental
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop&q=100", // Gym
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=400&fit=crop&q=100", // Cafe
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop&q=100", // Tuition
  "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=400&h=400&fit=crop&q=100", // Pharmacy
  "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&h=400&fit=crop&q=100", // Bike Service
  "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=400&fit=crop&q=100", // Beauty Parlour
  "https://images.unsplash.com/photo-1517677129300-07b130802f46?w=400&h=400&fit=crop&q=100", // Tailoring
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=400&fit=crop&q=100", // Real Estate
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=400&fit=crop&q=100", // Event
  "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=400&fit=crop&q=100", // Photo
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=400&fit=crop&q=100", // Driving
  "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=400&h=400&fit=crop&q=100", // Car Wash
  "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=400&h=400&fit=crop&q=100"  // Hardware
];

export default function NicheScroll({ dict }: { dict: any }) {
  const { title, list } = dict.hero.niches;

  // Duplicate list and fixed images to create seamless loop
  const displayList = [...list, ...list];
  
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.wrapper}>
        <div className={styles.track}>
          {displayList.map((niche: string, i: number) => {
            const imageIndex = i % 15;
            return (
              <div key={`${niche}-${i}`} className={styles.item}>
                <div className={styles.image__wrap}>
                  <img 
                    src={FIXED_NICHE_IMAGES[imageIndex]} 
                    alt={niche}
                    className={styles.niche_img}
                    loading="eager"
                  />
                </div>
                <span className={styles.name}>{niche}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
