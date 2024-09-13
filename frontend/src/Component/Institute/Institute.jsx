import React from 'react';
import Drawer from './Drawer';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet'
import logo from '../logo/LOGO.png'
const Institute = () => {
  return (
    <>
     <Helmet>
      <link rel="shortcut icon" href={logo} type="image/x-icon" />
      <title>DreamArt Network | Institute</title>
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
        <div className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fadeInOut" style={{color:'green'}}>
          Welcome to Pak Tech Institute
        </h1>
        <p className="text-lg md:text-xl text-gray-600 animate-fadeInOut">
          Empowering the Next Generation of Tech Leaders
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-12">
        <h2 className="text-3xl md:text-2xl font-semibold text-gray-800 mb-6 ">
          Why Choose Us?
        </h2>
        <ul className="space-y-4 text-gray-700">
          <li>
            <strong className="font-bold">Expert Faculty:</strong> <br /> Learn from industry professionals and experienced educators who bring real-world insights to the classroom. Our instructors are passionate about helping you succeed and will guide you every step of the way.
          </li>
          <li>
            <strong className="font-bold">Cutting-Edge Curriculum:</strong><br /> Our courses are crafted to meet the latest industry standards, ensuring that you gain relevant skills that are in demand. From web development to data science, our curriculum is regularly updated to keep pace with technological advancements.
          </li>
          <li>
            <strong className="font-bold">Hands-On Learning:</strong><br /> We believe in learning by doing. Our institute provides ample opportunities for students to work on live projects, participate in internships, and engage in workshops that mirror the challenges of the tech industry.
          </li>
          <li>
            <strong className="font-bold">State-of-the-Art Facilities:</strong><br /> Study in a modern, well-equipped environment that fosters innovation and creativity. Our labs and classrooms are designed to provide the best possible learning experience.
          </li>
          <li>
            <strong className="font-bold">Career Support:</strong><br /> We don't just teach; we prepare you for a successful career. Our dedicated career services team provides personalized guidance, from resume building to interview preparation, ensuring you're ready to step into the professional world with confidence.
          </li>
          <li>
            <strong className="font-bold">Community and Networking:</strong><br /> Join a vibrant community of like-minded individuals who share your passion for technology. Participate in events, hackathons, and seminars that offer valuable networking opportunities.
          </li>
        </ul>
      </section>

      {/* Our Programs Section */}
      <section className="mb-12">
        <h2 className="text-3xl md:text-2xl font-semibold text-gray-800 mb-6 text-center animate-zoomInOut" style={{color:'green'}}>
          Our Programs
        </h2>
        <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          <li className='program' style={{backgroundColor:'green', padding:'8px', color:'white', borderRadius:'20px', textAlign:'center'}}>
            <strong className="font-bold">Taleem-Ul-Quran:</strong><br /> Deepen your understanding of the Islam with our specialized course
          </li>
          <li className='program' style={{backgroundColor:'green', padding:'8px', color:'white', borderRadius:'20px', textAlign:'center'}}>
            <strong className="font-bold">Foundation:</strong><br /> Build a strong educational foundation with our comprehensive programs.
          </li>
          <li className='program' style={{backgroundColor:'green', padding:'8px', color:'white', borderRadius:'20px', textAlign:'center'}}>
            <strong className="font-bold">Graphic Design:</strong><br /> Unleash your creativity with advanced design techniques.
          </li>
          <li className='program' style={{backgroundColor:'green', padding:'8px', color:'white', borderRadius:'20px', textAlign:'center'}}>
            <strong className="font-bold">Lead Generation:</strong><br /> Learn effective strategies for generating quality leads.
          </li>
          <li className='program' style={{backgroundColor:'green', padding:'8px', color:'white', borderRadius:'20px', textAlign:'center'}}>
            <strong className="font-bold">Web Development:</strong><br /> Master the art of building responsive, dynamic websites.
          </li>
          <li className='program' style={{backgroundColor:'green', padding:'8px', color:'white', borderRadius:'20px', textAlign:'center'}}>
            <strong className="font-bold">Basic C/C++:</strong><br /> Start your coding journey with fundamental programming skills.
          </li>
          <li className='program' style={{backgroundColor:'green', padding:'8px', color:'white', borderRadius:'20px', textAlign:'center'}}>
            <strong className="font-bold">Spoken English:</strong><br /> Improve your English communication skills for personal and professional growth.
          </li>
          <li className='program' style={{backgroundColor:'green', padding:'8px', color:'white', borderRadius:'20px', textAlign:'center'}}>
            <strong className="font-bold">Freelancing:</strong><br /> Learn how to build a successful freelancing career.
          </li>
          <li className='program' style={{backgroundColor:'green', padding:'8px', color:'white', borderRadius:'20px', textAlign:'center'}}>
            <strong className="font-bold">Stenography:</strong><br />Acquire the skills needed for efficient shorthand writing and transcription.
          </li>
        </ul>
      </section>

      {/* Enrollment Section */}
      <section >
        <h2 className="text-2xl md:text-2xl font-semibold text-gray-800 mb-3 animate-fadeInOut" style={{backgroundColor:'green', color:'white'}}>
          Enroll Today!
        </h2>
        <p className="text-lg md:text-lg text-gray-600 mb-4 " style={{fontSize:'20px' }}>
          Don't miss the opportunity to be a part of the Pak Tech Institute community. Whether you're looking to start a new career or upgrade your skills, we have a program that's right for you. Apply now and take the first step towards a brighter future.
        </p>
        <Link to={'/Now'}>
        <button className="mt-2 px-6 py-3 bg-blue-600 text-white text-lg font-bold rounded-md hover:bg-blue-700 transition duration-300 animate-bounce" style={{backgroundColor:'green'}}>
          Apply Now
        </button>
        </Link>
      </section>
    </div>
      </div>
    </>
  );
};

export default Institute;
