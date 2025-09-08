// import React, { useEffect, useState } from 'react';
// import { getAllAccounts } from '../utils/api';
// import AccountDetails from './AccountDetails'; // assuming you have this

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

//   if (loading) return <p>Loading accounts...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h1>Account Dashboard</h1>
//       <ul>
//         {accounts.map(acc => (
//           <li key={acc.accountId}>
//             <button onClick={() => setSelectedAccountId(acc.accountId)}>
//               {acc.accountHolderName} - {acc.accountNumber}
//             </button>
//           </li>
//         ))}
//       </ul>

//       {selectedAccountId && <AccountDetails accountId={selectedAccountId} />}
//     </div>
//   );
// }

// export default AccountDashboard;

import React, { useEffect, useState } from 'react';
import { getAllAccounts } from '../utils/api';
import AccountDetails from './AccountDetails'; // assuming you have this

function AccountDashboard() {
  const [accounts, setAccounts] = useState([]);
  const [selectedAccountId, setSelectedAccountId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p style={styles.message}>Loading accounts...</p>;
  if (error) return <p style={styles.message}>{error}</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Account Dashboard</h1>
      <ul style={styles.list}>
        {accounts.map(acc => (
          <li key={acc.accountId} style={styles.listItem}>
            <button
              onClick={() => setSelectedAccountId(acc.accountId)}
              style={styles.button}
            >
              {acc.accountHolderName} - {acc.accountNumber}
            </button>
          </li>
        ))}
      </ul>

      {selectedAccountId && (
        <div style={styles.detailsContainer}>
          <AccountDetails accountId={selectedAccountId} />
        </div>
      )}
    </div>
  );
}

// Inline style object
const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '40px auto',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '24px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '12px',
  },
  button: {
    backgroundColor: '#4f46e5',
    color: '#ffffff',
    border: 'none',
    padding: '10px 16px',
    fontSize: '16px',
    borderRadius: '6px',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'left',
    transition: 'background-color 0.3s ease',
  },
  message: {
    textAlign: 'center',
    color: '#666',
    fontSize: '16px',
  },
  detailsContainer: {
    marginTop: '20px',
  },
};

export default AccountDashboard;
