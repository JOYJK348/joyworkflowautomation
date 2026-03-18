"use client";

import styles from './Chatbot.module.css';
import { useState, useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M12 8v4"/><path d="M8 12h8"/>
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
  const [user, setUser] = useState<any>(null);
  const [input, setInput] = useState('');
  const supabase = createClient();
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, status, sendMessage } = useChat<any>({
    messages: [
      {
        id: 'init',
        role: 'assistant',
        parts: [{ 
          type: 'text', 
          text: lang === 'ta' 
            ? 'வணக்கம்! JOY_AI v2.4 ஆன்லைனில் உள்ளது. ஒவ்வொரு நாளும் அதே பழைய மேனுவல் வேலைகளால் உங்கள் கணவுகள் தள்ளிப் போகிறதா? சொல்லுங்கள், அதற்கான புத்திசாலித்தனமான தீர்வை நாம் சேர்ந்து திட்டமிடலாம்.' 
            : 'JOY_AI v2.4 Online. Are manual tasks holding back your biggest dreams? Tell me what keeps you busy or stressed in your workflow, and let’s engineer a smarter plan to scale your success.' 
        }]
      }
    ],
  });

  const isLoading = status === 'streaming' || status === 'submitted';

  useEffect(() => {
    const syncUserProfile = async (sessionUser: any) => {
      if (!sessionUser || !supabase) return;
      const { error } = await supabase.from('profiles').upsert({
        id: sessionUser.id,
        email: sessionUser.email,
        full_name: sessionUser.user_metadata.full_name,
        avatar_url: sessionUser.user_metadata.avatar_url,
        last_seen: new Date().toISOString(),
      }, { onConflict: 'id' });
      if (error) console.error('Error syncing profile:', error.message);
    };

    const checkUser = async () => {
      if (!supabase) return;
      const { data: { session } } = await supabase.auth.getSession();
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      if (currentUser) await syncUserProfile(currentUser);
    };
    checkUser();

    if (supabase) {
      const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
        const authUser = session?.user ?? null;
        setUser(authUser);
        if (authUser) await syncUserProfile(authUser);
      });
      return () => subscription.unsubscribe();
    }
  }, [supabase]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleGoogleLogin = async () => {
    if (!supabase) {
      alert("Please configure Supabase in your environment variables.");
      return;
    }
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
      },
    });
  };

  const handleCustomSubmit = (e: any) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput('');
  };

  return (
    <div className={styles.chatbot_container}>
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
            <span className={styles.fab_label}>{lang === 'ta' ? 'AI-யிடம் கேளுங்கள்' : 'ASK AI'}</span>
            <span className={styles.fab_pulse}></span>
          </>
        )}
      </button>

      <div className={`${styles.window} ${isOpen ? styles.window_open : ''}`}>
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
          <button className={styles.header_close} onClick={() => setIsOpen(false)}>{Icons.close}</button>
        </div>

        <div className={styles.window_content} ref={scrollRef}>
          {messages.map((msg: any, i: number) => (
            <div key={i} className={`${styles.message} ${styles[msg.role]}`}>
              <div className={styles.message_role}>{msg.role === 'assistant' ? 'JOY_AI' : 'CLIENT'}</div>
              <div className={styles.message_bubble}>
                {msg.parts?.map((part: any, idx: number) => {
                  if (part.type === 'text') return <span key={idx}>{part.text}</span>;
                  return null;
                })}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className={`${styles.message} ${styles.assistant}`}>
              <div className={styles.message_role}>JOY_AI</div>
              <div className={styles.message_bubble}><span className={styles.typing_dot}></span><span className={styles.typing_dot}></span><span className={styles.typing_dot}></span></div>
            </div>
          )}
        </div>

        <div className={styles.window_footer}>
          {!user ? (
            <div className={styles.auth_lock}>
              <button className={styles.google_btn} onClick={handleGoogleLogin}>
                {Icons.google}
                <span>{lang === 'ta' ? 'கூகுள் மூலம் தொடரவும்' : 'Continue with Google'}</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleCustomSubmit} className={styles.input_wrapper}>
              <textarea 
                placeholder={lang === 'ta' ? 'உங்கள் கேள்வியைக் கேளுங்கள்...' : 'Enter your request...'}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleCustomSubmit(e);
                  }
                }}
              />
              <button 
                type="submit"
                className={styles.send_btn} 
                disabled={!input.trim() || isLoading}
              >
                {Icons.send}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
