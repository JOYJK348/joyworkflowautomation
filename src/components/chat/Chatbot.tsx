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

  interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
  }

  const initialMessage: Message = {
    id: 'init',
    role: 'assistant',
    content: lang === 'ta'
      ? 'வணக்கம்! நான் JoyAI — Joy Automations-இன் AI ஆலோசகர். உங்கள் பிசினஸில் எந்த வேலைகள் உங்களை அதிகம் நேரம் எடுக்கின்றன? அதை ஆட்டோமேட் பண்ண நாம் உடனே திட்டமிடலாம்.'
      : 'Welcome! I am JoyAI — your dedicated Business Automation Consultant from Joy Automations. What manual tasks are consuming most of your time? Let me engineer a smart automation strategy for your business.',
  };

  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [isLoading, setIsLoading] = useState(false);

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

  const [status, setStatus] = useState<string>('');

  const statusMessages = [
    lang === 'ta' ? 'உங்கள் வணிக மாதிரியை ஆய்வு செய்கிறேன்...' : 'Analyzing your business model...',
    lang === 'ta' ? 'ஆட்டோமேஷன் நெறிமுறைகளை மேம்படுத்துகிறேன்...' : 'Optimizing automation protocols...',
    lang === 'ta' ? 'செயல்முறை செயல்திறனை கணக்கிடுகிறேன்...' : 'Calculating process efficiency...',
    lang === 'ta' ? 'சிறந்த தீர்வை உருவாக்குகிறேன்...' : 'Engineering the best solution...',
    lang === 'ta' ? 'தரவு பாதுகாப்பு சரிபார்க்கப்படுகிறது...' : 'Verifying data security compliance...',
  ];

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

  const [logs, setLogs] = useState<string[]>([]);
  const technicalSteps = [
    '> UPLINK_ESTABLISHED',
    '> ANALYZING_USER_INTENT',
    '> SCANNING_AUTOMATION_PROTOCOLS',
    lang === 'ta' ? '> தமிழ்_மொழிபெயர்ப்பு_சரிபார்க்கப்படுகிறது...' : '> OPTIMIZING_REGION_CONTEXT',
    '> GENERATING_STRATEGY_STREAM...',
  ];

  const handleCustomSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { id: Date.now().toString(), role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setLogs([]);

    const apiMessages = [...messages, userMessage].map(({ role, content }) => ({ role, content }));

    let logInterval: any;
    let logIdx = 0;
    logInterval = setInterval(() => {
      if (logIdx < technicalSteps.length) {
        setLogs(prev => [...prev, technicalSteps[logIdx]]);
        logIdx++;
      } else {
        clearInterval(logInterval);
      }
    }, 800);

    const fetchWithRetry = async (retryCount = 0): Promise<void> => {
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: apiMessages }),
        });

        if (!response.ok) {
          if (response.status === 503 && retryCount < 2) {
            setLogs(prev => [...prev, `> RETRYING_UPLINK_${retryCount + 1}...`]);
            await new Promise(resolve => setTimeout(resolve, retryCount === 0 ? 5000 : 10000));
            return fetchWithRetry(retryCount + 1);
          }
          throw new Error(`API Error: ${response.status}`);
        }

        clearInterval(logInterval);
        setLogs([]);

        if (!response.body) throw new Error('No response body');

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let aiText = '';
        const aiId = Date.now().toString() + '-ai';

        setMessages(prev => [...prev, { id: aiId, role: 'assistant', content: '' }]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          aiText += chunk;
          setMessages(prev => prev.map(m => m.id === aiId ? { ...m, content: aiText } : m));
        }
      } catch (err) {
        console.error('[JoyAI] Fetch error:', err);
        setLogs([]);
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          role: 'assistant',
          content: lang === 'ta'
            ? 'மன்னிக்கவும், தொடர்பில் சிறிய சிக்கல். சில நொடிகள் கழித்து மீண்டும் முயற்சிக்கவும்.'
            : 'Slight delay in bridge connection. Let me try again in a few seconds.',
        }]);
      } finally {
        setIsLoading(false);
      }
    };

    await fetchWithRetry();
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
          {messages.map((msg: any, i: number) => {
            // Extract text from message — handles both string content and parts array
            const text = typeof msg.content === 'string'
              ? msg.content
              : msg.parts?.find((p: any) => p.type === 'text')?.text
              ?? msg.content;
            
            return (
              <div key={i} className={`${styles.message} ${msg.role === 'assistant' ? styles.ai : styles.user}`}>
                <div className={styles.message_role}>{msg.role === 'assistant' ? 'JOY_AI' : 'CLIENT'}</div>
                <div className={styles.message_bubble}>{text}</div>
              </div>
            );
          })}
            {isLoading && (
              <div className={`${styles.message} ${styles.ai}`}>
                <div className={styles.message_role}>JOY_AI</div>
                <div className={styles.message_bubble}>
                  <div className={styles.log_container}>
                    {logs.map((log, i) => (
                      <div key={i} className={styles.log_line}>{log}</div>
                    ))}
                    <div className={styles.loader_bar}></div>
                  </div>
                  <div className={styles.typing_container}>
                    <span className={styles.typing_dot}></span>
                    <span className={styles.typing_dot}></span>
                    <span className={styles.typing_dot}></span>
                  </div>
                </div>
              </div>
            )}
        </div>

        <div className={styles.window_footer}>
          {!user ? (
            <div className={styles.auth_lock}>
              <button className={styles.google_btn} onClick={handleGoogleLogin}>
                {Icons.google}
                <span>{dict?.chat?.loginWithGoogle || 'Continue with Google'}</span>
              </button>
              <p className={styles.lock_hint}>
                {dict?.chat?.loginHint || 'Login required to start automation strategy'}
              </p>
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
