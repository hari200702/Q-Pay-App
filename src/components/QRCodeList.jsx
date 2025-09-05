
import React, { useState } from 'react';
import { ChevronRightIcon, ChevronDownIcon, ChevronUpIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { activeQRCodes, qrRequests, QR_REQUEST_STATUS_OPTIONS } from '../utils/qrCodeData';

const QRCodeList = ({ activeTab, setActiveTab }) => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState({});

  const handleCardExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const handleStatusSelect = (index, status) => {
    setSelectedStatus(prev => ({
      ...prev,
      [index]: status
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-full min-h-[400px] lg:min-h-[600px]">
      <div className="p-3 md:p-4 border-b border-gray-100">
        <div className="flex rounded-lg bg-gray-100 p-1">
          <button
            onClick={() => setActiveTab('active')}
            className={`flex-1 py-2 px-2 md:px-4 rounded-md font-medium transition-all text-sm md:text-base ${
              activeTab === 'active'
                ? 'bg-green-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Active QR Codes
          </button>
          <button
            onClick={() => setActiveTab('requests')}
            className={`flex-1 py-2 px-2 md:px-4 rounded-md font-medium transition-all text-sm md:text-base ${
              activeTab === 'requests'
                ? 'bg-green-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            QR Code Requests
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3 md:p-4">
        {activeTab === 'active' ? (
          <div className="space-y-3">
            {activeQRCodes.map((qr, index) => (
              <div
                key={`${qr.id}-${index}`}
                className="border border-gray-200 rounded-lg p-3 md:p-4 hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <img
                      src={qr.qrImage}
                      alt="QR Code"
                      className="w-10 h-10 md:w-12 md:h-12"
                    />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm md:text-base">{qr.id}</p>
                      <p className="text-xs md:text-sm text-gray-500">{qr.name}</p>
                      <p className="text-xs text-gray-400">{qr.merchantId}</p>
                      <p className="text-xs text-gray-400">{qr.terminal}</p>
                    </div>
                  </div>
                  <ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5 text-gray-400 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {qrRequests.map((request, index) => {
              const isExpanded = expandedCard === index;
              const currentStatus = selectedStatus[index] || request.status;
              
              return (
                <div
                  key={`${request.id}-${index}`}
                  className="border border-gray-200 rounded-lg p-3 md:p-4"
                >
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <img
                      src={request.qrImage}
                      alt="QR Code"
                      className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 text-sm md:text-base">{request.name}</p>
                      <p className="text-xs md:text-sm text-gray-500 mt-1">{request.address}</p>
                      <p className="text-xs text-gray-400 mt-1">{request.date}</p>

                      <div className="mt-3 w-full">
                        <div 
                          onClick={() => handleCardExpand(index)}
                          className="bg-green-50 text-green-700 text-xs md:text-sm px-3 py-2 rounded-full flex items-center justify-between cursor-pointer hover:bg-green-100 transition-colors w-full"
                        >
                          <div className="flex items-center">
                            <CheckCircleIcon className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                            <span>{currentStatus}</span>
                          </div>
                          {isExpanded ? (
                            <ChevronUpIcon className="w-3 h-3 md:w-4 md:h-4" />
                          ) : (
                            <ChevronDownIcon className="w-3 h-3 md:w-4 md:h-4" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>


                  {isExpanded && (
                    <div className="bg-green-50 px-3 md:px-4 py-3 md:py-4 mt-3 -mx-3 md:-mx-4 -mb-3 md:-mb-4 border-t border-green-200">
                      <div className="space-y-2">
                        {QR_REQUEST_STATUS_OPTIONS.map((status) => {
                          const isSelected = currentStatus === status;
                          const isAccepted = status === 'QR Request Accepted';
                          
                          return (
                            <div
                              key={status}
                              onClick={() => handleStatusSelect(index, status)}
                              className="flex items-center space-x-3 p-2 hover:bg-green-100 rounded-lg cursor-pointer transition-colors"
                            >
                              {isAccepted && isSelected ? (
                                <CheckCircleIcon className="w-5 h-5 text-green-700" />
                              ) : (
                                <div className={`w-5 h-5 rounded-full border-2 ${
                                  isSelected ? 'border-green-700 bg-green-700' : 'border-gray-400'
                                }`}>
                                  {isSelected && (
                                    <svg className="w-full h-full text-white p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                  )}
                                </div>
                              )}
                              <span className={`text-sm md:text-base ${
                                isSelected ? 'text-green-700 font-medium' : 'text-gray-600'
                              }`}>
                                {status}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="p-3 md:p-4 border-t border-gray-100">
        <button className="w-full bg-green-600 text-white py-2.5 md:py-3 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm md:text-base">
          Request more QR Codes
        </button>
      </div>
    </div>
  );
};

export default QRCodeList;