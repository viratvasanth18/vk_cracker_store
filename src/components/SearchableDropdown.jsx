import React, { useState, useEffect, useRef } from 'react';

const SearchableDropdown = ({
  label,
  placeholder = 'Select...',
  searchPlaceholder = 'Search...',
  options = [],
  value = '',
  onChange,
  disabled = false,
  disabledMessage = '',
  hasError = false,
  name,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef(null);
  const searchInputRef = useRef(null);

  /* Close when clicking outside */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /* Focus search input when dropdown opens */
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(search.trim().toLowerCase()),
  );

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
    setSearch('');
  };

  const handleClear = (e) => {
    e.stopPropagation();
    onChange('');
    setSearch('');
  };

  return (
    <div ref={containerRef} className="relative w-full text-left" id={`field-${name}`}>
      {label && (
        <label className="block text-xs font-medium text-gray-300 mb-1">
          {label}
        </label>
      )}

      {/* Trigger Box */}
      <div
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`w-full bg-dark-800 border rounded-lg px-3 py-2.5 text-sm text-white flex items-center justify-between transition-all select-none ${
          disabled
            ? 'opacity-50 cursor-not-allowed border-white/5 bg-dark-800/50'
            : 'cursor-pointer hover:border-primary-500/40'
        } ${
          hasError
            ? 'border-accent-red ring-1 ring-accent-red/50'
            : isOpen
            ? 'border-primary-500 ring-1 ring-primary-500/50'
            : 'border-white/10'
        }`}
      >
        <span className={`truncate ${!value ? 'text-gray-500' : 'text-white'}`}>
          {disabled
            ? disabledMessage || placeholder
            : value || placeholder}
        </span>

        <div className="flex items-center gap-1 shrink-0 ml-1">
          {value && !disabled && (
            <button
              type="button"
              onClick={handleClear}
              className="w-4 h-4 rounded-full hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center text-xs transition-colors"
              aria-label="Clear selection"
            >
              ✕
            </button>
          )}
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-primary-400' : ''}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && !disabled && (
        <div className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-dark-800 border border-primary-500/30 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl animate-fade-in">
          {/* Search Input */}
          <div className="p-2 border-b border-white/10 bg-dark-900/90 sticky top-0 z-10">
            <div className="relative">
              <input
                ref={searchInputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={searchPlaceholder}
                className="w-full pl-8 pr-3 py-1.5 bg-dark-800 border border-white/10 rounded-md text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/60"
                onClick={(e) => e.stopPropagation()}
              />
              <svg
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
          </div>

          {/* Options List */}
          <div className="max-h-48 overflow-y-auto divide-y divide-white/5 text-xs sm:text-sm">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt) => (
                <div
                  key={opt}
                  onClick={() => handleSelect(opt)}
                  className={`px-3 py-2.5 cursor-pointer transition-colors flex items-center justify-between ${
                    value === opt
                      ? 'bg-primary-500/20 text-primary-400 font-semibold'
                      : 'text-gray-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>{opt}</span>
                  {value === opt && (
                    <span className="text-primary-400 font-bold">✓</span>
                  )}
                </div>
              ))
            ) : (
              <div className="px-3 py-3 text-center text-gray-400 text-xs">
                No matching results
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;
