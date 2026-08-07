import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-800 pt-16 pb-8 border-t border-dark-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1 - Brand */}
          <div>
            <a href="#" className="inline-flex items-center gap-2 mb-4">
              <span className="text-primary-400 text-xl">✦</span>
              <span className="font-heading gradient-text text-2xl font-bold">VK Crackers</span>
            </a>
            <p className="text-dark-300 text-sm leading-relaxed mb-6">
              Your trusted partner for premium fireworks and crackers since 2008. Making every celebration brighter and memorable.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-dark-700 hover:bg-primary-500/20 flex items-center justify-center transition-colors text-lg">
                📘
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-dark-700 hover:bg-primary-500/20 flex items-center justify-center transition-colors text-lg">
                📷
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-dark-700 hover:bg-primary-500/20 flex items-center justify-center transition-colors text-lg">
                🐦
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-dark-700 hover:bg-primary-500/20 flex items-center justify-center transition-colors text-lg">
                📺
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="text-dark-300 hover:text-primary-400 transition-colors block py-1.5 text-sm">Home</a></li>
              <li><a href="#about" className="text-dark-300 hover:text-primary-400 transition-colors block py-1.5 text-sm">About Us</a></li>
              <li><a href="#products" className="text-dark-300 hover:text-primary-400 transition-colors block py-1.5 text-sm">Products</a></li>
              <li><a href="#categories" className="text-dark-300 hover:text-primary-400 transition-colors block py-1.5 text-sm">Categories</a></li>
              <li><a href="#contact" className="text-dark-300 hover:text-primary-400 transition-colors block py-1.5 text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3 - Categories */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product Categories</h4>
            <ul className="space-y-1.5">
              <li><a href="#categories" className="text-dark-300 hover:text-primary-400 transition-colors block py-1.5 text-sm">Sparklers</a></li>
              <li><a href="#categories" className="text-dark-300 hover:text-primary-400 transition-colors block py-1.5 text-sm">Flower Pots</a></li>
              <li><a href="#categories" className="text-dark-300 hover:text-primary-400 transition-colors block py-1.5 text-sm">Rockets</a></li>
              <li><a href="#categories" className="text-dark-300 hover:text-primary-400 transition-colors block py-1.5 text-sm">Chakkars</a></li>
              <li><a href="#categories" className="text-dark-300 hover:text-primary-400 transition-colors block py-1.5 text-sm">Fountains</a></li>
              <li><a href="#categories" className="text-dark-300 hover:text-primary-400 transition-colors block py-1.5 text-sm">Gift Boxes</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 opacity-80">📍</span>
                <span className="text-dark-300 text-sm">123 Fireworks Lane, Sivakasi, Tamil Nadu 626123</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="opacity-80">💬</span>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="text-dark-300 hover:text-primary-400 transition-colors text-sm">WhatsApp Inquiry</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="opacity-80">✉️</span>
                <a href="mailto:info@vkcrackers.com" className="text-dark-300 hover:text-primary-400 transition-colors text-sm">info@vkcrackers.com</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 opacity-80">🕐</span>
                <span className="text-dark-300 text-sm">Mon - Sat: 9:00 AM - 8:00 PM<br/>Sun: 10:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-700/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-dark-400">
          <p>© {new Date().getFullYear()} VK Crackers. All rights reserved.</p>
          <p>Designed with ❤️ for celebrations</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
