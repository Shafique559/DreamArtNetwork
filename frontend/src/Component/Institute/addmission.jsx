import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const AdmissionForm = ({ courseName }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    courseName: courseName,
    studentName: '',
    fatherName: '',
    bFormCnic: '',
    dob: '',
    gender: '',
    phoneNumber: '',
    whatsappNumber: '',
    address: '',
    paymentMethod: '',
    transactionId: '',
    acceptTerms: false,
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isExpanded, setIsExpanded] = useState(false); // For toggling terms and conditions
  const navigate = useNavigate(); // Hook for navigation
  // Handle the initial form submission
  const onSubmit = (data) => {
    setFormData(prevData => ({
      ...prevData,
      studentName: data.studentName,
      fatherName: data.fatherName,
      bFormCnic: data.bFormCnic,
      dob: data.dob,
      gender: data.gender,
      phoneNumber: data.phoneNumber,
      whatsappNumber: data.whatsappNumber,
      address: data.address,
    }));
    setIsFormSubmitted(true);
  };

  // Handle the final form submission
  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    const userInfo = {
      coursename: formData.courseName,
      studentname: formData.studentName,
      fathername: formData.fatherName,
      cnic: formData.bFormCnic,
      dateofbirth: formData.dob,
      gender: formData.gender,
      phone: formData.phoneNumber,
      whatsapp: formData.whatsappNumber,
      address: formData.address,
      payment: formData.paymentMethod,
      tid: formData.transactionId,
    };
  
    try {
      const response = await axios.post("/admission/Admission", userInfo);
      if (response.data) {
        toast.success('Registration successful!');
        localStorage.setItem("Admission", JSON.stringify(response.data));
        reset(); // Reset the form
        navigate('/Success');
        setFormData({
          courseName: courseName,
          studentName: '',
          fatherName: '',
          bFormCnic: '',
          dob: '',
          gender: '',
          phoneNumber: '',
          whatsappNumber: '',
          address: '',
          paymentMethod: '',
          transactionId: '',
          acceptTerms: false,
        });
        setIsFormSubmitted(false); // Go back to the initial form
      }
    } catch (err) {
      console.error('Submission Error:', err.response?.data);
      setErrorMessage(err.response?.data?.message || err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      acceptTerms: e.target.checked,
    });
  };

  const handleBack = () => {
    setIsFormSubmitted(false);
  };

  const handleToggle = (e) => {
    e.preventDefault(); // Prevent form submission
    setIsExpanded(!isExpanded);
  };

  return (
    <>
     
      <div id='modal' className="md:w-4/4 flex justify-center items-center p-4">
        <div className="w-full max-w-4xl bg-white p-8 shadow-lg rounded-lg" style={{ backgroundColor: 'lightgray' }}>
          <h1 className="text-center text-2xl font-bold text-green-600">Admission Form</h1>
          
          {!isFormSubmitted ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Form Fields */}
                <div className="mb-4">
                  <label htmlFor="courseName" className="block text-gray-700 font-bold mb-2">Course Name:</label>
                  <input
                    type="text"
                    id="courseName"
                    name="courseName"
                    value={courseName}
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="studentName" className="block text-gray-700 font-bold mb-2">Student Name:</label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    {...register('studentName', { required: 'Student name is required' })}
                    placeholder='Ex. Alex'
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                  {errors.studentName && <p className="text-red-500">{errors.studentName.message}</p>}
                </div>
                {/* Add other fields similarly */}
                <div className="mb-4">
                  <label htmlFor="fatherName" className="block text-gray-700 font-bold mb-2">Father Name:</label>
                  <input
                    type="text"
                    id="fatherName"
                    name="fatherName"
                    {...register('fatherName', { required: 'Father name is required' })}
                    placeholder='Ex. Petter'
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                  {errors.fatherName && <p className="text-red-500">{errors.fatherName.message}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="bFormCnic" className="block text-gray-700 font-bold mb-2">B-Form/CNIC:</label>
                  <input
                    type="text"
                    id="bFormCnic"
                    name="bFormCnic"
                    {...register('bFormCnic', { required: 'B-form/Cnic is required' })}
                    placeholder='12345-6789000-1'
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                  {errors.bFormCnic && <p className="text-red-500">{errors.bFormCnic.message}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">Date of Birth:</label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    {...register('dob', { required: 'Date of birth is required' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                  {errors.dob && <p className="text-red-500">{errors.dob.message}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">Gender:</label>
                  <select
                    id="gender"
                    name="gender"
                    {...register('gender', { required: 'Gender is required' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">Phone Number:</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    {...register('phoneNumber', { required: 'Phone Number is required' })}
                    placeholder='+92/03123456789'
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                  {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="whatsappNumber" className="block text-gray-700 font-bold mb-2">Whatsapp Number:</label>
                  <input
                    type="text"
                    id="whatsappNumber"
                    name="whatsappNumber"
                    {...register('whatsappNumber', { required: 'Whatsapp Number is required' })}
                    placeholder='+92/03123456789'
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                  {errors.whatsappNumber && <p className="text-red-500">{errors.whatsappNumber.message}</p>}
                </div>
                <div className="mb-4 col-span-2">
                  <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address:</label>
                  <textarea
                    id="address"
                    name="address"
                    {...register('address', { required: 'Address is required' })}
                    placeholder='House # 01, Street # 01, City..'
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                  {errors.address && <p className="text-red-500">{errors.address.message}</p>}
                </div>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
                Next Step
              </button>
            </form>
          ) : (
            <form onSubmit={handleFinalSubmit}>
              <div className="mb-4">
                <label htmlFor="paymentMethod" className="block text-gray-700 font-bold mb-2">Payment Method:</label>
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value="">Select Payment Method</option>
                  <option value="JazzCash">JazzCash</option>
                  <option value="Easypaisa">Easypaisa</option>
                  <option value="Bank">Bank Al Habib</option>
                </select>
              </div>
                <div className="mb-4 col-span-2">
                <label htmlFor="transactionId" className="block text-gray-700 font-bold mb-2">
                  {formData.paymentMethod === 'Bank' ? 'Account Detail: PK68 BHAL 027800950066801' : 'Account Detail: 03098387559'}
                </label>
                <p style={{color:"red"}}>Share Receipt on Whatsapp: 03098387559, 03038145046  </p>
              </div>
              <div className="mb-4">
                <label htmlFor="transactionId" className="block text-gray-700 font-bold mb-2">
                  {formData.paymentMethod === 'Bank' ? 'Slip/Transaction Number:' : 'TID (Transaction ID):'}
                </label>
                <input
                  type="text"
                  id="transactionId"
                  name="transactionId"
                  value={formData.transactionId}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              
              {/* Terms & Conditions */}
              <h1 className="text-lg text-green-600 underline font-bold">Terms & Conditions</h1>
              <div>
                <p className="mt-2">
                  {isExpanded ? (
                    <>
                      <b>1. Eligibility:</b> You must be of legal age. <br />
                      <b>2. Account Security:</b> You are responsible for your account. <br />
                      <b>1. Eligibility:</b>
                Any age or older to register and use our services. Minors must have parental or guardian consent. Minors must have parental or guardian consent. <br />
            <b>2. Account Security:</b>
             Users are responsible for maintaining the confidentiality of their login credentials. <br /> Unauthorized use of accounts should be reported immediately.<br />
            <b>3. Course Enrollment: </b>
            Enrollment is subject to availability. Full payment is required before course access is granted. No refunds after course access is provided.<br />
            <b>4. Payment Methods: </b>
            Acceptable payment methods include JazzCash, Easypaisa, and bank transfers. Users must provide a valid transaction ID or slip number after payment.<br />
            <b>5. Content Usage:</b> 
            All content provided in the courses is for personal educational use only. Redistribution or commercial use of the content is strictly prohibited.<br />
            <b>6. Intellectual Property: </b>
            All course materials, including videos, notes, and quizzes, are the intellectual property of Pak Tech Institute. Users may not copy, reproduce, or distribute any materials without permission.<br />
            <b>7. Code of Conduct: </b>
            Users must maintain respectful and professional behavior in all interactions. Any form of discrimination, or inappropriate behavior will result in account suspension.<br />
            <b>8. Privacy Policy:</b> 
            Personal information collected during registration and course participation will be used in accordance with our Privacy Policy. We do not share personal information with third parties without user consent.<br />
            <b>9. Changes to Terms:</b> 
            Pak Tech Institute reserves the right to update or modify these terms at any time. Users will be notified of any significant changes, and continued use of the platform signifies acceptance of the updated terms.<br />
            <b>10. Dispute Resolution:</b> 
            Any disputes arising from the use of our platform will be resolved through arbitration in accordance with local laws.<br />
                      {/* Add other terms */}
                    </>
                  ) : (
                    <>
                      <b>1. Eligibility:</b> You must be of legal age. <br />
                      <b>2. Account Security:</b> You are responsible for your account. <br />
                    </>
                  )}
                </p>
                <button className="text-blue-600 underline" onClick={handleToggle}>
                  {isExpanded ? 'Show Less' : 'Show More'}
                </button>
              </div>
              <label>
                <input
                  type="checkbox"
                  checked={formData.acceptTerms}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2 text-gray-700 font-bold">I accept all terms & conditions</span>
              </label>
              
              <button
                type="button"
                onClick={handleBack}
                className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition mb-4"
              >
                Back
              </button>
            
              <button
                type="submit"
                className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition ${!formData.acceptTerms ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!formData.acceptTerms}
              >
                Final Submit
              </button>
           
            </form>
          )}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>
      </div>
    </>
  );
};

export default AdmissionForm;
