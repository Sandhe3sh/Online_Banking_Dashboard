// // // //   import React, { useState } from 'react';
// // // //   import { BrowserRouter as Router, Routes, Route, Link, Navigate, useParams } from 'react-router-dom';

// // // //   import AccountDashboard from './components/AccountDashboard';
// // // //   import AccountDetails from './components/AccountDetails';
// // // //   import CreateAccountForm from './components/CreateAccountForm';
// // // //   import DepositForm from './components/DepositForm';
// // // //   import WithdrawForm from './components/WithdrawForm';
// // // //   import TransferForm from './components/TransferForm';

// // // //   function App() {
// // // //     const [selectedAccountId, setSelectedAccountId] = useState(null);

// // // //     return (
// // // //       <Router>
// // // //         <div>
// // // //           <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
// // // //             <Link to="/accounts" style={{ marginRight: '1rem' }}>Accounts</Link>
// // // //             <Link to="/create">Create Account  </Link>
        
// // // //             <Link to="/deposit" style={{ marginRight: '1rem' }}>Deposit</Link>
// // // // <Link to="/withdraw" style={{ marginRight: '1rem' }}>Withdraw</Link>
// // // // <Link to="/transfer" style={{ marginRight: '1rem' }}>Transfer</Link>

// // // //           </nav>

// // // //           <Routes>
// // // //             {/* Redirect root to /accounts */}
// // // //             <Route path="/" element={<Navigate to="/accounts" replace />} />

// // // //             {/* List accounts */}
// // // //             <Route
// // // //               path="/accounts"
// // // //               element={
// // // //                 <AccountDashboard
// // // //                   onSelectAccount={(id) => setSelectedAccountId(id)}
// // // //                   selectedAccountId={selectedAccountId}
// // // //                 />
// // // //               }
// // // //             />

// // // //             {/* Account details and transaction history */}
// // // //             <Route
// // // //               path="/accounts/:accountId"
// // // //               element={<AccountDetailsWrapper />}
// // // //             />

// // // //             {/* Create a new account */}
// // // //             <Route path="/create" element={<CreateAccountForm />} />

// // // //             {/* Deposit money */}
// // // //             <Route path="/deposit" element={<DepositForm />} />

// // // //             {/* Withdraw money */}
// // // //             <Route path="/withdraw" element={<WithdrawForm />} />

// // // //             {/* Transfer money */}
// // // //             <Route path="/transfer" element={<TransferForm />} />

// // // //             {/* Fallback route */}
// // // //             <Route path="*" element={<h2>404 - Page Not Found</h2>} />
// // // //           </Routes>
// // // //         </div>
// // // //       </Router>
// // // //     );
// // // //   }

// // // //   // Wrapper component to get accountId param from URL
// // // //   function AccountDetailsWrapper() {
// // // //     const { accountId } = useParams();
// // // //     return <AccountDetails accountId={parseInt(accountId)} />;
// // // //   }

// // // //   export default App;


// // // //   import React, { useState } from 'react';
// // // // import { BrowserRouter as Router, Routes, Route, Link, Navigate, useParams } from 'react-router-dom';

// // // // import AccountDashboard from './components/AccountDashboard';
// // // // import AccountDetails from './components/AccountDetails';
// // // // import CreateAccountForm from './components/CreateAccountForm';
// // // // import DepositForm from './components/DepositForm';
// // // // import WithdrawForm from './components/WithdrawForm';
// // // // import TransferForm from './components/TransferForm';

// // // // // Add modern CSS styles
// // // // const styles = `
// // // //   * {
// // // //     margin: 0;
// // // //     padding: 0;
// // // //     box-sizing: border-box;
// // // //   }

// // // //   body {
// // // //     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
// // // //                 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
// // // //                 sans-serif;
// // // //     -webkit-font-smoothing: antialiased;
// // // //     -moz-osx-font-smoothing: grayscale;
// // // //     background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
// // // //     min-height: 100vh;
// // // //     color: #333;
// // // //   }

// // // //   .app-container {
// // // //     min-height: 100vh;
// // // //     background: rgba(255, 255, 255, 0.1);
// // // //     backdrop-filter: blur(10px);
// // // //   }

// // // //   .navbar {
// // // //     background: rgba(255, 255, 255, 0.95);
// // // //     backdrop-filter: blur(20px);
// // // //     padding: 1rem 2rem;
// // // //     box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
// // // //     border-bottom: 1px solid rgba(255, 255, 255, 0.2);
// // // //     position: sticky;
// // // //     top: 0;
// // // //     z-index: 100;
// // // //   }

// // // //   .navbar-content {
// // // //     max-width: 1200px;
// // // //     margin: 0 auto;
// // // //     display: flex;
// // // //     align-items: center;
// // // //     gap: 2rem;
// // // //   }

// // // //   .logo {
// // // //     font-size: 1.5rem;
// // // //     font-weight: 700;
// // // //     background: linear-gradient(45deg, #667eea, #764ba2);
// // // //     -webkit-background-clip: text;
// // // //     -webkit-text-fill-color: transparent;
// // // //     background-clip: text;
// // // //     text-decoration: none;
// // // //   }

// // // //   .nav-links {
// // // //     display: flex;
// // // //     gap: 1rem;
// // // //     align-items: center;
// // // //   }

// // // //   .nav-link {
// // // //     text-decoration: none;
// // // //     color: #4a5568;
// // // //     font-weight: 500;
// // // //     padding: 0.5rem 1rem;
// // // //     border-radius: 8px;
// // // //     transition: all 0.3s ease;
// // // //     position: relative;
// // // //   }

// // // //   .nav-link:hover {
// // // //     color: #667eea;
// // // //     background: rgba(102, 126, 234, 0.1);
// // // //     transform: translateY(-1px);
// // // //   }

// // // //   .nav-link.active {
// // // //     color: #667eea;
// // // //     background: rgba(102, 126, 234, 0.15);
// // // //   }

// // // //   .main-content {
// // // //     max-width: 1200px;
// // // //     margin: 0 auto;
// // // //     padding: 2rem;
// // // //   }

// // // //   .page-title {
// // // //     font-size: 2rem;
// // // //     font-weight: 700;
// // // //     margin-bottom: 2rem;
// // // //     color: #2d3748;
// // // //     text-align: center;
// // // //   }

// // // //   .card {
// // // //     background: rgba(255, 255, 255, 0.95);
// // // //     backdrop-filter: blur(20px);
// // // //     border-radius: 16px;
// // // //     box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
// // // //     border: 1px solid rgba(255, 255, 255, 0.2);
// // // //     overflow: hidden;
// // // //     transition: transform 0.3s ease, box-shadow 0.3s ease;
// // // //   }

// // // //   .card:hover {
// // // //     transform: translateY(-4px);
// // // //     box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
// // // //   }

// // // //   .card-header {
// // // //     padding: 1.5rem;
// // // //     border-bottom: 1px solid rgba(0, 0, 0, 0.05);
// // // //     background: linear-gradient(45deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
// // // //   }

// // // //   .card-title {
// // // //     font-size: 1.25rem;
// // // //     font-weight: 600;
// // // //     color: #2d3748;
// // // //     margin: 0;
// // // //   }

// // // //   .card-body {
// // // //     padding: 1.5rem;
// // // //   }

// // // //   .form-group {
// // // //     margin-bottom: 1.5rem;
// // // //   }

// // // //   .form-label {
// // // //     display: block;
// // // //     margin-bottom: 0.5rem;
// // // //     font-weight: 500;
// // // //     color: #4a5568;
// // // //     font-size: 0.875rem;
// // // //     text-transform: uppercase;
// // // //     letter-spacing: 0.05em;
// // // //   }

// // // //   .form-input {
// // // //     width: 100%;
// // // //     padding: 0.75rem 1rem;
// // // //     border: 2px solid #e2e8f0;
// // // //     border-radius: 8px;
// // // //     font-size: 1rem;
// // // //     transition: all 0.3s ease;
// // // //     background: rgba(255, 255, 255, 0.8);
// // // //   }

// // // //   .form-input:focus {
// // // //     outline: none;
// // // //     border-color: #667eea;
// // // //     box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
// // // //     background: rgba(255, 255, 255, 1);
// // // //   }

// // // //   .form-select {
// // // //     width: 100%;
// // // //     padding: 0.75rem 1rem;
// // // //     border: 2px solid #e2e8f0;
// // // //     border-radius: 8px;
// // // //     font-size: 1rem;
// // // //     transition: all 0.3s ease;
// // // //     background: rgba(255, 255, 255, 0.8);
// // // //     cursor: pointer;
// // // //   }

// // // //   .form-select:focus {
// // // //     outline: none;
// // // //     border-color: #667eea;
// // // //     box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
// // // //   }

// // // //   .btn {
// // // //     padding: 0.75rem 1.5rem;
// // // //     border: none;
// // // //     border-radius: 8px;
// // // //     font-size: 1rem;
// // // //     font-weight: 600;
// // // //     cursor: pointer;
// // // //     transition: all 0.3s ease;
// // // //     text-decoration: none;
// // // //     display: inline-flex;
// // // //     align-items: center;
// // // //     justify-content: center;
// // // //     gap: 0.5rem;
// // // //   }

// // // //   .btn-primary {
// // // //     background: linear-gradient(45deg, #667eea, #764ba2);
// // // //     color: white;
// // // //     box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
// // // //   }

// // // //   .btn-primary:hover {
// // // //     transform: translateY(-2px);
// // // //     box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
// // // //   }

// // // //   .btn-secondary {
// // // //     background: rgba(74, 85, 104, 0.1);
// // // //     color: #4a5568;
// // // //     border: 2px solid rgba(74, 85, 104, 0.2);
// // // //   }

// // // //   .btn-secondary:hover {
// // // //     background: rgba(74, 85, 104, 0.2);
// // // //     transform: translateY(-1px);
// // // //   }

// // // //   .btn-success {
// // // //     background: linear-gradient(45deg, #48bb78, #38a169);
// // // //     color: white;
// // // //     box-shadow: 0 4px 15px rgba(72, 187, 120, 0.3);
// // // //   }

