import React, { useState } from 'react';
import { Search, Heart, Eye, ShoppingBag, Star, Sparkles, Filter, ArrowUpDown } from 'lucide-react';
import { SWEETS_DATA } from '../data/sweetsData';

export default function SweetsCatalog({ onAddToCart, onToggleWishlist, wishlistIds, onOpenQuickView }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default'); // 'default', 'price-low', 'price-high', 'rating'
  const [selectedWeights, setSelectedWeights] = useState({});

  const categories = [
    { id: 'all', label: 'All Sweets & Savouries' },
    { id: 'special', label: '👑 Anand Specials' },
    { id: 'ghee', label: 'Pure Ghee Delights' },
    { id: 'traditional', label: 'Traditional Andhra' },
    { id: 'savouries', label: 'Spicy Savouries' },
    { id: 'gifting', label: 'Gift Packs' }
  ];

  const handleWeightChange = (sweetId, weightObj) => {
    setSelectedWeights(prev => ({
      ...prev,
      [sweetId]: weightObj
    }));
  };

  const getWeightForSweet = (sweet) => {
    return selectedWeights[sweet.id] || sweet.availableWeights[sweet.availableWeights.length - 1]; // default 1 kg or highest
  };

  const filteredSweets = SWEETS_DATA.filter(sweet => {
    const matchesCategory = activeCategory === 'all' || sweet.category === activeCategory;
    const matchesSearch = sweet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          sweet.teluguName.includes(searchQuery) ||
                          sweet.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.pricePerKg - b.pricePerKg;
    if (sortBy === 'price-high') return b.pricePerKg - a.pricePerKg;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <section id="menu" className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">Freshly Made Daily</span>
          <h2>Our Popular Sweets & Savouries</h2>
          <p>Handcrafted delicacies loved by families across Andhra Pradesh and beyond.</p>
        </div>

        {/* Search & Sort Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '30px',
          background: '#fffbeb',
          padding: '16px 20px',
          borderRadius: '16px',
          border: '1px solid rgba(94, 15, 26, 0.08)'
        }}>
          {/* Search Bar */}
          <div style={{ position: 'relative', flex: '1 1 280px' }}>
            <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#746565' }} />
            <input
              type="text"
              placeholder="Search Anand Kaja, Pootharekulu, Ariselu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '11px 16px 11px 42px',
                borderRadius: '50px',
                border: '1px solid rgba(94, 15, 26, 0.15)',
                outline: 'none',
                fontSize: '14px',
                background: '#ffffff',
                fontFamily: 'inherit'
              }}
            />
          </div>

          {/* Sort Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ArrowUpDown size={16} style={{ color: '#5e0f1a' }} />
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#5e0f1a' }}>Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '10px 16px',
                borderRadius: '50px',
                border: '1px solid rgba(94, 15, 26, 0.15)',
                outline: 'none',
                fontSize: '13px',
                fontWeight: 600,
                background: '#ffffff',
                color: '#5e0f1a',
                cursor: 'pointer'
              }}
            >
              <option value="default">Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated (Stars)</option>
            </select>
          </div>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '40px'
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '10px 20px',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                border: activeCategory === cat.id ? 'none' : '1px solid rgba(94, 15, 26, 0.15)',
                background: activeCategory === cat.id ? 'linear-gradient(135deg, #5e0f1a, #3d0810)' : '#fff7df',
                color: activeCategory === cat.id ? '#d4a017' : '#2d2020',
                boxShadow: activeCategory === cat.id ? '0 6px 16px rgba(94, 15, 26, 0.25)' : 'none'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sweets Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {filteredSweets.map((sweet) => {
            const currentWeight = getWeightForSweet(sweet);
            const calculatedPrice = Math.round(sweet.pricePerKg * currentWeight.multiplier);
            const isWishlisted = wishlistIds.includes(sweet.id);

            return (
              <div
                key={sweet.id}
                style={{
                  background: '#fffbeb',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(94, 15, 26, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 35px rgba(63, 18, 18, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.06)';
                }}
              >
                {/* Image Section */}
                <div style={{ height: '240px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={sweet.image}
                    alt={sweet.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                  />

                  {/* Top Badges */}
                  <div style={{ position: 'absolute', top: '14px', left: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {sweet.isBestseller && (
                      <span className="badge-maroon" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <Sparkles size={12} /> Bestseller
                      </span>
                    )}
                    {sweet.isPureGhee && (
                      <span className="badge-gold">Pure Desi Ghee</span>
                    )}
                  </div>

                  {/* Wishlist Icon */}
                  <button
                    onClick={() => onToggleWishlist(sweet.id)}
                    aria-label="Wishlist toggle"
                    style={{
                      position: 'absolute',
                      top: '14px',
                      right: '14px',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(4px)',
                      border: 'none',
                      color: isWishlisted ? '#c0392b' : '#746565',
                      display: 'grid',
                      placeItems: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                    }}
                  >
                    <Heart size={18} fill={isWishlisted ? '#c0392b' : 'none'} />
                  </button>

                  {/* Quick View Button */}
                  <button
                    onClick={() => onOpenQuickView(sweet)}
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      padding: '6px 12px',
                      borderRadius: '30px',
                      background: 'rgba(61, 8, 16, 0.85)',
                      color: '#f1cf68',
                      border: 'none',
                      fontSize: '12px',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      cursor: 'pointer',
                      backdropFilter: 'blur(4px)'
                    }}
                  >
                    <Eye size={14} /> Quick View
                  </button>
                </div>

                {/* Content Section */}
                <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '18px', color: '#5e0f1a', fontWeight: 700, margin: 0 }}>
                      {sweet.name}
                    </h3>
                    <span className="telugu-font" style={{ color: '#d4a017', fontSize: '16px', fontWeight: 'bold' }}>
                      {sweet.teluguName}
                    </span>
                  </div>

                  {/* Rating Stars */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', color: '#d4a017' }}>
                      <Star size={14} fill="#d4a017" />
                      <Star size={14} fill="#d4a017" />
                      <Star size={14} fill="#d4a017" />
                      <Star size={14} fill="#d4a017" />
                      <Star size={14} fill="#d4a017" />
                    </div>
                    <span style={{ fontSize: '12px', color: '#746565', fontWeight: 600 }}>
                      {sweet.rating} ({sweet.reviewsCount})
                    </span>
                  </div>

                  <p style={{ color: '#746565', fontSize: '13px', lineHeight: 1.6, marginBottom: '16px', flex: 1 }}>
                    {sweet.description}
                  </p>

                  {/* Weight Selector */}
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#5e0f1a', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                      Select Weight:
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {sweet.availableWeights.map((w) => (
                        <button
                          key={w.label}
                          onClick={() => handleWeightChange(sweet.id, w)}
                          style={{
                            flex: 1,
                            padding: '6px 0',
                            borderRadius: '10px',
                            border: currentWeight.label === w.label ? '2px solid #5e0f1a' : '1px solid rgba(94, 15, 26, 0.15)',
                            background: currentWeight.label === w.label ? '#5e0f1a' : '#ffffff',
                            color: currentWeight.label === w.label ? '#d4a017' : '#2d2020',
                            fontSize: '12px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          {w.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price & Add to Cart */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid rgba(94, 15, 26, 0.08)' }}>
                    <div>
                      <div style={{ fontSize: '20px', fontWeight: 800, color: '#5e0f1a' }}>
                        ₹{calculatedPrice}
                      </div>
                      <div style={{ fontSize: '11px', color: '#746565' }}>
                        for {currentWeight.label} (₹{sweet.pricePerKg}/kg)
                      </div>
                    </div>

                    <button
                      onClick={() => onAddToCart(sweet, currentWeight)}
                      className="btn btn-gold"
                      style={{ padding: '10px 18px', fontSize: '13px' }}
                    >
                      <ShoppingBag size={16} /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
