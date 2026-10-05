// import React from 'react';
// import { MapPin, Phone, MessageCircle, Clock, Mail, ShoppingBag, Sparkles } from 'lucide-react';
// import { STORE_INFO, SWEETS_DATA } from '../data/sweetsData';

// export default function ContactPage({ onAddToCart }) {
//   const quickSweets = SWEETS_DATA.slice(0, 3); // Pootharekulu, Anand Kaja, Ariselu

//   return (
//     <div className="animate-fade-in">
//       {/* 1. Header Banner (Matching Page 5 Banner in Image 0) */}
//       <section style={{
//         background: 'linear-gradient(90deg, rgba(36, 31, 26, 0.9), rgba(51, 45, 37, 0.75)), url("/images/custom_gift_box.png")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         color: '#ffffff',
//         padding: '70px 0',
//         textAlign: 'center'
//       }}>
//         <div className="container">
//           <span className="section-subtitle" style={{ color: '#B49A54' }}>Visit Us Or Order Online</span>
//           <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', color: '#ffffff', marginBottom: '8px' }}>
//             Contact & Sweet Orders
//           </h1>
//           <p style={{ color: '#FFFDF8', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
//             Fresh • Traditional • Homemade Delicacies from Rajahmundry
//           </p>
//         </div>
//       </section>

//       {/* 2. "Popular Sweets" Quick Grid (Matching Page 5 Quick Items in Image 0) */}
//       <section className="section" style={{ background: '#F5F0E2' }}>
//         <div className="container">
//           <div className="section-title">
//             <span className="section-subtitle">Quick Order</span>
//             <h2>Popular Sweets</h2>
//             <p>Pootharekulu · Anand Kaja · Ariselu</p>
//           </div>

//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
//             gap: '24px',
//             marginBottom: '50px'
//           }}>
//             {quickSweets.map((sweet) => (
//               <div
//                 key={sweet.id}
//                 style={{
//                   background: '#ffffff',
//                   borderRadius: '18px',
//                   padding: '20px',
//                   border: '1px solid rgba(51, 45, 37, 0.08)',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '14px',
//                   boxShadow: '0 6px 20px rgba(0,0,0,0.04)'
//                 }}
//               >
//                 <img src={sweet.image} alt={sweet.name} style={{ width: '70px', height: '70px', borderRadius: '12px', objectFit: 'cover' }} />
//                 <div style={{ flex: 1 }}>
//                   <h4 style={{ color: '#332D25', fontSize: '16px', margin: 0 }}>{sweet.name}</h4>
//                   <button
//                     onClick={() => onAddToCart(sweet, sweet.availableWeights[sweet.availableWeights.length - 1])}
//                     className="btn btn-gold"
//                     style={{ padding: '6px 12px', fontSize: '11px' }}
//                   >
//                     <ShoppingBag size={12} /> Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* 3. Two-Column Layout (Matching Page 5 Layout in Image 0) */}
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
//             gap: '30px'
//           }}>
//             {/* Left Box: Visit Our Store */}
//             <div style={{
//               background: '#ffffff',
//               padding: '36px',
//               borderRadius: '24px',
//               boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
//               border: '1px solid rgba(51, 45, 37, 0.08)'
//             }}>
//               <h3 style={{ fontSize: '24px', color: '#332D25', marginBottom: '20px' }}>
//                 Visit Our Store
//               </h3>

//               <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '14px' }}>
//                 <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
//                   <MapPin size={20} style={{ color: '#B49A54', flexShrink: 0, marginTop: '2px' }} />
//                   <div>
//                     <strong style={{ color: '#332D25' }}>Rajahmundry Address:</strong>
//                     <div style={{ color: '#6B6255', fontSize: '13px', marginTop: '2px' }}>{STORE_INFO.fullAddress}</div>
//                   </div>
//                 </div>

//                 <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
//                   <Phone size={20} style={{ color: '#B49A54', flexShrink: 0 }} />
//                   <div>
//                     <strong style={{ color: '#332D25' }}>Call Us:</strong>
//                     <div style={{ color: '#6B6255', fontSize: '13px' }}>{STORE_INFO.phone}</div>
//                   </div>
//                 </div>

