import React from "react";
import {
  Award,
  ShoppingBag,
  Sparkles,
  MapPin,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="anand-hero"
    >
      {/* BACKGROUND IMAGE */}
      <div className="anand-hero-background">
        <img
          src="/images/hero_sweets.png"
          alt="Anand Sweets Rajahmundry"
        />
      </div>

      {/* IMAGE OVERLAY */}
      <div className="anand-hero-overlay"></div>

      {/* CONTENT */}
      <div className="container anand-hero-container">
        <div className="anand-hero-content">

          {/* BRAND LABEL */}
          <div className="anand-hero-label">
            <span className="hero-line"></span>

            <Sparkles size={14} />

            <span>ANAND SWEETS · RAJAHMUNDRY</span>

            <span className="hero-line"></span>
          </div>

          {/* HEADING */}
          <h1>
            Sweetness Brings
            <br />
            <span>People Together.</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="anand-hero-description">
            Authentic Andhra flavours, traditional recipes and
            generations of sweet-making heritage. Discover the
            taste of Anand Sweets, freshly prepared in Rajahmundry.
          </p>

          {/* TELUGU */}
          <p className="anand-hero-telugu telugu-font">
            రాజమండ్రి మట్టిలో పుట్టిన రుచులు...
            ప్రతి తీపి జ్ఞాపకంగా మారేలా.
          </p>

          {/* BUTTONS */}
          <div className="anand-hero-buttons">
            <a
              href="#menu"
              className="anand-gold-button"
            >
              <ShoppingBag size={17} />
              Explore Sweets
            </a>

            <a
              href="#box-builder"
              className="anand-outline-button"
            >
              <Sparkles size={17} />
              Gift Boxes
            </a>

            <a
              href="#contact"
              className="anand-outline-button"
            >
              <MapPin size={17} />
              Visit Store
            </a>
          </div>

          {/* FEATURES */}
          <div className="anand-hero-features">

            <div className="anand-hero-feature">
              <Award size={23} />

              <div>
                <strong>40+ Years</strong>
                <small>Sweet Heritage</small>
              </div>
            </div>

            <div className="anand-hero-feature">
              <ShieldCheck size={23} />

              <div>
                <strong>100% Pure</strong>
                <small>Desi Ghee</small>
              </div>
            </div>

            <div className="anand-hero-feature">
              <HeartHandshake size={23} />

              <div>
                <strong>50,000+</strong>
                <small>Happy Families</small>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* HERO STYLES */}
      <style>{`

        /* ===============================
           ANAND SWEETS HERO
        =============================== */

        .anand-hero {
          position: relative;
          isolation: isolate;
          min-height: 650px;
          overflow: hidden;
          display: flex;
          align-items: center;
          background: #6B6255;
        }

        /* IMAGE */

        .anand-hero-background {
          position: absolute;
          inset: 0;
          z-index: -2;
        }

        .anand-hero-background img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
        }

        /* OVERLAY */

        .anand-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: -1;

          background:
            linear-gradient(
              90deg,
              rgba(53, 35, 18, 0.78) 0%,
              rgba(67, 45, 23, 0.55) 42%,
              rgba(67, 45, 23, 0.18) 100%
            );
        }

        /* CONTAINER */

        .anand-hero-container {
          position: relative;
          z-index: 2;
        }

        .anand-hero-content {
          width: min(700px, 100%);
          padding: 90px 0;
          color: white;
        }

        /* LABEL */

        .anand-hero-label {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          color: #D7C58F;

          font-size: 10px;
          letter-spacing: 2px;
          font-weight: 600;

          margin-bottom: 22px;
        }

        .hero-line {
          width: 28px;
          height: 1px;
          background: #D7C58F;
        }

        /* HEADING */

        .anand-hero h1 {
          margin: 0 0 20px;

          color: #FFFDF8;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: clamp(
            42px,
            5.5vw,
            70px
          );

          line-height: 1.08;
          font-weight: 600;

          text-shadow:
            0 4px 25px
            rgba(0,0,0,.35);
        }

        .anand-hero h1 span {
          color: #D7C58F;
        }

        /* DESCRIPTION */

        .anand-hero-description {
          max-width: 590px;

          color: rgba(
            255,
            253,
            247,
            .92
          );

          font-size: 15px;
          line-height: 1.8;

          margin: 0 0 18px;
        }

        /* TELUGU */

        .anand-hero-telugu {
          color: #D7C58F;

          font-size: 19px;

          line-height: 1.6;

          margin: 0 0 28px;
        }

        /* BUTTONS */

        .anand-hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;

          margin-bottom: 38px;
        }

        .anand-gold-button,
        .anand-outline-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 8px;

          padding: 12px 20px;

          font-size: 11px;
          letter-spacing: .3px;

          text-decoration: none;

          transition:
            .25s ease;
        }

        .anand-gold-button {
          background: #B49A54;
          color: white;

          border: 1px solid #B49A54;
        }

        .anand-gold-button:hover {
          background: #9C8240;
          border-color: #9C8240;
          transform: translateY(-2px);
        }

        .anand-outline-button {
          color: white;

          background:
            rgba(
              255,
              255,
              255,
              .08
            );

          border: 1px solid
            rgba(
              255,
              255,
              255,
              .55
            );
        }

        .anand-outline-button:hover {
          background: white;
          color: #9C8240;
          transform: translateY(-2px);
        }

        /* FEATURES */

        .anand-hero-features {
          display: flex;
          flex-wrap: wrap;

          gap: 0;

          width: fit-content;

          background:
            rgba(
              255,
              253,
              247,
              .10
            );

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              .25
            );

          backdrop-filter: blur(8px);
        }

        .anand-hero-feature {
          display: flex;
          align-items: center;

          gap: 9px;

          padding: 14px 18px;

          border-right:
            1px solid
            rgba(
              255,
              255,
              255,
              .18
            );
        }

        .anand-hero-feature:last-child {
          border-right: none;
        }

        .anand-hero-feature svg {
          color: #D7C58F;
          flex-shrink: 0;
        }

        .anand-hero-feature div {
          display: flex;
          flex-direction: column;
        }

        .anand-hero-feature strong {
          color: #D7C58F;
          font-size: 13px;
          font-weight: 700;
        }

        .anand-hero-feature small {
          color: rgba(
            255,
            255,
            255,
            .78
          );

          font-size: 9px;

          margin-top: 2px;
        }

        /* TABLET */

        @media (max-width: 800px) {

          .anand-hero {
            min-height: 620px;
          }

          .anand-hero-content {
            padding:
              75px 0;
          }

          .anand-hero h1 {
            font-size: 48px;
          }

          .anand-hero-features {
            width: 100%;
          }

          .anand-hero-feature {
            flex: 1;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {

          .anand-hero {
            min-height: 680px;
          }

          .anand-hero-background img {
            object-position: center;
          }

          .anand-hero-overlay {
            background:
              linear-gradient(
                90deg,
                rgba(45, 29, 15, .82),
                rgba(45, 29, 15, .58)
              );
          }

          .anand-hero-content {
            padding: 70px 0;
          }

          .anand-hero-label {
            font-size: 8px;
            letter-spacing: 1.4px;
          }

          .hero-line {
            width: 18px;
          }

          .anand-hero h1 {
            font-size: 42px;
          }

          .anand-hero-description {
            font-size: 13px;
            line-height: 1.7;
          }

          .anand-hero-telugu {
            font-size: 16px;
          }

          .anand-hero-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .anand-gold-button,
          .anand-outline-button {
            width: 100%;
          }

          .anand-hero-features {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr;
          }

          .anand-hero-feature {
            border-right: none;
            border-bottom:
              1px solid
              rgba(
                255,
                255,
                255,
                .16
              );
          }

          .anand-hero-feature:last-child {
            border-bottom: none;
          }
        }

      `}</style>
    </section>
  );
}