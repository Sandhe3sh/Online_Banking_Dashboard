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

// import React, { useState } from 'react';
// import { withdrawMoney } from '../utils/api';

// function WithdrawForm() {
//   const [accountId, setAccountId] = useState('');
//   const [date, setDate] = useState('');
//   const [amount, setAmount] = useState('');
//   const [description, setDescription] = useState('');
//   const [message, setMessage] = useState('');

//   const styles = {
//     form: {
//       maxWidth: '400px',
//       margin: '20px auto',
//       padding: '20px',
//       border: '1px solid #ddd',
//       borderRadius: '8px',
//       backgroundColor: '#fafafa',
//       boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
//       fontFamily: 'Arial, sans-serif',
//     },
//     formGroup: {
//       marginBottom: '15px',
//     },
//     label: {
//       fontWeight: '600',
//       color: '#333',
//       display: 'block',
//       marginBottom: '5px',
//     },
//     input: {
//       width: '100%',
//       padding: '8px 10px',
//       border: '1px solid #ccc',
//       borderRadius: '5px',
//       fontSize: '14px',
//       boxSizing: 'border-box',
//     },
//     inputFocus: {
//       borderColor: '#007bff',
//       outline: 'none',
//     },
//     inputReadonly: {
//       backgroundColor: '#e9ecef',
//       cursor: 'not-allowed',
//     },
//     button: {
//       backgroundColor: '#007bff',
//       border: 'none',
//       padding: '10px 18px',
//       color: 'white',
//       fontWeight: '600',
//       fontSize: '16px',
//       borderRadius: '5px',
//       cursor: 'pointer',
//       width: '100%',
//     },
//     buttonHover: {
//       backgroundColor: '#0056b3',
//     },
//     message: {
//       maxWidth: '400px',
//       margin: '10px auto 0',
//       fontWeight: '600',
//       color: '#333',
//     },
//   };

//   return (
//     <div>
//       <h2 style={{ textAlign: 'center' }}>Withdraw Money</h2>
//       <form
//         onSubmit={async (e) => {
//           e.preventDefault();
//           setMessage('');
//           if (!date) {
//             setMessage('Please select a date.');
//             return;
//           }
//           try {
//             const response = await withdrawMoney({
//               accountId: parseInt(accountId),
//               amount: parseFloat(amount),
//               description,
//               date,
//             });
//             setMessage(`Withdrawal successful! New balance: ${response.data.balance}`);
//             setAccountId('');
//             setDate('');
//             setAmount('');
//             setDescription('');
//           } catch (error) {
//             setMessage(`Withdrawal failed: ${error.response?.data?.message || error.message}`);
//           }
//         }}
//         style={styles.form}
//       >
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Type:</label>
//           <input
//             type="text"
//             value="Withdraw"
//             readOnly
//             style={{ ...styles.input, ...styles.inputReadonly }}
//           />
//         </div>

//         <div style={styles.formGroup}>
//           <label style={styles.label}>Date:</label>
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             required
//             style={styles.input}
//           />
//         </div>

//         <div style={styles.formGroup}>
//           <label style={styles.label}>Account ID:</label>
//           <input
//             type="number"
//             placeholder="Account ID"
//             value={accountId}
//             onChange={(e) => setAccountId(e.target.value)}
//             required
//             style={styles.input}
//           />
//         </div>

//         <div style={styles.formGroup}>
//           <label style={styles.label}>Amount:</label>
//           <input
//             type="number"
//             placeholder="Amount"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             required
//             min="0.01"
//             step="0.01"
//             style={styles.input}
//           />
//         </div>

//         <div style={styles.formGroup}>
//           <label style={styles.label}>Description:</label>
//           <input
//             type="text"
//             placeholder="Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//             style={styles.input}
//           />
//         </div>

//         <button type="submit" style={styles.button}>
//           Withdraw
//         </button>
//       </form>

//       {message && <p style={styles.message}>{message}</p>}
//     </div>
//   );
// }

