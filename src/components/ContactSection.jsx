import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Send, CheckCircle } from 'lucide-react';
import { STORE_INFO } from '../data/sweetsData';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    sweetItem: 'Signature Anand Kaja',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', phone: '', sweetItem: 'Signature Anand Kaja', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="section" style={{ background: '#FFFDF8' }}>
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">Visit Us</span>
          <h2>Let's Make It Sweeter</h2>
          <p>Come visit Anand Sweets in Rajahmundry or send us an enquiry for bulk orders.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {/* Store Info & Quick Contact */}
          <div style={{
            background: '#ffffff',
            padding: '36px',
            borderRadius: '24px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            border: '1px solid rgba(51, 45, 37, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <h3 style={{ fontSize: '24px', color: '#332D25', marginBottom: '24px' }}>
                {STORE_INFO.name} Rajahmundry
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '30px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#FFFDF8', border: '1px solid #B49A54', color: '#332D25', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', color: '#332D25', margin: 0 }}>Our Boutique Store</h4>
                    <p style={{ color: '#6B6255', fontSize: '13px', margin: 0, marginTop: '2px' }}>
                      {STORE_INFO.fullAddress}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#FFFDF8', border: '1px solid #B49A54', color: '#332D25', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', color: '#332D25', margin: 0 }}>Call Us Direct</h4>
                    <p style={{ color: '#6B6255', fontSize: '14px', margin: 0, marginTop: '2px', fontWeight: 700 }}>
                      <a href={`tel:${STORE_INFO.phone}`} style={{ textDecoration: 'none', color: '#332D25' }}>
                        {STORE_INFO.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#FFFDF8', border: '1px solid #B49A54', color: '#B49A54', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', color: '#332D25', margin: 0 }}>WhatsApp Order & Support</h4>
                    <p style={{ color: '#6B6255', fontSize: '13px', margin: 0, marginTop: '2px' }}>
                      Instant replies & delivery confirmation on WhatsApp.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#FFFDF8', border: '1px solid #B49A54', color: '#332D25', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', color: '#332D25', margin: 0 }}>Opening Hours</h4>
                    <p style={{ color: '#6B6255', fontSize: '13px', margin: 0, marginTop: '2px' }}>
                      {STORE_INFO.openingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a href={`tel:${STORE_INFO.phone}`} className="btn btn-gold" style={{ flex: 1 }}>
                <Phone size={16} /> Call Now
              </a>
              <a href={`https://wa.me/${STORE_INFO.whatsappNumber}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ flex: 1 }}>
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>

          {/* Direct Enquiry Form */}
          <div style={{
            background: '#ffffff',
            padding: '36px',
            borderRadius: '24px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            border: '1px solid rgba(51, 45, 37, 0.08)'
          }}>
            <h3 style={{ fontSize: '22px', color: '#332D25', marginBottom: '10px' }}>
              Special / Bulk Order Enquiry
            </h3>
            <p style={{ fontSize: '13px', color: '#6B6255', marginBottom: '20px' }}>
              Planning a wedding, festival distribution, or custom box order? Drop your details below!
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0', color: '#B49A54' }}>
                <CheckCircle size={48} style={{ margin: '0 auto 12px' }} />
                <h4 style={{ fontSize: '18px', color: '#B49A54' }}>Enquiry Received!</h4>
                <p style={{ fontSize: '14px', color: '#6B6255' }}>Our Rajahmundry store representative will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#332D25', display: 'block', marginBottom: '4px' }}>
                    Your Full Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="E.g., Subba Rao"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1px solid rgba(51, 45, 37, 0.2)', fontFamily: 'inherit' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#332D25', display: 'block', marginBottom: '4px' }}>
                    Mobile Number / WhatsApp:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9XXXX XXXXX"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1px solid rgba(51, 45, 37, 0.2)', fontFamily: 'inherit' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#332D25', display: 'block', marginBottom: '4px' }}>
                    Interested Product / Service:
                  </label>
                  <select
                    value={formState.sweetItem}
                    onChange={(e) => setFormState({ ...formState, sweetItem: e.target.value })}
                    style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1px solid rgba(51, 45, 37, 0.2)', fontFamily: 'inherit', fontWeight: 600 }}
                  >
                    <option value="Signature Anand Kaja">Signature Anand Kaja (Bulk)</option>
                    <option value="Pootharekulu Ghee Boxes">Pootharekulu Ghee Gift Boxes</option>
                    <option value="Wedding Sweet Hampers">Wedding Sweet Hampers</option>
                    <option value="Corporate Festive Gifting">Corporate Festive Gifting</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#332D25', display: 'block', marginBottom: '4px' }}>
                    Additional Message / Quantity:
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify total kg needed, event date, delivery location..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1px solid rgba(51, 45, 37, 0.2)', fontFamily: 'inherit', resize: 'none' }}
                  />
                </div>

                <button type="submit" className="btn btn-maroon" style={{ marginTop: '6px' }}>
                  <Send size={16} /> Send Order Enquiry
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Live Google Map Embed */}
        <div style={{
          marginTop: '40px',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          border: '2px solid #B49A54',
          height: '350px'
        }}>
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
  );
}
