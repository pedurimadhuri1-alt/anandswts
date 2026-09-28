import React, { useState } from 'react';
import { ShoppingBag, Eye, Heart, Sparkles, Filter } from 'lucide-react';
import { SWEETS_DATA } from '../data/sweetsData';

export default function MenuPage({ onAddToCart, onToggleWishlist, wishlistIds, onOpenQuickView }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'traditional', label: 'Traditional Sweets' },
    { id: 'savouries', label: 'Savouries' },
    { id: 'special', label: 'Specials' },
    { id: 'gifting', label: 'Gift Packs' }
  ];

  const filteredItems = activeCategory === 'all'
    ? SWEETS_DATA
    : SWEETS_DATA.filter(item => item.category === activeCategory);

  return (
    <div className="animate-fade-in">
      {/* 1. Header Banner (Matching Page 2 Banner in Image 0) */}
      <section style={{
        background: 'linear-gradient(90deg, rgba(61, 8, 16, 0.9), rgba(94, 15, 26, 0.75)), url("/images/pootharekulu.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffffff',
        padding: '70px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="section-subtitle" style={{ color: '#d4a017' }}>Authentic Andhra Delicacies</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', color: '#ffffff', marginBottom: '8px' }}>
            Our Sweets
          </h1>
          <p style={{ color: '#fff8e8', fontSize: '16px', maxWdith: '600px', margin: '0 auto' }}>
            Traditional Taste • Timeless Happiness • Prepared Daily in Rajahmundry
          </p>
        </div>
      </section>

      {/* 2. Category Filter Pills */}
      <section className="section" style={{ background: '#fbf5e8' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '40px'
          }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  border: activeCategory === cat.id ? 'none' : '1px solid rgba(94, 15, 26, 0.15)',
                  background: activeCategory === cat.id ? '#5e0f1a' : '#ffffff',
                  color: activeCategory === cat.id ? '#d4a017' : '#2d2020',
                  boxShadow: activeCategory === cat.id ? '0 6px 16px rgba(94, 15, 26, 0.2)' : 'none'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sweets Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {filteredItems.map((sweet) => {
              const isWishlisted = wishlistIds.includes(sweet.id);
              return (
                <div
                  key={sweet.id}
                  style={{
                    background: '#ffffff',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid rgba(94, 15, 26, 0.08)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-6px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <div style={{ height: '230px', position: 'relative', overflow: 'hidden' }}>
                    <img src={sweet.image} alt={sweet.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                    <button
                      onClick={() => onToggleWishlist(sweet.id)}
                      aria-label="Wishlist"
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.9)',
                        border: 'none',
                        color: isWishlisted ? '#c0392b' : '#746565',
                        display: 'grid',
                        placeItems: 'center',
                        cursor: 'pointer'
                      }}
                    >
                      <Heart size={16} fill={isWishlisted ? '#c0392b' : 'none'} />
                    </button>
                  </div>

                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <h3 style={{ fontSize: '18px', color: '#5e0f1a', margin: 0 }}>{sweet.name}</h3>
                      <span className="telugu-font" style={{ color: '#d4a017', fontSize: '16px', fontWeight: 'bold' }}>{sweet.teluguName}</span>
                    </div>

                    <p style={{ color: '#746565', fontSize: '13px', lineHeight: 1.6, marginBottom: '18px', flex: 1 }}>
                      {sweet.description}
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid rgba(94, 15, 26, 0.08)' }}>
                      <div>
                        <div style={{ fontSize: '20px', fontWeight: 800, color: '#5e0f1a' }}>₹{sweet.pricePerKg}</div>
                        <div style={{ fontSize: '11px', color: '#746565' }}>per Kg</div>
                      </div>

                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                          onClick={() => onOpenQuickView(sweet)}
                          style={{
                            padding: '8px 12px',
                            borderRadius: '50px',
                            background: '#fff7df',
                            color: '#5e0f1a',
                            border: '1px solid rgba(94, 15, 26, 0.15)',
                            fontSize: '12px',
                            fontWeight: 700,
                            cursor: 'pointer'
                          }}
                        >
                          <Eye size={14} /> View
                        </button>
                        <button
                          onClick={() => onAddToCart(sweet, sweet.availableWeights[sweet.availableWeights.length - 1])}
                          className="btn btn-gold"
                          style={{ padding: '8px 16px', fontSize: '12px' }}
                        >
                          <ShoppingBag size={14} /> Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="container" style={{ marginBottom: '40px' }}>
        <div className="telugu-maroon-banner" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', color: '#d4a017', marginBottom: '8px' }}>
            Made with Love Using Traditional Recipes
          </h2>
          <p style={{ color: '#fff8e8', fontSize: '14px' }}>
            100% Pure Desi Ghee · Zero Preservatives · Handcrafted Daily in Rajahmundry
          </p>
        </div>
      </section>
    </div>
  );
}
