import React from 'react';
import StatsCard from '../components/StatsCard';
import PieChart from '../components/PieChart';
import QRSection from '../components/QRSection';
import TransactionList from '../components/TransactionList';
import PromoBanner from '../components/PromoBanner';
import { 
  statsData, 
  settlementData, 
  transactionData, 
  SETTLEMENT_TOTAL, 
  TRANSACTION_TOTAL 
} from '../utils/homePageData';

const HomePage = () => {
  const handleSettleNow = () => {
    console.log('Settle now clicked');
  };

  const handleViewAllTransactions = () => {
    console.log('View all transactions clicked');
  };

  return (
    <div>
    
      <div className="hidden md:block transition-transform transform hover:scale-105 hover:shadow-lg">
        <PromoBanner />
      </div>


      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
        {statsData.map((stat) => (
          <div 
            key={stat.id} 
            className="transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <StatsCard 
              number={stat.number} 
              label={stat.label} 
              trend={stat.trend}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-lg">
          <PieChart />
        </div>
        <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-lg">
          <QRSection />
        </div>
        <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-lg">
          <TransactionList 
            title="SETTLEMENT" 
            total={SETTLEMENT_TOTAL} 
            data={settlementData}
            buttonText="Settle Now"
            onButtonClick={handleSettleNow}
          />
        </div>
        <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-lg">
          <TransactionList 
            title="TOTAL TRANSACTIONS" 
            total={TRANSACTION_TOTAL} 
            data={transactionData}
            buttonText="View All"
            onButtonClick={handleViewAllTransactions}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;