import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

export default function Toast({ message, isVisible }) {
  if (!isVisible || !message) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '30px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 2000,
      background: 'linear-gradient(135deg, #241F1A, #332D25)',
      color: '#D7C58F',
      padding: '12px 24px',
      borderRadius: '50px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
      border: '1px solid #B49A54',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '14px',
      fontWeight: 700,
      animation: 'fadeIn 0.3s ease'
    }}>
      <CheckCircle2 size={18} style={{ color: '#B49A54' }} />
      <span>{message}</span>
    </div>
  );
}
