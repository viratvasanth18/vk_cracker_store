import React, { useState } from 'react';
import ProductCard from './ProductCard';
import categories from '../data/categories';
import products from '../data/products';

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Handle formats where categories could be strings or objects { id, name }
  const categoryNames = ['All', ...(Array.isArray(categories) ? categories.map(c => c.name || c) : [])];

  // Handle format where products might have a 'category' property
  const filteredProducts = activeCategory === 'All' 
    ? (Array.isArray(products) ? products : [])
    : (Array.isArray(products) ? products.filter(product => product.category === activeCategory) : []);

  return (
    <section id="products" className="bg-dark-900 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="text-primary-400 tracking-widest uppercase text-sm font-semibold mb-2 block">
            Explore
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Our Premium Collection
          </h2>
          <div className="section-divider mx-auto"></div>
        </div>

        {/* Filter Tabs */}
        <div 
          className="flex overflow-x-auto gap-2 pb-4 mb-8 sm:mb-12 scrollbar-hide" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categoryNames.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                activeCategory === cat
                  ? 'bg-primary-500 text-dark-900 shadow-md shadow-primary-500/20'
                  : 'glass text-dark-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up"
          key={activeCategory} // Forces re-animation when category changes
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, idx) => (
              <ProductCard key={product.id || idx} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center text-dark-300 py-12">
              No products found in this category.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;
