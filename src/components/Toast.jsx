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
      background: 'linear-gradient(135deg, #3d0810, #5e0f1a)',
      color: '#f1cf68',
      padding: '12px 24px',
      borderRadius: '50px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
      border: '1px solid #d4a017',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '14px',
      fontWeight: 700,
      animation: 'fadeIn 0.3s ease'
    }}>
      <CheckCircle2 size={18} style={{ color: '#27ae60' }} />
      <span>{message}</span>
    </div>
  );
}
