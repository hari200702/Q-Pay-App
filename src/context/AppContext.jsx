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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const value = {
    user,
    setUser,
    loading,
    setLoading,
    error,
    setError
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};