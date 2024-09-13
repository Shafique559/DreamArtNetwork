import React from 'react'
import Navbar from '../navbar'
import Hero from './Hero'
import Introduction from './Introduction/Introduction'
import Footer from './Introduction/footer'
import {Helmet} from 'react-helmet'
import logo from '../logo/LOGO.png'
const Home = () => {
  return (
    <>
    <Helmet>
      <link rel="shortcut icon" href={logo} type="image/x-icon" />
    </Helmet>
    <Navbar/>
    <Hero/>
    <Introduction/>
    <Footer/>
    </>
  )
}

export default Home