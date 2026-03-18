"use client";

import styles from './Chatbot.module.css';
import { useState, useRef, useEffect } from 'react';
import { createClient } from '@/lib/supabase';

const Icons = {
  chat: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  close: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  send: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  ),
  bot: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  ),
  google: (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  )
};

export default function Chatbot({ dict, lang }: { dict: any; lang: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: 'ai', 
      text: lang === 'ta' 
        ? 'ஒவ்வொரு நாளும் அதே பழைய மேனுவல் வேலைகளால் உங்கள் கனவுகள் தள்ளிப் போகிறதா? உங்கள் பிசினஸ் உங்களை சோர்வடையச் செய்யக் கூடாது, அது உங்களுக்காக உழைக்க வேண்டும். உங்கள் பிசினஸில் எது உங்களை அதிகம் கவலையடையச் செய்கிறது? சொல்லுங்கள், அதற்கான புத்திசாலித்தனமான தீர்வை நாம் சேர்ந்து திட்டமிடலாம்.' 
        : 'Are manual tasks holding back your biggest dreams? Your business shouldn’t be a source of exhaustion—it should be an engine for your freedom. Tell me what keeps you busy or stressed in your workflow, and let’s engineer a smarter plan to scale your success.' 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [user, setUser] = useState<any>(null);
  const supabase = createClient();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Professional Upsert Logic: Ensures user data is synced without duplicates
    const syncUserProfile = async (sessionUser: any) => {
      if (!sessionUser || !supabase) return;
      
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: sessionUser.id,
          email: sessionUser.email,
          full_name: sessionUser.user_metadata.full_name,
          avatar_url: sessionUser.user_metadata.avatar_url,
          last_seen: new Date().toISOString(),
        }, {
          onConflict: 'id' // Standard Professional Conflict Resolution
        });

      if (error) console.error('Error syncing profile:', error.message);
    };

    // Check initial session
    const checkUser = async () => {
      if (!supabase) return;
      const { data: { session } } = await supabase.auth.getSession();
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      
      if (currentUser) {
        await syncUserProfile(currentUser);
        setMessages([
          { 
            role: 'ai', 
            text: lang === 'ta' 
              ? `வணக்கம் ${currentUser.user_metadata.full_name || 'Client'}! உங்கள் பிசினஸ் ஆட்டோமேஷன் திட்டத்தை நாம் இப்போதே தொடங்கலாம்.` 
              : `Welcome ${currentUser.user_metadata.full_name || 'Client'}! Let's continue engineering your automation roadmap.` 
          }
        ]);
      }
    };
    checkUser();

    // Listen for auth changes and sync profile immediately
    if (supabase) {
      const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
        const authUser = session?.user ?? null;
        setUser(authUser);
        if (authUser) {
          await syncUserProfile(authUser);
        }
      });
      return () => subscription.unsubscribe();
    }
  }, [lang, supabase]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!inputValue.trim() || !user) return;
    
    const newMessages = [...messages, { role: 'user', text: inputValue }];
    setMessages(newMessages);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: lang === 'ta' 
          ? 'நிச்சயமாக! உங்கள் கோரிக்கையை நான் ஆய்வு செய்கிறேன்...' 
          : 'Understood. I am processing your request with our automation logic...' 
      }]);
    }, 1000);
  };

  const handleGoogleLogin = async () => {
    if (!supabase) return;
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
      },
    });
  };

  return (
    <div className={styles.chatbot_container}>
      {/* FAB Button */}
      <button 
        className={`${styles.fab} ${isOpen ? styles.fab_active : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Chat"
      >
        <div className={styles.scan_line}></div>
        <div className={styles.fab_icon}>
          {isOpen ? Icons.close : Icons.bot}
        </div>
        {!isOpen && (
          <>
            <span className={styles.fab_label}>
              {lang === 'ta' ? 'AI-யிடம் கேளுங்கள்' : 'ASK AI'}
            </span>
            <span className={styles.fab_pulse}></span>
          </>
        )}
      </button>

      {/* Chat Window */}
      <div className={`${styles.window} ${isOpen ? styles.window_open : ''}`}>
        {/* Header */}
        <div className={styles.window_header}>
          <div className={styles.ai_profile}>
            <div className={styles.ai_avatar}>{Icons.bot}</div>
            <div className={styles.ai_info}>
              <div className={styles.brand_wrap}>
                <h3>JoyAI <span>BETA</span></h3>
              </div>
              <div className={styles.status}>
                <span className={styles.status_dot}></span>
                {lang === 'ta' ? 'ஆன்லைனில் உள்ளது' : 'System Online'}
              </div>
            </div>
          </div>
          <button className={styles.header_close} onClick={() => setIsOpen(false)}>
            {Icons.close}
          </button>
        </div>

        {/* Content */}
        <div className={styles.window_content} ref={scrollRef}>
          {messages.map((msg, i) => (
            <div key={i} className={`${styles.message} ${styles[msg.role]}`}>
              <div className={styles.message_role}>
                {msg.role === 'ai' ? 'JOY_AI' : 'CLIENT'}
              </div>
              <div className={styles.message_bubble}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Footer / Input */}
        <div className={styles.window_footer}>
          {!user ? (
            <div className={styles.auth_lock}>
              <div className={styles.lock_bg}></div>
              <button 
                className={styles.google_btn}
                onClick={handleGoogleLogin} 
              >
                {Icons.google}
                <span>{lang === 'ta' ? 'கூகுள் மூலம் தொடரவும்' : 'Continue with Google'}</span>
              </button>
              <p className={styles.lock_hint}>
                {lang === 'ta' ? 'அரட்டையைத் தொடங்க உள்நுழையவும்' : 'Sign in to start automating'}
              </p>
            </div>
          ) : (
            <div className={styles.input_wrapper}>
              <textarea 
                placeholder={lang === 'ta' ? 'உங்கள் கேள்வியைக் கேளுங்கள்...' : 'Enter your request...'}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <button 
                className={styles.send_btn} 
                onClick={handleSend}
                disabled={!inputValue.trim()}
              >
                {Icons.send}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
