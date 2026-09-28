import React, { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);

  const galleryItems = [
    { id: 1, title: 'Happy Diwali & Telugu Festivities', category: 'festival', image: '/images/festive_family.jpg', desc: 'Vibrant Telugu family sweet celebration with lights & diyas' },
    { id: 2, title: 'Family Sweet Moments', category: 'family', image: '/images/family_eating_sweets.jpg', desc: 'Family members feeding each other traditional sweets' },
    { id: 3, title: 'Royal Gift Baskets & Hampers', category: 'wedding', image: '/images/gift_baskets.jpg', desc: 'Luxury sweet gift baskets wrapped with ribbons' },
    { id: 4, title: 'Laser-Cut Wooden Sweet Box', category: 'wedding', image: '/images/wooden_gift_box.jpg', desc: 'Handcrafted luxury wooden sweet hamper' },
    { id: 5, title: 'Hygienic Sweet Kitchen', category: 'store', image: '/images/sweet_kitchen.jpg', desc: 'Master sweet chefs preparing fresh sweets daily' },
    { id: 6, title: 'Ugadi Celebrations', category: 'festival', image: '/images/pootharekulu.png', desc: 'Traditional Ugadi sweet festival' },
    { id: 7, title: 'Our Sweet Store', category: 'store', image: '/images/hero_sweets.png', desc: 'Anand Sweets Rajahmundry boutique counter' },
    { id: 8, title: 'Godavari Arch - Rajahmundry', category: 'family', image: '/images/godavari_bridge.png', desc: 'Sacred river Godavari reflections' }
  ];

  const filtered = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="animate-fade-in">
      {/* 1. Gallery Header Banner */}
      <section style={{
        background: 'linear-gradient(90deg, rgba(61, 8, 16, 0.9), rgba(94, 15, 26, 0.75)), url("/images/festive_family.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffffff',
        padding: '70px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="section-subtitle" style={{ color: '#d4a017' }}>Sweet Memories</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', color: '#ffffff', marginBottom: '8px' }}>
            Our Gallery & Festival Moments
          </h1>
          <p style={{ color: '#fff8e8', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
            Moments, Celebrations, and Memories Made Sweeter
          </p>
        </div>
      </section>

      {/* 2. Gallery Filter & Grid */}
      <section className="section" style={{ background: '#fbf5e8' }}>
        <div className="container">
          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '35px' }}>
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'festival', label: 'Festivals' },
              { id: 'wedding', label: 'Weddings & Gifts' },
              { id: 'family', label: 'Family Moments' },
              { id: 'store', label: 'Store & Kitchen' }
            ].map(btn => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                style={{
                  padding: '9px 22px',
                  borderRadius: '50px',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: filter === btn.id ? 'none' : '1px solid rgba(94, 15, 26, 0.15)',
                  background: filter === btn.id ? '#5e0f1a' : '#ffffff',
                  color: filter === btn.id ? '#d4a017' : '#2d2020',
                  boxShadow: filter === btn.id ? '0 6px 16px rgba(94, 15, 26, 0.2)' : 'none'
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxImg(item)}
                style={{
                  height: '240px',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.06)'
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.08)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(61, 8, 16, 0.85), transparent)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '16px',
                  color: '#ffffff'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, fontSize: '15px', color: '#f1cf68' }}>{item.title}</span>
                    <ZoomIn size={16} style={{ color: '#d4a017' }} />
                  </div>
                  <small style={{ color: '#ddd', fontSize: '11px', marginTop: '2px' }}>{item.desc}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Dark Maroon Telugu Banner */}
      <section className="container" style={{ marginBottom: '40px' }}>
        <div className="telugu-maroon-banner" style={{ textAlign: 'center' }}>
          <h2 className="telugu-font" style={{ fontSize: 'clamp(26px, 4vw, 44px)', color: '#d4a017', marginBottom: '8px' }}>
            ప్రతి ముద్దలో సంతృప్తి • ప్రతి వేడుకలో ఆనందం
          </h2>
          <p style={{ color: '#fff8e8', fontSize: '14px' }}>
            Bringing families together in Rajahmundry with sweet memories.
          </p>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(8px)',
          display: 'grid',
          placeItems: 'center',
          padding: '20px'
        }} onClick={() => setLightboxImg(null)}>
          <div style={{
            maxWidth: '750px',
            width: '100%',
            background: '#3d0810',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '2px solid #d4a017',
            position: 'relative'
          }} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxImg(null)}
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                background: '#d4a017',
                color: '#3d0810',
                border: 'none',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                cursor: 'pointer',
                display: 'grid',
                placeItems: 'center'
              }}
            >
              <X size={18} />
            </button>
            <img src={lightboxImg.image} alt={lightboxImg.title} style={{ width: '100%', maxHeight: '480px', objectFit: 'cover' }} />
            <div style={{ padding: '18px', color: '#ffffff', textAlign: 'center' }}>
              <h3 style={{ color: '#d4a017', fontSize: '20px', margin: 0 }}>{lightboxImg.title}</h3>
              <p style={{ color: '#fff8e8', fontSize: '14px', marginTop: '4px' }}>{lightboxImg.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
