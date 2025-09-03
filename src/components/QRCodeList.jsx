import React from 'react';
import { ChevronRightIcon, ChevronDownIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const QRCodeList = ({ activeTab, setActiveTab }) => {
  const activeQRCodes = [
    {
      id: 'Q201946579',
      name: 'All Marketing Sales-',
      merchantId: 'MS190304115533164898023',
      terminal: 'Terminal 1'
    },
    {
      id: 'Q201946579',
      name: 'All Marketing Sales-',
      merchantId: 'MS190304115533164898023',
      terminal: 'Terminal 2'
    },
    {
      id: 'Q201946579',
      name: 'All Marketing Sales-',
      merchantId: 'MS190304115533164898023',
      terminal: 'Terminal 3'
    },
    {
      id: 'Q201946579',
      name: 'All Marketing Sales-',
      merchantId: 'MS190304115533164898023',
      terminal: 'Terminal 4'
    }
  ];

  const qrRequests = [
    {
      id: 'Q201946579',
      name: 'All Marketing Sales',
      address: '93, Bharathi Nagar, VOC Port Authority, Tuticorin, 628004.',
      date: 'Requested on 26.04.202',
      status: 'QR Request Accepted'
    },
    {
      id: 'Q201946579',
      name: 'All Marketing Sales',
      address: '93, Bharathi Nagar, VOC Port Authority, Tuticorin, 628004.',
      date: 'Requested on 26.04.202',
      status: 'QR Request Accepted'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
      {/* Toggle Buttons */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex rounded-lg bg-gray-100 p-1">
          <button
            onClick={() => setActiveTab('active')}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
              activeTab === 'active'
                ? 'bg-green-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Active QR Codes
          </button>
          <button
            onClick={() => setActiveTab('requests')}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
              activeTab === 'requests'
                ? 'bg-green-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            QR Code Requests
          </button>
        </div>
      </div>

      {/* List Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === 'active' ? (
          // Active QR Codes Tab
          <div className="space-y-3">
            {activeQRCodes.map((qr, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/4/41/QR_Code_Example.svg"
                      alt="QR Code" 
                      className="w-12 h-12"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{qr.id}</p>
                      <p className="text-sm text-gray-500">{qr.name}</p>
                      <p className="text-xs text-gray-400">{qr.merchantId}</p>
                      <p className="text-xs text-gray-400">{qr.terminal}</p>
                    </div>
                  </div>
                  <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          // QR Code Requests Tab
          <div className="space-y-3">
            {qrRequests.map((request, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start space-x-4">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/4/41/QR_Code_Example.svg"
                    alt="QR Code" 
                    className="w-12 h-12 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{request.name}</p>
                    <p className="text-sm text-gray-500 mt-1">{request.address}</p>
                    <p className="text-xs text-gray-400 mt-1">{request.date}</p>
                    
                    {/* Status with dropdown - 80% width */}
                    <div className="mt-3 w-5/5">
                      <div className="bg-green-50 text-green-700 text-sm px-3 py-2 rounded-full flex items-center justify-between cursor-pointer hover:bg-green-100 transition-colors">
                        <div className="flex items-center">
                          <CheckCircleIcon className="w-4 h-4 mr-1" />
                          <span>{request.status}</span>
                        </div>
                        <ChevronDownIcon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Button */}
      <div className="p-4 border-t border-gray-100">
        <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
          Request more QR Codes
        </button>
      </div>
    </div>
  );
};

export default QRCodeList;