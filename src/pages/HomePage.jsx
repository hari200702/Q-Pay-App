import React from 'react';
import StatsCard from '../components/StatsCard';
import PieChart from '../components/PieChart';
import QRSection from '../components/QRSection';
import TransactionList from '../components/TransactionList';
import PromoBanner from '../components/PromoBanner';

const HomePage = () => {
  const stats = [
    { number: '1.5k', label: 'Account Holders' },
    { number: '2.1k', label: 'Transactions' },
    { number: '2.3k', label: 'Settlement' },
    { number: '45k', label: 'QR Orders' }
  ];

  const settlementData = [
    { name: 'Ibrahim', date: '23 Oct, 09:15 AM', amount: '+₹90' },
    { name: 'Ibrahim', date: '23 Oct, 09:15 AM', amount: '+₹90' },
    { name: 'Ibrahim', date: '23 Oct, 09:15 AM', amount: '+₹90' },
  ];

  const transactionData = [
    { name: 'Ibrahim', date: '23 Oct, 09:15 AM', amount: '+₹90' },
    { name: 'Ibrahim', date: '23 Oct, 09:15 AM', amount: '+₹90' },
    { name: 'Ibrahim', date: '23 Oct, 09:15 AM', amount: '+₹90' },
  ];

  return (
    <div>
      {/* Top Card Section - Leave empty for now */}
      <PromoBanner />


      {/* Stats Section */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} number={stat.number} label={stat.label} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <PieChart />
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <QRSection />
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <TransactionList 
            title="SETTLEMENT" 
            total="₹1,23,816.19" 
            data={settlementData}
            buttonText="Settle Now"
          />
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <TransactionList 
            title="TOTAL TRANSACTIONS" 
            total="₹1,23,816.19" 
            data={transactionData}
            buttonText="View All"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;