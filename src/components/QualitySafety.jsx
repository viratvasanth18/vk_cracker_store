import React from 'react';
import sparklersImg from '../assets/images/sparklers.png';

const QualitySafety = () => {
  const qualityPoints = [
    {
      title: "Quality Checked Products",
      desc: "Every item undergoes strict quality testing before packaging.",
      icon: "✓"
    },
    {
      title: "Proper Packaging",
      desc: "Products are securely packed to prevent damage during transit.",
      icon: "✓"
    },
    {
      title: "Responsible Handling",
      desc: "We follow all safety protocols in storage and transportation.",
      icon: "✓"
    },
    {
      title: "Customer Safety",
      desc: "Clear usage instructions included with every product.",
      icon: "✓"
    },
    {
      title: "Trusted Sourcing",
      desc: "Products sourced from licensed and certified manufacturers.",
      icon: "✓"
    }
  ];

  const stats = [
    { value: "500+", label: "Products" },
    { value: "15+", label: "Years" },
    { value: "10K+", label: "Customers" },
    { value: "100%", label: "Satisfaction" }
  ];

  return (
    <section className="bg-gradient-to-b from-dark-800 to-dark-900 py-12 sm:py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Content Column */}
          <div className="w-full">
            <span className="text-primary-400 font-semibold tracking-wider text-xs sm:text-sm uppercase">
              Quality Assurance
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Safety & Quality First
            </h2>
            <div className="w-16 h-1 bg-primary-500 rounded-full mb-6"></div>
            <p className="text-dark-200 mb-8 text-sm sm:text-base leading-relaxed">
              We are committed to delivering the highest quality products while ensuring uncompromising safety standards. Our dedication to excellence makes every celebration memorable and secure.
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              {qualityPoints.map((point, index) => (
                <div key={index} className="flex gap-3 sm:gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400 font-bold text-xs sm:text-base">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm sm:text-lg">{point.title}</h3>
                    <p className="text-xs sm:text-sm text-dark-300 mt-0.5 leading-normal">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual & Statistics Section */}
          <div className="w-full flex flex-col space-y-6">
            
            {/* Top Image Container - Flexible Height without Fixed Clipping */}
            <div className="rounded-2xl overflow-hidden border border-primary-500/20 gold-border-hover relative group w-full h-[220px] sm:h-[320px] lg:h-[360px] bg-dark-900/50 shadow-2xl">
              <img 
                src={sparklersImg} 
                alt="High quality sparklers" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"></div>
            </div>
            
            {/* FOUR STATISTICS BOXES — Clean 2 x 2 Grid on Mobile & Desktop, Perfectly Centered */}
            <div className="w-full">
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4 max-w-lg mx-auto w-full">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="glass rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-white/10 flex flex-col items-center justify-center text-center shadow-lg hover:border-primary-500/30 transition-all min-w-0"
                  >
                    <div className="gradient-text text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight font-heading">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-200 mt-0.5 sm:mt-1 font-medium tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default QualitySafety;
