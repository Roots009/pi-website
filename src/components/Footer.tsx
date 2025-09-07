"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: '#00131F' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
          {/* Logo and Description Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl font-bold text-orange-500">ProBox InfoTech</h2>
            <p className="mt-4 text-sm text-gray-400 max-w-sm">
              Architecting digital futures through innovative technology solutions. Transform your business with our comprehensive digital transformation services.
            </p>
            {/* Social Media Icons */}
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-orange-500 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                {/* Replace with your LinkedIn SVG icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.488 2.5s-2.488-1.119-2.488-2.5 1.11-2.5 2.488-2.5 2.488 1.119 2.488 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-5v16h5v-8.257c0-3.921 4.982-3.864 4.982 0v8.257h5v-10.927c0-2.417-1.164-3.528-3.328-3.528-1.749 0-2.522.955-3.082 1.839v-1.921z"/></svg>
              </a>
              <a href="#" className="text-orange-500 hover:text-white transition-colors duration-300" aria-label="Instagram">
                {/* Replace with your Instagram SVG icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-2.71 0-3.064 0-4.12 0-1.057.004-1.81.085-2.443.326-.62.247-1.178.618-1.72 1.16-1.077 1.07-1.448 2.46-1.577 3.992-.016.195-.033.435-.044.685-.01.25-.01.498-.01.768v4.004c0 2.71.018 3.063.045 4.12.01.24.027.48.043.684.13.498.286.99.5 1.45.22.46.52.87.89 1.25.37.37.79.68 1.25.89.46.22.95.37 1.45.5.24.04.49.06.68.08 1.05.02 1.4.04 4.1.04h4.004c2.71 0 3.06-.017 4.12-.045 1.05-.018 1.8-.098 2.44-.325.62-.248 1.18-.618 1.72-1.16.54-.54.91-1.1.1.1.25.38.38.74.5 1.2.37 1.05-.02.48.02.68-.02.68.04 1.05-.02 1.4.02 4.1.02.24.02.48.04.68.13.49.29.99.5 1.45.22.46.52.87.89 1.25.37.37.79.68 1.25.89.46.22.95.37 1.45.5.24.04.49.06.68.08 1.05.02 1.4.04 4.1.04h4.004c2.71 0 3.06-.017 4.12-.045 1.05-.018 1.8-.098 2.44-.325.62-.248 1.18-.618 1.72-1.16.54-.54.91-1.1 1.04-1.72.24-.63.32-1.39.32-2.44v-4.004c0-2.71-.018-3.063-.045-4.12-.01-.24-.027-.48-.043-.684-.13-.498-.286-.99-.5-1.45-.22-.46-.52-.87-.89-1.25-.37-.37-.79-.68-1.25-.89-.46-.22-.95-.37-1.45-.5-.24-.04-.49-.06-.68-.08-1.05-.02-1.4-.04-4.1-.04h-4.004c-2.71 0-3.06.017-4.12.045-1.05.018-1.8.098-2.44.325-.62.248-1.18.618-1.72 1.16-.54.54-.91 1.1-1.04 1.72-.24.63-.32 1.39-.32 2.44v4.004zm12.004-4.004c0 2.21-.49 2.54-1.47 2.89-.98.35-2.14.47-3.76.47h-5c-1.62 0-2.78-.12-3.76-.47-.98-.35-1.47-.68-1.47-2.89v-4.004c0-2.21.49-2.54 1.47-2.89.98-.35 2.14-.47 3.76-.47h5c1.62 0 2.78.12 3.76.47.98.35 1.47.68 1.47 2.89v4.004z"/></svg>
              </a>
              <a href="#" className="text-orange-500 hover:text-white transition-colors duration-300" aria-label="Twitter">
                {/* Replace with your Twitter SVG icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.795-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.565 0-6.476 2.911-6.476 6.475 0 .504.056.991.16.14.97-.24-1.84.45-3.41-.61-1.82-.45-3.41-.61.94-.06.18-.08.18-.28.18-.46 0-.25.05-.48.16.59.04.14.07.29.07.44-.01.21-.02.43-.07.64-.13.56-.3.94-.55 1.4-.22.46-.52.87-.89 1.25-.37.37-.79.68-1.25.89-.46.22-.95.37-1.45.5.24.04.49.06.68.08 1.05.02 1.4.04 4.1.04h4.004c2.71 0 3.06-.017 4.12-.045 1.05-.018 1.8-.098 2.44-.325.62-.248 1.18-.618 1.72-1.16.54-.54.91-1.1 1.04-1.72.24-.63.32-1.39.32-2.44v-4.004c0-2.71-.018-3.063-.045-4.12-.01-.24-.027-.48-.043-.684-.13-.498-.286-.99-.5-1.45-.22-.46-.52-.87-.89-1.25-.37-.37-.79-.68-1.25-.89-.46-.22-.95-.37-1.45-.5-.24-.04-.49-.06-.68-.08-1.05-.02-1.4-.04-4.1-.04h-4.004c-2.71 0-3.06.017-4.12.045-1.05-.018-1.8-.098-2.44-.325-.62-.248-1.18-.618-1.72-1.16-.54-.54-.91-1.1-1.04-1.72-.24-.63-.32-1.39-.32-2.44v4.004zm12.004-4.004c0 2.21-.49 2.54-1.47 2.89-.98.35-2.14.47-3.76.47h-5c-1.62 0-2.78-.12-3.76-.47-.98-.35-1.47-.68-1.47-2.89v-4.004c0-2.21.49-2.54 1.47-2.89.98-.35 2.14-.47 3.76-.47h5c1.62 0 2.78.12 3.76.47.98.35 1.47.68 1.47 2.89v4.004z"/></svg>
              </a>
              <a href="#" className="text-orange-500 hover:text-white transition-colors duration-300" aria-label="YouTube">
                {/* Replace with your YouTube SVG icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 16.5v-9l6 4.5-6 4.5z"/></svg>
              </a>
              <a href="#" className="text-orange-500 hover:text-white transition-colors duration-300" aria-label="Facebook">
                {/* Replace with your Facebook SVG icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.5c-.724 0-.965.257-.965.986v1.492h2.467l-.32 2.522h-2.147v7.001h-2.522v-7.001h-2.193v-2.522h2.193v-1.696c0-1.854 1.18-2.678 3.237-2.678h2.646v2.531z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Services Column */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-orange-500 mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Managed IT Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Cloud Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Cyber Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">IIOT</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Network Management</a></li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-orange-500 mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Who We Are</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Career</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Terms Of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          <p className="mb-0">&copy; 2025 ProBox InfoTech. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
