"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const FloatingNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-[var(--bg-card)]/90 backdrop-blur-md shadow-lg mx-4 mt-4 rounded-full border border-[var(--border-light)]"
          : "bg-[var(--bg-card)]/70 backdrop-blur-sm border-b border-[var(--border-medium)]"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 ${
          isScrolled ? "px-6 py-3" : "px-8 py-4"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div
            className={`text-[var(--dark-blue)] font-helvetica transition-all duration-300 ${
              isScrolled ? "text-lg" : "text-xl"
            }`}
          >
            <a href="/">
              <Image src="/logo.png" alt="Logo" width={100} height={100} />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center transition-all duration-300 space-x-6">
            <a
              href="/credentials"
              className={`transition-colors duration-200 text-md font-bold relative ${
                pathname === "/credentials"
                  ? "text-[var(--dark-blue)]"
                  : "text-[var(--text-medium)] hover:text-[var(--dark-blue)]"
              }`}
            >
              Credentials
              {pathname === "/credentials" && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--accent-blue)] rounded-full" />
              )}
            </a>
            {/* <a
              href="/consulting"
              className={`transition-colors duration-200 text-md font-medium relative ${
                pathname === "/consulting"
                  ? "text-[var(--dark-blue)]"
                  : "text-[var(--text-medium)] hover:text-[var(--dark-blue)]"
              }`}
            >
              Consulting
              {pathname === "/consulting" && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--accent-blue)] rounded-full" />
              )}
            </a> */}
            <a
              href="/being-human"
              className={`transition-colors duration-200 text-md font-bold relative ${
                pathname === "/being-human"
                  ? "text-[var(--dark-blue)]"
                  : "text-[var(--text-medium)] hover:text-[var(--dark-blue)]"
              }`}
            >
              Being Human
              {pathname === "/being-human" && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--accent-blue)] rounded-full" />
              )}
            </a>
            <a
              href="/media"
              className={`transition-colors duration-200 text-md font-bold relative ${
                pathname === "/media"
                  ? "text-[var(--dark-blue)]"
                  : "text-[var(--text-medium)] hover:text-[var(--dark-blue)]"
              }`}
            >
              Media
              {pathname === "/media" && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--accent-blue)] rounded-full" />
              )}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[var(--dark-blue)] p-2"
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
        className={`md:hidden absolute top-full left-0 right-0 bg-[#f8f5f0] border-t border-gray-200 transition-all duration-300 ease-in-out shadow-lg ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100 py-4"
            : "max-h-0 opacity-0 py-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col space-y-4 px-8">
          <a
            href="/credentials"
            className={`transition-colors duration-200 text-sm font-medium relative ${
              pathname === "/credentials"
                ? "text-[var(--dark-blue)]"
                : "text-[var(--text-medium)] hover:text-[var(--dark-blue)]"
            }`}
          >
            Credentials
            {pathname === "/credentials" && (
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--accent-blue)] rounded-full" />
            )}
          </a>
          <a
            href="/consulting"
            className={`transition-colors duration-200 text-sm font-medium relative ${
              pathname === "/consulting"
                ? "text-[var(--dark-blue)]"
                : "text-[var(--text-medium)] hover:text-[var(--dark-blue)]"
            }`}
          >
            Consulting
            {pathname === "/consulting" && (
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--accent-blue)] rounded-full" />
            )}
          </a>
          <a
            href="/being-human"
            className={`transition-colors duration-200 text-sm font-medium relative ${
              pathname === "/being-human"
                ? "text-[var(--dark-blue)]"
                : "text-[var(--text-medium)] hover:text-[var(--dark-blue)]"
            }`}
          >
            Being Human
            {pathname === "/being-human" && (
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--accent-blue)] rounded-full" />
            )}
          </a>
          <a
            href="/media"
            className={`transition-colors duration-200 text-sm font-medium relative ${
              pathname === "/media"
                ? "text-[var(--dark-blue)]"
                : "text-[var(--text-medium)] hover:text-[var(--dark-blue)]"
            }`}
          >
            Media
            {pathname === "/media" && (
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--accent-blue)] rounded-full" />
            )}
          </a>
        </div>
      </div>
    </nav>
  );
};
