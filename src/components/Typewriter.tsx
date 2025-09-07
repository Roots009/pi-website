'use client';

import { motion } from 'framer-motion';
import { JSX } from 'react';

interface TypewriterProps {
  text: string;
  highlight?: string;         // The substring to highlight (e.g. "I.T")
  highlightColor?: string;    // The color for the highlight (default: "#DA5D0C")
  className?: string;
}

const Typewriter = ({
  text,
  highlight = 'I.T',
  highlightColor = '#DA5D0C',
  className = ''
}: TypewriterProps) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Function to split and render characters, highlighting the target substring.
  function renderCharsWithHighlight(text: string) {
    const output: JSX.Element[] = [];
    let i = 0;
    while (i < text.length) {
      // Check if the current part of text matches the highlight
      if (
        highlight &&
        text.slice(i, i + highlight.length).toUpperCase() === highlight.toUpperCase()
      ) {
        for (let j = 0; j < highlight.length; j++) {
          output.push(
            <motion.span
              key={i + j}
              variants={charVariants}
              style={{ display: 'inline-block', color: highlightColor }}
            >
              {highlight[j] === ' ' ? '\u00A0' : highlight[j]}
            </motion.span>
          );
        }
        i += highlight.length;
      } else {
        output.push(
          <motion.span
            key={i}
            variants={charVariants}
            style={{ display: 'inline-block' }}
          >
            {text[i] === ' ' ? '\u00A0' : text[i]}
          </motion.span>
        );
        i++;
      }
    }
    return output;
  }

  return (
    <motion.h1
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {renderCharsWithHighlight(text)}
    </motion.h1>
  );
};

export default Typewriter;