//                 <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
//                   <Mail size={20} style={{ color: '#B49A54', flexShrink: 0 }} />
//                   <div>
//                     <strong style={{ color: '#332D25' }}>Email Us:</strong>
//                     <div style={{ color: '#6B6255', fontSize: '13px' }}>{STORE_INFO.email}</div>
//                   </div>
//                 </div>

//                 <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
//                   <Clock size={20} style={{ color: '#B49A54', flexShrink: 0 }} />
//                   <div>
//                     <strong style={{ color: '#332D25' }}>Opening Hours:</strong>
//                     <div style={{ color: '#6B6255', fontSize: '13px' }}>{STORE_INFO.openingHours}</div>
//                   </div>
//                 </div>

//                 <div style={{ marginTop: '10px' }}>
//                   <a
//                     href={STORE_INFO.googleMapsUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="btn btn-outline"
//                     style={{ color: '#332D25', borderColor: 'rgba(51, 45, 37, 0.3)', width: '100%', padding: '10px' }}
//                   >
//                     <MapPin size={16} /> Open Location on Google Maps
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Right Maroon Box: Anand Sweets App / WhatsApp Order */}
//             <div style={{
//               background: 'linear-gradient(135deg, #241F1A, #332D25)',
//               color: '#ffffff',
//               padding: '36px',
//               borderRadius: '24px',
//               boxShadow: '0 15px 35px rgba(51, 45, 37, 0.2)',
//               border: '2px solid #B49A54',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'space-between'
//             }}>
//               <div>
//                 <h3 style={{ fontSize: '24px', color: '#B49A54', marginBottom: '14px' }}>
//                   Anand Sweets WhatsApp Order
//                 </h3>
//                 <p style={{ color: '#FFFDF8', fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>
//                   Order sweets, get instant price quotes, or enquire about custom Telugu wedding box orders directly on WhatsApp.
//                 </p>

//                 <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
//                   <a href={STORE_INFO.facebookUrl} target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', color: '#B49A54', display: 'grid', placeItems: 'center', textDecoration: 'none' }}>
//                     <i className="fa-brands fa-facebook-f"></i>
//                   </a>
//                   <a href={STORE_INFO.instagramUrl} target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', color: '#B49A54', display: 'grid', placeItems: 'center', textDecoration: 'none' }}>
//                     <i className="fa-brands fa-instagram"></i>
//                   </a>
//                   <a href={`https://wa.me/${STORE_INFO.whatsappNumber}`} target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', color: '#B49A54', display: 'grid', placeItems: 'center', textDecoration: 'none' }}>
//                     <i className="fa-brands fa-whatsapp"></i>
//                   </a>
//                 </div>
//               </div>

