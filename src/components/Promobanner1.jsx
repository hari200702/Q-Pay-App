import React from 'react';
import tapImage from "../assets/tap.jpg"

const Promobanner1 = () => {
  return (
    <div className="bg-green-600 rounded-2xl overflow-hidden mb-6 md:mb-8 relative">
      <div className="flex flex-col md:flex-row items-center min-h-[200px] md:h-[290px]">
        <div className="flex-1 p-6 md:p-8 text-white z-10 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">
            Pay ₹1/month* for the QPay<br className="hidden md:inline" />
            <span className="md:hidden"> </span>POS Device
          </h2>
          <p className="text-sm md:text-lg mb-4 md:mb-6 opacity-90">
            One device for accepting all modes of payments
          </p>
          <button className="bg-white text-green-600 px-4 md:px-5 py-2 md:py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm md:text-base">
            Download App Now!
          </button>
        </div>
        <div className="hidden md:block absolute top-0 right-0 w-1/4 h-full overflow-hidden">
          <div className="absolute inset-0 bg-white transform skew-x-[-15deg] translate-x-10"></div>
        </div>
        <div className="relative z-10 pb-4 md:pb-0 md:pr-8">
          <img
            src={tapImage}
            alt="QPay POS Device"
            className="h-[120px] md:h-[160px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Promobanner1;
