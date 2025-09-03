import React from 'react';

const PieChart = () => {
    const progress = 30; // You can make this dynamic later
    const radius = 56;
    const circumference = 2 * Math.PI * radius;
    const progressOffset = circumference - (progress / 100) * circumference;

    return (
        <div className="p-6">
            <h3 className="text-xl font-medium text-gray-500 uppercase mb-6">
                Profile
            </h3>

            {/* Progress + Details side by side */}
            <div className="flex justify-center items-center space-x-10">
                {/* Circular Progress */}
                <div className="relative">
                    <svg className="w-32 h-32 transform -rotate-90">
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
                            strokeLinecap="round"   // ✅ makes stroke ends rounded
                            className="transition-all duration-300"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold text-green-500">{progress}%</span>
                    </div>
                </div>

                {/* Details */}
                <div className="text-left max-w-xs">
                    <h4 className="font-semibold text-gray-800 mb-2">
                        Complete your profile
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start">
                            <span className="mr-2">•</span>Personal KYC
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>Company KYC
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>Onboarding details
                        </li>
                    </ul>
                </div>
            </div>

            {/* Divider + Button BELOW everything */}
            <div className="mt-20">
                <div className="border-t border-gray-300 my-6"></div>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                    Next
                </button>
            </div>
        </div>
    );
};

export default PieChart;
