'use client';

import React from 'react';
import Link from 'next/link';

const GrowthSection: React.FC = () => {
  return (
    <section
      className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 transition-all duration-500"
      id="career"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        {/* Heading */}
        <h2
          className="font-inter text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold text-[#DA5D0C] leading-tight whitespace-pre-line flex-shrink-0 transition-all duration-500"
        >
          {'Grow With\nPROBOX'}
        </h2>

        <div className="flex flex-col items-center md:items-start gap-6 sm:gap-8 max-w-lg">
          {/* Description */}
          <p
            className="font-inter italic text-base sm:text-lg md:text-xl text-black leading-relaxed flex-shrink-0 transition-all duration-500"
          >
            At PROBOX, we believe great customer experiences start with empowered employees. We offer a culture of innovation, inclusivity, and growth, where you&apos;re treated as a contributor, not just an employee.
          </p>

          {/* Button */}
          <Link href="/career" passHref>
            <button
              type="button"
              className="font-inter text-white w-full sm:w-auto px-8 py-4 rounded-full bg-[rgba(14,44,62,0.87)] text-xl sm:text-2xl font-medium tracking-widest transition-all duration-500 hover:bg-[rgba(14,44,62,1)]"
            >
              Current Openings
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
