import React, { useMemo, useState } from 'react';
import {
  AtSign,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { FacebookIcon, InstagramIcon } from '../components/SocialLogos';
import { STORE_INFO, SWEETS_DATA } from '../data/sweetsData';

const galleryItems = [
  { id: 'kaja', name: 'Anand Kaja', telugu: 'ఆనంద్ కాజా', category: 'sweets', image: '/images/anand_kaja.png', fit: 'cover' },
  { id: 'pootharekulu', name: 'Pootharekulu', telugu: 'పూతరేకులు', category: 'sweets', image: '/images/pootharekulu.png', fit: 'contain' },
  { id: 'sunnundalu', name: 'Sunnundalu', telugu: 'సున్నుండలు', category: 'sweets', image: '/images/sunnudalu.jpg', fit: 'cover' },
  { id: 'ariselu', name: 'Ariselu', telugu: 'అరిసెలు', category: 'sweets', image: '/images/ariselu.png', fit: 'cover' },
  { id: 'mysore-pak', name: 'Mysore Pak', telugu: 'మైసూర్ పాక్', category: 'sweets', image: '/images/mysure.jpg', fit: 'cover' },
  { id: 'mysore-pak-box', name: 'Mysore Pak', telugu: 'మైసూర్ పాక్', category: 'sweets', image: '/images/misure.jpeg', fit: 'cover' },
  { id: 'kaja-selection', name: 'Kaja Selection', telugu: 'కాజా మిఠాయిలు', category: 'sweets', image: '/images/kaja.jpeg', fit: 'cover' },
  { id: 'sweet-assortment', name: 'Sweet Assortment', telugu: 'సంప్రదాయ మిఠాయిలు', category: 'sweets', image: '/images/all sweets.jpeg', fit: 'cover' },
  { id: 'sweet-display', name: 'Sweet Selection', telugu: 'తీపి వంటకాలు', category: 'sweets', image: '/images/specia.jpeg', fit: 'cover' },
  { id: 'sweet-box', name: 'Celebration Sweets', telugu: 'వేడుకల మిఠాయిలు', category: 'sweets', image: '/images/swee.jpeg', fit: 'cover' },
  { id: 'sweets-selection', name: 'Traditional Sweets', telugu: 'సాంప్రదాయ స్వీట్లు', category: 'sweets', image: '/images/sweets.jpeg', fit: 'cover' },
  { id: 'chekkalu', name: 'Chekkalu', telugu: 'చెక్కలు', category: 'savouries', image: '/images/chekkalu.jpg', fit: 'cover' },
  { id: 'mixture', name: 'Andhra Mixture', telugu: 'ఆంధ్ర మిక్చర్', category: 'savouries', image: '/images/mixcture.jpg', fit: 'cover' },
  { id: 'savoury-mix', name: 'Savoury Mix', telugu: 'కారం మిశ్రమం', category: 'savouries', image: '/images/mixc.jpeg', fit: 'cover' },
  { id: 'snack-mix', name: 'Tea-Time Savouries', telugu: 'సాయంత్రం చిరుతిళ్లు', category: 'savouries', image: '/images/mixed.jpeg', fit: 'cover' },
  { id: 'snack-selection', name: 'Savoury Selection', telugu: 'కారం వంటకాలు', category: 'savouries', image: '/images/seww.jpeg', fit: 'cover' },
  { id: 'tea-time', name: 'Tea-Time Treats', telugu: 'టీ సమయపు చిరుతిళ్లు', category: 'savouries', image: '/images/Tea_Time_Snacks_2.webp', fit: 'cover' },
  { id: 'snack-box', name: 'Snack Selection', telugu: 'చిరుతిళ్ల ఎంపిక', category: 'savouries', image: '/images/swees.jpeg', fit: 'cover' },
  { id: 'gift-hamper', name: 'Gift Hamper', telugu: 'బహుమతి బుట్ట', category: 'gift-boxes', image: '/images/gift_baskets.jpg', fit: 'cover' },
  { id: 'gift-box', name: 'Sweet Gift Box', telugu: 'మిఠాయిల బహుమతి పెట్టె', category: 'gift-boxes', image: '/images/custom_gift_box.png', fit: 'cover' },
  { id: 'wooden-box', name: 'Traditional Gift Box', telugu: 'సంప్రదాయ బహుమతి పెట్టె', category: 'gift-boxes', image: '/images/wooden_gift_box.jpg', fit: 'cover' },
  { id: 'festival', name: 'Festival Celebration', telugu: 'పండుగ సంబరాలు', category: 'festivals', image: '/images/festival_family.png', fit: 'cover' },
  { id: 'ugadi', name: 'Ugadi Sweets', telugu: 'ఉగాది మిఠాయిలు', category: 'festivals', image: '/images/ugadhi.jpg', fit: 'cover' },
  { id: 'celebration-photo', name: 'Festive Moments', telugu: 'పండుగ ఆనందాలు', category: 'festivals', image: '/images/WhatsApp Image 2026-10-03 at 9.12.08 AM.jpeg', fit: 'cover' },
  { id: 'family', name: 'Family Sweet Moments', telugu: 'కుటుంబ మధుర క్షణాలు', category: 'family', image: '/images/family_eating_sweets.jpg', fit: 'cover' },
  { id: 'celebration-family', name: 'Family Celebration', telugu: 'కుటుంబ వేడుక', category: 'family', image: '/images/festival_family.png', fit: 'cover' },
  { id: 'godavari', name: 'Godavari Heritage', telugu: 'గోదావరి వారసత్వం', category: 'family', image: '/images/godavari_bridge.png', fit: 'cover' },
  { id: 'sweet-making', name: 'Sweet Making', telugu: 'మిఠాయిల తయారీ', category: 'traditional', image: '/images/sweet_kitchen.jpg', fit: 'cover' },
  { id: 'sweet-tradition', name: 'Anand Sweets', telugu: 'ఆనంద్ స్వీట్స్', category: 'traditional', image: '/images/hero_sweets.png', fit: 'cover' },
  { id: 'store', name: 'Anand Sweets Store', telugu: 'ఆనంద్ స్వీట్స్ దుకాణం', category: 'traditional', image: '/images/home.png', fit: 'cover' },
];

const filters = [
  { id: 'all', label: 'All' },
  { id: 'sweets', label: 'Sweets' },
  { id: 'savouries', label: 'Savouries' },
  { id: 'gift-boxes', label: 'Gift Boxes' },
  { id: 'festivals', label: 'Festivals' },
  { id: 'family', label: 'Family Celebrations' },
  { id: 'traditional', label: 'Traditional' },
];

const videos = [
  { id: 'ravva-laddu', title: 'Ravva Laddu', src: '/images/ravvaladdu.mp4', poster: '/images/ariselu.png' },
  { id: 'gulab-jamun', title: 'Gulab Jamun', src: '/images/gulabjamv.mp4', poster: '/images/mysure.jpg' },
  { id: 'sweet-tradition', title: 'Sweet Making Tradition', src: '/images/tradition.mp4', poster: '/images/sweet_kitchen.jpg' },
  { id: 'sweet-moments', title: 'Sweet Moments', src: '/images/sweets.mp4', poster: '/images/hero_sweets.png' },
  { id: 'sweet-preparation', title: 'Fresh Preparation', src: '/images/pack.mp4', poster: '/images/custom_gift_box.png' },
  { id: 'family-memory', title: 'Family Memories', src: '/images/memory.mp4', poster: '/images/family_eating_sweets.jpg' },
  { id: 'celebration-film', title: 'Celebration Moments', src: '/images/స్క్రీన్ రికార్డింగ్ 2026-09-29 155642.mp4', poster: '/images/festival_family.png' },
];

const contactLinks = [
  { label: 'Facebook', icon: FacebookIcon, href: STORE_INFO.facebookUrl },
  { label: 'Instagram', icon: InstagramIcon, href: STORE_INFO.instagramUrl },
  { label: 'WhatsApp', icon: MessageCircle, href: `https://wa.me/${STORE_INFO.whatsappNumber}` },
  { label: 'Call', icon: Phone, href: `tel:${STORE_INFO.phone}` },
  { label: 'Email', icon: Mail, href: `mailto:${STORE_INFO.email}` },
  { label: 'Gmail', icon: AtSign, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(STORE_INFO.email)}`, external: true },
  { label: 'Google Maps', icon: MapPin, href: STORE_INFO.googleMapsUrl, external: true },
];

export default function GalleryPage({
  onToggleWishlist,
  wishlistIds = [],
}) {
  const [filter, setFilter] = useState('all');
  const featuredSweet = SWEETS_DATA.find((sweet) => sweet.id === 'sunnundalu');
  const filteredItems = useMemo(
    () => filter === 'all' ? galleryItems : galleryItems.filter((item) => item.category === filter),
    [filter],
  );

  return (
    <div className="gallery-page">
      <PageHero
        variant="gallery"
        image="/images/hero_sweets.png"
        imageAlt="Traditional Anand Sweets arranged for a family celebration"
        eyebrow="ANAND SWEETS • RAJAHMUNDRY"
        title="Anand Sweets"
        subtitle="Sweet Moments • Traditional Memories"
      />

      <section className="gallery-content section">
        <div className="container">
          <header className="gallery-heading">
            <span className="section-subtitle">A glimpse of our traditions</span>
            <h2>Sweet Moments, Cherished Forever</h2>
            <div className="gold-divider"><span /><span className="divider-mark">✦</span><span /></div>
          </header>

          <div className="gallery-filter-list" role="group" aria-label="Filter gallery photos">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`gallery-filter${filter === item.id ? ' is-active' : ''}`}
                aria-pressed={filter === item.id}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <figure className="gallery-card" key={item.id}>
                <div className="gallery-card-image">
                  <img
                    src={encodeURI(item.image)}
                    alt={`${item.name} — ${item.telugu}`}
                    loading="lazy"
                    style={{ objectFit: item.fit }}
                  />
                </div>
                <figcaption>
                  <span>{item.name}</span>
                  <span className="telugu-font">{item.telugu}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {featuredSweet && (
        <section className="gallery-featured">
          <div className="container gallery-featured-inner">
            <div className="gallery-featured-image">
              <img src={featuredSweet.image} alt="Sunnundalu laddu made with traditional ingredients" loading="lazy" />
            </div>
            <div className="gallery-featured-copy">
              <span className="section-subtitle">A traditional favourite</span>
              <h2>Laddu</h2>
              <p className="telugu-font">లడ్డూ</p>
              <button
                className={`gallery-featured-wishlist${wishlistIds.includes(featuredSweet.id) ? ' is-active' : ''}`}
                type="button"
                onClick={() => onToggleWishlist?.(featuredSweet.id)}
                aria-pressed={wishlistIds.includes(featuredSweet.id)}
              >
                {wishlistIds.includes(featuredSweet.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </button>
            </div>
          </div>
        </section>
      )}

      <section className="gallery-video-section">
        <div className="container">
          <header className="gallery-heading">
            <span className="section-subtitle">From our kitchen</span>
            <h2>Sweet Moments in Motion</h2>
            <p>Tradition, celebration and happiness — captured beautifully.</p>
          </header>
          <div className="gallery-video-grid">
            {videos.map((video) => (
              <article className="gallery-video-card" key={video.id}>
                <video controls playsInline preload="metadata" poster={video.poster} aria-label={video.title}>
                  <source src={encodeURI(video.src)} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
                <h3>{video.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-connect">
        <div className="container">
          <header className="gallery-heading">
            <span className="section-subtitle">We would love to hear from you</span>
            <h2>Connect With Anand Sweets</h2>
          </header>
          <div className="gallery-contact-grid">
            {contactLinks.map(({ label, icon: Icon, href, external }) => (
              <a
                className="gallery-contact-card"
                href={href}
                key={label}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                aria-label={label}
              >
                <Icon size={21} strokeWidth={1.8} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
