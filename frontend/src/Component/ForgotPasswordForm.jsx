import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import {Helmet} from 'react-helmet'
import logo from '../Component/logo/LOGO.png'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('/auth/forgot-password', { email });
      toast.success('Check your email for password reset instructions.');
      setEmail('');
    } catch (error) {
      console.error('Error:', error.response?.data);
      toast.error('Failed to send reset instructions. Please try again.');
    }
  };

  return (
    <>
     <Helmet>
      <link rel="shortcut icon" href={logo} type="image/x-icon" />
      <title>DreamArt | Forgot Password</title>
    </Helmet>
    <div className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4" style={{color:"green"}}>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        <button
          type="submit"
          className="mt-4 w-full px-4 py-2 rounded-md" style={{backgroundColor:"green", color:"white"}}
        >
          Send Reset Link
        </button>
      </form>
    </div>
    </>
  );
};

export default ForgotPassword;