// // // //   .btn-success:hover {
// // // //     transform: translateY(-2px);
// // // //     box-shadow: 0 6px 20px rgba(72, 187, 120, 0.4);
// // // //   }

// // // //   .btn-warning {
// // // //     background: linear-gradient(45deg, #ed8936, #dd6b20);
// // // //     color: white;
// // // //     box-shadow: 0 4px 15px rgba(237, 137, 54, 0.3);
// // // //   }

// // // //   .btn-warning:hover {
// // // //     transform: translateY(-2px);
// // // //     box-shadow: 0 6px 20px rgba(237, 137, 54, 0.4);
// // // //   }

// // // //   .btn-danger {
// // // //     background: linear-gradient(45deg, #f56565, #e53e3e);
// // // //     color: white;
// // // //     box-shadow: 0 4px 15px rgba(245, 101, 101, 0.3);
// // // //   }

// // // //   .btn-danger:hover {
// // // //     transform: translateY(-2px);
// // // //     box-shadow: 0 6px 20px rgba(245, 101, 101, 0.4);
// // // //   }

// // // //   .grid {
// // // //     display: grid;
// // // //     gap: 1.5rem;
// // // //   }

// // // //   .grid-cols-1 {
// // // //     grid-template-columns: 1fr;
// // // //   }

// // // //   .grid-cols-2 {
// // // //     grid-template-columns: repeat(2, 1fr);
// // // //   }

// // // //   .grid-cols-3 {
// // // //     grid-template-columns: repeat(3, 1fr);
// // // //   }

// // // //   @media (max-width: 768px) {
// // // //     .grid-cols-2,
// // // //     .grid-cols-3 {
// // // //       grid-template-columns: 1fr;
// // // //     }
    
// // // //     .navbar {
// // // //       padding: 1rem;
// // // //     }
    
// // // //     .nav-links {
// // // //       flex-wrap: wrap;
// // // //       gap: 0.5rem;
// // // //     }
    
// // // //     .main-content {
// // // //       padding: 1rem;
// // // //     }
// // // //   }

// // // //   .account-item {
// // // //     padding: 1.5rem;
// // // //     border: 2px solid rgba(0, 0, 0, 0.05);
// // // //     border-radius: 12px;
// // // //     transition: all 0.3s ease;
// // // //     cursor: pointer;
// // // //     background: rgba(255, 255, 255, 0.8);
// // // //   }

// // // //   .account-item:hover {
// // // //     border-color: #667eea;
// // // //     background: rgba(255, 255, 255, 1);
// // // //     transform: translateY(-2px);
// // // //   }

// // // //   .account-item.selected {
// // // //     border-color: #667eea;
// // // //     background: rgba(102, 126, 234, 0.05);
// // // //   }

// // // //   .balance {
// // // //     font-size: 1.5rem;
// // // //     font-weight: 700;
// // // //     color: #2d3748;
// // // //     margin: 0.5rem 0;
// // // //   }

// // // //   .balance.positive {
// // // //     color: #48bb78;
// // // //   }

// // // //   .balance.negative {
// // // //     color: #f56565;
// // // //   }

// // // //   .transaction-item {
// // // //     padding: 1rem;
// // // //     border-bottom: 1px solid rgba(0, 0, 0, 0.05);
// // // //     display: flex;
// // // //     justify-content: space-between;
// // // //     align-items: center;
// // // //   }

// // // //   .transaction-item:last-child {
// // // //     border-bottom: none;
// // // //   }

// // // //   .transaction-amount {
// // // //     font-weight: 600;
// // // //   }

// // // //   .transaction-amount.positive {
// // // //     color: #48bb78;
// // // //   }

// // // //   .transaction-amount.negative {
// // // //     color: #f56565;
// // // //   }

// // // //   .alert {
// // // //     padding: 1rem;
// // // //     border-radius: 8px;
// // // //     margin-bottom: 1rem;
// // // //     border-left: 4px solid;
// // // //   }

// // // //   .alert-success {
// // // //     background: rgba(72, 187, 120, 0.1);
// // // //     border-left-color: #48bb78;
// // // //     color: #2f855a;
// // // //   }

// // // //   .alert-error {
// // // //     background: rgba(245, 101, 101, 0.1);
// // // //     border-left-color: #f56565;
// // // //     color: #c53030;
// // // //   }

// // // //   .alert-info {
// // // //     background: rgba(102, 126, 234, 0.1);
// // // //     border-left-color: #667eea;
// // // //     color: #3182ce;
// // // //   }

// // // //   .loading {
// // // //     display: flex;
// // // //     justify-content: center;
// // // //     align-items: center;
// // // //     padding: 2rem;
// // // //   }

// // // //   .spinner {
// // // //     width: 40px;
// // // //     height: 40px;
// // // //     border: 4px solid rgba(102, 126, 234, 0.2);
// // // //     border-left-color: #667eea;
// // // //     border-radius: 50%;
// // // //     animation: spin 1s linear infinite;
// // // //   }

// // // //   @keyframes spin {
// // // //     to {
// // // //       transform: rotate(360deg);
// // // //     }
// // // //   }

// // // //   .fade-in {
// // // //     animation: fadeIn 0.5s ease-in-out;
// // // //   }

// // // //   @keyframes fadeIn {
// // // //     from {
// // // //       opacity: 0;
// // // //       transform: translateY(20px);
// // // //     }
// // // //     to {
// // // //       opacity: 1;
// // // //       transform: translateY(0);
// // // //     }
// // // //   }

// // // //   .text-center {
// // // //     text-align: center;
// // // //   }

// // // //   .text-muted {
// // // //     color: #718096;
// // // //   }

// // // //   .mb-4 {
// // // //     margin-bottom: 1rem;
// // // //   }

// // // //   .mt-4 {
// // // //     margin-top: 1rem;
// // // //   }

// // // //   .error-page {
// // // //     text-align: center;
// // // //     padding: 4rem 2rem;
// // // //   }

// // // //   .error-code {
// // // //     font-size: 4rem;
// // // //     font-weight: 700;
// // // //     background: linear-gradient(45deg, #667eea, #764ba2);
// // // //     -webkit-background-clip: text;
// // // //     -webkit-text-fill-color: transparent;
// // // //     background-clip: text;
// // // //     margin-bottom: 1rem;
// // // //   }

// // // //   .error-message {
// // // //     font-size: 1.25rem;
// // // //     color: #4a5568;
// // // //     margin-bottom: 2rem;
// // // //   }
// // // // `;

// // // // function App() {
// // // //   const [selectedAccountId, setSelectedAccountId] = useState(null);

// // // //   // Inject styles into the document
// // // //   React.useEffect(() => {
// // // //     const styleElement = document.createElement('style');
// // // //     styleElement.textContent = styles;
// // // //     document.head.appendChild(styleElement);
// // // //     return () => {
// // // //       document.head.removeChild(styleElement);
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <Router>
// // // //       <div className="app-container">
// // // //         <nav className="navbar">
// // // //           <div className="navbar-content">
// // // //             <Link to="/accounts" className="logo">
// // // //               💰 BankApp
// // // //             </Link>
// // // //             <div className="nav-links">
// // // //               <Link to="/accounts" className="nav-link">
// // // //                 Accounts
// // // //               </Link>
// // // //               <Link to="/create" className="nav-link">
// // // //                 Create Account
// // // //               </Link>
// // // //               <Link to="/deposit" className="nav-link">
// // // //                 Deposit
// // // //               </Link>
// // // //               <Link to="/withdraw" className="nav-link">
// // // //                 Withdraw
// // // //               </Link>
// // // //               <Link to="/transfer" className="nav-link">
// // // //                 Transfer
// // // //               </Link>
// // // //             </div>
// // // //           </div>
// // // //         </nav>

// // // //         <main className="main-content fade-in">
// // // //           <Routes>
// // // //             {/* Redirect root to /accounts */}
// // // //             <Route path="/" element={<Navigate to="/accounts" replace />} />

// // // //             {/* List accounts */}
// // // //             <Route
// // // //               path="/accounts"
// // // //               element={
// // // //                 <AccountDashboard
// // // //                   onSelectAccount={(id) => setSelectedAccountId(id)}
// // // //                   selectedAccountId={selectedAccountId}
// // // //                 />
// // // //               }
// // // //             />

// // // //             {/* Account details and transaction history */}
// // // //             <Route
// // // //               path="/accounts/:accountId"
// // // //               element={<AccountDetailsWrapper />}
// // // //             />

// // // //             {/* Create a new account */}
// // // //             <Route path="/create" element={<CreateAccountForm />} />

// // // //             {/* Deposit money */}
// // // //             <Route path="/deposit" element={<DepositForm />} />

// // // //             {/* Withdraw money */}
// // // //             <Route path="/withdraw" element={<WithdrawForm />} />

// // // //             {/* Transfer money */}
// // // //             <Route path="/transfer" element={<TransferForm />} />

// // // //             {/* Fallback route */}
// // // //             <Route 
// // // //               path="*" 
// // // //               element={
// // // //                 <div className="error-page">
// // // //                   <div className="error-code">404</div>
// // // //                   <div className="error-message">Page Not Found</div>
// // // //                   <Link to="/accounts" className="btn btn-primary">
// // // //                     Go to Accounts
// // // //                   </Link>
// // // //                 </div>
// // // //               } 
// // // //             />
// // // //           </Routes>
// // // //         </main>
// // // //       </div>
// // // //     </Router>
// // // //   );
// // // // }

// // // // // Wrapper component to get accountId param from URL
// // // // function AccountDetailsWrapper() {
// // // //   const { accountId } = useParams();
// // // //   return <AccountDetails accountId={parseInt(accountId)} />;
// // // // }

// // // // export default App;
// // // import React, { useState } from 'react';
// // // import { BrowserRouter as Router, Routes, Route, Link, Navigate, useParams } from 'react-router-dom';

