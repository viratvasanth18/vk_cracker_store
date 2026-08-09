import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCardNew = ({ product }) => {
  const { getItemQuantity, addItem, removeItem } = useCart();
  const qty = getItemQuantity(product.id);

  return (
    <div className="bg-dark-800 rounded-xl sm:rounded-2xl overflow-hidden gold-border-hover transition-all duration-300 group flex flex-col h-full relative min-w-0 w-full">
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-dark-900 shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* 80% OFF Badge */}
        <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-accent-red text-white text-[9px] sm:text-xs font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-lg tracking-wide shrink-0 z-10">
          80% OFF
        </span>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-5 flex flex-col flex-grow min-w-0">
        {/* Name */}
        <h3 className="font-heading text-xs sm:text-base font-semibold text-white line-clamp-2 leading-tight sm:leading-snug min-h-[2rem] sm:min-h-[2.75rem] mb-0.5">
          {product.name}
        </h3>

        {/* Unit */}
        <span className="text-[10px] sm:text-xs text-dark-300 mb-1 block">{product.unit}</span>

        {/* Pricing */}
        <div className="mt-auto pt-2 sm:pt-3 flex flex-wrap items-baseline gap-1.5 sm:gap-2.5 min-w-0">
          <span className="text-gray-500 text-xs sm:text-sm line-through shrink-0 whitespace-nowrap">
            ₹{product.originalPrice.toLocaleString('en-IN')}
          </span>
          <span className="text-primary-400 font-bold text-sm sm:text-lg md:text-xl shrink-0 whitespace-nowrap">
            ₹{product.offerPrice.toLocaleString('en-IN')}
          </span>
        </div>

        {/* Quantity Controls */}
        <div className="mt-2.5 sm:mt-4 pt-2.5 sm:pt-3 border-t border-dark-700/50 shrink-0">
          {qty === 0 ? (
            <button
              onClick={() => addItem(product.id)}
              className="w-full py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold border border-primary-500/50 text-primary-400 hover:bg-primary-500 hover:text-dark-900 transition-colors duration-300 cursor-pointer text-center truncate"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center justify-between gap-1">
              <button
                onClick={() => removeItem(product.id)}
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-dark-700 hover:bg-dark-600 text-white flex items-center justify-center text-sm sm:text-lg font-bold transition-colors cursor-pointer shrink-0"
                aria-label={`Decrease quantity of ${product.name}`}
              >
                −
              </button>
              <span className="text-white font-semibold text-xs sm:text-base px-1 text-center truncate">
                {qty}
              </span>
              <button
                onClick={() => addItem(product.id)}
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-primary-500 hover:bg-primary-400 text-dark-900 flex items-center justify-center text-sm sm:text-lg font-bold transition-colors cursor-pointer shrink-0"
                aria-label={`Increase quantity of ${product.name}`}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCardNew;
