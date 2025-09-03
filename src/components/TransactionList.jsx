import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const TransactionList = ({ title, total, data, buttonText }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <h3 className="text-xs font-medium text-gray-500 uppercase">{title}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-2xl font-bold text-gray-800">{total}</span>
          <ChevronRightIcon className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div className="flex-1 space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
            <span className="font-medium text-gray-800">{item.amount}</span>
          </div>
        ))}
      </div>

      <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors mt-6">
        {buttonText}
      </button>
    </div>
  );
};

export default TransactionList;