// // // import AccountDashboard from './components/AccountDashboard';
// // // import AccountDetails from './components/AccountDetails';
// // // import CreateAccountForm from './components/CreateAccountForm';
// // // import DepositForm from './components/DepositForm';
// // // import WithdrawForm from './components/WithdrawForm';
// // // import TransferForm from './components/TransferForm';

// // // // Simple and clean CSS styles
// // // const styles = `
// // //   * {
// // //     margin: 0;
// // //     padding: 0;
// // //     box-sizing: border-box;
// // //   }

// // //   body {
// // //     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
// // //     background-color: #f5f5f5;
// // //     color: #333;
// // //     line-height: 1.6;
// // //   }

// // //   .app-container {
// // //     min-height: 100vh;
// // //     background-color: #f5f5f5;
// // //   }

// // //   .navbar {
// // //     background-color: #ffffff;
// // //     padding: 1rem 2rem;
// // //     box-shadow: 0 2px 4px rgba(0,0,0,0.1);
// // //     border-bottom: 1px solid #e0e0e0;
// // //   }

// // //   .navbar-content {
// // //     max-width: 1200px;
// // //     margin: 0 auto;
// // //     display: flex;
// // //     align-items: center;
// // //     gap: 2rem;
// // //   }

// // //   .logo {
// // //     font-size: 1.5rem;
// // //     font-weight: bold;
// // //     color: #2563eb;
// // //     text-decoration: none;
// // //   }

// // //   .nav-links {
// // //     display: flex;
// // //     gap: 1.5rem;
// // //     align-items: center;
// // //   }

// // //   .nav-link {
// // //     text-decoration: none;
// // //     color: #666;
// // //     font-weight: 500;
// // //     padding: 0.5rem 1rem;
// // //     border-radius: 6px;
// // //     transition: all 0.2s ease;
// // //   }

// // //   .nav-link:hover {
// // //     color: #2563eb;
// // //     background-color: #f3f4f6;
// // //   }

// // //   .main-content {
// // //     max-width: 1200px;
// // //     margin: 0 auto;
// // //     padding: 2rem;
// // //   }

// // //   .card {
// // //     background-color: #ffffff;
// // //     border-radius: 8px;
// // //     box-shadow: 0 2px 8px rgba(0,0,0,0.1);
// // //     border: 1px solid #e0e0e0;
// // //     overflow: hidden;
// // //     margin-bottom: 2rem;
// // //   }

// // //   .card-header {
// // //     padding: 1.5rem;
// // //     border-bottom: 1px solid #e0e0e0;
// // //     background-color: #fafafa;
// // //   }

// // //   .card-title {
// // //     font-size: 1.25rem;
// // //     font-weight: 600;
// // //     color: #333;
// // //     margin: 0;
// // //   }

// // //   .card-body {
// // //     padding: 1.5rem;
// // //   }

// // //   .form-group {
// // //     margin-bottom: 1.5rem;
// // //   }

// // //   .form-label {
// // //     display: block;
// // //     margin-bottom: 0.5rem;
// // //     font-weight: 500;
// // //     color: #555;
// // //   }

// // //   .form-input {
// // //     width: 100%;
// // //     padding: 0.75rem;
// // //     border: 1px solid #d1d5db;
// // //     border-radius: 6px;
// // //     font-size: 1rem;
// // //     background-color: #ffffff;
// // //     transition: border-color 0.2s ease;
// // //   }

// // //   .form-input:focus {
// // //     outline: none;
// // //     border-color: #2563eb;
// // //     box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
// // //   }

// // //   .form-select {
// // //     width: 100%;
// // //     padding: 0.75rem;
// // //     border: 1px solid #d1d5db;
// // //     border-radius: 6px;
// // //     font-size: 1rem;
// // //     background-color: #ffffff;
// // //     cursor: pointer;
// // //   }

// // //   .form-select:focus {
// // //     outline: none;
// // //     border-color: #2563eb;
// // //     box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
// // //   }

// // //   .btn {
// // //     padding: 0.75rem 1.5rem;
// // //     border: none;
// // //     border-radius: 6px;
// // //     font-size: 1rem;
// // //     font-weight: 500;
// // //     cursor: pointer;
// // //     text-decoration: none;
// // //     display: inline-block;
// // //     text-align: center;
// // //     transition: all 0.2s ease;
// // //   }

// // //   .btn-primary {
// // //     background-color: #2563eb;
// // //     color: white;
// // //   }

// // //   .btn-primary:hover {
// // //     background-color: #1d4ed8;
// // //   }

// // //   .btn-secondary {
// // //     background-color: #6b7280;
// // //     color: white;
// // //   }

// // //   .btn-secondary:hover {
// // //     background-color: #4b5563;
// // //   }

// // //   .btn-success {
// // //     background-color: #059669;
// // //     color: white;
// // //   }

// // //   .btn-success:hover {
// // //     background-color: #047857;
// // //   }

// // //   .btn-warning {
// // //     background-color: #d97706;
// // //     color: white;
// // //   }

// // //   .btn-warning:hover {
// // //     background-color: #b45309;
// // //   }

// // //   .btn-danger {
// // //     background-color: #dc2626;
// // //     color: white;
// // //   }

// // //   .btn-danger:hover {
// // //     background-color: #b91c1c;
// // //   }

// // //   .grid {
// // //     display: grid;
// // //     gap: 1.5rem;
// // //   }

// // //   .grid-cols-1 {
// // //     grid-template-columns: 1fr;
// // //   }

// // //   .grid-cols-2 {
// // //     grid-template-columns: repeat(2, 1fr);
// // //   }

// // //   .grid-cols-3 {
// // //     grid-template-columns: repeat(3, 1fr);
// // //   }

// // //   @media (max-width: 768px) {
// // //     .grid-cols-2,
// // //     .grid-cols-3 {
// // //       grid-template-columns: 1fr;
// // //     }
    
// // //     .navbar {
// // //       padding: 1rem;
// // //     }
    
// // //     .nav-links {
// // //       flex-wrap: wrap;
// // //       gap: 1rem;
// // //     }
    
// // //     .main-content {
// // //       padding: 1rem;
// // //     }
// // //   }

// // //   .account-item {
// // //     padding: 1.5rem;
// // //     border: 1px solid #e0e0e0;
// // //     border-radius: 8px;
// // //     background-color: #ffffff;
// // //     cursor: pointer;
// // //     transition: all 0.2s ease;
// // //   }

// // //   .account-item:hover {
// // //     border-color: #2563eb;
// // //     box-shadow: 0 2px 8px rgba(0,0,0,0.1);
// // //   }

// // //   .account-item.selected {
// // //     border-color: #2563eb;
// // //     background-color: #f0f9ff;
// // //   }

// // //   .balance {
// // //     font-size: 1.5rem;
// // //     font-weight: bold;
// // //     color: #333;
// // //     margin: 0.5rem 0;
// // //   }

// // //   .balance.positive {
// // //     color: #059669;
// // //   }

// // //   .balance.negative {
// // //     color: #dc2626;
// // //   }

// // //   .transaction-item {
// // //     padding: 1rem;
// // //     border-bottom: 1px solid #e0e0e0;
// // //     display: flex;
// // //     justify-content: space-between;
// // //     align-items: center;
// // //   }

// // //   .transaction-item:last-child {
// // //     border-bottom: none;
// // //   }

// // //   .transaction-amount {
// // //     font-weight: 600;
// // //   }

// // //   .transaction-amount.positive {
// // //     color: #059669;
// // //   }

// // //   .transaction-amount.negative {
// // //     color: #dc2626;
// // //   }

// // //   .alert {
// // //     padding: 1rem;
// // //     border-radius: 6px;
// // //     margin-bottom: 1rem;
// // //     border-left: 4px solid;
// // //   }

// // //   .alert-success {
// // //     background-color: #ecfdf5;
// // //     border-left-color: #059669;
// // //     color: #065f46;
// // //   }

// // //   .alert-error {
// // //     background-color: #fef2f2;
// // //     border-left-color: #dc2626;
// // //     color: #991b1b;
// // //   }

// // //   .alert-info {
// // //     background-color: #eff6ff;
// // //     border-left-color: #2563eb;
// // //     color: #1e40af;
// // //   }

// // //   .loading {
// // //     display: flex;
// // //     justify-content: center;
// // //     align-items: center;
// // //     padding: 2rem;
// // //   }

// // //   .spinner {
// // //     width: 32px;
// // //     height: 32px;
// // //     border: 3px solid #e0e0e0;
// // //     border-left-color: #2563eb;
// // //     border-radius: 50%;
// // //     animation: spin 1s linear infinite;
// // //   }

// // //   @keyframes spin {
// // //     to {
// // //       transform: rotate(360deg);
// // //     }
// // //   }

// // //   .text-center {
// // //     text-align: center;
// // //   }

// // //   .text-muted {
// // //     color: #6b7280;
// // //   }

// // //   .mb-4 {
// // //     margin-bottom: 1rem;
// // //   }

// // //   .mt-4 {
// // //     margin-top: 1rem;
// // //   }

// // //   .error-page {
// // //     text-align: center;
// // //     padding: 4rem 2rem;
// // //   }

// // //   .error-code {
// // //     font-size: 4rem;
// // //     font-weight: bold;
// // //     color: #2563eb;
// // //     margin-bottom: 1rem;
// // //   }

// // //   .error-message {
// // //     font-size: 1.25rem;
// // //     color: #6b7280;
// // //     margin-bottom: 2rem;
// // //   }
// // // `;

// // // function App() {
// // //   const [selectedAccountId, setSelectedAccountId] = useState(null);

// // //   // Inject styles into the document
// // //   React.useEffect(() => {
// // //     const styleElement = document.createElement('style');
// // //     styleElement.textContent = styles;
// // //     document.head.appendChild(styleElement);
// // //     return () => {
// // //       document.head.removeChild(styleElement);
// // //     };
// // //   }, []);

