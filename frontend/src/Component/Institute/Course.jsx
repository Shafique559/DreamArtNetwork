import React from 'react'
import Foundation from './Addmission course/Foundation'
import Graphic from './Addmission course/Graphic design'
import Generation from './Addmission course/Lead Generation'
import Development from './Addmission course/Web Development'
import Basic from './Addmission course/Basic C++'
import Spoken from './Addmission course/Spoken English'
import Freelancing from './Addmission course/Freelancing'
import Taleem from './Addmission course/TaleemQuran'
import Stenographer from './Addmission course/Stenographic'
import {Helmet} from 'react-helmet'
import logo from '../logo/LOGO.png'

// import { Link } from 'react-router-dom'

const Course = () => {
  return (
    <>
     <Helmet>
      <link rel="shortcut icon" href={logo} type="image/x-icon" />
      <title>DreamArt Network | Courses Apply Now!</title>
    </Helmet>
<div className="main">
<div className="card bg-base-100 w-80 shadow-xl  ">
  <figure className="px-10 pt-10">
    <img
      src="https://www.shacktech.co.uk/wp-content/uploads/2021/04/Office-365-Price-Increase-Microsoft-Training-with-Annette-Dundee-Edinburgh-Fife.gif"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">FOUNDATION</h2>
    <p>3 Months</p>
    <p>Course Fee: Rs. 3000/-</p>
   
    <div className="card-actions" >
      <button className="btn btn-primary" style={{outline:'none'}} onClick={()=>document.getElementById('Foundation').showModal()} > Apply Now!</button>
      <Foundation/>
    </div>
    

  </div>
</div>
<div className="card bg-base-100 w-80 shadow-xl  ">
  <figure className="px-10 pt-10">
    <img
      src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/f246cb72816947.5c2bcd89d4d64.gif"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Graphic Designing</h2>
    <p>3 Months</p>
    <p>Course Fee: Rs. 3000/-</p>
    <div className="card-actions">
      <button className="btn btn-primary"style={{outline:'none'}} onClick={()=>document.getElementById('graphiDesign').showModal()}>Apply Now!</button>
      <Graphic/>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-80 shadow-xl  ">
  <figure className="px-10 pt-10">
    <img
      src="https://images.ctfassets.net/plii0v5gbc4s/7EgSUjjqJVtYbABHh9a0OD/7f1707ae394f44d5e333ae047fd09f2c/website-lead-generation.gif"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Lead Generation</h2>
    <p>3 Months</p>
    <p>Course Fee: Rs. 3000/-</p>
    <div className="card-actions">
      <button className="btn btn-primary" style={{outline:'none'}} onClick={()=>document.getElementById('Generation').showModal()}>Apply Now!</button>
      <Generation/>
    </div>
  </div>
</div>
</div>
{/* Second line of Courses */}
<div className="main" style={{marginTop:'30px'}}>
<div className="card bg-base-100 w-80 shadow-xl  ">
  <figure className="px-10 pt-10">
    <img
      src="https://irp.cdn-website.com/19b38bc1/dms3rep/multi/WebsiteApp+Explainer+portfolio+Real+Sales+Video.gif"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Web Development</h2>
    <p>3 Months</p>
    <p>Course Fee: Rs. 3000/-</p>
    <div className="card-actions">
      <button className="btn btn-primary" style={{outline:'none'}} onClick={()=>document.getElementById('Development').showModal()}>Apply Now!</button>
      <Development/>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-80 shadow-xl  ">
  <figure className="px-10 pt-10">
    <img
      src="https://media.licdn.com/dms/image/v2/C4E12AQGhFbRMPvf0tg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1636293868291?e=2147483647&v=beta&t=FCJhH87K7rV_e2SMvtEGjIexbUj-ro6bu0V34XXJoH0"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Basic C/C++</h2>
    <p>3 Months</p>
    <p>Course Fee: Rs. 3000/-</p>
    <div className="card-actions">
      <button className="btn btn-primary" style={{outline:'none'}} onClick={()=>document.getElementById('Basic').showModal()}>Apply Now!</button>
      <Basic/>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-80 shadow-xl  ">
  <figure className="px-10 pt-10">
    <img
      src="https://intellectualgyani.com/wp-content/uploads/2020/01/learn-english-step-by-step-for-Beginners-720x385.jpg"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Spoken English</h2>
    <p>3 Months</p>
    <p>Course Fee: Rs. 3000/-</p>
    <div className="card-actions">
      <button className="btn btn-primary" style={{outline:'none'}} onClick={()=>document.getElementById('English').showModal()} >Apply Now!</button>
      <Spoken/>
    </div>
  </div>
</div>
</div>

{/*3rd card section i am created */}
<div className="main" style={{marginTop:'30px'}}>
<div className="card bg-base-100 w-80 shadow-xl  ">
  <figure className="px-10 pt-10">
    <img
      src="https://business2business.co.in/img/article/1388/freelancer.gif"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Freelancing</h2>
    <p>3 Months</p>
    <p>Course Fee: Rs. 3000/-</p>
    <div className="card-actions">
      <button className="btn btn-primary" style={{outline:'none'}} onClick={()=>document.getElementById('Freelance').showModal()}>Apply Now!</button>
      <Freelancing/>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-80 shadow-xl  ">
  <figure className="px-10 pt-10">
    <img
      src="https://quranonlineacademy.org/wp-content/uploads/2022/07/Online-Quran-learning.png"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Taleem-Ul-Quran</h2>
    <p>12 Months</p>
    <p>Course Fee: Rs. 10,000/-</p>
    <div className="card-actions">
      <button className="btn btn-primary" style={{outline:'none'}} onClick={()=>document.getElementById('Quran').showModal()}>Apply Now!</button>
      <Taleem/>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-80 shadow-xl  ">
  <figure className="px-10 pt-10">
    <img
      src="https://t4.ftcdn.net/jpg/08/26/45/19/360_F_826451909_ykIbT60y6A1upjledhqObRIyWUT467ws.jpg"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Stenography</h2>
    <p>12 Months</p>
    <p>Course Fee: Rs. 10,000/-</p>
    <div className="card-actions">
      <button className="btn btn-primary" style={{outline:'none'}} onClick={()=>document.getElementById('Steno').showModal()}>Apply Now!</button>
      <Stenographer/>
    </div>
  </div>
</div>
</div>

<style jsx>{`
        .main{
        display:flex;
        gap: 30px;
        }
        .content-container {
          display: flex;
          flex-direction: row;
        }

        @media (max-width: 768px) {
        .main{
        flex-direction: column;
        }
          .content-container {
            flex-direction: column;
          }

          .drawer-section {
            margin-right: 0;
          }

          .course-section {
            margin-top: 1rem;
          }
        }
      `}</style>
    </>
  )
}

export default Course