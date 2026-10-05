import React from 'react';
import { X, Heart, Trash2 } from 'lucide-react';
import { SWEETS_DATA } from '../data/sweetsData';

export default function WishlistModal({ isOpen, onClose, wishlistIds, onToggleWishlist }) {
  if (!isOpen) return null;

  const wishlistedSweets = SWEETS_DATA.filter(sweet => wishlistIds.includes(sweet.id));

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
        maxWidth: '560px',
        width: '100%',
        maxHeight: '80vh',
        overflowY: 'auto',
        padding: '30px',
        border: '2px solid #B49A54',
        position: 'relative'
      }} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: '#332D25',
            color: '#B49A54',
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <Heart size={24} style={{ color: '#9C8240' }} fill="#9C8240" />
          <h2 style={{ fontSize: '22px', color: '#332D25', margin: 0 }}>
            Your Wishlist ({wishlistedSweets.length})
          </h2>
        </div>

        {wishlistedSweets.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 0', color: '#6B6255' }}>
            <Heart size={40} style={{ color: '#D7C9A5', margin: '0 auto 12px' }} />
            <p style={{ fontSize: '14px' }}>You haven't saved any sweets to your wishlist yet.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {wishlistedSweets.map((sweet) => (
              <div
                key={sweet.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '14px',
                  border: '1px solid rgba(51, 45, 37, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img src={sweet.image} alt={sweet.name} style={{ width: '54px', height: '54px', borderRadius: '10px', objectFit: 'cover' }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '14px', color: '#332D25' }}>{sweet.name}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button
                    onClick={() => onToggleWishlist(sweet.id)}
                    style={{ background: 'none', border: 'none', color: '#9C8240', cursor: 'pointer', padding: '4px' }}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
