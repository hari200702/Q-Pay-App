import React, { useState, useEffect, useMemo } from 'react';
import { ClockIcon, MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';
import HistoryTable from '../components/HistoryTable';
import { COLUMNS } from '../utils/historyColumns';

const HistoryPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [globalFilter, setGlobalFilter] = useState('');

  const columns = useMemo(() => COLUMNS, []);

  useEffect(() => {
    fetchTransactionHistory();
  }, []);

  const fetchTransactionHistory = async () => {
    try {
      setLoading(true);
      
      const response = await fetch('http://localhost:3001/proxy/wallet/api/v1/transaction_history?service_id=111&page=0');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      if (result.status && result.data) {
        setData(result.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setGlobalFilter(e.target.value);
  };

  return (
    <div>
      {/* Header section with title and download button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Settlement History</h1>
        <button className="px-4 py-2 border bg-green-600 text-white rounded-lg hover:bg-green-700">
          Download statement
        </button>
      </div>

      {/* Search Controls */}
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

      {/* Timer Banner */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center justify-between">
        <div className="flex items-center">
          <ClockIcon className="w-5 h-5 text-green-600 mr-2" />
          <span className="text-sm text-gray-700">
            Today's total collection will be auto-settled by <strong>08:00AM, 23rd Oct'22</strong> Tomorrow.
          </span>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center">
          <span className="mr-2">⚡</span>
          Settle Now!
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {loading ? (
          <div className="p-8 text-center">Loading...</div>
        ) : data.length > 0 ? (
          <HistoryTable 
            columns={columns} 
            data={data} 
            globalFilter={globalFilter}
          />
        ) : (
          <div className="p-8 text-center text-gray-500">
            No transactions found
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;