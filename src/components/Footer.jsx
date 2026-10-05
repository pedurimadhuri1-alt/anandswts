import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock, ArrowRight } from 'lucide-react';
import { STORE_INFO } from '../data/sweetsData';

export default function Footer({ setActivePage }) {
  const goToPage = (page) => {
    if (setActivePage) {
      setActivePage(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsappNumber}`;

  return (
    <footer className="site-footer">
      <div className="footer-topline" />
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <button type="button" className="footer-brand-button" onClick={() => goToPage('home')}>
              <img src="/images/logo.png" alt="Anand Sweets" />
              <div>
                <span className="footer-brand-main">Anand Sweets</span>
                <span className="footer-brand-sub">Rajahmundry</span>
              </div>
            </button>
            <p>
              Traditional Telugu sweets and savouries crafted with family recipes, festive warmth,
              and authentic Andhra flavour.
            </p>
            <div className="footer-socials">
              <a href={STORE_INFO.facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
              <a href={STORE_INFO.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={16} /></a>
              <a href={`mailto:${STORE_INFO.email}`} aria-label="Email"><Mail size={16} /></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@anandsweetsrajahmundry.com" target="_blank" rel="noreferrer" aria-label="Gmail">G</a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <button type="button" className="footer-link" onClick={() => goToPage('home')}><ArrowRight size={14} /> Home</button>
            <button type="button" className="footer-link" onClick={() => goToPage('about')}><ArrowRight size={14} /> About</button>
            <button type="button" className="footer-link" onClick={() => goToPage('menu')}><ArrowRight size={14} /> Sweets</button>
            <button type="button" className="footer-link" onClick={() => goToPage('savouries')}><ArrowRight size={14} /> Savouries</button>
            <button type="button" className="footer-link" onClick={() => goToPage('services')}><ArrowRight size={14} /> Services</button>
            <button type="button" className="footer-link" onClick={() => goToPage('gallery')}><ArrowRight size={14} /> Gallery</button>
            <button type="button" className="footer-link" onClick={() => goToPage('contact')}><ArrowRight size={14} /> Contact Us</button>
          </div>

          <div className="footer-column">
            <h3>Get In Touch</h3>
            <a href={STORE_INFO.googleMapsUrl} target="_blank" rel="noreferrer" className="footer-contact"><MapPin size={16} /> {STORE_INFO.shortAddress}</a>
            <a href={`tel:${STORE_INFO.phone}`} className="footer-contact"><Phone size={16} /> {STORE_INFO.phone}</a>
            <a href={`mailto:${STORE_INFO.email}`} className="footer-contact"><Mail size={16} /> {STORE_INFO.email}</a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@anandsweetsrajahmundry.com" target="_blank" rel="noreferrer" className="footer-contact"><MessageCircle size={16} /> Gmail</a>
            <div className="footer-contact">
              <Clock size={16} />
              <span>Monday - Sunday<br />8:30 AM - 10:00 PM</span>
            </div>
          </div>

          <div className="footer-column action-column">
            <h3>Order Enquiry</h3>
            <p>Festive hampers, family boxes, and daily favourites for every celebration.</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="footer-action primary">WhatsApp Us</a>
            <a href={`mailto:${STORE_INFO.email}`} className="footer-action secondary">Email Us</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>© 2026 Anand Sweets Rajahmundry</span>
          <span>Crafted with tradition</span>
        </div>
      </div>
    </footer>
  );
}
