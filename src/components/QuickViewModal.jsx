import React, { useState } from 'react';
import { X, Star, ShoppingBag, ShieldCheck, Clock, Award, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/sweetsData';

export default function QuickViewModal({ sweet, onClose, onAddToCart }) {
  if (!sweet) return null;

  const [selectedWeight, setSelectedWeight] = useState(sweet.availableWeights[sweet.availableWeights.length - 1]);

  const price = Math.round(sweet.pricePerKg * selectedWeight.multiplier);

  const handleWhatsAppOrder = () => {
    const text = `Hello Anand Sweets Rajahmundry! I would like to order *${sweet.name}* (${selectedWeight.label}) - ₹${price}. Please share payment and delivery details.`;
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(38, 5, 9, 0.75)',
      backdropFilter: 'blur(6px)',
      display: 'grid',
      placeItems: 'center',
      padding: '20px'
    }} onClick={onClose}>
      <div style={{
        background: '#fffbeb',
        borderRadius: '24px',
        maxWidth: '750px',
        width: '100%',
        overflow: 'hidden',
        boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
        border: '2px solid #d4a017',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        position: 'relative',
        animation: 'fadeIn 0.3s ease'
      }} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(61, 8, 16, 0.85)',
            color: '#f1cf68',
            border: 'none',
            display: 'grid',
            placeItems: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        {/* Left Image */}
        <div style={{ position: 'relative', minHeight: '300px' }}>
          <img
            src={sweet.image}
            alt={sweet.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Right Details */}
        <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span className="badge-maroon">Anand Signature</span>
              <span className="telugu-font" style={{ color: '#d4a017', fontSize: '20px', fontWeight: 'bold' }}>
                {sweet.teluguName}
              </span>
            </div>

            <h2 style={{ fontSize: '24px', color: '#5e0f1a', marginBottom: '8px' }}>
              {sweet.name}
            </h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', color: '#d4a017' }}>
                <Star size={16} fill="#d4a017" />
                <Star size={16} fill="#d4a017" />
                <Star size={16} fill="#d4a017" />
                <Star size={16} fill="#d4a017" />
                <Star size={16} fill="#d4a017" />
              </div>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#746565' }}>
                {sweet.rating} ({sweet.reviewsCount} verified reviews)
              </span>
            </div>

            <p style={{ color: '#746565', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
              {sweet.description}
            </p>

            {/* Product Meta Info */}
            <div style={{ background: '#fff7df', padding: '14px', borderRadius: '14px', marginBottom: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#5e0f1a', fontWeight: 600 }}>
                <ShieldCheck size={16} style={{ color: '#d4a017' }} />
                <span>Ingredients: {sweet.ingredients}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#5e0f1a', fontWeight: 600 }}>
                <Clock size={16} style={{ color: '#d4a017' }} />
                <span>Shelf Life: {sweet.shelfLife}</span>
              </div>
            </div>

            {/* Weight Picker */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, color: '#5e0f1a', display: 'block', marginBottom: '8px' }}>
                Choose Quantity / Weight:
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                {sweet.availableWeights.map((w) => (
                  <button
                    key={w.label}
                    onClick={() => setSelectedWeight(w)}
                    style={{
                      flex: 1,
                      padding: '8px 0',
                      borderRadius: '10px',
                      border: selectedWeight.label === w.label ? '2px solid #5e0f1a' : '1px solid rgba(94, 15, 26, 0.2)',
                      background: selectedWeight.label === w.label ? '#5e0f1a' : '#ffffff',
                      color: selectedWeight.label === w.label ? '#d4a017' : '#2d2020',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    {w.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Price & Action */}
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '16px' }}>
              <span style={{ fontSize: '28px', fontWeight: 800, color: '#5e0f1a' }}>₹{price}</span>
              <span style={{ fontSize: '13px', color: '#746565' }}>for {selectedWeight.label}</span>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => {
                  onAddToCart(sweet, selectedWeight);
                  onClose();
                }}
                className="btn btn-gold"
                style={{ flex: 1 }}
              >
                <ShoppingBag size={18} /> Add to Cart
              </button>

              <button
                onClick={handleWhatsAppOrder}
                className="btn btn-whatsapp"
                style={{ flex: 1 }}
              >
                <MessageCircle size={18} /> WhatsApp Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
