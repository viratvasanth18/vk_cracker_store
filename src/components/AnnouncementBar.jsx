import React from 'react';

const AnnouncementBar = () => {
  const offerItem = (
    <div className="flex items-center space-x-6 sm:space-x-8 px-4 whitespace-nowrap text-xs sm:text-sm font-medium text-amber-200">
      <span className="flex items-center gap-1.5 font-bold text-amber-300">
        <span className="animate-pulse">🎆</span> VK Crackers – Diwali Special Offers
      </span>
      <span className="text-amber-500/70 font-bold">•</span>
      <span className="bg-gradient-to-r from-amber-400 to-yellow-300 text-dark-900 px-2.5 py-0.5 rounded-full font-extrabold text-[10px] sm:text-xs shadow-sm uppercase tracking-wider">
        Up to 20% OFF
      </span>
      <span className="text-amber-500/70 font-bold">•</span>
      <span className="text-gray-100 font-medium">Premium Quality Crackers</span>
      <span className="text-amber-500/70 font-bold">•</span>
      <a
        href="https://wa.me/919514407348"
        target="_blank"
        rel="noreferrer"
        className="text-emerald-400 hover:text-emerald-300 font-semibold underline decoration-emerald-500/50 underline-offset-2 flex items-center gap-1 transition-colors"
      >
        <span>💬</span> Order Now on WhatsApp
      </a>
      <span className="text-amber-500/70 font-bold">•</span>
      <span className="text-amber-300/90 font-medium flex items-center gap-1">
        Limited Time Offer 🎇
      </span>
      <span className="text-amber-400/50 text-xs px-2">✦</span>
    </div>
  );

  return (
    <div
      aria-label="Running offers announcement"
      className="fixed top-0 left-0 right-0 z-50 h-8 sm:h-9 bg-gradient-to-r from-[#1c0709] via-[#361505] to-[#1a0a02] border-b border-amber-500/30 text-white overflow-hidden select-none shadow-lg flex items-center"
    >
      <div className="w-full h-full relative flex items-center overflow-hidden">
        {/* Continuous Marquee Track */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] pointer-events-auto">
          {/* Repeating identical sets for seamless continuous infinite loop */}
          {offerItem}
          {offerItem}
          {offerItem}
          {offerItem}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
