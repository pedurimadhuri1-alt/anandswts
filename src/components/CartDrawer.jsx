import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { STORE_INFO } from '../data/sweetsData';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onProceedCheckout }) {
  if (!isOpen) return null;

  const handleWhatsAppCartOrder = () => {
    if (cartItems.length === 0) return;

    const itemsSummary = cartItems.map(item =>
      `- ${item.sweet.name} (${item.weight.label}) x ${item.quantity}`
    ).join('\n');

    const message = `*New Order from Anand Sweets Website*\n\n` +
      `*Items Ordered:*\n${itemsSummary}\n\n` +
      `Please confirm my order & provide delivery timing in Rajahmundry!`;

    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(36, 31, 26, 0.75)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      justifyContent: 'flex-end'
    }} onClick={onClose}>
      <div style={{
        width: '100%',
        maxWidth: '460px',
        height: '100%',
        background: '#FFFDF8',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-10px 0 30px rgba(0,0,0,0.25)',
        borderLeft: '2px solid #B49A54',
        animation: 'fadeIn 0.25s ease'
      }} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{
          padding: '20px 24px',
          background: 'linear-gradient(135deg, #332D25, #241F1A)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #B49A54'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={22} style={{ color: '#B49A54' }} />
            <h3 style={{ fontSize: '18px', color: '#ffffff', margin: 0 }}>
              Your Sweet Cart ({cartItems.reduce((sum, i) => sum + i.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#B49A54',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#6B6255' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#FFFDF8', display: 'grid', placeItems: 'center', margin: '0 auto 16px', color: '#332D25' }}>
                <ShoppingBag size={32} />
              </div>
              <h4 style={{ fontSize: '18px', color: '#332D25', marginBottom: '6px' }}>Your Cart is Empty</h4>
              <p style={{ fontSize: '13px' }}>Add some Anand Kaja or Pootharekulu to start your order!</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {cartItems.map((item, index) => {
                return (
                  <div
                    key={`${item.sweet.id}-${item.weight.label}-${index}`}
                    style={{
                      background: '#ffffff',
                      borderRadius: '16px',
                      padding: '14px',
                      border: '1px solid rgba(51, 45, 37, 0.08)',
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'center',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                    }}
                  >
                    <img
                      src={item.sweet.image}
                      alt={item.sweet.name}
                      style={{ width: '60px', height: '60px', borderRadius: '12px', objectFit: 'cover' }}
                    />

                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: '14px', color: '#332D25' }}>
                        {item.sweet.name}
                      </div>
                      <div style={{ fontSize: '12px', color: '#6B6255', marginTop: '2px' }}>
                        Weight: <strong>{item.weight.label}</strong>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                      <button
                        onClick={() => onRemoveItem(item.sweet.id, item.weight.label)}
                        aria-label="Remove item"
                        style={{ background: 'none', border: 'none', color: '#9C8240', cursor: 'pointer', padding: '2px' }}
                      >
                        <Trash2 size={16} />
                      </button>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#FFFDF8', borderRadius: '20px', padding: '2px 8px', border: '1px solid rgba(51, 45, 37, 0.15)' }}>
                        <button
                          onClick={() => onUpdateQuantity(item.sweet.id, item.weight.label, -1)}
                          style={{ background: 'none', border: 'none', color: '#332D25', cursor: 'pointer' }}
                        >
                          <Minus size={12} />
                        </button>
                        <span style={{ fontWeight: 700, fontSize: '12px', color: '#332D25' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.sweet.id, item.weight.label, 1)}
                          style={{ background: 'none', border: 'none', color: '#332D25', cursor: 'pointer' }}
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer Summary */}
        {cartItems.length > 0 && (
          <div style={{
            padding: '20px 24px',
            background: '#ffffff',
            borderTop: '1px solid rgba(51, 45, 37, 0.1)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={handleWhatsAppCartOrder}
                className="btn btn-whatsapp"
                style={{ width: '100%', fontSize: '14px' }}
              >
                <MessageCircle size={18} /> Quick Order Via WhatsApp
              </button>

              <button
                onClick={() => {
                  onClose();
                  onProceedCheckout();
                }}
                className="btn btn-gold"
                style={{ width: '100%', fontSize: '14px' }}
              >
                <span>Proceed To Online Checkout</span>
                <ArrowRight size={18} />
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '11px', color: '#6B6255', marginTop: '12px' }}>
              <ShieldCheck size={14} style={{ color: '#B49A54' }} />
              <span>100% Fresh Ghee Guarantee · Rajahmundry Local Pickup or Express Delivery</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
