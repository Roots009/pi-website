"use client";

import React, { useState } from "react";

const ContactSpotlightForm = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  return (
    <>
      <div
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center p-4"
        style={{
          backgroundImage: `url('/ContactUs.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto max-w-md">
          <div className="text-center mb-8">
            <h1
              className="text-3xl font-extrabold text-white mb-8 tracking-wide opacity-80"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
            >
              Contact Us
            </h1>
          </div>

          <form action="#" method="POST" className="space-y-6">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              className={`block w-full px-4 py-3 rounded-lg focus:outline-none bg-white/45 placeholder-gray-900 transition-colors duration-300 text-center font-normal text-gray-900 ${
                nameValue ? "font-bold" : ""
              }`}
            />

            <input
              type="email"
              id="email-id"
              name="email-id"
              placeholder="Enter Email-Id"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              className={`block w-full px-4 py-3 rounded-lg focus:outline-none bg-white/45 placeholder-gray-900 transition-colors duration-300 text-center font-normal text-gray-900 ${
                emailValue ? "font-bold" : ""
              }`}
            />

            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Message"
              value={messageValue}
              onChange={(e) => setMessageValue(e.target.value)}
              className={`block w-full px-4 py-3 rounded-lg focus:outline-none bg-white/45 placeholder-gray-900 transition-colors duration-300 text-center font-normal text-gray-900 ${
                messageValue ? "font-bold" : ""
              }`}
            ></textarea>

            {/* ✅ Fixed Checkboxes */}
            <div className="space-y-4 text-white text-sm">
              <label className="flex items-center group cursor-pointer">
                <input type="checkbox" required className="peer hidden" />
                <span
                  className="w-5 h-5 border-2 border-white rounded-md flex items-center justify-center 
                  transition-colors duration-300 peer-hover:bg-white peer-checked:bg-white"
                ></span>
                <span className="ml-2 font-bold text-white">
                  I agree to the PROBOX Privacy Policy.
                </span>
              </label>

              <label className="flex items-center group cursor-pointer">
                <input type="checkbox" className="peer hidden" />
                <span
                  className="w-5 h-5 border-2 border-white rounded-md flex items-center justify-center 
                  transition-colors duration-300 peer-hover:bg-white peer-checked:bg-white"
                ></span>
                <span className="ml-2 font-bold text-white">
                  Get the latest from PROBOX.
                </span>
              </label>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 bg-gray-800 text-white font-bold rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-orange-500 hover:shadow-orange-500/50 hover:ring-2 hover:ring-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              >
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
