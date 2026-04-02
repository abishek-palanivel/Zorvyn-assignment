import React from 'react';
import MainLayout from './layout/MainLayout';
import Dashboard from './pages/Dashboard';
import TransactionsTable from './components/TransactionsTable';
import InsightsPanel from './components/InsightsPanel';
import Card from './components/Card';
import { useFinance } from './store/FinanceContext';

function App() {
  const { activeTab } = useFinance();

  return (
    <MainLayout>
      {activeTab === 'Dashboard' && <Dashboard />}
      {activeTab === 'Transactions' && (
        <Card title="All Transactions" style={{ minHeight: '600px' }}>
          <TransactionsTable />
        </Card>
      )}
      {activeTab === 'Analytics' && (
        <Card title="Financial Analytics" style={{ minHeight: '600px' }}>
          <InsightsPanel />
        </Card>
      )}
      {activeTab === 'Settings' && (
        <Card title="Settings" style={{ minHeight: '600px' }}>
           <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>Manage your application preferences here.</p>
           <p>Change your appearance or role using the Topbar toggles.</p>
        </Card>
      )}
    </MainLayout>
  );
}

export default App;
