'use client'; // <-- This is the crucial fix.

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WhoWeAre from '../components/WhoWeAre';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import PartnerMarquee from '../components/PartnerMarquee';
import ServicesSection from '../components/ServicesSection';
import GrowthSection from '../components/GrowthSection';


// This is the main entry point for your homepage.
// It imports all the individual section components and arranges them in the correct order.
export default function Home() {
  return (
    <>
      {/* This style tag is a simple way to enable smooth scrolling for the entire page. 
        It requires the page to be a Client Component, which we've now enabled with 'use client'.
      */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      
      <main>
        <Navbar />
        <HeroSection />
        <WhoWeAre />
        <TestimonialsCarousel />
        <PartnerMarquee />
        <ServicesSection />
        <GrowthSection />
        
        
        
        
        {/* The next sections of your website will go here */}
      </main>
    </>
  );
}

