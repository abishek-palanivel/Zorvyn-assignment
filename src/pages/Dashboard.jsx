import React from 'react';
import Card from '../components/Card';
import SummaryCard from '../components/SummaryCard';
import TransactionsTable from '../components/TransactionsTable';
import InsightsPanel from '../components/InsightsPanel';
import { useFinance } from '../store/FinanceContext';

const Dashboard = () => {
  const { transactions } = useFinance();

  // Basic calculations
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);
    
  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Summary Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px'
      }}>
        <SummaryCard 
          title="Total Balance" 
          amount={balance} 
          trend="+2.5%" 
          isPositive={balance >= 0} 
        />
        <SummaryCard 
          title="Total Income" 
          amount={totalIncome} 
          trend="+5.2%" 
          isPositive={true} 
        />
        <SummaryCard 
          title="Total Expenses" 
          amount={totalExpenses} 
          trend="-1.2%" 
          isPositive={false} 
        />
      </div>

      {/* Main Content Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '24px'
      }}>
        <Card title="Recent Transactions" style={{ minHeight: '400px' }}>
          <TransactionsTable />
        </Card>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <Card title="Insights & Breakdown">
            <InsightsPanel />
          </Card>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
