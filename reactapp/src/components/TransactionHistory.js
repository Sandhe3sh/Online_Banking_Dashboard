// import React, { useEffect, useState } from 'react';
// import { getTransactionHistory } from '../utils/api';

// // Format number as currency string, or '-' if invalid
// function formatCurrency(amount) {
//   if (typeof amount !== 'number' || isNaN(amount)) return '-';
//   return `$${amount.toFixed(2)}`;
// }

// // Format date string safely for display
// function formatDate(dateInput) {
//   if (!dateInput) return 'N/A';

//   let dateObj;
//   if (typeof dateInput === 'number') {
//     // timestamp
//     dateObj = new Date(dateInput);
//   } else {
//     dateObj = new Date(dateInput);
//   }

//   if (isNaN(dateObj.getTime())) return 'Invalid Date';

//   return dateObj.toLocaleString();
// }

// function TransactionHistory({ accountId }) {
//   const [transactions, setTransactions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!accountId) {
//       setTransactions([]);
//       setLoading(false);
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     getTransactionHistory(accountId)
//       .then(response => {
//         console.log('Raw transactions from API:', response.data);

//         // Map backend data fields to frontend expected fields
//         const mappedTransactions = response.data.map(tx => ({
//           transactionId: tx.transactionId || tx.id,  // accept id or transactionId
//           transactionDate: tx.transactionDate || tx.transaction_date,
//           transactionType: tx.transactionType || tx.transaction_type,
//           amount: tx.amount,
//           description: tx.description,
//           recipientAccountId: tx.recipientAccountId || tx.recipient_account_id || tx.recipient_account,
//         }));

//         console.log('Mapped transactions:', mappedTransactions);

//         setTransactions(mappedTransactions);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError('Failed to fetch transactions.');
//         setLoading(false);
//       });
//   }, [accountId]);

//   if (!accountId) return <p>Please select an account to see transactions.</p>;
//   if (loading) return <p>Loading transactions...</p>;
//   if (error) return <p>{error}</p>;
//   if (transactions.length === 0) return <p>No transactions found.</p>;

//   return (
//     <div>
//       <h3>Transaction History</h3>
//       <table style={{ borderCollapse: 'collapse', width: '100%' }}>
//         <thead>
//           <tr>
//             <th style={thStyle}>Date</th>
//             <th style={thStyle}>Type</th>
//             <th style={thStyle}>Amount</th>
//             <th style={thStyle}>Description</th>
//             {/* <th style={thStyle}>Recipient Account</th> */}

//           </tr>
//         </thead>
//         <tbody>
//           {transactions.map(tx => (
//             <tr key={tx.transactionId}>
//               <td style={tdStyle}>{formatDate(tx.transactionDate)}</td>
//               <td style={tdStyle}>{tx.transactionType || 'N/A'}</td>
//               <td style={tdStyle}>{formatCurrency(tx.amount)}</td>
//               <td style={tdStyle}>{tx.description || '-'}</td>
//               <td style={tdStyle}>{tx.recipientAccountId || '-'}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// const thStyle = {
//   border: '1px solid #ccc',
//   padding: '8px',
//   backgroundColor: '#f4f4f4',
//   textAlign: 'left',
// };

// const tdStyle = {
//   border: '1px solid #ccc',
//   padding: '8px',
// };

// export default TransactionHistory;

import React, { useEffect, useState } from 'react';
import { getTransactionHistory } from '../utils/api';

// Format number as currency string, or '-' if invalid
function formatCurrency(amount) {
  if (typeof amount !== 'number' || isNaN(amount)) return '-';
  return `$${amount.toFixed(2)}`;
}

// Format date string safely for display
function formatDate(dateInput) {
  if (!dateInput) return 'N/A';

  let dateObj;
  if (typeof dateInput === 'number') {
    dateObj = new Date(dateInput);
  } else {
    dateObj = new Date(dateInput);
  }

  if (isNaN(dateObj.getTime())) return 'Invalid Date';

  return dateObj.toLocaleString();
}

function TransactionHistory({ accountId }) {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!accountId) {
      setTransactions([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    getTransactionHistory(accountId)
      .then(response => {
        const mappedTransactions = response.data.map(tx => ({
          transactionId: tx.transactionId || tx.id,
          transactionDate: tx.transactionDate || tx.transaction_date,
          transactionType: tx.transactionType || tx.transaction_type,
          amount: tx.amount,
          description: tx.description,
          recipientAccountId: tx.recipientAccountId || tx.recipient_account_id || tx.recipient_account,
        }));

        setTransactions(mappedTransactions);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch transactions.');
        setLoading(false);
      });
  }, [accountId]);

  if (!accountId) return <p>Please select an account to see transactions.</p>;
  if (loading) return <p>Loading transactions...</p>;
  if (error) return <p>{error}</p>;
  if (transactions.length === 0) return <p>No transactions found.</p>;

  return (
    <div
      style={{
        maxWidth: '900px',
        margin: '20px auto',
        padding: '10px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      }}
    >
      <h3 style={{ color: '#333', marginBottom: '12px' }}>Transaction History</h3>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '100%',
        }}
      >
        <thead>
          <tr>
            {['Date', 'Type', 'Amount', 'Description', 'Recipient Account'].map((header) => (
              <th
                key={header}
                style={{
                  border: '1px solid #ccc',
                  padding: '8px',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'left',
                  fontWeight: '600',
                  fontSize: '14px',
                  color: '#333',
                  userSelect: 'none',
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map(tx => (
            <tr key={tx.transactionId}>
              <td
                style={{
                  border: '1px solid #ccc',
                  padding: '8px',
                  fontSize: '14px',
                  color: '#555',
                  verticalAlign: 'top',
                  wordBreak: 'break-word',
                }}
              >
                {formatDate(tx.transactionDate)}
              </td>
              <td
                style={{
                  border: '1px solid #ccc',
                  padding: '8px',
                  fontSize: '14px',
                  color: '#555',
                  verticalAlign: 'top',
                  wordBreak: 'break-word',
                }}
              >
                {tx.transactionType || 'N/A'}
              </td>
              <td
                style={{
                  border: '1px solid #ccc',
                  padding: '8px',
                  fontSize: '14px',
                  color: '#555',
                  verticalAlign: 'top',
                  wordBreak: 'break-word',
                }}
              >
                {formatCurrency(tx.amount)}
              </td>
              <td
                style={{
                  border: '1px solid #ccc',
                  padding: '8px',
                  fontSize: '14px',
                  color: '#555',
                  verticalAlign: 'top',
                  wordBreak: 'break-word',
                }}
              >
                {tx.description || '-'}
              </td>
              <td
                style={{
                  border: '1px solid #ccc',
                  padding: '8px',
                  fontSize: '14px',
                  color: '#555',
                  verticalAlign: 'top',
                  wordBreak: 'break-word',
                }}
              >
                {tx.recipientAccountId || '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistory;
