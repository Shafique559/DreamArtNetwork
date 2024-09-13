import React from 'react'
import About from './img1.jfif'
import img3 from './img3/img3.jfif'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from './list'
import Cards from './Cards';
const Detail = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className='min-h-screen'>
    <div className="card1 mt-10 px-4 md:px-10 ">
        <h1 className="mt-10 text-5xl font-bold mb-5" style={{fontSize:'20px', color:'green'}}>FOUNDER OF THE DREAMART</h1>
        <div className=" min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={About}
      className="max-w-sm rounded-lg shadow-2xl" style={{marginTop:'20px',marginRight:'20px' , height:'400px'}} />
    <div>
      {/* here second service we provide about different types of servies we provide */}
      <h1 className="font-bold mt-10">MUHAMMAD SHAFIQUE ASLAM</h1>
      <p className="py-10" style={{textAlign:'justify', marginRight:'40px'}}>
      Muhammad Shafique Aslam is the dynamic founder of DreamArt Network, a platform where technology and creativity converge. With a BS in Information Technology, he has built a strong foundation in the digital world, honing his skills as both a Web Developer and Graphic Designer. His journey is marked by a deep passion for innovation, always striving to create solutions that are not only functional but also aesthetically pleasing.

        As a Web Developer, Muhammad Shafique Aslam brings ideas to life through code, crafting seamless and engaging user experiences. His work reflects a deep understanding of how technology can solve problems and enhance our lives. On the creative side, his expertise in Graphic Design allows him to infuse his projects with visual appeal, ensuring that every design is both impactful and meaningful.

        Under his leadership, DreamArt Network has become a hub of excellence, offering a wide range of services that cater to diverse needs. Whether it's building websites, designing graphics, or providing top-notch services like eCommerce and online food delivery, his vision is clear: to deliver quality, creativity, and innovation in everything DreamArt does.
      </p>
      
       </div>
       
    </div>
    </div>
      </div>
        </div>
        <div className='min-h-screen'>
    <div className="card1 mt-10 px-4 md:px-10 ">
        <h1 className="mt-10 text-5xl font-bold mb-5" style={{fontSize:'20px', color:'green'}}>Head of DreamArt</h1>
        <div className=" min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={img3}
      className="max-w-sm rounded-lg shadow-2xl" style={{marginTop:'20px',marginRight:'20px' , height:'400px'}} />
    <div>
      {/* here second service we provide about different types of servies we provide */}
      <h1 className="font-bold mt-10">MUHAMMAD SALEEM</h1>
      <p className="py-10" style={{textAlign:'justify', marginRight:'40px'}}>
      Muhammad Saleem serves as the Head of DreamArt Network, bringing a wealth of expertise in both engineering and management to the team. With a DAE in Civil Engineering, he possesses a strong technical background that is complemented by his skills in Management Services. His ability to oversee complex projects with precision and efficiency has been instrumental in driving DreamArt's success.

      Muhammad Saleem's leadership is characterized by a focus on excellence and a commitment to delivering top-quality services. His blend of technical knowledge and management acumen ensures that every aspect of DreamArt's operations runs smoothly, from planning to execution. With a keen eye for detail and a strategic mindset, he plays a crucial role in shaping the future of DreamArt Network, ensuring that the company remains at the forefront of innovation and customer satisfaction.
      </p>
      
       </div>
       
    </div>
    </div>
      </div>
        </div>
         
        <h1 className="mt-10 text-5xl font-bold mb-5" style={{fontSize:'20px', color:'green'}}>Instructor Info:</h1>
      <div className="slider-container">
      <Slider {...settings}>
       {list.map(data=>{
        return(
          <>
          <Cards data={data} key={data.id}/>
          </>
        )
       })}
      </Slider>
    </div>
    </>
  )
}

export default Detail