import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import WishlistModal from './components/WishlistModal';
import QuickViewModal from './components/QuickViewModal';
import Toast from './components/Toast';
import FloatingActions from './components/FloatingActions';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import SavouriesPage from './pages/SavouriesPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [wishlistIds, setWishlistIds] = useState([]);
  const [quickViewSweet, setQuickViewSweet] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setIsToastVisible(true);
    window.setTimeout(() => setIsToastVisible(false), 2800);
  };

  const handleAddToCart = (sweet, weightObj, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.sweet.id === sweet.id && item.weight.label === weightObj.label,
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      return [...prevItems, { sweet, weight: weightObj, quantity }];
    });

    showToast(`Added ${sweet.name} (${weightObj.label}) to Cart!`);
  };

  const handleUpdateQuantity = (sweetId, weightLabel, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.sweet.id === sweetId && item.weight.label === weightLabel) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean),
    );
  };

  const handleRemoveItem = (sweetId, weightLabel) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.sweet.id === sweetId && item.weight.label === weightLabel),
      ),
    );
    showToast('Item removed from cart');
  };

  const handleToggleWishlist = (sweetId) => {
    setWishlistIds((prev) => {
      if (prev.includes(sweetId)) {
        showToast('Removed from wishlist');
        return prev.filter((id) => id !== sweetId);
      }

      showToast('Added to your Wishlist ❤️');
      return [...prev, sweetId];
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="site-app">
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
      />

      <main className="page-main">
        {activePage === 'home' && (
          <HomePage
            setActivePage={setActivePage}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
            onOpenQuickView={(sweet) => setQuickViewSweet(sweet)}
          />
        )}

        {activePage === 'about' && <AboutPage setActivePage={setActivePage} />}

        {activePage === 'menu' && (
          <MenuPage
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
            onOpenQuickView={(sweet) => setQuickViewSweet(sweet)}
          />
        )}

        {activePage === 'savouries' && (
          <SavouriesPage
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
            onOpenQuickView={(sweet) => setQuickViewSweet(sweet)}
          />
        )}

        {activePage === 'services' && <ServicesPage setActivePage={setActivePage} />}
        {activePage === 'gallery' && (
          <GalleryPage
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
            onOpenQuickView={(sweet) => setQuickViewSweet(sweet)}
          />
        )}
        {activePage === 'contact' && <ContactPage />}
      </main>

      <Footer setActivePage={setActivePage} />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedCheckout={() => setIsCheckoutOpen(true)}
      />

      <QuickViewModal
        sweet={quickViewSweet}
        onClose={() => setQuickViewSweet(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewSweet ? wishlistIds.includes(quickViewSweet.id) : false}
      />

      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlistIds}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onClearCart={handleClearCart}
      />

      <FloatingActions />
      <Toast message={toastMessage} isVisible={isToastVisible} />
    </div>
  );
}
