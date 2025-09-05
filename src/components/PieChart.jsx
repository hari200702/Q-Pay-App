import React from 'react';

const PieChart = () => {
    const progress = 30;
    const radius = 56;
    const circumference = 2 * Math.PI * radius;
    const progressOffset = circumference - (progress / 100) * circumference;

    return (
        <div className="p-4 md:p-6 h-full flex flex-col">
            <h3 className="text-lg md:text-xl font-medium text-gray-500 uppercase mb-4 md:mb-6">
                Profile
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 md:space-x-10 space-y-4 sm:space-y-0">
                <div className="relative flex-shrink-0">
                    <svg 
                        viewBox="0 0 128 128" 
                        className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 transform -rotate-90"
                    >
                        <circle
                            cx="64"
                            cy="64"
                            r={radius}
                            stroke="#e5e7eb"
                            strokeWidth="12"
                            fill="none"
                        />
                        <circle
                            cx="64"
                            cy="64"
                            r={radius}
                            stroke="#10b981"
                            strokeWidth="12"
                            fill="none"
                            strokeDasharray={circumference}
                            strokeDashoffset={progressOffset}
                            strokeLinecap="round"
                            className="transition-all duration-300"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-green-500">{progress}%</span>
                    </div>
                </div>
                <div className="text-center sm:text-left max-w-xs">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">
                        Complete your profile
                    </h4>
                    <ul className="text-xs md:text-sm text-gray-600 space-y-1 md:space-y-2">
                        <li className="flex items-start justify-center sm:justify-start">
                            <span className="mr-2">•</span>Personal KYC
                        </li>
                        <li className="flex items-start justify-center sm:justify-start">
                            <span className="mr-2">•</span>Company KYC
                        </li>
                        <li className="flex items-start justify-center sm:justify-start">
                            <span className="mr-2">•</span>Onboarding details
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex-1 min-h-[2rem]"></div>
            <div className="mt-6 md:mt-8">
                <div className="border-t border-gray-300 mb-4 md:mb-6"></div>
                <button className="w-full bg-green-600 text-white py-2.5 md:py-3 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm md:text-base">
                    Next
                </button>
            </div>
        </div>
    );
};

export default PieChart;
