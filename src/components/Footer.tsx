'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer
      className="bg-[rgba(20,47,63,0.91)] py-6 sm:py-8 px-4 sm:px-6 md:px-12 lg:px-24 text-center max-w-7xl mx-auto text-[#DA5D0C] font-inter transition-all duration-500"
    >
      <div className="mb-4 sm:mb-6">
        <div
          className="mx-auto font-bold text-lg sm:text-xl md:text-2xl"
        >
          ProBox InfoTech
        </div>
        <p
          className="mx-auto mt-2 sm:mt-3 text-sm sm:text-base md:text-lg leading-relaxed max-w-md sm:max-w-lg md:max-w-xl"
        >
          Architecting digital futures through innovative technology solutions. Transform your business with our comprehensive digital transformation services.
        </p>
      </div>
      {/* Social Icons */}
      <div className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8 mb-6 sm:mb-8">
        {/* YouTube */}
        <a href="#" aria-label="YouTube" className="hover:opacity-70 transition-opacity duration-300">
          <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#DA5D0C" d="M10 15l5.5-3-5.5-3v6z"/>
            <path fill="#DA5D0C" d="M21.8 7.042C21.452 6.103 20.656 5.391 19.673 5.26 17.845 4.983 12 4.983 12 4.983s-5.844 0-7.674.278c-.985.132-1.783.843-2.129 1.783C2.1 8.034 2.1 12 2.1 12s0 3.966.097 4.958c.347.94 1.144 1.651 2.13 1.783 1.832.278 7.674.278 7.674.278s5.844 0 7.673-.278c.982-.132 1.777-.843 2.127-1.783.097-.992.097-4.958.097-4.958s0-3.966-.1-4.958z"/>
          </svg>
        </a>
        {/* LinkedIn */}
        <a href="#" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24">
            <path fill="#DA5D0C" d="M6.94 19.14H3.706V8.75H6.94v10.39zM5.324 7.568a1.675 1.675 0 111.675-1.675 1.675 1.675 0 01-1.675 1.675zM20.29 19.143h-3.228v-5.749c0-1.379-.493-2.322-1.729-2.322a1.852 1.852 0 00-1.735 1.282 2.334 2.334 0 00-.114.837v5.952H10.44V8.75h3.091v1.358h.04a3.456 3.456 0 012.765-1.523c1.956 0 3.428 1.276 3.428 4.02z" />
          </svg>
        </a>
        {/* Twitter */}
        <a href="#" aria-label="Twitter" className="hover:opacity-70 transition-opacity duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24">
            <path fill="#DA5D0C" d="M22.46 6.003c-.77.342-1.6.572-2.46.678a4.3 4.3 0 001.88-2.37 8.51 8.51 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9A12.12 12.12 0 013 4.897a4.28 4.28 0 001.33 5.71 4.26 4.26 0 01-1.94-.53v.05a4.28 4.28 0 003.44 4.19 4.3 4.3 0 01-1.93.07 4.28 4.28 0 004 2.98 8.59 8.59 0 01-5.31 1.83c-.34 0-.68-.02-1.02-.06a12.1 12.1 0 006.55 1.92c7.87 0 12.17-6.52 12.17-12.17 0-.19 0-.37-.01-.55a8.7 8.7 0 002.14-2.22z"/>
          </svg>
        </a>
        {/* Instagram */}
        <a href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24">
            <path fill="#DA5D0C" d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm4.25 4.625a3.63 3.63 0 100 7.26 3.63 3.63 0 000-7.26zm5.209-.125a1.3 1.3 0 11-2.599 0 1.3 1.3 0 012.6 0zM12 8.875a3.13 3.13 0 013.125 3.125A3.13 3.13 0 0112 15.125 3.13 3.13 0 018.875 12 3.13 3.13 0 0112 8.875z"/>
          </svg>
        </a>
        {/* Facebook */}
        <a href="#" aria-label="Facebook" className="hover:opacity-70 transition-opacity duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.725 22V14.255H18.325L18.714 11.237H15.724V9.31C15.724 8.436 15.967 7.84 17.221 7.84H18.819V5.14C18.0452 5.05685 17.2673 5.01679 16.489 5.02C14.185 5.02 12.608 6.427 12.608 9.01V11.237H10V14.255H12.607V22H3.104C2.494 22 2 21.506 2 20.896V3.104C2 2.494 2.494 2 3.104 2H20.896C21.506 2 22 2.494 22 3.104V20.896C22 21.506 21.506 22 20.896 22H15.725Z"
              fill="#DA5D0C"
            />
          </svg>
        </a>
      </div>
      <p
        className="mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
      >
        © 2025 ProBox InfoTech. All Rights Reserved.
      </p>
    </footer>
  );
}
