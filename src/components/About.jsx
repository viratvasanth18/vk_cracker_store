import React from 'react';
import aboutImage from '../assets/images/hero-fireworks.png';

const About = () => {
  return (
    <section id="about" className="bg-dark-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Image Column */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <img 
              src={aboutImage} 
              alt="About VK Crackers" 
              className="relative w-full rounded-2xl shadow-xl aspect-[4/3] md:aspect-auto object-cover border border-primary-500/20"
            />
          </div>

          {/* Text Column */}
          <div className="flex flex-col space-y-6">
            <div>
              <span className="text-primary-400 tracking-widest uppercase text-xs sm:text-sm font-semibold mb-2 block">
                About VK Crackers
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Bringing Joy to Every Celebration Since 2008
              </h2>
              <div className="section-divider ml-0"></div>
            </div>

            <div className="text-dark-300 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                At VK Crackers, we believe every celebration deserves the finest fireworks. Our passion is illuminating your special moments with spectacular colors and joy.
              </p>
              <p>
                With years of experience, we provide a wide collection of safety-tested, high-quality crackers from trusted manufacturers. We ensure your celebrations are not just bright, but entirely safe and memorable.
              </p>
            </div>

            <ul className="space-y-3 pt-2">
              {[
                'Premium quality products',
                'Safety tested & certified',
                'Wide range of collections',
                'Customer satisfaction guaranteed',
                'Reliable & secure packaging'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-primary-400 text-base sm:text-lg">✦</span>
                  <span className="text-dark-200 text-xs sm:text-sm">{item}</span>
                </li>
              ))}
            </ul>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
