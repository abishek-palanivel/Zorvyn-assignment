import React from 'react';
import { useFinance } from '../store/FinanceContext';

const Sidebar = () => {
  const { activeTab, setActiveTab } = useFinance();
  const tabs = ['Dashboard', 'Transactions', 'Analytics', 'Settings'];

  return (
    <aside style={{
      width: '250px',
      backgroundColor: 'var(--sidebar-bg)',
      color: 'var(--sidebar-text)',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px'
    }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--sidebar-active)', marginBottom: '40px' }}>
        FinDash
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {tabs.map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '10px 12px',
              borderRadius: '8px',
              backgroundColor: activeTab === tab ? 'var(--accent-color)' : 'transparent',
              color: activeTab === tab ? 'white' : 'var(--sidebar-text)',
              fontWeight: activeTab === tab ? '600' : 'normal',
              textAlign: 'left',
              width: '100%',
              transition: 'background-color 0.2s',
              cursor: 'pointer'
            }}
          >
            {tab}
          </button>
        ))}
      </nav>
      
      <div style={{ marginTop: 'auto', padding: '12px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
        <p style={{ fontSize: '12px', color: '#888' }}>Powered by React</p>
      </div>
    </aside>
  );
};

export default Sidebar;
