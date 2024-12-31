import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Dr.Pakhare.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Helper function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#3E79F3] px-6 lg:px-20 py-0 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img src={logo} alt="Cosmos Dental Logo" className="w-32 h-24 mr-2" />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex space-x-6 text-lg font-medium">
          <li>
            <Link
              to="/"
              className={`hover:text-gray-700 font-bold ${
                isActive("/") ? "text-black font-bold" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className={`hover:text-gray-700 font-bold ${
                isActive("/aboutus") ? "text-black font-bold" : ""
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/doctorsteam"
              className={`hover:text-gray-700 font-bold ${
                isActive("/doctorsteam") ? "text-black font-bold" : ""
              }`}
            >
              Doctor's Team
            </Link>
          </li>
          <li>
            <Link
              to="/dentalservices"
              className={`hover:text-gray-700 font-bold ${
                isActive("/dentalservices") ? "text-black font-bold" : ""
              }`}
            >
              Dental Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`hover:text-gray-700 font-bold ${
                isActive("/contact") ? "text-black font-bold" : ""
              }`}
            >
              Contact us
            </Link>
          </li>
        </ul>

        {/* Talk To Dentist Button */}
        {/* <div className="hidden lg:block transition-transform duration-300 transform hover:scale-110">
          <Link
            to="/contact"
            className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200"
          >
            Talk To Dentist
          </Link>
        </div> */}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-3/5 bg-white text-black transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 z-50 shadow-lg`}
        >
          <div className="flex justify-between items-center px-6 py-4 border-b bg-[#3E79F3]">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Links */}
          <ul className="mt-4 space-y-6 px-6 text-lg font-semibold">
            <li>
              <Link
                to="/"
                className={`hover:text-indigo-500 block ${
                  isActive("/") ? "text-indigo-500 font-bold bg-gray-200 p-2 rounded-lg" : ""
                }`}
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className={`hover:text-indigo-500 block ${
                  isActive("/aboutus") ? "text-indigo-500 font-bold bg-gray-200 p-2 rounded-lg" : ""
                }`}
                onClick={toggleMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/doctorsteam"
                className={`hover:text-indigo-500 block ${
                  isActive("/doctorsteam") ? "text-indigo-500 font-bold bg-gray-200 p-2 rounded-lg" : ""
                }`}
                onClick={toggleMobileMenu}
              >
                Doctor's Team
              </Link>
            </li>
            <li>
              <Link
                to="/dentalservices"
                className={`hover:text-indigo-500 block ${
                  isActive("/dentalservices") ? "text-indigo-500 font-bold bg-gray-200 p-2 rounded-lg" : ""
                }`}
                onClick={toggleMobileMenu}
              >
                Dental Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`hover:text-indigo-500 block ${
                  isActive("/contact") ? "text-indigo-500 font-bold bg-gray-200 p-2 rounded-lg" : ""
                }`}
                onClick={toggleMobileMenu}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;