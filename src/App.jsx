import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import WishlistModal from './components/WishlistModal';
import QuickViewModal from './components/QuickViewModal';
import Toast from './components/Toast';
import FloatingActions from './components/FloatingActions';

// 5 Page Views Matching attached Image 0:
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home'); // 'home', 'menu', 'services', 'gallery', 'contact'
  const [cartItems, setCartItems] = useState([]);
  const [wishlistIds, setWishlistIds] = useState([]);
  const [quickViewSweet, setQuickViewSweet] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 2800);
  };

  const handleAddToCart = (sweet, weightObj) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.sweet.id === sweet.id && item.weight.label === weightObj.label
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...prevItems, { sweet, weight: weightObj, quantity: 1 }];
      }
    });

    showToast(`Added ${sweet.name} (${weightObj.label}) to Cart!`);
  };

  const handleUpdateQuantity = (sweetId, weightLabel, delta) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.sweet.id === sweetId && item.weight.label === weightLabel) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const handleRemoveItem = (sweetId, weightLabel) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.sweet.id === sweetId && item.weight.label === weightLabel))
    );
    showToast('Item removed from cart');
  };

  const handleToggleWishlist = (sweetId) => {
    setWishlistIds((prev) => {
      if (prev.includes(sweetId)) {
        showToast('Removed from wishlist');
        return prev.filter((id) => id !== sweetId);
      } else {
        showToast('Added to your Wishlist ❤️');
        return [...prev, sweetId];
      }
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fbf5e8' }}>
      {/* Navbar with Logo Crest & 5 Page Tabs */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
      />

      {/* Dynamic 5 Page Switcher */}
      <main style={{ flex: 1 }}>
        {activePage === 'home' && (
          <HomePage
            setActivePage={setActivePage}
            onAddToCart={handleAddToCart}
            onOpenQuickView={(sweet) => setQuickViewSweet(sweet)}
          />
        )}

        {activePage === 'menu' && (
          <MenuPage
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
            onOpenQuickView={(sweet) => setQuickViewSweet(sweet)}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage setActivePage={setActivePage} />
        )}

        {activePage === 'gallery' && (
          <GalleryPage />
        )}

        {activePage === 'contact' && (
          <ContactPage onAddToCart={handleAddToCart} />
        )}
      </main>

      {/* Footer */}
      <Footer setActivePage={setActivePage} />

      {/* Slide-Over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Quick View Sweet Modal */}
      <QuickViewModal
        sweet={quickViewSweet}
        onClose={() => setQuickViewSweet(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Wishlist Modal */}
      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlistIds}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onClearCart={handleClearCart}
      />

      {/* Floating Action Buttons */}
      <FloatingActions />

      {/* Toast Notification */}
      <Toast message={toastMessage} isVisible={isToastVisible} />
    </div>
  );
}
