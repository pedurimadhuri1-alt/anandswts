import React from 'react';
import { ArrowRight, Award, Heart, Leaf, Sparkles } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function AboutPage({ setActivePage }) {
  const values = [
    { icon: Award, title: 'Traditional Recipes', text: 'Authentic Andhra flavours shaped by generations of family craft.' },
    { icon: Leaf, title: 'Pure Ingredients', text: 'Carefully selected ingredients, desi ghee, jaggery, and fresh spices.' },
    { icon: Heart, title: 'Family Celebrations', text: 'Every sweet made to bring people together in joy and togetherness.' },
  ];

  const storyBlocks = [
    { title: 'Our Story', text: 'Anand Sweets – Rajahmundry began with a simple promise: to create sweets that feel like home. From humble beginnings to a trusted local favourite, our journey has always been rooted in traditional methods and warm hospitality.' },
    { title: 'Our Tradition', text: 'We carry forward the rich customs of Andhra cuisine with time-honoured recipes, natural ingredients, and the comforting taste of festive family gatherings.' },
    { title: 'Our Sweet Making', text: 'Every batch is prepared fresh with care, from delicate pootharekulu to rich sunnundalu and crispy savouries made for daily joy and special occasions alike.' },
  ];

  return (
    <div className="page-shell">
      <PageHero
        image="/images/family_eating_sweets.jpg"
        imageAlt="A family sharing traditional sweets"
        eyebrow="ANAND SWEETS • RAJAHMUNDRY"
        title="About Anand Sweets"
        subtitle="Tradition, Taste & Togetherness"
        actionLabel="Explore Our Sweets"
        onAction={() => setActivePage('menu')}
      />

      <section className="section-box light">
        <div className="container-slim">
          <div className="section-heading center">
            <span className="mini-label">Our Story</span>
            <h2>Sweetness rooted in tradition</h2>
            <div className="gold-divider"><span /><span className="divider-mark">✦</span><span /></div>
          </div>

          <div className="story-grid two-column">
            <div className="story-card">
              <img src="/images/sweet_kitchen.jpg" alt="Sweet kitchen" />
            </div>
            <div className="story-card copy-card">
              <p>
                Nestled in Rajahmundry, Anand Sweets has become a trusted name for authentic Telugu sweets and savouries. Our kitchen blends old-world recipes with fresh preparation so every bite tastes like celebration.
              </p>
              <p>
                From festive gatherings to everyday family moments, we prepare sweets that bring warmth, joy, and the familiar taste of home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-box accent">
        <div className="container-slim">
          <div className="value-grid">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="value-card">
                <div className="value-icon"><Icon size={22} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-box">
        <div className="container-slim">
          <div className="story-grid three-column">
            {storyBlocks.map((block) => (
              <article key={block.title} className="info-panel">
                <h3>{block.title}</h3>
                <p>{block.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-box light">
        <div className="container-slim">
          <div className="story-grid two-column reverse">
            <div className="story-card copy-card">
              <span className="mini-label">Family & Celebrations</span>
              <h3>Made for joyful gatherings</h3>
              <p>
                Whether it is a wedding, festival, gifting occasion, or simple family evening, our sweets and savouries are crafted to make every celebration feel complete.
              </p>
              <button type="button" className="ghost-button" onClick={() => setActivePage('contact')}>
                Visit Our Store <ArrowRight size={16} />
              </button>
            </div>
            <div className="story-card">
              <img src="/images/festival_family.png" alt="Festival celebration" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-box banner-band">
        <div className="container-slim banner-band-inner">
          <Sparkles size={32} />
          <p className="telugu-font">రుచిలో సంప్రదాయం • ప్రతి ముక్కలో ఆనందం</p>
          <Sparkles size={32} />
        </div>
      </section>
    </div>
  );
}
