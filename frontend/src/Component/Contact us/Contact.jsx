import React from 'react';
import Navbar from '../navbar';
import Footer from '../Home/Introduction/footer';
import {Helmet} from 'react-helmet'
import logo from '../logo/LOGO.png'

const ContactUs = () => {
  return (
    <>
    <Helmet>
      <link rel="shortcut icon" href={logo} type="image/x-icon" />
      <title>DreamArt Network | Contact Us!</title>
    </Helmet>
    <Navbar/>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-200 to-green-500">
      <div className="max-w-3xl w-full p-8 bg-white border-4 border-green-600 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-center text-green-700">Contact Us</h2>
        <p className="text-lg mb-6 text-gray-700 text-center">
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
    <Footer/>
    </>
  );
};

export default ContactUs;
