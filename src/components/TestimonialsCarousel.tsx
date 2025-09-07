"use client";

import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { testimonials } from '@/lib/testimonials-data';

// This component for animating the title text is unchanged.
const AnimatedTextWord: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  const words = text.split(" ");
  return (
    <motion.h2
      initial="hidden"
      whileInView="visible"
      // CHANGE HERE: Removed `viewport={{ once: true, amount: 0.5 }}` to allow re-triggering
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } }
      }}
      className={className}
    >
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { type: 'spring' } }
          }}
          style={{ marginRight: "0.25em", display: "inline-block" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
};

const TestimonialsCarousel: React.FC = () => {
  const [index, setIndex] = useState(testimonials.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [xOffset, setXOffset] = useState(0);
  const [dimensions, setDimensions] = useState({ viewport: 0, card: 0, gap: 0 });

  // Refs for measuring DOM elements
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const flexContainerRef = useRef<HTMLDivElement>(null);

  // --- Infinite Loop Logic ---
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const handleAnimationComplete = () => {
    // When we reach the start of the third (last) block...
    if (index >= testimonials.length * 2) {
      // Disable the transition for an instant jump
      setIsTransitioning(false);
      // Jump back to the start of the second block
      setIndex(testimonials.length);
    }
  };

  // Re-enable transitions after the seamless jump
  useEffect(() => {
    if (index === testimonials.length && !isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
  }, [index, isTransitioning]);

  // --- Responsive Calculation Logic ---

  // 1. Measure the exact dimensions of the carousel elements on mount and resize
  useLayoutEffect(() => {
    const measureDimensions = () => {
      if (!viewportRef.current || !cardRef.current || !flexContainerRef.current) return;
      
      const viewportWidth = viewportRef.current.offsetWidth;
      const cardWidth = cardRef.current.offsetWidth;
      const gap = parseFloat(window.getComputedStyle(flexContainerRef.current).gap);
      
      setDimensions({ viewport: viewportWidth, card: cardWidth, gap: gap });
    };

    measureDimensions();
    window.addEventListener('resize', measureDimensions);
    return () => window.removeEventListener('resize', measureDimensions);
  }, []); // Runs once on mount

  // 2. Calculate the final 'x' offset whenever the index or dimensions change
  useEffect(() => {
    if (dimensions.card > 0) {
      const { viewport, card, gap } = dimensions;
      // Offset needed to center the first card
      const centeringOffset = (viewport - card) / 2;
      // Total shift based on the current index
      const totalShift = index * (card + gap);
      setXOffset(centeringOffset - totalShift);
    }
  }, [index, dimensions]);

  const centeredIndex = index % testimonials.length;

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <AnimatedTextWord
          text="Trusted By Industry Leaders"
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-16 text-[#00131F]"
        />
      </div>
      <div className="relative w-full flex items-center justify-center h-[380px] md:h-[420px]">
        <div ref={viewportRef} className="w-full max-w-6xl mx-auto overflow-hidden">
          <motion.div
            ref={flexContainerRef}
            className="flex items-center gap-4 md:gap-6"
            // Animate using the dynamically calculated pixel offset
            animate={{ x: xOffset }}
            transition={isTransitioning ? {
              type: 'spring',
              stiffness: 250,
              damping: 40,
            } : { duration: 0 }}
            onAnimationComplete={handleAnimationComplete}
          >
            {extendedTestimonials.map((testimonial, i) => {
              const isCenter = (i % testimonials.length) === centeredIndex;
              return (
                <motion.div
                  // Add a ref to the very first card so we can measure it
                  ref={i === 0 ? cardRef : null}
                  key={i}
                  // These improved responsive classes define explicit widths for different breakpoints.
                  // Our JS logic will correctly measure and center the card whatever width is rendered.
                  className="flex-shrink-0 w-[calc(100vw-4rem)] max-w-sm sm:w-[250px] md:w-[384px] p-5 md:p-8 bg-[#2c4a5c] border rounded-2xl"
                  animate={{
                    scale: isCenter ? 1.05 : 0.9,
                    opacity: isCenter ? 1 : 0.6,
                    zIndex: isCenter ? 10 : 1,
                    borderColor: isCenter ? '#fe7f2d' : 'transparent',
                    boxShadow: isCenter ? '0 10px 25px rgba(0, 0, 0, 0.3)' : 'none',
                  }}
                  transition={{ type: 'spring', duration: 0.5 }}
                >
                  <p className="mb-4 italic text-gray-300 text-sm sm:text-base md:text-lg">"{testimonial.quote}"</p>
                  <h4 className="font-bold text-md sm:text-lg md:text-xl text-white">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-[#fcca46]">{testimonial.title}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;