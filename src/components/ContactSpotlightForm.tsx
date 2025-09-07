'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';

type ContactSpotlightFormProps = {
  onSubmit?: (formData: { name: string; email: string; message: string; subscribe: boolean; terms: boolean }) => void;
};

export default function ContactSpotlightForm({ onSubmit }: ContactSpotlightFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subscribe: false,
    terms: false,
  });

  const [focused, setFocused] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const target = e.target as HTMLInputElement; // Assert it as HTMLInputElement
  const { name, value, type } = target;
  const checked = target.checked; // Now TypeScript knows this exists

  setFormData(prev => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value,
  }));
};


  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };

  return (
    <section
      className="relative bg-[#00131F] bg-opacity-90 rounded-3xl p-12 max-w-4xl mx-auto"
      style={{
        backgroundImage: "url('/rectangle28.png'), linear-gradient(180deg, #00131F 22.3%, #DA5D0C 104.85%)",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
      }}
      aria-label="Contact Us Form"
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
    >
      {/* Glowing heading */}
      <h2
        className={`text-white font-inter font-extrabold text-[96px] leading-none tracking-[6.72px] select-none mb-12 transition-opacity duration-300 ${
          focused ? 'opacity-100' : 'opacity-30'
        }`}
      >
        Contact Us
      </h2>

      <form onSubmit={handleFormSubmit} className="space-y-8" noValidate>
        <div className="grid gap-6 md:grid-cols-2">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Your Name"
            className={`w-full rounded-lg px-5 py-4 font-inter text-white bg-[#233d4d] border-2 outline-none transition-colors duration-300 ${
              focused ? 'border-[#da5d0c]' : 'border-gray-600'
            }`}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Your Email"
            className={`w-full rounded-lg px-5 py-4 font-inter text-white bg-[#233d4d] border-2 outline-none transition-colors duration-300 ${
              focused ? 'border-[#da5d0c]' : 'border-gray-600'
            }`}
            required
          />
        </div>
        <textarea
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Your Message"
          className={`w-full rounded-lg px-5 py-4 font-inter text-white bg-[#233d4d] border-2 outline-none resize-none transition-colors duration-300 ${
            focused ? 'border-[#da5d0c]' : 'border-gray-600'
          }`}
          required
        />

        {/* Checkboxes */}
        <div className="flex flex-col space-y-4 font-inter text-white text-sm">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleInputChange}
              className="h-5 w-5 rounded border-gray-300 bg-white checked:bg-[#da5d0c] checked:border-[#da5d0c]"
            />
            <span>Subscribe to newsletter</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleInputChange}
              required
              className="h-5 w-5 rounded border-gray-300 bg-white checked:bg-[#da5d0c] checked:border-[#da5d0c]"
            />
            <span>I agree to the Privacy Policy</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-[321px] h-[94px] rounded-[51px] bg-[#00131F] bg-opacity-80 font-inter font-semibold text-[36px] text-[#DA5D0C] transition-colors duration-300 hover:bg-opacity-100"
        >
          Let's Connect
        </button>
      </form>
    </section>
  );
}
