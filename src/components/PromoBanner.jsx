import React from 'react';
import tapImage from "../assets/pay.jpg"

const PromoBanner = () => {
  return (
    <div className="bg-green-600 rounded-2xl overflow-hidden mb-8 relative">
      <div className="flex items-center h-[290px]">
        <div className="flex-1 p-8 text-white z-10">
          <h2 className="text-4xl font-bold mb-3">
            Pay ₹1/month* for the QPay<br />
            POS Device
          </h2>
          <p className="text-lg mb-6 opacity-90">
            One device for accepting all modes of payments
          </p>
          <button className="bg-white text-green-600 px-5 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Download App Now!
          </button>
        </div>
        <div className="absolute top-0 right-0 w-1/4 h-full overflow-hidden">
          <div className="absolute inset-0 bg-white transform skew-x-[-15deg] translate-x-10"></div>
        </div>
        <div className="relative z-10 pr-8">
          <img
            src={tapImage}
            alt="QPay POS Device"
            className="h-[160px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
