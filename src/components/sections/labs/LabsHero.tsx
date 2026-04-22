'use client';

import React from 'react';
import Link from 'next/link';
import styles from './LabsHero.module.css';

const ORBIT_TOOLS = [
  { id: 1,  category: 'AI-IDE',       title: 'IDE ENGINE',      logo: 'https://cdn.simpleicons.org/cursor/ffffff',     angle: 0 },
  { id: 2,  category: 'ARCHITECT',    title: 'LLM ARCHITECT',   logo: 'https://cdn.simpleicons.org/anthropic/ffffff',  angle: 36 },
  { id: 3,  category: 'ORCHESTRATION', title: 'LangChain',     logo: 'https://cdn.simpleicons.org/langchain/ffffff',  angle: 72 },
  { id: 4,  category: 'CONTEXT',      title: 'MCP Protocol',  logo: 'https://cdn.simpleicons.org/blueprint/ffffff',  angle: 108 },
  { id: 5,  category: 'KNOWLEDGE',    title: 'RAG Systems',   logo: 'https://cdn.simpleicons.org/python/ffffff',     angle: 144 },
  { id: 6,  category: 'SOFTWARE',    title: 'SOFTWARE DEVELOPMENT', logo: 'https://cdn.simpleicons.org/react/ffffff',      angle: 180 },
  { id: 7,  category: 'AUTOMATION',   title: 'n8n Agents',    logo: 'https://cdn.simpleicons.org/n8n/ffffff',        angle: 216 },
  { id: 8,  category: 'DATABASE',     title: 'Vector DB',     logo: 'https://cdn.simpleicons.org/supabase/ffffff',   angle: 252 },
  { id: 9,  category: 'MONETIZE',     title: 'AI SaaS',       logo: 'https://cdn.simpleicons.org/stripe/ffffff',     angle: 288 },
  { id: 10, category: 'DEPLOYMENT',   title: 'Cloud Edge',    logo: 'https://cdn.simpleicons.org/vercel/ffffff',    angle: 324 },
];

export default function LabsHero({ dict, lang }: { dict: any; lang: string }) {
  const { hero } = dict.ailabs;
  const ta = lang === 'ta';

  return (
    <section className={styles.hero}>
      <div className={styles.background}></div>
      <div className="container">
        <div className={styles.hero__inner}>

          {/* ─── LEFT: CONTENT ─── */}
          <div className={styles.hero__left}>
            <div className={styles.badge}>{hero.badge}</div>
            <h1 className={styles.title}>{hero.title}</h1>
            <p className={styles.subline}>{hero.subline}</p>
            <div className={styles.cta__wrap}>
              <button 
                onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
                className={styles.btn__primary}
              >
                {hero.cta}
              </button>
            </div>
          </div>

          {/* ─── RIGHT: WHEEL ORBIT (AS PER IMAGE) ─── */}
          <div className={styles.visual}>
            <div className={styles.wheel}>
              
              {/* Central Logo */}
              <div className={styles.hub}>
                <div className={styles.hub__inner}>
                  <div className={styles.hub__logo}>
                    <span className={styles.hub__brand}>JOYAI</span>
                    <span className={styles.hub__sub}>LABS</span>
                  </div>
                </div>
              </div>

              {/* Orbiting Cards */}
              <div className={styles.orbitGroup}>
                {ORBIT_TOOLS.map((tool) => (
                  <div 
                    key={tool.id} 
                    className={styles.toolSlot}
                    style={{ '--angle': `${tool.angle}deg` } as any}
                  >
                    <div className={styles.card}>
                      <div className={styles.card__icon}>
                        <img src={tool.logo} alt={tool.title} />
                      </div>
                      <span className={styles.card__cat}>{tool.category}</span>
                      <span className={styles.card__title}>{tool.title}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
