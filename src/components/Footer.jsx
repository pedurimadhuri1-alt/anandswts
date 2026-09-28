import React from 'react';
import { Phone, MapPin, MessageCircle, Heart } from 'lucide-react';
import { STORE_INFO } from '../data/sweetsData';

export default function Footer({ setActivePage }) {
  return (
    <footer style={{ background: '#3d0810', color: '#ffffff', paddingTop: '55px', paddingBottom: '25px', borderTop: '2px solid #d4a017' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          paddingBottom: '40px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
        }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img
                src="/images/logo.png"
                alt="Anand Sweets Crest Logo"
                style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
              />
              <div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>
                  Anand <span style={{ color: '#d4a017' }}>Sweets</span>
                </div>
                <small style={{ color: '#d4a017', fontSize: '9px', fontWeight: 800, letterSpacing: '2px' }}>
                  RAJAHMUNDRY
                </small>
              </div>
            </div>

            <p style={{ color: '#d7c4b6', fontSize: '13px', lineHeight: 1.8, marginBottom: '18px' }}>
              Bringing authentic Andhra sweet traditions and 100% pure desi ghee delicacies to families in Rajahmundry and across the world.
            </p>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a href={STORE_INFO.facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook" style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', color: '#d4a017', display: 'grid', placeItems: 'center', textDecoration: 'none' }}>
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href={STORE_INFO.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram" style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', color: '#d4a017', display: 'grid', placeItems: 'center', textDecoration: 'none' }}>
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href={`https://wa.me/${STORE_INFO.whatsappNumber}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', color: '#25d366', display: 'grid', placeItems: 'center', textDecoration: 'none' }}>
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#d4a017', fontSize: '16px', marginBottom: '16px', fontWeight: 700 }}>
              Quick Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <button onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ background: 'none', border: 'none', color: '#eadbd1', textAlign: 'left', cursor: 'pointer', padding: 0 }}>
                Home Page
              </button>
              <button onClick={() => { setActivePage('menu'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ background: 'none', border: 'none', color: '#eadbd1', textAlign: 'left', cursor: 'pointer', padding: 0 }}>
                Sweets & Menu
              </button>
              <button onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ background: 'none', border: 'none', color: '#eadbd1', textAlign: 'left', cursor: 'pointer', padding: 0 }}>
                Our Services
              </button>
              <button onClick={() => { setActivePage('gallery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ background: 'none', border: 'none', color: '#eadbd1', textAlign: 'left', cursor: 'pointer', padding: 0 }}>
                Photo Gallery
              </button>
              <button onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ background: 'none', border: 'none', color: '#eadbd1', textAlign: 'left', cursor: 'pointer', padding: 0 }}>
                Contact & Orders
              </button>
            </div>
          </div>

          {/* Our Specialties */}
          <div>
            <h4 style={{ color: '#d4a017', fontSize: '16px', marginBottom: '16px', fontWeight: 700 }}>
              Anand Specialties
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#eadbd1' }}>
              <span>Pootharekulu (Paper Sweet)</span>
              <span>Signature Anand Kaja</span>
              <span>Urad Dal Sunnundalu</span>
              <span>Mysore Pak Trilogy Box</span>
              <span>Pappu Chekkalu & Savoury Mixture</span>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ color: '#d4a017', fontSize: '16px', marginBottom: '16px', fontWeight: 700 }}>
              Rajahmundry Store
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#eadbd1' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <MapPin size={16} style={{ color: '#d4a017', flexShrink: 0, marginTop: '3px' }} />
                <span>{STORE_INFO.fullAddress}</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Phone size={16} style={{ color: '#d4a017', flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <a href={`tel:${STORE_INFO.phone}`} style={{ color: '#eadbd1', textDecoration: 'none' }}>{STORE_INFO.phone}</a>
                  <a href={`tel:${STORE_INFO.landline}`} style={{ color: '#bda89c', textDecoration: 'none', fontSize: '12px' }}>Landline: {STORE_INFO.landline}</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <MessageCircle size={16} style={{ color: '#25d366', flexShrink: 0 }} />
                <a href={`https://wa.me/${STORE_INFO.whatsappNumber}`} target="_blank" rel="noreferrer" style={{ color: '#eadbd1', textDecoration: 'none' }}>WhatsApp Orders Available</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ textAlign: 'center', paddingTop: '20px', fontSize: '12px', color: '#bda89c', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', flexWrap: 'wrap' }}>
          <span>© 2026 Anand Sweets Rajahmundry. All Rights Reserved.</span>
          <span>•</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            Crafted with <Heart size={14} style={{ color: '#c0392b' }} fill="#c0392b" /> for Telugu sweet lovers.
          </span>
        </div>
      </div>
    </footer>
  );
}
