import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { STORE_INFO } from '../data/sweetsData';

export default function FloatingActions() {
  return (
    <div style={{
      position: 'fixed',
      right: '22px',
      bottom: '22px',
      zIndex: 900,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="animate-pulse"
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: '#25d366',
          color: '#ffffff',
          display: 'grid',
          placeItems: 'center',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
          textDecoration: 'none',
          transition: 'transform 0.3s ease'
        }}
      >
        <MessageCircle size={26} />
      </a>

      {/* Call Button */}
      <a
        href={`tel:${STORE_INFO.phone}`}
        aria-label="Call Now"
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #5e0f1a, #3d0810)',
          color: '#d4a017',
          border: '1px solid #d4a017',
          display: 'grid',
          placeItems: 'center',
          boxShadow: '0 8px 25px rgba(94, 15, 26, 0.4)',
          textDecoration: 'none',
          transition: 'transform 0.3s ease'
        }}
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
