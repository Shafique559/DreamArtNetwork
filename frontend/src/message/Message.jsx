import React from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet'
import logo from '../Component/logo/LOGO.png'

const PleaseSignIn = () => {
  return (
    <>
     <Helmet>
      <link rel="shortcut icon" href={logo} type="image/x-icon" />
      <title>DreamArt | Create your account</title>
    </Helmet>
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="mb-4">
        <img 
          src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif" 
          alt="Create Account or Sign In" 
          className="w-64 h-64 object-cover"
        />
      </div>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
        Please Create Your Account or Sign In
      </h2>
      <Link to={'/'}>
        <button className="btn text-white px-4" style={{backgroundColor:"green", border:'none', marginLeft:'10px'}}>Back to Home</button>
        </Link>
    </div>
    </>
  );
};

export default PleaseSignIn;
