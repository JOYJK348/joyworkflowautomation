'use client';

import React, { useEffect, useState } from 'react';
import styles from './LabsModal.module.css';

interface LabsModalProps {
  isOpen: boolean;
  onClose: () => void;
  level: any;
  lang: string;
}

export default function LabsModal({ isOpen, onClose, level, lang }: LabsModalProps) {
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const ta = lang === 'ta';

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        
        <div className={styles.scrollArea}>
          <div className={styles.content}>
            <div className={styles.header}>
              <span className={styles.levelTag}>{level.badge}</span>
              <h2 className={styles.title}>{level.title}</h2>
            </div>

            <div className={styles.grid}>
              {/* 1. THE BLUEPRINT */}
              <div className={styles.card}>
                <div className={styles.iconBox}>🛠️</div>
                <h3>{ta ? 'செயல்முறை' : 'The Blueprint'}</h3>
                <p>{level.desc}</p>
              </div>

              {/* 2. THE STACK / TOOLS */}
              <div className={styles.card}>
                <div className={styles.iconBox}>🧰</div>
                <h3>{ta ? 'கருவிகள்' : 'The Toolstack'}</h3>
                <div className={styles.toolGrid}>
                  {level.toolstack?.map((tool: any, i: number) => (
                    <div key={i} className={styles.toolCard}>
                      <img src={tool.logo} alt={tool.name} className={styles.toolLogo} title={tool.name} />
                      <span className={styles.toolName}>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            {/* 3. EDUCATION REGISTRATION FORM */}
            <div className={styles.formSection}>
              {isSuccess ? (
                <div className={styles.success}>
                  <div className={styles.checkIcon}>✓</div>
                  <h3>{ta ? 'பதிவு செய்யப்பட்டது!' : 'Registration Sent!'}</h3>
                  <p>{ta ? 'எங்கள் குழு விரைவில் உங்களைத் தொடர்பு கொள்ளும்.' : 'Our team will contact you within 24 hours to schedule your demo.'}</p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <h3>{ta ? 'முழு பாடத்திட்டத்தைப் பெறுங்கள்' : 'Get Full Curriculum'}</h3>
                  <p>{ta ? 'உங்கள் விவரங்களைப் பதிவு செய்யவும். நாங்கள் பாடத்திட்டத்தை வாட்ஸ்அப்பில் அனுப்புவோம்.' : 'Enter your details below and we will send the complete curriculum to your WhatsApp.'}</p>
                  
                  <div className={styles.formGrid}>
                    <div className={styles.inputBox}>
                      <label className={styles.inputLabel}>{ta ? 'முழு பெயர்' : 'Full Name'}</label>
                      <input type="text" placeholder={ta ? "முழு பெயர்" : "Enter full name"} required className={styles.inputField} />
                    </div>
                    <div className={styles.inputBox}>
                      <label className={styles.inputLabel}>{ta ? 'வாட்ஸ்அப் எண்' : 'WhatsApp Number'}</label>
                      <input type="tel" placeholder={ta ? "எண் (வாட்ஸ்அப்)" : "WhatsApp number"} required className={styles.inputField} />
                    </div>

                    <div className={`${styles.inputBox} ${styles.fullWidth}`}>
                      <label className={styles.inputLabel}>{ta ? 'விசாரணை செய்தி' : 'Enquiry Message (Optional)'}</label>
                      <textarea placeholder={ta ? "உங்கள் கேள்வி..." : "How can we help you?"} className={styles.textArea} />
                    </div>
                  </div>

                  <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                    {isSubmitting ? (ta ? 'அனுப்பப்படுகிறது...' : 'Sending...') : (ta ? 'Get Full Curriculum →' : 'Get Full Curriculum →')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
