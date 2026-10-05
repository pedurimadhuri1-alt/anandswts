import React, { useState } from 'react';
import {
  Search,
  Heart,
  Eye,
  Star,
  Sparkles,
  ArrowUpDown
} from 'lucide-react';
import { SWEETS_DATA } from '../data/sweetsData';

export default function SweetsCatalog({
  onToggleWishlist,
  wishlistIds,
  onOpenQuickView
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');

  const categories = [
    { id: 'all', label: 'All Sweets & Savouries' },
    { id: 'special', label: 'Anand Specials' },
    { id: 'ghee', label: 'Pure Ghee Delights' },
    { id: 'traditional', label: 'Traditional Andhra' },
    { id: 'savouries', label: 'Spicy Savouries' },
    { id: 'gifting', label: 'Gift Packs' }
  ];

  const filteredSweets = SWEETS_DATA
    .filter((sweet) => {
      const matchesCategory =
        activeCategory === 'all' || sweet.category === activeCategory;

      const search = searchQuery.toLowerCase();

      const matchesSearch =
        sweet.name.toLowerCase().includes(search) ||
        sweet.teluguName.includes(searchQuery) ||
        sweet.description.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }

      return 0;
    });

  return (
    <section
      id="menu"
      className="section"
      style={{ background: '#ffffff' }}
    >
      <div className="container">

        {/* Section Heading */}
        <div className="section-title">
          <span className="section-subtitle">
            Freshly Made Daily
          </span>

          <h2>
            Our Popular Sweets & Savouries
          </h2>

          <p>
            Handcrafted delicacies loved by families across Andhra Pradesh
            and beyond.
          </p>
        </div>

        {/* Search & Sort Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '30px',
            background: '#F5F0E2',
            padding: '16px 20px',
            borderRadius: '16px',
            border: '1px solid rgba(156, 130, 64, 0.08)'
          }}
        >

          {/* Search */}
          <div
            style={{
              position: 'relative',
              flex: '1 1 280px'
            }}
          >
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#6B6255'
              }}
            />

            <input
              type="text"
              placeholder="Search Anand Kaja, Pootharekulu, Ariselu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '11px 16px 11px 42px',
                borderRadius: '50px',
                border: '1px solid rgba(156, 130, 64, 0.15)',
                outline: 'none',
                fontSize: '14px',
                background: '#ffffff',
                fontFamily: 'inherit'
              }}
            />
          </div>

          {/* Sort */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <ArrowUpDown
              size={16}
              style={{ color: '#9C8240' }}
            />

            <span
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: '#9C8240'
              }}
            >
              Sort By:
            </span>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '10px 16px',
                borderRadius: '50px',
                border: '1px solid rgba(156, 130, 64, 0.15)',
                outline: 'none',
                fontSize: '13px',
                fontWeight: 600,
                background: '#ffffff',
                color: '#9C8240',
                cursor: 'pointer'
              }}
            >
              <option value="default">
                Popularity
              </option>

              <option value="rating">
                Top Rated (Stars)
              </option>
            </select>
          </div>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            marginBottom: '40px'
          }}
        >
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
                border:
                  activeCategory === cat.id
                    ? 'none'
                    : '1px solid rgba(156, 130, 64, 0.15)',
                background:
                  activeCategory === cat.id
                    ? 'linear-gradient(135deg, #9C8240, #6B6255)'
                    : '#F5F0E2',
                color:
                  activeCategory === cat.id
                    ? '#ffffff'
                    : '#332D25',
                boxShadow:
                  activeCategory === cat.id
                    ? '0 6px 16px rgba(156, 130, 64, 0.25)'
                    : 'none'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sweets Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '30px'
          }}
        >
          {filteredSweets.map((sweet) => {
            const isWishlisted = wishlistIds.includes(sweet.id);

            return (
              <div
                key={sweet.id}
                style={{
                  background: '#F5F0E2',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  boxShadow:
                    '0 8px 25px rgba(0, 0, 0, 0.06)',
                  border:
                    '1px solid rgba(156, 130, 64, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition:
                    'transform 0.3s ease, box-shadow 0.3s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    'translateY(-6px)';

                  e.currentTarget.style.boxShadow =
                    '0 16px 35px rgba(51, 45, 37, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    'translateY(0)';

                  e.currentTarget.style.boxShadow =
                    '0 8px 25px rgba(0, 0, 0, 0.06)';
                }}
              >

                {/* Image */}
                <div
                  style={{
                    height: '240px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
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

                  {/* Badges */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px'
                    }}
                  >
                    {sweet.isBestseller && (
                      <span
                        className="badge-maroon"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <Sparkles size={12} />
                        Bestseller
                      </span>
                    )}

                    {sweet.isPureGhee && (
                      <span className="badge-gold">
                        Pure Desi Ghee
                      </span>
                    )}
                  </div>

                  {/* Wishlist */}
                  <button
                    onClick={() =>
                      onToggleWishlist(sweet.id)
                    }
                    aria-label="Wishlist toggle"
                    style={{
                      position: 'absolute',
                      top: '14px',
                      right: '14px',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background:
                        'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(4px)',
                      border: 'none',
                      color: isWishlisted
                        ? '#9C8240'
                        : '#6B6255',
                      display: 'grid',
                      placeItems: 'center',
                      cursor: 'pointer',
                      boxShadow:
                        '0 4px 10px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <Heart
                      size={18}
                      fill={
                        isWishlisted
                          ? '#9C8240'
                          : 'none'
                      }
                    />
                  </button>

                  {/* Quick View */}
                  <button
                    onClick={() =>
                      onOpenQuickView(sweet)
                    }
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      padding: '6px 12px',
                      borderRadius: '30px',
                      background:
                        'rgba(156, 130, 64, 0.90)',
                      color: '#ffffff',
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
                    <Eye size={14} />
                    Quick View
                  </button>
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: '22px',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1
                  }}
                >

                  {/* Name */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '10px',
                      marginBottom: '8px'
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '18px',
                        color: '#9C8240',
                        fontWeight: 700,
                        margin: 0
                      }}
                    >
                      {sweet.name}
                    </h3>

                    <span
                      className="telugu-font"
                      style={{
                        color: '#B49A54',
                        fontSize: '16px',
                        fontWeight: 'bold'
                      }}
                    >
                      {sweet.teluguName}
                    </span>
                  </div>

                  {/* Rating */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginBottom: '10px'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        color: '#B49A54'
                      }}
                    >
                      <Star size={14} fill="#B49A54" />
                      <Star size={14} fill="#B49A54" />
                      <Star size={14} fill="#B49A54" />
                      <Star size={14} fill="#B49A54" />
                      <Star size={14} fill="#B49A54" />
                    </div>

                    <span
                      style={{
                        fontSize: '12px',
                        color: '#6B6255',
                        fontWeight: 600
                      }}
                    >
                      {sweet.rating} ({sweet.reviewsCount})
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      color: '#6B6255',
                      fontSize: '13px',
                      lineHeight: 1.6,
                      marginBottom: '16px',
                      flex: 1
                    }}
                  >
                    {sweet.description}
                  </p>


                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredSweets.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '50px 20px',
              color: '#6B6255'
            }}
          >
            <p>
              No sweets found. Please try another search.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}