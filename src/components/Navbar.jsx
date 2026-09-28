import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Heart, Menu, X, Phone, MapPin, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/sweetsData';
import { MangoToranHanging } from './TeluguTraditionDecor';

import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './SocialLogos';

export default function Navbar({ activePage, setActivePage, cartCount, wishlistCount, onOpenCart, onOpenWishlist }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'menu', name: 'Our Sweets' },
    { id: 'services', name: 'Services' },
    { id: 'gallery', name: 'Gallery' },
    { id: 'contact', name: 'Contact & Order' }
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 999,
      background: isScrolled ? 'rgba(251, 245, 232, 0.96)' : '#fbf5e8',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(94, 15, 26, 0.1)',
      boxShadow: isScrolled ? '0 8px 25px rgba(63, 18, 18, 0.08)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      {/* Top Header Social & Quick Contact Bar */}
      <div style={{
        background: '#5e0f1a',
        color: '#f1cf68',
        padding: '6px 0',
        fontSize: '12px',
        borderBottom: '1px solid rgba(212, 160, 23, 0.3)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
            <Sparkles size={14} style={{ color: '#d4a017' }} />
            <span>Anand Sweets Rajahmundry · Traditional Telugu Sweets & Pure Desi Ghee</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <a
              href={STORE_INFO.facebookUrl}
              target="_blank"
              rel="noreferrer"
              style={{ color: '#f1cf68', display: 'grid', placeItems: 'center', transition: 'transform 0.2s ease' }}
              aria-label="Facebook Logo"
              title="Facebook Logo"
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <FacebookIcon size={15} color="#1877F2" />
            </a>
            <a
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              style={{ color: '#f1cf68', display: 'grid', placeItems: 'center', transition: 'transform 0.2s ease' }}
              aria-label="Instagram Logo"
              title="Instagram Logo"
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <InstagramIcon size={15} color="#E4405F" />
            </a>
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              style={{ color: '#25d366', display: 'grid', placeItems: 'center', transition: 'transform 0.2s ease' }}
              aria-label="WhatsApp Logo"
              title="WhatsApp Logo"
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <WhatsAppIcon size={15} color="#25D366" />
            </a>
            <a href={`tel:${STORE_INFO.phone}`} style={{ color: '#f1cf68', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 700 }} aria-label="Call">
              <Phone size={13} style={{ color: '#d4a017' }} />
              <span>{STORE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Traditional Mango Leaf Toran Hanging (మామిడాకుల తోరణం) */}
      <MangoToranHanging />

      {/* Main Navbar */}
      <div className="container" style={{
        height: '74px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px'
      }}>
        {/* Logo with Crest Badge */}
        <button
          onClick={() => {
            setActivePage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: 0
          }}
        >
          <img
            src="/images/logo.png"
            alt="Anand Sweets Logo Crest"
            style={{
              height: '52px',
              width: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 4px 8px rgba(94, 15, 26, 0.2))'
            }}
          />
          <div style={{ textAlign: 'left' }}>
            <div style={{ color: '#5e0f1a', fontWeight: 800, fontSize: '20px', lineHeight: 1 }}>
              Anand Sweets
            </div>
            <small style={{ color: '#d4a017', fontSize: '9px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginTop: '2px' }}>
              RAJAHMUNDRY · ESTD 1960
            </small>
          </div>
        </button>

        {/* Navigation Links for 5 Mockup Pages */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {navLinks.map((link, idx) => (
            <button
              key={link.id}
              onClick={() => {
                setActivePage(link.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{
                background: activePage === link.id ? 'linear-gradient(135deg, #5e0f1a, #3d0810)' : 'transparent',
                color: activePage === link.id ? '#d4a017' : '#5e0f1a',
                border: activePage === link.id ? '1px solid #d4a017' : '1px solid transparent',
                borderRadius: '50px',
                padding: '8px 16px',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: activePage === link.id ? '0 4px 12px rgba(94, 15, 26, 0.25)' : 'none'
              }}
            >
              <span style={{
                background: activePage === link.id ? '#d4a017' : '#5e0f1a',
                color: activePage === link.id ? '#3d0810' : '#ffffff',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                fontSize: '10px',
                fontWeight: 800,
                display: 'inline-grid',
                placeItems: 'center'
              }}>
                {idx + 1}
              </span>
              <span>{link.name}</span>
            </button>
          ))}
        </nav>

        {/* Right Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            aria-label="Wishlist"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: '#ffffff',
              border: '1px solid rgba(94, 15, 26, 0.12)',
              color: '#5e0f1a',
              display: 'grid',
              placeItems: 'center',
              cursor: 'pointer',
              position: 'relative',
              boxShadow: '0 4px 10px rgba(0,0,0,0.04)'
            }}
          >
            <Heart size={18} />
            {wishlistCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                background: '#c0392b',
                color: '#fff',
                fontSize: '10px',
                fontWeight: 800,
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'grid',
                placeItems: 'center'
              }}>
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            aria-label="Cart"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              padding: '8px 16px',
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #5e0f1a, #3d0810)',
              color: '#d4a017',
              border: '1px solid #d4a017',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '13px',
              boxShadow: '0 4px 15px rgba(94, 15, 26, 0.25)'
            }}
          >
            <ShoppingBag size={18} />
            <span>Cart</span>
            <span style={{
              background: '#d4a017',
              color: '#3d0810',
              borderRadius: '50%',
              width: '19px',
              height: '19px',
              display: 'grid',
              placeItems: 'center',
              fontSize: '11px',
              fontWeight: 800
            }}>
              {cartCount}
            </span>
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle-btn"
            style={{
              background: 'none',
              border: 'none',
              color: '#5e0f1a',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: '#fbf5e8',
          borderTop: '1px solid rgba(94, 15, 26, 0.1)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
        }}>
          {navLinks.map((link, idx) => (
            <button
              key={link.id}
              onClick={() => {
                setActivePage(link.id);
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{
                background: activePage === link.id ? '#5e0f1a' : '#ffffff',
                color: activePage === link.id ? '#d4a017' : '#5e0f1a',
                border: '1px solid rgba(94, 15, 26, 0.15)',
                borderRadius: '12px',
                padding: '12px 16px',
                textAlign: 'left',
                fontWeight: 700,
                fontSize: '15px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <span style={{
                background: activePage === link.id ? '#d4a017' : '#5e0f1a',
                color: activePage === link.id ? '#3d0810' : '#ffffff',
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                fontSize: '11px',
                fontWeight: 800,
                display: 'inline-grid',
                placeItems: 'center'
              }}>
                {idx + 1}
              </span>
              <span>{link.name}</span>
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
        }
        @media (min-width: 901px) {
          .mobile-toggle-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
