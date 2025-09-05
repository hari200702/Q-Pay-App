import React, { useState } from 'react';
import QRCodeDisplay from '../components/QRCodeDisplay';
import QRCodeList from '../components/QRCodeList';

const QRPage = () => {
  const [activeTab, setActiveTab] = useState('active');

  return (
    <div>
      <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Manage QR/POS</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">

        <div className="order-2 lg:order-1">
          <QRCodeDisplay />
        </div>
        
        <div className="order-1 lg:order-2">
          <QRCodeList activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </div>
  );
};

export default QRPage;