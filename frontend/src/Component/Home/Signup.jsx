import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAuth } from '../../context/AuthProvider'; // Import useAuth hook

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for the error message
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const [authUser, setAuthUser] = useAuth(); // Use the authUser from context

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
      repassword: data.repassword,
    };

    try {
      const response = await axios.post("/user/signup", userInfo);
      if (response.data) {
        setIsSubmitted(true);
        localStorage.setItem("User", JSON.stringify(response.data));
        setAuthUser(response.data); // Update authUser with new data
        reset(); // Reset the form
        document.getElementById('Signup').close(); // Close the modal on success
        window.location.reload(); // Reload the page
      }
    } catch (err) {
      setErrorMessage(err.response?.data?.message || err.message); // Set the error message
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    reset();
    setErrorMessage(""); // Reset the error message
  };

  const password = watch('password');

  return (
    <>
      <dialog id="Signup" className="modal">
        <div className="modal-box relative">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById('Signup').close()}
            aria-label="Close modal"
          >
            ✕
          </button>
          {isSubmitted ? (
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-2xl font-bold mb-6 text-center text-green-500">
                Congratulations!
              </h2>
              <p className="text-center text-gray-700 text-lg">
                Your account has been created successfully.
              </p>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-2xl font-bold mb-6 text-center text-green-500">
                Sign Up
              </h2>
              {errorMessage && (
                <p className="text-red-500 text-center mb-4 text-sm">
                  {errorMessage}
                </p>
              )}
              <form onSubmit={handleSubmit(onSubmit)} method="POST">
                <div className="mb-4">
                  <label
                    htmlFor="fullname"
                    className="block text-gray-700 text-sm font-semibold mb-2 text-left"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    {...register('fullname', { required: 'Full Name is required' })}
                  />
                  {errors.fullname && (
                    <span className="text-red-500 text-xs block text-left">
                      {errors.fullname.message}
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-semibold mb-2 text-left"
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
                    <span className="text-red-500 text-xs block text-left">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-semibold mb-2 text-left"
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
                    <span className="text-red-500 text-xs block text-left">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="repassword"
                    className="block text-gray-700 text-sm font-semibold mb-2 text-left"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="repassword"
                    name="repassword"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    {...register('repassword', {
                      required: 'Confirm Password is required',
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                  />
                  {errors.repassword && (
                    <span className="text-red-500 text-xs block text-left">
                      {errors.repassword.message || 'This field is required'}
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn w-full text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  style={{ backgroundColor: 'green' }}
                >
                  Sign Up
                </button>
              </form>
              <div className="mt-4 text-center">
                <p className="text-gray-700 text-sm">Already have an account?</p>
                <a
                  className="text-green-500 hover:underline cursor-pointer"
                  onClick={() => document.getElementById('Login').showModal()}
                >
                  Login
                </a>
              </div>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
};

export default SignUp;
