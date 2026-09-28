import React from 'react';

/* 1. Traditional Mango Leaf & Marigold Hanging Toran (మామిడాకుల తోరణం) */
export function MangoToranHanging() {
  return (
    <div style={{
      width: '100%',
      overflow: 'hidden',
      lineHeight: 0,
      background: 'transparent',
      pointerEvents: 'none',
      position: 'relative',
      zIndex: 15
    }}>
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '32px', display: 'block' }}
      >
        {/* String */}
        <path d="M 0,4 Q 60,18 120,4 Q 180,18 240,4 Q 300,18 360,4 Q 420,18 480,4 Q 540,18 600,4 Q 660,18 720,4 Q 780,18 840,4 Q 900,18 960,4 Q 1020,18 1080,4 Q 1140,18 1200,4" fill="none" stroke="#b8860b" strokeWidth="2.5" />

        {/* Repeating Mango Leaves & Marigolds */}
        {[60, 180, 300, 420, 540, 660, 780, 900, 1020, 1140].map((x, i) => (
          <g key={i} transform={`translate(${x}, 12)`}>
            <path d="M 0,0 C -12,15 -18,28 0,35 C 18,28 12,15 0,0 Z" fill="#2d7d46" stroke="#1b522c" strokeWidth="1" />
            <path d="M 0,0 L 0,33" stroke="#f1cf68" strokeWidth="0.8" opacity="0.6" />
            <circle cx="0" cy="5" r="7" fill="#f39c12" />
            <circle cx="0" cy="5" r="4.5" fill="#e67e22" />
            <circle cx="0" cy="5" r="2" fill="#d35400" />
            <path d="M -3,35 L 3,35 L 4,41 L -4,41 Z" fill="#d4a017" />
            <circle cx="0" cy="42" r="1.5" fill="#3d0810" />
          </g>
        ))}
      </svg>
    </div>
  );
}

/* 2. Traditional Telugu Kolam / Rangoli Divider (ముగ్గు డిజైన్) */
export function KolamDivider() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      margin: '25px 0',
      color: '#d4a017'
    }}>
      <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, #d4a017, transparent)' }} />
      <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
        <path d="M20 0L24.5 9H34L26 15L29 24L20 18L11 24L14 15L6 9H15.5L20 0Z" fill="#d4a017" opacity="0.85" />
        <circle cx="20" cy="11" r="3" fill="#5e0f1a" />
      </svg>
      <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, #d4a017, transparent)' }} />
    </div>
  );
}

/* 3. Grandparents & Family Sweet Feeding Photo Card (Using Attached Photo) */
export function TeluguFamilyIllustration() {
  return (
    <div style={{
      width: '100%',
      maxWidth: '540px',
      margin: '0 auto',
      background: '#fff8e8',
      borderRadius: '24px',
      overflow: 'hidden',
      border: '3px solid #d4a017',
      boxShadow: '0 15px 35px rgba(94, 15, 26, 0.18)',
      position: 'relative'
    }}>
      <img
        src="/images/grandparents_family_sweets.jpg"
        alt="Grandparents and Granddaughter Sharing Anand Sweets"
        style={{
          width: '100%',
          maxHeight: '340px',
          objectFit: 'cover',
          display: 'block'
        }}
      />
      <div style={{
        padding: '16px 20px',
        background: 'linear-gradient(135deg, #5e0f1a, #3d0810)',
        color: '#ffffff',
        textAlign: 'center',
        borderTop: '2px solid #d4a017'
      }}>
        <div className="telugu-font" style={{ color: '#d4a017', fontSize: '18px', fontWeight: 'bold', marginBottom: '2px' }}>
          తెలుగు సంప్రదాయం · తాతయ్య నాయనమ్మల తీపి అనురాగం
        </div>
        <small style={{ color: '#fff8e8', fontSize: '12px' }}>
          Sharing generations of traditional sweetness with Anand Sweets Rajahmundry.
        </small>
      </div>
    </div>
  );
}

/* 4. Animated Glowing Brass Diya */
export function AnimatedDiya({ size = 32 }) {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
      <svg width={size} height={size} viewBox="0 0 40 40">
        <path
          className="animate-pulse"
          d="M 20,4 Q 14,15 20,22 Q 26,15 20,4 Z"
          fill="#f39c12"
        />
        <path
          d="M 20,10 Q 16,17 20,22 Q 24,17 20,10 Z"
          fill="#f1cf68"
        />
        <path d="M 8,24 Q 20,36 32,24 L 36,22 Q 20,26 4,22 Z" fill="#d4a017" stroke="#b8860b" strokeWidth="1" />
        <ellipse cx="20" cy="23" rx="14" ry="2" fill="#5e0f1a" />
      </svg>
    </div>
  );
}
