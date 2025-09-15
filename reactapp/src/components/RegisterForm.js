// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { registerUser } from '../utils/api';

// const styles = {
//   container: {
//     maxWidth: '400px',
//     margin: '50px auto',
//     padding: 25,
//     background: '#fff',
//     boxShadow: '0 0 15px rgba(0,0,0,0.1)',
//     borderRadius: 8,
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//   },
//   heading: {
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#333',
//   },
//   label: {
//     display: 'block',
//     marginBottom: 5,
//     fontWeight: '600',
//     color: '#555',
//   },
//   input: {
//     display: 'block',
//     width: '100%',
//     marginBottom: 15,
//     padding: 10,
//     borderRadius: 6,
//     border: '1px solid #ccc',
//     fontSize: '1rem',
//     outline: 'none',
//     transition: 'border-color 0.3s ease',
//   },
//   inputFocus: {
//     borderColor: '#28a745',
//   },
//   select: {
//     display: 'block',
//     width: '100%',
//     marginBottom: 15,
//     padding: 10,
//     borderRadius: 6,
//     border: '1px solid #ccc',
//     fontSize: '1rem',
//   },
//   button: {
//     padding: '10px 15px',
//     backgroundColor: '#28a745',
//     border: 'none',
//     color: 'white',
//     cursor: 'pointer',
//     width: '100%',
//     borderRadius: 5,
//     fontSize: '1rem',
//     transition: 'background-color 0.3s ease',
//   },
//   buttonHover: {
//     backgroundColor: '#218838',
//   },
//   message: {
//     marginTop: 10,
//     fontWeight: 600,
//     textAlign: 'center',
//   },
//   switchText: {
//     marginTop: 15,
//     textAlign: 'center',
//     color: '#555',
//     fontSize: '0.9rem',
//   },
//   switchButton: {
//     background: 'none',
//     border: 'none',
//     color: '#007BFF',
//     cursor: 'pointer',
//     textDecoration: 'underline',
//     padding: 0,
//     fontSize: '1em',
//   },
// };

// const RegisterForm = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     username: '',
//     password: '',
//     confirmPassword: '',
//     email: '',
//     role: '',
//   });
//   const [message, setMessage] = useState('');
//   const [inputFocus, setInputFocus] = useState({});
//   const [buttonHover, setButtonHover] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleFocus = (field) => {
//     setInputFocus({ ...inputFocus, [field]: true });
//   };

//   const handleBlur = (field) => {
//     setInputFocus({ ...inputFocus, [field]: false });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     if (form.password !== form.confirmPassword) {
//       setMessage("Passwords don't match");
//       return;
//     }

//     const { username, password, email, role } = form;
//     const payload = { username, password, email, role };

//     try {
//       console.log('Register payload:', payload); // Debug
//       await registerUser(payload);
//       setMessage('User registered successfully. Redirecting to login...');
//       setTimeout(() => navigate('/'), 2000);
//     } catch (error) {
//       console.error('Registration error:', error);
//       if (error.response) {
//         // Server responded with a status outside 2xx
//         setMessage(error.response.data.message || 'Registration failed. Please try again.');
//       } else if (error.request) {
//         // Request made but no response received
//         setMessage('No response from server. Please check your connection.');
//       } else {
//         // Something else happened
//         setMessage(error.message || 'Registration failed.');
//       }
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Register New User</h2>
//       <form onSubmit={handleRegister} noValidate>
//         <label style={styles.label} htmlFor="username">Username*</label>
//         <input
//           id="username"
//           type="text"
//           name="username"
//           placeholder="Enter username"
//           value={form.username}
//           onChange={handleChange}
//           required
//           onFocus={() => handleFocus('username')}
//           onBlur={() => handleBlur('username')}
//           style={{
//             ...styles.input,
//             ...(inputFocus.username ? styles.inputFocus : {}),
//           }}
//           autoComplete="username"
//           aria-required="true"
//         />

//         <label style={styles.label} htmlFor="password">Password*</label>
//         <input
//           id="password"
//           type="password"
//           name="password"
//           placeholder="Enter password"
//           value={form.password}
//           onChange={handleChange}
//           required
//           onFocus={() => handleFocus('password')}
//           onBlur={() => handleBlur('password')}
//           style={{
//             ...styles.input,
//             ...(inputFocus.password ? styles.inputFocus : {}),
//           }}
//           autoComplete="new-password"
//           aria-required="true"
//         />

//         <label style={styles.label} htmlFor="confirmPassword">Confirm Password*</label>
//         <input
//           id="confirmPassword"
//           type="password"
//           name="confirmPassword"
//           placeholder="Re-enter password"
//           value={form.confirmPassword}
//           onChange={handleChange}
//           required
//           onFocus={() => handleFocus('confirmPassword')}
//           onBlur={() => handleBlur('confirmPassword')}
//           style={{
//             ...styles.input,
//             ...(inputFocus.confirmPassword ? styles.inputFocus : {}),
//           }}
//           autoComplete="new-password"
//           aria-required="true"
//         />

//         <label style={styles.label} htmlFor="email">Email*</label>
//         <input
//           id="email"
//           type="email"
//           name="email"
//           placeholder="Enter email"
//           value={form.email}
//           onChange={handleChange}
//           required
//           onFocus={() => handleFocus('email')}
//           onBlur={() => handleBlur('email')}
//           style={{
//             ...styles.input,
//             ...(inputFocus.email ? styles.inputFocus : {}),
//           }}
//           autoComplete="email"
//           aria-required="true"
//         />

//         <label style={styles.label} htmlFor="role">Role*</label>
//         <select
//           id="role"
//           name="role"
//           value={form.role}
//           onChange={handleChange}
//           required
//           style={styles.select}
//           aria-required="true"
//         >
//           <option value="" disabled>Select role</option>
//           <option value="USER">USER</option>
//           <option value="ADMIN">ADMIN</option>
//         </select>

//         <button
//           type="submit"
//           style={{
//             ...styles.button,
//             ...(buttonHover ? { backgroundColor: '#218838' } : {}),
//           }}
//           onMouseEnter={() => setButtonHover(true)}
//           onMouseLeave={() => setButtonHover(false)}
//           aria-label="Register"
//         >
//           Register
//         </button>
//       </form>

//       {message && (
//         <p
//           role="alert"
//           style={{
//             ...styles.message,
//             color: message.toLowerCase().includes('success') ? 'green' : 'red',
//           }}
//         >
//           {message}
//         </p>
//       )}

//       <p style={styles.switchText}>
//         Already have an account?{' '}
//         <button
//           onClick={() => navigate('/')}
//           style={styles.switchButton}
//           aria-label="Navigate to Login"
//           type="button"
//         >
//           Login here
//         </button>
//       </p>
//     </div>
//   );
// };

// export default RegisterForm;