// // //   return (
// // //     <Router>
// // //       <div className="app-container">
// // //         <nav className="navbar">
// // //           <div className="navbar-content">
// // //             <Link to="/accounts" className="logo">
// // //               💰 BankApp
// // //             </Link>
// // //             <div className="nav-links">
// // //               <Link to="/accounts" className="nav-link">
// // //                 Accounts
// // //               </Link>
// // //               <Link to="/create" className="nav-link">
// // //                 Create Account
// // //               </Link>
// // //               <Link to="/deposit" className="nav-link">
// // //                 Deposit
// // //               </Link>
// // //               <Link to="/withdraw" className="nav-link">
// // //                 Withdraw
// // //               </Link>
// // //               <Link to="/transfer" className="nav-link">
// // //                 Transfer
// // //               </Link>
// // //             </div>
// // //           </div>
// // //         </nav>

// // //         <main className="main-content">
// // //           <Routes>
// // //             {/* Redirect root to /accounts */}
// // //             <Route path="/" element={<Navigate to="/accounts" replace />} />

// // //             {/* List accounts */}
// // //             <Route
// // //               path="/accounts"
// // //               element={
// // //                 <AccountDashboard
// // //                   onSelectAccount={(id) => setSelectedAccountId(id)}
// // //                   selectedAccountId={selectedAccountId}
// // //                 />
// // //               }
// // //             />

// // //             {/* Account details and transaction history */}
// // //             <Route
// // //               path="/accounts/:accountId"
// // //               element={<AccountDetailsWrapper />}
// // //             />

// // //             {/* Create a new account */}
// // //             <Route path="/create" element={<CreateAccountForm />} />

// // //             {/* Deposit money */}
// // //             <Route path="/deposit" element={<DepositForm />} />

// // //             {/* Withdraw money */}
// // //             <Route path="/withdraw" element={<WithdrawForm />} />

// // //             {/* Transfer money */}
// // //             <Route path="/transfer" element={<TransferForm />} />

// // //             {/* Fallback route */}
// // //             <Route 
// // //               path="*" 
// // //               element={
// // //                 <div className="error-page">
// // //                   <div className="error-code">404</div>
// // //                   <div className="error-message">Page Not Found</div>
// // //                   <Link to="/accounts" className="btn btn-primary">
// // //                     Go to Accounts
// // //                   </Link>
// // //                 </div>
// // //               } 
// // //             />
// // //           </Routes>
// // //         </main>
// // //       </div>
// // //     </Router>
// // //   );
// // // }

// // // // Wrapper component to get accountId param from URL
// // // function AccountDetailsWrapper() {
// // //   const { accountId } = useParams();
// // //   return <AccountDetails accountId={parseInt(accountId)} />;
// // // }

// // // export default App;

// // import React, { useState } from 'react';
// // import { BrowserRouter as Router, Routes, Route, Link, Navigate, useParams } from 'react-router-dom';

// // import AccountDashboard from './components/AccountDashboard';
// // import AccountDetails from './components/AccountDetails';
// // import CreateAccountForm from './components/CreateAccountForm';
// // import DepositForm from './components/DepositForm';
// // import WithdrawForm from './components/WithdrawForm';
// // import TransferForm from './components/TransferForm';

// // // Attractive modern CSS styles with updated background
// // const styles = `
// //   * {
// //     margin: 0;
// //     padding: 0;
// //     box-sizing: border-box;
// //   }

// //   body {
// //     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', sans-serif;
// //     background: #f8fafc;
// //     color: #333;
// //     line-height: 1.6;
// //     min-height: 100vh;
// //   }

// //   .app-container {
// //     min-height: 100vh;
// //     background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 50%, #f8fafc 100%);
// //     position: relative;
// //   }

// //   .app-container::before {
// //     content: '';
// //     position: fixed;
// //     top: 0;
// //     left: 0;
// //     right: 0;
// //     bottom: 0;
// //     background: 
// //       radial-gradient(circle at 20% 80%, rgba(120, 113, 255, 0.1) 0%, transparent 50%),
// //       radial-gradient(circle at 80% 20%, rgba(56, 189, 248, 0.1) 0%, transparent 50%),
// //       radial-gradient(circle at 40% 40%, rgba(147, 51, 234, 0.05) 0%, transparent 50%);
// //     pointer-events: none;
// //     z-index: 1;
// //   }

// //   .navbar {
// //     background: rgba(255, 255, 255, 0.95);
// //     backdrop-filter: blur(20px);
// //     padding: 1.2rem 2rem;
// //     box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
// //     border-bottom: 1px solid rgba(255, 255, 255, 0.18);
// //     position: sticky;
// //     top: 0;
// //     z-index: 100;
// //     position: relative;
// //   }

// //   .navbar-content {
// //     max-width: 1200px;
// //     margin: 0 auto;
// //     display: flex;
// //     align-items: center;
// //     gap: 2rem;
// //   }

// //   .logo {
// //     font-size: 1.8rem;
// //     font-weight: 800;
// //     background: linear-gradient(135deg, #667eea, #764ba2);
// //     -webkit-background-clip: text;
// //     -webkit-text-fill-color: transparent;
// //     background-clip: text;
// //     text-decoration: none;
// //     text-shadow: 0 2px 4px rgba(0,0,0,0.1);
// //   }

// //   .nav-links {
// //     display: flex;
// //     gap: 0.5rem;
// //     align-items: center;
// //   }

// //   .nav-link {
// //     text-decoration: none;
// //     color: #4a5568;
// //     font-weight: 600;
// //     padding: 0.75rem 1.25rem;
// //     border-radius: 12px;
// //     transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// //     position: relative;
// //     overflow: hidden;
// //   }

// //   .nav-link::before {
// //     content: '';
// //     position: absolute;
// //     top: 0;
// //     left: 0;
// //     width: 0;
// //     height: 100%;
// //     background: linear-gradient(135deg, #667eea, #764ba2);
// //     transition: width 0.3s ease;
// //     z-index: -1;
// //   }

// //   .nav-link:hover::before {
// //     width: 100%;
// //   }

// //   .nav-link:hover {
// //     color: white;
// //     transform: translateY(-2px);
// //     box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
// //   }

// //   .main-content {
// //     max-width: 1200px;
// //     margin: 0 auto;
// //     padding: 2rem;
// //     position: relative;
// //     z-index: 2;
// //   }

// //   .card {
// //     background: rgba(255, 255, 255, 0.95);
// //     backdrop-filter: blur(20px);
// //     border-radius: 20px;
// //     box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
// //     border: 1px solid rgba(255, 255, 255, 0.18);
// //     overflow: hidden;
// //     margin-bottom: 2rem;
// //     transition: all 0.3s ease;
// //     position: relative;
// //   }

// //   .card::before {
// //     content: '';
// //     position: absolute;
// //     top: 0;
// //     left: 0;
// //     right: 0;
// //     height: 4px;
// //     background: linear-gradient(90deg, #667eea, #764ba2);
// //   }

// //   .card:hover {
// //     transform: translateY(-8px);
// //     box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
// //   }

// //   .card-header {
// //     padding: 2rem;
// //     border-bottom: 1px solid rgba(0, 0, 0, 0.08);
// //     background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
// //   }

// //   .card-title {
// //     font-size: 1.5rem;
// //     font-weight: 700;
// //     background: linear-gradient(135deg, #667eea, #764ba2);
// //     -webkit-background-clip: text;
// //     -webkit-text-fill-color: transparent;
// //     background-clip: text;
// //     margin: 0;
// //   }

// //   .card-body {
// //     padding: 2rem;
// //   }

// //   .form-group {
// //     margin-bottom: 1.8rem;
// //   }

// //   .form-label {
// //     display: block;
// //     margin-bottom: 0.8rem;
// //     font-weight: 600;
// //     color: #4a5568;
// //     font-size: 0.95rem;
// //     text-transform: uppercase;
// //     letter-spacing: 0.5px;
// //   }

// //   .form-input {
// //     width: 100%;
// //     padding: 1rem 1.25rem;
// //     border: 2px solid #e2e8f0;
// //     border-radius: 12px;
// //     font-size: 1rem;
// //     background: rgba(255, 255, 255, 0.9);
// //     transition: all 0.3s ease;
// //     font-weight: 500;
// //   }

// //   .form-input:focus {
// //     outline: none;
// //     border-color: #667eea;
// //     box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
// //     background: rgba(255, 255, 255, 1);
// //     transform: translateY(-2px);
// //   }

// //   .form-select {
// //     width: 100%;
// //     padding: 1rem 1.25rem;
// //     border: 2px solid #e2e8f0;
// //     border-radius: 12px;
// //     font-size: 1rem;
// //     background: rgba(255, 255, 255, 0.9);
// //     cursor: pointer;
// //     transition: all 0.3s ease;
// //     font-weight: 500;
// //   }

// //   .form-select:focus {
// //     outline: none;
// //     border-color: #667eea;
// //     box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
// //     transform: translateY(-2px);
// //   }

// //   .btn {
// //     padding: 1rem 2rem;
// //     border: none;
// //     border-radius: 12px;
// //     font-size: 1rem;
// //     font-weight: 600;
// //     cursor: pointer;
// //     text-decoration: none;
// //     display: inline-flex;
// //     align-items: center;
// //     justify-content: center;
// //     text-align: center;
// //     transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// //     position: relative;
// //     overflow: hidden;
// //   }

// //   .btn::before {
// //     content: '';
// //     position: absolute;
// //     top: 0;
// //     left: -100%;
// //     width: 100%;
// //     height: 100%;
// //     background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
// //     transition: left 0.5s;
// //   }

// //   .btn:hover::before {
// //     left: 100%;
// //   }

// //   .btn-primary {
// //     background: linear-gradient(135deg, #667eea, #764ba2);
// //     color: white;
// //     box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
// //   }

// //   .btn-primary:hover {
// //     transform: translateY(-3px);
// //     box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
// //   }

// //   .btn-secondary {
// //     background: linear-gradient(135deg, #6b7280, #4b5563);
// //     color: white;
// //     box-shadow: 0 10px 30px rgba(107, 114, 128, 0.3);
// //   }

// //   .btn-secondary:hover {
// //     transform: translateY(-3px);
// //     box-shadow: 0 15px 40px rgba(107, 114, 128, 0.4);
// //   }

