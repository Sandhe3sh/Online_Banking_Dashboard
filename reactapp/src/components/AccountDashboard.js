// // import React, { useEffect, useState } from 'react';
// // import { getAllAccounts } from '../utils/api';
// // import AccountDetails from './AccountDetails'; // assuming you have this

// // function AccountDashboard() {
// //   const [accounts, setAccounts] = useState([]);
// //   const [selectedAccountId, setSelectedAccountId] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     getAllAccounts()
// //       .then(response => {
// //         setAccounts(response.data);
// //         setLoading(false);
// //       })
// //       .catch(() => {
// //         setError('Failed to load accounts');
// //         setLoading(false);
// //       });
// //   }, []);

// //   if (loading) return <p>Loading accounts...</p>;
// //   if (error) return <p>{error}</p>;

// //   return (
// //     <div>
// //       <h1>Account Dashboard</h1>
// //       <ul>
// //         {accounts.map(acc => (
// //           <li key={acc.accountId}>
// //             <button onClick={() => setSelectedAccountId(acc.accountId)}>
// //               {acc.accountHolderName} - {acc.accountNumber}
// //             </button>
// //           </li>
// //         ))}
// //       </ul>

// //       {selectedAccountId && <AccountDetails accountId={selectedAccountId} />}
// //     </div>
// //   );
// // }

// // export default AccountDashboard;
// import React, { useEffect, useState } from 'react';
// import { getAllAccounts } from '../utils/api';
// import AccountDetails from './AccountDetails';
//  // assuming you have this

// function AccountDashboard() {
//   const [accounts, setAccounts] = useState([]);
//   const [selectedAccountId, setSelectedAccountId] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     getAllAccounts()
//       .then(response => {
//         setAccounts(response.data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError('Failed to load accounts');
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p style={styles.message}>Loading accounts...</p>;
//   if (error) return <p style={styles.message}>{error}</p>;

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>Account Dashboard</h1>
//       <ul style={styles.list}>
//         {accounts.map(acc => (
//           <li key={acc.accountId} style={styles.listItem}>
//             <button
//               onClick={() => setSelectedAccountId(acc.accountId)}
//               style={{
//                 ...styles.button,
//                 ...(selectedAccountId === acc.accountId ? styles.buttonSelected : {}),
//               }}
//               onMouseEnter={(e) => {
//                 if (selectedAccountId !== acc.accountId) {
//                   e.target.style.backgroundColor = '#3730a3';
//                   e.target.style.transform = 'translateY(-2px)';
//                   e.target.style.boxShadow = '0 8px 25px rgba(79, 70, 229, 0.3)';
//                 }
//               }}
//               onMouseLeave={(e) => {
//                 if (selectedAccountId !== acc.accountId) {
//                   e.target.style.backgroundColor = '#4f46e5';
//                   e.target.style.transform = 'translateY(0)';
//                   e.target.style.boxShadow = '0 4px 15px rgba(79, 70, 229, 0.2)';
//                 }
//               }}
//             >
//               {acc.accountHolderName} - {acc.accountNumber}
//             </button>
//           </li>
//         ))}
//       </ul>

//       {selectedAccountId && (
//         <div style={styles.detailsContainer}>
//           <AccountDetails accountId={selectedAccountId} />
//         </div>
//       )}
//     </div>
//   );
// }

