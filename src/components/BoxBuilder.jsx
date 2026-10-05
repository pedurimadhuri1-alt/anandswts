import React, { useState } from 'react';
import { Gift, Plus, Minus, CheckCircle, Sparkles, MessageCircle, ShoppingBag } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SWEETS_DATA, STORE_INFO } from '../data/sweetsData';

export default function BoxBuilder({ onAddToCart }) {
  const boxSizes = [
    { id: '500g', label: '500g Gift Box', totalGrams: 500 },
    { id: '1kg', label: '1 Kg Assorted Box', totalGrams: 1000 },
    { id: '2kg', label: '2 Kg Royal Celebration Box', totalGrams: 2000 }
  ];

  const [selectedBox, setSelectedBox] = useState(boxSizes[1]); // Default 1kg box
  const [selectedItems, setSelectedItems] = useState({}); // { sweetId: grams }
  const [occasion, setOccasion] = useState('Festive Celebration');
  const [customNote, setCustomNote] = useState('');

  const currentFilledGrams = Object.values(selectedItems).reduce((sum, g) => sum + g, 0);
  const remainingGrams = selectedBox.totalGrams - currentFilledGrams;
  const fillPercentage = Math.min(100, Math.round((currentFilledGrams / selectedBox.totalGrams) * 100));

  const handleAddItem = (sweetId) => {
    const increment = 250;
    if (remainingGrams < increment) return;

    setSelectedItems(prev => ({
      ...prev,
      [sweetId]: (prev[sweetId] || 0) + increment
    }));
  };

  const handleRemoveItem = (sweetId) => {
    const decrement = 250;
    if (!selectedItems[sweetId]) return;

    setSelectedItems(prev => {
      const nextGrams = (prev[sweetId] || 0) - decrement;
      if (nextGrams <= 0) {
        const copy = { ...prev };
        delete copy[sweetId];
        return copy;
      }
      return { ...prev, [sweetId]: nextGrams };
    });
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleAddBoxToCart = () => {
    if (currentFilledGrams === 0) return;
    triggerCelebration();

    const itemDetails = Object.entries(selectedItems).map(([id, g]) => {
      const s = SWEETS_DATA.find(sw => sw.id === id);
      return `${s.name} (${g}g)`;
    }).join(', ');

    const customBoxSweet = {
      id: `custom-box-${Date.now()}`,
      name: `Custom Anand Box (${selectedBox.label})`,
      teluguName: `ఆనంద్ గిఫ్ట్ బాక్స్`,
      image: '/images/custom_gift_box.png',
      description: `Includes: ${itemDetails}. Occasion: ${occasion}. Note: ${customNote || 'None'}`
    };

    onAddToCart(customBoxSweet, { label: '1 Box', multiplier: 1.0 });
  };

  const handleWhatsAppBoxOrder = () => {
    if (currentFilledGrams === 0) return;
    triggerCelebration();

    const itemsSummary = Object.entries(selectedItems).map(([id, g]) => {
      const s = SWEETS_DATA.find(sw => sw.id === id);
      return `- ${s.name}: ${g}g`;
    }).join('\n');

    const message = `*Custom Gift Box Order - Anand Sweets Rajahmundry*\n\n` +
      `*Box Size:* ${selectedBox.label}\n` +
      `*Occasion:* ${occasion}\n` +
      `*Contents:*\n${itemsSummary}\n` +
      `*Greeting Note:* ${customNote || 'Best Wishes!'}\n` +
      `\n` +
      `Please confirm my box order & delivery slot!`;

    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="box-builder" className="section" style={{ background: '#FFFDF8' }}>
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">Interactive Feature</span>
          <h2>Design Your Custom Anand Gift Box</h2>
          <p>Pick your favorite traditional sweets, customize box size, and write a personalized greeting card.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '35px',
          alignItems: 'start'
        }}>
          {/* Left Column: Configurator Steps */}
          <div style={{ background: '#ffffff', padding: '30px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)', border: '1px solid rgba(51, 45, 37, 0.08)' }}>
            {/* Step 1: Select Box Size */}
            <div style={{ marginBottom: '28px' }}>
              <h3 style={{ fontSize: '18px', color: '#332D25', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Gift size={20} style={{ color: '#B49A54' }} />
                <span>Step 1: Choose Box Size</span>
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {boxSizes.map((box) => (
                  <button
                    key={box.id}
                    onClick={() => {
                      setSelectedBox(box);
                      setSelectedItems({});
                    }}
                    style={{
                      padding: '14px 10px',
                      borderRadius: '16px',
                      border: selectedBox.id === box.id ? '2px solid #332D25' : '1px solid rgba(51, 45, 37, 0.15)',
                      background: selectedBox.id === box.id ? '#332D25' : '#FFFDF8',
                      color: selectedBox.id === box.id ? '#B49A54' : '#332D25',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ fontWeight: 800, fontSize: '14px' }}>{box.id}</div>
                    <div style={{ fontSize: '11px', opacity: 0.8 }}>{box.totalGrams}g capacity</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Capacity Progress Bar */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 700, color: '#332D25', marginBottom: '8px' }}>
                <span>Box Filling Status:</span>
                <span>{currentFilledGrams}g / {selectedBox.totalGrams}g ({fillPercentage}%)</span>
              </div>

              <div style={{ height: '14px', background: '#F5F0E2', borderRadius: '10px', overflow: 'hidden', position: 'relative' }}>
                <div style={{
                  height: '100%',
                  width: `${fillPercentage}%`,
                  background: fillPercentage === 100 ? 'linear-gradient(90deg, #B49A54, #B49A54)' : 'linear-gradient(90deg, #B49A54, #332D25)',
                  transition: 'width 0.3s ease'
                }} />
              </div>

              {remainingGrams > 0 ? (
                <small style={{ color: '#6B6255', fontSize: '12px', marginTop: '6px', display: 'block' }}>
                  Add <strong>{remainingGrams}g</strong> more sweets to complete your box!
                </small>
              ) : (
                <small style={{ color: '#B49A54', fontSize: '12px', fontWeight: 700, marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <CheckCircle size={14} /> Your Anand Gift Box is 100% full & perfectly packed!
                </small>
              )}
            </div>

            {/* Step 3: Pick Sweets to Fill */}
            <div style={{ marginBottom: '28px' }}>
              <h3 style={{ fontSize: '18px', color: '#332D25', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={20} style={{ color: '#B49A54' }} />
                <span>Step 2: Select Sweets (250g increments)</span>
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '320px', overflowY: 'auto', paddingRight: '6px' }}>
                {SWEETS_DATA.map((sweet) => {
                  const qtyGrams = selectedItems[sweet.id] || 0;
                  return (
                    <div
                      key={sweet.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 14px',
                        background: '#FFFDF8',
                        borderRadius: '12px',
                        border: '1px solid rgba(51, 45, 37, 0.08)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <img src={sweet.image} alt={sweet.name} style={{ width: '42px', height: '42px', borderRadius: '8px', objectFit: 'cover' }} />
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '14px', color: '#332D25' }}>{sweet.name}</div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <button
                          onClick={() => handleRemoveItem(sweet.id)}
                          disabled={qtyGrams === 0}
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            border: '1px solid #332D25',
                            background: '#ffffff',
                            color: '#332D25',
                            cursor: qtyGrams === 0 ? 'not-allowed' : 'pointer',
                            opacity: qtyGrams === 0 ? 0.4 : 1,
                            display: 'grid',
                            placeItems: 'center'
                          }}
                        >
                          <Minus size={14} />
                        </button>

                        <span style={{ fontWeight: 800, fontSize: '13px', width: '40px', textAlign: 'center', color: '#332D25' }}>
                          {qtyGrams > 0 ? `${qtyGrams}g` : '0g'}
                        </span>

                        <button
                          onClick={() => handleAddItem(sweet.id)}
                          disabled={remainingGrams < 250}
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            border: 'none',
                            background: '#332D25',
                            color: '#B49A54',
                            cursor: remainingGrams < 250 ? 'not-allowed' : 'pointer',
                            opacity: remainingGrams < 250 ? 0.4 : 1,
                            display: 'grid',
                            placeItems: 'center'
                          }}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Greeting Note & Occasion */}
            <div>
              <h3 style={{ fontSize: '18px', color: '#332D25', marginBottom: '14px' }}>
                Step 3: Personalization & Greeting Card
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#332D25', display: 'block', marginBottom: '4px' }}>
                    Select Occasion Tag:
                  </label>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid rgba(51, 45, 37, 0.2)',
                      fontSize: '13px',
                      fontWeight: 600,
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                  >
                    <option value="Festive Celebration">🎉 Festive Celebration (Ugadi, Diwali, Sankranti)</option>
                    <option value="Wedding & Reception">💍 Wedding & Reception Gift</option>
                    <option value="Birthday & Anniversary">🎂 Birthday / Anniversary</option>
                    <option value="Corporate Gifting">💼 Corporate Gifting</option>
                    <option value="Family Visit">🏡 Special Family Visit</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#332D25', display: 'block', marginBottom: '4px' }}>
                    Custom Greeting Note (Printed inside box):
                  </label>
                  <textarea
                    rows={2}
                    placeholder="E.g., Wishing you joyful sweet moments! From Srinivas & Family"
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid rgba(51, 45, 37, 0.2)',
                      fontSize: '13px',
                      outline: 'none',
                      fontFamily: 'inherit',
                      resize: 'none'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Box Summary & Royal Preview */}
          <div style={{
            background: 'linear-gradient(135deg, #241F1A, #332D25)',
            color: '#ffffff',
            padding: '35px',
            borderRadius: '24px',
            boxShadow: '0 20px 45px rgba(51, 45, 37, 0.25)',
            border: '2px solid #B49A54',
            position: 'sticky',
            top: '100px'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: '#B49A54',
                color: '#241F1A',
                display: 'grid',
                placeItems: 'center',
                margin: '0 auto 12px'
              }}>
                <Gift size={30} />
              </div>
              <h3 style={{ fontSize: '22px', color: '#B49A54', marginBottom: '4px' }}>
                Your Royal Box Summary
              </h3>
              <p style={{ fontSize: '13px', color: '#D7C58F' }}>
                {selectedBox.label} ({occasion})
              </p>
            </div>

            {/* Content List */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '18px',
              marginBottom: '24px',
              border: '1px solid rgba(255, 255, 255, 0.12)'
            }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#B49A54', textTransform: 'uppercase', marginBottom: '10px' }}>
                Box Contents ({currentFilledGrams}g):
              </div>

              {Object.keys(selectedItems).length === 0 ? (
                <div style={{ color: '#D7C9A5', fontSize: '13px', fontStyle: 'italic', textAlign: 'center', padding: '10px 0' }}>
                  No sweets added yet. Click + next to sweets to fill your box!
                </div>
              ) : (
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {Object.entries(selectedItems).map(([id, grams]) => {
                    const s = SWEETS_DATA.find(sw => sw.id === id);
                    return (
                      <li key={id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#FFFDF8' }}>
                        <span>• {s.name}</span>
                        <span style={{ fontWeight: 700, color: '#D7C58F' }}>{grams}g</span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '16px', marginBottom: '24px', color: '#D7C58F', fontSize: '13px' }}>
              Your custom gift box is ready to add to cart.
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                onClick={handleAddBoxToCart}
                disabled={currentFilledGrams === 0}
                className="btn btn-gold"
                style={{ width: '100%', opacity: currentFilledGrams === 0 ? 0.5 : 1 }}
              >
                <ShoppingBag size={18} /> Add Custom Box To Cart
              </button>

              <button
                onClick={handleWhatsAppBoxOrder}
                disabled={currentFilledGrams === 0}
                className="btn btn-whatsapp"
                style={{ width: '100%', opacity: currentFilledGrams === 0 ? 0.5 : 1 }}
              >
                <MessageCircle size={18} /> Direct WhatsApp Box Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
