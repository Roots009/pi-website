"use client";

import React from 'react';

const ContactSpotlightForm = () => {
  return (
    <>
      <style jsx>{`
        @keyframes gradient-animation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <div 
        className="min-h-screen flex items-center justify-center p-4"
        style={{
          backgroundImage: "linear-gradient(225deg, #3F281A, #6C3816, #4682B4, #9F4911, #DA5D0C)",
          backgroundSize: "400% 400%",
          animation: "gradient-animation 15s ease infinite",
        }}
      >
        <div className="container mx-auto max-w-xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-extrabold text-white mb-2 tracking-wide opacity-70" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              Contact Us
            </h1>
          </div>
          <form action="#" method="POST" className="space-y-6">
            <input type="text" id="name" name="name" placeholder="Your Name" className="block w-full px-4 py-3 rounded-lg focus:outline-none backdrop-blur-md bg-white/10 text-white placeholder-white/60 text-center font-semibold transition-colors duration-300 hover:ring-2 hover:ring-white focus:bg-white/30" />
            <input type="email" id="email-id" name="email-id" placeholder="Enter Email-Id" className="block w-full px-4 py-3 rounded-lg focus:outline-none backdrop-blur-md bg-white/10 text-white placeholder-white/60 text-center font-semibold transition-colors duration-300 hover:ring-2 hover:ring-white focus:bg-white/30" />
            <textarea id="message" name="message" rows={5} placeholder="Message" className="block w-full px-4 py-3 rounded-lg focus:outline-none backdrop-blur-md bg-white/10 text-white placeholder-white/60 text-center font-semibold transition-colors duration-300 hover:ring-2 hover:ring-white focus:bg-white/30"></textarea>

            <div className="space-y-4 text-white text-sm">
              <label className="flex items-center group">
                <input type="checkbox" required className="appearance-none w-5 h-5 border-2 border-white rounded-md bg-transparent cursor-pointer relative transition-colors duration-300 focus:outline-none checked:bg-orange-500 checked:border-orange-500 hover:bg-orange-500" />
                <span className="ml-2 opacity-70">I agree to the PROBOX Privacy Policy.</span>
              </label>
              <label className="flex items-center group">
                <input type="checkbox" className="appearance-none w-5 h-5 border-2 border-white rounded-md bg-transparent cursor-pointer relative transition-colors duration-300 focus:outline-none checked:bg-orange-500 checked:border-orange-500 hover:bg-orange-500" />
                <span className="ml-2 opacity-70">Get the latest from PROBOX.</span>
              </label>
            </div>

            <div className="flex justify-end">
              <button type="submit" className="px-8 py-3 bg-gray-800 text-white font-bold rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-orange-500 hover:shadow-orange-500/50 hover:ring-2 hover:ring-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                Let's Connect
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactSpotlightForm;
