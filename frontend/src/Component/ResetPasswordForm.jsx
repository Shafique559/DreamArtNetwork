// ResetPasswordPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Helmet} from 'react-helmet'
import logo from '../Component/logo/LOGO.png'

const ResetPasswordPage = () => {
  const { token } = useParams(); // Extract token from URL
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('/auth/reset-password', { token, password });
      setMessage(response.data.message || 'Password reset successfully');
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error resetting password';
      setMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
     <Helmet>
      <link rel="shortcut icon" href={logo} type="image/x-icon" />
      <title>DreamArt | Rest Password</title>
    </Helmet>
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2 style={{color:"green"}}>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <button type="submit" disabled={loading} style={{ width: '100%', padding: '10px', borderRadius: '4px', backgroundColor: 'green', color: '#fff', border: 'none' }}>
          {loading ? 'Resetting...' : 'Reset Password'}
        </button>
      </form>
      {message && <p style={{ marginTop: '15px', color: loading ? '#007bff' : 'red' }}>{message}</p>}
    </div>
    </>
  );
};

export default ResetPasswordPage;
