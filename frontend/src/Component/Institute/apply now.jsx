import React from 'react'
import Drawer from './Drawer';
import Course from './course';
import { Link } from 'react-router-dom';
const Now = () => {
  return (
    <>

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
        <h1 style={{paddingTop:'1rem', color:'green', fontWeight:'bold', fontSize:'30px',position:'absolute', left:'15rem'}}>Courses</h1>
        <div className="course-section" style={{marginTop:'4rem', marginLeft:'1.5rem'}}>
          <Course />
        </div>
      </div>
    </>
  )
}

export default Now