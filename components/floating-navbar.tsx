"use client";

import React, { useEffect, useState } from 'react';

export const FloatingNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
      ? 'bg-gray-800/90 backdrop-blur-md shadow-lg mx-4 mt-4 rounded-full border border-gray-700/50'
      : 'bg-gray-800/70 backdrop-blur-sm border-b border-gray-700/30'
      }`}>
      <div className={`max-w-7xl mx-auto transition-all duration-300 ${isScrolled ? 'px-6 py-3' : 'px-8 py-4'
        }`}>
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className={`text-white font-ancizar transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'
            }`}>
            Dr. Chintan Dave
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center transition-all duration-300 space-x-6">
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-md font-medium"
            >
              Credentials
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-md font-medium"
            >
              Consulting
            </a>
            <a
              href="#research"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-md font-medium"
            >
              Being Human
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-md font-medium"
            >
              Media
            </a>

            {/* CTA Button */}
            <button className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-medium transition-all duration-200 shadow-md rounded-full px-4 py-2 text-md">
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-gray-800/95 backdrop-blur-md border-t border-gray-700/50 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0 overflow-hidden'
          }`}
      >
        <div className="flex flex-col space-y-4 px-8">
          <a
            href="#about"
            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            About
          </a>
          <a
            href="#services"
            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            Services
          </a>
          <a
            href="#research"
            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            Research
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            Contact
          </a>

          {/* Mobile CTA Button */}
          <button className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-medium transition-all duration-200 shadow-md rounded-full py-2 text-sm w-full">
            Book Consultation
          </button>
        </div>
      </div>
    </nav>
  );
};