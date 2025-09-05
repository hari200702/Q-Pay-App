import React from 'react';
import { DocumentDuplicateIcon, ShareIcon } from '@heroicons/react/24/outline';

const QRCodeDisplay = () => {
  return (
    <div className="bg-white rounded-xl p-4 md:p-6 lg:p-8 shadow-sm border border-gray-100">
      <div className="flex justify-center mb-4 md:mb-6">
        <div className="flex items-center">
          <span className="bg-green-600 text-white w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center font-bold text-xl md:text-2xl">
            Q
          </span>
          <span className="text-xl md:text-2xl font-bold text-gray-800 ml-2">Pay</span>
        </div>
      </div>

      <div className="flex justify-center mb-4 md:mb-6">
        <div className="w-[280px] h-[280px] p-3 md:p-4 border-4 border-black rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/QR_Code_Example.svg"
            alt="UPI QR Code for QPay payments" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="text-center mb-4 md:mb-6">
        <p className="text-sm md:text-base text-gray-600 mb-2">UPI ID: 9876543210@qpay</p>
        <button className="text-green-600 hover:text-green-700 flex items-center justify-center mx-auto">
          <DocumentDuplicateIcon className="w-4 h-4 mr-1" />
          <span className="text-sm">Copy</span>
        </button>
        <p className="text-xs md:text-sm text-gray-500 mt-2">Ibrahim Mohammedali</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
        <button className="flex-1 bg-gray-100 text-gray-700 py-2.5 md:py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center text-sm md:text-base">
          <DocumentDuplicateIcon className="w-4 h-4 md:w-5 md:h-5 mr-2" />
          Download
        </button>
        <button className="flex-1 bg-gray-100 text-gray-700 py-2.5 md:py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center text-sm md:text-base">
          <ShareIcon className="w-4 h-4 md:w-5 md:h-5 mr-2" />
          Share
        </button>
      </div>
    </div>
  );
};

export default QRCodeDisplay;
