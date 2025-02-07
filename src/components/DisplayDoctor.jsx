import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles
import { useNavigate } from 'react-router-dom';
import doc1 from '../assets/Doctor_Potraits/Doc1.jpg'
import doc2 from '../assets/Doctor_Potraits/Doc2.jpg'
import d1 from '../assets/Doctor_Potraits/d1.jpg';
import d2 from '../assets/Doctor_Potraits/d2.jpg';
import d3 from '../assets/Doctor_Potraits/d3.jpg';
import d4 from '../assets/Doctor_Potraits/d4.jpg';
import d5 from '../assets/Doctor_Potraits/d5.jpg';
import pakhredegree from '../assets/pakhredegree.jpg'


const Doctors = [ 
  {
    id: 1,
    name: "Dr.Pakhre",
    exp: "30+ Years",
    degree: pakhredegree ,
    photo: doc1 ,
    age: 47 , 
    contact: 1231234455,
    description: "Dr. Pakhre, BDS   Based in Pune, Dr. Pakhre is a highly experienced and esteemed dental professional with over 30 years of expertise in the field. Renowned for his dedication to patient care and precision in treatment, Dr. Pakhre has been transforming smiles and enhancing oral health for decades.Specializing in general dentistry, cosmetic procedures, and restorative care, he combines traditional knowledge with the latest dental advancements to deliver top-notch services. His patients frequently commend his friendly demeanor, compassionate approach, and the ability to create a stress-free dental experience for individuals of all ages. Dr. Pakhre's long-standing reputation for excellence, coupled with glowing reviews from his patients, makes him one of Pune's most sought-after dentists. Whether you need a routine check-up, advanced restorative work, or a smile makeover, Dr. Pakhre is committed to providing care that exceeds expectations."
  } ,
  {
    id: 2,
    name: "Dr.Madhuri Pakhre ",
    exp: "15+ Years",
    degree: pakhredegree ,
    photo: doc2 ,
    age: 31 ,
    contact: 1234123456 , 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nobis beatae quis ea, aut dignissimos ex architecto ullam eum animi praesentium. Culpa, deleniti doloremque aperiam provident officiis consectetur minima perferendis. "

  }
]

const DisplayDoctor = () => {

  const navigate = useNavigate()

  const handleDoctorRoute = (doctorinfo) => {
    console.log(doctorinfo)
    navigate(`/doctor-details/${doctorinfo.id}`, { state: { doctorinfo } }); // Pass only specific doctor details
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with optional settings
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
      <div className="w-full h-auto flex flex-wrap justify-center md:justify-evenly items-center gap-6">
  {Doctors.map((doctorinfo) => (
    <div
      key={doctorinfo.id}
      onClick={() => handleDoctorRoute(doctorinfo)}
      className="group text-center"
      data-aos-md="fade-left"
      data-aos="fade-up"
    >
      <img
        src={doctorinfo.photo}
        alt={doctorinfo.name}
        className="object-cover overflow-hidden w-[300px] md:w-[320px] h-[350px] md:h-[380px] rounded-md rounded-br-[90px] hover:scale-105  hover:grayscale-0 transition-transform duration-300 group-hover:-translate-y-4"
      />
      <h1 className="font-semibold text-blue-600 p-3 text-xl text-left">
        {doctorinfo.name}
      </h1>
    </div>
  ))}



        

        {/* Doctor 2 */}
        {/* <div
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
        </div> */}
      </div>
    </div>
  );
};

export default DisplayDoctor;
