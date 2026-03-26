'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './login.module.css';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // SIMULATED AUTH FOR NOW - WE'LL ADD PRO AUTH IN NEXT STEP
    if (email === 'admin@joyautomations.com' && password === 'admin123') {
      // In a real app, we'd set a cookie/session here
      localStorage.setItem('admin_auth', 'true');
      router.push('/admin/dashboard');
    } else {
      setError('Invalid system credentials. Access Denied.');
    }
    setLoading(false);
  };

  return (
    <main className={styles.login_page}>
      <div className={styles.glow_orb}></div>
      
      <div className={styles.login_container}>
        <div className={styles.logo_section}>
          <Image 
            src="/images/offl_logo.png" 
            alt="JoyAutomations" 
            width={80} 
            height={80} 
            className={styles.logo_img}
          />
          <h1 className={styles.title}>
            SYSTEM_<span>ACCESS</span>
          </h1>
          <p className={styles.subtitle}>Enter architect credentials to deploy control.</p>
        </div>

        <form className={styles.login_form} onSubmit={handleLogin}>
          {error && <div className={styles.error_box}>{error}</div>}
          
          <div className={styles.input_group}>
            <label>ID_EMAIL</label>
            <input 
              type="email" 
              placeholder="admin@joyautomations.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.input_group}>
            <label>SECRET_PASS</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit" 
            className={styles.login_btn}
            disabled={loading}
          >
            {loading ? 'AUTHENTICATING...' : 'INITIALIZE_SESSION'}
          </button>
        </form>

        <div className={styles.footer_text}>
          &copy; {new Date().getFullYear()} JoyAutomations System Architecture
        </div>
      </div>
    </main>
  );
}
