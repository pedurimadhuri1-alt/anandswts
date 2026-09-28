import React from 'react';
import { STORE_INFO } from '../data/sweetsData';

// Authentic Facebook Vector SVG Logo
export function FacebookIcon({ size = 20, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

// Authentic Instagram Vector SVG Logo
export function InstagramIcon({ size = 20, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

// Authentic WhatsApp Vector SVG Logo
export function WhatsAppIcon({ size = 20, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}

// Full Reusable Social Group Component with authentic brand colors and badges
export function SocialLinksGroup({ variant = 'default', size = 18, gap = 12 }) {
  const isColored = variant === 'colored';

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: `${gap}px` }}>
      {/* Facebook Button */}
      <a
        href={STORE_INFO.facebookUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook Page"
        title="Follow Anand Sweets on Facebook"
        style={{
          width: '38px',
          height: '38px',
          borderRadius: '50%',
          background: isColored ? '#1877F2' : 'rgba(255, 255, 255, 0.12)',
          color: isColored ? '#ffffff' : '#f1cf68',
          border: isColored ? 'none' : '1px solid rgba(255, 255, 255, 0.25)',
          display: 'grid',
          placeItems: 'center',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          boxShadow: isColored ? '0 4px 12px rgba(24, 119, 242, 0.35)' : 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px) scale(1.08)';
          if (!isColored) {
            e.currentTarget.style.background = '#1877F2';
            e.currentTarget.style.color = '#ffffff';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          if (!isColored) {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
            e.currentTarget.style.color = '#f1cf68';
          }
        }}
      >
        <FacebookIcon size={size} color="currentColor" />
      </a>

      {/* Instagram Button */}
      <a
        href={STORE_INFO.instagramUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram Profile"
        title="Follow @anandsweets_rjy on Instagram"
        style={{
          width: '38px',
          height: '38px',
          borderRadius: '50%',
          background: isColored
            ? 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
            : 'rgba(255, 255, 255, 0.12)',
          color: isColored ? '#ffffff' : '#f1cf68',
          border: isColored ? 'none' : '1px solid rgba(255, 255, 255, 0.25)',
          display: 'grid',
          placeItems: 'center',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          boxShadow: isColored ? '0 4px 12px rgba(220, 39, 67, 0.35)' : 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px) scale(1.08)';
          if (!isColored) {
            e.currentTarget.style.background = 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)';
            e.currentTarget.style.color = '#ffffff';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          if (!isColored) {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
            e.currentTarget.style.color = '#f1cf68';
          }
        }}
      >
        <InstagramIcon size={size} color="currentColor" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Order"
        title="Order via WhatsApp (+91 93466 92862)"
        style={{
          width: '38px',
          height: '38px',
          borderRadius: '50%',
          background: isColored ? '#25D366' : 'rgba(255, 255, 255, 0.12)',
          color: isColored ? '#ffffff' : '#25D366',
          border: isColored ? 'none' : '1px solid rgba(37, 211, 102, 0.35)',
          display: 'grid',
          placeItems: 'center',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          boxShadow: isColored ? '0 4px 12px rgba(37, 211, 102, 0.35)' : 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px) scale(1.08)';
          if (!isColored) {
            e.currentTarget.style.background = '#25D366';
            e.currentTarget.style.color = '#ffffff';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          if (!isColored) {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
            e.currentTarget.style.color = '#25D366';
          }
        }}
      >
        <WhatsAppIcon size={size} color="currentColor" />
      </a>
    </div>
  );
}
