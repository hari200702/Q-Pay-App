import React, { useMemo, useEffect, useState } from 'react';
import { ClockIcon, MagnifyingGlassIcon, FunnelIcon, XMarkIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline';
import HistoryTable from '../components/HistoryTable';
import { COLUMNS } from '../utils/historyColumns';
import { useAppContext } from '../context/AppContext';

const HistoryPage = () => {
  const {
    transactions,
    transactionLoading,
    transactionError,
    globalFilter,
    setGlobalFilter,
    fetchTransactionHistory,
    user
  } = useAppContext();

  const [showSettleModal, setShowSettleModal] = useState(false);

  const columns = useMemo(() => COLUMNS, []);

  useEffect(() => {
    fetchTransactionHistory();
  }, []);

  const handleSearch = (e) => {
    setGlobalFilter(e.target.value);
  };

  const handleRefresh = () => {
    fetchTransactionHistory(0, true); 
  };

  const handleDownloadStatement = () => {
    console.log('Downloading statement...');
  
  };

  const handleSettleNow = () => {
    setShowSettleModal(true);
  };

  const handleCloseModal = () => {
    setShowSettleModal(false);
  };

  const handleConfirmSettle = () => {
    console.log('Processing settlement...');
    setShowSettleModal(false);
  };

  if (transactionError) {
    return (
      <div className="p-8 text-center">
        <div className="text-red-600 mb-4">Error: {transactionError}</div>
        <button
          onClick={handleRefresh}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Settlement History</h1>
        <button
          onClick={handleDownloadStatement}
          className="px-4 py-2 border bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Download statement
        </button>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <div className="relative flex-1">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={globalFilter}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>
        <button className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          <FunnelIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center justify-between">
        <div className="flex items-center">
          <ClockIcon className="w-5 h-5 text-green-600 mr-2" />
          <span className="text-sm text-gray-700">
            Today's total collection will be auto-settled by <strong>08:00AM, 23rd Oct'22</strong> Tomorrow.
          </span>
        </div>
        <button
          onClick={handleSettleNow}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center"
        >
          <ClockIcon className="w-5 h-5 mr-2" />
          Settle Now!
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {transactionLoading ? (
          <div className="p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading transactions...</p>
          </div>
        ) : transactions.length > 0 ? (
          <HistoryTable
            columns={columns}
            data={transactions}
            globalFilter={globalFilter}
          />
        ) : (
          <div className="p-8 text-center text-gray-500">
            No transactions found
          </div>
        )}
      </div>


      {showSettleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={handleCloseModal}
          ></div>

          <div className="relative bg-white rounded-2xl max-w-2xl w-full mx-4 shadow-xl overflow-hidden">
            <div className="flex justify-between items-center p-8 pb-6">
              <h2 className="text-2xl font-semibold">Manage QR/POS</h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="px-8 pb-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BuildingLibraryIcon className="w-6 h-6 text-gray-600" />
                  <span className="text-lg">Today's Total Collection</span>
                </div>
                <span className="text-2xl font-semibold">₹1,023</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BuildingLibraryIcon className="w-6 h-6 text-green-600" />
                  <span className="text-lg text-green-600">Already Settled</span>
                </div>
                <span className="text-2xl font-semibold">₹100</span>
              </div>
            </div>

            <div className="px-8 pb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-6">SETTLEMENT CALCULATION</h3>

                <div className="grid grid-cols-2 gap-y-6">
                  <div className="text-gray-500">Amount yet to be settled</div>
                  <div className="text-right">
                    <div className="font-semibold text-lg">{user?.name?.toUpperCase() || 'IBRAHIM MOHAMMEDALI'}</div>
                  </div>

                  <div className="text-gray-500">Past pending amount</div>
                  <div className="text-right">
                    <div className="text-gray-700">092141241127</div>
                  </div>

                  <div className="text-gray-500">Charges</div>
                  <div className="text-right">
                    <div className="text-gray-700">07, Aug 2024</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50">
              <div className="px-8 pt-8 pb-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <BuildingLibraryIcon className="w-6 h-6 text-gray-600" />
                    <span className="text-lg">Today's Total Collection</span>
                  </div>
                  <span className="text-2xl font-semibold">₹1,023</span>
                </div>

                <p className="text-gray-600 mb-4">
                  Tap 'Settle Now' to instantly get settlements in your bank account.
                </p>

                <p className="text-green-600 font-semibold text-lg mb-6">
                  Settle Now is Chargeable
                </p>

                <div className="flex justify-end">
                  <button
                    onClick={handleConfirmSettle}
                    className="bg-green-600 text-white px-12 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    Settle Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryPage;