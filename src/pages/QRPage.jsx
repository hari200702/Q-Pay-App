import React, { useState } from 'react';
import QRCodeDisplay from '../components/QRCodeDisplay';
import QRCodeList from '../components/QRCodeList';

const QRPage = () => {
  const [activeTab, setActiveTab] = useState('active');

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage QR/POS</h1>
      
      <div className="grid grid-cols-2 gap-6">
        {/* Left Section - QR Display */}
        <QRCodeDisplay />
        
        {/* Right Section - QR List */}
        <QRCodeList activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export default QRPage;