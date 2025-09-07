'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { partners } from '@/lib/partners-data';

const TechnologyPartnersSection: React.FC = () => {
  // Duplicate logos array for seamless infinite scroll
  const logos = [...partners, ...partners];

  return (
    <div
      className="overflow-hidden"
      style={{
        height: '80px',  // Reduced height
        paddingTop: '8px',
        paddingBottom: '8px',
        backgroundColor: '#2c4a5c',
        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
      }}
    >
      <motion.div
        className="flex gap-x-16 items-center"
        animate={{ x: ['0%', '-50%'] }} // Animate half width for continuous effect
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
            className="h-10 w-auto flex-shrink-0"  // smaller height (40px)
            style={{ maxHeight: '60px' }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TechnologyPartnersSection;
