import React from 'react';
import Card from './Card';

const SummaryCard = ({ title, amount, trend, isPositive }) => {
  const formattedAmount = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);

  // Set color: Neutral for Balance, Green for Income, Red for Expense
  let textColor = 'var(--text-primary)';
  if (title.includes('Income')) textColor = 'var(--income-color)';
  if (title.includes('Expense')) textColor = 'var(--expense-color)';

  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '8px', fontWeight: '500' }}>
            {title}
          </p>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: textColor }}>
            {formattedAmount}
          </h2>
        </div>
        <div style={{
          backgroundColor: isPositive ? 'var(--income-bg)' : 'var(--expense-bg)',
          color: isPositive ? 'var(--income-color)' : 'var(--expense-color)',
          padding: '4px 8px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: '600'
        }}>
          {trend}
        </div>
      </div>
    </Card>
  );
};

export default SummaryCard;
