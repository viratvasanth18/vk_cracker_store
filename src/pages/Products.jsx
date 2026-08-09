import React, { useState, useMemo, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import ProductCardNew from '../components/ProductCardNew';
import productsData, { productCategories } from '../data/productsData';

const Products = ({ onBack }) => {
  const { selectedCategory, setSelectedCategory } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ── Filtered products (category + search) ───────────── */
  const filteredProducts = useMemo(() => {
    let result = productsData;

    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(q));
    }

    return result;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-dark-900 text-white flex flex-col overflow-x-hidden selection:bg-primary-500 selection:text-dark-900">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack || (() => { window.location.hash = ''; })}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors mb-3 group cursor-pointer"
            aria-label="Back to Home"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Home
          </button>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
            Our <span className="gradient-text">Products</span>
          </h1>
          <p className="text-gray-300 text-xs sm:text-base mt-1.5 max-w-2xl">
            Browse our complete range of premium crackers. Select a category, search by name, and add items to your estimate.
          </p>
        </div>

        {/* Search + Category Filters */}
        <div className="space-y-4 mb-8">
          {/* Search */}
          <div className="relative max-w-md">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2.5 bg-dark-800 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 transition-colors"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {productCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-primary-500 text-dark-900 shadow-md shadow-primary-500/20'
                    : 'bg-dark-800 text-gray-300 border border-white/10 hover:border-primary-500/40 hover:text-primary-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full min-w-0">
            {filteredProducts.map((product) => (
              <div key={product.id} className="animate-fade-up flex min-w-0">
                <ProductCardNew product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🎆</div>
            <p className="text-gray-400 text-base font-medium">No products found</p>
            <p className="text-gray-500 text-sm mt-1">
              Try a different search term or category.
            </p>
          </div>
        )}
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Products;
