import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { GALLERY_DATA } from '../data/sweetsData';

export default function GallerySection() {
  const [filter, setFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredGallery = filter === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === filter);

  return (
    <section id="gallery" className="section" style={{ background: '#fff7df' }}>
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">Sweet Memories</span>
          <h2>Our Photo Gallery</h2>
          <p>Moments, festive celebrations, and memories made sweeter with Anand Sweets Rajahmundry.</p>
        </div>

        {/* Gallery Filter Buttons */}
        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '35px'
        }}>
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'store', label: 'Store Heritage' },
            { id: 'festival', label: 'Festivals' },
            { id: 'wedding', label: 'Weddings' },
            { id: 'family', label: 'Family & Godavari' }
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              style={{
                padding: '9px 20px',
                borderRadius: '50px',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                border: filter === btn.id ? 'none' : '1px solid rgba(94, 15, 26, 0.15)',
                background: filter === btn.id ? '#5e0f1a' : '#ffffff',
                color: filter === btn.id ? '#d4a017' : '#2d2020',
                transition: 'all 0.25s ease'
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              style={{
                height: '240px',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(0,0,0,0.08)'
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease'
                }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.08)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(61, 8, 16, 0.85), transparent)',
                opacity: 0.9,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '18px',
                color: '#ffffff'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 700, fontSize: '15px', color: '#f1cf68' }}>{item.title}</span>
                  <ZoomIn size={18} style={{ color: '#d4a017' }} />
                </div>
                <small style={{ color: '#ddd', fontSize: '11px', marginTop: '2px' }}>{item.caption}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(8px)',
          display: 'grid',
          placeItems: 'center',
          padding: '20px'
        }} onClick={() => setLightboxImage(null)}>
          <div style={{
            maxWidth: '800px',
            width: '100%',
            background: '#3d0810',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '2px solid #d4a017',
            position: 'relative'
          }} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxImage(null)}
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                background: '#d4a017',
                color: '#3d0810',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                cursor: 'pointer',
                display: 'grid',
                placeItems: 'center',
                zIndex: 10
              }}
            >
              <X size={20} />
            </button>
            <img src={lightboxImage.image} alt={lightboxImage.title} style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }} />
            <div style={{ padding: '20px', color: '#ffffff', textAlign: 'center' }}>
              <h3 style={{ color: '#d4a017', fontSize: '20px', marginBottom: '4px' }}>{lightboxImage.title}</h3>
              <p style={{ color: '#fff8e8', fontSize: '14px' }}>{lightboxImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
