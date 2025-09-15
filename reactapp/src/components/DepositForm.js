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
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Deposit Money</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>
//             Type: <br />
//             <input type="text" value="Deposit" readOnly style={styles.input} />
//           </label>
//         </div>

//         <div style={styles.formGroup}>
//           <label style={styles.label}>
//             Date: <br />
//             <input
//               type="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               required
//               style={styles.input}
//             />
//           </label>
//         </div>

//         <div style={styles.formGroup}>
//           <label style={styles.label}>
//             Account ID: <br />
//             <input
//               type="number"
//               placeholder="Account ID"
//               value={accountId}
//               onChange={(e) => setAccountId(e.target.value)}
//               required
//               style={styles.input}
//             />
//           </label>
//         </div>

//         <div style={styles.formGroup}>
//           <label style={styles.label}>
//             Amount: <br />
//             <input
//               type="number"
//               min="0.01"
//               step="0.01"
//               placeholder="Amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               required
//               style={styles.input}
//             />
//           </label>
//         </div>

//         <div style={styles.formGroup}>
//           <label style={styles.label}>
//             Description: <br />
//             <input
//               type="text"
//               placeholder="Description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               required
//               style={styles.input}
//             />
//           </label>
//         </div>

//         <div style={styles.formGroup}>
//           <label style={styles.label}>
//             Recipient Account (optional): <br />
//             <input
//               type="number"
//               placeholder="Recipient Account ID"
//               value={recipientAccount}
//               onChange={(e) => setRecipientAccount(e.target.value)}
//               style={styles.input}
//             />
//           </label>
//         </div>

//         <button type="submit" style={styles.button}>Deposit</button>
//       </form>

//       {message && <p style={message.startsWith('Deposit successful') ? styles.successMessage : styles.errorMessage}>{message}</p>}
//     </div>
//   );
// }

// const styles = {
//   container: {
//     maxWidth: '400px',
//     margin: '20px auto',
//     padding: '20px',
//     backgroundColor: '#f9fafb',
//     borderRadius: '8px',
//     fontFamily: 'Arial, sans-serif',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//   },
//   heading: {
//     marginBottom: '16px',
//     color: '#1f2937',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   formGroup: {
//     marginBottom: '16px',
//   },
//   label: {
//     fontWeight: '600',
//     color: '#374151',
//     marginBottom: '6px',
//     display: 'block',
//   },
//   input: {
//     width: '100%',
//     padding: '8px 10px',
//     fontSize: '16px',
//     borderRadius: '4px',
//     border: '1px solid #d1d5db',
//     boxSizing: 'border-box',
//     outline: 'none',
//   },
//   button: {
//     backgroundColor: '#2563eb',
//     color: '#fff',
//     padding: '12px',
//     fontSize: '16px',
//     fontWeight: '700',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//   },
//   successMessage: {
//     color: '#16a34a',
//     marginTop: '16px',
//     fontWeight: '600',
//   },
//   errorMessage: {
//     color: '#dc2626',
//     marginTop: '16px',
//     fontWeight: '600',
//   },
// };

// export default DepositForm;

import React, { useState } from 'react';
import { depositMoney } from '../utils/api';

function DepositForm() {
  const [formData, setFormData] = useState({
    accountId: '',
    date: new Date().toISOString().split('T')[0], // default to today
    amount: '',
    description: '',
    recipientAccount: '',
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
      const response = await depositMoney({
        accountId: parseInt(formData.accountId),
        amount: parseFloat(formData.amount),
        description: formData.description,
        date: formData.date,
        recipient_account: formData.recipientAccount ? parseInt(formData.recipientAccount) : undefined,
      });
      
      setMessage(`Deposit successful! New balance: ${formatCurrency(response.data.balance)}`);

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          accountId: '',
          date: new Date().toISOString().split('T')[0],
          amount: '',
          description: '',
          recipientAccount: '',
        });
        setMessage('');
      }, 3000);

    } catch (error) {
      setMessage(`Deposit failed: ${error.response?.data?.message || error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.headerIcon}>💰</div>
        <h1 style={styles.title}>Deposit Money</h1>
        <p style={styles.subtitle}>Add funds to your account securely</p>
      </div>

      {/* Success/Error Messages */}
      {message && (
        <div style={message.startsWith('Deposit successful') ? styles.successAlert : styles.errorAlert}>
          <span style={styles.alertIcon}>
            {message.startsWith('Deposit successful') ? '✅' : '⚠️'}
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
                value="Deposit" 
                readOnly 
                style={styles.readOnlyInput}
              />
              <div style={styles.depositBadge}>CREDIT</div>
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
              <span style={styles.labelIcon}>💵</span>
              Deposit Amount *
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
              Minimum deposit amount: ₹1.00
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
              placeholder="e.g., Salary deposit, Cash deposit, Transfer from savings"
              value={formData.description}
              onChange={handleChange}
              required
              style={styles.input}
              maxLength="100"
            />
            <div style={styles.fieldNote}>
              Brief description of the deposit source
            </div>
          </div>

          {/* Recipient Account */}
          <div style={styles.formGroup}>
            <label style={styles.label}>
              <span style={styles.labelIcon}>🔗</span>
              From Account (Optional)
            </label>
            <input
              type="number"
              name="recipientAccount"
              placeholder="Source account ID (if internal transfer)"
              value={formData.recipientAccount}
              onChange={handleChange}
              style={styles.input}
            />
            <div style={styles.fieldNote}>
              Leave empty for external deposits
            </div>
          </div>

          {/* Transaction Summary */}
          {formData.amount && (
            <div style={styles.summarySection}>
              <div style={styles.summaryBox}>
                <h3 style={styles.summaryTitle}>Transaction Summary</h3>
                <div style={styles.summaryItem}>
                  <span>Deposit Amount:</span>
                  <span style={styles.summaryAmount}>{formatCurrency(parseFloat(formData.amount))}</span>
                </div>
                <div style={styles.summaryItem}>
                  <span>Transaction Fee:</span>
                  <span style={styles.freeText}>₹0.00 (Free)</span>
                </div>
                <div style={styles.summaryDivider}></div>
                <div style={styles.summaryTotal}>
                  <span>Total Credit:</span>
                  <span style={styles.totalAmount}>{formatCurrency(parseFloat(formData.amount))}</span>
                </div>
              </div>
            </div>
          )}

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
                Processing Deposit...
              </>
            ) : (
              <>
                <span style={styles.buttonIcon}>💰</span>
                Deposit Money
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
            All deposits are processed through encrypted channels and verified instantly.
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
    background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
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

  depositBadge: {
    position: 'absolute',
    right: '12px',
    background: '#059669',
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
    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
    border: '1px solid #0284c7',
    borderRadius: '12px',
    padding: '20px',
  },

  summaryTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#0c4a6e',
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
    color: '#059669',
  },

  freeText: {
    fontWeight: '600',
    color: '#6b7280',
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
    color: '#0c4a6e',
  },

  totalAmount: {
    fontSize: '1.3rem',
    fontFamily: 'monospace',
    color: '#059669',
  },

  // Submit Button
  submitButton: {
    width: '100%',
    padding: '18px 0',
    fontSize: '18px',
    fontWeight: '700',
    color: 'white',
    background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
    border: 'none',
    borderRadius: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    boxShadow: '0 10px 30px rgba(5, 150, 105, 0.3)',
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
    color: '#059669',
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
    border-color: #059669 !important;
    box-shadow: 0 0 0 4px rgba(5, 150, 105, 0.1) !important;
    background: white !important;
  }
`;
document.head.appendChild(styleSheet);

export default DepositForm;