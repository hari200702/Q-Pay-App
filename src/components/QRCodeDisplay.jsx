import React from 'react';
import { DocumentDuplicateIcon, ShareIcon } from '@heroicons/react/24/outline';

const QRCodeDisplay = () => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
      {/* QPay Logo */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center">
          <span className="bg-green-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-2xl">
            Q
          </span>
          <span className="text-2xl font-bold text-gray-800 ml-2">Pay</span>
        </div>
      </div>

      {/* QR Code */}
      <div className="flex justify-center mb-6">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/4/41/QR_Code_Example.svg"
          alt="QR Code" 
          className="w-70 h-70 p-4 border-4 border-black rounded-lg"
        />
      </div>

      {/* UPI ID */}
      <div className="text-center mb-6">
        <p className="text-gray-600 mb-2">UPI ID: 9876543210@qpay</p>
        <button className="text-green-600 hover:text-green-700 flex items-center justify-center mx-auto">
          <DocumentDuplicateIcon className="w-4 h-4 mr-1" />
          <span className="text-sm">Copy</span>
        </button>
        <p className="text-sm text-gray-500 mt-2">Ibrahim Mohammedali</p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center">
          <DocumentDuplicateIcon className="w-5 h-5 mr-2" />
          Download
        </button>
        <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center">
          <ShareIcon className="w-5 h-5 mr-2" />
          Share
        </button>
      </div>
    </div>
  );
};

export default QRCodeDisplay;