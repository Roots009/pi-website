'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react'; // Added useEffect for the custom hook

// --- Typewriter Component ---
// This component is now a separate file as it should be.
// You need to ensure you have a `Typewriter.tsx` file that exports this component.
// The provided code already does this, so we'll just focus on how to use it here.
interface TypewriterProps {
  text: string;
  className?: string;
  startTyping: boolean; // New prop to control animation
}

const Typewriter = ({ text, className = '', startTyping }: TypewriterProps) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const animationState = startTyping ? 'visible' : 'hidden';

  return (
    <motion.h2
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={animationState} // Animate based on the prop
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
import { useInView } from 'react-intersection-observer';

const WhoWeAre = () => {
  // Use useInView to control the animations
  const [ref, inView] = useInView({
    triggerOnce: false, // Set to false to re-trigger on scroll
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  return (
    <section 
      id="who-we-are"
      className="relative w-full py-20 md:py-32 overflow-hidden"
      style={{
        backgroundColor: '#233D4D',
        backgroundImage: `radial-gradient(circle at 10% 20%, #FE7F2D40, transparent 40%), radial-gradient(circle at 90% 80%, #619B8A40, transparent 40%)`,
      }}
    >
      <div 
        ref={ref} // Attach the ref to the main container
        className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16"
      >

        {/* Main Animated Headline */}
        <div className="font-bold leading-tight">
          <span className="block text-4xl md:text-6xl lg:text-7xl text-gray-300">WHO</span>
          <Typewriter 
            text="WE ARE." 
            className="text-4xl md:text-6xl lg:text-7xl text-white"
            startTyping={inView} // Pass the inView state
          />
        </div>

        {/* Right Column: Animated Card */}
        <motion.div 
          className="w-full md:w-1/2 max-w-lg"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }} // Animate based on the inView state
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