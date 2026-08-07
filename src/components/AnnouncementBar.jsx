import React, { useState } from 'react';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-dark-800 to-dark-900 border-b border-dark-700/50 py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center relative">
        <p className="text-primary-400 text-xs sm:text-sm font-medium text-center font-body px-8">
          🎆 <span className="hidden sm:inline">Special Festive Season Sale —</span> Up to 40% Off on Premium Collections! ✦
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-0 text-primary-400/70 hover:text-primary-400 transition-colors p-1"
          aria-label="Close announcement"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
