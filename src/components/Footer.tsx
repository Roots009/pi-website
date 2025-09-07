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
              <a href="https://www.linkedin.com/company/probox-solutions-india-private-limited/" className="text-orange-500 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                {/* Replace with your LinkedIn SVG icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.7431 18.7477H15.4853V13.6428C15.4853 12.4254 15.4605 10.8588 13.7876 10.8588C12.089 10.8588 11.8296 12.1834 11.8296 13.5529V18.7477H8.57175V8.25H11.7013V9.68092H11.7434C12.1807 8.85592 13.244 7.98508 14.8326 7.98508C18.1335 7.98508 18.744 10.1576 18.744 12.9855L18.7431 18.7477ZM4.89225 6.81358C3.84358 6.81358 3.00117 5.96475 3.00117 4.92067C3.00117 3.8775 3.8445 3.02958 4.89225 3.02958C5.93725 3.02958 6.78425 3.8775 6.78425 4.92067C6.78425 5.96475 5.93633 6.81358 4.89225 6.81358ZM6.52575 18.7477H3.25875V8.25H6.52575V18.7477ZM20.3729 0H1.62342C0.726 0 0 0.7095 0 1.58492V20.4151C0 21.2914 0.726 22 1.62342 22H20.3702C21.2667 22 22 21.2914 22 20.4151V1.58492C22 0.7095 21.2667 0 20.3702 0H20.3729Z"/></svg>
              </a>
              <a href="https://www.instagram.com/proboxian/" className="text-orange-500 hover:text-white transition-colors duration-300" aria-label="Instagram">
                {/* Replace with your Instagram SVG icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M13.028 2C14.153 2.003 14.724 2.009 15.217 2.023L15.411 2.03C15.635 2.038 15.856 2.048 16.123 2.06C17.187 2.11 17.913 2.278 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8307 4.17773 21.2242 4.78247 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.952 8.144 21.962 8.365 21.97 8.59L21.976 8.784C21.991 9.276 21.997 9.847 21.999 10.972L22 11.718V13.028C22.0024 13.7574 21.9948 14.4868 21.977 15.216L21.971 15.41C21.963 15.635 21.953 15.856 21.941 16.122C21.891 17.187 21.721 17.912 21.475 18.55C21.2242 19.2175 20.8307 19.8223 20.322 20.322C19.8223 20.8307 19.2175 21.2242 18.55 21.475C17.913 21.722 17.187 21.89 16.123 21.94L15.411 21.97L15.217 21.976C14.724 21.99 14.153 21.997 13.028 21.999L12.282 22H10.973C10.2433 22.0026 9.51353 21.9949 8.784 21.977L8.59 21.971C8.35261 21.962 8.11528 21.9517 7.878 21.94C6.814 21.89 6.088 21.722 5.45 21.475C4.78283 21.2241 4.17845 20.8306 3.679 20.322C3.16995 19.8224 2.77611 19.2176 2.525 18.55C2.278 17.913 2.11 17.187 2.06 16.122L2.03 15.41L2.025 15.216C2.00657 14.4868 1.99824 13.7574 2 13.028V10.972C1.99724 10.2426 2.00457 9.5132 2.022 8.784L2.029 8.59C2.037 8.365 2.047 8.144 2.059 7.878C2.109 6.813 2.277 6.088 2.524 5.45C2.7757 4.7822 3.17023 4.17744 3.68 3.678C4.17916 3.16955 4.78319 2.77607 5.45 2.525C6.088 2.278 6.813 2.11 7.878 2.06C8.144 2.048 8.366 2.038 8.59 2.03L8.784 2.024C9.5132 2.00623 10.2426 1.99857 10.972 2.001L13.028 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52679 9.40215 7 10.6739 7 12C7 13.3261 7.52679 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM12 9C12.394 8.99993 12.7841 9.07747 13.1481 9.22817C13.5121 9.37887 13.8428 9.5998 14.1215 9.87833C14.4001 10.1569 14.6211 10.4875 14.772 10.8515C14.9228 11.2154 15.0004 11.6055 15.0005 11.9995C15.0006 12.3935 14.923 12.7836 14.7723 13.1476C14.6216 13.5116 14.4007 13.8423 14.1222 14.121C13.8436 14.3996 13.513 14.6206 13.149 14.7714C12.7851 14.9223 12.395 14.9999 12.001 15C11.2054 15 10.4423 14.6839 9.87968 14.1213C9.31707 13.5587 9.001 12.7956 9.001 12C9.001 11.2044 9.31707 10.4413 9.87968 9.87868C10.4423 9.31607 11.2054 9 12.001 9M17.251 5.5C16.9195 5.5 16.6015 5.6317 16.3671 5.86612C16.1327 6.10054 16.001 6.41848 16.001 6.75C16.001 7.08152 16.1327 7.39946 16.3671 7.63388C16.6015 7.8683 16.9195 8 17.251 8C17.5825 8 17.9005 7.8683 18.1349 7.63388C18.3693 7.39946 18.501 7.08152 18.501 6.75C18.501 6.41848 18.3693 6.10054 18.1349 5.86612C17.9005 5.6317 17.5825 5.5 17.251 5.5Z"/></svg>
              </a>
              <a href="https://x.com/Probox515606" className="text-orange-500 hover:text-white transition-colors duration-300" aria-label="Twitter">
                {/* Replace with your Twitter SVG icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3 1.5C1.34531 1.5 0 2.84531 0 4.5V19.5C0 21.1547 1.34531 22.5 3 22.5H18C19.6547 22.5 21 21.1547 21 19.5V4.5C21 2.84531 19.6547 1.5 18 1.5H3ZM16.9266 5.4375L12.0609 10.9969L17.7844 18.5625H13.3031L9.79688 13.9734L5.77969 18.5625H3.55313L8.75625 12.6141L3.26719 5.4375H7.86094L11.0344 9.63281L14.7 5.4375H16.9266ZM15.1547 17.2313L7.19062 6.69844H5.86406L13.9172 17.2313H15.1547Z"/></svg>
              </a>
              <a href="https://www.youtube.com/@Proboxian" className="text-orange-500 hover:text-white transition-colors duration-300" aria-label="YouTube">
                {/* Replace with your YouTube SVG icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z"/></svg>
              </a>
              <a href="https://www.facebook.com/PROBOXINFOTECH" className="text-orange-500 hover:text-white transition-colors duration-300" aria-label="Facebook">
                {/* Replace with your Facebook SVG icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M15.725 22V14.255H18.325L18.714 11.237H15.724V9.31C15.724 8.436 15.967 7.84 17.221 7.84H18.819V5.14C18.0452 5.05685 17.2673 5.01679 16.489 5.02C14.185 5.02 12.608 6.427 12.608 9.01V11.237H10V14.255H12.607V22H3.104C2.494 22 2 21.506 2 20.896V3.104C2 2.494 2.494 2 3.104 2H20.896C21.506 2 22 2.494 22 3.104V20.896C22 21.506 21.506 22 20.896 22H15.725Z"/></svg>
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
