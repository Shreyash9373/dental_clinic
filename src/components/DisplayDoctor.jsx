import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles

import d1 from '../assets/Doctor_Potraits/d1.jpg';
import d2 from '../assets/Doctor_Potraits/d2.jpg';
import d3 from '../assets/Doctor_Potraits/d3.jpg';
import d4 from '../assets/Doctor_Potraits/d4.jpg';
import d5 from '../assets/Doctor_Potraits/d5.jpg';

const DisplayDoctor = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with optional settings
  }, []);

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center gap-4">
      {/* Heading Section */}
      <div data-aos="zoom-in-left" className="my-4 font-bold">
        <h1 className="text-3xl text-blue-800 text-pretty my-3 mb-4">
          Expert Dentist behind that perfect smile
        </h1>
        <h1 className="text-xl text-blue-300 text-pretty mt-2">
          All our dentists are specialists with 7+ years of experience
        </h1>
      </div>

      {/* Image Section */}
      <div className="w-full h-auto flex flex-col md:flex-row justify-evenly items-center gap-4">
        {/* Doctor 1 */}
        <div
          className="group text-center"
          data-aos-md="fade-right"
          data-aos="fade-down"
          data-aos-delay="0"
        >
          <img
            src={d1}
            alt="Dr. John Doe"
            className="object-cover overflow-hidden w-[320px] md:w-[300px] rounded-md rounded-br-[90px] hover:scale-105 xl:grayscale hover:grayscale-0 transition-transform duration-300 group-hover:-translate-y-4"
          />
          <h1 className="font-semibold text-blue-600 p-3 text-xl text-left">
            Dr. John Doe
          </h1>
        </div>

        {/* Doctor 2 */}
        <div
          className="group text-center"
          data-aos-md="fade-left"
          data-aos="fade-up"
        >
          <img
            src={d4}
            alt="Dr. Aleena Jane"
            className="object-cover overflow-hidden w-[320px] md:w-[300px] rounded-md rounded-br-[90px] hover:scale-105 xl:grayscale hover:grayscale-0 transition-transform duration-300 group-hover:-translate-y-4"
          />
          <h1 className="font-semibold text-blue-600 p-3 text-xl text-left">
            Dr. Sangapal Pakhre
          </h1>
        </div>

        {/* Doctor 3 */}
        <div
          className="group text-center"
          data-aos-md="fade-right"
          data-aos="fade-down"
        >
          <img
            src={d3}
            alt="Dr. Anuj Agarl"
            className="object-cover overflow-hidden w-[320px] md:w-[300px] rounded-md rounded-br-[90px] hover:scale-105 xl:grayscale hover:grayscale-0 transition-transform duration-300 group-hover:-translate-y-4"
          />
          <h1 className="font-semibold text-blue-600 p-3 text-xl text-left">
            Dr. Anuj Agarl
          </h1>
        </div>

        {/* Doctor 4 */}
        <div
          className="group text-center"
          data-aos-md="fade-left"
          data-aos="fade-up"
        >
          <img
            src={d5}
            alt="Dr. Maria Garcia"
            className="object-cover overflow-hidden w-[320px] md:w-[300px] rounded-md rounded-br-[90px] hover:scale-105 xl:grayscale hover:grayscale-0 transition-transform duration-300 group-hover:-translate-y-4"
          />
          <h1 className="font-semibold text-blue-600 p-3 text-xl text-left">
            Dr. Maria Garcia
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DisplayDoctor;
