'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { partners } from '@/lib/partners-data';

const TechnologyPartnersSection: React.FC = () => {
  // State to toggle the color/grayscale effect
  const [isColored, setIsColored] = useState(false);

  // Duplicate logos array twice more for a seamless infinite scroll
  const logos = [...partners, ...partners, ...partners, ...partners];

  return (
    <div
      className="overflow-hidden cursor-pointer p-4 md:p-8"
      onClick={() => setIsColored(!isColored)}
      style={{
        height: '150px',
        paddingTop: '8px',
        paddingBottom: '8px',
        background: '#ffff',
      }}
    >
      <motion.div
        className="flex gap-x-16 items-center min-h-[40px]"
        // Animate half the width to create a seamless loop with 4 sets
        animate={{ x: ['0%', '-50%'] }} 
        transition={{
          ease: 'linear',
          duration: 30,
          repeat: Infinity,
        }}
      >
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt={`partner-logo-${idx}`}
            className={`w-auto flex-shrink-0 transition-filter duration-700 ease-in-out ${isColored ? '' : 'grayscale'}`}
            style={{ maxHeight: '80px', width: 'auto' }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TechnologyPartnersSection;