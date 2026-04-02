import React from 'react';

const Sidebar = () => {
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
        <a href="#" style={{ color: 'var(--sidebar-active)', fontWeight: '600', padding: '10px 12px', backgroundColor: 'var(--accent-color)', borderRadius: '8px' }}>Dashboard</a>
        <a href="#" style={{ padding: '10px 12px', borderRadius: '8px' }}>Transactions</a>
        <a href="#" style={{ padding: '10px 12px', borderRadius: '8px' }}>Analytics</a>
        <a href="#" style={{ padding: '10px 12px', borderRadius: '8px' }}>Settings</a>
      </nav>
      
      <div style={{ marginTop: 'auto', padding: '12px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
        <p style={{ fontSize: '12px', color: '#888' }}>Powered by React</p>
      </div>
    </aside>
  );
};

export default Sidebar;
