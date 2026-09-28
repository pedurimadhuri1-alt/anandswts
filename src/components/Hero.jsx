import React from 'react';
import { Award, ShoppingBag, Sparkles, MapPin, HeartHandshake, ShieldCheck } from 'lucide-react';
import { STORE_INFO } from '../data/sweetsData';

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '85vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      paddingTop: '20px',
      paddingBottom: '60px'
    }}>
      {/* Background Image Container */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: -2
      }}>
        <img
          src="/images/hero_sweets.png"
          alt="Anand Sweets Rajahmundry Spread"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
      </div>

      {/* Dark Overlay Gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, rgba(38, 5, 9, 0.94) 0%, rgba(38, 5, 9, 0.78) 50%, rgba(38, 5, 9, 0.3) 100%)',
        zIndex: -1
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '680px', color: '#ffffff', paddingTop: '40px' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#d4a017',
            background: 'rgba(212, 160, 23, 0.15)',
            border: '1px solid rgba(212, 160, 23, 0.4)',
            padding: '6px 16px',
            borderRadius: '50px',
            fontWeight: 700,
            fontSize: '13px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '20px'
          }}>
            <Sparkles size={16} />
            <span>Anand Sweets · Rajahmundry</span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(38px, 5.5vw, 68px)',
            lineHeight: 1.08,
            color: '#ffffff',
            fontWeight: 800,
            marginBottom: '20px',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)'
          }}>
            Sweetness <br />
            Brings <span style={{ color: '#d4a017' }}>People Together.</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '16px',
            color: '#fff8e8',
            lineHeight: 1.8,
            maxWidth: '580px',
            marginBottom: '30px'
          }}>
            Authentic Andhra flavours, 100% pure desi ghee, and generations of sweet tradition. Famous for our trademark <strong style={{ color: '#f1cf68' }}>Signature Anand Kaja</strong> and Pootharekulu — crafted fresh daily in Rajahmundry.
          </p>

          {/* Telugu Heritage Line */}
          <p className="telugu-font" style={{
            fontSize: '20px',
            color: '#f1cf68',
            marginBottom: '32px',
            lineHeight: 1.5
          }}>
            రాజమండ్రి మట్టిలో పుట్టిన రుచులు... ప్రతి తీపి జ్ఞాపకంగా మారేలా.
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '45px' }}>
            <a href="#menu" className="btn btn-gold" style={{ fontSize: '15px', padding: '14px 28px' }}>
              <ShoppingBag size={18} />
              Explore Sweets Menu
            </a>
            <a href="#box-builder" className="btn btn-maroon" style={{ fontSize: '15px', padding: '14px 28px' }}>
              <Sparkles size={18} />
              Build Custom Gift Box
            </a>
            <a href="#contact" className="btn btn-outline" style={{ fontSize: '15px', padding: '14px 28px' }}>
              <MapPin size={18} />
              Visit Rajahmundry Store
            </a>
          </div>

          {/* Highlights Ticker / Feature Badges */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '14px',
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '16px',
            padding: '16px 20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Award size={24} style={{ color: '#d4a017' }} />
              <div>
                <div style={{ color: '#d4a017', fontWeight: 800, fontSize: '16px' }}>40+ Years</div>
                <div style={{ color: '#ddd', fontSize: '11px' }}>Sweet Heritage</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ShieldCheck size={24} style={{ color: '#d4a017' }} />
              <div>
                <div style={{ color: '#d4a017', fontWeight: 800, fontSize: '16px' }}>100% Pure</div>
                <div style={{ color: '#ddd', fontSize: '11px' }}>Desi Ghee</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <HeartHandshake size={24} style={{ color: '#d4a017' }} />
              <div>
                <div style={{ color: '#d4a017', fontWeight: 800, fontSize: '16px' }}>50,000+</div>
                <div style={{ color: '#ddd', fontSize: '11px' }}>Happy Families</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
