import React from 'react';

const Card = ({ title, children, style }) => {
  return (
    <div style={{
      backgroundColor: 'var(--card-bg)',
      borderRadius: 'var(--border-radius)',
      padding: '24px',
      boxShadow: 'var(--shadow-md)',
      border: '1px solid var(--border-color)',
      ...style
    }}>
      {title && (
        <h3 style={{ 
          marginBottom: '20px', 
          fontSize: '18px', 
          fontWeight: '600',
          color: 'var(--text-primary)'
        }}>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

export default Card;
