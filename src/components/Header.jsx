import React from "react";
import banner from '../assets/banner.jpg';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="bg-cover bg-center h-screen rounded-xl"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-black bg-opacity-80 rounded-xl h-full flex flex-col justify-center items-center text-center text-white p-5">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 transition-all duration-300 transform hover:scale-105">
          Your Smile, <span className="text-[#3E79F3]">Our Passion</span>
        </h1>
        <p className="text-base sm:text-lg md:text-2xl mb-8">
          Expert dental care for a brighter, healthier smile.
        </p>
        {/* Button */}
        <div className="mt-5 transition-transform duration-300 transform hover:scale-110">
          <Link
            to="/bookappointment"
            className="bg-white text-blue-600 text-sm sm:text-lg md:text-xl font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
