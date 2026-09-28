import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { STORE_INFO } from '../data/sweetsData';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onProceedCheckout }) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = Math.round(item.sweet.pricePerKg * item.weight.multiplier);
    return total + itemPrice * item.quantity;
  }, 0);

  const packagingFee = subtotal > 0 ? 30 : 0;
  const grandTotal = subtotal + packagingFee;

  const handleWhatsAppCartOrder = () => {
    if (cartItems.length === 0) return;

    const itemsSummary = cartItems.map(item => {
      const itemPrice = Math.round(item.sweet.pricePerKg * item.weight.multiplier);
      return `- ${item.sweet.name} (${item.weight.label}) x ${item.quantity} = ₹${itemPrice * item.quantity}`;
    }).join('\n');

    const message = `*New Order from Anand Sweets Website*\n\n` +
      `*Items Ordered:*\n${itemsSummary}\n\n` +
      `*Subtotal:* ₹${subtotal}\n` +
      `*Packaging & Handling:* ₹${packagingFee}\n` +
      `*Grand Total:* ₹${grandTotal}\n\n` +
      `Please confirm my order & provide delivery timing in Rajahmundry!`;

    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(38, 5, 9, 0.75)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      justifyContent: 'flex-end'
    }} onClick={onClose}>
      <div style={{
        width: '100%',
        maxWidth: '460px',
        height: '100%',
        background: '#fffbeb',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-10px 0 30px rgba(0,0,0,0.25)',
        borderLeft: '2px solid #d4a017',
        animation: 'fadeIn 0.25s ease'
      }} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{
          padding: '20px 24px',
          background: 'linear-gradient(135deg, #5e0f1a, #3d0810)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #d4a017'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={22} style={{ color: '#d4a017' }} />
            <h3 style={{ fontSize: '18px', color: '#ffffff', margin: 0 }}>
              Your Sweet Cart ({cartItems.reduce((sum, i) => sum + i.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#d4a017',
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
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#746565' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#fff7df', display: 'grid', placeItems: 'center', margin: '0 auto 16px', color: '#5e0f1a' }}>
                <ShoppingBag size={32} />
              </div>
              <h4 style={{ fontSize: '18px', color: '#5e0f1a', marginBottom: '6px' }}>Your Cart is Empty</h4>
              <p style={{ fontSize: '13px' }}>Add some Anand Kaja or Pootharekulu to start your order!</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {cartItems.map((item, index) => {
                const itemPrice = Math.round(item.sweet.pricePerKg * item.weight.multiplier);
                return (
                  <div
                    key={`${item.sweet.id}-${item.weight.label}-${index}`}
                    style={{
                      background: '#ffffff',
                      borderRadius: '16px',
                      padding: '14px',
                      border: '1px solid rgba(94, 15, 26, 0.08)',
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
                      <div style={{ fontWeight: 700, fontSize: '14px', color: '#5e0f1a' }}>
                        {item.sweet.name}
                      </div>
                      <div style={{ fontSize: '12px', color: '#746565', marginTop: '2px' }}>
                        Weight: <strong>{item.weight.label}</strong> · ₹{itemPrice}
                      </div>
                      <div style={{ fontWeight: 800, fontSize: '14px', color: '#5e0f1a', marginTop: '4px' }}>
                        ₹{itemPrice * item.quantity}
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                      <button
                        onClick={() => onRemoveItem(item.sweet.id, item.weight.label)}
                        aria-label="Remove item"
                        style={{ background: 'none', border: 'none', color: '#c0392b', cursor: 'pointer', padding: '2px' }}
                      >
                        <Trash2 size={16} />
                      </button>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#fffbeb', borderRadius: '20px', padding: '2px 8px', border: '1px solid rgba(94, 15, 26, 0.15)' }}>
                        <button
                          onClick={() => onUpdateQuantity(item.sweet.id, item.weight.label, -1)}
                          style={{ background: 'none', border: 'none', color: '#5e0f1a', cursor: 'pointer' }}
                        >
                          <Minus size={12} />
                        </button>
                        <span style={{ fontWeight: 700, fontSize: '12px', color: '#5e0f1a' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.sweet.id, item.weight.label, 1)}
                          style={{ background: 'none', border: 'none', color: '#5e0f1a', cursor: 'pointer' }}
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
            borderTop: '1px solid rgba(94, 15, 26, 0.1)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#746565', marginBottom: '6px' }}>
              <span>Items Subtotal:</span>
              <span>₹{subtotal}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#746565', marginBottom: '12px' }}>
              <span>Eco Box Packaging:</span>
              <span>₹{packagingFee}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '20px', fontWeight: 800, color: '#5e0f1a', marginBottom: '16px', paddingTop: '10px', borderTop: '1px stroke rgba(0,0,0,0.1)' }}>
              <span>Grand Total:</span>
              <span>₹{grandTotal}</span>
            </div>

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

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '11px', color: '#746565', marginTop: '12px' }}>
              <ShieldCheck size={14} style={{ color: '#27ae60' }} />
              <span>100% Fresh Ghee Guarantee · Rajahmundry Local Pickup or Express Delivery</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
