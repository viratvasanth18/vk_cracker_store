import React, { useEffect } from 'react';
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

const PriceList = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pdfUrl = '/price-list.pdf';

  return (
    <div className="min-h-screen bg-dark-900 text-white flex flex-col overflow-x-hidden selection:bg-primary-500 selection:text-dark-900">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Navigation & Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <button
              onClick={onBack || (() => { window.location.hash = ''; })}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors mb-3 group cursor-pointer"
              aria-label="Back to Home"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Home
            </button>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
              VK Crackers <span className="gradient-text">Price List</span>
            </h1>
            <p className="text-gray-300 text-xs sm:text-base mt-1.5 max-w-2xl">
              Browse our complete price catalog for 2026 festive fireworks. You can view the full document below or download a copy.
            </p>
          </div>

          {/* Action Buttons Header */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href={pdfUrl}
              download="VK_Crackers_Price_List_2026.pdf"
              className="px-6 py-3 bg-gradient-to-r from-primary-500 to-amber-500 text-dark-900 font-semibold rounded-full hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary-500/20 text-center text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
            <a
              href="https://wa.me/919999999999?text=Hi%20VK%20Crackers,%20I%20saw%20your%20Price%20List%20and%20would%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 border border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:bg-emerald-500/10 font-semibold rounded-full transition-all text-center text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span className="text-base">💬</span> Order on WhatsApp
            </a>
          </div>
        </div>

        {/* PDF Viewer Container */}
        <div className="bg-dark-800/80 border border-primary-500/30 rounded-2xl p-2.5 sm:p-5 shadow-2xl backdrop-blur-xl mb-10 w-full overflow-hidden">
          <div className="flex items-center justify-between px-2 pb-3 mb-3 border-b border-white/10 text-xs text-gray-400">
            <span className="flex items-center gap-2 font-medium text-gray-300">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              Document Viewer: VK Crackers Official Catalog
            </span>
            <a
              href={pdfUrl}
              download="VK_Crackers_Price_List_2026.pdf"
              className="hidden sm:inline-flex items-center gap-1 text-primary-400 hover:underline text-xs"
            >
              Save File 📥
            </a>
          </div>

          {/* Embedded PDF iframe */}
          <div className="w-full relative rounded-xl overflow-hidden bg-dark-900 border border-white/5 shadow-inner">
            <iframe
              src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
              title="VK Crackers Complete Price List PDF"
              className="w-full h-[580px] sm:h-[720px] lg:h-[820px] border-0 block"
              loading="lazy"
            />
          </div>

          {/* Direct Download Banner inside container for mobile accessibility */}
          <div className="mt-4 p-3.5 bg-dark-900/90 border border-white/10 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="text-xs text-gray-300">
              <p className="font-semibold text-white">Can't see the document clearly?</p>
              <p className="text-gray-400 text-[11px]">Download the original PDF file to view offline or print.</p>
            </div>
            <a
              href={pdfUrl}
              download="VK_Crackers_Price_List_2026.pdf"
              className="w-full sm:w-auto px-4 py-2 bg-primary-500/20 hover:bg-primary-500/30 border border-primary-500/40 text-primary-400 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
            >
              📥 Download PDF (Direct Link)
            </a>
          </div>
        </div>

        {/* Structured Readable Summary Table for extra scrollability on Mobile */}
        <div className="bg-dark-800/40 border border-white/10 rounded-2xl p-4 sm:p-6 mb-8">
          <h2 className="text-lg sm:text-xl font-bold font-heading text-white mb-3 flex items-center gap-2">
            <span>✨</span> Quick Price Overview
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mb-4">
            Highlights from the 2026 price list. For full product details and terms, download the PDF above.
          </p>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left text-xs sm:text-sm text-gray-300">
              <thead className="bg-dark-800 text-primary-400 font-heading text-[11px] uppercase tracking-wider border-b border-white/10">
                <tr>
                  <th scope="col" className="px-4 py-3">Category / Product</th>
                  <th scope="col" className="px-4 py-3">Specification</th>
                  <th scope="col" className="px-4 py-3 text-right">Price (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-dark-900/60">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-white">Mega Sparklers</td>
                  <td className="px-4 py-2.5 text-gray-400">10 Pcs Pack</td>
                  <td className="px-4 py-2.5 text-right font-bold text-amber-400">₹120</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-white">Golden Electric Sparklers</td>
                  <td className="px-4 py-2.5 text-gray-400">10 Pcs Pack</td>
                  <td className="px-4 py-2.5 text-right font-bold text-amber-400">₹150</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-white">Ground Chakkar Deluxe</td>
                  <td className="px-4 py-2.5 text-gray-400">10 Pcs Pack</td>
                  <td className="px-4 py-2.5 text-right font-bold text-amber-400">₹180</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-white">Premium Flower Pot</td>
                  <td className="px-4 py-2.5 text-gray-400">10 Pcs Pack</td>
                  <td className="px-4 py-2.5 text-right font-bold text-amber-400">₹250</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-white">Celebration Rocket</td>
                  <td className="px-4 py-2.5 text-gray-400">10 Pcs Pack</td>
                  <td className="px-4 py-2.5 text-right font-bold text-amber-400">₹350</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-white">Color Fountain</td>
                  <td className="px-4 py-2.5 text-gray-400">5 Pcs Pack</td>
                  <td className="px-4 py-2.5 text-right font-bold text-amber-400">₹450</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-white">Fancy Tri-Color Fountain</td>
                  <td className="px-4 py-2.5 text-gray-400">2 Pcs Pack</td>
                  <td className="px-4 py-2.5 text-right font-bold text-amber-400">₹520</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-white">Family Joy Gift Box</td>
                  <td className="px-4 py-2.5 text-gray-400">Assorted Pack</td>
                  <td className="px-4 py-2.5 text-right font-bold text-amber-400">₹1,499</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-white">Premium Celebration Box</td>
                  <td className="px-4 py-2.5 text-gray-400">Assorted Bestseller</td>
                  <td className="px-4 py-2.5 text-right font-bold text-amber-400">₹2,499</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default PriceList;
