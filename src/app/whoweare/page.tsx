"use client";

import React from 'react';

const WhoWeAreHero = () => {
  const newHeroContent = {
    title: "Who WE ARE.",
    brief: "PROBOX is a PROactive, PROgressive, and out-of-box thinking organization with a clear vision and sound philosophy. We are equipped to meet challenges, follow modern approaches, and deliver excellence in customer services."
  };

  return (
    <section
      id="who-we-are-hero"
      className="relative h-screen w-full flex flex-col p-8 md:p-12 text-white overflow-hidden"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;700&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      <div 
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/Bgimage.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="relative z-10 container mx-auto flex h-full items-end">
        {/* Main heading at the bottom left */}
        <div className="w-full md:w-1/2 mb-12">
          <h1 className="leading-tight text-4xl md:text-6xl lg:text-7xl text-gray-300 font-extralight">
            {newHeroContent.title}
          </h1>
        </div>
        
        {/* Top-right text block */}
        <div className="w-full md:w-1/2 flex justify-end items-start absolute top-12 right-12">
          <p className="max-w-md text-lg leading-relaxed text-gray-300 text-justify">
            {newHeroContent.brief}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreHero;
