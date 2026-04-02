import React from 'react';
import { useFinance } from '../store/FinanceContext';

const InsightsPanel = () => {
  const { transactions } = useFinance();

  // Basic category aggregation
  const expensesByCategory = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, curr) => {
      acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
      return acc;
    }, {});

  const sortedCategories = Object.entries(expensesByCategory).sort((a, b) => b[1] - a[1]);
  const highestCategory = sortedCategories.length > 0 ? sortedCategories[0] : null;

  // Render a minimal horizontal bar chart
  const maxAmount = highestCategory ? highestCategory[1] : 1;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {highestCategory ? (
        <div style={{ padding: '16px', backgroundColor: 'var(--bg-color)', borderRadius: '8px' }}>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Highest spending category:</p>
          <h4 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--expense-color)' }}>
            {highestCategory[0]}
          </h4>
          <p style={{ fontSize: '16px', fontWeight: 'bold' }}>
            ₹{highestCategory[1].toFixed(0)}
          </p>
        </div>
      ) : (
        <p style={{ color: 'var(--text-secondary)' }}>No expense data available.</p>
      )}

      <div>
        <h4 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--text-secondary)' }}>Spending Breakdown</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {sortedCategories.slice(0, 4).map(([category, amount]) => {
            const widthPercentage = Math.min((amount / maxAmount) * 100, 100);
            return (
              <div key={category}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px' }}>
                  <span>{category}</span>
                  <span style={{ fontWeight: '600' }}>₹{amount.toFixed(0)}</span>
                </div>
                <div style={{ height: '8px', width: '100%', backgroundColor: 'var(--bg-color)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ 
                    height: '100%', 
                    width: `${widthPercentage}%`, 
                    backgroundColor: 'var(--accent-color)',
                    borderRadius: '4px',
                    transition: 'width 1s ease-out'
                  }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InsightsPanel;
