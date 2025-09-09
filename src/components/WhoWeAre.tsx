"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const WhoWeAre = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } },
  };

  return (
    <section 
      id="who-we-are"
      className="py-20 md:py-28 text-white overflow-hidden"
      style={{ backgroundColor: '#B73700' }}
    >
      <div 
        ref={ref} 
        className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16"
      >
        {/* Left Column: Heading and Brief */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={leftVariants}
          className="w-full md:w-1/2 max-w-lg md:text-left"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            WHO WE ARE.
          </h2>
          <p className="mt-6 text-lg md:text-xl leading-relaxed">
            PROBOX is a leading ICT Solution Provider focused on Digital Infrastructure, Cloud and Security Solutions. We deliver technology expertise to harness technology advances, simplify IT complexity and optimize their environments today.
          </p>
        </motion.div>

        {/* Right Column: Animated Card */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={rightVariants}
          className="w-full md:w-1/2 max-w-lg flex-shrink-0"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="space-y-6 text-slate-700 text-base md:text-lg">
              <p>
                PROBOX is a PROactive, PROgressive, and out-of-box thinking organization with a clear vision and sound philosophy. We are equipped to meet challenges, follow modern approaches, and deliver excellence in customer services.
              </p>
            </div>
            <Link href="/about">
              <button className="mt-8 bg-[#fe7f29] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
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
