// { For Background Image }
// import React from "react";
// import banner from '../assets/banner.jpg';
// import { Link } from "react-router-dom";

// const Header = () => {
  //   return (
    //     <header
    //       className="bg-cover bg-center h-screen rounded-xl"
    //       style={{
      //         backgroundImage: `url(${banner})`,
      //         backgroundSize: 'cover',
      //         backgroundPosition: 'center',
      //       }}
      //     >
      //       <div className="bg-black bg-opacity-60 rounded-xl h-full flex flex-col justify-center items-center text-center text-white p-5">
      //         <h1 className="text-4xl md:text-6xl font-bold mb-6 transition-all duration-300 transform hover:scale-105">
      //           Your Smile, <span className="text-[#3E79F3]">Our Passion</span>
//         </h1>
//         <p className="text-base sm:text-lg md:text-2xl mb-8">
//           Expert dental care for a brighter, healthier smile.
//         </p>
//         {/* Button */}
//         <div className="mt-5 transition-transform duration-300 transform hover:scale-110">
//           <Link
//             to="/bookappointment"
//             className="bg-white text-blue-600 text-sm sm:text-lg md:text-xl font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white"
//           >
//             Book an Appointment
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


// { For Background Video }
import React from "react";
import bannervideo from '../assets/banner_video.mp4';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="relative w-full h-[40vh] sm:h-[80vh] md:h-[80vh] rounded-xl overflow-hidden ">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={bannervideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Blackish Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white p-5">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 transition-all duration-300 transform hover:scale-105">
          {/* Your Smile, <span className="text-[#3E79F3]">Our Passion</span> */}
          Your Smile, <span className="text-[#3E79F3]" style={{ textShadow: '2px 2px 4px #000' }}>Our Passion</span>
        </h1>
        <p className="text-base sm:text-lg md:text-2xl mb-3">
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
