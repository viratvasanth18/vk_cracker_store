import React from "react";

const CTA = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-28 bg-dark-900">
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500/10 via-dark-900 to-dark-900"></div>

      {/* Decorative stars */}
      <div className="absolute top-10 left-[20%] text-primary-400/40 animate-pulse text-xl sm:text-2xl">
        ✨
      </div>
      <div
        className="absolute bottom-20 right-[15%] text-primary-400/40 animate-pulse text-2xl sm:text-3xl"
        style={{ animationDelay: "1s" }}
      >
        ✨
      </div>
      <div
        className="absolute top-32 right-[25%] text-primary-400/20 animate-pulse text-lg sm:text-xl"
        style={{ animationDelay: "0.5s" }}
      >
        ✦
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 animate-fade-up">
          Make Your Celebration Brighter
        </h2>
        <p
          className="text-dark-200 text-sm sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto animate-fade-up leading-relaxed"
          style={{ animationDelay: "0.1s" }}
        >
          Explore our premium collection of fireworks and make every celebration
          a memorable spectacle with VK Crackers.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-up w-full sm:w-auto flex-wrap"
          style={{ animationDelay: "0.2s" }}
        >
          <a
            href="#products"
            className="w-full sm:w-auto bg-primary-500 text-dark-900 rounded-full px-7 py-3.5 text-xs sm:text-sm font-semibold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(212,168,67,0.3)] inline-block text-center uppercase tracking-wider"
          >
            Explore Products
          </a>
          <a
            href="https://wa.me/919514407348"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] text-white rounded-full px-7 py-3.5 text-xs sm:text-sm font-semibold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(37,211,102,0.3)] inline-block text-center uppercase tracking-wider"
          >
            Order on WhatsApp
          </a>
          <a
            href="#price-list"
            className="w-full sm:w-auto bg-dark-800 border border-amber-500/40 text-amber-300 rounded-full px-7 py-3.5 text-xs sm:text-sm font-semibold hover:scale-105 transition-transform duration-300 shadow-md inline-block text-center uppercase tracking-wider"
          >
            View Price List
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
