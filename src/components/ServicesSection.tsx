'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { services } from '@/lib/services-data';

// --- Type Definitions ---
// Self-contained data and types for the component to ensure it's modular.
type Service = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

interface ServiceCardProps {
  service: Service;
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

// --- Sub-component for individual cards ---
const ServiceCard: React.FC<ServiceCardProps> = ({ service, i, progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <motion.div className="sticky top-0 h-screen w-full flex items-center justify-center">
      <motion.div 
        className="relative flex flex-col md:flex-row bg-[#2c4a5c] rounded-2xl shadow-2xl w-11/12 max-w-5xl overflow-hidden"
        style={{ scale, top: `calc(-${i * 0.5}rem)` }}
      >
        {/* DEFINITIVE FIX: Use bg-contain to ensure the entire image is visible without cropping. */}
        <div 
            className="w-full md:w-1/2 aspect-video bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${service.imageUrl})` }}
        />
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#fcca46]">{`0${service.id}`}</h3>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
            <p className="text-gray-300 text-base md:text-lg">{service.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};


// --- Main Services Section Component ---
const ServicesSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    
    const totalHeight = `${(services.length + 1) * 100}vh`;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const animationProgress = useTransform(scrollYProgress, [0, services.length / (services.length + 1)], [0, 1]);

    return (
        <section ref={containerRef} className="relative bg-[#233d4d]" style={{ height: totalHeight }}>
             <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center text-white text-center px-6 pointer-events-none">
                <motion.h2 
                    className="text-4xl md:text-5xl font-extrabold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    Our Services
                </motion.h2>
                <motion.p 
                    className="max-w-2xl text-lg text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    From cloud infrastructure to cybersecurity, we provide end-to-end solutions to future-proof your business.
                </motion.p>
            </div>
            {services.map((service, i) => {
                const start = i / services.length;
                const end = (i + 1) / services.length;
                const targetScale = 1 - ((services.length - i - 1) * 0.05);

                return (
                    <ServiceCard
                        key={service.id}
                        i={i}
                        service={service}
                        progress={animationProgress}
                        range={[start, end]}
                        targetScale={targetScale}
                    />
                );
            })}
        </section>
    );
};

export default ServicesSection;

