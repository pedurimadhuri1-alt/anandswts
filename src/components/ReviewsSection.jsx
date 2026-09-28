import React, { useState } from 'react';
import { Star, MessageSquarePlus, X, CheckCircle } from 'lucide-react';
import { REVIEWS_DATA } from '../data/sweetsData';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState(REVIEWS_DATA);
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !comment) return;

    const newRev = {
      id: Date.now(),
      name,
      location: location || 'Rajahmundry',
      rating: Number(rating),
      date: 'Just now',
      comment
    };

    setReviews([newRev, ...reviews]);
    setSubmittedMessage(true);

    setTimeout(() => {
      setSubmittedMessage(false);
      setModalOpen(false);
      setName('');
      setLocation('');
      setComment('');
    }, 1500);
  };

  return (
    <section id="reviews" className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">Happy Sweet Lovers</span>
          <h2>Customer Testimonials & Reviews</h2>
          <p>Read what our valued customers say about Anand Sweets Rajahmundry.</p>
        </div>

        {/* Action Button */}
        <div style={{ textAlignment: 'center', textAlign: 'center', marginBottom: '40px' }}>
          <button
            onClick={() => setModalOpen(true)}
            className="btn btn-maroon"
          >
            <MessageSquarePlus size={18} /> Write A Review
          </button>
        </div>

        {/* Reviews Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {reviews.map((rev) => (
            <div
              key={rev.id}
              style={{
                background: '#fffbeb',
                borderRadius: '20px',
                padding: '26px',
                border: '1px solid rgba(94, 15, 26, 0.08)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', color: '#d4a017', marginBottom: '12px' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#d4a017" />
                  ))}
                </div>
                <p style={{ color: '#2d2020', fontSize: '14px', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '20px' }}>
                  "{rev.comment}"
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(94, 15, 26, 0.08)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: '#5e0f1a' }}>{rev.name}</div>
                  <small style={{ color: '#746565', fontSize: '12px' }}>{rev.location}</small>
                </div>
                <span style={{ fontSize: '11px', color: '#d4a017', fontWeight: 600 }}>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Write Review Modal */}
      {modalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          background: 'rgba(38, 5, 9, 0.75)',
          backdropFilter: 'blur(6px)',
          display: 'grid',
          placeItems: 'center',
          padding: '20px'
        }} onClick={() => setModalOpen(false)}>
          <div style={{
            background: '#fffbeb',
            maxWidth: '500px',
            width: '100%',
            padding: '30px',
            borderRadius: '24px',
            border: '2px solid #d4a017',
            position: 'relative'
          }} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setModalOpen(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#5e0f1a',
                color: '#d4a017',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                cursor: 'pointer',
                display: 'grid',
                placeItems: 'center'
              }}
            >
              <X size={18} />
            </button>

            <h3 style={{ fontSize: '20px', color: '#5e0f1a', marginBottom: '16px' }}>
              Share Your Experience
            </h3>

            {submittedMessage ? (
              <div style={{ textAlign: 'center', padding: '30px 0', color: '#27ae60' }}>
                <CheckCircle size={48} style={{ margin: '0 auto 12px' }} />
                <h4 style={{ fontSize: '18px', color: '#27ae60' }}>Thank You!</h4>
                <p style={{ fontSize: '14px', color: '#746565' }}>Your review has been posted successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#5e0f1a', display: 'block', marginBottom: '4px' }}>
                    Your Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="E.g., Anjaneyulu Chowdary"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid rgba(94, 15, 26, 0.2)', fontFamily: 'inherit' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#5e0f1a', display: 'block', marginBottom: '4px' }}>
                    Location (City / Country):
                  </label>
                  <input
                    type="text"
                    placeholder="E.g., Rajahmundry / USA"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid rgba(94, 15, 26, 0.2)', fontFamily: 'inherit' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#5e0f1a', display: 'block', marginBottom: '4px' }}>
                    Star Rating:
                  </label>
                  <select
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid rgba(94, 15, 26, 0.2)', fontFamily: 'inherit', fontWeight: 700 }}
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ 5 Stars - Outstanding Taste</option>
                    <option value={4}>⭐⭐⭐⭐ 4 Stars - Very Good</option>
                    <option value={3}>⭐⭐⭐ 3 Stars - Average</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#5e0f1a', display: 'block', marginBottom: '4px' }}>
                    Your Review / Comments:
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about the Anand Kaja, Pootharekulu or service..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid rgba(94, 15, 26, 0.2)', fontFamily: 'inherit', resize: 'none' }}
                  />
                </div>

                <button type="submit" className="btn btn-gold" style={{ width: '100%', marginTop: '8px' }}>
                  Submit Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