// // Enhanced inline style object with attractive modern design
// const styles = {
//   container: {
//     padding: '32px',
//     maxWidth: '900px',
//     margin: '40px auto',
//     background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
//     boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)',
//     borderRadius: '24px',
//     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
//     position: 'relative',
//     overflow: 'hidden',
//   },
//   heading: {
//     textAlign: 'center',
//     background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//     backgroundClip: 'text',
//     fontSize: '2.5rem',
//     fontWeight: '700',
//     marginBottom: '32px',
//     letterSpacing: '-0.02em',
//     position: 'relative',
//   },
//   list: {
//     listStyle: 'none',
//     padding: 0,
//     margin: 0,
//     display: 'grid',
//     gap: '16px',
//   },
//   listItem: {
//     marginBottom: '0',
//     position: 'relative',
//   },
//   button: {
//     background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
//     color: '#ffffff',
//     border: 'none',
//     padding: '16px 24px',
//     fontSize: '16px',
//     fontWeight: '500',
//     borderRadius: '16px',
//     cursor: 'pointer',
//     width: '100%',
//     textAlign: 'left',
//     transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//     position: 'relative',
//     overflow: 'hidden',
//     boxShadow: '0 4px 15px rgba(79, 70, 229, 0.2)',
//     backdropFilter: 'blur(10px)',
//     letterSpacing: '0.01em',
//     lineHeight: '1.5',
//   },
//   buttonSelected: {
//     background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
//     boxShadow: '0 8px 25px rgba(5, 150, 105, 0.3)',
//     transform: 'translateY(-2px)',
//   },
//   message: {
//     textAlign: 'center',
//     color: '#6b7280',
//     fontSize: '18px',
//     fontWeight: '500',
//     padding: '60px 20px',
//     background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
//     borderRadius: '20px',
//     margin: '40px auto',
//     maxWidth: '600px',
//     boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//   },
//   detailsContainer: {
//     marginTop: '32px',
//     padding: '24px',
//     background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)',
//     borderRadius: '20px',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
//     backdropFilter: 'blur(10px)',
//     position: 'relative',
//     overflow: 'hidden',
//   },
// };

// export default AccountDashboard;

 import React, { useEffect, useState } from 'react';
import { getAllAccounts } from '../utils/api';
import AccountDetails from './AccountDetails';

