'use client'; // This component uses Framer Motion, so it must be a client component.
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react'; // Added React import for clarity

// --- Typewriter Component ---
// To resolve the import error, the Typewriter component is now defined directly within this file.
// This makes the WhoWeAre component self-contained and removes external dependencies.
const Typewriter = ({ text, className = '' }: { text: string; className?: string }) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05, // Adjusts the speed of the typing effect
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.h2
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" // The animation will trigger when the component scrolls into view
      viewport={{ once: true }}
      aria-label={text}
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={charVariants} style={{ display: 'inline-block' }}>
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h2>
  );
};


// --- Main WhoWeAre Component ---
const WhoWeAre = () => {
  return (
    // The id="who-we-are" is crucial for the scroll link from the Navbar and Hero section to work.
    <section 
      id="who-we-are"
      className="relative w-full py-20 md:py-32 overflow-hidden"
      style={{
        backgroundColor: '#233D4D',
        backgroundImage: `radial-gradient(circle at 10% 20%, #FE7F2D40, transparent 40%), radial-gradient(circle at 90% 80%, #619B8A40, transparent 40%)`,
      }}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">

         {/* Main Animated Headline */}
          <div className="font-bold leading-tight">
            <span className="block text-4xl md:text-6xl lg:text-7xl text-gray-300">WHO</span>
            {/* The Typewriter component animates the second line */}
            <Typewriter 
              text="WE ARE." 
              className="text-4xl md:text-6xl lg:text-7xl text-white"
            />
          </div>

        {/* Right Column: Animated Card */}
        <motion.div 
          className="w-full md:w-1/2 max-w-lg"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="space-y-6 text-slate-700 text-base md:text-lg">
                <p>
                  Probox is a next-gen IT solutions company that helps businesses simplify technology, strengthen security, and accelerate growth. With our expertise in cloud, digital infrastructure, and cybersecurity, we deliver solutions that are practical today and future-ready tomorrow.
                </p>
                <p>
                  PROBOX is a PROactive, PROgressive, and out-of-box thinking organization with a clear vision and sound philosophy.
                </p>
            </div>
            
            <Link href="/about">
              <button className="mt-8 bg-[#fe7f29] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </Link>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhoWeAre;

