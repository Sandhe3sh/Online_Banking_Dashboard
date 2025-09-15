// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { loginUser } from '../utils/api';

// const styles = {
//   container: {
//     maxWidth: '400px',
//     margin: '50px auto',
//     padding: '30px 25px',
//     background: '#fff',
//     boxShadow: '0 0 15px rgba(0,0,0,0.1)',
//     borderRadius: '8px',
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//   },
//   heading: {
//     textAlign: 'center',
//     marginBottom: '20px',
//     color: '#333',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   input: {
//     padding: '12px 15px',
//     marginBottom: '15px',
//     border: '1px solid #ccc',
//     borderRadius: '6px',
//     fontSize: '1rem',
//     outline: 'none',
//     transition: 'border-color 0.3s ease',
//   },
//   inputFocus: {
//     borderColor: '#007BFF',
//   },
//   button: {
//     padding: '12px 15px',
//     backgroundColor: '#007BFF',
//     border: 'none',
//     borderRadius: '6px',
//     color: 'white',
//     fontSize: '1rem',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//   },
//   buttonHover: {
//     backgroundColor: '#0056b3',
//   },
//   message: {
//     textAlign: 'center',
//     marginTop: '10px',
//     fontWeight: '600',
//   },
//   messageSuccess: {
//     color: '#28a745',
//   },
//   messageError: {
//     color: '#d9534f',
//   },
//   switchText: {
//     textAlign: 'center',
//     color: '#555',
//     marginTop: '15px',
//     fontSize: '0.9rem',
//   },
//   switchButton: {
//     background: 'none',
//     border: 'none',
//     color: '#007BFF',
//     cursor: 'pointer',
//     textDecoration: 'underline',
//     fontSize: '0.9rem',
//     padding: 0,
//   },
// };

// const LoginForm = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ username: '', password: '' });
//   const [message, setMessage] = useState('');
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [inputFocus, setInputFocus] = useState({ username: false, password: false });
//   const [buttonHover, setButtonHover] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     try {
//       const response = await loginUser(form);
//       const user = response.data;

//       if (!user || !user.role) {
//         setMessage('Login failed: No role assigned');
//         setIsSuccess(false);
//         return;
//       }

//       // Normalize role to uppercase to avoid case issues
//       const role = user.role.toUpperCase();

//       console.log('User logged in:', user);  // Debug role and data

//       setMessage(`Welcome ${user.username}, Role: ${role}`);
//       setIsSuccess(true);
//       localStorage.setItem('user', JSON.stringify(user));

//       // Navigate based on normalized role
//       if (role === 'ADMIN') {
//         navigate('/admin-dashboard');
//       } else if (role === 'USER') {
//         navigate('/user-dashboard');
//       } else {
//         setMessage('Login succeeded, but role is unknown');
//       }
//     } catch (error) {
//       const errMsg = error?.response?.data?.message || 'Login failed: Invalid credentials';
//       setMessage(errMsg);
//       setIsSuccess(false);
//     }
//   };

//   const handleFocus = (field) => {
//     setInputFocus({ ...inputFocus, [field]: true });
//   };

//   const handleBlur = (field) => {
//     setInputFocus({ ...inputFocus, [field]: false });
//   };

//   return (
//     <div style={styles.container} role="main" aria-labelledby="login-heading">
//       <h2 id="login-heading" style={styles.heading}>Login</h2>
//       <form style={styles.form} onSubmit={handleLogin} noValidate>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           onChange={handleChange}
//           required
//           autoComplete="username"
//           aria-label="Username"
//           onFocus={() => handleFocus('username')}
//           onBlur={() => handleBlur('username')}
//           style={{
//             ...styles.input,
//             ...(inputFocus.username ? styles.inputFocus : {}),
//           }}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//           required
//           autoComplete="current-password"
//           aria-label="Password"
//           onFocus={() => handleFocus('password')}
//           onBlur={() => handleBlur('password')}
//           style={{
//             ...styles.input,
//             ...(inputFocus.password ? styles.inputFocus : {}),
//           }}
//         />
//         <button
//           type="submit"
//           style={{
//             ...styles.button,
//             ...(buttonHover ? styles.buttonHover : {}),
//           }}
//           onMouseEnter={() => setButtonHover(true)}
//           onMouseLeave={() => setButtonHover(false)}
//           aria-label="Login"
//         >
//           Login
//         </button>
//       </form>

//       {message && (
//         <p
//           role="alert"
//           style={{
//             ...styles.message,
//             ...(isSuccess ? styles.messageSuccess : styles.messageError),
//           }}
//         >
//           {message}
//         </p>
//       )}

//       <p style={styles.switchText}>
//         Don't have an account?{' '}
//         <button
//           style={styles.switchButton}
//           onClick={() => navigate('/register')}
//           aria-label="Navigate to Register"
//           type="button"
//         >
//           Register here
//         </button>
//       </p>
//     </div>
//   );
// };

// export default LoginForm;
