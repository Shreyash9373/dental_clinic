import React, { useEffect } from 'react';
import patient1 from '../assets/Patient/patient1.jpg';
import patient2 from '../assets/Patient/patient2.jpg';
import patient3 from '../assets/Patient/patient3.jpg';
import patient4 from '../assets/Patient/patient4.jpg';
import patient5 from '../assets/Patient/patient5.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles

const Patient = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with optional settings
  }, []);

  return (
    <div className="w-full h-auto bg-gray-100 flex flex-col">
      {/* Header Section */}
      <div data-aos="zoom-in-left" className="flex flex-col justify-center items-center text-gray-800 my-8">
        <div><h1 className="text-blue-400 font-bold text-2xl mb-2">Patient</h1></div>
        <div><h2 className='text-blue-800 font-bold text-3xl'>Patient Cases</h2></div>
      </div>

      {/* Text Section */}
      <div className='w-auto h-auto'>
        {/* Images Section */}
        <div className="flex px-3 flex-col md:flex-row justify-center items-center gap-4 md:gap-2 w-full h-auto">
          {/* Cosmetic Dentistry */}
          <div className="flex flex-col justify-center items-center gap-4 mt-6">
            <h1 data-aos="fade-up" className="font-semibold text-xl text-blue-600 ml-[-24px]">Cosmetic Dentistry</h1>
            <img 
              data-aos="fade-right"
              src={patient1} 
              alt="patient1" 
              className="w-[330px] h-[240px] md:h-[180px] lg:grayscale hover:grayscale-0 object-cover overflow-hidden rounded-sm rounded-tl-[60px]" 
            />
          </div>

          {/* Cavity Protection */}
          <div className="flex flex-col justify-center items-center gap-4 mb-6">
            <img 
              data-aos="fade-left"
              src={patient2} 
              alt="patient2" 
              className="w-[330px] h-[240px] md:h-[180px] lg:grayscale hover:grayscale-0 object-cover overflow-hidden rounded-sm rounded-br-[60px]" 
            />
            <h1 data-aos="fade-up" className="font-semibold text-xl text-blue-600 ml-[-24px]">Cavity Protection</h1>
          </div>

          {/* Teeth Whitening */}
          <div className="flex flex-col justify-center items-center gap-4 mt-6">
            <h1 data-aos="fade-up" className="font-semibold text-xl text-blue-600 ml-[-24px]">Teeth Whitening</h1>
            <img 
              data-aos="fade-right"
              src={patient3} 
              alt="patient3" 
              className="w-[330px] h-[240px] md:h-[180px] lg:grayscale hover:grayscale-0 object-cover overflow-hidden rounded-sm rounded-tl-[60px]" 
            />
          </div>

          {/* Industry Experts */}
          <div className="flex flex-col justify-center items-center gap-4 mb-6">
            <img 
              data-aos="fade-left"
              src={patient5} 
              alt="patient4" 
              className="w-[330px] h-[240px] md:h-[180px] lg:grayscale hover:grayscale-0 object-cover overflow-hidden rounded-sm rounded-br-[60px]" 
            />
            <h1 data-aos="fade-up" className="font-semibold text-xl text-blue-600 ml-[-24px]">Industry Experts</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patient;
