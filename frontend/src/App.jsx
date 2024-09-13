import React from 'react'
import Home from './Component/Home/Home'
import{ Navigate, Route, Routes } from "react-router-dom"
import About from './Component/About/About'
import Institute from './Component/Institute/Institute'
import Now from './Component/Institute/apply now'
import HowApply from './Component/Institute/how to apply'
import ContactUs from './Component/Contact us/Contact'
import ContactTo from './Component/Institute/Contacttous'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
import PleaseSignIn from './message/Message'
import Success from './message/Success'
import ForgotPassword from './Component/ForgotPasswordForm'
import ResetPasswordPage from './Component/ResetPasswordForm'
import Ecommerce from './Component/Ecommerce/Ecommerce'
import Service from './Component/Service/Service'
import Food from './Component/Food & Drinks/Food'

const hello = () => {
  const[authUser,setAuthUser]=useAuth()
  console.log(authUser);
  return (
   <>
  {/* <Home/> */}
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={authUser?<About/>: <PleaseSignIn/>}/>
    <Route path='/Institute' element={authUser?<Institute/>:<PleaseSignIn/>}/>
    <Route path='/Now' element={<Now/>}/>
    <Route path='/HowApply' element={<HowApply/>}/>
    <Route path='/Contactus' element={<ContactUs/>}/>
    <Route path='/ContactTo' element={<ContactTo/>}/>
    <Route path='/Success' element={<Success/>}/>
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
    <Route path='/Ecommerce' element={authUser?<Ecommerce/>:<PleaseSignIn/>} />
    <Route path='/Service' element={authUser?<Service/>:<PleaseSignIn/>} />
    <Route path='/Foods-Drinks' element={authUser?<Food/>:<PleaseSignIn/>} />
  </Routes>
  <Toaster />
   </>
  )
}

export default hello