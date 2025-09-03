import React from 'react';

const StatsCard = ({ number, label }) => {
  return (
    <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
      <h3 className="text-3xl font-bold text-green-800">{number}</h3>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  );
};

export default StatsCard;