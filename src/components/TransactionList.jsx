import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const TransactionList = ({ title, total, data, buttonText }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/history");
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <h3 className="text-xs font-medium text-gray-500 uppercase">{title}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl md:text-2xl font-bold text-gray-800">{total}</span>
          <ChevronRightIcon className="w-4 md:w-5 h-4 md:h-5 text-gray-400" />
        </div>
      </div>

      <div className="flex-1 space-y-3 md:space-y-4 min-h-[120px]">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-800 text-sm md:text-base">{item.name}</p>
              <p className="text-xs md:text-sm text-gray-500">{item.date}</p>
            </div>
            <span className="font-medium text-gray-800 text-sm md:text-base">{item.amount}</span>
          </div>
        ))}
      </div>

      <button
        onClick={handleButtonClick}
        className="w-full bg-green-600 text-white py-2.5 md:py-3 rounded-lg font-medium hover:bg-green-700 transition-colors mt-4 md:mt-6 text-sm md:text-base"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default TransactionList;