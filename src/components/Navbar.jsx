import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo1.jpg";
// import logo from '../assets/Dr.Pakhare.png';
// import logo from '../assets/Dr.Pakhare1.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);  // Set to true if scrolled down
      } else {
        setIsScrolled(false); // Set to false if at the top
      }
    };

    // Listen for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if the current route is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`sticky top-0 left-0 w-full px-6 lg:px-20 py-3 z-30 transition-all duration-500 ${
        isScrolled
          ? "bg-[#3E79F3] shadow-lg backdrop-blur-lg bg-opacity-100 rounded-bl-[1.5rem] rounded-br-[1.5rem]"
          : "bg-[#3E79F3] bg-opacity-100"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img
            src={logo}
            alt="Cosmos Dental Logo"
            className="w-32 h-24 mr-2 brightness-150 rounded "
          />
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
              className={`hover:text-gray-200 font-bold ${isActive("/") ? "text-black font-bold" : "text-gray-200"}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className={`hover:text-gray-200 font-bold ${isActive("/aboutus") ? "text-black font-bold" : "text-gray-200"}`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/doctorsteam"
              className={`hover:text-gray-200 font-bold ${isActive("/doctorsteam") ? "text-black font-bold" : "text-gray-200"}`}
            >
              Doctor's Team
            </Link>
          </li>
          <li>
            <Link
              to="/dentalservices"
              className={`hover:text-gray-200 font-bold ${isActive("/dentalservices") ? "text-black font-bold" : "text-gray-200"}`}
            >
              Dental Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`hover:text-gray-200 font-bold ${isActive("/contact") ? "text-black font-bold" : "text-gray-200"}`}
            >
              Contact us
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className={`hover:text-gray-200 font-bold ${isActive("/events") ? "text-black font-bold" : "text-gray-200"}`}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className={`hover:text-gray-200 font-bold ${isActive("/blogs") ? "text-black font-bold" : "text-gray-200"}`}
            >
              Blogs
            </Link>
          </li>
          {/* <li>
            <Link
              to="/bookappointment"
              className={`hover:text-gray-200 font-bold ${isActive("/blogs") ? "text-black font-bold" : "text-gray-200"}`}
            >
              All Doctors
            </Link>
          </li> */}
        </ul>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-screen bg-white text-black z-[9999] transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 shadow-lg`}
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
                className={`hover:text-indigo-500 block ${isActive("/") ? "text-indigo-500 font-bold bg-gray-200 p-2 rounded-lg" : ""}`}
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className={`hover:text-indigo-500 block ${isActive("/aboutus") ? "text-indigo-500 font-bold bg-gray-200 p-2 rounded-lg" : ""}`}
                onClick={toggleMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/doctorsteam"
                className={`hover:text-indigo-500 block ${isActive("/doctorsteam") ? "text-indigo-500 font-bold bg-gray-200 p-2 rounded-lg" : ""}`}
                onClick={toggleMobileMenu}
              >
                Doctor's Team
              </Link>
            </li>
            <li>
              <Link
                to="/dentalservices"
                className={`hover:text-indigo-500 block ${isActive("/dentalservices") ? "text-indigo-500 font-bold bg-gray-200 p-2 rounded-lg" : ""}`}
                onClick={toggleMobileMenu}
              >
                Dental Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`hover:text-indigo-500 block ${isActive("/contact") ? "text-indigo-500 font-bold bg-gray-200 p-2 rounded-lg" : ""}`}
                onClick={toggleMobileMenu}
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className={`hover:text-indigo-500 block ${isActive("/events") ? "text-indigo-500 font-bold bg-gray-200 p-2 rounded-lg" : ""}`}
                onClick={toggleMobileMenu}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className={`hover:text-indigo-500 block ${isActive("/blogs") ? "text-indigo-500 font-bold bg-gray-200 p-2 rounded-lg" : ""}`}
                onClick={toggleMobileMenu}
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
