'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from './admin_layout.module.css';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Simple Auth Guard - in a real app use Server Sessions/Cookies
    const auth = localStorage.getItem('admin_auth');
    if (!auth && pathname !== '/admin/login') {
      router.push('/admin/login');
    } else {
      setAuthorized(true);
    }
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.setItem('admin_auth', 'false'); // Set to false instead of removing to trigger router redirect
    localStorage.removeItem('admin_auth');
    router.push('/admin/login');
  };

  // If on login page, render only children but wrap it in root tags
  if (pathname === '/admin/login') {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }

  const menuItems = [
    { label: 'DASHBOARD', href: '/admin/dashboard', icon: '📊' },
    { label: 'LEAD_MANAGER', href: '/admin/leads', icon: '👤' },
    { label: 'ANALYTICS_MAP', href: '/admin/analytics', icon: '📍' },
    { label: 'SYSTEM_SETTINGS', href: '/admin/settings', icon: '⚙️' },
  ];

  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "w1mer12q1g");
            `
          }}
        />
      </head>
      <body className={styles.admin_shell}>
        {!authorized ? (
          <div style={{ background: '#000', height: '100vh', width: '100vw' }} />
        ) : (
          <>
            {/* SIDEBAR */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebar_brand}>
                <Image src="/images/offl_logo.png" alt="Logo" width={40} height={40} />
                <div className={styles.brand_text}>
                  <span>JOY</span>SYSTEMS
                </div>
              </div>

              <nav className={styles.nav_menu}>
                {menuItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    className={`${styles.nav_item} ${pathname === item.href ? styles.active : ''}`}
                  >
                    <span className={styles.icon}>{item.icon}</span>
                    <span className={styles.label}>{item.label}</span>
                  </Link>
                ))}
              </nav>

              <button className={styles.logout_btn} onClick={handleLogout}>
                TERMINATE_SESSION ⏻
              </button>
            </aside>

            {/* MAIN CONTENT AREA */}
            <main className={styles.main_content}>
              <header className={styles.top_header}>
                <div className={styles.path_indicator}>
                  SYSTEM / {pathname.replace('/admin/', '').toUpperCase()}
                </div>
                <div className={styles.user_status}>
                  <span className={styles.pulse_dot}></span>
                  ARCHITECT_ACTIVE
                </div>
              </header>

              <section className={styles.page_body}>
                {children}
              </section>
            </main>
          </>
        )}
      </body>
    </html>
  );
}
