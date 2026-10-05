import React, { useEffect, useState } from 'react';
import { Mail, MessageCircle, Phone, X } from 'lucide-react';
import { STORE_INFO } from '../data/sweetsData';
import { FacebookIcon, InstagramIcon } from './SocialLogos';

const contactItems = [
  {
    label: 'Instagram',
    href: STORE_INFO.instagramUrl,
    className: 'fab-contact-instagram',
    Icon: InstagramIcon,
    external: true,
  },
  {
    label: 'Facebook',
    href: STORE_INFO.facebookUrl,
    className: 'fab-contact-facebook',
    Icon: FacebookIcon,
    external: true,
  },
  {
    label: 'WhatsApp',
    href: `https://wa.me/${STORE_INFO.whatsappNumber}`,
    className: 'fab-contact-whatsapp',
    Icon: MessageCircle,
    external: true,
  },
  {
    label: 'Google Maps',
    href: STORE_INFO.googleMapsUrl,
    className: 'fab-contact-google',
    Icon: null,
    external: true,
  },
  {
    label: 'Email',
    href: `mailto:${STORE_INFO.email}`,
    className: 'fab-contact-email',
    Icon: Mail,
  },
  {
    label: 'Phone Call',
    href: `tel:${STORE_INFO.phone}`,
    className: 'fab-contact-phone',
    Icon: Phone,
  },
];

function GoogleMark() {
  return <span className="fab-google-mark" aria-hidden="true">G</span>;
}

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="sweet-fab"
        onClick={() => setIsOpen(true)}
        aria-label="More info and contact options"
      >
        <img src="/images/info.jpeg" alt="" />
        <span className="sweet-fab-more">More Info</span>
      </button>

      {isOpen && (
        <div
          className="sweet-fab-backdrop"
          role="presentation"
          onClick={() => setIsOpen(false)}
        >
          <section
            className="sweet-fab-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Connect with Anand Sweets"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="sweet-fab-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close contact menu"
            >
              <X size={20} />
            </button>
            <p className="sweet-fab-eyebrow">ANAND SWEETS • RAJAHMUNDRY</p>
            <h2>How can we help you?</h2>

            <div className="sweet-fab-feature">
              <img src="/images/info.jpeg" alt="Golden boondi laddu" />
            </div>

            <div className="sweet-fab-contacts">
              {contactItems.map(({ label, href, className, Icon, external }) => (
                <a
                  className={`sweet-fab-contact ${className}`}
                  href={href}
                  key={label}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  aria-label={label}
                >
                  <span className="sweet-fab-icon">
                    {label === 'Google Maps' ? <GoogleMark /> : <Icon size={22} strokeWidth={2} />}
                  </span>
                  <span className="sweet-fab-label">{label}</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
