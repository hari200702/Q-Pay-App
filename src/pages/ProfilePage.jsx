
import React from 'react';
import Promobanner1 from '../components/Promobanner1';
import { profileCards, businessServices, manageBusinessItems } from '../utils/profileData';

const ProfilePage = () => {
  return (
    <div>
      <div className="hidden md:block mb-8 transition-transform transform hover:scale-105 hover:shadow-lg">
        <Promobanner1 />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
        {profileCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 
                         cursor-pointer transition-transform transform 
                         hover:scale-105 hover:shadow-lg"
            >
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <div className="bg-green-100 p-2 md:p-3 rounded-full">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-green-700" />
                </div>
                <span className="text-green-600 text-xl md:text-2xl">›</span>
              </div>
              <h3 className="font-semibold text-green-700 mb-1 text-sm md:text-base">{card.title}</h3>
              <p className="text-xs md:text-sm text-green-600">{card.subtitle}</p>
              <p className="text-xs md:text-sm text-green-600">{card.description}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
          <h2 className="text-xs font-medium text-gray-500 uppercase mb-6 md:mb-8">Business Services</h2>
          <div className="flex justify-around md:gap-8 md:justify-start">
            {businessServices.map((service) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id}
                  className="text-center cursor-pointer hover:bg-gray-50 
                             p-2 rounded-lg transition-colors"
                >
                  <div className="bg-gray-100 w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-gray-700" />
                  </div>
                  <p className="text-xs text-gray-700">{service.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
          <h2 className="text-xs font-medium text-gray-500 uppercase mb-6 md:mb-8">Manage Business</h2>
          <div className="flex justify-around md:gap-8 md:justify-start">
            {manageBusinessItems.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id}
                  className="text-center cursor-pointer hover:bg-gray-50 
                             p-2 rounded-lg transition-colors"
                >
                  <div className="bg-gray-100 w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-gray-700" />
                  </div>
                  <p className="text-xs text-gray-700">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;