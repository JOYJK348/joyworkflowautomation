'use client';

import { useState } from 'react';
import styles from './settings.module.css';

export default function AdminSettings() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.settings_container}>
      <header className={styles.page_header}>
        <div className={styles.header_content}>
          <h1 className={styles.title}>SYSTEM_SETTINGS</h1>
          <p className={styles.subtitle}>Configure digital assets and API handshakes.</p>
        </div>
      </header>

      <div className={styles.settings_grid}>
        {/* API CONFIGURATION */}
        <section className={styles.settings_card}>
          <div className={styles.card_header}>
            <span className={styles.card_title}>EXTERNAL_API_KEYS</span>
          </div>
          <div className={styles.card_body}>
            <div className={styles.input_group}>
              <label>GOOGLE_TAG_MANAGER_ID</label>
              <div className={styles.input_field}>
                <input type="text" placeholder="GTM-XXXXXXX" />
                <button className={styles.save_btn}>UPDATE</button>
              </div>
            </div>

            <div className={styles.input_group}>
              <label>CLARITY_PROJECT_ID</label>
              <div className={styles.input_field}>
                <input type="text" defaultValue="w1mer12q1g" />
                <button className={styles.save_btn}>UPDATE</button>
              </div>
            </div>

            <div className={styles.input_group}>
              <label>WHATSAPP_CLOUD_TOKEN</label>
              <div className={styles.input_field}>
                <input type="password" placeholder="••••••••••••••••" />
                <button className={styles.save_btn}>UPDATE</button>
              </div>
            </div>
          </div>
        </section>

        {/* WEBHOOK & ENDPOINTS */}
        <section className={styles.settings_card}>
          <div className={styles.card_header}>
            <span className={styles.card_title}>SYSTEM_WEBHOOKS</span>
          </div>
          <div className={styles.card_body}>
            <div className={styles.webhook_box}>
              <label>FORM_SUBMISSION_ENDPOINT</label>
              <code className={styles.code_snippet}>
                https://joyautomations.com/api/v1/leads
                <button className={styles.copy_btn} onClick={handleCopy}>
                  {copied ? '✓' : 'COPY'}
                </button>
              </code>
              <p className={styles.help_text}>Use this endpoint to push leads from external sources into the system.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