// export default WithdrawForm;
import React, { useState } from 'react';
import { withdrawMoney } from '../utils/api';

function WithdrawForm() {
  const [formData, setFormData] = useState({
    accountId: '',
    date: new Date().toISOString().split('T')[0], // default to today
    amount: '',
    description: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    // Clear messages when user starts typing
    if (message) setMessage('');
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(amount || 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsSubmitting(true);

    if (!formData.date) {
      setMessage('Please select a date.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await withdrawMoney({
        accountId: parseInt(formData.accountId),
        amount: parseFloat(formData.amount),
        description: formData.description,
        date: formData.date,
      });
      
      setMessage(`Withdrawal successful! New balance: ${formatCurrency(response.data.balance)}`);

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          accountId: '',
          date: new Date().toISOString().split('T')[0],
          amount: '',
          description: '',
        });
        setMessage('');
      }, 3000);

    } catch (error) {
      setMessage(`Withdrawal failed: ${error.response?.data?.message || error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.headerIcon}>💳</div>
        <h1 style={styles.title}>Withdraw Money</h1>
        <p style={styles.subtitle}>Securely withdraw funds from your account</p>
      </div>

      {/* Success/Error Messages */}
      {message && (
        <div style={message.startsWith('Withdrawal successful') ? styles.successAlert : styles.errorAlert}>
          <span style={styles.alertIcon}>
            {message.startsWith('Withdrawal successful') ? '✅' : '⚠️'}
          </span>
          {message}
        </div>
      )}

      {/* Form Section */}
      <div style={styles.formCard}>
        <form onSubmit={handleSubmit}>
          {/* Transaction Type */}
          <div style={styles.formGroup}>
            <label style={styles.label}>
              <span style={styles.labelIcon}>📋</span>
              Transaction Type
            </label>
            <div style={styles.readOnlyInputWrapper}>
              <input 
                type="text" 
                value="Withdraw" 
                readOnly 
                style={styles.readOnlyInput}
              />
              <div style={styles.withdrawBadge}>DEBIT</div>
            </div>
          </div>

          {/* Date */}
          <div style={styles.formGroup}>
            <label style={styles.label}>
              <span style={styles.labelIcon}>📅</span>
              Transaction Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          {/* Account ID */}
          <div style={styles.formGroup}>
            <label style={styles.label}>
              <span style={styles.labelIcon}>🏦</span>
              Account ID *
            </label>
            <input
              type="number"
              name="accountId"
              placeholder="Enter your account ID"
              value={formData.accountId}
              onChange={handleChange}
              required
              style={styles.input}
            />
            <div style={styles.fieldNote}>
              Your unique account identification number
            </div>
          </div>

          {/* Amount */}
          <div style={styles.formGroup}>
            <label style={styles.label}>
              <span style={styles.labelIcon}>💸</span>
              Withdrawal Amount *
            </label>
            <div style={styles.currencyInputWrapper}>
              <span style={styles.currencySymbol}>₹</span>
              <input
                type="number"
                name="amount"
                min="0.01"
                step="0.01"
                placeholder="0.00"
                value={formData.amount}
                onChange={handleChange}
                required
                style={styles.currencyInput}
              />
            </div>
            <div style={styles.fieldNote}>
              Minimum withdrawal amount: ₹100.00
            </div>
          </div>

          {/* Description */}
          <div style={styles.formGroup}>
            <label style={styles.label}>
              <span style={styles.labelIcon}>📝</span>
              Description *
            </label>
            <input
              type="text"
              name="description"
              placeholder="e.g., ATM withdrawal, Cash for expenses, Emergency withdrawal"
              value={formData.description}
              onChange={handleChange}
              required
              style={styles.input}
              maxLength="100"
            />
            <div style={styles.fieldNote}>
              Brief description of withdrawal purpose
            </div>
          </div>

          {/* Transaction Summary */}
          {formData.amount && (
            <div style={styles.summarySection}>
              <div style={styles.summaryBox}>
                <h3 style={styles.summaryTitle}>Transaction Summary</h3>
                <div style={styles.summaryItem}>
                  <span>Withdrawal Amount:</span>
                  <span style={styles.summaryAmount}>{formatCurrency(parseFloat(formData.amount))}</span>
                </div>
                <div style={styles.summaryItem}>
                  <span>Transaction Fee:</span>
                  <span style={styles.feeText}>₹5.00</span>
                </div>
                <div style={styles.summaryDivider}></div>
                <div style={styles.summaryTotal}>
                  <span>Total Debit:</span>
                  <span style={styles.totalAmount}>{formatCurrency(parseFloat(formData.amount) + 5)}</span>
                </div>
              </div>
            </div>
          )}

          {/* Important Notice */}
          <div style={styles.noticeSection}>
            <div style={styles.noticeBox}>
              <h3 style={styles.noticeTitle}>⚠️ Important Notice</h3>
              <ul style={styles.noticeList}>
                <li>Ensure sufficient balance before withdrawal</li>
                <li>Daily withdrawal limit may apply</li>
                <li>Transaction fee of ₹5 will be charged</li>
                <li>Withdrawals are processed instantly</li>
              </ul>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isSubmitting}
            style={{
              ...styles.submitButton,
              ...(isSubmitting ? styles.submitButtonDisabled : {})
            }}
          >
            {isSubmitting ? (
              <>
                <span style={styles.spinner}></span>
                Processing Withdrawal...
              </>
            ) : (
              <>
                <span style={styles.buttonIcon}>💳</span>
                Withdraw Money
              </>
            )}
          </button>
        </form>
      </div>

      {/* Security Notice */}
      <div style={styles.securityNotice}>
        <div style={styles.securityIcon}>🔒</div>
        <div>
          <div style={styles.securityTitle}>Secure Transaction</div>
          <div style={styles.securityText}>
            All withdrawals are processed through secure channels with real-time balance verification.
          </div>
        </div>
      </div>
    </div>
  );
}

// Modern banking form styles
const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '24px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    minHeight: '100vh',
  },

  // Header Styles
  header: {
    textAlign: 'center',
    marginBottom: '32px',
    background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
    borderRadius: '20px',
    padding: '40px 32px',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
  },

  headerIcon: {
    fontSize: '3rem',
    marginBottom: '16px',
  },

  title: {
    fontSize: '2.2rem',
    fontWeight: '700',
    margin: '0 0 8px 0',
  },

  subtitle: {
    fontSize: '1.1rem',
    opacity: '0.8',
    margin: '0',
    fontWeight: '400',
  },

  // Alert Styles
  successAlert: {
    background: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
    color: '#065f46',
    padding: '16px 20px',
    borderRadius: '12px',
    marginBottom: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    border: '1px solid #34d399',
    fontWeight: '600',
  },

  errorAlert: {
    background: 'linear-gradient(135deg, #fee2e2, #fecaca)',
    color: '#991b1b',
    padding: '16px 20px',
    borderRadius: '12px',
    marginBottom: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    border: '1px solid #f87171',
    fontWeight: '600',
  },

  alertIcon: {
    fontSize: '1.2rem',
  },

  // Form Card
  formCard: {
    background: 'white',
    borderRadius: '20px',
    padding: '32px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    marginBottom: '24px',
  },

  // Form Groups
  formGroup: {
    marginBottom: '24px',
  },

  label: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px',
    fontWeight: '600',
    color: '#374151',
    fontSize: '0.95rem',
  },

  labelIcon: {
    fontSize: '1.2rem',
  },

  // Input Styles
  input: {
    width: '100%',
    padding: '16px 20px',
    fontSize: '16px',
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    outline: 'none',
    boxSizing: 'border-box',
    background: '#f9fafb',
    transition: 'all 0.3s ease',
    fontWeight: '500',
  },

  readOnlyInputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },

  readOnlyInput: {
    width: '100%',
    padding: '16px 20px',
    fontSize: '16px',
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    outline: 'none',
    boxSizing: 'border-box',
    background: '#f3f4f6',
    color: '#6b7280',
    fontWeight: '600',
    cursor: 'not-allowed',
  },

  withdrawBadge: {
    position: 'absolute',
    right: '12px',
    background: '#dc2626',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '0.5px',
  },

  // Currency Input
  currencyInputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },

  currencySymbol: {
    position: 'absolute',
    left: '20px',
    fontSize: '18px',
    fontWeight: '700',
    color: '#6b7280',
    zIndex: 1,
  },

  currencyInput: {
    width: '100%',
    padding: '16px 20px 16px 40px',
    fontSize: '16px',
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    outline: 'none',
    boxSizing: 'border-box',
    background: '#f9fafb',
    transition: 'all 0.3s ease',
    fontWeight: '500',
    fontFamily: 'monospace',
  },

  fieldNote: {
    fontSize: '0.85rem',
    color: '#6b7280',
    marginTop: '6px',
    fontStyle: 'italic',
  },

  // Summary Section
  summarySection: {
    marginBottom: '32px',
  },

  summaryBox: {
    background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
    border: '1px solid #f87171',
    borderRadius: '12px',
    padding: '20px',
  },

  summaryTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#991b1b',
    margin: '0 0 16px 0',
  },

  summaryItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
    fontSize: '0.95rem',
    color: '#374151',
  },

  summaryAmount: {
    fontWeight: '600',
    fontFamily: 'monospace',
    color: '#dc2626',
  },

  feeText: {
    fontWeight: '600',
    color: '#f59e0b',
  },

  summaryDivider: {
    height: '1px',
    background: '#cbd5e1',
    margin: '12px 0',
  },

  summaryTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#991b1b',
  },

  totalAmount: {
    fontSize: '1.3rem',
    fontFamily: 'monospace',
    color: '#dc2626',
  },

  // Notice Section
  noticeSection: {
    marginBottom: '32px',
  },

  noticeBox: {
    background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
    border: '1px solid #f59e0b',
    borderRadius: '12px',
    padding: '20px',
  },

  noticeTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#92400e',
    margin: '0 0 12px 0',
  },

  noticeList: {
    margin: '0',
    paddingLeft: '20px',
    color: '#92400e',
    fontSize: '0.9rem',
    lineHeight: '1.6',
  },

  // Submit Button
  submitButton: {
    width: '100%',
    padding: '18px 0',
    fontSize: '18px',
    fontWeight: '700',
    color: 'white',
    background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
    border: 'none',
    borderRadius: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    boxShadow: '0 10px 30px rgba(220, 38, 38, 0.3)',
    position: 'relative',
    overflow: 'hidden',
  },

  submitButtonDisabled: {
    background: '#9ca3af',
    cursor: 'not-allowed',
    boxShadow: 'none',
  },

  buttonIcon: {
    fontSize: '1.3rem',
  },

  spinner: {
    width: '20px',
    height: '20px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderTop: '2px solid white',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },

  // Security Notice
  securityNotice: {
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '16px',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    border: '1px solid #e2e8f0',
    backdropFilter: 'blur(10px)',
  },

  securityIcon: {
    fontSize: '2rem',
    color: '#dc2626',
  },

  securityTitle: {
    fontWeight: '600',
    color: '#374151',
    fontSize: '1rem',
    marginBottom: '4px',
  },

  securityText: {
    fontSize: '0.9rem',
    color: '#6b7280',
    lineHeight: '1.5',
  },
};

// Add keyframes for spinner animation
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  input:focus, select:focus {
    border-color: #dc2626 !important;
    box-shadow: 0 0 0 4px rgba(220, 38, 38, 0.1) !important;
    background: white !important;
  }
`;
document.head.appendChild(styleSheet);

export default WithdrawForm;  