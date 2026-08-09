import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const CartContext = createContext(null);

const CART_STORAGE_KEY = 'vk_crackers_cart';

export const CartProvider = ({ children }) => {
  /* ── Cart items: [{ productId, quantity }] ─────────────── */
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  /* ── Estimate panel visibility ─────────────────────────── */
  const [isEstimatePanelOpen, setIsEstimatePanelOpen] = useState(false);

  /* ── Selected category state for Products page ───────────── */
  const [selectedCategory, setSelectedCategory] = useState('All');

  /* Persist to localStorage on every change */
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch { /* silently fail */ }
  }, [cartItems]);

  /* ── Helpers ───────────────────────────────────────────── */
  const getItemQuantity = useCallback(
    (productId) => {
      const item = cartItems.find((i) => i.productId === productId);
      return item ? item.quantity : 0;
    },
    [cartItems],
  );

  const updateQuantity = useCallback((productId, quantity) => {
    setCartItems((prev) => {
      if (quantity <= 0) {
        return prev.filter((i) => i.productId !== productId);
      }
      const existing = prev.find((i) => i.productId === productId);
      if (existing) {
        return prev.map((i) =>
          i.productId === productId ? { ...i, quantity } : i,
        );
      }
      return [...prev, { productId, quantity }];
    });
  }, []);

  const addItem = useCallback(
    (productId) => {
      const current = getItemQuantity(productId);
      updateQuantity(productId, current + 1);
    },
    [getItemQuantity, updateQuantity],
  );

  const removeItem = useCallback(
    (productId) => {
      const current = getItemQuantity(productId);
      updateQuantity(productId, current - 1);
    },
    [getItemQuantity, updateQuantity],
  );

  const getItemCount = useCallback(() => {
    return cartItems.reduce((sum, i) => sum + i.quantity, 0);
  }, [cartItems]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const value = {
    cartItems,
    addItem,
    removeItem,
    updateQuantity,
    getItemQuantity,
    getItemCount,
    clearCart,
    isEstimatePanelOpen,
    setIsEstimatePanelOpen,
    selectedCategory,
    setSelectedCategory,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};

export default CartContext;
