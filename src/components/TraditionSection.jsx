import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function TraditionSection() {
  return (
    <section id="story" className="section" style={{ background: '#fff7df' }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '50px',
        alignItems: 'center'
      }}>
        {/* Left Image with Decorative Frame */}
        <div style={{ position: 'relative' }}>
          <img
            src="/images/godavari_bridge.png"
            alt="Godavari Rajahmundry Heritage"
            style={{
              width: '100%',
              height: '460px',
              objectFit: 'cover',
              borderRadius: '26px',
              boxShadow: '0 15px 40px rgba(63, 18, 18, 0.15)'
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: '-15px',
            right: '-15px',
            width: '90px',
            height: '90px',
            border: '3px solid #d4a017',
            borderRadius: '20px',
            zIndex: -1
          }} />
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            background: 'rgba(61, 8, 16, 0.85)',
            backdropFilter: 'blur(8px)',
            color: '#f1cf68',
            padding: '12px 20px',
            borderRadius: '50px',
            fontSize: '13px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            border: '1px solid rgba(212, 160, 23, 0.4)'
          }}>
            <Sparkles size={16} />
            <span>Rooted in Rajahmundry</span>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <span className="section-subtitle">The Taste of Andhra</span>
          <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 46px)', color: '#5e0f1a', margin: '10px 0 20px', lineHeight: 1.15 }}>
            Taste The Authentic <br />
            Essence of Anand Sweets.
          </h2>

          <p className="telugu-font" style={{
            color: '#5e0f1a',
            fontSize: '22px',
            lineHeight: 1.6,
            marginBottom: '20px',
            fontWeight: 'bold',
            borderLeft: '4px solid #d4a017',
            paddingLeft: '16px'
          }}>
            రాజమండ్రి మట్టిలో పుట్టిన రుచులు... ప్రతి తీపి జ్ఞాపకంగా మారేలా.
          </p>

          <p style={{ color: '#746565', lineHeight: 1.8, marginBottom: '25px', fontSize: '15px' }}>
            Nestled on the banks of the sacred Godavari River, <strong>Anand Sweets</strong> has been crafting traditional Andhra delicacies for generations. Our famous signature <strong>Anand Kaja</strong> is renowned for its crisp outer layers and rich juicy syrup. Prepared with unadulterated pure ghee, organic jaggery, and time-honored recipes passed down through family traditions.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
            <a href="#menu" className="btn btn-gold">
              <span>Discover Anand Specialties</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
