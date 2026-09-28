import React from 'react';
import { Store, ShoppingBag, Gift, Building2, Calendar, ShieldCheck } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: <Store size={32} />,
      title: 'In-Store Boutique Shopping',
      description: 'Visit our spacious, immaculate store in Rajahmundry. Sample hot sweets and select from over 40+ fresh items daily.'
    },
    {
      icon: <ShoppingBag size={32} />,
      title: 'Daily Fresh Preparation',
      description: 'Every morning our master sweet craftsmen prepare fresh batches of Anand Kaja, Pootharekulu, and pure ghee Mysore Pak.'
    },
    {
      icon: <Gift size={32} />,
      title: 'Custom Wedding Gifting',
      description: 'Elevate your Telugu wedding celebrations with custom-embroidered sweet boxes, custom gift cards, and bulk arrangements.'
    },
    {
      icon: <Building2 size={32} />,
      title: 'Corporate Sweet Hampers',
      description: 'Premium corporate hampers for business clients, employee festive bonuses, and event celebration sweet distributions.'
    },
    {
      icon: <Calendar size={32} />,
      title: 'Festival Bulk Orders',
      description: 'Pre-book your bulk Ugadi, Sankranti, and Diwali sweet orders with guaranteed fresh delivery across Andhra & Telangana.'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Air-Tight Express Packing',
      description: 'Special vacuum seal packaging designed for long distance travel and international NRI shipping with extended shelf life.'
    }
  ];

  return (
    <section id="services" className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">What We Offer</span>
          <h2>Our Dedicated Services</h2>
          <p>From everyday sweet cravings to grand wedding celebrations, Anand Sweets makes every occasion memorable.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '26px'
        }}>
          {services.map((srv, i) => (
            <div
              key={i}
              style={{
                background: '#fffbeb',
                borderRadius: '20px',
                padding: '30px',
                border: '1px solid rgba(94, 15, 26, 0.08)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(63, 18, 18, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #5e0f1a, #3d0810)',
                color: '#d4a017',
                display: 'grid',
                placeItems: 'center',
                boxShadow: '0 6px 16px rgba(94, 15, 26, 0.2)'
              }}>
                {srv.icon}
              </div>
              <h3 style={{ fontSize: '20px', color: '#5e0f1a' }}>{srv.title}</h3>
              <p style={{ color: '#746565', fontSize: '14px', lineHeight: 1.7 }}>{srv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