// //   .btn-success {
// //     background: linear-gradient(135deg, #10b981, #059669);
// //     color: white;
// //     box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
// //   }

// //   .btn-success:hover {
// //     transform: translateY(-3px);
// //     box-shadow: 0 15px 40px rgba(16, 185, 129, 0.4);
// //   }

// //   .btn-warning {
// //     background: linear-gradient(135deg, #f59e0b, #d97706);
// //     color: white;
// //     box-shadow: 0 10px 30px rgba(245, 158, 11, 0.3);
// //   }

// //   .btn-warning:hover {
// //     transform: translateY(-3px);
// //     box-shadow: 0 15px 40px rgba(245, 158, 11, 0.4);
// //   }

// //   .btn-danger {
// //     background: linear-gradient(135deg, #ef4444, #dc2626);
// //     color: white;
// //     box-shadow: 0 10px 30px rgba(239, 68, 68, 0.3);
// //   }

// //   .btn-danger:hover {
// //     transform: translateY(-3px);
// //     box-shadow: 0 15px 40px rgba(239, 68, 68, 0.4);
// //   }

// //   .grid {
// //     display: grid;
// //     gap: 2rem;
// //   }

// //   .grid-cols-1 {
// //     grid-template-columns: 1fr;
// //   }

// //   .grid-cols-2 {
// //     grid-template-columns: repeat(2, 1fr);
// //   }

// //   .grid-cols-3 {
// //     grid-template-columns: repeat(3, 1fr);
// //   }

// //   @media (max-width: 768px) {
// //     .grid-cols-2,
// //     .grid-cols-3 {
// //       grid-template-columns: 1fr;
// //     }
    
// //     .navbar {
// //       padding: 1rem;
// //     }
    
// //     .nav-links {
// //       flex-wrap: wrap;
// //       gap: 0.5rem;
// //     }
    
// //     .main-content {
// //       padding: 1rem;
// //     }

// //     .card-header,
// //     .card-body {
// //       padding: 1.5rem;
// //     }
// //   }

// //   .account-item {
// //     padding: 2rem;
// //     border: 2px solid rgba(255, 255, 255, 0.1);
// //     border-radius: 16px;
// //     background: rgba(255, 255, 255, 0.95);
// //     backdrop-filter: blur(20px);
// //     cursor: pointer;
// //     transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// //     position: relative;
// //     overflow: hidden;
// //   }

// //   .account-item::before {
// //     content: '';
// //     position: absolute;
// //     top: 0;
// //     left: 0;
// //     right: 0;
// //     height: 3px;
// //     background: linear-gradient(90deg, #667eea, #764ba2);
// //     transform: scaleX(0);
// //     transition: transform 0.3s ease;
// //   }

// //   .account-item:hover::before,
// //   .account-item.selected::before {
// //     transform: scaleX(1);
// //   }

// //   .account-item:hover {
// //     transform: translateY(-8px);
// //     box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
// //     border-color: rgba(102, 126, 234, 0.3);
// //   }

// //   .account-item.selected {
// //     border-color: #667eea;
// //     background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
// //     transform: translateY(-4px);
// //     box-shadow: 0 15px 35px rgba(102, 126, 234, 0.2);
// //   }

// //   .balance {
// //     font-size: 1.8rem;
// //     font-weight: 800;
// //     margin: 0.8rem 0;
// //   }

// //   .balance.positive {
// //     background: linear-gradient(135deg, #10b981, #059669);
// //     -webkit-background-clip: text;
// //     -webkit-text-fill-color: transparent;
// //     background-clip: text;
// //   }

// //   .balance.negative {
// //     background: linear-gradient(135deg, #ef4444, #dc2626);
// //     -webkit-background-clip: text;
// //     -webkit-text-fill-color: transparent;
// //     background-clip: text;
// //   }

// //   .transaction-item {
// //     padding: 1.5rem;
// //     border-bottom: 1px solid rgba(0, 0, 0, 0.05);
// //     display: flex;
// //     justify-content: space-between;
// //     align-items: center;
// //     transition: all 0.2s ease;
// //   }

// //   .transaction-item:hover {
// //     background: rgba(102, 126, 234, 0.02);
// //   }

// //   .transaction-item:last-child {
// //     border-bottom: none;
// //   }

// //   .transaction-amount {
// //     font-weight: 700;
// //     font-size: 1.1rem;
// //   }

// //   .transaction-amount.positive {
// //     color: #10b981;
// //   }

// //   .transaction-amount.negative {
// //     color: #ef4444;
// //   }

// //   .alert {
// //     padding: 1.5rem;
// //     border-radius: 12px;
// //     margin-bottom: 1.5rem;
// //     border-left: 4px solid;
// //     backdrop-filter: blur(10px);
// //     font-weight: 500;
// //   }

// //   .alert-success {
// //     background: rgba(16, 185, 129, 0.1);
// //     border-left-color: #10b981;
// //     color: #065f46;
// //   }

// //   .alert-error {
// //     background: rgba(239, 68, 68, 0.1);
// //     border-left-color: #ef4444;
// //     color: #991b1b;
// //   }

// //   .alert-info {
// //     background: rgba(102, 126, 234, 0.1);
// //     border-left-color: #667eea;
// //     color: #1e40af;
// //   }

// //   .loading {
// //     display: flex;
// //     justify-content: center;
// //     align-items: center;
// //     padding: 3rem;
// //   }

// //   .spinner {
// //     width: 50px;
// //     height: 50px;
// //     border: 4px solid rgba(102, 126, 234, 0.2);
// //     border-left-color: #667eea;
// //     border-radius: 50%;
// //     animation: spin 1s linear infinite;
// //   }

// //   @keyframes spin {
// //     to {
// //       transform: rotate(360deg);
// //     }
// //   }

// //   .text-center {
// //     text-align: center;
// //   }

// //   .text-muted {
// //     color: #6b7280;
// //   }

// //   .mb-4 {
// //     margin-bottom: 1.5rem;
// //   }

// //   .mt-4 {
// //     margin-top: 1.5rem;
// //   }

// //   .error-page {
// //     text-align: center;
// //     padding: 4rem 2rem;
// //     background: rgba(255, 255, 255, 0.95);
// //     backdrop-filter: blur(20px);
// //     border-radius: 20px;
// //     box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
// //     border: 1px solid rgba(255, 255, 255, 0.18);
// //   }

// //   .error-code {
// //     font-size: 5rem;
// //     font-weight: 900;
// //     background: linear-gradient(135deg, #667eea, #764ba2);
// //     -webkit-background-clip: text;
// //     -webkit-text-fill-color: transparent;
// //     background-clip: text;
// //     margin-bottom: 1rem;
// //   }

// //   .error-message {
// //     font-size: 1.3rem;
// //     color: #6b7280;
// //     margin-bottom: 2.5rem;
// //     font-weight: 500;
// //   }

// //   /* Smooth animations */
// //   .fade-in {
// //     animation: fadeIn 0.6s ease-out;
// //   }

// //   @keyframes fadeIn {
// //     from {
// //       opacity: 0;
// //       transform: translateY(30px);
// //     }
// //     to {
// //       opacity: 1;
// //       transform: translateY(0);
// //     }
// //   }

// //   /* Custom scrollbar */
// //   ::-webkit-scrollbar {
// //     width: 8px;
// //   }

// //   ::-webkit-scrollbar-track {
// //     background: rgba(255, 255, 255, 0.1);
// //   }

// //   ::-webkit-scrollbar-thumb {
// //     background: linear-gradient(135deg, #667eea, #764ba2);
// //     border-radius: 4px;
// //   }

// //   ::-webkit-scrollbar-thumb:hover {
// //     background: linear-gradient(135deg, #5a6fd8, #6a4190);
// //   }
// // `;

// // function App() {
// //   const [selectedAccountId, setSelectedAccountId] = useState(null);

// //   // Inject styles into the document
// //   React.useEffect(() => {
// //     const styleElement = document.createElement('style');
// //     styleElement.textContent = styles;
// //     document.head.appendChild(styleElement);
// //     return () => {
// //       document.head.removeChild(styleElement);
// //     };
// //   }, []);

// //   return (
// //     <Router>
// //       <div className="app-container">
// //         <nav className="navbar">
// //           <div className="navbar-content">
// //             <Link to="/accounts" className="logo">
// //               💰 BankApp
// //             </Link>
// //             <div className="nav-links">
// //               <Link to="/accounts" className="nav-link">
// //                 Accounts
// //               </Link>
// //               <Link to="/create" className="nav-link">
// //                 Create Account
// //               </Link>
// //               <Link to="/deposit" className="nav-link">
// //                 Deposit
// //               </Link>
// //               <Link to="/withdraw" className="nav-link">
// //                 Withdraw
// //               </Link>
// //               <Link to="/transfer" className="nav-link">
// //                 Transfer
// //               </Link>
// //             </div>
// //           </div>
// //         </nav>

// //         <main className="main-content fade-in">
// //           <Routes>
// //             {/* Redirect root to /accounts */}
// //             <Route path="/" element={<Navigate to="/accounts" replace />} />

// //             {/* List accounts */}
// //             <Route
// //               path="/accounts"
// //               element={
// //                 <AccountDashboard
// //                   onSelectAccount={(id) => setSelectedAccountId(id)}
// //                   selectedAccountId={selectedAccountId}
// //                 />
// //               }
// //             />

// //             {/* Account details and transaction history */}
// //             <Route
// //               path="/accounts/:accountId"
// //               element={<AccountDetailsWrapper />}
// //             />

// //             {/* Create a new account */}
// //             <Route path="/create" element={<CreateAccountForm />} />

// //             {/* Deposit money */}
// //             <Route path="/deposit" element={<DepositForm />} />

// //             {/* Withdraw money */}
// //             <Route path="/withdraw" element={<WithdrawForm />} />

// //             {/* Transfer money */}
// //             <Route path="/transfer" element={<TransferForm />} />

