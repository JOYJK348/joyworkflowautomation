"use client";

import { useState, useEffect } from 'react';
import styles from './leads.module.css';

const MOCK_LEADS = [
  { id: 'LD-000', name: 'System Test', whatsapp: '0000000000', business_name: 'JoyAutomations Fallback', intent: 'INTEGRATION_TEST', source: 'DIRECT', status: 'NEW' },
];

const Icons = {
  whatsapp: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
};

export default function AdminLeads() {
  const [leads, setLeads] = useState<any[]>(MOCK_LEADS);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchLeads() {
      try {
        const res = await fetch('/api/leads');
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            setLeads(data);
          }
        }
      } catch (err) {
        console.error("FETCH_ERROR:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchLeads();
  }, []);

  const updateStatus = async (id: number, newStatus: string) => {
    try {
      const res = await fetch('/api/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus })
      });
      if (res.ok) {
        setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
      }
    } catch (err) {
      console.error("STATUS_UPDATE_ERROR:", err);
    }
  };

  return (
    <div className={styles.leads_container}>
      <header className={styles.page_header}>
        <div className={styles.header_content}>
          <h1 className={styles.title}>LEAD_MANAGER</h1>
          <p className={styles.subtitle}>Direct incoming business opportunities from the audit portal.</p>
        </div>
        <div className={styles.header_actions}>
          <div className={styles.search_box}>
            <input type="text" placeholder="SEARCH_CLIENT_OR_ENTITY..." />
            <span className={styles.search_icon}>🔍</span>
          </div>
          <button className={styles.export_btn} onClick={() => window.location.reload()}>SYNC ⟳</button>
        </div>
      </header>

      {isLoading ? (
        <div className={styles.loading_state}>
           <div className={styles.scanner_line}></div>
           <p>SYNCHRONIZING_WITH_LEADS_NODE...</p>
        </div>
      ) : (
        <>
          {/* MOBILE CARD LIST */}
          <div className={styles.mobile_leads_list}>
            {leads.map((lead) => (
              <div key={lead.id} className={styles.lead_card}>
                <div className={styles.card_row}>
                  <span className={styles.card_id}>[LD-{lead.id}]</span>
                  <div className={styles.meta_badges}>
                    <select 
                      className={`${styles.status_badge} ${styles['status_' + (lead.status || 'new').toLowerCase()]}`}
                      value={lead.status || 'NEW'}
                      onChange={(e) => updateStatus(lead.id, e.target.value)}
                    >
                      <option value="NEW">NEW</option>
                      <option value="ACTIVE">ACTIVE</option>
                      <option value="ON_GOING">ON_GOING</option>
                      <option value="REJECTED">REJECTED</option>
                      <option value="CLOSED">CLOSED</option>
                    </select>
                  </div>
                </div>
                
                <div className={styles.card_main}>
                  <h3 className={styles.card_name}>{lead.name}</h3>
                  <p className={styles.card_business}>{lead.business_name || 'Individual'}</p>
                  <p className={styles.card_intent}>INTENT: {lead.intent || 'NOT_SPECIFIED'}</p>
                </div>

                <div className={styles.card_footer}>
                  <div className={styles.card_channel}>
                    <span className={styles.wa_mini_icon}>{Icons.whatsapp}</span> {lead.whatsapp}
                  </div>
                  <div className={styles.card_actions}>
                    <button className={styles.mob_action_btn} onClick={() => window.open(`https://wa.me/${lead.whatsapp}`, '_blank')}>CHAT</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.leads_table_wrapper}>
            <table className={styles.leads_table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>CLIENT_ENTITY</th>
                  <th>BUSINESS_TYPE</th>
                  <th>TRAFFIC_SOURCE</th>
                  <th>COMM_CH</th>
                  <th>ACTIVE_STATUS</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id} className={styles.lead_row}>
                    <td className={styles.mono_text}>LD-{lead.id}</td>
                    <td>
                      <div className={styles.client_info}>
                        <span className={styles.client_name}>{lead.name}</span>
                      </div>
                    </td>
                    <td className={styles.business_text}>{lead.business_name || 'N/A'}</td>
                    <td>
                      <span className={styles.source_badge}>{lead.source || 'DIRECT'}</span>
                    </td>
                    <td>
                      <div 
                        className={styles.channel_badge_interactive} 
                        onClick={() => window.open(`https://wa.me/${lead.whatsapp}`, '_blank')}
                        title="Open WhatsApp Chat"
                      >
                        <span className={styles.wa_icon_cell}>{Icons.whatsapp}</span>
                        {lead.whatsapp}
                      </div>
                    </td>
                    <td>
                      <select 
                        className={`${styles.status_dropdown} ${styles['status_' + (lead.status || 'new').toLowerCase()]}`}
                        value={lead.status || 'NEW'}
                        onChange={(e) => updateStatus(lead.id, e.target.value)}
                      >
                        <option value="NEW">NEW</option>
                        <option value="ACTIVE">ACTIVE</option>
                        <option value="ON_GOING">ON_GOING</option>
                        <option value="REJECTED">REJECTED</option>
                        <option value="CLOSED">CLOSED</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* SYSTEM META */}
      <footer className={styles.table_footer}>
        Showing {leads.length} active nodes in data-buffer.
      </footer>
    </div>
  );
}
