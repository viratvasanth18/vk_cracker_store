import React from 'react';
import heroImage from '../assets/images/hero-fireworks.png';

const Hero = () => {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-dark-900 pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-24">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-60 h-60 sm:w-96 sm:h-96 bg-primary-500/10 rounded-full blur-[90px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 sm:w-[28rem] sm:h-[28rem] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-6 text-center lg:text-left">

            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800/90 border border-primary-500/25 text-primary-400 text-xs font-medium tracking-wide shadow-md">
                <span className="text-amber-400">✦</span> Welcome to VK Crackers
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight sm:leading-[1.15] animate-fade-up delay-100 font-heading">
              <span className="text-white block">LIGHT UP YOUR</span>
              <span className="gradient-text block mt-1">CELEBRATIONS</span>
            </h1>

            <p className="text-gray-300 text-xs sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 animate-fade-up delay-200 leading-relaxed font-normal">
              Premium quality fireworks and crackers for every grand celebration. Discover our safety-tested collection crafted to make your festive moments truly bright and unforgettable.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 animate-fade-up delay-300 w-full sm:w-auto pt-1">
              <a
                href="#products"
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-primary-500 to-amber-500 text-dark-900 font-semibold rounded-full hover:scale-[1.02] transition-all shadow-lg shadow-primary-500/20 text-center text-xs sm:text-sm uppercase tracking-wider"
              >
                Explore Products
              </a>
              <a
                href="https://wa.me/919514407348"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 border border-primary-500/40 hover:border-primary-400 text-primary-400 font-semibold rounded-full hover:bg-primary-500/10 transition-all text-center text-xs sm:text-sm uppercase tracking-wider"
              >
                Order on WhatsApp
              </a>
              {/* <a
                href="#price-list"
                className="w-full sm:w-auto px-6 py-3 bg-dark-800 border border-amber-500/40 hover:border-amber-400 text-amber-300 hover:text-amber-200 font-semibold rounded-full hover:bg-amber-500/10 transition-all text-center text-xs sm:text-sm uppercase tracking-wider shadow-md"
              >
                View Price List
              </a> */}

              <a
                href="#price-list"
                className="w-full sm:w-auto px-6 py-3 border border-primary-500/40 hover:border-primary-400 text-primary-400 font-semibold rounded-full hover:bg-primary-500/10 transition-all duration-300 text-center text-xs sm:text-sm uppercase tracking-wider"
              >
                View Price List
              </a>
            </div>

            {/* Trust Stats */}
            <div className="pt-4 sm:pt-6 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4 animate-fade-up delay-400">
              {[
                { label: '500+', sub: 'Varieties' },
                { label: '100%', sub: 'Safe & Certified' },
                { label: '15+', sub: 'Years Trust' }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start glass rounded-xl p-2.5 sm:p-4 border border-white/5">
                  <span className="text-base sm:text-xl md:text-2xl font-bold text-white font-heading">{stat.label}</span>
                  <span className="text-[9px] sm:text-xs text-primary-400 font-medium uppercase tracking-wider mt-0.5">{stat.sub}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Hero Visual Image Column */}
          <div className="lg:col-span-5 relative animate-fade-in delay-300 w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl gold-border-hover group">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10 opacity-70"></div>

              <img
                src={heroImage}
                alt="VK Crackers Premium Fireworks Display"
                className="w-full h-[260px] sm:h-[380px] lg:h-[440px] object-cover rounded-2xl sm:rounded-3xl group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20 glass rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-primary-500/30 backdrop-blur-xl flex items-center justify-between">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400 text-base sm:text-xl font-bold">
                    🎆
                  </div>
                  <div>
                    <h4 className="text-white text-xs sm:text-sm font-semibold">100% Quality Tested</h4>
                    <p className="text-gray-400 text-[10px] sm:text-xs">Certified fireworks collection</p>
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-primary-400 bg-primary-500/10 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-primary-500/20">
                  VK Quality
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
