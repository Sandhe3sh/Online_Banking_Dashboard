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


// import React, { useState } from 'react';
// import { createAccount } from '../utils/api';

// function CreateAccountForm() {
//   const [formData, setFormData] = useState({
//     accountNumber: '',
//     accountHolderName: '',
//     balance: '',
//     accountType: 'Savings',
//     creationDate: new Date().toISOString().split('T')[0], // default to today
//     recipientAccount: '',
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
//     <form onSubmit={handleSubmit} style={styles.form}>
//       <div style={styles.formGroup}>
//         <label style={styles.label}>Account Number</label>
//         <input
//           name="accountNumber"
//           placeholder="Account Number"
//           value={formData.accountNumber}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//       </div>

//       <div style={styles.formGroup}>
//         <label style={styles.label}>Account Holder Name</label>
//         <input
//           name="accountHolderName"
//           placeholder="Account Holder Name"
//           value={formData.accountHolderName}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//       </div>

//       <div style={styles.formGroup}>
//         <label style={styles.label}>Balance</label>
//         <input
//           name="balance"
//           placeholder="Balance"
//           type="number"
//           min="0"
//           step="0.01"
//           value={formData.balance}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//       </div>

//       <div style={styles.formGroup}>
//         <label style={styles.label}>Account Type</label>
//         <select
//           name="accountType"
//           value={formData.accountType}
//           onChange={handleChange}
//           style={styles.select}
//         >
//           <option value="Savings">Savings</option>
//           <option value="Current">Current</option>
//         </select>
//       </div>

//       <div style={styles.formGroup}>
//         <label style={styles.label}>Creation Date</label>
//         <input
//           type="date"
//           name="creationDate"
//           value={formData.creationDate}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//       </div>

//       <div style={styles.formGroup}>
//         <label style={styles.label}>Recipient Account (optional)</label>
//         <input
//           name="recipientAccount"
//           placeholder="Recipient Account (optional)"
//           value={formData.recipientAccount}
//           onChange={handleChange}
//           style={styles.input}
//         />
//       </div>

//       <div style={styles.formGroup}>
//         <button type="submit" style={styles.button}>Create Account</button>
//       </div>
//     </form>
//   );
// }

