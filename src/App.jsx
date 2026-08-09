import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import PriceList from './pages/PriceList';
import Products from './pages/Products';
import EstimatePanel from './components/EstimatePanel';

function App() {
  const [currentRoute, setCurrentRoute] = useState(() => {
    const hash = window.location.hash;
    if (hash === '#price-list') return 'price-list';
    if (hash === '#products-page') return 'products-page';
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#price-list') {
        setCurrentRoute('price-list');
        window.scrollTo(0, 0);
      } else if (hash === '#products-page') {
        setCurrentRoute('products-page');
        window.scrollTo(0, 0);
      } else {
        setCurrentRoute('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleBack = () => {
    window.location.hash = '';
    setCurrentRoute('home');
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentRoute) {
      case 'price-list':
        return <PriceList onBack={handleBack} />;
      case 'products-page':
        return <Products onBack={handleBack} />;
      default:
        return <Home />;
    }
  };

  return (
    <CartProvider>
      {renderPage()}
      <EstimatePanel />
    </CartProvider>
  );
}

export default App;

