import React from 'react';
import { Store, ShoppingBag, Gift, Building2, Calendar, ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

export default function ServicesPage({ setActivePage }) {
  const services = [
    {
      icon: <Store size={28} />,
      title: 'In-Store Shopping',
      desc: 'Visit our flagship store in Rajahmundry to taste and select fresh sweet collections.',
      image: '/images/sweet_kitchen.jpg'
    },
    {
      icon: <Gift size={28} />,
      title: 'Custom Sweet Boxes',
      desc: 'Beautifully wrapped royal sweet boxes customized for weddings, birthdays, and events.',
      image: '/images/wooden_gift_box.jpg'
    },
    {
      icon: <Calendar size={28} />,
      title: 'Festival Hampers',
      desc: 'Exclusive traditional sweet baskets prepared for Ugadi, Diwali, and Sankranti.',
      image: '/images/gift_baskets.jpg'
    },
    {
      icon: <ShoppingBag size={28} />,
      title: 'Traditional Savouries',
      desc: 'Authentic crunchy Chekkalu, Janthikalu, and Mixture cooked with traditional spices.',
      image: '/images/ariselu.png'
    },
    {
      icon: <Award size={28} />,
      title: 'Freshly Prepared Daily',
      desc: 'Handcrafted fresh every morning using 100% pure desi ghee and organic ingredients.',
      image: '/images/sweet_kitchen.jpg'
    },
    {
      icon: <Heart size={28} />,
      title: 'Personalized Assistance',
      desc: 'Dedicated customer support for bulk orders, NRI gift deliveries, and custom packaging.',
      image: '/images/family_eating_sweets.jpg'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* 1. Services Header Banner */}
      <section style={{
        background: 'linear-gradient(90deg, rgba(61, 8, 16, 0.92), rgba(94, 15, 26, 0.78)), url("/images/sweet_kitchen.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffffff',
        padding: '70px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="section-subtitle" style={{ color: '#d4a017' }}>What We Offer</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', color: '#ffffff', marginBottom: '8px' }}>
            Our Services
          </h1>
          <p style={{ color: '#fff8e8', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
            Taste These Sweet Sweets · True Customer Happiness · Serving Rajahmundry & Beyond
          </p>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="section" style={{ background: '#fbf5e8' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {services.map((srv, i) => (
              <div
                key={i}
                className="traditional-card"
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '180px', overflow: 'hidden' }}>
                  <img src={srv.image} alt={srv.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '22px', flex: 1 }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: '#5e0f1a',
                    color: '#d4a017',
                    display: 'grid',
                    placeItems: 'center',
                    marginBottom: '14px'
                  }}>
                    {srv.icon}
                  </div>
                  <h3 style={{ fontSize: '18px', color: '#5e0f1a', marginBottom: '8px' }}>{srv.title}</h3>
                  <p style={{ color: '#746565', fontSize: '13px', lineHeight: 1.6 }}>{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Grandmother Tradition Banner */}
      <section style={{ background: '#5e0f1a', color: '#ffffff', padding: '60px 0' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          <div>
            <span style={{ color: '#d4a017', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px' }}>
              Tradition In Every Bite
            </span>
            <h2 className="telugu-font" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: '#d4a017', margin: '12px 0 16px', lineHeight: 1.3 }}>
              మన ఇంటి పిండి... <br /> మనస్ఫూర్తిగా కలిపే రుచి
            </h2>
            <p style={{ color: '#fff8e8', fontSize: '15px', lineHeight: 1.8 }}>
              Inspired by age-old family recipes handed down through generations. Prepared using authentic pure ghee, organic jaggery, and uncompromised care.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <img
              src="/images/family_eating_sweets.jpg"
              alt="Grandmother Traditional Sweet Recipe"
              style={{
                width: '100%',
                maxHeight: '320px',
                objectFit: 'cover',
                borderRadius: '20px',
                border: '2px solid #d4a017',
                boxShadow: '0 15px 35px rgba(0,0,0,0.3)'
              }}
            />
          </div>
        </div>
      </section>

      {/* 4. Why Choose Anand Sweets? */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-title">
            <span className="section-subtitle">Why Anand Sweets</span>
            <h2>Why Choose Us?</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px'
          }}>
            {[
              { title: 'Authentic Recipes', desc: 'Preserving true Andhra taste.' },
              { title: 'Pure Desi Ghee', desc: 'Melt-in-mouth golden ghee sweetness.' },
              { title: 'Fresh Daily', desc: 'Prepared fresh every single morning.' },
              { title: 'Royal Packaging', desc: 'Elegant hampers for celebrations.' }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#fff8e8',
                  padding: '24px',
                  borderRadius: '16px',
                  border: '1px solid rgba(94, 15, 26, 0.08)',
                  textAlign: 'center'
                }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#5e0f1a', color: '#d4a017', display: 'grid', placeItems: 'center', margin: '0 auto 12px' }}>
                  <Sparkles size={20} />
                </div>
                <h4 style={{ color: '#5e0f1a', fontSize: '16px', marginBottom: '6px' }}>{item.title}</h4>
                <p style={{ color: '#746565', fontSize: '12px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Maroon Banner */}
      <section className="container" style={{ marginBottom: '40px' }}>
        <div className="telugu-maroon-banner" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '26px', color: '#d4a017', marginBottom: '12px' }}>
            Let's Make Your Celebrations Sweeter
          </h2>
          <button
            onClick={() => {
              setActivePage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn btn-gold"
          >
            Contact Store Now
          </button>
        </div>
      </section>
    </div>
  );
}
