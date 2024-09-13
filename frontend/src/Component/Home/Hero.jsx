import React from 'react'
import Login from './login'

const Hero = () => {
  return (
    <>
    <div>
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://i.makeagif.com/media/12-10-2015/NMLNgf.gif)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
        <h1 className="text-5xl font-bold" style={{fontSize:'40px', color:'green'}}>Hello!</h1>
      <h1 className="mb-5 text-5xl font-bold" style={{fontSize:'30px'}}>Welcome To DreamArt Your One-Stop Destination</h1>
      <p className="mb-5" style={{ position:'absolute', left: window.innerWidth <= 768 ? '2rem' : '9rem',
                  right: window.innerWidth <= 768 ? '2rem' : '9rem',
                  fontSize: window.innerWidth <= 768 ? '14px' : '16px',}}>
      we bring you the best of education with Pak Tech Institute, seamless E-Commerce solutions, and a delightful array of food and drinks—all under one roof. Explore our platform to elevate your lifestyle with the services you deserve."
      </p>
      <button className="btn" style={{marginTop:'130px', backgroundColor:'green', border:'none', color:'white'}} onClick={()=>document.getElementById('Login').showModal()}>Get Started</button>
      <Login/>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Hero