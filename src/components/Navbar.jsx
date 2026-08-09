import React, { useState, useEffect } from "react";
import { useCart } from '../context/CartContext';

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Categories", href: "#categories" },
  { name: "Products", href: "#products-page" },
  { name: "Why Us", href: "#why-choose-us" },
  { name: "Contact", href: "#contact" },
];

/* ── Cart Icon SVG Component ─────────────────────────────── */
const CartIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    />
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getItemCount, setIsEstimatePanelOpen, setSelectedCategory } = useCart();
  const cartItemCount = getItemCount();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Reusable cart button (shared between desktop & mobile) */
  const CartButton = ({ extraClass = "" }) => (
    <button
      onClick={() => setIsEstimatePanelOpen(true)}
      className={`relative p-2 rounded-lg text-gray-200 hover:text-primary-400 hover:bg-white/10 transition-colors focus:outline-none ${extraClass}`}
      aria-label={`Shopping cart${cartItemCount > 0 ? `, ${cartItemCount} items` : ""}`}
    >
      <CartIcon />
      {cartItemCount > 0 && (
        <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-accent-red text-white text-[10px] font-bold leading-none px-1 shadow-md shadow-accent-red/40 pointer-events-none">
          {cartItemCount > 99 ? "99+" : cartItemCount}
        </span>
      )}
    </button>
  );

  return (
    <header
      className={`fixed top-8 sm:top-9 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-dark-900/98 backdrop-blur-xl border-b border-primary-500/20 py-2.5 sm:py-3 shadow-xl shadow-black/60"
          : "bg-gradient-to-b from-dark-900/95 via-dark-900/70 to-transparent py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between gap-2 w-full">
          {/* Left Side: Logo + Brand Name (Responsive shrink & font size) */}
          <a
            href="#home"
            className="flex items-center gap-2 group focus:outline-none min-w-0 shrink"
            aria-label="VK Crackers Home"
          >
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary-400 to-amber-600 flex items-center justify-center text-dark-900 font-extrabold text-xs sm:text-base shadow-md shadow-primary-500/20 group-hover:scale-105 transition-transform shrink-0">
              ✦
            </div>
            <div className="flex flex-col min-w-0 truncate">
              <span className="font-bold text-base sm:text-xl md:text-2xl tracking-tight text-white font-heading leading-tight truncate">
                VK <span className="gradient-text">Crackers</span>
              </span>
              <span className="text-[8px] sm:text-[10px] font-medium tracking-widest text-primary-400/80 uppercase -mt-0.5 truncate">
                Premium Fireworks
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links + Cart Icon */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  if (link.href === "#products-page") {
                    setSelectedCategory("All");
                  }
                }}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-300 hover:text-primary-400 hover:bg-white/5 transition-all"
              >
                {link.name}
              </a>
            ))}

            {/* Cart icon – desktop (after last nav link) */}
            <div className="ml-2">
              <CartButton />
            </div>
          </nav>

          {/* Right Side: Cart (mobile) + WhatsApp CTA (desktop) + Hamburger (mobile) */}
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
            {/* WhatsApp CTA Button - DESKTOP ONLY */}
            <a
              href="https://wa.me/919514407348"
              target="_blank"
              rel="noreferrer"
              className="hidden lg:inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20b858] text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md shadow-[#25D366]/20 hover:scale-[1.02] whitespace-nowrap"
            >
              Order on WhatsApp
            </a>

            {/* Cart icon – mobile (immediately left of hamburger) */}
            <div className="lg:hidden">
              <CartButton />
            </div>

            {/* Mobile Hamburger Toggle Button - ALWAYS VISIBLE ON MOBILE */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none shrink-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between items-center">
                <span
                  className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                />
                <span
                  className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Opens cleanly below fixed navbar, scrollable max-h if small screen height) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-dark-900/98 border-t border-primary-500/20 border-b border-primary-500/20 shadow-2xl animate-fade-in max-h-[85vh] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col divide-y divide-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (link.href === "#products-page") {
                    setSelectedCategory("All");
                  }
                }}
                className="py-2.5 text-sm font-medium text-gray-200 hover:text-primary-400 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-primary-400/50">→</span>
              </a>
            ))}

            {/* Order on WhatsApp Button inside Mobile Menu (AFTER Contact Link) */}
            <div className="pt-3.5 pb-1">
              <a
                href="https://wa.me/919514407348"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center bg-[#25D366] hover:bg-[#20b858] text-white py-3 rounded-full text-sm font-semibold transition-all shadow-md shadow-[#25D366]/20 active:scale-95 text-center"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
