import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faXTwitter, faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-evenly items-center ">
        {/* Left Section */}
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0 text-center px-5">
          <h3 className="text-3xl font-semibold">Dr. Pakhare Dental Clinic</h3>
          <p className="mt-4 text-gray-300">
            Your smile is how you greet the world. When your teeth are healthy and straight,
            you know you look great. That fills you with confidence and strengthens your
            self-esteem.
          </p>
          <div className="flex justify-center mt-4 space-x-4 text-2xl">
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>

          <button className="mt-6 bg-[#3E79F3] hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-transform duration-300 transform hover:scale-110">
            Contact Us
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full h-full lg:w-1/3 mb-6 lg:mb-0 text-center px-5">
          <h4 className="text-3xl font-semibold">Contact</h4>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              Shop No 5, Balaji Towers, Mahatma Phule Chowk, Maharashtra 410501
            </li>
            <li>
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              <a href="tel:+919822559274">
                +91 98225 59274
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <a href="mailto:drpakhare@gmail.com">
                drpakhare@gmail.com
              </a>
            </li>
          </ul>


          <button className="mt-6 bg-[#3E79F3] hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-transform duration-300 transform hover:scale-110">
            Talk to Dentist
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
