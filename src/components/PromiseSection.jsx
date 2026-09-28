import React from 'react';
import { Leaf, Droplet, Utensils, Heart } from 'lucide-react';

export default function PromiseSection() {
  const promises = [
    {
      icon: <Leaf size={28} />,
      title: 'Pure Ingredients',
      description: 'Carefully selected raw ingredients, organic jaggery, and unadulterated spices for natural authentic taste.'
    },
    {
      icon: <Droplet size={28} />,
      title: '100% Pure Ghee',
      description: 'Rich aroma and unforgettable melt-in-mouth richness in every single sweet piece.'
    },
    {
      icon: <Utensils size={28} />,
      title: 'Freshly Prepared Daily',
      description: 'Handcrafted fresh every single morning in our hygienic Rajahmundry sweet kitchen.'
    },
    {
      icon: <Heart size={28} />,
      title: 'Made With Love',
      description: 'Inspired by traditional Andhra heritage and grandmother recipes passed down generations.'
    }
  ];

  return (
    <section style={{ background: '#ffffff' }} className="section">
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">Our Guarantee</span>
          <h2>Made With Care & Pure Ghee</h2>
          <p>Every sweet from Anand Sweets carries the authentic taste of Andhra tradition, uncompromised quality, and pure happiness.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px'
        }}>
          {promises.map((item, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                padding: '36px 24px',
                borderRadius: '20px',
                background: '#fffbeb',
                border: '1px solid rgba(94, 15, 26, 0.06)',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 20px rgba(0,0,0,0.03)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(63, 18, 18, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.03)';
              }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                margin: '0 auto 20px',
                display: 'grid',
                placeItems: 'center',
                background: 'linear-gradient(135deg, #5e0f1a, #3d0810)',
                color: '#d4a017',
                boxShadow: '0 6px 16px rgba(94, 15, 26, 0.25)'
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '19px', color: '#5e0f1a', marginBottom: '10px' }}>
                {item.title}
              </h3>
              <p style={{ color: '#746565', fontSize: '13px', lineHeight: 1.7 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
