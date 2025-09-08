// import React, { useState } from 'react';
// import { createAccount } from '../utils/api';

// function CreateAccountForm() {
//   const [formData, setFormData] = useState({
//     accountNumber: '',
//     accountHolderName: '',
//     balance: '',
//     accountType: 'Savings',
//     creationDate: new Date().toISOString().split('T')[0], // default to today
//     recipientAccount: '', // optional field
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await createAccount({
//         accountNumber: formData.accountNumber,
//         accountHolderName: formData.accountHolderName,
//         balance: parseFloat(formData.balance),
//         accountType: formData.accountType,
//         creationDate: formData.creationDate,
//         recipientAccount: formData.recipientAccount,
//       });

//       alert('Account Created! ID: ' + response.data.accountId);

//       // Reset form after successful submission
//       setFormData({
//         accountNumber: '',
//         accountHolderName: '',
//         balance: '',
//         accountType: 'Savings',
//         creationDate: new Date().toISOString().split('T')[0],
//         recipientAccount: '',
//       });
//     } catch (error) {
//       alert('Failed to create account: ' + (error.response?.data?.message || error.message));
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>accountNumber</label><br/>
//         <input
//           name="accountNumber"
//           placeholder="Account Number"
//           value={formData.accountNumber}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label>accountHolderName</label><br/>
//         <input
//           name="accountHolderName"
//           placeholder="Account Holder Name"
//           value={formData.accountHolderName}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label>balance</label><br/>
//         <input
//           name="balance"
//           placeholder="Balance"
//           type="number"
//           min="0"
//           step="0.01"
//           value={formData.balance}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label>accountType</label><br/>
//         <select
//           name="accountType"
//           value={formData.accountType}
//           onChange={handleChange}
//         >
//           <option value="Savings">Savings</option>
//           <option value="Current">Current</option>
//         </select>
//       </div>

//       <div>
//         <label>
//           Creation Date: <br />
//           <input
//             type="date"
//             name="creationDate"
//             value={formData.creationDate}
//             onChange={handleChange}
//             required
//           />
//         </label>
//       </div>

//       <div>
// <label>recipientAccount</label><br/>
//         <input
//           name="recipientAccount"
//           placeholder="Recipient Account (optional)"
//           value={formData.recipientAccount}
//           onChange={handleChange}
//         />
//       </div>

//       <div>
//         <button type="submit">Create Account</button>
//       </div>
//     </form>
//   );
// }

// export default CreateAccountForm;

import React, { useState } from 'react';
import { createAccount } from '../utils/api';

function CreateAccountForm() {
  const [formData, setFormData] = useState({
    accountNumber: '',
    accountHolderName: '',
    balance: '',
    accountType: 'Savings',
    creationDate: new Date().toISOString().split('T')[0], // default to today
    recipientAccount: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createAccount({
        accountNumber: formData.accountNumber,
        accountHolderName: formData.accountHolderName,
        balance: parseFloat(formData.balance),
        accountType: formData.accountType,
        creationDate: formData.creationDate,
        recipientAccount: formData.recipientAccount,
      });

      alert('Account Created! ID: ' + response.data.accountId);

      setFormData({
        accountNumber: '',
        accountHolderName: '',
        balance: '',
        accountType: 'Savings',
        creationDate: new Date().toISOString().split('T')[0],
        recipientAccount: '',
      });
    } catch (error) {
      alert('Failed to create account: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label style={styles.label}>Account Number</label>
        <input
          name="accountNumber"
          placeholder="Account Number"
          value={formData.accountNumber}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Account Holder Name</label>
        <input
          name="accountHolderName"
          placeholder="Account Holder Name"
          value={formData.accountHolderName}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Balance</label>
        <input
          name="balance"
          placeholder="Balance"
          type="number"
          min="0"
          step="0.01"
          value={formData.balance}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Account Type</label>
        <select
          name="accountType"
          value={formData.accountType}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="Savings">Savings</option>
          <option value="Current">Current</option>
        </select>
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Creation Date</label>
        <input
          type="date"
          name="creationDate"
          value={formData.creationDate}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Recipient Account (optional)</label>
        <input
          name="recipientAccount"
          placeholder="Recipient Account (optional)"
          value={formData.recipientAccount}
          onChange={handleChange}
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <button type="submit" style={styles.button}>Create Account</button>
      </div>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#f3f4f6',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  formGroup: {
    marginBottom: '16px',
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontWeight: '600',
    color: '#374151',
  },
  input: {
    width: '100%',
    padding: '8px 10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #d1d5db',
    outline: 'none',
    boxSizing: 'border-box',
  },
  select: {
    width: '100%',
    padding: '8px 10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #d1d5db',
    outline: 'none',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    padding: '10px 0',
    fontSize: '16px',
    fontWeight: '700',
    color: '#fff',
    backgroundColor: '#4f46e5',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default CreateAccountForm;
