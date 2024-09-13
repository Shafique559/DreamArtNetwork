import React, { useState } from 'react';
import SignUp from './Signup';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post("http://localhost:4001/user/login", userInfo);
      if (response.data) {
        toast.success('Successfully Logged In!');
        localStorage.setItem("User", JSON.stringify(response.data));
        setErrorMessage(''); // Clear any previous error message
        reset(); // Reset the form
        document.getElementById('Login').close(); // Close the modal on success
        window.location.reload(); // Reload the page
      }
    } catch (err) {
      setErrorMessage(err.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <>
      <dialog id="Login" className="modal" onClose={() => reset()}>
        <div className="modal-box">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => {
              setErrorMessage(''); // Clear error message on close
              reset(); // Reset the form on close
              document.getElementById('Login').close();
            }}
            aria-label="Close modal"
          >
            ✕
          </button>
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm ml-6">
            <h2
              className="text-2xl font-bold mb-2 text-center"
              style={{ color: 'green' }}
            >
              Sign In
            </h2>
            {errorMessage && (
              <p className="text-red-500 text-sm text-center mb-4">
                {errorMessage}
              </p>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  {...register('email', { required: 'Email is required' })}
                />
                {errors.email && (
                  <span className="text-green-500 text-xs">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  {...register('password', { required: 'Password is required' })}
                />
                {errors.password && (
                  <span className="text-green-500 text-xs">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="btn w-full text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                style={{ backgroundColor: 'green' }}
              >
                Login
              </button>
            </form>
            <div className="mt-4 text-center">
              <a href="/forgot-password" className="text-green-500 hover:underline">
                Forgot your password?
              </a>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-700 text-sm">Don't have an account?</p>
              <a
                className="text-green-500 hover:underline cursor-pointer"
                onClick={() => document.getElementById('Signup').showModal()}
              >
                Sign Up
              </a>
              <SignUp />
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Login;