// //             {/* Fallback route */}
// //             <Route 
// //               path="*" 
// //               element={
// //                 <div className="error-page">
// //                   <div className="error-code">404</div>
// //                   <div className="error-message">Page Not Found</div>
// //                   <Link to="/accounts" className="btn btn-primary">
// //                     Go to Accounts
// //                   </Link>
// //                 </div>
// //               } 
// //             />
// //           </Routes>
// //         </main>
// //       </div>
// //     </Router>
// //   );
// // }

// // // Wrapper component to get accountId param from URL
// // function AccountDetailsWrapper() {
// //   const { accountId } = useParams();
// //   return <AccountDetails accountId={parseInt(accountId)} />;
// // }

// // export default App;

//   import React, { useState, useEffect } from 'react';
//   import { BrowserRouter as Router, Routes, Route, Link, Navigate, useParams } from 'react-router-dom';

//   // Import all components
//   import LoginForm from './components/LoginForm';
//   import RegisterForm from './components/RegisterForm';
//   import AdminDashboard from './pages/AdminDashboard';
//   import UserDashboard from './pages/UserDashboard';
//   import AccountDashboard from './components/AccountDashboard';
//   import AccountDetails from './components/AccountDetails';
//   import CreateAccountForm from './components/CreateAccountForm';
//   import DepositForm from './components/DepositForm';
//   import WithdrawForm from './components/WithdrawForm';
//   import TransferForm from './components/TransferForm';

//   // CSS styles remain the same
//   const styles = `
//     * {
//       margin: 0;
//       padding: 0;
//       box-sizing: border-box;
//     }

//     body {
//       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', sans-serif;
//       background: #f8fafc;
//       color: #333;
//       line-height: 1.6;
//       min-height: 100vh;
//     }

//     .app-container {
//       min-height: 100vh;
//       background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 50%, #f8fafc 100%);
//       position: relative;
//     }

//     .app-container::before {
//       content: '';
//       position: fixed;
//       top: 0;
//       left: 0;
//       right: 0;
//       bottom: 0;
//       background: 
//         radial-gradient(circle at 20% 80%, rgba(120, 113, 255, 0.1) 0%, transparent 50%),
//         radial-gradient(circle at 80% 20%, rgba(56, 189, 248, 0.1) 0%, transparent 50%),
//         radial-gradient(circle at 40% 40%, rgba(147, 51, 234, 0.05) 0%, transparent 50%);
//       pointer-events: none;
//       z-index: 1;
//     }

//     .navbar {
//       background: rgba(255, 255, 255, 0.95);
//       backdrop-filter: blur(20px);
//       padding: 1.2rem 2rem;
//       box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
//       border-bottom: 1px solid rgba(255, 255, 255, 0.18);
//       position: sticky;
//       top: 0;
//       z-index: 100;
//       position: relative;
//     }

//     .navbar-content {
//       max-width: 1200px;
//       margin: 0 auto;
//       display: flex;
//       align-items: center;
//       gap: 2rem;
//     }

//     .logo {
//       font-size: 1.8rem;
//       font-weight: 800;
//       background: linear-gradient(135deg, #667eea, #764ba2);
//       -webkit-background-clip: text;
//       -webkit-text-fill-color: transparent;
//       background-clip: text;
//       text-decoration: none;
//       text-shadow: 0 2px 4px rgba(0,0,0,0.1);
//     }

//     .nav-links {
//       display: flex;
//       gap: 0.5rem;
//       align-items: center;
//     }

//     .nav-link {
//       text-decoration: none;
//       color: #4a5568;
//       font-weight: 600;
//       padding: 0.75rem 1.25rem;
//       border-radius: 12px;
//       transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//       position: relative;
//       overflow: hidden;
//     }

//     .nav-link::before {
//       content: '';
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 0;
//       height: 100%;
//       background: linear-gradient(135deg, #667eea, #764ba2);
//       transition: width 0.3s ease;
//       z-index: -1;
//     }

//     .nav-link:hover::before {
//       width: 100%;
//     }

//     .nav-link:hover {
//       color: white;
//       transform: translateY(-2px);
//       box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
//     }

//     .main-content {
//       max-width: 1200px;
//       margin: 0 auto;
//       padding: 2rem;
//       position: relative;
//       z-index: 2;
//     }

//     .card {
//       background: rgba(255, 255, 255, 0.95);
//       backdrop-filter: blur(20px);
//       border-radius: 20px;
//       box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
//       border: 1px solid rgba(255, 255, 255, 0.18);
//       overflow: hidden;
//       margin-bottom: 2rem;
//       transition: all 0.3s ease;
//       position: relative;
//     }

//     .card::before {
//       content: '';
//       position: absolute;
//       top: 0;
//       left: 0;
//       right: 0;
//       height: 4px;
//       background: linear-gradient(90deg, #667eea, #764ba2);
//     }

//     .card:hover {
//       transform: translateY(-8px);
//       box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
//     }

//     .card-header {
//       padding: 2rem;
//       border-bottom: 1px solid rgba(0, 0, 0, 0.08);
//       background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
//     }

//     .card-title {
//       font-size: 1.5rem;
//       font-weight: 700;
//       background: linear-gradient(135deg, #667eea, #764ba2);
//       -webkit-background-clip: text;
//       -webkit-text-fill-color: transparent;
//       background-clip: text;
//       margin: 0;
//     }

//     .card-body {
//       padding: 2rem;
//     }

//     .form-group {
//       margin-bottom: 1.8rem;
//     }

//     .form-label {
//       display: block;
//       margin-bottom: 0.8rem;
//       font-weight: 600;
//       color: #4a5568;
//       font-size: 0.95rem;
//       text-transform: uppercase;
//       letter-spacing: 0.5px;
//     }

//     .form-input {
//       width: 100%;
//       padding: 1rem 1.25rem;
//       border: 2px solid #e2e8f0;
//       border-radius: 12px;
//       font-size: 1rem;
//       background: rgba(255, 255, 255, 0.9);
//       transition: all 0.3s ease;
//       font-weight: 500;
//     }

//     .form-input:focus {
//       outline: none;
//       border-color: #667eea;
//       box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
//       background: rgba(255, 255, 255, 1);
//       transform: translateY(-2px);
//     }

//     .form-select {
//       width: 100%;
//       padding: 1rem 1.25rem;
//       border: 2px solid #e2e8f0;
//       border-radius: 12px;
//       font-size: 1rem;
//       background: rgba(255, 255, 255, 0.9);
//       cursor: pointer;
//       transition: all 0.3s ease;
//       font-weight: 500;
//     }

//     .form-select:focus {
//       outline: none;
//       border-color: #667eea;
//       box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
//       transform: translateY(-2px);
//     }

//     .btn {
//       padding: 1rem 2rem;
//       border: none;
//       border-radius: 12px;
//       font-size: 1rem;
//       font-weight: 600;
//       cursor: pointer;
//       text-decoration: none;
//       display: inline-flex;
//       align-items: center;
//       justify-content: center;
//       text-align: center;
//       transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//       position: relative;
//       overflow: hidden;
//     }

//     .btn::before {
//       content: '';
//       position: absolute;
//       top: 0;
//       left: -100%;
//       width: 100%;
//       height: 100%;
//       background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
//       transition: left 0.5s;
//     }

//     .btn:hover::before {
//       left: 100%;
//     }

//     .btn-primary {
//       background: linear-gradient(135deg, #667eea, #764ba2);
//       color: white;
//       box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
//     }

//     .btn-primary:hover {
//       transform: translateY(-3px);
//       box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
//     }

//     .btn-secondary {
//       background: linear-gradient(135deg, #6b7280, #4b5563);
//       color: white;
//       box-shadow: 0 10px 30px rgba(107, 114, 128, 0.3);
//     }

//     .btn-secondary:hover {
//       transform: translateY(-3px);
//       box-shadow: 0 15px 40px rgba(107, 114, 128, 0.4);
//     }

//     .btn-success {
//       background: linear-gradient(135deg, #10b981, #059669);
//       color: white;
//       box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
//     }

//     .btn-success:hover {
//       transform: translateY(-3px);
//       box-shadow: 0 15px 40px rgba(16, 185, 129, 0.4);
//     }

//     .btn-warning {
//       background: linear-gradient(135deg, #f59e0b, #d97706);
//       color: white;
//       box-shadow: 0 10px 30px rgba(245, 158, 11, 0.3);
//     }

//     .btn-warning:hover {
//       transform: translateY(-3px);
//       box-shadow: 0 15px 40px rgba(245, 158, 11, 0.4);
//     }

//     .btn-danger {
//       background: linear-gradient(135deg, #ef4444, #dc2626);
//       color: white;
//       box-shadow: 0 10px 30px rgba(239, 68, 68, 0.3);
//     }

//     .btn-danger:hover {
//       transform: translateY(-3px);
//       box-shadow: 0 15px 40px rgba(239, 68, 68, 0.4);
//     }

//     .grid {
//       display: grid;
//       gap: 2rem;
//     }

//     .grid-cols-1 {
//       grid-template-columns: 1fr;
//     }

//     .grid-cols-2 {
//       grid-template-columns: repeat(2, 1fr);
//     }

//     .grid-cols-3 {
//       grid-template-columns: repeat(3, 1fr);
//     }

//     @media (max-width: 768px) {
//       .grid-cols-2,
//       .grid-cols-3 {
//         grid-template-columns: 1fr;
//       }
      
//       .navbar {
//         padding: 1rem;
//       }
      
//       .nav-links {
//         flex-wrap: wrap;
//         gap: 0.5rem;
//       }
      
//       .main-content {
//         padding: 1rem;
//       }

//       .card-header,
//       .card-body {
//         padding: 1.5rem;
//       }
//     }

//     .account-item {
//       padding: 2rem;
//       border: 2px solid rgba(255, 255, 255, 0.1);
//       border-radius: 16px;
//       background: rgba(255, 255, 255, 0.95);
//       backdrop-filter: blur(20px);
//       cursor: pointer;
//       transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//       position: relative;
//       overflow: hidden;
//     }

//     .account-item::before {
//       content: '';
//       position: absolute;
//       top: 0;
//       left: 0;
//       right: 0;
//       height: 3px;
//       background: linear-gradient(90deg, #667eea, #764ba2);
//       transform: scaleX(0);
//       transition: transform 0.3s ease;
//     }

