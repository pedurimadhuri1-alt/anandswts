import React, { useMemo } from 'react';
import { SWEETS_DATA } from '../data/sweetsData';
import ProductCard from '../components/ProductCard';
import PageHero from '../components/PageHero';

export default function SavouriesPage({ onAddToCart, onToggleWishlist, wishlistIds = [], onOpenQuickView }) {
  const savouries = useMemo(
    () => SWEETS_DATA.filter((sweet) => sweet.category === 'savouries' || ['chekkalu', 'savoury-mixture'].includes(sweet.id)),
    [],
  );

  const savouryShowcase = [
    { title: 'Sunnundalu', image: '/images/sunnudalu.jpg' },
    { title: 'Andhra Mixture', image: '/images/mixcture.jpg' },
    { title: 'Pappu Chekkalu', image: '/images/chekkalu.jpg' },
    { title: 'Classic Snack Box', image: '/images/mixc.jpeg' },
  ];

  return (
    <div className="page-shell">
      <PageHero
        image="/images/mixcture.jpg"
        imageAlt="Traditional Andhra savoury hero banner with sunnundalu and mixture"
        eyebrow="ANAND SWEETS • RAJAHMUNDRY"
        title="Our Savouries"
        subtitle="Sunnundalu • Mixture • Traditional"
      >
        <div style={{ display: 'flex', gap: '12px', marginTop: '18px', flexWrap: 'wrap' }}>
          <img
            src="/images/sunnudalu.jpg"
            alt="Sunnundalu"
            style={{ width: '110px', height: '90px', objectFit: 'cover', borderRadius: '12px', border: '2px solid rgba(255,255,255,0.7)', boxShadow: '0 12px 22px rgba(0,0,0,0.18)' }}
          />
          <img
            src="/images/mixcture.jpg"
            alt="Andhra mixture"
            style={{ width: '110px', height: '90px', objectFit: 'cover', borderRadius: '12px', border: '2px solid rgba(255,255,255,0.7)', boxShadow: '0 12px 22px rgba(0,0,0,0.18)' }}
          />
        </div>
      </PageHero>

      <section className="section-box light">
        <div className="container-wide">
          <div className="section-heading center">
            <span className="mini-label">Favourites</span>
            <h2>Our Savouries</h2>
            <div className="gold-divider"><span /><span className="divider-mark">✦</span><span /></div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '18px',
            marginBottom: '36px'
          }}>
            {savouryShowcase.map((item) => (
              <div key={item.title} style={{
                borderRadius: '18px',
                overflow: 'hidden',
                border: '1px solid rgba(90, 56, 37, 0.18)',
                background: '#FFFDF8',
                boxShadow: '0 10px 28px rgba(51, 45, 37, 0.08)'
              }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  loading="lazy"
                />
                <div style={{ padding: '14px 16px', textAlign: 'center', color: '#241F1A', fontWeight: 700 }}>
                  {item.title}
                </div>
              </div>
            ))}
          </div>

          <div className="catalog-grid">
            {savouries.map((sweet) => {
              return (
                <ProductCard
                  key={sweet.id}
                  sweet={sweet}
                  onAddToCart={onAddToCart}
                  onToggleWishlist={onToggleWishlist}
                  isWishlisted={wishlistIds.includes(sweet.id)}
                  onOpenQuickView={onOpenQuickView}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