//               <div style={{ display: 'flex', gap: '12px' }}>
//                 <a href={`tel:${STORE_INFO.phone}`} className="btn btn-gold" style={{ flex: 1 }}>
//                   <Phone size={16} /> Call Us
//                 </a>
//                 <a href={`https://wa.me/${STORE_INFO.whatsappNumber}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ flex: 1 }}>
//                   <MessageCircle size={16} /> WhatsApp Us
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 4. Order Banner (Matching Image 0 Order Banner) */}
//       <section className="container" style={{ marginBottom: '40px' }}>
//         <div className="telugu-maroon-banner" style={{ textAlign: 'center' }}>
//           <h2 style={{ fontSize: '26px', color: '#B49A54', marginBottom: '8px' }}>
//             Order Your Favourite Sweets Today!
//           </h2>
//           <p style={{ color: '#FFFDF8', fontSize: '14px', marginBottom: '20px' }}>
//             Fresh • Traditional • Homemade
//           </p>
//           <a href={`https://wa.me/${STORE_INFO.whatsappNumber}`} target="_blank" rel="noreferrer" className="btn btn-gold">
//             <MessageCircle size={18} /> Order Now On WhatsApp
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { MapPin, MessageCircle, Phone, Mail, Clock, Send } from 'lucide-react';
import { STORE_INFO } from '../data/sweetsData';
import PageHero from '../components/PageHero';
import { FacebookIcon, InstagramIcon } from '../components/SocialLogos';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Anand Sweets enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${STORE_INFO.email}?subject=${subject}&body=${body}`;
  };

  const contactActions = [
    { label: 'Facebook', Icon: FacebookIcon, href: STORE_INFO.facebookUrl, external: true },
    { label: 'Instagram', Icon: InstagramIcon, href: STORE_INFO.instagramUrl, external: true },
    { label: 'WhatsApp', Icon: MessageCircle, href: `https://wa.me/${STORE_INFO.whatsappNumber}`, external: true },
    { label: 'Call Us', Icon: Phone, href: `tel:${STORE_INFO.phone}` },
    { label: 'Email', Icon: Mail, href: `mailto:${STORE_INFO.email}` },
    { label: 'Gmail', Icon: Mail, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(STORE_INFO.email)}`, external: true },
    { label: 'Google Maps', Icon: MapPin, href: STORE_INFO.googleMapsUrl, external: true },
  ];

  return (
    <div className="animate-fade-in">
      <PageHero
        image="/images/custom_gift_box.png"
        imageAlt="A traditional Anand Sweets gift box"
        eyebrow="ANAND SWEETS • RAJAHMUNDRY"
        title="Contact Us"
        subtitle="We're Here to Serve You"
        actionLabel="Call Us"
        actionHref={`tel:${STORE_INFO.phone}`}
      />

      {/* Contact Layout — editorial two-column */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left — Enquiry form */}
            <div className="contact-card">
              <h2>Send a Message</h2>
              <p
                style={{
                  color: 'var(--muted)',
                  fontSize: '13px',
                  lineHeight: 1.9,
                  marginBottom: '22px',
                }}
              >
                Planning a wedding, festival distribution, or a custom box
                order? Drop your details below and our Rajahmundry team will
                reach out shortly.
              </p>

                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
                >
                  <div>
                    <label
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '1.2px',
                        textTransform: 'uppercase',
                        color: 'var(--brown)',
                        display: 'block',
                        marginBottom: '6px',
                      }}
                    >
                      Your Name
                    </label>
                    <input
                      className="contact-input"
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="E.g., Subba Rao"
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        border: '1px solid var(--border)',
                        background: '#FFFFFF',
                        fontSize: '13px',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '1.2px',
                        textTransform: 'uppercase',
                        color: 'var(--brown)',
                        display: 'block',
                        marginBottom: '6px',
                      }}
                    >
                      E-mail
                    </label>
                    <input
                      className="contact-input"
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        border: '1px solid var(--border)',
                        background: '#FFFFFF',
                        fontSize: '13px',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '1.2px',
                        textTransform: 'uppercase',
                        color: 'var(--brown)',
                        display: 'block',
                        marginBottom: '6px',
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      className="contact-input"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Specify quantity, event date, delivery location..."
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        border: '1px solid var(--border)',
                        background: '#FFFFFF',
                        fontSize: '13px',
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: 'inherit',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="shop-button"
                    style={{ alignSelf: 'flex-start', marginTop: '6px' }}
                  >
                    <Send size={14} /> Send Message
                  </button>
              </form>
            </div>
            <div className="contact-card contact-actions-card">
              <h2>Connect With Anand Sweets</h2>
              <p style={{ margin: '0 0 18px', color: 'var(--muted)', fontSize: '13px', lineHeight: 1.8 }}>
                Visit, call, message, or plan your next celebration with our Rajahmundry team.
              </p>
              <div className="contact-actions-grid">
                {contactActions.map(({ label, Icon, href, external }) => (
                  <a
                    className="contact-action"
                    href={href}
                    key={label}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noreferrer' : undefined}
                  >
                    <span className="contact-action-icon"><Icon size={17} /></span>
                    <span>{label}</span>
                  </a>
                ))}
              </div>
              <div className="contact-hours">
                <Clock size={16} />
                <span><strong>Opening Hours</strong><br />{STORE_INFO.openingHours}</span>
              </div>
              <p className="contact-address">{STORE_INFO.fullAddress}</p>
            </div>
          </div>

          {/* Live map */}
          <div
            className="contact-map"
            style={{
              marginTop: '40px',
            }}
          >
            <iframe
              title="Anand Sweets Rajahmundry Store Map"
              src={STORE_INFO.embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}