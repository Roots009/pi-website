"use client";

import React from 'react';

const AddressSection = () => {
  const textColor = '#00131F';
  const headingColor = '#00131F'; // Using the same color for consistency, as per your image.
  const officeAddresses = [
    {
      city: "Bangalore",
      address: "Kasturi Nagar, 4th Floor, No. 1AA-124-D, Sri Raj Building, East of NGEF, Bengaluru, Bengaluru Urban, Karnataka- 560043"
    },
    {
      city: "Hyderabad",
      address: "2nd, Flat No. 32, Bharani Complex, Minister Road, Secunderabad, Hyderabad, Telangana-500003"
    },
    {
      city: "Kerela",
      address: "Opp. Bharat Matha College, 8th, D-80, Infra Futura Building, Seaport Airport Road, Kalamassery, Emakulam, Kerala-682021"
    },
    {
      city: "Cochin",
      address: "No. 55/914, 137 B. Ground Floor, Panampilly Nagar, Cochin-682036"
    },
  ];

  return (
    <div className="py-12 px-4" style={{ backgroundColor: '#fff' }}> {/* Assuming a white background for this section */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Corporate Office Address */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: headingColor }}>Corporate Office Address</h3>
            <div className="text-base leading-relaxed" style={{ color: textColor }}>
              <p>813, C 2 Skyline Wealth Space,</p>
              <p>Premier Road, Near DMart,</p>
              <p>Vidyavihar (West),</p>
              <p>Mumbai – 400 086</p>
              <p>Maharashtra, INDIA</p>
              <p className="mt-4">Ph: +91-7738322228</p>
            </div>
          </div>

          {/* Branch Offices */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: headingColor }}>Branch Offices</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {officeAddresses.map((office, index) => (
                <div key={index}>
                  <p className="font-semibold mb-1" style={{ color: headingColor }}>{office.city}</p>
                  <p className="text-sm leading-snug" style={{ color: textColor }}>{office.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressSection;
