import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {

  const [user, setUser] = useState({
    name: 'Thomas Shelby',
    avatar: null
  });
  

  const [transactions, setTransactions] = useState([]);
  const [transactionLoading, setTransactionLoading] = useState(false);
  const [transactionError, setTransactionError] = useState(null);
  const [globalFilter, setGlobalFilter] = useState('');
  const [hasLoadedTransactions, setHasLoadedTransactions] = useState(false);

  const fetchTransactionHistory = async (page = 0, forceRefresh = false) => {
    try {

      if (hasLoadedTransactions && !forceRefresh && transactions.length > 0) {
        return transactions;
      }

      setTransactionLoading(true);
      setTransactionError(null);
      
      const response = await fetch(
        `http://localhost:3001/proxy/wallet/api/v1/transaction_history?service_id=111&page=${page}`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      if (result.status && result.data) {
        setTransactions(result.data);
        setHasLoadedTransactions(true);
        return result.data;
      }
    } catch (error) {
      console.error('Error fetching transaction history:', error);
      setTransactionError(error.message);
      setTransactions([]);
    } finally {
      setTransactionLoading(false);
    }
  };

  const value = {
    user,
    setUser,
    
    transactions,
    transactionLoading,
    transactionError,
    globalFilter,
    setGlobalFilter,
    fetchTransactionHistory
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};