import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    // <div className="bg-[#f5faff] py-16">
    <div className="py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Page Title */}
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-12">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-blue-100 shadow-xl rounded-xl p-8">
            <h3 className="text-2xl  font-bold mb-6 text-blue-700">
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-lg font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your message"
                  rows="5"
                  required
                ></textarea>
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
