import React, { createContext, useContext, useState, useEffect } from 'react';
import { generateMockTransactions } from '../data/mockData';

const FinanceContext = createContext();

export const useFinance = () => useContext(FinanceContext);

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [role, setRole] = useState('VIEWER'); // VIEWER or ADMIN
  const [theme, setTheme] = useState('light');
  
  // Basic filter states
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [dateSort, setDateSort] = useState('desc');

  useEffect(() => {
    // Load initial data
    setTransactions(generateMockTransactions());
    
    // Check local storage for theme
    const savedTheme = localStorage.getItem('finance-dashboard-theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('finance-dashboard-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const addTransaction = (txn) => {
    if (role !== 'ADMIN') return;
    
    const newTxn = {
      ...txn,
      id: `txn-${Date.now()}`,
    };
    setTransactions(prev => [newTxn, ...prev]);
  };

  const deleteTransaction = (id) => {
    if (role !== 'ADMIN') return;
    setTransactions(prev => prev.filter(t => t.id !== id));
  };

  const value = {
    transactions,
    role,
    setRole,
    theme,
    toggleTheme,
    addTransaction,
    deleteTransaction,
    categoryFilter,
    setCategoryFilter,
    dateSort,
    setDateSort
  };

  return (
    <FinanceContext.Provider value={value}>
      {children}
    </FinanceContext.Provider>
  );
};
