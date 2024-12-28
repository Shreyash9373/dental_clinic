import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import tooth1 from '../assets/toothimages/tooth1.png';
import tooth2 from '../assets/toothimages/tooth2.png';
import tooth3 from '../assets/toothimages/tooth3.png';
import tooth4 from '../assets/toothimages/tooth4.png';
import tooth5 from '../assets/toothimages/tooth5.png';
import tooth6 from '../assets/toothimages/tooth6.png';
import AOS from 'aos';

const Ourservices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);


  const services = [
    { image: tooth1, title: 'Cavity Protection' },
    { image: tooth2, title: 'Implant Dentistry' },
    { image: tooth3, title: 'Cosmetic Dentistry' },
    { image: tooth4, title: 'Teeth Whitening' },
    { image: tooth5, title: 'Teeth Cleaning' },
    { image: tooth6, title: 'Orthodontic' },
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100  p-5">
      <div className="text-xl font-bold mb-4 md:text-3xl text-[#3E79F3] shadow-lg p-1">Pakhre Clinic Center</div>
      <div className="text-lg mb-6 md:text-3xl text-[#3E79F3] shadow-md ">Our Trusted Dental Services for you</div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6 w-full md:w-3/4 px-4 md:text-balance ">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-md="fade-down" 
            data-aos-delay={index * 200} 
            className="flex flex-col justify-center items-center bg-white shadow-lg rounded-lg p-4 border border-blue-500"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-auto rounded-md mb-2"
            />
            <div className="text-center text-sm font-medium">{service.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourservices;
