import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div className="bg-dark-800 rounded-xl sm:rounded-2xl overflow-hidden group gold-border-hover transition-all duration-300 flex flex-col h-full cursor-pointer relative min-w-0 w-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden shrink-0">
        <img 
          src={category.image} 
          alt={category.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-2.5 sm:p-5 flex flex-col flex-grow min-w-0 justify-between">
        <div>
          <h3 className="font-heading text-sm sm:text-lg font-semibold text-white mb-1 truncate">{category.name}</h3>
          <p className="text-[11px] sm:text-sm text-dark-300 mb-3 line-clamp-2 leading-tight sm:leading-normal">{category.description}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mt-auto pt-2 border-t border-white/5">
          <span className="text-[9px] sm:text-xs font-semibold text-primary-400 bg-primary-400/10 px-1.5 sm:px-2 py-0.5 rounded w-fit">
            {category.count}+ Products
          </span>
          <span className="text-[10px] sm:text-sm text-primary-400 group-hover:text-primary-500 transition-colors inline-flex items-center gap-0.5 font-medium">
            View <span className="hidden sm:inline">Collection</span> <span className="transform transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
