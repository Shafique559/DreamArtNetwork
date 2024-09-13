import React from 'react'
import { Link } from 'react-router-dom'

const Introduction = () => {
  return (
    <>
    <div>
    <div className=" mt-10 px-4 md:px-10">
          <h1 className="text-5xl font-bold mb-5" style={{fontSize:'25px', color:'green'}}>Discover DreamArt</h1>
          <p className="text-lg leading-relaxed" style={{textAlign:'justify',}}>
            DreamArt is a dynamic platform that caters to your diverse needs and aspirations. At the heart of our offerings is the 
            <strong> Pak Tech Institute</strong>, where we provide top-notch technical education, empowering you to excel in the digital age. Our 
            <strong> Services</strong> are designed to support your personal and professional growth, offering everything from tech consulting to creative solutions. 
            Through our <strong>E-Commerce</strong> platform, we make shopping convenient and accessible, bringing the latest products to your doorstep. And when it comes 
            to indulgence, our <strong>Food & Drink</strong> section offers a curated selection of delightful culinary experiences. DreamArt is your ultimate destination 
            for education, services, shopping, and dining.
          </p>
        </div>
        {/* From the given below section the cards section desing to show my basic info about work */}
        <div className="card1 mt-10 px-4 md:px-10 ">
        <h1 className="mt-10 text-5xl font-bold " style={{fontSize:'25px', color:'green'}}>Explore What We Offer</h1>
        <h1 className="mt-10 font-bold mb-5">1.Pak Tech Institute</h1>
        <div className=" bg-base-200 min-h-screen" style={{borderRadius:'20px',boxShadow:'5px 5px 10px black'}}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://www.roseofyork.com/wp-content/uploads/2020/12/online-study.jpg"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className=" font-bold mt-20">Learn & Earn Skills Course</h1>
      <p className="py-8" style={{textAlign:'justify',}}>
      Pak Tech Institute offers a diverse range of online courses designed to empower individuals with valuable skills and knowledge. Whether you're looking to build a strong foundation in essential subjects, explore the creative world of graphic design, or enhance your typing speed and accuracy with our stenographer course, we have something for everyone. Our Lead Generation course is perfect for those aiming to excel in the digital marketing landscape, while the Taleem-ul-Quran course provides in-depth Islamic education. For aspiring freelancers, we offer a comprehensive Freelance course to help you succeed in the gig economy. Additionally, our Web Development course is ideal for those interested in creating dynamic and responsive websites. If you're a beginner in programming, our Basic C/C++ course will guide you through the fundamentals.
      </p>
      <Link to={'/Institute'}>
      <button className="btn btn-primary ml-10" style={{backgroundColor:'green', border:'none', color:'white'}}>Get Started</button>
      </Link>
     
       </div>
    </div>
      </div>
        </div>
        <div className="card1 mt-10 px-4 md:px-10 ">
        <h1 className="mt-10 font-bold mb-5">2.Services</h1>
        <div className=" bg-base-200 min-h-screen" style={{backgroundColor:'green', borderRadius:'20px', color:'white', boxShadow:'5px 5px 10px black'}}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://graditsolutions.com/wp-content/uploads/2023/10/digital2.gif"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      {/* here second service we provide about different types of servies we provide */}
      <h1 className="font-bold mt-20">Our Services</h1>
      <p className="py-10" style={{textAlign:'justify',}}>
      Dreamart is your go-to service provider in Lahore, Pakistan, offering a wide range of solutions to meet your needs. Whether you're planning a memorable event or seeking convenience in your daily life, Dreamart has you covered.

      Our DJ System service ensures that your parties and events are filled with the perfect music and sound experience. We also provide professional Waiters who bring excellence in service to your gatherings. For your logistics needs, our Delivery service guarantees timely and reliable transport of your items. If you’re looking to enhance your event's ambiance, our Decoration service offers creative and stunning decor options. Additionally, our Tours & Travels service is designed to make your travel experiences seamless and enjoyable.

      At Dreamart, we are dedicated to delivering high-quality services that add value to every occasion and need.
      </p>
      <button className="btn btn-primary ml-10" style={{backgroundColor:'White', border:'none', color:'green', boxShadow:'5px 5px 10px black'}}>Get Started</button>
       </div>
    </div>
      </div>
        </div>
        {/* Here we are desing the Section of E-commerce card */}
        <div className="card1 mt-10 px-4 md:px-10 ">
        <h1 className="mt-10 font-bold mb-5">3.E-Commerce</h1>
        <div className=" bg-base-200 min-h-screen" style={{borderRadius:'20px',boxShadow:'5px 5px 10px black'}}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://blog.gemfind.com/hubfs/ecommerce-subway-studio-malaysia%20%281%29.gif"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="font-bold mt-20">Our Store Services</h1>
      <p className="py-8" style={{textAlign:'justify',}}>
      Dreamart extends its services with an all-in-one eCommerce store, catering to a wide range of needs right at your fingertips. Whether you’re looking to refresh your wardrobe, stock up on household essentials, or find the perfect gift for your little ones, our store has it all.

      Explore our extensive Garment section, featuring the latest fashion trends for all ages and occasions. Our Grocery section ensures that your pantry is always stocked with fresh, quality products. For DIY enthusiasts and professionals alike, our Tools Shop offers a variety of reliable tools to help you get the job done. And don’t forget to check out our Toys Shop, where you'll find a delightful selection of toys that spark joy and creativity.

      At Dreamart’s eCommerce store, we aim to provide a convenient and enjoyable shopping experience for all your needs.
      </p>
      <button className="btn btn-primary ml-10" style={{backgroundColor:'green', border:'none', color:'white', boxShadow:'5px 5px 10px black'}}>Get Started</button>
       </div>
    </div>
      </div>
        </div>
        {/* here we are desing a Food & drink Section */}
        <div className="card1 mt-10 px-4 md:px-10 ">
        <h1 className="mt-10 font-bold mb-5">4.Foods & Drinks</h1>
        <div className=" bg-base-200 min-h-screen" style={{backgroundColor:'green', borderRadius:'20px', color:'white', boxShadow:'5px 5px 10px black'}}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://assets-global.website-files.com/651ecce677fc8afd707a2eaa/6542add9f961634b637d30b6_BK2-2.gif"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      {/* here second service we provide about different types of servies we provide */}
      <h1 className="font-bold mt-20">Our Foods & Drinks Services</h1>
      <p className="py-20" style={{textAlign:'justify',}}>
        Dreamart brings deliciousness straight to your doorstep with our online food and drink facilities. Whether you're craving a classic pizza, a juicy burger, a flavorful shawarma, or the local favorite pratharol, we've got you covered. Our fast food options are prepared with quality ingredients and delivered fresh, ensuring a satisfying meal every time.

        Enjoy the convenience of having your favorite dishes delivered right to your home, all with just a few clicks. At Dreamart, we’re here to make your dining experience both easy and enjoyable.


      </p>
      <button className="btn btn-primary ml-10" style={{backgroundColor:'White', border:'none', color:'green', boxShadow:'5px 5px 10px black'}}>Get Started</button>
       </div>
    </div>
      </div>
        </div>
      
    </div>
    </>
  )
}

export default Introduction