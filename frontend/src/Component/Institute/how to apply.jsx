import React from 'react'
import Drawer from './Drawer';
import Course from './course';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet'
import logo from '../logo/LOGO.png'
const HowApply = () => {
  return (
    <>
   <Helmet>
      <link rel="shortcut icon" href={logo} type="image/x-icon" />
      <title>DreamArt Network | How to apply?</title>
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
        <div className="course-section" style={{marginTop:'2rem', marginLeft:'1rem', textAlign:'justify'}}>
        <div className="max-w-2xl mx-auto ">
      <h2 className="text-2xl font-bold mb-6" style={{color:'green'}}>How to Apply?</h2>
      <p className="text-lg mb-4" style={{color:'green', fontWeight:'bold'}}>1. Step-by-Step Guide:</p>
      <p className="text-lg mb-4">
        To apply for any of our courses, simply follow the steps below:
      </p>
      <p className="text-lg mb-4" style={{color:'green', fontWeight:'bold'}}>2. Course Page:</p>
      <ol className="list-decimal list-inside mb-4 space-y-2">
        <li>
          Visit our Courses page and browse through the available courses.
        </li>
        <li>
          When you find a course you're interested in, click the <strong> <a href="/Now" style={{color:'green', textDecoration:'underline'}}>Apply Now</a></strong> button on the course card.
        </li>
        <p className="text-lg mb-4" style={{color:'green', fontWeight:'bold'}}>3. Fill Out the Application Form:</p>
        <li>
          An admission form will appear with two steps:
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li >
              <strong style={{color:'green'}}> Step 1:</strong> Enter your personal information, including your name, father's name, CNIC/B-form, date of birth, gender, phone number, WhatsApp number, city, country, and address.
            </li>
            <li>
              <strong style={{color:'green'}}> Step 2:</strong> Choose your payment method (JazzCash, Easypaisa, or Bank Transfer) and provide the necessary transaction details. Course fee details are as follows:
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>Three months:  <strong style={{color:'green'}}>Rs. 3000/-</strong></li>
                <li>Twelve months: <strong style={{color:'green'}}>Rs. 10,000/-</strong></li>
              </ul>
            </li>
          </ul>
        </li>
        <p className="text-lg mb-4" style={{color:'green', fontWeight:'bold'}}>4. Submit Your Application:</p>
        <li>
          Once you've completed the form and agreed to the terms and conditions, submit your application.
        </li>
        <li>
          You will receive a confirmation and further instructions via email or WhatsApp.
        </li>
      </ol>
      <p className="text-lg">
        If you have any questions or need assistance, feel free to contact our support team.
      </p>
    </div>
        </div>
      </div>
    </>
  )
}

export default HowApply;