// import React, { useEffect, useState } from 'react';
// import { getAccountDetails, getTransactionHistory } from '../utils/api';

// function AccountDetails({ accountId }) {
//   const [account, setAccount] = useState(null);
//   const [transactions, setTransactions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         setLoading(true);
//         setError(null);

//         const accountRes = await getAccountDetails(accountId);
//         const transactionsRes = await getTransactionHistory(accountId);

//         console.log(accountRes.data); // Check key names here

//         setAccount(accountRes.data);
//         setTransactions(transactionsRes.data);
//       } catch (err) {
//         setError('Failed to load data');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, [accountId]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;
//   if (!account) return <p>Account not found</p>;

//   return (
//     <div>
//       <h2>Account Details</h2>
//       <p><strong>Account Number:</strong> {account.accountNumber || account.account_number || 'N/A'}</p>
//       <p><strong>Account Holder:</strong> {account.accountHolder || account.holderName || 'N/A'}</p> {/* Updated here */}
//       <p><strong>Account Type:</strong> {account.accountType || account.account_type || 'N/A'}</p>
//       <p><strong>Balance:</strong> ${Number(account.balance ?? 0).toFixed(2)}</p>
//       <p><strong>Created Date:</strong> {account.createdDate || account.created_date ? new Date(account.createdDate || account.created_date).toLocaleDateString() : 'N/A'}</p>

//       <h3>Transaction History</h3>
//       {transactions.length === 0 ? (
//         <p>No transactions found.</p>
//       ) : (
//         <table border="1" cellPadding="5" cellSpacing="0" style={{ width: '100%', marginTop: '1rem' }}>
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>Type</th>
//               <th>Amount</th>
//               <th>Description</th>
//               <th>Recipient Account</th>
//             </tr>
//           </thead>
//           <tbody>
//             {transactions.map(txn => (
//               <tr key={txn.transactionId || txn.id}>
//                 <td>{txn.transactionDate || txn.date ? new Date(txn.transactionDate || txn.date).toLocaleString() : 'N/A'}</td>
//                 <td>{txn.transactionType || txn.type || 'N/A'}</td>
//                 <td>${Number(txn.amount ?? 0).toFixed(2)}</td>
//                 <td>{txn.description || '-'}</td>
//                 <td>{txn.recipientAccountId || txn.recipient_account || txn.recipientAccount || '-'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default AccountDetails;


import React, { useEffect, useState } from 'react';
import { getAccountDetails, getTransactionHistory } from '../utils/api';
 

function AccountDetails({ accountId }) {
  const [account, setAccount] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const accountRes = await getAccountDetails(accountId);
        const transactionsRes = await getTransactionHistory(accountId);

        setAccount(accountRes.data);
        setTransactions(transactionsRes.data);
      } catch (err) {
        setError('Failed to load data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [accountId]);

  if (loading) return <p style={styles.message}>Loading...</p>;
  if (error) return <p style={styles.message}>{error}</p>;
  if (!account) return <p style={styles.message}>Account not found</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Account Details</h2>
      <p><strong>Account Number:</strong> {account.accountNumber || account.account_number || 'N/A'}</p>
      <p><strong>Account Holder:</strong> {account.accountHolder || account.holderName || 'N/A'}</p>
      <p><strong>Account Type:</strong> {account.accountType || account.account_type || 'N/A'}</p>
      <p><strong>Balance:</strong> ${Number(account.balance ?? 0).toFixed(2)}</p>
      <p><strong>Created Date:</strong> {account.createdDate || account.created_date ? new Date(account.createdDate || account.created_date).toLocaleDateString() : 'N/A'}</p>

      <h3 style={styles.subHeading}>Transaction History</h3>
      {transactions.length === 0 ? (
        <p style={styles.message}>No transactions found.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Type</th>
              <th style={styles.th}>Amount</th>
              <th style={styles.th}>Description</th>
              <th style={styles.th}>Recipient Account</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(txn => (
              <tr key={txn.transactionId || txn.id}>
                <td style={styles.td}>{txn.transactionDate || txn.date ? new Date(txn.transactionDate || txn.date).toLocaleString() : 'N/A'}</td>
                <td style={styles.td}>{txn.transactionType || txn.type || 'N/A'}</td>
                <td style={styles.td}>${Number(txn.amount ?? 0).toFixed(2)}</td>
                <td style={styles.td}>{txn.description || '-'}</td>
                <td style={styles.td}>{txn.recipientAccountId || txn.recipient_account || txn.recipientAccount || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '22px',
    color: '#1e293b',
    marginBottom: '16px',
  },
  subHeading: {
    fontSize: '18px',
    marginTop: '24px',
    marginBottom: '12px',
    color: '#334155',
  },
  message: {
    color: '#666',
    fontSize: '16px',
    textAlign: 'center',
    margin: '12px 0',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '1rem',
  },
  th: {
    backgroundColor: '#e0e7ff',
    color: '#1e3a8a',
    padding: '8px',
    textAlign: 'left',
    borderBottom: '1px solid #cbd5e1',
  },
  td: {
    padding: '8px',
    borderBottom: '1px solid #e2e8f0',
  },
};

export default AccountDetails;
