import React, { useState } from 'react';
import { useFinance } from '../store/FinanceContext';

const TransactionsTable = () => {
  const { 
    transactions, 
    role, 
    deleteTransaction,
    addTransaction,
    categoryFilter,
    setCategoryFilter,
    dateSort,
    setDateSort
  } = useFinance();

  const [isAdding, setIsAdding] = useState(false);
  const [newTxn, setNewTxn] = useState({ date: '', merchant: '', category: '', amount: '', type: 'expense' });

  const handleAdd = (e) => {
    e.preventDefault();
    if(!newTxn.merchant || !newTxn.amount) return;
    addTransaction({
      ...newTxn,
      amount: parseFloat(newTxn.amount)
    });
    setIsAdding(false);
    setNewTxn({ date: '', merchant: '', category: '', amount: '', type: 'expense' });
  };

  // Create unique categories for filter dropdown
  const categories = ['All', ...new Set(transactions.map(t => t.category))];

  // Filtering
  const filteredTransactions = transactions.filter(t => {
    if (categoryFilter === 'All') return true;
    return t.category === categoryFilter;
  });

  // Sorting
  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateSort === 'desc' ? dateB - dateA : dateA - dateB;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
      
      {/* Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <select 
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            style={{
              padding: '6px 10px',
              borderRadius: '6px',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-color)',
              color: 'var(--text-primary)'
            }}
          >
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>

          <select 
            value={dateSort}
            onChange={(e) => setDateSort(e.target.value)}
            style={{
              padding: '6px 10px',
              borderRadius: '6px',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-color)',
              color: 'var(--text-primary)'
            }}
          >
            <option value="desc">Newest First</option>
            <option value="asc">Oldest First</option>
          </select>
        </div>
        
        {role === 'ADMIN' && (
          <button 
            onClick={() => setIsAdding(!isAdding)}
            style={{
              padding: '8px 16px',
              backgroundColor: 'var(--accent-color)',
              color: 'white',
              borderRadius: '6px',
              fontWeight: '500',
              fontSize: '14px'
            }}>
            {isAdding ? 'Cancel' : '+ Add Transaction'}
          </button>
        )}
      </div>

      {isAdding && (
        <form onSubmit={handleAdd} style={{ display: 'flex', gap: '8px', padding: '12px', backgroundColor: 'var(--bg-color)', borderRadius: '8px', flexWrap: 'wrap' }}>
          <input type="date" required value={newTxn.date} onChange={e => setNewTxn({...newTxn, date: e.target.value})} style={{ padding: '6px', borderRadius: '4px', border: '1px solid var(--border-color)' }} />
          <input type="text" placeholder="Merchant" required value={newTxn.merchant} onChange={e => setNewTxn({...newTxn, merchant: e.target.value})} style={{ padding: '6px', borderRadius: '4px', border: '1px solid var(--border-color)' }} />
          <input type="text" placeholder="Category" required value={newTxn.category} onChange={e => setNewTxn({...newTxn, category: e.target.value})} style={{ padding: '6px', borderRadius: '4px', border: '1px solid var(--border-color)' }} />
          <input type="number" step="0.01" placeholder="Amount" required value={newTxn.amount} onChange={e => setNewTxn({...newTxn, amount: e.target.value})} style={{ padding: '6px', borderRadius: '4px', border: '1px solid var(--border-color)' }} />
          <select value={newTxn.type} onChange={e => setNewTxn({...newTxn, type: e.target.value})} style={{ padding: '6px', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
          <button type="submit" style={{ padding: '6px 12px', backgroundColor: 'var(--income-color)', color: 'white', borderRadius: '4px' }}>Save</button>
        </form>
      )}

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-secondary)', fontSize: '14px' }}>
              <th style={{ padding: '12px 8px', fontWeight: '500' }}>Date</th>
              <th style={{ padding: '12px 8px', fontWeight: '500' }}>Merchant</th>
              <th style={{ padding: '12px 8px', fontWeight: '500' }}>Category</th>
              <th style={{ padding: '12px 8px', fontWeight: '500', textAlign: 'right' }}>Amount</th>
              {role === 'ADMIN' && <th style={{ padding: '12px 8px', fontWeight: '500', textAlign: 'center' }}>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {sortedTransactions.length > 0 ? (
              sortedTransactions.map(txn => (
                <tr key={txn.id} style={{ borderBottom: '1px solid var(--border-color)', fontSize: '14px' }}>
                  <td style={{ padding: '12px 8px', color: 'var(--text-secondary)' }}>
                    {new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(txn.date))}
                  </td>
                  <td style={{ padding: '12px 8px', fontWeight: '500', color: 'var(--text-primary)' }}>
                    {txn.merchant}
                  </td>
                  <td style={{ padding: '12px 8px' }}>
                    <span style={{
                      backgroundColor: 'var(--bg-color)',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      color: 'var(--text-secondary)'
                    }}>
                      {txn.category}
                    </span>
                  </td>
                  <td style={{ 
                    padding: '12px 8px', 
                    textAlign: 'right',
                    fontWeight: '600',
                    color: txn.type === 'income' ? 'var(--income-color)' : 'var(--text-primary)'
                  }}>
                    {txn.type === 'income' ? '+' : '-'}${txn.amount.toFixed(2)}
                  </td>
                  {role === 'ADMIN' && (
                    <td style={{ padding: '12px 8px', textAlign: 'center' }}>
                      <button 
                        onClick={() => deleteTransaction(txn.id)}
                        style={{ color: 'var(--expense-color)', fontSize: '13px', padding: '4px 8px' }}
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={role === 'ADMIN' ? 5 : 4} style={{ textAlign: 'center', padding: '24px', color: 'var(--text-secondary)' }}>
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;
