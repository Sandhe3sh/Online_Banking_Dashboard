  import React, { useState } from 'react';
  import { BrowserRouter as Router, Routes, Route, Link, Navigate, useParams } from 'react-router-dom';

  import AccountDashboard from './components/AccountDashboard';
  import AccountDetails from './components/AccountDetails';
  import CreateAccountForm from './components/CreateAccountForm';
  import DepositForm from './components/DepositForm';
  import WithdrawForm from './components/WithdrawForm';
  import TransferForm from './components/TransferForm';

  function App() {
    const [selectedAccountId, setSelectedAccountId] = useState(null);

    return (
      <Router>
        <div>
          <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
            <Link to="/accounts" style={{ marginRight: '1rem' }}>Accounts</Link>
            <Link to="/create">Create Account  </Link>
        
            <Link to="/deposit" style={{ marginRight: '1rem' }}>Deposit</Link>
<Link to="/withdraw" style={{ marginRight: '1rem' }}>Withdraw</Link>
<Link to="/transfer" style={{ marginRight: '1rem' }}>Transfer</Link>

          </nav>

          <Routes>
            {/* Redirect root to /accounts */}
            <Route path="/" element={<Navigate to="/accounts" replace />} />

            {/* List accounts */}
            <Route
              path="/accounts"
              element={
                <AccountDashboard
                  onSelectAccount={(id) => setSelectedAccountId(id)}
                  selectedAccountId={selectedAccountId}
                />
              }
            />

            {/* Account details and transaction history */}
            <Route
              path="/accounts/:accountId"
              element={<AccountDetailsWrapper />}
            />

            {/* Create a new account */}
            <Route path="/create" element={<CreateAccountForm />} />

            {/* Deposit money */}
            <Route path="/deposit" element={<DepositForm />} />

            {/* Withdraw money */}
            <Route path="/withdraw" element={<WithdrawForm />} />

            {/* Transfer money */}
            <Route path="/transfer" element={<TransferForm />} />

            {/* Fallback route */}
            <Route path="*" element={<h2>404 - Page Not Found</h2>} />
          </Routes>
        </div>
      </Router>
    );
  }

  // Wrapper component to get accountId param from URL
  function AccountDetailsWrapper() {
    const { accountId } = useParams();
    return <AccountDetails accountId={parseInt(accountId)} />;
  }

  export default App;


  