//     .account-item:hover::before,
//     .account-item.selected::before {
//       transform: scaleX(1);
//     }

//     .account-item:hover {
//       transform: translateY(-8px);
//       box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
//       border-color: rgba(102, 126, 234, 0.3);
//     }

//     .account-item.selected {
//       border-color: #667eea;
//       background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
//       transform: translateY(-4px);
//       box-shadow: 0 15px 35px rgba(102, 126, 234, 0.2);
//     }

//     .balance {
//       font-size: 1.8rem;
//       font-weight: 800;
//       margin: 0.8rem 0;
//     }

//     .balance.positive {
//       background: linear-gradient(135deg, #10b981, #059669);
//       -webkit-background-clip: text;
//       -webkit-text-fill-color: transparent;
//       background-clip: text;
//     }

//     .balance.negative {
//       background: linear-gradient(135deg, #ef4444, #dc2626);
//       -webkit-background-clip: text;
//       -webkit-text-fill-color: transparent;
//       background-clip: text;
//     }

//     .transaction-item {
//       padding: 1.5rem;
//       border-bottom: 1px solid rgba(0, 0, 0, 0.05);
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       transition: all 0.2s ease;
//     }

//     .transaction-item:hover {
//       background: rgba(102, 126, 234, 0.02);
//     }

//     .transaction-item:last-child {
//       border-bottom: none;
//     }

//     .transaction-amount {
//       font-weight: 700;
//       font-size: 1.1rem;
//     }

//     .transaction-amount.positive {
//       color: #10b981;
//     }

//     .transaction-amount.negative {
//       color: #ef4444;
//     }

//     .alert {
//       padding: 1.5rem;
//       border-radius: 12px;
//       margin-bottom: 1.5rem;
//       border-left: 4px solid;
//       backdrop-filter: blur(10px);
//       font-weight: 500;
//     }

//     .alert-success {
//       background: rgba(16, 185, 129, 0.1);
//       border-left-color: #10b981;
//       color: #065f46;
//     }

//     .alert-error {
//       background: rgba(239, 68, 68, 0.1);
//       border-left-color: #ef4444;
//       color: #991b1b;
//     }

//     .alert-info {
//       background: rgba(102, 126, 234, 0.1);
//       border-left-color: #667eea;
//       color: #1e40af;
//     }

//     .loading {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       padding: 3rem;
//     }

//     .spinner {
//       width: 50px;
//       height: 50px;
//       border: 4px solid rgba(102, 126, 234, 0.2);
//       border-left-color: #667eea;
//       border-radius: 50%;
//       animation: spin 1s linear infinite;
//     }

//     @keyframes spin {
//       to {
//         transform: rotate(360deg);
//       }
//     }

//     .text-center {
//       text-align: center;
//     }

//     .text-muted {
//       color: #6b7280;
//     }

//     .mb-4 {
//       margin-bottom: 1.5rem;
//     }

//     .mt-4 {
//       margin-top: 1.5rem;
//     }

//     .error-page {
//       text-align: center;
//       padding: 4rem 2rem;
//       background: rgba(255, 255, 255, 0.95);
//       backdrop-filter: blur(20px);
//       border-radius: 20px;
//       box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
//       border: 1px solid rgba(255, 255, 255, 0.18);
//     }

//     .error-code {
//       font-size: 5rem;
//       font-weight: 900;
//       background: linear-gradient(135deg, #667eea, #764ba2);
//       -webkit-background-clip: text;
//       -webkit-text-fill-color: transparent;
//       background-clip: text;
//       margin-bottom: 1rem;
//     }

//     .error-message {
//       font-size: 1.3rem;
//       color: #6b7280;
//       margin-bottom: 2.5rem;
//       font-weight: 500;
//     }

//     /* Smooth animations */
//     .fade-in {
//       animation: fadeIn 0.6s ease-out;
//     }

//     @keyframes fadeIn {
//       from {
//         opacity: 0;
//         transform: translateY(30px);
//       }
//       to {
//         opacity: 1;
//         transform: translateY(0);
//       }
//     }

//     /* Custom scrollbar */
//     ::-webkit-scrollbar {
//       width: 8px;
//     }

//     ::-webkit-scrollbar-track {
//       background: rgba(255, 255, 255, 0.1);
//     }

//     ::-webkit-scrollbar-thumb {
//       background: linear-gradient(135deg, #667eea, #764ba2);
//       border-radius: 4px;
//     }

//     ::-webkit-scrollbar-thumb:hover {
//       background: linear-gradient(135deg, #5a6fd8, #6a4190);
//     }
//   `;

//   function App() {
//     const [selectedAccountId, setSelectedAccountId] = useState(null);
//     const [currentUser, setCurrentUser] = useState(null); // State to hold current user
//     const [isAdmin, setIsAdmin] = useState(false); // State to track admin status

//     // Inject styles into the document
//     useEffect(() => {
//       const styleElement = document.createElement('style');
//       styleElement.textContent = styles;
//       document.head.appendChild(styleElement);
//       return () => {
//         document.head.removeChild(styleElement);
//       };
//     }, []);

//     // Function to handle login
//     const handleLogin = (user) => {
//       setCurrentUser(user);
//       setIsAdmin(user.role === 'admin'); // Assuming user object has a 'role' property
//     };

//     // Function to handle logout
//     const handleLogout = () => {
//       setCurrentUser(null);
//       setIsAdmin(false);
//     };

//     // Wrapper component to get accountId param from URL
//     function AccountDetailsWrapper() {
//       const { accountId } = useParams();
//       return <AccountDetails accountId={parseInt(accountId)} />;
//     }

//     return (
//       <Router>
//         <div className="app-container">
//           {currentUser && (
//             <nav className="navbar">
//               <div className="navbar-content">
//                 <Link to={isAdmin ? "/admin-dashboard" : "/user-dashboard"} className="logo">
//                   💰 BankApp
//                 </Link>
//                 <div className="nav-links">
//                   {/* Conditionally render links based on user role */}
//                   {isAdmin ? (
//                     <>
//                       <Link to="/admin-dashboard" className="nav-link">
//                         Admin Dashboard
//                       </Link>
//                       <Link to="/accounts" className="nav-link">
//                         Manage Accounts
//                       </Link>
//                     </>
//                   ) : (
//                     <>
//                       <Link to="/user-dashboard" className="nav-link">
//                         User Dashboard
//                       </Link>
//                       <Link to="/accounts" className="nav-link">
//                         Accounts
//                       </Link>
//                       <Link to="/create" className="nav-link">
//                         Create Account
//                       </Link>
//                       <Link to="/deposit" className="nav-link">
//                         Deposit
//                       </Link>
//                       <Link to="/withdraw" className="nav-link">
//                         Withdraw
//                       </Link>
//                       <Link to="/transfer" className="nav-link">
//                         Transfer
//                       </Link>
//                     </>
//                   )}
//                   <button onClick={handleLogout} className="btn btn-secondary">
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             </nav>
//           )}

//           <main className="main-content fade-in">
//             <Routes>
//               {/* Routes for authentication */}
//               <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
//               <Route path="/register" element={<RegisterForm />} />

//               {/* Protected routes */}
//               <Route
//                 path="/admin-dashboard"
//                 element={isAdmin ? <AdminDashboard /> : <Navigate to="/" />}
//               />
//               <Route
//                 path="/user-dashboard"
//                 element={currentUser ? <UserDashboard /> : <Navigate to="/" />}
//               />

//               {/* Bank app routes, conditionally rendered */}
//               <Route
//                 path="/accounts"
//                 element={currentUser ? (
//                   <AccountDashboard
//                     onSelectAccount={(id) => setSelectedAccountId(id)}
//                     selectedAccountId={selectedAccountId}
//                   />
//                 ) : (
//                   <Navigate to="/" />
//                 )}
//               />
//               <Route
//                 path="/accounts/:accountId"
//                 element={currentUser ? <AccountDetailsWrapper /> : <Navigate to="/" />}
//               />
//               <Route
//                 path="/create"
//                 element={currentUser ? <CreateAccountForm /> : <Navigate to="/" />}
//               />
//               <Route
//                 path="/deposit"
//                 element={currentUser ? <DepositForm /> : <Navigate to="/" />}
//               />
//               <Route
//                 path="/withdraw"
//                 element={currentUser ? <WithdrawForm /> : <Navigate to="/" />}
//               />
//               <Route
//                 path="/transfer"
//                 element={currentUser ? <TransferForm /> : <Navigate to="/" />}
//               />

//               {/* Fallback route */}
//               {/* Fallback route */}
//               <Route
//                 path="*"
//                 element={
//                   <div className="error-page">
//                     <div className="error-code">404</div>
//                     <div className="error-message">Page Not Found</div>
//                     <Link
//                       to={currentUser ? "/accounts" : "/"} // Conditionally redirect
//                       className="btn btn-primary"
//                     >
//                       Go to {currentUser ? "Accounts" : "Login"}
//                     </Link>
//                   </div>
//                 }
//               />
//             </Routes> 
//           </main>
//         </div>
//       </Router>
//     );
//   }

// export default App;
 
 import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useParams } from 'react-router-dom';

// Import components (excluding LoginForm and RegisterForm)
import AdminDashboard from './pages/AdminDashboard';
// import UserDashboard from './pages/UserDashboard';
import AccountDashboard from './components/AccountDashboard';
import AccountDetails from './components/AccountDetails';
import CreateAccountForm from './components/CreateAccountForm';
import DepositForm from './components/DepositForm';
import WithdrawForm from './components/WithdrawForm';
import TransferForm from './components/TransferForm';

