import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/products';

const FeaturedProducts = () => {
  return (
    <section id="featured" className="bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-up">
          <span className="text-primary-400 tracking-widest uppercase text-sm font-semibold mb-2 block">
            Featured Collection
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Our Best Sellers
          </h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="text-dark-300 max-w-2xl mx-auto text-sm md:text-base">
            Experience the magic with our most popular and highly-rated fireworks. Guaranteed to make your celebrations unforgettable and spectacular.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="animate-fade-up">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-up">
          <button className="inline-flex items-center justify-center bg-primary-500 text-dark-900 font-semibold px-8 py-3 rounded-full hover:bg-primary-400 transition-colors duration-300 group shadow-[0_0_15px_rgba(212,168,67,0.3)] hover:shadow-[0_0_25px_rgba(240,192,64,0.5)]">
            View All Products <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
