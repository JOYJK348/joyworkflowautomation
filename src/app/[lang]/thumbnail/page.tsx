import Image from 'next/image';

export default function FiverrThumbnail() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '100vh', backgroundColor: '#050505' }}>
      
      {/* 1024x768 Thumbnail Container */}
      <div style={{
        width: '1024px',
        height: '768px',
        backgroundColor: '#0a0a0a',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        display: 'flex',
        border: '1px solid rgba(255, 77, 77, 0.1)'
      }}>
        
        {/* Background Gradients & Grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundSize: '40px 40px',
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute', top: '-20%', left: '-10%', width: '50%', height: '50%',
          background: 'radial-gradient(circle, rgba(255, 77, 77, 0.15) 0%, transparent 70%)',
          zIndex: 1, filter: 'blur(60px)'
        }} />

        {/* Left Side: Content */}
        <div style={{
          position: 'relative', zIndex: 10, width: '60%', padding: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center'
        }}>
          {/* Tag */}
          <div style={{
            display: 'inline-block', padding: '8px 16px', background: 'rgba(255, 77, 77, 0.1)',
            border: '1px solid rgba(255, 77, 77, 0.3)', borderRadius: '100px',
            color: '#ff4d4d', fontWeight: '800', letterSpacing: '2px', fontSize: '14px', marginBottom: '20px',
            width: 'fit-content'
          }}>
            // ELITE SYSTEM ARCHITECT
          </div>

          {/* Title */}
          <h1 style={{ color: '#ffffff', fontSize: '64px', fontWeight: '900', lineHeight: 1.1, margin: '0 0 20px 0', letterSpacing: '-1px' }}>
            JOY AUTOMATIONS
          </h1>
          
          <p style={{ color: '#e5e7eb', fontSize: '24px', fontWeight: '600', marginBottom: '40px', lineHeight: 1.4 }}>
            Custom CRM, Dashboards &<br/>Business Automation
          </p>

          {/* Value Props */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#ff4d4d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span style={{ color: '#fff', fontSize: '20px', fontWeight: '500' }}>Next.js 15 + Supabase</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#ff4d4d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span style={{ color: '#fff', fontSize: '20px', fontWeight: '500' }}>High-Fidelity ERPs</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#ff4d4d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span style={{ color: '#fff', fontSize: '20px', fontWeight: '500' }}>Zero Monthly SaaS Fees</span>
            </div>
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ color: '#fbbf24', fontSize: '24px' }}>★★★★★</div>
            <div style={{ color: '#888', fontSize: '16px', fontWeight: '600' }}>TOP RATED ARCHITECTURE</div>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '45%',
          display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end',
          zIndex: 5
        }}>
          {/* Gradient overlay to blend image into background */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, #0a0a0a 0%, transparent 30%), linear-gradient(to top, #0a0a0a 0%, transparent 15%)',
            zIndex: 10
          }} />
          <Image 
            src="/images/JK.jpg" 
            alt="Jay K"
            width={600}
            height={768}
            style={{ objectFit: 'cover', height: '100%', objectPosition: 'center top', filter: 'contrast(1.1) grayscale(0.1)' }}
          />
        </div>
      </div>
    </div>
  );
}
