import React from 'react';
import {
  Award,
  Calendar,
  Gift,
  Heart,
  ShoppingBag,
  Sparkles,
  Store,
} from 'lucide-react';
import PageHero from '../components/PageHero';

export default function ServicesPage({ setActivePage }) {
  const services = [
    {
      icon: <Store size={22} />,
      title: 'In-Store Shopping',
      desc: 'Visit our Rajahmundry store to explore fresh sweet collections.',
      image: '/images/sweet_kitchen.jpg',
    },
    {
      icon: <Gift size={22} />,
      title: 'Custom Sweet Boxes',
      desc: 'Personalized sweet boxes for weddings, birthdays, and special occasions.',
      image: '/images/custom_gift_box.png',
    },
    {
      icon: <Calendar size={22} />,
      title: 'Festival Hampers',
      desc: 'Traditional hampers prepared for Ugadi, Diwali, Sankranti, and celebrations.',
      image: '/images/gift_baskets.jpg',
    },
    {
      icon: <ShoppingBag size={22} />,
      title: 'Traditional Savouries',
      desc: 'Authentic crunchy Chekkalu, Janthikalu, and Mixture for every table.',
      image: '/images/chekkalu.jpg',
    },
    {
      icon: <Award size={22} />,
      title: 'Freshly Prepared Daily',
      desc: 'Handcrafted with quality ingredients and traditional methods.',
      image: '/images/mysure.jpg',
    },
    {
      icon: <Heart size={22} />,
      title: 'Personalized Assistance',
      desc: 'Friendly support for bulk orders, gifts, celebrations, and packaging.',
      image: '/images/family_eating_sweets.jpg',
    },
  ];

  const promises = [
    { title: 'Authentic Recipes', desc: 'Preserving the true taste of Andhra.' },
    { title: 'Pure Desi Ghee', desc: 'Rich, aromatic, and melt-in-mouth goodness.' },
    { title: 'Fresh Every Day', desc: 'Prepared fresh for every customer.' },
    { title: 'Thoughtful Gifting', desc: 'Elegant presentation for every celebration.' },
  ];

  const goToContact = () => {
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="animate-fade-in">
      <PageHero
        image="/images/gift_baskets.jpg"
        imageAlt="A traditional Anand Sweets celebration gift hamper"
        eyebrow="ANAND SWEETS • RAJAHMUNDRY"
        title="Our Services"
        subtitle="Sweet Moments Made Special"
        actionLabel="Plan a Celebration"
        onAction={goToContact}
      />

      <section className="section-box light">
        <div className="container-slim section-heading center">
          <span className="mini-label">The Anand Experience</span>
          <h2>More Than Just Sweets</h2>
          <p>From freshly made favourites to thoughtful gift boxes, we bring Rajahmundry tradition to every celebration.</p>
          <div className="gold-divider"><span /><span className="divider-mark">✦</span><span /></div>
        </div>

        <div className="container service-card-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-card-image">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
              <div className="service-card-copy">
                <span className="service-card-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-tradition">
        <div className="container services-tradition-inner">
          <div className="services-tradition-copy">
            <span className="mini-label">Tradition in Every Bite</span>
            <h2 className="telugu-font">మన ఇంటి పిండి...<br />మనస్ఫూర్తిగా కలిపే రుచి</h2>
            <p>Inspired by family recipes handed down through generations, each box brings the warmth of Andhra celebrations to your home.</p>
          </div>
          <img src="/images/family_eating_sweets.jpg" alt="Family enjoying traditional sweets" loading="lazy" />
        </div>
      </section>

      <section className="section-box light">
        <div className="container">
          <div className="section-title">
            <span className="section-subtitle">Why Anand Sweets</span>
            <h2>Why Choose Us?</h2>
            <p>Four promises we keep in every single box.</p>
          </div>
          <div className="value-grid services-promise-grid">
            {promises.map((item) => (
              <article className="value-card" key={item.title}>
                <div className="value-icon"><Sparkles size={20} /></div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <span className="section-subtitle">Let&apos;s Celebrate Together</span>
          <h2>Let&apos;s Make Your Celebrations Sweeter</h2>
          <p>Visit Anand Sweets Rajahmundry and bring home something special for your loved ones.</p>
          <button className="gold-button" type="button" onClick={goToContact}>Contact Store Now</button>
        </div>
      </section>
    </div>
  );
}
