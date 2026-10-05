import React from "react";
import {
  Award,
  Leaf,
  ShieldCheck,
  ArrowRight,
  Heart,
  MapPin,
  Phone,
} from "lucide-react";

import { STORE_INFO, SWEETS_DATA } from "../data/sweetsData";
import ProductCard from "../components/ProductCard";
import PageHero from "../components/PageHero";

export default function HomePage({
  setActivePage,
  onAddToCart,
  onToggleWishlist,
  wishlistIds = [],
  onOpenQuickView,

}) {
  const popularSweets = SWEETS_DATA.slice(0, 3);
  const videos = [
    { id: 'ravva-laddu', title: 'Ravva Laddu', src: '/images/ravvaladdu.mp4', poster: '/images/ariselu.png' },
    { id: 'gulab-jamun', title: 'Gulab Jamun', src: '/images/gulabjamv.mp4', poster: '/images/mysure.jpg' },
    { id: 'tradition', title: 'Anand Sweets Tradition', src: '/images/tradition.mp4', poster: '/images/festival_family.png' },
  ];
  const pageLinks = [
    { id: 'about', title: 'Our Story', subtitle: 'About Anand Sweets', image: '/images/family_eating_sweets.jpg' },
    { id: 'menu', title: 'Traditional Sweets', subtitle: 'Browse Our Sweets', image: '/images/sweets.jpeg' },
    { id: 'savouries', title: 'Andhra Savouries', subtitle: 'Crispy Tea-Time Favourites', image: '/images/Tea_Time_Snacks_2.webp' },
    { id: 'services', title: 'Gifting & Services', subtitle: 'Boxes for Every Occasion', image: '/images/gift_baskets.jpg' },
    { id: 'gallery', title: 'Celebrations', subtitle: 'Explore Our Gallery', image: '/images/festival_family.png' },
    { id: 'contact', title: 'Visit Anand Sweets', subtitle: 'Contact & Store Details', image: '/images/home.png' },
  ];

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      text: "Finest ingredients",
    },
    {
      icon: Leaf,
      title: "Traditional Recipes",
      text: "Authentic Andhra taste",
    },
    {
      icon: ShieldCheck,
      title: "Freshly Prepared",
      text: "Made with care every day",
    },
    {
      icon: Heart,
      title: "Gift Boxes & Hampers",
      text: "For every celebration",
    },
  ];

  return (
    <main className="anand-home">

      {/* =====================================================
          HERO
      ===================================================== */}
      <PageHero
        variant="home"
        image="/images/hero_sweets.png"
        imageAlt="A full arrangement of traditional Anand Sweets"
        eyebrow="ANAND SWEETS • RAJAHMUNDRY"
        title={<>Welcome to<br />Anand Sweets</>}
        subtitle="Traditional Andhra Sweets & Savouries"
        actionLabel="Explore Our Sweets"
        onAction={() => setActivePage('menu')}
      >
        <div className="home-hero-contact">
          <a
            className="home-hero-contact-link"
            href={STORE_INFO.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            <MapPin size={18} />
            <span>
              <strong>Visit Our Store</strong>
              <small>{STORE_INFO.shortAddress}</small>
            </span>
          </a>
          <a className="home-hero-contact-link" href={`tel:${STORE_INFO.phone}`}>
            <Phone size={18} />
            <span>
              <strong>Call Anand Sweets</strong>
              <small>{STORE_INFO.phone}</small>
            </span>
          </a>
        </div>
      </PageHero>


      {/* =====================================================
          FEATURE STRIP
      ===================================================== */}
      <section className="anand-feature-strip">
        <div className="anand-home-container anand-feature-grid">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div className="anand-feature" key={feature.title}>
                <div className="anand-feature-icon">
                  <Icon size={27} strokeWidth={1.5} />
                </div>

                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </div>
            );
          })}

        </div>
      </section>


      {/* =====================================================
          EXCELLENCE SECTION
      ===================================================== */}
      <section className="anand-excellence">
        <div className="anand-home-container">

          <div className="anand-centered-heading">
            <span className="anand-gold-label">
              ANAND SWEETS
            </span>

            <h2>Taste the True Essence of Andhra</h2>

            <div className="anand-heading-line">
              <span />
              <b>✦</b>
              <span />
            </div>

            <p>
              Rooted in Rajahmundry, our sweets carry the warmth of Andhra
              kitchens, family gatherings, and festive traditions.
            </p>
          </div>


          <div className="anand-wide-image">
            <img
              src="/images/godavari_bridge.png"
              alt="Godavari River and Rajahmundry heritage"
            />

            <div className="anand-image-caption">
              <span>Andhra Heritage</span>
              <strong>From Rajahmundry</strong>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          POPULAR SWEETS
      ===================================================== */}
      <section className="anand-popular">
        <div className="anand-home-container">

          <div className="anand-centered-heading">
            <span className="anand-gold-label">
              FROM OUR KITCHEN
            </span>

            <h2>Our Special Sweets</h2>

            <div className="anand-heading-line">
              <span />
              <b>✦</b>
              <span />
            </div>

            <p>
              A selection of traditional favourites prepared for
              every beautiful occasion.
            </p>
          </div>


          <div className="anand-sweets-grid">

            {popularSweets.map((sweet) => (
              <ProductCard
                key={sweet.id}
                sweet={sweet}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlistIds.includes(sweet.id)}
                onOpenQuickView={onOpenQuickView}
              />
            ))}

          </div>


          <div className="anand-view-all">
            <button
              className="anand-outline-button"
              onClick={() => setActivePage("menu")}
            >
              View All Sweets
              <ArrowRight size={17} />
            </button>
          </div>

        </div>
      </section>


      <section className="anand-story">
        <div className="anand-home-container anand-story-grid">
          <div className="anand-story-image">
            <img
              src="/images/grandparents_family_sweets.jpg"
              alt="Grandparents sharing sweets with their family"
            />
          </div>

          <div className="anand-story-content">
            <span className="anand-gold-label">FAMILY & CELEBRATIONS</span>
            <h2>
              Made for joyful
              <br />
              <span>gatherings</span>
            </h2>

            <div className="anand-heading-line anand-heading-line-left">
              <span />
              <b>✦</b>
              <span />
            </div>

            <p>
              From festive tables to everyday family moments, our traditional
              sweets bring people together with the familiar taste of home.
            </p>

            <button
              className="anand-outline-button"
              onClick={() => setActivePage('about')}
            >
              Our Story
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>


      {/* =====================================================
          TRADITION BANNER
      ===================================================== */}
      <section className="anand-tradition-banner">

        <div className="anand-banner-pattern" />

        <div className="anand-home-container anand-banner-content">

          <span className="anand-banner-symbol">
            ✦
          </span>

          <div>
            <p className="telugu-font">
              రుచిలో సంప్రదాయం • ప్రతి ముక్కలో ఆనందం
            </p>

            <span>
              Traditional Taste. Pure Happiness.
            </span>
          </div>

          <span className="anand-banner-symbol">
            ✦
          </span>

        </div>

      </section>


      <section className="anand-video-section">
        <div className="anand-home-container">
          <div className="anand-centered-heading">
            <span className="anand-gold-label">FROM OUR KITCHEN</span>
            <h2>Watch the Tradition</h2>
            <div className="anand-heading-line"><span /><b>✦</b><span /></div>
          </div>
          <div className="anand-video-grid">
            {videos.map((video) => (
              <article className="anand-video-card" key={video.id}>
                <video controls playsInline preload="metadata" poster={video.poster} aria-label={video.title}>
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
                <h3>{video.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="anand-page-directory">
        <div className="anand-home-container">
          <div className="anand-centered-heading">
            <span className="anand-gold-label">EXPLORE ANAND SWEETS</span>
            <h2>Every Part of Our Story</h2>
            <div className="anand-heading-line"><span /><b>✦</b><span /></div>
            <p>Choose a section to explore. Each page has its own dedicated details and experience.</p>
          </div>
          <div className="anand-page-directory-grid">
            {pageLinks.map((page) => (
              <button
                type="button"
                className="anand-page-link-card"
                key={page.id}
                onClick={() => setActivePage(page.id)}
              >
                <img src={page.image} alt="" loading="lazy" />
                <span className="anand-page-link-copy">
                  <strong>{page.title}</strong>
                  <span>{page.subtitle}</span>
                </span>
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="anand-home-cta">
        <div className="anand-home-container">
          <span className="anand-gold-label">ANAND SWEETS • RAJAHMUNDRY</span>
          <h2>Make every gathering a little sweeter</h2>
          <button className="anand-gold-button" onClick={() => setActivePage('menu')}>
            Explore Our Sweets <ArrowRight size={17} />
          </button>
        </div>
      </section>


      {/* =====================================================
          HOME PAGE STYLES
      ===================================================== */}
      <style>{`

        /* =====================================================
           MAIN
        ===================================================== */

        .anand-home {
          background: #F5F0E2;
          color: #332D25;
          overflow: hidden;
        }

        .anand-home-container {
          width: min(1160px, calc(100% - 44px));
          margin: 0 auto;
        }

        .home-hero-contact {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 22px;
          margin-top: 20px;
        }

        .home-hero-contact-link {
          min-width: 0;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #fffdf8;
          text-decoration: none;
          text-shadow: 0 1px 10px rgba(36, 31, 26, 0.35);
        }

        .home-hero-contact-link > svg {
          flex: 0 0 auto;
          color: #d7c58f;
        }

        .home-hero-contact-link span {
          display: grid;
          gap: 3px;
        }

        .home-hero-contact-link strong {
          font-size: 12px;
        }

        .home-hero-contact-link small {
          max-width: 240px;
          color: rgba(255, 253, 248, 0.86);
          font-size: 11px;
          line-height: 1.4;
        }

        .home-hero-contact-link:hover strong {
          color: #d7c58f;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .anand-hero {
          position: relative;
          min-height: 610px;
          background: #EFE4CC;
          overflow: hidden;
        }

        .anand-hero-pattern,
        .anand-banner-pattern {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: .32;
          background-image:
            radial-gradient(
              ellipse at 50% 50%,
              transparent 0 38%,
              rgba(151,122,62,.08) 39%,
              transparent 40%
            );
          background-size: 100px 75px;
        }

        .anand-hero-inner {
          width: min(1180px, calc(100% - 44px));
          min-height: 610px;
          margin: auto;
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          align-items: center;
          gap: 45px;
          position: relative;
          z-index: 2;
        }

        .anand-hero-content {
          padding: 70px 0;
        }

        .anand-small-title {
          display: inline-block;
          color: #9C8240;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          margin-bottom: 18px;
        }

        .anand-hero h1 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(46px, 5.2vw, 72px);
          line-height: 1.02;
          font-weight: 700;
          color: #332D25;
          margin: 0 0 20px;
        }

        .anand-hero h1 span {
          color: #9C8240;
        }

        .anand-hero-telugu {
          color: #9C8240;
          font-size: 21px;
          margin-bottom: 16px;
        }

        .anand-hero-description {
          max-width: 500px;
          color: #6B6255;
          font-size: 14px;
          line-height: 1.9;
          margin-bottom: 27px;
        }

        .anand-gold-button {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          border: 1px solid #3B261A;
          background: #5A3825;
          color: #FFFDF8;
          padding: 12px 21px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          border-radius: 999px;
          box-shadow: 0 10px 22px rgba(59, 38, 26, 0.18);
          transition: .25s ease;
        }

        .anand-gold-button:hover {
          background: #3B261A;
          border-color: #3B261A;
          transform: translateY(-2px);
        }


        /* HERO IMAGE */

        .anand-hero-image-wrap {
          position: relative;
          padding: 28px;
        }

        .anand-hero-image-frame {
          position: relative;
          overflow: hidden;
          background: white;
          box-shadow: 0 18px 45px rgba(75,55,25,.16);
        }

        .anand-hero-image-frame::before {
          content: "";
          position: absolute;
          inset: 12px;
          border: 1px solid rgba(255,255,255,.7);
          z-index: 2;
          pointer-events: none;
        }

        .anand-hero-image-frame img {
          width: 100%;
          height: auto;
          max-height: 520px;
          object-fit: contain;
          display: block;
          background: #FFFDF8;
        }

        .anand-hero-decoration {
          position: absolute;
          color: #B49A54;
          font-size: 28px;
        }

        .anand-deco-one {
          top: 0;
          left: 0;
        }

        .anand-deco-two {
          right: 0;
          bottom: 0;
        }


        /* =====================================================
           FEATURE STRIP
        ===================================================== */

        .anand-feature-strip {
          background: #fffdf8;
          border-top: 1px solid #D7C9A5;
          border-bottom: 1px solid #D7C9A5;
        }

        .anand-feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .anand-feature {
          min-height: 105px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 20px;
          border-right: 1px solid #D7C9A5;
        }

        .anand-feature:last-child {
          border-right: none;
        }

        .anand-feature-icon {
          width: 47px;
          height: 47px;
          border: 1px solid #D7C58F;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9C8240;
          background: #F5F0E2;
        }

        .anand-feature h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 17px;
          font-weight: 600;
          margin-bottom: 5px;
        }

        .anand-feature p {
          color: #6B6255;
          font-size: 11px;
        }


        /* =====================================================
           HEADINGS
        ===================================================== */

        .anand-centered-heading {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 45px;
        }

        .anand-gold-label {
          color: #9C8240;
          font-size: 10px;
          letter-spacing: 2.8px;
          font-weight: 800;
        }

        .anand-centered-heading h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(37px, 4vw, 54px);
          font-weight: 600;
          color: #241F1A;
          margin: 11px 0 14px;
        }

        .anand-centered-heading p {
          max-width: 610px;
          margin: 0 auto;
          color: #6B6255;
          font-size: 13px;
          line-height: 1.8;
        }

        .anand-heading-line {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin: 13px 0 17px;
        }

        .anand-heading-line span {
          width: 48px;
          height: 1px;
          background: #D7C58F;
        }

        .anand-heading-line b {
          color: #B49A54;
          font-size: 12px;
          font-weight: 400;
        }

        .anand-heading-line-left {
          justify-content: flex-start;
        }


        /* =====================================================
           EXCELLENCE
        ===================================================== */

        .anand-excellence {
          padding: 95px 0 105px;
          background: #F5F0E2;
        }

        .anand-wide-image {
          position: relative;
          overflow: hidden;
          background: #EFE4CC;
        }

        .anand-wide-image img {
          width: 100%;
          height: auto;
          max-height: 500px;
          object-fit: contain;
          display: block;
          background: #F5F0E2;
        }

        .anand-image-caption {
          position: absolute;
          left: 25px;
          bottom: 25px;
          padding: 15px 20px;
          background: rgba(255,253,248,.94);
          border-left: 3px solid #B49A54;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .anand-image-caption span {
          color: #9C8240;
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .anand-image-caption strong {
          font-family: Georgia, serif;
          font-size: 17px;
          font-weight: 600;
        }


        /* =====================================================
           STORY
        ===================================================== */

        .anand-story {
          padding: 105px 0;
          background: #fffdf8;
        }

        .anand-story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 80px;
        }

        .anand-story-image {
          position: relative;
          padding: 18px;
        }

        .anand-story-image::before {
          content: "";
          position: absolute;
          inset: 0;
          border: 1px solid #D7C58F;
          transform: translate(-1px, 1px);
        }

        .anand-story-image img {
          width: 100%;
          height: auto;
          max-height: 570px;
          object-fit: contain;
          position: relative;
          z-index: 1;
          background: #F5F0E2;
        }

        .anand-story-content {
          padding: 15px 0;
        }

        .anand-story-content h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(40px, 4vw, 55px);
          font-weight: 600;
          line-height: 1.08;
          color: #241F1A;
          margin: 13px 0;
        }

        .anand-story-content h2 span {
          color: #9C8240;
        }

        .anand-story-content > p {
          color: #6B6255;
          font-size: 14px;
          line-height: 1.9;
          margin-bottom: 17px;
        }

        .anand-story-telugu {
          color: #9C8240 !important;
          font-size: 20px !important;
        }

        .anand-outline-button {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: transparent;
          border: 1px solid #5A3825;
          color: #5A3825;
          padding: 11px 19px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          border-radius: 999px;
          transition: .25s ease;
        }

        .anand-outline-button:hover {
          background: #5A3825;
          color: #FFFDF8;
        }


        /* =====================================================
           SWEETS
        ===================================================== */

        .anand-popular {
          padding: 100px 0;
          background: #EFE4CC;
        }

        .anand-sweets-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .anand-sweet-card {
          background: #fffdf8;
          border: 1px solid #5A3825;
          border-radius: 14px;
          overflow: hidden;
          transition: .3s ease;
          box-shadow: 0 8px 25px rgba(59, 38, 26, 0.08);
        }

        .anand-sweet-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 35px rgba(59, 38, 26, 0.12);
          border-color: #B49A54;
        }

        .anand-sweet-image {
          position: relative;
          height: 285px;
          overflow: hidden;
          background: #EFE4CC;
          border-bottom: 1px solid rgba(90, 56, 37, 0.45);
        }

        .anand-sweet-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          background: #F5F0E2;
          transition: .45s ease;
        }

        .anand-sweet-card:hover .anand-sweet-image img {
          transform: scale(1.04);
        }

        .anand-wishlist {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 38px;
          height: 38px;
          border: none;
          border-radius: 50%;
          background: rgba(255,253,248,.94);
          color: #9C8240;
          display: grid;
          place-items: center;
          cursor: pointer;
        }

        .anand-wishlist.active {
          background: #9C8240;
          color: white;
        }

        .anand-quick-view {
          position: absolute;
          left: 50%;
          bottom: 13px;
          transform: translateX(-50%);
          border: none;
          background: rgba(255,253,248,.95);
          color: #6B6255;
          padding: 9px 14px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          opacity: 0;
          transition: .25s ease;
          cursor: pointer;
        }

        .anand-sweet-card:hover .anand-quick-view {
          opacity: 1;
        }

        .anand-sweet-info {
          padding: 19px;
          text-align: center;
        }

        .anand-sweet-category {
          color: #9C8240;
          font-size: 9px;
          letter-spacing: 1.7px;
          text-transform: uppercase;
          font-weight: 800;
        }

        .anand-sweet-info h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 23px;
          font-weight: 600;
          color: #332D25;
          margin: 7px 0 4px;
        }

        .anand-sweet-telugu {
          color: #6B6255;
          font-size: 13px;
          margin-bottom: 14px;
        }

        .anand-sweet-cart {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 10px;
          border: 1px solid #3B261A;
          background: #5A3825;
          color: #FFFDF8;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          border-radius: 999px;
          transition: .25s ease;
        }

        .anand-sweet-cart:hover {
          background: #3B261A;
          border-color: #3B261A;
        }

        .anand-view-all {
          text-align: center;
          margin-top: 40px;
        }


        /* =====================================================
           BANNER
        ===================================================== */

        .anand-tradition-banner {
          position: relative;
          overflow: hidden;
          background: #C9B274;
          color: #332D25;
          padding: 31px 0;
        }

        .anand-banner-content {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 35px;
          text-align: center;
        }

        .anand-banner-content p {
          font-size: 21px;
          margin-bottom: 5px;
        }

        .anand-banner-content span {
          font-size: 11px;
          letter-spacing: 1.8px;
        }

        .anand-banner-symbol {
          color: #9C8240;
          font-size: 24px;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {

          .anand-hero-inner {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 10px;
            padding: 55px 0;
          }

          .anand-hero-content {
            padding: 30px 0 10px;
          }

          .anand-hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .anand-hero-image-wrap {
            width: min(700px, 100%);
            margin: auto;
          }

          .anand-story-grid {
            grid-template-columns: 1fr;
            gap: 55px;
          }

          .anand-story-content {
            text-align: center;
          }

          .anand-heading-line-left {
            justify-content: center;
          }

          .anand-sweets-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .anand-home-container,
          .anand-hero-inner {
            width: calc(100% - 28px);
          }

          .anand-hero {
            min-height: auto;
          }

          .anand-hero-inner {
            padding: 45px 0 55px;
          }

          .anand-hero h1 {
            font-size: 43px;
          }

          .anand-hero-description {
            font-size: 13px;
          }

          .anand-hero-image-wrap {
            padding: 15px;
          }

          .anand-hero-image-frame img {
            height: 270px;
          }

          .anand-feature-grid {
            grid-template-columns: 1fr;
          }

          .anand-feature {
            min-height: 82px;
            justify-content: flex-start;
            padding-left: 25px;
            border-right: none;
            border-bottom: 1px solid #D7C9A5;
          }

          .anand-feature:last-child {
            border-bottom: none;
          }

          .anand-excellence,
          .anand-story,
          .anand-popular {
            padding: 65px 0;
          }

          .anand-centered-heading {
            margin-bottom: 30px;
          }

          .anand-centered-heading h2 {
            font-size: 36px;
          }

          .anand-wide-image img {
            height: 270px;
          }

          .anand-story-image {
            padding: 10px;
          }

          .anand-story-image img {
            height: 350px;
          }

          .anand-story-content h2 {
            font-size: 39px;
          }

          .anand-sweets-grid {
            grid-template-columns: 1fr;
          }

          .anand-sweet-image {
            height: 280px;
          }

          .anand-quick-view {
            opacity: 1;
          }

          .anand-banner-content {
            gap: 12px;
          }

          .anand-banner-content p {
            font-size: 16px;
          }

          .anand-banner-content span {
            font-size: 9px;
          }

        }

        .anand-hero {
          min-height: 620px;
          background: #f5f0e2;
          isolation: isolate;
        }

        .anand-hero-background {
          position: absolute;
          inset: 0;
          z-index: -2;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: right center;
        }

        .anand-hero-pattern {
          z-index: -1;
          opacity: 0.08;
        }

        .anand-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(90deg, rgba(255, 253, 248, 0.97) 0%, rgba(255, 253, 248, 0.9) 31%, rgba(255, 253, 248, 0.38) 55%, rgba(255, 253, 248, 0) 78%);
        }

        .anand-hero-inner {
          min-height: 620px;
          display: flex;
          align-items: center;
        }

        .anand-hero-content {
          width: min(570px, 52%);
          padding: 70px 0;
        }

        .anand-hero h1 {
          color: #241f1a;
          font-weight: 700;
          text-shadow: 0 1px 0 rgba(255, 253, 248, 0.35);
        }

        .anand-hero h1 span {
          color: #332d25;
        }

        .anand-hero-description {
          max-width: 390px;
          color: #332d25;
          font-size: 15px;
          font-weight: 600;
        }

        .anand-gold-button,
        .anand-sweet-cart {
          min-height: 44px;
          border-radius: 3px;
          background: #b49a54;
          border: 1px solid #9c8240;
          color: #fffdf8;
          font-weight: 700;
        }

        .anand-gold-button:hover,
        .anand-sweet-cart:hover {
          background: #9c8240;
          border-color: #9c8240;
        }

        .anand-feature-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .anand-feature h3 {
          color: #241f1a;
          font-weight: 600;
        }

        .anand-feature p {
          color: #6b6255;
        }

        .anand-centered-heading h2,
        .anand-story-content h2 {
          color: #241f1a;
          font-weight: 700;
        }

        .anand-wide-image img {
          width: 100%;
          height: clamp(320px, 42vw, 520px);
          max-height: none;
          object-fit: cover;
          object-position: center;
        }

        .anand-story-image img {
          width: 100%;
          height: clamp(340px, 40vw, 520px);
          max-height: none;
          object-fit: cover;
          object-position: center;
        }

        .anand-sweet-image img {
          object-fit: cover;
          background: #efe4cc;
        }

        .anand-sweet-info h3 {
          color: #241f1a;
          font-weight: 600;
        }

        .anand-sweet-telugu {
          color: #6b6255;
          font-weight: 600;
        }

        .anand-video-section {
          padding: 82px 0;
          background: #f5f0e2;
          border-top: 1px solid #d7c9a5;
          border-bottom: 1px solid #d7c9a5;
        }

        .anand-video-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .anand-video-card {
          min-width: 0;
          padding: 10px;
          background: #fffdf8;
          border: 1px solid #5A3825;
          border-radius: 12px;
          box-shadow: 0 12px 30px rgba(66, 48, 38, 0.1);
          transition: transform .2s ease;
        }

        .anand-video-card:hover {
          transform: translateY(-3px);
          border-color: #B49A54;
        }

        .anand-video-card video {
          display: block;
          width: 100%;
          aspect-ratio: 16 / 10;
          object-fit: contain;
          background: #241f1a;
          border-radius: 4px;
        }

        .anand-video-card h3 {
          margin: 12px 4px 4px;
          color: #332d25;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 18px;
          font-weight: 600;
        }

        .anand-home-cta {
          padding: 76px 0;
          text-align: center;
          background: #fffdf8;
          border-bottom: 1px solid #d7c9a5;
        }

        .anand-home-cta h2 {
          max-width: 700px;
          margin: 12px auto 24px;
          color: #241f1a;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(30px, 4vw, 46px);
          font-weight: 700;
          line-height: 1.15;
        }

        .anand-page-directory {
          padding: 76px 0 82px;
          background: #efe4cc;
          border-top: 1px solid #d7c9a5;
        }

        .anand-page-directory .anand-centered-heading {
          margin-bottom: 30px;
        }

        .anand-page-directory-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .anand-page-link-card {
          min-width: 0;
          display: grid;
          grid-template-columns: 88px minmax(0, 1fr) auto;
          align-items: center;
          gap: 14px;
          padding: 10px 14px 10px 10px;
          color: #3b261a;
          background: #fffdf8;
          border: 1px solid rgba(90, 56, 37, 0.42);
          border-radius: 14px;
          box-shadow: 0 8px 22px rgba(59, 38, 26, 0.08);
          text-align: left;
          cursor: pointer;
          transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
        }

        .anand-page-link-card:hover {
          transform: translateY(-3px);
          border-color: #b49a54;
          box-shadow: 0 13px 28px rgba(59, 38, 26, 0.14);
        }

        .anand-page-link-card > img {
          width: 88px;
          height: 76px;
          object-fit: cover;
          border: 1px solid #5a3825;
          border-radius: 10px;
        }

        .anand-page-link-copy {
          min-width: 0;
          display: grid;
          gap: 5px;
        }

        .anand-page-link-copy strong {
          color: #3b261a;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 16px;
        }

        .anand-page-link-copy > span {
          color: #6b6255;
          font-size: 11px;
          line-height: 1.4;
        }

        .anand-page-link-card > svg {
          color: #9c8240;
          transition: transform 180ms ease;
        }

        .anand-page-link-card:hover > svg {
          transform: translateX(3px);
        }

        @media (max-width: 900px) {
          .anand-feature-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .anand-video-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .anand-page-directory-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .anand-hero,
          .anand-hero-inner {
            min-height: 740px;
          }

          .anand-hero-background {
            top: auto;
            bottom: 0;
            height: 360px;
            object-position: center bottom;
          }

          .anand-hero-overlay {
            background: linear-gradient(180deg, #f5f0e2 0%, rgba(245, 240, 226, 0.98) 38%, rgba(245, 240, 226, 0.78) 52%, rgba(245, 240, 226, 0) 74%);
          }

          .anand-hero-inner {
            justify-content: flex-start;
            text-align: left;
            align-items: flex-start;
            padding: 48px 0 0;
          }

          .anand-hero-content {
            width: min(100%, 390px);
            padding: 28px 0;
          }

          .home-hero-contact {
            display: grid;
            gap: 12px;
          }

          .anand-hero h1 {
            font-size: clamp(42px, 12vw, 54px);
          }

          .anand-video-section {
            padding: 62px 0;
          }

          .anand-video-grid {
            grid-template-columns: 1fr;
          }

          .anand-page-directory {
            padding: 58px 0;
          }

          .anand-page-directory-grid {
            grid-template-columns: 1fr;
          }
        }

      `}</style>

    </main>
  );
}