import React from "react";
import { useForm } from "react-hook-form"; // Import useForm hook
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

const ContactUs = () => {
  const {
    register, // For input field registration
    handleSubmit, // For handling form submission
    formState: { errors }, // For handling validation errors
    reset, // To reset the form
  } = useForm();

  const onSubmit = async(data) => {
    try {
      console.log("Form submitted: ", data);
    const response = await axios.post('http://localhost:4000/api/patient/save-enquiry', data);
    console.log(response.data);
    //alert("Thank you for contacting us! We will get back to you soon.");
    reset(); // Reset form after submission
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Page Title */}
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-12">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-blue-100 shadow-xl rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-blue-700">
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters long",
                    },
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[+]?[0-9]{10,15}$/,
                      message: "Please enter a valid phone number",
                    },
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your phone number"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters long",
                    },
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your message"
                  rows="5"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information and Map */}
          <div className="flex flex-col justify-between bg-blue-100 shadow-xl rounded-xl">
            {/* Contact Information */}
            <div className="p-8 space-y-6">
              <h3 className="text-2xl font-bold text-center sm:text-left text-blue-700">
                Contact Information
              </h3>
              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-center space-x-4 font-semibold">
                  <FontAwesomeIcon icon={faLocationDot} className="text-blue-600 h-6 w-6" />
                  <span className="text-gray-700 text-sm sm:text-base">
                    Shop No 5, Balaji Towers, Mahatma Phule Chowk, Maharashtra 410501
                  </span>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4 font-semibold">
                  <FontAwesomeIcon icon={faPhoneAlt} className="text-blue-600 h-6 w-6" />
                  <span className="text-gray-700 text-sm sm:text-base">
                    +91 98225 59274
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4 font-semibold">
                  <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 h-6 w-6" />
                  <span className="text-gray-700 text-sm sm:text-base">
                    drpakhare@gmail.com
                  </span>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="w-full h-[350px] sm:h-[400px] lg:h-[450px] xl:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.825039706064!2d73.86232729999999!3d18.7613505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ca1e2ce59b4f%3A0x42f7576329eac5a!2sPakhare%20Dental%20Clinic%20and%20Implant%20Centre!5e0!3m2!1sen!2sin!4v1735283472276!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
                referrerpolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
