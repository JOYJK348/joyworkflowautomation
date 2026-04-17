"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './BotDemo.module.css';

interface Message {
  id: number;
  type: 'student' | 'bot';
  text: string;
}

export default function BotDemo({ dict, lang }: { dict: any, lang: string }) {
  const { tag, title, subtitle, chat, features } = dict.hero.botDemo;
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentIndex < chat.length) {
      const timer = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, chat[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, currentIndex === 0 ? 1000 : 2000); // Wait 1s for first, then 2s between
      return () => clearTimeout(timer);
    } else {
      // Loop the animation after a delay
      const resetTimer = setTimeout(() => {
        setVisibleMessages([]);
        setCurrentIndex(0);
      }, 5000);
      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex, chat]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [visibleMessages]);

  return (
    <section className={styles.section} id="bot-demo" data-lang={lang}>
      <div className="container">
        <div className={styles.layout}>
          {/* Text Content */}
          <div className={styles.content}>
            <span className={styles.badge}>{tag}</span>
            <h2 className={styles.section_title_custom}>{title}</h2>
            <p className={styles.description}>{subtitle}</p>
            
            <div className={styles.features}>
              {features.map((f: string, i: number) => (
                <div key={i} className={styles.featureItem}>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Demo */}
          <div className={styles.visual}>
            <div className={styles.phoneFrame}>
              {/* iPhone Hardware Details */}
              <div className={styles.dynamicIsland}></div>
              <div className={styles.actionButton}></div>
              <div className={styles.sideButton}></div>
              <div className={styles.volumeUp}></div>
              <div className={styles.volumeDown}></div>

              <div className={styles.phoneInner}>
                <div className={styles.screenOverlay}></div>
                <div className={styles.phoneHeader}>
                  <div className={styles.avatar}>
                    <Image 
                      src="/images/offl_logo.png" 
                      alt="Logo" 
                      width={36} 
                      height={36} 
                      className={styles.avatarImg}
                    />
                    <div className={styles.onlineStatus}></div>
                  </div>
                  <div className={styles.contactInfo}>
                    <span className={styles.contactName}>Admission Assistant</span>
                    <span className={styles.contactStatus}>Online</span>
                  </div>
                </div>
                
                <div className={styles.chatArea} ref={chatContainerRef}>
                  {visibleMessages.map((msg) => (
                    <div key={msg.id} className={`${styles.message} ${msg.type === 'bot' ? styles.botMsg : styles.studentMsg}`}>
                      <div className={styles.messageBubble}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {currentIndex % 2 !== 0 && currentIndex < chat.length && (
                    <div className={`${styles.message} ${styles.botMsg}`}>
                      <div className={styles.typingIndicator}>
                        <span></span><span></span><span></span>
                      </div>
                    </div>
                  )}
                </div>

                <div className={styles.phoneFooter}>
                  <div className={styles.inputBar}>
                    Type a message...
                  </div>
                  <div className={styles.homeIndicator}></div>
                </div>
              </div>
            </div>
            
            {/* Background elements for depth */}
            <div className={styles.glow}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
