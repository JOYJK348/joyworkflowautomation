'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import s from './AiLabsContent.module.css';

interface Props {
  dict: any;
  lang: string;
}

export default function AiLabsContent({ dict, lang }: Props) {
  const c = dict.aiLabsPage;
  const pageRef = useRef<HTMLDivElement>(null);

  // ── Intersection Observer for scroll reveals ──
  useEffect(() => {
    const els = pageRef.current?.querySelectorAll(`.${s.reveal}`);
    if (!els) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(s.visible);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (!c) return null;

  const waLink = `https://wa.me/${dict.footer?.contact?.phone?.replace(/[^0-9]/g, '') || '919080558130'}`;

  const levelColors: Record<string, { streak: string; tag: string; node: string }> = {
    green: { streak: s.streak_green, tag: s.tag_green, node: s.node_green },
    purple: { streak: s.streak_purple, tag: s.tag_purple, node: s.node_purple },
    red: { streak: s.streak_red, tag: s.tag_red, node: s.node_red },
  };

  return (
    <div className={s.page} ref={pageRef}>
      {/* Ambient */}
      <div className={s.ambient}>
        <div className={s.orb1} />
        <div className={s.orb2} />
        <div className={s.grid_bg} />
      </div>

      {/* ════════ §1 HERO ════════ */}
      <section className={s.hero}>
        <div className="container">
          <div className={s.hero__inner}>
            <span className={s.badge}>
              <span className={s.badge_dot} />
              {c.hero.badge}
            </span>

            <h1 className={s.hero_title}>
              <span className={s.hero_title_line1}>{c.hero.title1}</span>
              <span className={s.hero_title_line2}>{c.hero.title2}</span>
            </h1>

            <p className={s.hero_sub}>{c.hero.subtitle}</p>

            <div className={s.hero_ctas}>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className={s.cta_primary}>
                {c.hero.cta}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className={s.cta_ghost}>
                {c.hero.waCta}
              </a>
            </div>

            <div className={s.hero_stats}>
              {c.hero.stats.map((st: any, i: number) => (
                <div key={i} className={s.stat_block}>
                  <div className={s.stat_num}>{st.value}</div>
                  <div className={s.stat_lbl}>{st.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ §2 WHY ════════ */}
      <section className={s.why_section}>
        <div className="container">
          <div className={`${s.section_header} ${s.reveal}`}>
            <div className={s.section_tag}>{c.why.tag}</div>
            <h2 className={s.section_title}>{c.why.title}</h2>
            <p className={s.section_sub}>{c.why.subtitle}</p>
          </div>

          <div className={s.why_grid}>
            {c.why.points.map((pt: any, i: number) => (
              <div key={i} className={`${s.why_card} ${s.reveal} ${(s as any)[`reveal_delay${i + 1}`] || ''}`}>
                <div className={s.why_icon}>{pt.icon}</div>
                <div className={s.why_text}>
                  <h3>{pt.title}</h3>
                  <p>{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ §3 LEVELS ════════ */}
      <section className={s.levels_section}>
        <div className="container">
          <div className={`${s.section_header} ${s.reveal}`}>
            <div className={s.section_tag}>{c.levels.tag}</div>
            <h2 className={s.section_title}>{c.levels.title}</h2>
            <p className={s.section_sub}>{c.levels.subtitle}</p>
          </div>

          <div className={s.levels_timeline}>
            {c.levels.items.map((lvl: any, idx: number) => {
              const color = lvl.color || 'purple';
              const theme = levelColors[color] || levelColors.purple;

              return (
                <div key={idx} className={`${s.level_item} ${s.reveal} ${(s as any)[`reveal_delay${idx + 1}`] || ''}`}>
                  {/* Timeline node */}
                  <div className={s.level_node}>
                    <div className={`${s.node_dot} ${theme.node}`} />
                  </div>

                  {/* Card */}
                  <div className={`${s.level_card} ${theme.streak}`}>
                    <div className={s.level_meta}>
                      <span className={`${s.level_tag} ${theme.tag}`}>{lvl.tag}</span>
                      <span className={s.level_dur}>{lvl.duration}</span>
                    </div>

                    <h3 className={s.level_title}>{lvl.title}</h3>
                    <p className={s.level_subtitle}>{lvl.subtitle}</p>

                    <ul className={s.skill_pills}>
                      {lvl.learn.map((item: string, i: number) => (
                        <li key={i}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className={s.outcome_strip}>
                      <div className={s.outcome_quote}>{lvl.outcome}</div>
                      <div className={s.outcome_meta}>
                        <strong>{lvl.projects}</strong>
                        {lvl.tech && <span>{lvl.tech}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════ §4 BUILDS ════════ */}
      <section className={s.build_section}>
        <div className="container">
          <div className={`${s.section_header} ${s.reveal}`}>
            <div className={s.section_tag}>{c.builds.tag}</div>
            <h2 className={s.section_title}>{c.builds.title}</h2>
            <p className={s.section_sub}>{c.builds.subtitle}</p>
          </div>

          <div className={s.build_grid}>
            {c.builds.items.map((item: any, i: number) => {
              // Extract level number to apply specific theme
              const match = item.level.match(/\d+/);
              const levelNum = match ? parseInt(match[0], 10) : 1;
              const colorClass = levelNum === 1 ? s.build_green : levelNum === 2 ? s.build_purple : s.build_red;

              return (
                <div key={i} className={`${s.build_item} ${colorClass} ${s.reveal} ${(s as any)[`reveal_delay${(i % 3) + 1}`] || ''}`}>
                  <div className={s.build_glow_bg} />
                  
                  <div className={s.build_top}>
                    <div className={s.build_lvl_badge}>
                      <span className={s.lvl_dot} />
                      {item.level}
                    </div>
                  </div>
                  
                  <div className={s.build_content}>
                    <h3 className={s.build_name}>{item.title}</h3>
                    <p className={s.build_desc}>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════ §5 AUDIENCE ════════ */}
      <section className={s.audience_section}>
        <div className="container">
          <div className={s.audience_layout}>
            <div className={`${s.audience_left} ${s.reveal}`}>
              <div className={s.section_tag}>{c.audience.tag}</div>
              <h2 className={s.section_title}>{c.audience.title}</h2>
            </div>
            <div className={s.audience_grid}>
              {c.audience.items.map((item: any, i: number) => (
                <div key={i} className={`${s.aud_card} ${s.reveal} ${(s as any)[`reveal_delay${i + 1}`] || ''}`}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ §6 OUTCOMES ════════ */}
      <section className={s.outcomes_section}>
        <div className="container">
          <div className={`${s.section_header} ${s.reveal}`}>
            <div className={s.section_tag}>{c.outcomes.tag}</div>
            <h2 className={s.section_title}>{c.outcomes.title}</h2>
            <p className={s.section_sub}>{c.outcomes.subtitle}</p>
          </div>

          <div className={s.outcomes_row}>
            {c.outcomes.paths.map((path: any, i: number) => (
              <div key={i} className={`${s.path_card} ${s.reveal} ${(s as any)[`reveal_delay${i + 1}`] || ''}`}>
                <div className={s.path_content}>
                  <h3>{path.title}</h3>
                  <p>{path.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ §7 FINAL CTA ════════ */}
      <section className={s.final_section}>
        <div className="container">
          <div className={`${s.final_card} ${s.reveal}`}>
            <h2>{c.finalCta.title}</h2>
            <p>{c.finalCta.subtitle}</p>
            <div className={s.final_actions}>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className={s.cta_primary}>
                {c.finalCta.cta}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