// ... your styles here ...//   // CSS styles remain the same
  const styles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', sans-serif;
      background: #f8fafc;
      color: #333;
      line-height: 1.6;
      min-height: 100vh;
    }

    .app-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 50%, #f8fafc 100%);
      position: relative;
    }

    .app-container::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 20% 80%, rgba(120, 113, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(56, 189, 248, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(147, 51, 234, 0.05) 0%, transparent 50%);
      pointer-events: none;
      z-index: 1;
    }

    .navbar {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      padding: 1.2rem 2rem;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.18);
      position: sticky;
      top: 0;
      z-index: 100;
      position: relative;
    }

    .navbar-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .logo {
      font-size: 1.8rem;
      font-weight: 800;
      background: linear-gradient(135deg, #667eea, #764ba2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-decoration: none;
      text-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .nav-links {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }

    .nav-link {
      text-decoration: none;
      color: #4a5568;
      font-weight: 600;
      padding: 0.75rem 1.25rem;
      border-radius: 12px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
    }

    .nav-link::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: linear-gradient(135deg, #667eea, #764ba2);
      transition: width 0.3s ease;
      z-index: -1;
    }

    .nav-link:hover::before {
      width: 100%;
    }

    .nav-link:hover {
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
    }

    .main-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      position: relative;
      z-index: 2;
    }

    .card {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.18);
      overflow: hidden;
      margin-bottom: 2rem;
      transition: all 0.3s ease;
      position: relative;
    }

    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #667eea, #764ba2);
    }

    .card:hover {
      transform: translateY(-8px);
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
    }

    .card-header {
      padding: 2rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
    }

    .card-title {
      font-size: 1.5rem;
      font-weight: 700;
      background: linear-gradient(135deg, #667eea, #764ba2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin: 0;
    }

    .card-body {
      padding: 2rem;
    }

    .form-group {
      margin-bottom: 1.8rem;
    }

    .form-label {
      display: block;
      margin-bottom: 0.8rem;
      font-weight: 600;
      color: #4a5568;
      font-size: 0.95rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .form-input {
      width: 100%;
      padding: 1rem 1.25rem;
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      font-size: 1rem;
      background: rgba(255, 255, 255, 0.9);
      transition: all 0.3s ease;
      font-weight: 500;
    }

    .form-input:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
      background: rgba(255, 255, 255, 1);
      transform: translateY(-2px);
    }

    .form-select {
      width: 100%;
      padding: 1rem 1.25rem;
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      font-size: 1rem;
      background: rgba(255, 255, 255, 0.9);
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 500;
    }

    .form-select:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
      transform: translateY(-2px);
    }

    .btn {
      padding: 1rem 2rem;
      border: none;
      border-radius: 12px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
    }

    .btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
      transition: left 0.5s;
    }

    .btn:hover::before {
      left: 100%;
    }

    .btn-primary {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
    }

    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
    }

    .btn-secondary {
      background: linear-gradient(135deg, #6b7280, #4b5563);
      color: white;
      box-shadow: 0 10px 30px rgba(107, 114, 128, 0.3);
    }

    .btn-secondary:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(107, 114, 128, 0.4);
    }

    .btn-success {
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
    }

    .btn-success:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(16, 185, 129, 0.4);
    }

    .btn-warning {
      background: linear-gradient(135deg, #f59e0b, #d97706);
      color: white;
      box-shadow: 0 10px 30px rgba(245, 158, 11, 0.3);
    }

    .btn-warning:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(245, 158, 11, 0.4);
    }

    .btn-danger {
      background: linear-gradient(135deg, #ef4444, #dc2626);
      color: white;
      box-shadow: 0 10px 30px rgba(239, 68, 68, 0.3);
    }

    .btn-danger:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(239, 68, 68, 0.4);
    }

    .grid {
      display: grid;
      gap: 2rem;
    }

    .grid-cols-1 {
      grid-template-columns: 1fr;
    }

    .grid-cols-2 {
      grid-template-columns: repeat(2, 1fr);
    }

    .grid-cols-3 {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
      .grid-cols-2,
      .grid-cols-3 {
        grid-template-columns: 1fr;
      }
      
      .navbar {
        padding: 1rem;
      }
      
      .nav-links {
        flex-wrap: wrap;
        gap: 0.5rem;
      }
      
      .main-content {
        padding: 1rem;
      }

      .card-header,
      .card-body {
        padding: 1.5rem;
      }
    }

    .account-item {
      padding: 2rem;
      border: 2px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
    }

    .account-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #667eea, #764ba2);
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    .account-item:hover::before,
    .account-item.selected::before {
      transform: scaleX(1);
    }

    .account-item:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      border-color: rgba(102, 126, 234, 0.3);
    }

    .account-item.selected {
      border-color: #667eea;
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
      transform: translateY(-4px);
      box-shadow: 0 15px 35px rgba(102, 126, 234, 0.2);
    }

    .balance {
      font-size: 1.8rem;
      font-weight: 800;
      margin: 0.8rem 0;
    }

    .balance.positive {
      background: linear-gradient(135deg, #10b981, #059669);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .balance.negative {
      background: linear-gradient(135deg, #ef4444, #dc2626);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .transaction-item {
      padding: 1.5rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.2s ease;
    }

    .transaction-item:hover {
      background: rgba(102, 126, 234, 0.02);
    }

    .transaction-item:last-child {
      border-bottom: none;
    }

    .transaction-amount {
      font-weight: 700;
      font-size: 1.1rem;
    }

    .transaction-amount.positive {
      color: #10b981;
    }

    .transaction-amount.negative {
      color: #ef4444;
    }

    .alert {
      padding: 1.5rem;
      border-radius: 12px;
      margin-bottom: 1.5rem;
      border-left: 4px solid;
      backdrop-filter: blur(10px);
      font-weight: 500;
    }

    .alert-success {
      background: rgba(16, 185, 129, 0.1);
      border-left-color: #10b981;
      color: #065f46;
    }

    .alert-error {
      background: rgba(239, 68, 68, 0.1);
      border-left-color: #ef4444;
      color: #991b1b;
    }

    .alert-info {
      background: rgba(102, 126, 234, 0.1);
      border-left-color: #667eea;
      color: #1e40af;
    }

    .loading {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 3rem;
    }

    .spinner {
      width: 50px;
      height: 50px;
      border: 4px solid rgba(102, 126, 234, 0.2);
      border-left-color: #667eea;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    .text-center {
      text-align: center;
    }

    .text-muted {
      color: #6b7280;
    }

    .mb-4 {
      margin-bottom: 1.5rem;
    }

    .mt-4 {
      margin-top: 1.5rem;
    }

    .error-page {
      text-align: center;
      padding: 4rem 2rem;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.18);
    }

    .error-code {
      font-size: 5rem;
      font-weight: 900;
      background: linear-gradient(135deg, #667eea, #764ba2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 1rem;
    }

    .error-message {
      font-size: 1.3rem;
      color: #6b7280;
      margin-bottom: 2.5rem;
      font-weight: 500;
    }

    /* Smooth animations */
    .fade-in {
      animation: fadeIn 0.6s ease-out;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Custom scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
    }

    ::-webkit-scrollbar-thumb {
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(135deg, #5a6fd8, #6a4190);
    }
  `;

function App() {
  const [selectedAccountId, setSelectedAccountId] = useState(null);
  // Initialize currentUser to simulate logged-in user
  const [currentUser, setCurrentUser] = useState({ id: 1, name: "Demo User", role: "user" });
  const [isAdmin, setIsAdmin] = useState(currentUser.role === 'admin');

  // Inject styles (same as before)
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
    return () => document.head.removeChild(styleElement);
  }, []);

  function AccountDetailsWrapper() {
    const { accountId } = useParams();
    return <AccountDetails accountId={parseInt(accountId)} />;
  }

  return (
    <Router>
      <div className="app-container">
        {currentUser && (
          <nav className="navbar">
            <div className="navbar-content">
              <Link to={isAdmin ? "/admin-dashboard" : "/user-dashboard"} className="logo">
                💰 BankApp
              </Link>
              <div className="nav-links">
                {isAdmin ? (
                  <>
                    <Link to="/admin-dashboard" className="nav-link">Admin Dashboard</Link>
                    <Link to="/accounts" className="nav-link">Manage Accounts</Link>
                  </>
                ) : (
                  <>
                    <Link to="/user-dashboard" className="nav-link">User Dashboard</Link>
                    <Link to="/accounts" className="nav-link">Accounts</Link>
                    <Link to="/create" className="nav-link">Create Account</Link>
                    <Link to="/deposit" className="nav-link">Deposit</Link>
                    <Link to="/withdraw" className="nav-link">Withdraw</Link>
                    <Link to="/transfer" className="nav-link">Transfer</Link>
                  </>
                )}
                {/* You can remove Logout button if you want */}
              </div>
            </div>
          </nav>
        )}

        <main className="main-content fade-in">
          <Routes>
            {/* Redirect root to accounts */}
            <Route path="/" element={<Navigate to="/accounts" />} />

            <Route
              path="/admin-dashboard"
              element={isAdmin ? <AdminDashboard /> : <Navigate to="/" />}
            />
            {/* <Route
              path="/user-dashboard"
              element={currentUser ? <UserDashboard /> : <Navigate to="/" />}
            /> */}
            <Route
              path="/accounts"
              element={currentUser ? (
                <AccountDashboard
                  onSelectAccount={(id) => setSelectedAccountId(id)}
                  selectedAccountId={selectedAccountId}
                />
              ) : (
                <Navigate to="/" />
              )}
            />
            <Route
              path="/accounts/:accountId"
              element={currentUser ? <AccountDetailsWrapper /> : <Navigate to="/" />}
            />
            <Route
              path="/create"
              element={currentUser ? <CreateAccountForm /> : <Navigate to="/" />}
            />
            <Route
              path="/deposit"
              element={currentUser ? <DepositForm /> : <Navigate to="/" />}
            />
            <Route
              path="/withdraw"
              element={currentUser ? <WithdrawForm /> : <Navigate to="/" />}
            />
            <Route
              path="/transfer"
              element={currentUser ? <TransferForm /> : <Navigate to="/" />}
            />

            {/* Fallback */}
            <Route
              path="*"
              element={
                <div className="error-page">
                  <div className="error-code">404</div>
                  <div className="error-message">Page Not Found</div>
                  <Link to="/accounts" className="btn btn-primary">
                    Go to Accounts
                  </Link>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
