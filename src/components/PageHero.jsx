import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function PageHero({
  image,
  imageAlt,
  imagePosition = 'right center',
  eyebrow,
  title,
  subtitle,
  actionLabel,
  actionHref,
  onAction,
  variant = '',
  children,
}) {
  const className = ['brand-hero', variant && `brand-hero--${variant}`]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={className}>
      <img
        className="brand-hero-image"
        src={image}
        alt={imageAlt}
        style={{ '--hero-image-position': imagePosition }}
      />
      <div className="brand-hero-wash" aria-hidden="true" />
      <div className="brand-hero-inner">
        <div className="brand-hero-copy">
          {eyebrow && <span className="brand-hero-eyebrow">{eyebrow}</span>}
          <h1>{title}</h1>
          <div className="brand-hero-divider" aria-hidden="true">
            <span />
            <b>✦</b>
            <span />
          </div>
          <p>{subtitle}</p>
          {actionLabel && actionHref && (
            <a className="gold-button" href={actionHref}>
              {actionLabel} <ArrowRight size={16} />
            </a>
          )}
          {actionLabel && onAction && (
            <button className="gold-button" type="button" onClick={onAction}>
              {actionLabel} <ArrowRight size={16} />
            </button>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}