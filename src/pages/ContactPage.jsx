import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Mail, ShoppingBag, Sparkles } from 'lucide-react';
import { STORE_INFO, SWEETS_DATA } from '../data/sweetsData';

export default function ContactPage({ onAddToCart }) {
  const quickSweets = SWEETS_DATA.slice(0, 3); // Pootharekulu, Anand Kaja, Ariselu

  return (
    <div className="animate-fade-in">
      {/* 1. Header Banner (Matching Page 5 Banner in Image 0) */}
      <section style={{
        background: 'linear-gradient(90deg, rgba(61, 8, 16, 0.9), rgba(94, 15, 26, 0.75)), url("/images/custom_gift_box.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffffff',
        padding: '70px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="section-subtitle" style={{ color: '#d4a017' }}>Visit Us Or Order Online</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', color: '#ffffff', marginBottom: '8px' }}>
            Contact & Sweet Orders
          </h1>
          <p style={{ color: '#fff8e8', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
            Fresh • Traditional • Homemade Delicacies from Rajahmundry
          </p>
        </div>
      </section>

      {/* 2. "Popular Sweets" Quick Grid (Matching Page 5 Quick Items in Image 0) */}
      <section className="section" style={{ background: '#fbf5e8' }}>
        <div className="container">
          <div className="section-title">
            <span className="section-subtitle">Quick Order</span>
            <h2>Popular Sweets</h2>
            <p>Pootharekulu · Anand Kaja · Ariselu</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '50px'
          }}>
            {quickSweets.map((sweet) => (
              <div
                key={sweet.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '18px',
                  padding: '20px',
                  border: '1px solid rgba(94, 15, 26, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.04)'
                }}
              >
                <img src={sweet.image} alt={sweet.name} style={{ width: '70px', height: '70px', borderRadius: '12px', objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                  <h4 style={{ color: '#5e0f1a', fontSize: '16px', margin: 0 }}>{sweet.name}</h4>
                  <div style={{ color: '#d4a017', fontWeight: 800, fontSize: '15px', margin: '4px 0' }}>₹{sweet.pricePerKg} / kg</div>
                  <button
                    onClick={() => onAddToCart(sweet, sweet.availableWeights[sweet.availableWeights.length - 1])}
                    className="btn btn-gold"
                    style={{ padding: '6px 12px', fontSize: '11px' }}
                  >
                    <ShoppingBag size={12} /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 3. Two-Column Layout (Matching Page 5 Layout in Image 0) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {/* Left Box: Visit Our Store */}
            <div style={{
              background: '#ffffff',
              padding: '36px',
              borderRadius: '24px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              border: '1px solid rgba(94, 15, 26, 0.08)'
            }}>
              <h3 style={{ fontSize: '24px', color: '#5e0f1a', marginBottom: '20px' }}>
                Visit Our Store
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '14px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <MapPin size={20} style={{ color: '#d4a017', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#5e0f1a' }}>Rajahmundry Address:</strong>
                    <div style={{ color: '#746565', fontSize: '13px', marginTop: '2px' }}>{STORE_INFO.fullAddress}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <Phone size={20} style={{ color: '#d4a017', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#5e0f1a' }}>Call Us:</strong>
                    <div style={{ color: '#746565', fontSize: '13px' }}>{STORE_INFO.phone}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <Mail size={20} style={{ color: '#d4a017', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#5e0f1a' }}>Email Us:</strong>
                    <div style={{ color: '#746565', fontSize: '13px' }}>{STORE_INFO.email}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <Clock size={20} style={{ color: '#d4a017', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#5e0f1a' }}>Opening Hours:</strong>
                    <div style={{ color: '#746565', fontSize: '13px' }}>{STORE_INFO.openingHours}</div>
                  </div>
                </div>

                <div style={{ marginTop: '10px' }}>
                  <a
                    href={STORE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                    style={{ color: '#5e0f1a', borderColor: 'rgba(94, 15, 26, 0.3)', width: '100%', padding: '10px' }}
                  >
                    <MapPin size={16} /> Open Location on Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Right Maroon Box: Anand Sweets App / WhatsApp Order */}
            <div style={{
              background: 'linear-gradient(135deg, #3d0810, #5e0f1a)',
              color: '#ffffff',
              padding: '36px',
              borderRadius: '24px',
              boxShadow: '0 15px 35px rgba(63, 18, 18, 0.2)',
              border: '2px solid #d4a017',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{ fontSize: '24px', color: '#d4a017', marginBottom: '14px' }}>
                  Anand Sweets WhatsApp Order
                </h3>
                <p style={{ color: '#fff8e8', fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>
                  Order sweets, get instant price quotes, or enquire about custom Telugu wedding box orders directly on WhatsApp.
                </p>

                <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                  <a href={STORE_INFO.facebookUrl} target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', color: '#d4a017', display: 'grid', placeItems: 'center', textDecoration: 'none' }}>
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href={STORE_INFO.instagramUrl} target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', color: '#d4a017', display: 'grid', placeItems: 'center', textDecoration: 'none' }}>
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href={`https://wa.me/${STORE_INFO.whatsappNumber}`} target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', color: '#25d366', display: 'grid', placeItems: 'center', textDecoration: 'none' }}>
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <a href={`tel:${STORE_INFO.phone}`} className="btn btn-gold" style={{ flex: 1 }}>
                  <Phone size={16} /> Call Us
                </a>
                <a href={`https://wa.me/${STORE_INFO.whatsappNumber}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ flex: 1 }}>
                  <MessageCircle size={16} /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Order Banner (Matching Image 0 Order Banner) */}
      <section className="container" style={{ marginBottom: '40px' }}>
        <div className="telugu-maroon-banner" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '26px', color: '#d4a017', marginBottom: '8px' }}>
            Order Your Favourite Sweets Today!
          </h2>
          <p style={{ color: '#fff8e8', fontSize: '14px', marginBottom: '20px' }}>
            Fresh • Traditional • Homemade
          </p>
          <a href={`https://wa.me/${STORE_INFO.whatsappNumber}`} target="_blank" rel="noreferrer" className="btn btn-gold">
            <MessageCircle size={18} /> Order Now On WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
