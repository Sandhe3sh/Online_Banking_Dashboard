// import React, { useState } from 'react';
// import { depositMoney } from '../utils/api';

// function DepositForm() {
//   const [accountId, setAccountId] = useState('');
//   const [date, setDate] = useState('');
//   const [amount, setAmount] = useState('');
//   const [description, setDescription] = useState('');
//   const [recipientAccount, setRecipientAccount] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');

//     if (!date) {
//       setMessage('Please select a date.');
//       return;
//     }

//     try {
//       const response = await depositMoney({
//         accountId: parseInt(accountId),
//         amount: parseFloat(amount),
//         description,
//         date, // send date if supported by backend
//         recipient_account: recipientAccount ? parseInt(recipientAccount) : undefined, // optional
//       });
//       setMessage(`Deposit successful! New balance: ${response.data.balance}`);

//       // Reset form
//       setAccountId('');
//       setDate('');
//       setAmount('');
//       setDescription('');
//       setRecipientAccount('');
//     } catch (error) {
//       setMessage(`Deposit failed: ${error.response?.data?.message || error.message}`);
//     }
//   };

//   return (
//     <div>
//       <h2>Deposit Money</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>
//             Type: <br />
//             <input type="text" value="Deposit" readOnly />
//           </label>
//         </div>

//         <div>
//           <label>
//             Date: <br />
//             <input
//               type="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               required
//             />
//           </label>
//         </div>

//         <div>
//           <label>
//             Account ID: <br />
//             <input
//               type="number"
//               placeholder="Account ID"
//               value={accountId}
//               onChange={(e) => setAccountId(e.target.value)}
//               required
//             />
//           </label>
//         </div>

//         <div>
//           <label>
//             Amount: <br />
//             <input
//               type="number"
//               min="0.01"
//               step="0.01"
//               placeholder="Amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               required
//             />
//           </label>
//         </div>

//         <div>
//           <label>
//             Description: <br />
//             <input
//               type="text"
//               placeholder="Description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               required
//             />
//           </label>
//         </div>

//         <div>
//           <label>
//             Recipient Account (optional): <br />
//             <input
//               type="number"
//               placeholder="Recipient Account ID"
//               value={recipientAccount}
//               onChange={(e) => setRecipientAccount(e.target.value)}
//             />
//           </label>
//         </div>

//         <button type="submit">Deposit</button>
//       </form>

//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default DepositForm;

import React, { useState } from 'react';
import { depositMoney } from '../utils/api';

function DepositForm() {
  const [accountId, setAccountId] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [recipientAccount, setRecipientAccount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!date) {
      setMessage('Please select a date.');
      return;
    }

    try {
      const response = await depositMoney({
        accountId: parseInt(accountId),
        amount: parseFloat(amount),
        description,
        date, // send date if supported by backend
        recipient_account: recipientAccount ? parseInt(recipientAccount) : undefined, // optional
      });
      setMessage(`Deposit successful! New balance: ${response.data.balance}`);

      // Reset form
      setAccountId('');
      setDate('');
      setAmount('');
      setDescription('');
      setRecipientAccount('');
    } catch (error) {
      setMessage(`Deposit failed: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Deposit Money</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Type: <br />
            <input type="text" value="Deposit" readOnly style={styles.input} />
          </label>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            Date: <br />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              style={styles.input}
            />
          </label>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            Account ID: <br />
            <input
              type="number"
              placeholder="Account ID"
              value={accountId}
              onChange={(e) => setAccountId(e.target.value)}
              required
              style={styles.input}
            />
          </label>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            Amount: <br />
            <input
              type="number"
              min="0.01"
              step="0.01"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              style={styles.input}
            />
          </label>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            Description: <br />
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              style={styles.input}
            />
          </label>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            Recipient Account (optional): <br />
            <input
              type="number"
              placeholder="Recipient Account ID"
              value={recipientAccount}
              onChange={(e) => setRecipientAccount(e.target.value)}
              style={styles.input}
            />
          </label>
        </div>

        <button type="submit" style={styles.button}>Deposit</button>
      </form>

      {message && <p style={message.startsWith('Deposit successful') ? styles.successMessage : styles.errorMessage}>{message}</p>}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#f9fafb',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  heading: {
    marginBottom: '16px',
    color: '#1f2937',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '16px',
  },
  label: {
    fontWeight: '600',
    color: '#374151',
    marginBottom: '6px',
    display: 'block',
  },
  input: {
    width: '100%',
    padding: '8px 10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #d1d5db',
    boxSizing: 'border-box',
    outline: 'none',
  },
  button: {
    backgroundColor: '#2563eb',
    color: '#fff',
    padding: '12px',
    fontSize: '16px',
    fontWeight: '700',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  successMessage: {
    color: '#16a34a',
    marginTop: '16px',
    fontWeight: '600',
  },
  errorMessage: {
    color: '#dc2626',
    marginTop: '16px',
    fontWeight: '600',
  },
};

export default DepositForm;
