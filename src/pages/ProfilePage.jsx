import React from 'react';
import {
  BuildingLibraryIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  CpuChipIcon,
  CreditCardIcon,
  CogIcon,
  UsersIcon,
  LanguageIcon
} from '@heroicons/react/24/outline';

import Promobanner1 from '../components/Promobanner1';

const ProfilePage = () => {
  const profileCards = [
    {
      icon: BuildingLibraryIcon,
      title: 'XXXX 9820',
      subtitle: 'ICICI Bank | Chennai',
      description: 'Egmore Branch'
    },
    {
      icon: DocumentTextIcon,
      title: 'Business Profile',
      subtitle: 'View and edit your',
      description: 'business details'
    },
    {
      icon: ShieldCheckIcon,
      title: 'KYC Verification',
      subtitle: 'Unlock exclusive',
      description: 'benefits with KYC'
    },
    {
      icon: ShoppingCartIcon,
      title: 'Order QR',
      subtitle: 'Get paid, manage &',
      description: 'order QRs'
    }
  ];

  const businessServices = [
    { icon: CpuChipIcon, label: 'Smart Speaker' },
    { icon: CreditCardIcon, label: 'POS Machine' }
  ];

  const manageBusinessItems = [
    { icon: CogIcon, label: 'Payment Settings' },
    { icon: UsersIcon, label: 'Manage Staff' },
    { icon: LanguageIcon, label: 'Change Language' }
  ];

  return (
    <div>
      {/* Banner Section - Empty space like HomePage */}
      <div className="mb-8">
        <Promobanner1 />
      </div>

      {/* Profile Cards Grid */}
      {/* Profile Cards Grid */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {profileCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                {/* Green circular icon */}
                <div className="bg-green-100 p-3 rounded-full">
                  <Icon className="w-6 h-6 text-green-700" />
                </div>
                {/* Arrow in green */}
                <span className="text-green-600 text-2xl">›</span>
              </div>
              {/* All text in green */}
              <h3 className="font-semibold text-green-700 mb-1">{card.title}</h3>
              <p className="text-sm text-green-600">{card.subtitle}</p>
              <p className="text-sm text-green-600">{card.description}</p>
            </div>
          );
        })}
      </div>


      {/* Business Services and Manage Business Section */}
      {/* Business Services and Manage Business Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Business Services */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xs font-medium text-gray-500 uppercase mb-8">Business Services</h2>
          <div className="flex gap-8">
            {businessServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="text-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <div className="bg-gray-100 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-7 h-7 text-gray-700" />
                  </div>
                  <p className="text-xs text-gray-700">{service.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Manage Business */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xs font-medium text-gray-500 uppercase mb-8">Manage Business</h2>
          <div className="flex gap-8">
            {manageBusinessItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <div className="bg-gray-100 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-7 h-7 text-gray-700" />
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