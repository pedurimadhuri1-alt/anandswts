import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, Menu, X, MapPin } from 'lucide-react';
import { STORE_INFO } from '../data/sweetsData';

export default function Navbar({ activePage, setActivePage, cartCount, wishlistCount, onOpenCart, onOpenWishlist }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'menu', label: 'Sweets' },
    { id: 'savouries', label: 'Savouries' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavigation = (page) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-topline">
        <span />
        <span className="nav-ornament">✦</span>
        <span />
      </div>

      <div className="nav-shell">
        <button type="button" className="brand-button" onClick={() => handleNavigation('home')}>
          <div className="brand-mark">
            <img src="/images/logo.png" alt="Anand Sweets" onError={(e) => (e.currentTarget.style.display = 'none')} />
          </div>
          <div className="brand-copy">
            <span className="brand-name">Anand Sweets</span>
            <span className="brand-subtitle">RAJAHMUNDRY</span>
          </div>
        </button>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              className={`nav-link ${activePage === link.id ? 'active' : ''}`}
              onClick={() => handleNavigation(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <a href={STORE_INFO.googleMapsUrl} target="_blank" rel="noreferrer" className="icon-button" aria-label="Google Maps">
            <MapPin size={15} strokeWidth={2} />
          </a>
          <button type="button" className="icon-button" onClick={onOpenWishlist} aria-label="Open wishlist">
            <Heart size={15} strokeWidth={2} />
            {wishlistCount > 0 && <span className="count-pill">{wishlistCount}</span>}
          </button>
          <button type="button" className="icon-button" onClick={onOpenCart} aria-label="Open cart">
            <ShoppingBag size={15} strokeWidth={2} />
            {cartCount > 0 && <span className="count-pill">{cartCount}</span>}
          </button>
        </div>

        <button type="button" className="mobile-toggle" onClick={() => setMobileMenuOpen((open) => !open)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <button key={link.id} type="button" className={`mobile-link ${activePage === link.id ? 'active' : ''}`} onClick={() => handleNavigation(link.id)}>
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
