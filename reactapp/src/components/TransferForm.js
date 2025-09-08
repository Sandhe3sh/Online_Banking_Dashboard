// import React, { useState } from 'react';

// function TransferForm({ accountId }) {
//   const [date, setDate] = useState('');
//   const [recipientAccount, setRecipientAccount] = useState('');
//   const [amount, setAmount] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!date || !recipientAccount || !amount) {
//       alert('Please fill in all required fields.');
//       return;
//     }

//     alert(`Transfer Details:
//     Type: Transfer
//     Date: ${date}
//     From Account: ${accountId}
//     Recipient Account: ${recipientAccount}
//     Amount: $${amount}
//     Description: ${description}`);

//     // Reset form
//     setDate('');
//     setRecipientAccount('');
//     setAmount('');
//     setDescription('');
//   };

//   return (
//     <div>
//       <h2>Transfer Money</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>
//             Type: <br />
//             <input type="text" value="Transfer" readOnly />
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
//             From Account ID: <br />
//             <input type="text" value={accountId} readOnly />
//           </label>
//         </div>

//         <div>
//           <label>
//             Recipient Account: <br />
//             <input
//               type="text"
//               value={recipientAccount}
//               onChange={(e) => setRecipientAccount(e.target.value)}
//               placeholder="Recipient Account ID"
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
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               placeholder="Amount"
//               required
//             />
//           </label>
//         </div>

//         <div>
//           <label>
//             Description: <br />
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="Optional description"
//             />
//           </label>
//         </div>

//         <button type="submit">Transfer</button>
//       </form>
//     </div>
//   );
// }

// export default TransferForm;

// import React, { useState, useEffect } from 'react';

// function TransferForm({ accountId }) {
//   const [fromAccountId, setFromAccountId] = useState(accountId || '');
//   const [date, setDate] = useState('');
//   const [recipientAccount, setRecipientAccount] = useState('');
//   const [amount, setAmount] = useState('');
//   const [description, setDescription] = useState('');

//   // Keep fromAccountId in sync if accountId prop changes
//   useEffect(() => {
//     if (accountId) {
//       setFromAccountId(accountId);
//     }
//   }, [accountId]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!date || !recipientAccount || !amount || !fromAccountId) {
//       alert('Please fill in all required fields.');
//       return;
//     }

//     alert(`Transfer Details:
//     Type: Transfer
//     Date: ${date}
//     From Account: ${fromAccountId}
//     Recipient Account: ${recipientAccount}
//     Amount: $${amount}
//     Description: ${description}`);

//     // Reset form except fromAccountId (optional)
//     setDate('');
//     setRecipientAccount('');
//     setAmount('');
//     setDescription('');
//   };

//   const inputStyle = {
//     width: '100%',
//     padding: '8px',
//     marginTop: '4px',
//     marginBottom: '12px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     fontSize: '14px',
//   };

//   const labelStyle = {
//     fontWeight: '600',
//     color: '#333',
//   };

//   const buttonStyle = {
//     padding: '10px 20px',
//     backgroundColor: '#007bff',
//     border: 'none',
//     borderRadius: '5px',
//     color: 'white',
//     cursor: 'pointer',
//     fontSize: '16px',
//   };

//   const formStyle = {
//     maxWidth: '400px',
//     margin: '20px auto',
//     padding: '15px',
//     border: '1px solid #ddd',
//     borderRadius: '8px',
//     backgroundColor: '#fafafa',
//     boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//   };

//   return (
//     <div style={formStyle}>
//       <h2 style={{ color: '#222', marginBottom: '20px' }}>Transfer Money</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label style={labelStyle}>
//             Type:
//             <br />
//             <input type="text" value="Transfer" readOnly style={inputStyle} />
//           </label>
//         </div>

//         <div>
//           <label style={labelStyle}>
//             Date:
//             <br />
//             <input
//               type="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               required
//               style={inputStyle}
//             />
//           </label>
//         </div>

//         <div>
//           <label style={labelStyle}>
//             From Account ID:
//             <br />
//             <input
//               type="text"
//               value={fromAccountId}
//               onChange={(e) => setFromAccountId(e.target.value)}
//               placeholder="From Account ID"
//               required
//               style={inputStyle}
//             />
//           </label>
//         </div>

