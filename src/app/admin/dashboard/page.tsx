'use client';

import { useState, useEffect } from 'react';
import styles from './dashboard.module.css';

const STATS = [
  { label: 'TOTAL_VISITS', value: '--', icon: '📈', change: '+0%' },
  { label: 'NEW_LEADS', value: '--', icon: '👤', change: '+0%' },
  { label: 'CONVERSION_RATE', value: '--', icon: '⚡', change: '+0%' },
  { label: 'AVG_SESSION', value: '--', icon: '🕒', change: '+0%' },
];

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [leadStats, setLeadStats] = useState({
    total: 0,
    newLeads: 0,
    googlePct: 0,
    socialPct: 0,
    directPct: 0
  });

  useEffect(() => {
    async function fetchDashboardStats() {
      try {
        const res = await fetch('/api/leads');
        if (res.ok) {
          const leads = await res.json();
          const total = leads.length;
          const newLeads = leads.filter((l: any) => (l.status || 'NEW') === 'NEW').length;
          
          const googleCount = leads.filter((l: any) => l.source === 'GOOGLE_SEARCH').length;
          const socialCount = leads.filter((l: any) => l.source === 'SOCIAL_MEDIA').length;
          const directCount = leads.filter((l: any) => l.source === 'DIRECT').length;

          setLeadStats({
            total,
            newLeads,
            googlePct: total > 0 ? Math.round((googleCount / total) * 100) : 0,
            socialPct: total > 0 ? Math.round((socialCount / total) * 100) : 0,
            directPct: total > 0 ? Math.round((directCount / total) * 100) : 0
          });
        }
      } catch (err) {
        console.error("DASHBOARD_FETCH_ERROR:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchDashboardStats();
  }, []);

  const STATS = [
    { label: 'TOTAL_LEADS', value: leadStats.total.toString(), icon: '📈', change: '+3%' },
    { label: 'NEW_PENDING', value: leadStats.newLeads.toString(), icon: '👤', change: 'NEW' },
    { label: 'CONVERSION', value: '12%', icon: '⚡', change: '+2%' },
    { label: 'DB_NODES', value: 'ONLINE', icon: '🕒', change: 'STABLE' },
  ];

  return (
    <div className={styles.dashboard}>
      <header className={styles.page_header}>
        <div className={styles.header_content}>
          <h1 className={styles.title}>SYSTEM_OVERVIEW</h1>
          <p className={styles.subtitle}>Real-time monitoring of your digital business engines.</p>
        </div>
        <div className={styles.actions}>
          <button className={styles.refresh_btn} onClick={() => window.location.reload()}>SYNC ⟳</button>
        </div>
      </header>

      {/* QUICK ACTIONS & SYSTEM HEALTH ROW */}
      <div className={styles.top_priority_grid}>
        {/* ACTION CENTER */}
        <div className={styles.priority_card}>
          <div className={styles.card_header}>
            <span className={styles.card_title}>URGENT_ACTION_CENTER</span>
            {leadStats.newLeads > 0 && <span className={styles.alert_dot}></span>}
          </div>
          <div className={styles.action_list}>
            {leadStats.newLeads > 0 ? (
              <div className={styles.action_item}>
                <span className={styles.action_icon}>🔔</span>
                <div className={styles.action_info}>
                  <p>{leadStats.newLeads} New leads pending follow-up</p>
                  <small>Requires immediate response</small>
                </div>
                <button className={styles.go_btn} onClick={() => window.location.href='/admin/leads'}>RESOLVE</button>
              </div>
            ) : (
              <div className={styles.action_item}>
                <span className={styles.action_icon}>✅</span>
                <div className={styles.action_info}>
                  <p>All leads handled</p>
                  <small>System at 100% capacity</small>
                </div>
              </div>
            )}
            <div className={styles.action_item}>
              <span className={styles.action_icon}>🛡️</span>
              <div className={styles.action_info}>
                <p>Integrity protocol active</p>
                <small>Status: Secured</small>
              </div>
            </div>
          </div>
        </div>

        {/* SYSTEM INTEGRITY */}
        <div className={styles.priority_card}>
          <div className={styles.card_header}>
            <span className={styles.card_title}>SYSTEM_HEALTH_INTEGRITY</span>
          </div>
          <div className={styles.health_grid}>
            <div className={styles.health_node}>
              <span className={styles.node_label}>SUPABASE_DB</span>
              <span className={styles.node_status_active}>CONNECTED</span>
            </div>
            <div className={styles.health_node}>
              <span className={styles.node_label}>LEADS_API</span>
              <span className={styles.node_status_active}>ACTIVE</span>
            </div>
            <div className={styles.health_node}>
              <span className={styles.node_label}>WHATSAPP_BOT</span>
              <span className={styles.node_status_standby}>STANDBY</span>
            </div>
            <div className={styles.health_node}>
              <span className={styles.node_label}>TRACKING_PULSE</span>
              <span className={styles.node_status_active}>OPTIMIZED</span>
            </div>
          </div>
        </div>
      </div>

      {/* STAT CARDS */}
      <div className={styles.stats_grid}>
        {STATS.map((stat) => (
          <div key={stat.label} className={styles.stat_card}>
            <div className={styles.stat_header}>
              <span className={styles.stat_label}>[{stat.label}]</span>
              <span className={styles.stat_icon}>{stat.icon}</span>
            </div>
            <div className={styles.stat_value}>
              {loading ? <span className={styles.loading_bar}></span> : stat.value}
            </div>
            <div className={styles.stat_footer}>
              {stat.change} SINCE_LIVE
            </div>
          </div>
        ))}
      </div>

      <div className={styles.secondary_grid}>
        {/* ANALYTICS PREVIEW (Clarity/GA Placeholder) */}
        <div className={styles.analytics_preview}>
          <div className={styles.card_header}>
            <span className={styles.card_title}>EXTERNAL_ANALYTICS_THROUGHPUT</span>
            <span className={styles.status_badge}>LIVE_STREAM</span>
          </div>
          <div className={styles.visual_placeholder}>
            <div className={styles.placeholder_content}>
              <div className={styles.radar_icon}>⚡️</div>
              <p>TRACKING_PULSE_ACTIVE</p>
              <small>Behavioral data capturing via Clarity [w1mer12q1g]</small>
            </div>
          </div>
        </div>

        {/* TRAFFIC SOURCES DISTRIBUTION */}
        <div className={styles.traffic_sources}>
          <div className={styles.card_header}>
            <span className={styles.card_title}>ACQUISITION_CHANNELS</span>
          </div>
          <div className={styles.sources_list}>
             <div className={styles.source_item}>
                <div className={styles.source_label}>GOOGLE_SEARCH</div>
                <div className={styles.source_bar_outer}>
                  <div className={styles.source_bar_inner} style={{ width: `${leadStats.googlePct}%` }}></div>
                </div>
                <div className={styles.source_pct}>{leadStats.googlePct}%</div>
             </div>
             
             <div className={styles.source_item}>
                <div className={styles.source_label}>DIRECT_TRAFFIC</div>
                <div className={styles.source_bar_outer}>
                  <div className={styles.source_bar_inner} style={{ width: `${leadStats.directPct}%` }}></div>
                </div>
                <div className={styles.source_pct}>{leadStats.directPct}%</div>
             </div>

             <div className={styles.source_item}>
                <div className={styles.source_label}>SOCIAL_MEDIA</div>
                <div className={styles.source_bar_outer}>
                  <div className={styles.source_bar_inner} style={{ width: `${leadStats.socialPct}%` }}></div>
                </div>
                <div className={styles.source_pct}>{leadStats.socialPct}%</div>
             </div>
          </div>
        </div>

        {/* SYSTEM STATUS */}
        <div className={styles.system_log}>
          <div className={styles.card_header}>
            <span className={styles.card_title}>SYSTEM_INTEGRITY_LOG</span>
          </div>
          <div className={styles.log_entries}>
            <div className={styles.log_entry}>
              <span className={styles.log_time}>[NOW]</span>
              <span className={styles.log_msg}>Supabase Handshake: SECURE</span>
            </div>
            <div className={styles.log_entry}>
              <span className={styles.log_time}>[LIVE]</span>
              <span className={styles.log_msg}>Referral Tracking: ACTIVE</span>
            </div>
            <div className={styles.log_entry}>
              <span className={styles.log_time}>[INFO]</span>
              <span className={styles.log_msg}>Lead Engine: {leadStats.total} Records Synced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
