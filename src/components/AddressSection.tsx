'use client';

import React from 'react';

export default function AddressSection() {
  return (
    <section className="bg-white py-20 px-6 sm:px-12 md:px-24 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-20">
        {/* Corporate Office */}
        <div style={{ width: 471, height: 177, flexShrink: 0 }}>
          <h3
            className="font-inter font-bold"
            style={{
              color: '#294250',
              fontSize: 32,
              lineHeight: '28px',
              marginBottom: '1rem',
            }}
          >
            Corporate Office Address
          </h3>
          <p
            className="font-inter"
            style={{
              color: '#294250',
              fontSize: 24,
              fontWeight: 400,
              lineHeight: '28px',
              whiteSpace: 'pre-line',
            }}
          >
            {`813, C 2 Skyline Wealth Space,
Premier Road, Near DMart,
Vidyavihar (West), 
Mumbai – 400 086
Maharashtra, INDIA
Ph: +91-7738322228`}
          </p>
        </div>

        {/* Branch Offices */}
        <div>
          <h3
            className="font-inter font-bold mb-8"
            style={{
              color: '#294250',
              fontSize: 32,
              lineHeight: '28px',
              width: 555,
              height: 48,
              flexShrink: 0,
            }}
          >
            Branch Offices
          </h3>
          <div className="space-y-6">
            <div style={{ width: 555, height: 113, flexShrink: 0 }}>
              <h4
                className="font-inter font-semibold mb-1"
                style={{
                  color: '#294250',
                  fontSize: 24,
                  lineHeight: '28px',
                }}
              >
                Bangalore
              </h4>
              <p
                className="font-inter"
                style={{
                  color: '#294250',
                  fontSize: 24,
                  fontWeight: 400,
                  lineHeight: '28px',
                  whiteSpace: 'normal',
                }}
              >
                Kasturi Nagar, 4th Floor, No. 1AA-124-D, Sri Raj Building, East of NGEF, Bengaluru, Bengaluru Urban, Karnataka - 560043
              </p>
            </div>

            {/* Add other branch offices similarly here */}
          </div>
        </div>
      </div>
    </section>
  );
}
