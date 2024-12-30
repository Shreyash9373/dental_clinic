import React from "react";
import banner from '../assets/banner.jpg';

const AboutUs = () => {
  return (
    <div className="bg-white py-10 px-5 md:px-20 lg:px-32">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mb-20">
        {/* Left Section: Image */}
        <div className="flex-shrink-0 rounded-tr-[10rem] rounded-bl-[10rem] overflow-hidden">
          <img
            src={banner}
            alt="Dental Clinic"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>

        {/* Right Section: Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h2 className="text-blue-800 text-3xl font-bold mb-4">
            Who We Are?
          </h2>
          <p className="text-gray-700 mb-4 text-lg">
            Welcome to{" "}
            <span className="font-bold">
              Dr. Pakhare Dental Clinic
            </span>
            . Our team feels honored to provide quality, compassionate dental
            care for our patients. We strive to build lasting relationships
            with our Dr. Pakhare Dental Clinic patients by
            offering honest guidance and modern dental care.
            This means Dr. Pakhare takes the time to listen to your needs and
            only suggests necessary treatments for you and your family. We offer
            different sedation types depending on your anxiety level.
            If you’re looking for a friendly dentist in Pune region,
            call us today to schedule an appointment!
          </p>
        </div>
      </div>


      {/* Section 2 */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">

        {/* Left Section: Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h2 className="text-blue-800 text-3xl font-bold mb-4">
          Why Dentist Care ?
          </h2>
          <p className="text-gray-700 mb-4 text-lg">
          Dr. Pakhare Dental Clinic is one of the leading dental healthcare clinics in the Pune today. Started with a vision to perform and deliver the best dental treatments available in Noida, while creating a luxury dental experience, like non-other, Dr. Pakhare Dental Clinic has now become the reason behind several hundred smiles, and counting. 
          </p>
          <p className="text-gray-700 mb-4 text-lg">
          At Dr. Pakhare Dental Clinic – we stand for perfection and thus, stop at nothing to ensure that you receive the best possible treatment options to rectify the issues being faced. From advanced whitening to complete mouth rehabilitation – our hi-tech aided services will surely leave you with a smile and an impeccable experience
          </p>
        </div>

        {/* Right Section: Image */}
        <div className="flex-shrink-0 rounded-tr-[10rem] rounded-bl-[10rem] overflow-hidden">
          <img
            src={banner} // Replace with your actual image path
            alt="Dental Clinic"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
