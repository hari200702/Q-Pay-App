import React from 'react';
import posImage from "../assets/image.png";

const PromoBanner = () => {
  return (
    <div className="rounded-2xl overflow-hidden mb-8">
      <div className="flex">
        {/* Left Section - Green Background */}
        <div className="flex-1 bg-green-600 p-8 flex flex-col justify-center text-white">
          <h2 className="text-4xl font-bold mb-3">
            Pay ₹1/month* for the QPay<br />
            POS Device
          </h2>
          <p className="text-lg mb-6 opacity-90">
            One device for accepting all modes of payments
          </p>
          <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-fit">
            Download App Now!
          </button>
        </div>

        {/* Right Section - White Background with Image */}
        <div className="bg-white flex items-center justify-center w-[406px] h-[291px]">
          <img
            src={posImage}
            alt="QPay POS Device"
            className="max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
