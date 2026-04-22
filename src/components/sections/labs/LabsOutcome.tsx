'use client';

import React from 'react';
import styles from './LabsOutcome.module.css';

const IconBuild = () => (
    <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
);

const IconDeploy = () => (
    <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
);

const IconEarn = () => (
    <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4M12 16h.01" />
    </svg>
);

export default function LabsOutcome({ dict }: { dict: any }) {
  const { outcome } = dict.ailabs;

  const icons = [<IconBuild />, <IconDeploy />, <IconEarn />];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.tag}>{outcome.tag}</span>
          <h2 className={styles.title}>{outcome.title}</h2>
          <p className={styles.subtitle}>{outcome.subtitle}</p>
        </div>

        <div className={styles.blueprint}>
          {/* Left: The Process */}
          <div className={styles.process}>
             {outcome.points.map((point: any, i: number) => (
                <div key={i} className={styles.step}>
                   <div className={styles.step__label}>
                      <span>0{i+1}</span>
                      <div className={styles.step__line} />
                   </div>
                   <div className={styles.step__content}>
                      <h3>{point.title}</h3>
                      <p>{point.desc}</p>
                   </div>
                </div>
             ))}
          </div>

          {/* Right: The Full Multi-Panel Dashboard Visual */}
          <div className={styles.preview}>
             <div className={styles.product}>
                <div className={styles.product__screen}>
                   {/* Top: Header */}
                   <div className={styles.dash__header}>
                      <div className={styles.dash__dots}><span/><span/><span/></div>
                      <div className={styles.dash__tabs}>
                         <div className={styles.dash__tab_active} />
                         <div className={styles.dash__tab} />
                         <div className={styles.dash__tab} />
                      </div>
                   </div>

                   <div className={styles.dash__body}>
                      {/* Sidebar */}
                      <div className={styles.dash__sidebar}>
                         <div className={styles.nav__icon_active}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></div>
                         <div className={styles.nav__icon}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></div>
                         <div className={styles.nav__icon}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg></div>
                      </div>
 
                      {/* Main Workspace */}
                      <div className={styles.dash__main}>
                         {/* Stats: Glass Cards */}
                         <div className={styles.dash__stats}>
                            <div className={styles.metric__card}>
                               <span className={styles.m__label}>LIVE USERS</span>
                               <div className={styles.m__row}><strong>1,204</strong><span className={styles.m__trend}>+12%</span></div>
                               <div className={styles.m__spark}><div className={styles.spark__line} /></div>
                            </div>
                            <div className={styles.metric__card}>
                               <span className={styles.m__label}>REVENUE</span>
                               <div className={styles.m__row}><strong>₹84.2k</strong><span className={styles.m__trend}>+5.4%</span></div>
                               <div className={styles.m__spark}><div className={styles.spark__line} style={{background: 'var(--emerald)'}} /></div>
                            </div>
                         </div>
 
                         {/* Control Center */}
                         <div className={styles.workspace}>
                            <div className={styles.workspace__header}>
                               <span>SYSTEM_STATUS: <strong style={{color: 'var(--emerald)'}}>OPTIMIZED</strong></span>
                               <div className={styles.pulse__dot} />
                            </div>
                            
                            <div className={styles.orchestrator}>
                               <div className={styles.nodes__row}>
                                  <div className={styles.app__node}>API</div>
                                  <div className={styles.path__line}><div className={styles.path__pulse} /></div>
                                  <div className={styles.ai__brain}>
                                     <div className={styles.inner__ring} />
                                     <div className={styles.outer__ring} />
                                     <div className={styles.core__glow} />
                                  </div>
                                  <div className={styles.path__line}><div className={styles.path__pulse} /></div>
                                  <div className={styles.app__node} style={{borderColor: 'var(--cyan)'}}>APP</div>
                               </div>
                            </div>
 
                            <div className={styles.feeds}>
                               <div className={styles.feed__item}>
                                  <div className={styles.user__avatar}>J</div>
                                  <div className={styles.feed__text}>
                                     <span>Jay Automation</span>
                                     <small>Lead Converted</small>
                                  </div>
                                  <div className={styles.feed__val}>₹4.5k</div>
                               </div>
                               <div className={styles.feed__item}>
                                  <div className={styles.user__avatar} style={{background: 'var(--violet)'}}>A</div>
                                  <div className={styles.feed__text}>
                                     <span>Aravind LLM</span>
                                     <small>Response Sent</small>
                                  </div>
                                  <div className={styles.feed__val}>API OK</div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                <div className={styles.product__glow} />
                <div className={styles.product__status}>ENGINE v1.0.4 ONLINE</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
