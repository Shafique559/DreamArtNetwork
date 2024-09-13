import React from 'react'
import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet'
import logo from '../logo/LOGO.png'
const Ecommerce = () => {
  return (
   <>
    <Helmet>
      <link rel="shortcut icon" href={logo} type="image/x-icon" />
      <title>DreamArt | E-Commerce</title>
    </Helmet>
   <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="mb-4">
        <img 
          src="https://www.rapidatm.com.au/wp-content/uploads/2017/05/maintenance_main_image_3.gif" 
          alt="Create Account or Sign In" 
          className="w-64 h-64 object-cover"
        />
      </div>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
       This Page is Under Maintenance
      </h2>
      <Link to={'/'}>
        <button className="btn text-white px-4" style={{backgroundColor:"green", border:'none', marginLeft:'10px'}}>Back to Home</button>
        </Link>
    </div>
    </>
  )
}

export default Ecommerce