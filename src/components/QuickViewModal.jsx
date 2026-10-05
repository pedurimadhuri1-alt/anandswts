import React from 'react';
import { X, Star, ShieldCheck, Clock, Heart, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/sweetsData';

export default function QuickViewModal({
  sweet,
  onClose,
  onToggleWishlist,
  isWishlisted = false,
}) {
  if (!sweet) return null;

  const handleWhatsAppOrder = () => {
    const text = `Hello Anand Sweets Rajahmundry! I would like to order *${sweet.name}*. Please share delivery details.`;
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(36, 31, 26, 0.75)',
      backdropFilter: 'blur(6px)',
      display: 'grid',
      placeItems: 'center',
      padding: '20px'
    }} onClick={onClose}>
      <div style={{
        background: '#FFFDF8',
        borderRadius: '24px',
        maxWidth: '750px',
        width: '100%',
        maxHeight: 'calc(100vh - 40px)',
        overflowY: 'auto',
        overflowX: 'hidden',
        boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
        border: '2px solid #B49A54',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
        position: 'relative',
        animation: 'fadeIn 0.3s ease'
      }} className="quick-view-panel" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close quick view"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(36, 31, 26, 0.85)',
            color: '#D7C58F',
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
        <div className="quick-view-image-wrap" style={{ position: 'relative', minHeight: '300px', background: '#EFE4CC' }}>
          <img
            src={sweet.image}
            alt={sweet.name}
            className="quick-view-image"
            style={{ width: '100%', height: '100%', minHeight: '300px', objectFit: 'cover', border: '2px solid #5A3825' }}
          />
        </div>

        {/* Right Details */}
        <div className="quick-view-details" style={{ padding: 'clamp(18px, 4vw, 30px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span className="badge-gold">Anand Signature</span>
              <span className="telugu-font" style={{ color: '#B49A54', fontSize: '20px', fontWeight: 'bold' }}>
                {sweet.teluguName}
              </span>
            </div>

            <h2 style={{ fontSize: '24px', color: '#332D25', marginBottom: '8px' }}>
              {sweet.name}
            </h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', color: '#B49A54' }}>
                <Star size={16} fill="#B49A54" />
                <Star size={16} fill="#B49A54" />
                <Star size={16} fill="#B49A54" />
                <Star size={16} fill="#B49A54" />
                <Star size={16} fill="#B49A54" />
              </div>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#6B6255' }}>
                {sweet.rating} ({sweet.reviewsCount} verified reviews)
              </span>
            </div>

            <p style={{ color: '#6B6255', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
              {sweet.description}
            </p>

            {/* Product Meta Info */}
            <div style={{ background: '#FFFDF8', padding: '14px', borderRadius: '14px', marginBottom: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#332D25', fontWeight: 600 }}>
                <ShieldCheck size={16} style={{ color: '#B49A54' }} />
                <span>Ingredients: {sweet.ingredients}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#332D25', fontWeight: 600 }}>
                <Clock size={16} style={{ color: '#B49A54' }} />
                {sweet.shelfLife && <span>Shelf Life: {sweet.shelfLife}</span>}
              </div>
            </div>

          </div>

          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <button
                type="button"
                onClick={() => onToggleWishlist?.(sweet.id)}
                className="btn btn-outline"
                aria-pressed={isWishlisted}
                style={{ flex: '0 1 auto', color: isWishlisted ? '#FFFDF8' : '#5A3825', background: isWishlisted ? '#5A3825' : 'transparent', borderColor: '#5A3825' }}
              >
                <Heart size={17} fill={isWishlisted ? 'currentColor' : 'none'} />
                {isWishlisted ? 'Wishlisted' : 'Wishlist'}
              </button>

              <button
                onClick={handleWhatsAppOrder}
                className="btn btn-whatsapp"
                style={{ flex: '1 1 150px' }}
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
