import React from 'react';
import { Heart } from 'lucide-react';
import { SWEETS_DATA } from '../data/sweetsData';
import PageHero from '../components/PageHero';

const sweetGalleryItems = [
  { name: 'Kaja Selection', teluguName: 'కాజా మిఠాయిలు', image: '/images/kaja.jpeg' },
  { name: 'Pootharekulu', teluguName: 'పూతరేకులు', image: '/images/pootharekulu.png' },
  { name: 'Sunnundalu', teluguName: 'సున్నుండలు', image: '/images/sunnudalu.jpg' },
  { name: 'Ariselu', teluguName: 'అరిసెలు', image: '/images/ariselu.png' },
  { name: 'Mysore Pak', teluguName: 'మైసూర్ పాక్', image: '/images/mysure.jpg' },
  { name: 'Boondi Laddu', teluguName: 'బూంది లడ్డూ', image: '/images/info.jpeg' },
  { name: 'Sweet Assortment', teluguName: 'సంప్రదాయ మిఠాయిలు', image: '/images/all sweets.jpeg' },
  { name: 'Traditional Sweets', teluguName: 'సాంప్రదాయ స్వీట్లు', image: '/images/sweets.jpeg' },
];

export default function MenuPage({
  onToggleWishlist,
  wishlistIds,
  onOpenQuickView
}) {
  return (
    <div className="page">

      <PageHero
        image="/images/pootharekulu.png"
        imageAlt="Traditional Andhra pootharekulu sweets"
        eyebrow="ANAND SWEETS • RAJAHMUNDRY"
        title="Our Sweets"
        subtitle="Traditional Taste • Premium Quality"
      />

      <section className="menu-sweet-gallery-section">
        <div className="container">
          <div className="section-title">
            <span className="section-subtitle">A Taste of Tradition</span>
            <h2>Our Sweet Collection</h2>
          </div>

          <div className="gallery-grid menu-sweet-gallery">
            {sweetGalleryItems.map((item) => (
              <figure className="gallery-card" key={item.name}>
                <div className="gallery-card-image">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <span>{item.name}</span>
                  <span className="telugu-font">{item.teluguName}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section
        className="section"
        style={{
          background: '#FFFDF8'
        }}
      >
        <div className="container">

          {/* Heading */}
          <div className="section-title">
            <span className="section-subtitle">
              Taste The Tradition
            </span>

            <h2>
              Traditional Sweets & Savouries
            </h2>

            <p>
              Discover handcrafted favourites made fresh for every
              celebration and everyday happiness.
            </p>
          </div>

          {/* Products */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fill, minmax(270px, 1fr))',
              gap: '28px'
            }}
          >
            {SWEETS_DATA.filter((sweet) => sweet.category !== 'savouries').map((sweet) => {
              const isWishlisted =
                wishlistIds.includes(sweet.id);

              return (
                <div
                  className="product-card menu-product-card"
                  key={sweet.id}
                  style={{
                    background: '#ffffff',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    border:
                      '1px solid #D7C9A5',
                    boxShadow:
                      '0 10px 30px rgba(70,30,25,0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition:
                      'transform .3s ease, box-shadow .3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      'translateY(-6px)';
                    e.currentTarget.style.boxShadow =
                      '0 18px 40px rgba(70,30,25,0.14)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      'translateY(0)';
                    e.currentTarget.style.boxShadow =
                      '0 10px 30px rgba(70,30,25,0.08)';
                  }}
                >

                  {/* Image */}
                  <div
                    className="product-image-wrap"
                    style={{
                      position: 'relative',
                      height: '250px',
                      overflow: 'hidden'
                    }}
                  >
                    <img
                      src={sweet.image}
                      alt={sweet.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        background: '#F5F0E2'
                      }}
                    />

                    {/* Bestseller */}
                    {sweet.isBestseller && (
                      <span
                        style={{
                          position: 'absolute',
                          top: '14px',
                          left: '14px',
                          background: '#B49A54',
                          color: '#ffffff',
                          padding: '7px 12px',
                          borderRadius: '30px',
                          fontSize: '11px',
                          fontWeight: 700
                        }}
                      >
                        Bestseller
                      </span>
                    )}

                    {/* Wishlist */}
                    <button
                      onClick={() =>
                        onToggleWishlist(sweet.id)
                      }
                      aria-label="Wishlist"
                      style={{
                        position: 'absolute',
                        top: '14px',
                        right: '14px',
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        border: 'none',
                        background:
                          'rgba(255,255,255,0.94)',
                        display: 'grid',
                        placeItems: 'center',
                        cursor: 'pointer',
                        color: isWishlisted
                          ? '#9C8240'
                          : '#6B6255'
                      }}
                    >
                      <Heart
                        size={18}
                        fill={
                          isWishlisted
                            ? '#9C8240'
                            : 'none'
                        }
                      />
                    </button>

                    {/* Quick View */}
                    <button
                      onClick={() =>
                        onOpenQuickView(sweet)
                      }
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        right: '12px',
                        border: 'none',
                        borderRadius: '30px',
                        padding: '7px 13px',
                        background:
                          'rgba(156,130,64,0.96)',
                        color: '#ffffff',
                        fontSize: '12px',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      Quick View
                    </button>
                  </div>

                  {/* Content */}
                  <div
                    className="product-body"
                    style={{
                      padding: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      flex: 1
                    }}
                  >
                    <h3
                      style={{
                        margin: '0 0 5px',
                        color: '#241F1A',
                        fontSize: '19px',
                        fontWeight: 700
                      }}
                    >
                      {sweet.name}
                    </h3>

                    <div
                      className="telugu-font"
                      style={{
                        color: '#9C8240',
                        fontWeight: 600,
                        marginBottom: '8px'
                      }}
                    >
                      {sweet.teluguName}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}