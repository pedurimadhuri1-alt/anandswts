import React, { useState } from 'react';
import { X, CheckCircle, CreditCard, Truck, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CheckoutModal({ isOpen, onClose, cartItems, onClearCart }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    landmark: '',
    paymentMethod: 'cod' // 'cod', 'upi'
  });

  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const generatedId = `ANS-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setOrderConfirmed(true);

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });

    onClearCart();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1100,
      background: 'rgba(36, 31, 26, 0.8)',
      backdropFilter: 'blur(8px)',
      display: 'grid',
      placeItems: 'center',
      padding: '20px'
    }} onClick={onClose}>
      <div style={{
        background: '#FFFDF8',
        borderRadius: '24px',
        maxWidth: '580px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '32px',
        border: '2px solid #B49A54',
        boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
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

        {orderConfirmed ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #B49A54, #B49A54)',
              color: '#ffffff',
              display: 'grid',
              placeItems: 'center',
              margin: '0 auto 16px',
              boxShadow: '0 8px 25px rgba(39, 174, 96, 0.3)'
            }}>
              <CheckCircle size={40} />
            </div>

            <span className="badge-gold" style={{ marginBottom: '8px', display: 'inline-block' }}>
              Order Placed Successfully!
            </span>

            <h2 style={{ fontSize: '24px', color: '#332D25', margin: '8px 0' }}>
              Thank You For Your Order
            </h2>
            <p style={{ color: '#6B6255', fontSize: '14px', marginBottom: '20px' }}>
              Order Reference ID: <strong style={{ color: '#332D25' }}>#{orderId}</strong>
            </p>

            <div style={{
              background: '#ffffff',
              padding: '20px',
              borderRadius: '16px',
              border: '1px solid rgba(51, 45, 37, 0.1)',
              textAlign: 'left',
              marginBottom: '24px',
              fontSize: '13px'
            }}>
              <div style={{ fontWeight: 700, color: '#332D25', marginBottom: '8px', borderBottom: '1px solid #F5F0E2', paddingBottom: '6px' }}>
                Delivery Summary:
              </div>
              <div style={{ color: '#332D25' }}>Customer: <strong>{formData.fullName}</strong></div>
              <div style={{ color: '#332D25' }}>Phone: <strong>{formData.phone}</strong></div>
              <div style={{ color: '#332D25' }}>Address: <strong>{formData.address}, Rajahmundry</strong></div>
            </div>

            <button onClick={onClose} className="btn btn-primary" style={{ width: '100%' }}>
              Back To Anand Sweets Store
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <Truck size={24} style={{ color: '#332D25' }} />
              <h2 style={{ fontSize: '22px', color: '#332D25', margin: 0 }}>
                Checkout & Delivery Address
              </h2>
            </div>

            <div style={{ background: '#FFFDF8', padding: '14px 18px', borderRadius: '14px', marginBottom: '20px', border: '1px solid rgba(51, 45, 37, 0.1)' }}>
              <div style={{ fontWeight: 700, color: '#332D25', fontSize: '14px' }}>
                {cartItems.length} item(s) selected for delivery.
              </div>
            </div>

            <form onSubmit={handlePlaceOrder} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#332D25', display: 'block', marginBottom: '4px' }}>
                  Full Name:
                </label>
                <input
                  type="text"
                  required
                  placeholder="E.g., K. V. Satyanarayana"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid rgba(51, 45, 37, 0.2)', fontFamily: 'inherit' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#332D25', display: 'block', marginBottom: '4px' }}>
                  Phone Number:
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 93466 92862"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid rgba(51, 45, 37, 0.2)', fontFamily: 'inherit' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#332D25', display: 'block', marginBottom: '4px' }}>
                  Delivery Address:
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="House No, Street Name, Rajahmundry Area..."
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid rgba(51, 45, 37, 0.2)', fontFamily: 'inherit', resize: 'none' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#332D25', display: 'block', marginBottom: '6px' }}>
                  Payment Method:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                    style={{
                      padding: '12px',
                      borderRadius: '12px',
                      border: formData.paymentMethod === 'cod' ? '2px solid #332D25' : '1px solid rgba(51, 45, 37, 0.2)',
                      background: formData.paymentMethod === 'cod' ? '#332D25' : '#ffffff',
                      color: formData.paymentMethod === 'cod' ? '#B49A54' : '#332D25',
                      fontWeight: 700,
                      fontSize: '13px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    <Truck size={16} /> Cash On Delivery
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                    style={{
                      padding: '12px',
                      borderRadius: '12px',
                      border: formData.paymentMethod === 'upi' ? '2px solid #332D25' : '1px solid rgba(51, 45, 37, 0.2)',
                      background: formData.paymentMethod === 'upi' ? '#332D25' : '#ffffff',
                      color: formData.paymentMethod === 'upi' ? '#B49A54' : '#332D25',
                      fontWeight: 700,
                      fontSize: '13px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    <CreditCard size={16} /> UPI / GPay / PhonePe
                  </button>
                </div>
              </div>

              <button type="submit" className="btn btn-gold" style={{ marginTop: '10px', padding: '14px' }}>
                <Sparkles size={18} /> Confirm & Place Order
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
