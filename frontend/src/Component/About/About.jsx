import React from 'react'
import Navbar from '../navbar'
import Detail from './Detail'
import Footer from '../Home/Introduction/footer'
import {Helmet} from 'react-helmet'
import logo from '../logo/LOGO.png'
const About = () => {
  return (
    <>
   <Helmet>
      <link rel="shortcut icon" href={logo} type="image/x-icon" />
      <title>DreamArt Network | About Us</title>
    </Helmet>
    <Navbar/>
    <Detail/>
    <Footer/>

    </>
  )
}

export default About