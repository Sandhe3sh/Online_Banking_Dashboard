// // import React, { useState } from 'react';
// // import { withdrawMoney } from '../utils/api';

// // function WithdrawForm() {
// //   const [accountId, setAccountId] = useState('');
// //   const [amount, setAmount] = useState('');
// //   const [description, setDescription] = useState('');
// //   const [message, setMessage] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setMessage('');
// //     try {
// //       const response = await withdrawMoney({
// //         accountId: parseInt(accountId),
// //         amount: parseFloat(amount),
// //         description,
// //       });
// //       setMessage(`Withdrawal successful! New balance: ${response.data.balance}`);
// //     } catch (error) {
// //       setMessage(`Withdrawal failed: ${error.response?.data?.message || error.message}`);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Withdraw Money</h2>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="number"
// //           placeholder="Account ID"
// //           value={accountId}
// //           onChange={(e) => setAccountId(e.target.value)}
// //           required
// //         />
// //         <input
// //           type="number"
// //           placeholder="Amount"
// //           value={amount}
// //           onChange={(e) => setAmount(e.target.value)}
// //           required
// //         />
// //         <input
// //           type="text"
// //           placeholder="Description"
// //           value={description}
// //           onChange={(e) => setDescription(e.target.value)}
// //           required
// //         />
// //         <button type="submit">Withdraw</button>
// //       </form>
// //       {message && <p>{message}</p>}
// //     </div>
// //   );
// // }

// // export default WithdrawForm;

// import React, { useState } from 'react';
// import { withdrawMoney } from '../utils/api';

// function WithdrawForm() {
//   const [accountId, setAccountId] = useState('');
//   const [date, setDate] = useState('');
//   const [amount, setAmount] = useState('');
//   const [description, setDescription] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');

//     if (!date) {
//       setMessage('Please select a date.');
//       return;
//     }

//     try {
//       const response = await withdrawMoney({
//         accountId: parseInt(accountId),
//         amount: parseFloat(amount),
//         description,
//         date, // pass date if your API supports it
//       });
//       setMessage(`Withdrawal successful! New balance: ${response.data.balance}`);
//       // Reset form fields if needed
//       setAccountId('');
//       setDate('');
//       setAmount('');
//       setDescription('');
//     } catch (error) {
//       setMessage(`Withdrawal failed: ${error.response?.data?.message || error.message}`);
//     }
//   };

//   return (
//     <div>
//       <h2>Withdraw Money</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>
//             Type: <br />
//             <input type="text" value="Withdraw" readOnly />
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
//               placeholder="Amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               required
//               min="0.01"
//               step="0.01"
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
//         <button type="submit">Withdraw</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default WithdrawForm;

import React, { useState } from 'react';
import { withdrawMoney } from '../utils/api';

function WithdrawForm() {
  const [accountId, setAccountId] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const styles = {
    form: {
      maxWidth: '400px',
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#fafafa',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      fontWeight: '600',
      color: '#333',
      display: 'block',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '8px 10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '14px',
      boxSizing: 'border-box',
    },
    inputFocus: {
      borderColor: '#007bff',
      outline: 'none',
    },
    inputReadonly: {
      backgroundColor: '#e9ecef',
      cursor: 'not-allowed',
    },
    button: {
      backgroundColor: '#007bff',
      border: 'none',
      padding: '10px 18px',
      color: 'white',
      fontWeight: '600',
      fontSize: '16px',
      borderRadius: '5px',
      cursor: 'pointer',
      width: '100%',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    message: {
      maxWidth: '400px',
      margin: '10px auto 0',
      fontWeight: '600',
      color: '#333',
    },
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Withdraw Money</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setMessage('');
          if (!date) {
            setMessage('Please select a date.');
            return;
          }
          try {
            const response = await withdrawMoney({
              accountId: parseInt(accountId),
              amount: parseFloat(amount),
              description,
              date,
            });
            setMessage(`Withdrawal successful! New balance: ${response.data.balance}`);
            setAccountId('');
            setDate('');
            setAmount('');
            setDescription('');
          } catch (error) {
            setMessage(`Withdrawal failed: ${error.response?.data?.message || error.message}`);
          }
        }}
        style={styles.form}
      >
        <div style={styles.formGroup}>
          <label style={styles.label}>Type:</label>
          <input
            type="text"
            value="Withdraw"
            readOnly
            style={{ ...styles.input, ...styles.inputReadonly }}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Account ID:</label>
          <input
            type="number"
            placeholder="Account ID"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Amount:</label>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            min="0.01"
            step="0.01"
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Description:</label>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button}>
          Withdraw
        </button>
      </form>

      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}

export default WithdrawForm;
