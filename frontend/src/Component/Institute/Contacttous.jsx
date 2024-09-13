import React from 'react'
import Drawer from './Drawer';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet'
import logo from '../logo/LOGO.png'
const ContactTo = () => {
  return (
    <>
      <Helmet>
      <link rel="shortcut icon" href={logo} type="image/x-icon" />
      <title>DreamArt Network | Contact Us!</title>
    </Helmet>
      <div className="navbar bg-base-100" style={{ boxShadow: '0 2px 5px black' }}>
        <h1>
          <span style={{ color: 'green', fontSize: '25px', fontWeight: 'bold' }}>Pak</span>
          <span style={{ color: 'green', fontSize: '25px', marginLeft: '5px', fontWeight: 'bold' }}>Tech</span>
          <span style={{ color: 'green', fontSize: '25px', marginLeft: '5px', fontWeight: 'bold' }}>Institue</span>
        </h1>
       <div className="hidden md:block">
       <label className=" px-3 py-2 border rounded-md flex items-center gap-2 " style={{marginLeft:'7rem'}}>
  <input type="text" className="grow outline-none" placeholder="Search" style={{width:'50rem',}}/>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
       </div>
       <div className="btn1 md:flex gap-4">
        <Link to={'/'}>
        <button className="btn text-white px-4" style={{backgroundColor:"green", border:'none', marginLeft:'10px'}}>Back to Home</button>
        </Link>
              
            
          </div>
      </div>

      {/* Flex container for Drawer and Course */}
      <div className="content-container flex">
        {/* Drawer component */}
        <div className="drawer-section" style={{ marginRight: '2rem' }}>
          <Drawer />
        </div>

        {/* Course component */}
        <div className="course-section" >
        <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-3xl w-full p-8 bg-white border-4 border-green-600 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-6  text-green-700">Contact Us</h2>
        <p className="text-lg mb-6 text-gray-700 ">
          We are here to help! If you have any questions or need further information, feel free to reach out to us through the following channels:
        </p>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-green-700">Email:</h3>
            <p className="text-xl text-green-800">dream.art.network559@gmail.com</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-green-700">Telephone:</h3>
            <p className="text-xl text-green-800">
              +92-309-8387559, +92-303-8145045, +92-304-7347673
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-green-700">Address:</h3>
            <p className="text-xl text-green-800">
              DreamArt Iftikhar Academy Manawan Campus, G.T Road Lahore.
            </p>
          </div>
        </div>
        <p className="text-lg mt-8 text-gray-700 text-center">
          We look forward to assisting you!
        </p>
      </div>
    </div>
        </div>
      </div>
    </>
  )
}

export default ContactTo;