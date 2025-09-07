"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useScroll } from '../hooks/useScroll'; // Make sure the path is correct

const Navbar = () => {
  const scrolled = useScroll(50);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          scrolled || isMenuOpen ? 'bg-probox-dark-blue shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <h1 className="text-2xl font-bold text-white">PROBOX</h1>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-white">
            <Link href="/#who-we-are" className="hover:text-probox-orange hover:font-bold transition-all duration-200 transform hover:scale-110">
              Who We Are
            </Link>
            <Link href="/#services" className="hover:text-probox-orange hover:font-bold transition-all duration-200 transform hover:scale-110">
              Services
            </Link>
            <Link href="/career" className="hover:text-probox-orange hover:font-bold transition-all duration-200 transform hover:scale-110">
              Career
            </Link>
          </div>
          
          <div className="hidden md:block">
            <Link href="/#contact">
              <button className="bg-probox-orange text-white px-5 py-2 rounded-md hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Hamburger Menu Button (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                // Close Icon (X)
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                // Hamburger Icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-probox-dark-blue transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-white text-xl">
          <Link href="/#who-we-are" className="hover:text-probox-orange hover:font-bold transition-all transform hover:scale-110" onClick={() => setIsMenuOpen(false)}>
            Who We Are
          </Link>
          <Link href="/#services" className="hover:text-probox-orange hover:font-bold transition-all transform hover:scale-110" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          <Link href="/career" className="hover:text-probox-orange hover:font-bold transition-all transform hover:scale-110" onClick={() => setIsMenuOpen(false)}>
            Career
          </Link>
          <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
            <button className="bg-probox-orange text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;