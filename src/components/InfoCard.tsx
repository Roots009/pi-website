'use client';

import React from 'react';
import Link from 'next/link';
type InfoCardProps = {
  className?: string;
  // other props if any
};

export default function InfoCard({ className = '' }: InfoCardProps) {
  return (
    <div
      className="bg-white bg-opacity-90 rounded-3xl p-8 max-w-lg shadow-lg text-[#233d4d] font-inter"
      style={{ boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}
    >
      <h3 className="text-2xl font-bold mb-4">Trusted By Industry Leaders</h3>
      <p className="mb-6 leading-relaxed font-medium">
        We partner with businesses of all sizes to provide robust, scalable, and secure IT solutions that drive real results. Discover how we can transform your technological landscape.
      </p>
      <Link href="/about" passHref>
        <button
          className="bg-[#fe7f2d] hover:bg-[#e46a1c] text-white font-light text-lg rounded-[25px] px-6 py-3 transition-colors duration-300"
          type="button"
        >
          Learn More
        </button>
      </Link>
    </div>
  );
}
