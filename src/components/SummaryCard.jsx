import React from 'react';
import Card from './Card';

const SummaryCard = ({ title, amount, trend, isPositive }) => {
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);

  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '8px' }}>
            {title}
          </p>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: 'var(--text-primary)' }}>
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
