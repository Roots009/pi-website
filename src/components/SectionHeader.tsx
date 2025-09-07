'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, Variants, Transition } from 'framer-motion';

type SectionHeaderProps = {
  text: string;
  className?: string;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const springTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 14,
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
};

export default function SectionHeader({ text, className = '' }: SectionHeaderProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) controls.start('visible');
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls]);

  const words = text.split(' ');

  return (
    <motion.h2
      ref={ref}
      className={`text-4xl md:text-5xl font-extrabold ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          style={{ marginRight: index === words.length - 1 ? 0 : '0.3em', display: 'inline-block' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
}
