import React from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet'
import logo from '../Component/logo/LOGO.png'

const Success = () => {
  return (
    <>
     <Helmet>
      <link rel="shortcut icon" href={logo} type="image/x-icon" />
      <title>DreamArt | Admission Successfully completed</title>
    </Helmet>
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="mb-4">
        <img 
          src="https://techctice.com/wp-content/uploads/2020/10/Checkmark.gif" 
          alt="not Found" 
          className="w-64 h-64 object-cover"
        />
      </div>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
        Admission Successfully Completed
      </h2>
      <Link to={'/'}>
        <button className="btn text-white px-4" style={{backgroundColor:"green", border:'none', marginLeft:'10px'}}>Back to Home</button>
        </Link>
    </div>
    </>
  );
};

export default Success;