function AccountDashboard() {
  const [accounts, setAccounts] = useState([]);
  const [selectedAccountId, setSelectedAccountId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getAllAccounts()
      .then(response => {
        setAccounts(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load accounts');
        setLoading(false);
      });
  }, []);

  const filteredAccounts = accounts.filter(acc =>
    acc.accountHolderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    acc.accountNumber.toString().includes(searchTerm)
  );

  const formatAccountNumber = (accountNumber) => {
    const str = accountNumber.toString();
    return str.replace(/(\d{4})(?=\d)/g, '$1 ');
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(amount || 0);
  };

  const getAccountTypeIcon = (type) => {
    switch(type?.toLowerCase()) {
      case 'checking': return '💳';
      case 'savings': return '🏦';
      case 'business': return '🏢';
      case 'credit': return '💎';
      default: return '💰';
    }
  };

  const getBalanceColor = (balance) => {
    if (balance >= 100000) return '#059669';
    if (balance >= 10000) return '#0891b2';
    if (balance >= 0) return '#6366f1';
    return '#ef4444';
  };

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.spinner}></div>
        <p style={styles.loadingText}>Loading your accounts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.errorContainer}>
        <div style={styles.errorIcon}>⚠️</div>
        <p style={styles.errorText}>{error}</p>
        <button style={styles.retryButton} onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.heading}>
            <span style={styles.headingIcon}>🏛️</span>
            Account Overview
          </h1>
          <p style={styles.subheading}>
            Manage your accounts • {accounts.length} account{accounts.length !== 1 ? 's' : ''} found
          </p>
        </div>
        
        {/* Quick Stats */}
        <div style={styles.statsContainer}>
          <div style={styles.statCard}>
            <div style={styles.statIcon}>💰</div>
            <div>
              <div style={styles.statValue}>{formatCurrency(accounts.reduce((sum, acc) => sum + (acc.balance || 0), 0))}</div>
              <div style={styles.statLabel}>Total Balance</div>
            </div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statIcon}>📊</div>
            <div>
              <div style={styles.statValue}>{accounts.length}</div>
              <div style={styles.statLabel}>Active Accounts</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div style={styles.searchContainer}>
        <div style={styles.searchWrapper}>
          <span style={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search accounts by name or number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              style={styles.clearButton}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Accounts Grid */}
      <div style={styles.accountsGrid}>
        {filteredAccounts.map(acc => (
          <div
            key={acc.accountId}
            style={{
              ...styles.accountCard,
              ...(selectedAccountId === acc.accountId ? styles.accountCardSelected : {})
            }}
            onClick={() => setSelectedAccountId(acc.accountId)}
            onMouseEnter={(e) => {
              if (selectedAccountId !== acc.accountId) {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedAccountId !== acc.accountId) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
              }
            }}
          >
            <div style={styles.accountCardHeader}>
              <div style={styles.accountTypeIcon}>
                {getAccountTypeIcon(acc.accountType)}
              </div>
              <div style={styles.accountStatus}>
                <div style={styles.statusDot}></div>
                Active
              </div>
            </div>

            <div style={styles.accountInfo}>
              <h3 style={styles.accountHolderName}>{acc.accountHolderName}</h3>
              <p style={styles.accountNumber}>
                <span style={styles.accountNumberLabel}>Account No:</span>
                {formatAccountNumber(acc.accountNumber)}
              </p>
              <p style={styles.accountType}>
                {acc.accountType || 'Checking'} Account
              </p>
            </div>

            <div style={styles.balanceSection}>
              <div style={styles.balanceLabel}>Available Balance</div>
              <div 
                style={{
                  ...styles.balanceAmount,
                  color: getBalanceColor(acc.balance)
                }}
              >
                {formatCurrency(acc.balance)}
              </div>
            </div>

            <div style={styles.accountActions}>
              <button style={styles.actionButton}>
                <span>📊</span>
                View Details
              </button>
            </div>

            {selectedAccountId === acc.accountId && (
              <div style={styles.selectedIndicator}>
                <span>✓</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredAccounts.length === 0 && searchTerm && (
        <div style={styles.noResults}>
          <div style={styles.noResultsIcon}>🔍</div>
          <p style={styles.noResultsText}>No accounts found matching "{searchTerm}"</p>
          <button
            onClick={() => setSearchTerm('')}
            style={styles.clearSearchButton}
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Account Details Panel */}
      {selectedAccountId && (
        <div style={styles.detailsContainer}>
          <div style={styles.detailsHeader}>
            <h2 style={styles.detailsTitle}>Account Details</h2>
            <button
              onClick={() => setSelectedAccountId(null)}
              style={styles.closeButton}
            >
              ✕
            </button>
          </div>
          <AccountDetails accountId={selectedAccountId} />
        </div>
      )}
    </div>
  );
}

// Modern banking system styles
const styles = {
  container: {
    padding: '24px',
    maxWidth: '1400px',
    margin: '0 auto',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    minHeight: '100vh',
  },

  // Header Styles
  header: {
    background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
    borderRadius: '24px',
    padding: '32px',
    marginBottom: '32px',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
  },

  headerContent: {
    marginBottom: '24px',
  },

  heading: {
    fontSize: '2.5rem',
    fontWeight: '700',
    margin: '0 0 8px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },

  headingIcon: {
    fontSize: '2rem',
  },

  subheading: {
    fontSize: '1.1rem',
    opacity: '0.8',
    margin: '0',
    fontWeight: '400',
  },

  statsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },

  statCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },

  statIcon: {
    fontSize: '2rem',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  statValue: {
    fontSize: '1.8rem',
    fontWeight: '700',
    margin: '0 0 4px 0',
  },

  statLabel: {
    fontSize: '0.9rem',
    opacity: '0.7',
  },

  // Search Styles
  searchContainer: {
    marginBottom: '32px',
  },

  searchWrapper: {
    position: 'relative',
    maxWidth: '500px',
    margin: '0 auto',
  },

  searchIcon: {
    position: 'absolute',
    left: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '1.2rem',
    opacity: '0.5',
  },

  searchInput: {
    width: '100%',
    padding: '16px 20px 16px 50px',
    fontSize: '16px',
    border: '2px solid #e2e8f0',
    borderRadius: '50px',
    background: 'white',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
  },

  clearButton: {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: '#ef4444',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '28px',
    height: '28px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
  },

  // Account Grid Styles
  accountsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
    gap: '24px',
    marginBottom: '32px',
  },

  accountCard: {
    background: 'white',
    borderRadius: '20px',
    padding: '24px',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    border: '2px solid transparent',
    position: 'relative',
    overflow: 'hidden',
  },

  accountCardSelected: {
    border: '2px solid #3b82f6',
    transform: 'translateY(-4px)',
    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)',
  },

  accountCardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },

  accountTypeIcon: {
    fontSize: '2rem',
    background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
    borderRadius: '12px',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  accountStatus: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#059669',
    fontSize: '14px',
    fontWeight: '600',
  },

  statusDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#059669',
  },

  accountInfo: {
    marginBottom: '20px',
  },

  accountHolderName: {
    fontSize: '1.4rem',
    fontWeight: '700',
    margin: '0 0 8px 0',
    color: '#1f2937',
  },

  accountNumber: {
    fontSize: '1rem',
    color: '#6b7280',
    margin: '0 0 4px 0',
    fontFamily: 'monospace',
  },

  accountNumberLabel: {
    fontWeight: '600',
    marginRight: '8px',
  },

  accountType: {
    fontSize: '0.9rem',
    color: '#9ca3af',
    margin: '0',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    fontWeight: '600',
  },

  balanceSection: {
    marginBottom: '24px',
    padding: '16px',
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
  },

  balanceLabel: {
    fontSize: '0.9rem',
    color: '#6b7280',
    marginBottom: '4px',
    fontWeight: '500',
  },

  balanceAmount: {
    fontSize: '2rem',
    fontWeight: '800',
    fontFamily: 'monospace',
  },

  accountActions: {
    display: 'flex',
    gap: '12px',
  },

  actionButton: {
    flex: '1',
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    border: '1px solid #2563eb',
    borderRadius: '10px',
    padding: '10px 16px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    color: 'white',
  },

  selectedIndicator: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    background: '#3b82f6',
    color: 'white',
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: '700',
  },

  // Loading & Error Styles
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 20px',
    background: 'white',
    borderRadius: '20px',
    margin: '40px auto',
    maxWidth: '500px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
  },

  spinner: {
    width: '50px',
    height: '50px',
    border: '4px solid #f3f4f6',
    borderTop: '4px solid #3b82f6',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    marginBottom: '24px',
  },

  loadingText: {
    fontSize: '1.2rem',
    color: '#6b7280',
    fontWeight: '500',
  },

  errorContainer: {
    textAlign: 'center',
    padding: '80px 20px',
    background: 'white',
    borderRadius: '20px',
    margin: '40px auto',
    maxWidth: '500px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
  },

  errorIcon: {
    fontSize: '4rem',
    marginBottom: '24px',
  },

  errorText: {
    fontSize: '1.2rem',
    color: '#ef4444',
    fontWeight: '600',
    marginBottom: '24px',
  },

  retryButton: {
    background: '#ef4444',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },

  // No Results Styles
  noResults: {
    textAlign: 'center',
    padding: '60px 20px',
    background: 'white',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  },

  noResultsIcon: {
    fontSize: '3rem',
    marginBottom: '16px',
    opacity: '0.5',
  },

  noResultsText: {
    fontSize: '1.1rem',
    color: '#6b7280',
    marginBottom: '24px',
  },

  clearSearchButton: {
    background: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },

  // Details Panel Styles
  detailsContainer: {
    background: 'white',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    border: '2px solid #e2e8f0',
  },

  detailsHeader: {
    background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
    color: 'white',
    padding: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailsTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    margin: '0',
  },

  closeButton: {
    background: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    width: '32px',
    height: '32px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    transition: 'all 0.3s ease',
  },
};

// Add keyframes for spinner animation
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styleSheet);

export default AccountDashboard;