// const styles = {
//   form: {
//     maxWidth: '400px',
//     margin: '20px auto',
//     padding: '20px',
//     backgroundColor: '#f3f4f6',
//     borderRadius: '8px',
//     fontFamily: 'Arial, sans-serif',
//     boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
//   },
//   formGroup: {
//     marginBottom: '16px',
//   },
//   label: {
//     display: 'block',
//     marginBottom: '6px',
//     fontWeight: '600',
//     color: '#374151',
//   },
//   input: {
//     width: '100%',
//     padding: '8px 10px',
//     fontSize: '16px',
//     borderRadius: '4px',
//     border: '1px solid #d1d5db',
//     outline: 'none',
//     boxSizing: 'border-box',
//   },
//   select: {
//     width: '100%',
//     padding: '8px 10px',
//     fontSize: '16px',
//     borderRadius: '4px',
//     border: '1px solid #d1d5db',
//     outline: 'none',
//     boxSizing: 'border-box',
//     backgroundColor: '#fff',
//   },
//   button: {
//     width: '100%',
//     padding: '10px 0',
//     fontSize: '16px',
//     fontWeight: '700',
//     color: '#fff',
//     backgroundColor: '#4f46e5',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//   },
// };

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    // Clear messages when user starts typing
    if (successMessage) setSuccessMessage('');
    if (errorMessage) setErrorMessage('');
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generateAccountNumber = () => {
    const randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    setFormData({
      ...formData,
      accountNumber: randomNumber.toString(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await createAccount({
        accountNumber: formData.accountNumber,
        accountHolderName: formData.accountHolderName,
        balance: parseFloat(formData.balance),
        accountType: formData.accountType,
        creationDate: formData.creationDate,
        recipientAccount: formData.recipientAccount,
      });

      setSuccessMessage(`Account Created Successfully! Account ID: ${response.data.accountId}`);

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          accountNumber: '',
          accountHolderName: '',
          balance: '',
          accountType: 'Savings',
          creationDate: new Date().toISOString().split('T')[0],
          recipientAccount: '',
        });
        setSuccessMessage('');
      }, 3000);

    } catch (error) {
      setErrorMessage('Failed to create account: ' + (error.response?.data?.message || error.message));
    } finally {
      setIsSubmitting(false);
    }
  };

  const getAccountTypeIcon = (type) => {
    switch(type) {
      case 'Savings': return '🏦';
      case 'Current': return '💳';
      case 'Business': return '🏢';
      default: return '💰';
    }
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.headerIcon}>🏛️</div>
        <h1 style={styles.title}>Create New Account</h1>
        <p style={styles.subtitle}>Open a new banking account with secure verification</p>
      </div>

      {/* Success/Error Messages */}
      {successMessage && (
        <div style={styles.successAlert}>
          <span style={styles.alertIcon}>✅</span>
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div style={styles.errorAlert}>
          <span style={styles.alertIcon}>⚠️</span>
          {errorMessage}
        </div>
      )}

      {/* Form Section */}
      <div style={styles.formCard}>
        <form onSubmit={handleSubmit}>
          {/* Account Number Field */}
          <div style={styles.formGroup}>
            <label style={styles.label}>
              <span style={styles.labelIcon}>🔢</span>
              Account Number *
            </label>
            <div style={styles.inputWrapper}>
              <input
                name="accountNumber"
                placeholder="Enter account number"
                value={formData.accountNumber}
                onChange={handleChange}
                required
                style={styles.input}
                maxLength="12"
              />
              <button
                type="button"
                onClick={generateAccountNumber}
                style={styles.generateButton}
                title="Generate random account number"
              >
                🎲
              </button>
            </div>
          </div>

          {/* Account Holder Name */}
          <div style={styles.formGroup}>
            <label style={styles.label}>
              <span style={styles.labelIcon}>👤</span>
              Account Holder Name *
            </label>
            <input
              name="accountHolderName"
              placeholder="Enter full legal name"
              value={formData.accountHolderName}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          {/* Balance */}
          <div style={styles.formGroup}>
            <label style={styles.label}>
              <span style={styles.labelIcon}>💰</span>
              Initial Balance *
            </label>
            <div style={styles.currencyInputWrapper}>
              <span style={styles.currencySymbol}>₹</span>
              <input
                name="balance"
                placeholder="0.00"
                type="number"
                min="0"
                step="0.01"
                value={formData.balance}
                onChange={handleChange}
                required
                style={styles.currencyInput}
              />
            </div>
          </div>

          {/* Account Type */}
          <div style={styles.formGroup}>
            <label style={styles.label}>
              <span style={styles.labelIcon}>{getAccountTypeIcon(formData.accountType)}</span>
              Account Type *
            </label>
            <div style={styles.selectWrapper}>
              <select
                name="accountType"
                value={formData.accountType}
                onChange={handleChange}
                style={styles.select}
              >
                <option value="Savings">💰 Savings Account</option>
                <option value="Current">💳 Current Account</option>
                <option value="Business">🏢 Business Account</option>
              </select>
            </div>
          </div>

          {/* Creation Date */}
          <div style={styles.formGroup}>
            <label style={styles.label}>
              <span style={styles.labelIcon}>📅</span>
              Account Creation Date *
            </label>
            <input
              type="date"
              name="creationDate"
              value={formData.creationDate}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          {/* Recipient Account (Optional) */}
          <div style={styles.formGroup}>
            <label style={styles.label}>
              <span style={styles.labelIcon}>🔗</span>
              Linked Account (Optional)
            </label>
            <input
              name="recipientAccount"
              placeholder="Enter linked account number"
              value={formData.recipientAccount}
              onChange={handleChange}
              style={styles.input}
            />
            <div style={styles.fieldNote}>
              Link to an existing account for easy transfers
            </div>
          </div>

          {/* Terms and Conditions */}
          <div style={styles.termsSection}>
            <div style={styles.termsBox}>
              <h3 style={styles.termsTitle}>Account Terms & Conditions</h3>
              <ul style={styles.termsList}>
                <li>Minimum balance requirements may apply</li>
                <li>Account subject to banking regulations</li>
                <li>Standard fees and charges apply</li>
                <li>Account holder must be 18+ years old</li>
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
                Creating Account...
              </>
            ) : (
              <>
                <span style={styles.buttonIcon}>🏦</span>
                Create Account
              </>
            )}
          </button>
        </form>
      </div>

      {/* Security Notice */}
      <div style={styles.securityNotice}>
        <div style={styles.securityIcon}>🔒</div>
        <div>
          <div style={styles.securityTitle}>Secure Account Creation</div>
          <div style={styles.securityText}>
            Your information is protected with bank-level encryption and security measures.
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
    background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
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

  inputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },

  generateButton: {
    position: 'absolute',
    right: '8px',
    background: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    fontSize: '1.2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
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

  // Select Styles
  selectWrapper: {
    position: 'relative',
  },

  select: {
    width: '100%',
    padding: '16px 20px',
    fontSize: '16px',
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    outline: 'none',
    boxSizing: 'border-box',
    background: '#f9fafb',
    cursor: 'pointer',
    fontWeight: '500',
    appearance: 'none',
  },

  fieldNote: {
    fontSize: '0.85rem',
    color: '#6b7280',
    marginTop: '6px',
    fontStyle: 'italic',
  },

  // Terms Section
  termsSection: {
    marginBottom: '32px',
  },

  termsBox: {
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '20px',
  },

  termsTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#374151',
    margin: '0 0 12px 0',
  },

  termsList: {
    margin: '0',
    paddingLeft: '20px',
    color: '#6b7280',
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
    border-color: #3b82f6 !important;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1) !important;
    background: white !important;
  }
`;
document.head.appendChild(styleSheet);

export default CreateAccountForm;