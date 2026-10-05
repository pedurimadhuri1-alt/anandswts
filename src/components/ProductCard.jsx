import React from 'react';
import { Eye, Heart } from 'lucide-react';

export default function ProductCard({
  sweet,
  onToggleWishlist,
  isWishlisted = false,
  onOpenQuickView,
}) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={sweet.image} alt={sweet.name} loading="lazy" />
        {onToggleWishlist && (
          <button
            type="button"
            className={`product-icon-button ${isWishlisted ? 'active' : ''}`}
            onClick={() => onToggleWishlist(sweet.id)}
            aria-label={`${isWishlisted ? 'Remove from' : 'Add to'} wishlist: ${sweet.name}`}
          >
            <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
        )}
        {onOpenQuickView && (
          <button
            type="button"
            className="product-quick-view"
            onClick={() => onOpenQuickView(sweet)}
          >
            <Eye size={15} /> Quick View
          </button>
        )}
      </div>

      <div className="product-body">
        <div className="product-name-block">
          <h3>{sweet.name}</h3>
          {sweet.teluguName && <p className="telugu-name telugu-font">{sweet.teluguName}</p>}
        </div>
      </div>
    </article>
  );
}