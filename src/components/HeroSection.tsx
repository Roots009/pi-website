'use client'; // This must be a client component to use Framer Motion for animations.

import { motion } from 'framer-motion';
import Typewriter from './Typewriter'; // Assuming Typewriter.tsx is in the same directory.

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative h-screen w-full flex flex-col justify-center items-center text-white overflow-hidden"
    >
      {/* Background Gradient - This creates the visual effect from your design */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 bg-probox-dark-blue"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, #619B8A40, transparent 40%), radial-gradient(circle at 70% 30%, #FE7F2D40, transparent 40%)`,
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
        <div className="max-w-4xl">
          <p className="text-lg md:text-xl mb-4 text-gray-300">
            PROBOX is a leading ICT Solution Provider focused on Digital Infrastructure, Cloud and Security Solutions.
          </p>
          
          {/* Main Animated Headline */}
          <div className="font-bold leading-tight">
            <span className="block text-4xl md:text-6xl lg:text-7xl text-gray-300">BRINGING</span>
            {/* The Typewriter component animates the second line */}
            <Typewriter
              text="SIMPLICITY IN I.T"
              highlight="I.T"
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
            />

          </div>
        </div>
      </div>
      
      {/* Functional Scroll-Down Indicator */}
      <a 
        href="#who-we-are" 
        aria-label="Scroll to next section" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center items-start p-1 cursor-pointer transition-opacity hover:opacity-75">
          <motion.div
            className="w-1 h-2 bg-gray-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </a>
    </section>
  );
};

export default HeroSection;

