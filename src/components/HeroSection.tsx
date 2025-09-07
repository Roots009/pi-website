"use client";

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Typewriter from './Typewriter';
import { Inter } from 'next/font/google';

// Define the Inter font using next/font
const inter = Inter({ subsets: ['latin'], weight: ['200', '700'] });

const HeroSection = () => {
  // Separate useInView for the Typewriter effect
  const [typewriterRef, typewriterInView] = useInView({
    triggerOnce: false, // Set to false to re-trigger the effect every time it comes into view
    threshold: 0.5,
  });

  // Separate useInView for the scroll-down indicator animation
  const scrollControls = useAnimation();
  const [scrollRef, scrollInView] = useInView({
    triggerOnce: false, // This allows the ref to re-trigger
    threshold: 0.1,
  });

  useEffect(() => {
    if (scrollInView) {
      scrollControls.start({ y: [0, 12, 0] });
    } else {
      scrollControls.stop(); // Stop the animation when out of view
      scrollControls.set({ y: 0 }); // Reset the position to its initial state
    }
  }, [scrollControls, scrollInView]);

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col p-8 md:p-12 text-white overflow-hidden"
    >
      <style jsx global>{`
        body {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      
      <div 
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/Rectangle 1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="relative z-10 container mx-auto flex h-full items-end">
        {/* Main heading at the bottom left, tied to the typewriter's ref */}
        <div 
          ref={typewriterRef} 
          className="w-full md:w-1/2 mb-12"
        >
          <div className="leading-tight">
            <span className="block text-4xl md:text-6xl lg:text-7xl text-gray-300">BRINGING</span>
            <Typewriter
              text="SIMPLICITY IN I.T"
              highlight="I.T"
              startTyping={typewriterInView} // Pass the inView state as a prop
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
            />
          </div>
        </div>
        
        {/* Top-right text block */}
        <div className="w-full md:w-1/2 flex justify-end items-start absolute top-12 right-6">
          <p className={`max-w-md text-lg leading-relaxed text-gray-300 text-justify ${inter.className}`}>
            PROBOX is a leading ICT Solution Provider focused on Digital Infrastructure, Cloud and Security Solutions. We deliver technology expertise to harness technology advances, simplify IT complexity and optimize their environments today.
          </p>
        </div>
      </div>
      
      {/* Functional Scroll-Down Indicator */}
      <a 
        href="#who-we-are" 
        aria-label="Scroll to next section" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div 
          ref={scrollRef} // Attach the ref to this element
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center items-start p-1 cursor-pointer transition-opacity hover:opacity-75"
        >
          <motion.div
            className="w-1 h-2 bg-gray-400 rounded-full"
            animate={scrollControls} // Use the controls to run the animation
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </a>
    </section>
  );
};

export default HeroSection;