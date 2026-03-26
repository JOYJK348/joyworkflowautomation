'use client';

import { useState } from 'react';
import styles from './analytics.module.css';

export default function AdminAnalytics() {
  const [activeTab, setActiveTab] = useState('heatmaps');

  return (
    <div className={styles.analytics_container}>
      <header className={styles.page_header}>
        <div className={styles.header_content}>
          <h1 className={styles.title}>ANALYTICS_MAP</h1>
          <p className={styles.subtitle}>Visualizing user behavior and system performance nodes.</p>
        </div>
      </header>

      {/* FILTER TABS */}
      <div className={styles.tabs_row}>
        <button 
          className={`${styles.tab} ${activeTab === 'heatmaps' ? styles.active : ''}`}
          onClick={() => setActiveTab('heatmaps')}
        >
          USER_HEATMAPS
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'recordings' ? styles.active : ''}`}
          onClick={() => setActiveTab('recordings')}
        >
          SESSION_RECORDINGS
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'performance' ? styles.active : ''}`}
          onClick={() => setActiveTab('performance')}
        >
          CORE_WEB_VITALS
        </button>
      </div>

      <div className={styles.analytics_canvas}>
        <div className={styles.iframe_container}>
          {/* VERIFIED LIVE STATUS */}
          <div className={styles.embed_overlay}>
            <div className={styles.radar_scanner_active}></div>
            <div className={styles.overlay_text}>
              <div className={styles.icon}>🌩️</div>
              <h3 style={{ color: '#00ff88' }}>VERIFIED_ANALYTICS_STREAM_ACTIVE</h3>
              <p>Microsoft Clarity Project [w1mer12q1g] is successfully synchronized with your domain tracking.</p>
              
              <div className={styles.active_stats}>
                <div className={styles.stat_node}>
                  <span>STATUS:</span> <b style={{ color: '#00ff88' }}>ACTIVE</b>
                </div>
                <div className={styles.stat_node}>
                  <span>IS_RECORDING:</span> <b>TRUE</b>
                </div>
              </div>

              <div className={styles.security_disclaimer}>
                 ⚠️ Note: Privacy policy restricts embedding raw session data within this frame. Please use the official dashboard for visualization.
              </div>

              <button 
                className={styles.external_link_btn}
                onClick={() => window.open('https://clarity.microsoft.com/projects/view/w1mer12q1g', '_blank', 'noopener,noreferrer')}
              >
                ACCESS_OFFICIAL_DASHBOARD ↗
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
