import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-dark-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary-400 font-semibold tracking-widest uppercase text-xs sm:text-sm block mb-2">
            Get In Touch
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <div className="section-divider mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch w-full">
          {/* Left Column - Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            <div className="glass rounded-xl p-5 sm:p-6 border border-white/5 bg-dark-800/50 backdrop-blur-sm gold-border-hover">
              <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400 font-bold mb-3">
                📍
              </div>
              <h3 className="text-white font-semibold text-base mb-1">
                Our Store
              </h3>
              <p className="text-dark-300 text-sm leading-relaxed">
                123 Fireworks Lane, Sivakasi,
                <br />
                Tamil Nadu 626123
              </p>
            </div>

            <div className="glass rounded-xl p-5 sm:p-6 border border-white/5 bg-dark-800/50 backdrop-blur-sm gold-border-hover">
              <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400 font-bold mb-3">
                💬
              </div>
              <h3 className="text-white font-semibold text-base mb-1">
                WhatsApp
              </h3>
              <a
                href="https://wa.me/919514407348"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-300 text-sm hover:text-primary-400 transition-colors block"
              >
                +91 95144 07348
              </a>
            </div>

            <div className="glass rounded-xl p-5 sm:p-6 border border-white/5 bg-dark-800/50 backdrop-blur-sm gold-border-hover">
              <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400 font-bold mb-3">
                ✉️
              </div>
              <h3 className="text-white font-semibold text-base mb-1">
                Email Us
              </h3>
              <a
                href="mailto:info@vkcrackers.com"
                className="text-dark-300 text-sm hover:text-primary-400 transition-colors block truncate"
              >
                info@vkcrackers.com
              </a>
            </div>

            <div className="glass rounded-xl p-5 sm:p-6 border border-white/5 bg-dark-800/50 backdrop-blur-sm gold-border-hover">
              <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400 font-bold mb-3">
                🕐
              </div>
              <h3 className="text-white font-semibold text-base mb-1">
                Business Hours
              </h3>
              <p className="text-dark-300 text-xs sm:text-sm leading-relaxed">
                Mon - Sat: 9AM - 8PM
                <br />
                Sunday: 10AM - 6PM
              </p>
            </div>
          </div>

          {/* Right Column - Map - Perfectly Responsive on Mobile & Desktop */}
          <div className="w-full h-full min-h-[280px] sm:min-h-[350px] lg:min-h-[100%] rounded-2xl overflow-hidden glass border border-white/10 relative bg-dark-800/50 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.0!2d77.8!3d9.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMjcnMDAuMCJOIDc3wrA0OCcwMC4wIkU!5e0!3m2!1sen!2sin!4v1234567890"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VK Crackers Store Location"
              className="w-full h-full min-h-[280px] sm:min-h-[350px] lg:min-h-full block rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
