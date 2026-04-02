import React from 'react';
import { useFinance } from '../store/FinanceContext';

const Topbar = () => {
  const { role, setRole, theme, toggleTheme } = useFinance();

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 24px',
      backgroundColor: 'var(--card-bg)',
      borderBottom: '1px solid var(--border-color)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div>
        <h2 style={{ fontSize: '20px', fontWeight: '500' }}>Overview</h2>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button 
          onClick={toggleTheme}
          style={{
            padding: '8px 12px',
            borderRadius: '6px',
            backgroundColor: 'var(--bg-color)',
            border: '1px solid var(--border-color)'
          }}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <label style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Role:</label>
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value)}
            style={{
              padding: '6px 10px',
              borderRadius: '6px',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-color)',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
          >
            <option value="VIEWER">Viewer</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>
        
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent-color)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold'
        }}>
          U
        </div>
      </div>
    </header>
  );
};

export default Topbar;
