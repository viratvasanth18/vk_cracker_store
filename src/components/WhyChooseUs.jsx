import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Premium Quality",
      desc: "Every product undergoes rigorous quality checks to ensure the best experience.",
      icon: "✦"
    },
    {
      title: "Trusted Products",
      desc: "Licensed and certified products from India's most trusted manufacturers.",
      icon: "🛡️"
    },
    {
      title: "Wide Collection",
      desc: "Over 500+ varieties of fireworks for every occasion and budget.",
      icon: "🎆"
    },
    {
      title: "Customer Satisfaction",
      desc: "10,000+ happy customers and counting. Your celebration is our priority.",
      icon: "❤️"
    }
  ];

  return (
    <section id="why-choose-us" className="bg-gradient-to-b from-dark-900 to-dark-800 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary-400 tracking-widest uppercase text-xs sm:text-sm font-semibold mb-2 block">
            Our Promise
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose VK Crackers
          </h2>
          <div className="section-divider mx-auto"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass rounded-2xl p-6 md:p-8 text-center gold-border-hover hover:-translate-y-1 transition duration-300"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary-500/10 flex items-center justify-center mx-auto mb-4 text-3xl sm:text-4xl">
                {feature.icon}
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-dark-300">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
