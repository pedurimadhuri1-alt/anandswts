import React from 'react';
import { Award, ShoppingBag, Gift, Utensils, Crown, Sparkles, ArrowRight } from 'lucide-react';
import { SWEETS_DATA } from '../data/sweetsData';
import { TeluguFamilyIllustration, KolamDivider, AnimatedDiya } from '../components/TeluguTraditionDecor';

export default function HomePage({ setActivePage, onAddToCart, onOpenQuickView }) {
  const popularSweets = SWEETS_DATA.slice(0, 3); // Pootharekulu, Anand Kaja, Ariselu

  return (
    <div className="animate-fade-in">
      {/* 1. Hero Section (Featuring New Festive Telugu Family Image) */}
      <section style={{
        minHeight: '78vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        padding: '60px 0'
      }}>
        {/* Background Image: Vibrant Festive Telugu Family Celebration */}
        <div style={{ position: 'absolute', inset: 0, zIndex: -2 }}>
          <img
            src="/images/festive_family.jpg"
            alt="Telugu Festive Sweet Celebration"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Soft Dark Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(38, 5, 9, 0.92) 0%, rgba(38, 5, 9, 0.78) 50%, rgba(38, 5, 9, 0.35) 100%)',
          zIndex: -1
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, color: '#ffffff' }}>
          <div style={{ maxWidth: '640px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#d4a017',
              background: 'rgba(212, 160, 23, 0.18)',
              border: '1px solid rgba(212, 160, 23, 0.5)',
              padding: '6px 16px',
              borderRadius: '50px',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              <AnimatedDiya size={24} />
              <span>Anand Sweets · Rajahmundry</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(36px, 5vw, 62px)',
              lineHeight: 1.1,
              color: '#ffffff',
              fontWeight: 800,
              marginBottom: '16px'
            }}>
              Sweetness Brings <br />
              <span style={{ color: '#d4a017' }}>People Together</span>
            </h1>

            <p className="telugu-font" style={{
              color: '#f1cf68',
              fontSize: '22px',
              marginBottom: '24px',
              lineHeight: 1.5,
              fontWeight: 'bold'
            }}>
              ప్రతి మంచి పర్వదినాన అందరి ఆత్మీయత తీపి
            </p>

            <p style={{ color: '#fff8e8', fontSize: '15px', lineHeight: 1.7, marginBottom: '28px' }}>
              Traditional Andhra flavours, pure desi ghee, and generations of sweet tradition — crafted with love in Rajahmundry for every family celebration.
            </p>

            <button
              onClick={() => {
                setActivePage('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn btn-gold"
              style={{ fontSize: '15px', padding: '14px 30px' }}
            >
              <ShoppingBag size={18} /> Explore Our Sweets
            </button>
          </div>
        </div>
      </section>

      {/* 2. 4 Feature Pills */}
      <section style={{ background: '#ffffff', padding: '30px 0', borderBottom: '1px solid rgba(94, 15, 26, 0.08)' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }}>
          {[
            { icon: <Crown size={22} />, title: 'Premium Quality', desc: 'Pure Desi Ghee & Dry Fruits' },
            { icon: <Award size={22} />, title: 'Traditional Recipes', desc: 'Handcrafted Heritage Sweets' },
            { icon: <Utensils size={22} />, title: 'Freshly Prepared', desc: 'Prepared Daily in Rajahmundry' },
            { icon: <Gift size={22} />, title: 'Gift Boxes & Hampers', desc: 'For Weddings & Festivals' }
          ].map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px 20px',
                borderRadius: '16px',
                background: '#fff8e8',
                border: '1px solid rgba(94, 15, 26, 0.08)'
              }}
            >
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: '#5e0f1a',
                color: '#d4a017',
                display: 'grid',
                placeItems: 'center',
                flexShrink: 0
              }}>
                {item.icon}
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '14px', color: '#5e0f1a' }}>{item.title}</div>
                <div style={{ fontSize: '11px', color: '#746565' }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. "Taste the True Essence of Andhra" Section with Real Family Sweet Feeding Photo */}
      <section className="section" style={{ background: '#fff5df' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          <div>
            <span className="section-subtitle">Authentic Sweets & Savouries</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', color: '#5e0f1a', margin: '10px 0 16px' }}>
              Taste the True Essence <br /> of Andhra
            </h2>

            <p className="telugu-font" style={{
              color: '#5e0f1a',
              fontSize: '20px',
              lineHeight: 1.6,
              marginBottom: '16px',
              fontWeight: 'bold',
              borderLeft: '4px solid #d4a017',
              paddingLeft: '14px'
            }}>
              రాజమండ్రి మట్టిలో పుట్టిన రుచులు... ప్రతి తీపి జ్ఞాపకంగా మారేలా.
            </p>

            <p style={{ color: '#746565', fontSize: '14px', lineHeight: 1.8, marginBottom: '24px' }}>
              From our trademark <strong>Signature Anand Kaja</strong> to melt-in-mouth Pootharekulu, Anand Sweets brings the traditional sweet making heritage of Rajahmundry straight to your family festivities.
            </p>

            <button
              onClick={() => {
                setActivePage('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn btn-gold"
            >
              <span>View Full Menu</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Real Family Feeding Sweets Photo & Vector Graphic */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <img
              src="/images/family_eating_sweets.jpg"
              alt="Indian Family Sharing Sweets"
              style={{
                width: '100%',
                maxHeight: '320px',
                objectFit: 'cover',
                borderRadius: '24px',
                border: '3px solid #d4a017',
                boxShadow: '0 15px 35px rgba(63, 18, 18, 0.15)'
              }}
            />
            <TeluguFamilyIllustration />
          </div>
        </div>
      </section>

      {/* Kolam Divider */}
      <div className="container">
        <KolamDivider />
      </div>

      {/* 4. "Popular Sweets" Section */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-title">
            <span className="section-subtitle">Our Specialities</span>
            <h2>Popular Sweets</h2>
            <p>Traditional favourites loved by pillalu, peddalu and every sweet lover.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {popularSweets.map((sweet) => (
              <div
                key={sweet.id}
                className="traditional-card"
                style={{
                  background: '#fff8e8',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img src={sweet.image} alt={sweet.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <h3 style={{ fontSize: '18px', color: '#5e0f1a', margin: 0 }}>{sweet.name}</h3>
                      <span className="telugu-font" style={{ color: '#d4a017', fontSize: '16px', fontWeight: 'bold' }}>{sweet.teluguName}</span>
                    </div>
                    <p style={{ color: '#746565', fontSize: '13px', lineHeight: 1.6, marginBottom: '16px' }}>{sweet.description}</p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', borderTop: '1px solid rgba(94, 15, 26, 0.08)' }}>
                    <span style={{ background: '#d4a017', color: '#3d0810', padding: '6px 14px', borderRadius: '50px', fontWeight: 800, fontSize: '13px' }}>
                      ₹{sweet.pricePerKg} / kg
                    </span>
                    <button
                      onClick={() => onAddToCart(sweet, sweet.availableWeights[sweet.availableWeights.length - 1])}
                      className="btn btn-maroon"
                      style={{ padding: '8px 16px', fontSize: '12px' }}
                    >
                      <ShoppingBag size={14} /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Dark Maroon Telugu Banner */}
      <section className="container">
        <div className="telugu-maroon-banner" style={{ textAlign: 'center' }}>
          <AnimatedDiya size={36} />
          <h2 className="telugu-font" style={{ fontSize: 'clamp(26px, 4vw, 44px)', color: '#d4a017', margin: '10px 0' }}>
            ప్రతి ముద్దలో సంతృప్తి • ప్రతి వేడుకలో ఆనందం
          </h2>
          <p style={{ color: '#fff4dc', fontSize: '15px' }}>
            A little sweetness from Anand Sweets Rajahmundry makes every celebration unforgettable.
          </p>
        </div>
      </section>
    </div>
  );
}
