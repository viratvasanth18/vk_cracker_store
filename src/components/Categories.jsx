import React from 'react';
import CategoryCard from './CategoryCard';
import categories from '../data/categories';

const Categories = () => {
  return (
    <section id="categories" className="bg-dark-900 py-12 sm:py-16 md:py-24 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-up max-w-3xl mx-auto px-2">
          <span className="text-primary-400 tracking-widest uppercase text-xs sm:text-sm font-semibold mb-1 sm:mb-2 block">
            Our Collection
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Browse Categories
          </h2>
          <div className="section-divider mx-auto mb-4 sm:mb-6"></div>
          <p className="text-dark-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Discover our extensive range of premium fireworks carefully curated for every celebration. From dazzling aerial displays to delightful sparklers, find exactly what you need to light up the night.
          </p>
        </div>

        {/* Categories 2-Column Grid on Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 w-full">
          {categories.map((category) => (
            <div key={category.id} className="animate-fade-up min-w-0 flex">
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