//         <div>
//           <label style={labelStyle}>
//             Recipient Account:
//             <br />
//             <input
//               type="text"
//               value={recipientAccount}
//               onChange={(e) => setRecipientAccount(e.target.value)}
//               placeholder="Recipient Account ID"
//               required
//               style={inputStyle}
//             />
//           </label>
//         </div>

//         <div>
//           <label style={labelStyle}>
//             Amount:
//             <br />
//             <input
//               type="number"
//               min="0.01"
//               step="0.01"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               placeholder="Amount"
//               required
//               style={inputStyle}
//             />
//           </label>
//         </div>

//         <div>
//           <label style={labelStyle}>
//             Description:
//             <br />
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="Optional description"
//               style={{ ...inputStyle, height: '80px', resize: 'vertical' }}
//             />
//           </label>
//         </div>

//         <button type="submit" style={buttonStyle}>
//           Transfer
//         </button>
//       </form>
//     </div>
//   );
// }

// export default TransferForm;
 
import React, { useState, useEffect } from 'react';
import { transferMoney } from '../utils/api'; // adjust path if needed

function TransferForm({ accountId }) {
  const [fromAccountId, setFromAccountId] = useState(accountId || '');
  const [date, setDate] = useState('');
  const [recipientAccount, setRecipientAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (accountId) {
      setFromAccountId(accountId);
    }
  }, [accountId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!date || !recipientAccount || !amount || !fromAccountId) {
      setMessage('Please fill in all required fields.');
      return;
    }

    const amountValue = parseFloat(amount);
    if (isNaN(amountValue) || amountValue <= 0) {
      setMessage('Please enter a valid amount greater than 0.');
      return;
    }

    setLoading(true);
    try {
      const result = await transferMoney({
        fromAccountId,
        toAccountId: recipientAccount,
        amount: amountValue,
        description,
      });

      setMessage('Transfer successful!');
      // Reset form except fromAccountId
      setDate('');
      setRecipientAccount('');
      setAmount('');
      setDescription('');
    } catch (error) {
      setMessage(`Transfer failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginTop: '4px',
    marginBottom: '12px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
  };

  const labelStyle = {
    fontWeight: '600',
    color: '#333',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: loading ? '#ccc' : '#007bff',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: loading ? 'not-allowed' : 'pointer',
    fontSize: '16px',
  };

  const formStyle = {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fafafa',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  return (
    <div style={formStyle}>
      <h2 style={{ color: '#222', marginBottom: '20px' }}>Transfer Money</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={labelStyle}>
            Type:
            <br />
            <input type="text" value="Transfer" readOnly style={inputStyle} />
          </label>
        </div>

        <div>
          <label style={labelStyle}>
            Date:
            <br />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              style={inputStyle}
            />
          </label>
        </div>

        <div>
          <label style={labelStyle}>
            From Account ID:
            <br />
            <input
              type="text"
              value={fromAccountId}
              onChange={(e) => setFromAccountId(e.target.value)}
              placeholder="From Account ID"
              required
              style={inputStyle}
              readOnly={!!accountId} // prevent editing if provided from props
            />
          </label>
        </div>

        <div>
          <label style={labelStyle}>
            Recipient Account:
            <br />
            <input
              type="text"
              value={recipientAccount}
              onChange={(e) => setRecipientAccount(e.target.value)}
              placeholder="Recipient Account ID"
              required
              style={inputStyle}
            />
          </label>
        </div>

        <div>
          <label style={labelStyle}>
            Amount:
            <br />
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              required
              style={inputStyle}
            />
          </label>
        </div>

        <div>
          <label style={labelStyle}>
            Description:
            <br />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Optional description"
              style={{ ...inputStyle, height: '80px', resize: 'vertical' }}
            />
          </label>
        </div>

        <button type="submit" style={buttonStyle} disabled={loading}>
          {loading ? 'Transferring...' : 'Transfer'}
        </button>
      </form>
      {message && <p style={{ fontWeight: '600', color: message.startsWith('Transfer failed') ? 'red' : 'green', maxWidth: '400px', margin: '10px auto' }}>{message}</p>}
    </div>
  );
}

export default TransferForm;
