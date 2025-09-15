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
 
// import React, { useState, useEffect } from 'react';
// import { transferMoney } from '../utils/api'; // adjust path if needed

// function TransferForm({ accountId }) {
//   const [fromAccountId, setFromAccountId] = useState(accountId || '');
//   const [date, setDate] = useState('');
//   const [recipientAccount, setRecipientAccount] = useState('');
//   const [amount, setAmount] = useState('');
//   const [description, setDescription] = useState('');
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (accountId) {
//       setFromAccountId(accountId);
//     }
//   }, [accountId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');

//     if (!date || !recipientAccount || !amount || !fromAccountId) {
//       setMessage('Please fill in all required fields.');
//       return;
//     }

//     const amountValue = parseFloat(amount);
//     if (isNaN(amountValue) || amountValue <= 0) {
//       setMessage('Please enter a valid amount greater than 0.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const result = await transferMoney({
//         fromAccountId,
//         toAccountId: recipientAccount,
//         amount: amountValue,
//         description,
//       });

//       setMessage('Transfer successful!');
//       // Reset form except fromAccountId
//       setDate('');
//       setRecipientAccount('');
//       setAmount('');
//       setDescription('');
//     } catch (error) {
//       setMessage(`Transfer failed: ${error.message}`);
//     } finally {
//       setLoading(false);
//     }
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
//     backgroundColor: loading ? '#ccc' : '#007bff',
//     border: 'none',
//     borderRadius: '5px',
//     color: 'white',
//     cursor: loading ? 'not-allowed' : 'pointer',
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
//               readOnly={!!accountId} // prevent editing if provided from props
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

//         <button type="submit" style={buttonStyle} disabled={loading}>
//           {loading ? 'Transferring...' : 'Transfer'}
//         </button>
//       </form>
//       {message && <p style={{ fontWeight: '600', color: message.startsWith('Transfer failed') ? 'red' : 'green', maxWidth: '400px', margin: '10px auto' }}>{message}</p>}
//     </div>
//   );
// }

// export default TransferForm;


import React, { useState, useEffect } from 'react';
import { transferMoney } from '../utils/api';

function TransferForm({ accountId }) {
  const [formData, setFormData] = useState({
    fromAccountId: accountId || '',
    date: new Date().toISOString().split('T')[0], // default to today
    recipientAccount: '',
    amount: '',
    description: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (accountId) {
      setFormData(prev => ({ ...prev, fromAccountId: accountId }));
    }
  }, [accountId]);

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

    if (!formData.date || !formData.recipientAccount || !formData.amount || !formData.fromAccountId) {
      setMessage('Please fill in all required fields.');
      return;
    }

    const amountValue = parseFloat(formData.amount);
    if (isNaN(amountValue) || amountValue <= 0) {
      setMessage('Please enter a valid amount greater than 0.');
      return;
    }

    if (formData.fromAccountId === formData.recipientAccount) {
      setMessage('Cannot transfer to the same account. Please select a different recipient account.');
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await transferMoney({
        fromAccountId: formData.fromAccountId,
        toAccountId: formData.recipientAccount,
        amount: amountValue,
        description: formData.description,
      });

      setMessage('Transfer successful!');
      
      // Reset form after successful submission except fromAccountId
      setTimeout(() => {
        setFormData({
          ...formData,
          date: new Date().toISOString().split('T')[0],
          recipientAccount: '',
          amount: '',
          description: '',
        });
        setMessage('');
      }, 3000);

    } catch (error) {
      setMessage(`Transfer failed: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.headerIcon}>🔄</div>
        <h1 style={styles.title}>Transfer Money</h1>
        <p style={styles.subtitle}>Send funds securely between accounts</p>
      </div>

      {/* Success/Error Messages */}
      {message && (
        <div style={message.startsWith('Transfer successful') ? styles.successAlert : styles.errorAlert}>
          <span style={styles.alertIcon}>
            {message.startsWith('Transfer successful') ? '✅' : '⚠️'}
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
                value="Transfer" 
                readOnly 
                style={styles.readOnlyInput}
              />
              <div style={styles.transferBadge}>TRANSFER</div>
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

          {/* From Account */}
          <div style={styles.formGroup}>
            <label style={styles.label}>
              <span style={styles.labelIcon}>🏦</span>
              From Account ID *
            </label>
            <input
              type="text"
              name="fromAccountId"
              placeholder="Source account ID"
              value={formData.fromAccountId}
              onChange={handleChange}
              required
              readOnly={!!accountId}
              style={{
                ...styles.input,
                ...(accountId ? styles.readOnlyField : {})
              }}
            />
            <div style={styles.fieldNote}>
              {accountId ? 'Pre-selected account' : 'Account to transfer from'}
            </div>
          </div>

          {/* Recipient Account */}
          <div style={styles.formGroup}>
            <label style={styles.label}>
              <span style={styles.labelIcon}>🎯</span>
              Recipient Account ID *
            </label>
            <input
              type="text"
              name="recipientAccount"
              placeholder="Enter recipient's account ID"
              value={formData.recipientAccount}
              onChange={handleChange}
              required
              style={styles.input}
            />
            <div style={styles.fieldNote}>
              Destination account for the transfer
            </div>
          </div>

          {/* Amount */}
          <div style={styles.formGroup}>
            <label style={styles.label}>
              <span style={styles.labelIcon}>💸</span>
              Transfer Amount *
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
              Minimum transfer amount: ₹1.00
            </div>
          </div>

          {/* Description */}
          <div style={styles.formGroup}>
            <label style={styles.label}>
              <span style={styles.labelIcon}>📝</span>
              Description (Optional)
            </label>
            <textarea
              name="description"
              placeholder="e.g., Payment for services, Family support, Loan repayment"
              value={formData.description}
              onChange={handleChange}
              style={styles.textarea}
              maxLength="200"
              rows="3"
            />
            <div style={styles.fieldNote}>
              Brief description of the transfer purpose
            </div>
          </div>

          {/* Transaction Summary */}
          {formData.amount && formData.fromAccountId && formData.recipientAccount && (
            <div style={styles.summarySection}>
              <div style={styles.summaryBox}>
                <h3 style={styles.summaryTitle}>Transfer Summary</h3>
                <div style={styles.transferFlow}>
                  <div style={styles.accountBox}>
                    <div style={styles.accountLabel}>From</div>
                    <div style={styles.accountId}>{formData.fromAccountId}</div>
                  </div>
                  <div style={styles.transferArrow}>→</div>
                  <div style={styles.accountBox}>
                    <div style={styles.accountLabel}>To</div>
                    <div style={styles.accountId}>{formData.recipientAccount}</div>
                  </div>
                </div>
                <div style={styles.summaryItem}>
                  <span>Transfer Amount:</span>
                  <span style={styles.summaryAmount}>{formatCurrency(parseFloat(formData.amount))}</span>
                </div>
                <div style={styles.summaryItem}>
                  <span>Transaction Fee:</span>
                  <span style={styles.freeText}>₹0.00 (Free)</span>
                </div>
                <div style={styles.summaryDivider}></div>
                <div style={styles.summaryTotal}>
                  <span>Total Debit:</span>
                  <span style={styles.totalAmount}>{formatCurrency(parseFloat(formData.amount))}</span>
                </div>
              </div>
            </div>
          )}

          {/* Important Notice */}
          <div style={styles.noticeSection}>
            <div style={styles.noticeBox}>
              <h3 style={styles.noticeTitle}>⚠️ Transfer Guidelines</h3>
              <ul style={styles.noticeList}>
                <li>Verify recipient account details before confirming</li>
                <li>Transfers are processed instantly</li>
                <li>Cannot transfer to the same account</li>
                <li>Ensure sufficient balance in source account</li>
                <li>Contact support for any transfer issues</li>
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
                Processing Transfer...
              </>
            ) : (
              <>
                <span style={styles.buttonIcon}>🔄</span>
                Transfer Money
              </>
            )}
          </button>
        </form>
      </div>

      {/* Security Notice */}
      <div style={styles.securityNotice}>
        <div style={styles.securityIcon}>🔒</div>
        <div>
          <div style={styles.securityTitle}>Secure Transfer</div>
          <div style={styles.securityText}>
            All transfers are encrypted and processed through secure banking channels with real-time verification.
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
    background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)',
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

  readOnlyField: {
    background: '#f3f4f6',
    color: '#6b7280',
    cursor: 'not-allowed',
  },

  transferBadge: {
    position: 'absolute',
    right: '12px',
    background: '#7c3aed',
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

  // Textarea
  textarea: {
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
    resize: 'vertical',
    minHeight: '80px',
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
    background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
    border: '1px solid #7c3aed',
    borderRadius: '12px',
    padding: '20px',
  },

  summaryTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#5b21b6',
    margin: '0 0 16px 0',
  },

  transferFlow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '16px',
    padding: '16px',
    background: 'white',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
  },

  accountBox: {
    textAlign: 'center',
    flex: 1,
  },

  accountLabel: {
    fontSize: '0.8rem',
    color: '#6b7280',
    fontWeight: '600',
    marginBottom: '4px',
    textTransform: 'uppercase',
  },

  accountId: {
    fontSize: '1rem',
    fontWeight: '700',
    color: '#374151',
    fontFamily: 'monospace',
  },

  transferArrow: {
    fontSize: '1.5rem',
    color: '#7c3aed',
    fontWeight: '700',
    margin: '0 16px',
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
    color: '#7c3aed',
  },

  freeText: {
    fontWeight: '600',
    color: '#059669',
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
    color: '#5b21b6',
  },

  totalAmount: {
    fontSize: '1.3rem',
    fontFamily: 'monospace',
    color: '#7c3aed',
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
    background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)',
    border: 'none',
    borderRadius: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    boxShadow: '0 10px 30px rgba(124, 58, 237, 0.3)',
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
    color: '#7c3aed',
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
  
  input:focus, select:focus, textarea:focus {
    border-color: #7c3aed !important;
    box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.1) !important;
    background: white !important;
  }
`;
document.head.appendChild(styleSheet);

export default TransferForm;