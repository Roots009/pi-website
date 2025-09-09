"use client";

import React from 'react';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url('/clarity image.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* This section is now intentionally empty, containing only the background */}
    </section>
  );
};

export default HeroSection;
