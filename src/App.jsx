import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import PriceList from './pages/PriceList';

function App() {
  const [currentRoute, setCurrentRoute] = useState(() => {
    return window.location.hash === '#price-list' ? 'price-list' : 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#price-list') {
        setCurrentRoute('price-list');
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

  if (currentRoute === 'price-list') {
    return <PriceList onBack={handleBack} />;
  }

  return <Home />;
}

export default App;
