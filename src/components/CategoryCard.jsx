import React from 'react';
import { useCart } from '../context/CartContext';
import { mapCategoryName } from '../data/productsData';

const CategoryCard = ({ category }) => {
  const { setSelectedCategory } = useCart();

  const handleClick = () => {
    setSelectedCategory(mapCategoryName(category.name));
    window.location.hash = '#products-page';
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-dark-800 rounded-xl sm:rounded-2xl overflow-hidden group gold-border-hover transition-all duration-300 flex flex-col h-full cursor-pointer relative min-w-0 w-full"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden shrink-0">
        <img 
          src={category.image} 
          alt={category.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-2.5 sm:p-5 flex flex-col flex-grow min-w-0 justify-between">
        <div className="mb-2">
          <h3 className="font-heading text-sm sm:text-lg font-semibold text-white mb-1 truncate">{category.name}</h3>
          <p className="text-[11px] sm:text-sm text-dark-300 line-clamp-2 leading-tight sm:leading-normal">{category.description}</p>
        </div>
        
        <div className="flex flex-nowrap items-center justify-between gap-1 sm:gap-1.5 mt-auto pt-2 border-t border-white/5 shrink-0 w-full">
          <span className="text-[9px] sm:text-[11px] md:text-xs font-semibold text-primary-400 bg-primary-400/10 px-1.5 sm:px-2 py-0.5 rounded w-fit shrink-0 whitespace-nowrap">
            {category.count}+ Products
          </span>
          <span className="text-[10px] sm:text-xs md:text-xs lg:text-sm text-primary-400 group-hover:text-primary-500 transition-colors inline-flex items-center gap-0.5 font-medium shrink-0 whitespace-nowrap">
            View <span className="hidden min-[1201px]:inline">Collection</span> <span className="transform transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
