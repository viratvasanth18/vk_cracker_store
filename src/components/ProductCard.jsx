import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-dark-800 rounded-2xl overflow-hidden gold-border-hover transition-all duration-300 group flex flex-col h-full relative">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-primary-500 text-dark-900 text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-xs uppercase tracking-wider text-primary-400 font-medium mb-1">
          {product.category}
        </span>
        <h3 className="font-heading text-lg font-semibold text-white mt-1 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-dark-300 mt-2 flex-grow line-clamp-2">{product.description}</p>
        
        <div className="mt-4 flex items-center justify-between border-t border-dark-700/50 pt-4">
          <span className="text-primary-400 font-bold text-xl">
            ₹{product.price}
          </span>
          <button className="border border-primary-500/50 text-primary-400 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-primary-500 hover:text-dark-900 transition-colors duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
