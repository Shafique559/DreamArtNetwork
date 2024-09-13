import React from "react";
import logo from "../Component/logo/LOGO.png";
import Login from "./Home/login";
import SignUp from "./Home/Signup";
import { useAuth } from "../context/AuthProvider";
import Logout from "./Logout";
import Ecommerce from "./Ecommerce/Ecommerce";

const navItem = (
  <>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/About">About Us</a>
    </li>
    <li>
      <a href="/Institute">Institute</a>
    </li>
    <li>
      <a href="/Service">Services</a>
    </li>
    <li>
      <a href="/Ecommerce">E-Commerce</a>
    </li>
    <li>
      <a href="/Foods-Drinks">Foods & Drinks</a>
    </li>
    <li>
      <a href="/Contactus">Contact Us</a>
    </li>
  </>
);

function Navbar() {
  const [authUser,setAuthUser]=useAuth()
  return (
    <div className="max-w-screen-2xl container md:px-10 px-1 z-[1]" style={{backgroundColor:'white', position:'sticky',top:'0', boxShadow:'0px 2px 10px black'}}>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItem}
            </ul>
          </div>
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1" style={{fontSize:'15px'}}>
              {navItem}
            </ul>
          </div>
          {
            authUser?(<Logout/>):
            (
            <div className="btn1 md:flex gap-4">
              <button className="btn text-white px-6" style={{backgroundColor:"green", border:'none'}} onClick={()=>document.getElementById('Login').showModal()}>SignIn</button>
              <Login/>
              <button className="btn text-white" style={{backgroundColor:"green", border:'none'}} onClick={()=>document.getElementById('Signup').showModal()}>SignUp</button>
              <SignUp/>
          </div>
            )
          }
          
        </div>
      </div>
    </div>
  );
}


export default Navbar;
