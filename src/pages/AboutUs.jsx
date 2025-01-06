import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import motion and useInView hook
import banner from "../assets/banner.jpg";

const AboutUs = () => {
  // Refs for individual sections
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null); // Ref for Section 3

  // Check if individual sections are in view
  const isSection1InView = useInView(section1Ref, { once: true }); // Animates once when visible
  const isSection2InView = useInView(section2Ref, { once: true });
  const isSection3InView = useInView(section3Ref, { once: true });

  return (
    <div className="bg-white py-10 px-5 md:px-20 lg:px-32 ">
    
      {/* Section 1 */}
      <div
        ref={section1Ref} // Attach ref to this section
        className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mb-20"
      >
        {/* Left Section: Static Image */}
        <div className="flex-shrink-0 rounded-tr-[10rem] rounded-bl-[10rem] overflow-hidden">
          <img
            src={banner}
            alt="Dental Clinic"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>

        {/* Right Section: Animated Content */}
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={isSection1InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left max-w-xl"
        >
          <h2 className="text-blue-800 text-3xl font-bold mb-4">
            Who We Are?
          </h2>
          <p className="text-gray-700 mb-4 text-lg">
            Welcome to{" "}
            <span className="font-bold">Dr. Pakhare Dental Clinic</span>. Our
            team feels honored to provide quality, compassionate dental care for
            our patients. We strive to build lasting relationships with our
            Dr. Pakhare Dental Clinic patients by offering honest guidance and
            modern dental care. This means Dr. Pakhare takes the time to listen
            to your needs and only suggests necessary treatments for you and
            your family. We offer different sedation types depending on your
            anxiety level. If you’re looking for a friendly dentist in Pune
            region, call us today to schedule an appointment!
          </p>
        </motion.div>
      </div>

      {/* Section 2 */}
      <div
        ref={section2Ref} // Attach ref to this section
        className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mb-20"
      >
        {/* Left Section: Animated Content */}
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={isSection2InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left max-w-xl"
        >
          <h2 className="text-blue-800 text-3xl font-bold mb-4">
            Why Dentist Care?
          </h2>
          <p className="text-gray-700 mb-4 text-lg">
            Dr. Pakhare Dental Clinic is one of the leading dental healthcare
            clinics in the Pune today. Started with a vision to perform and
            deliver the best dental treatments available in Noida, while
            creating a luxury dental experience, like non-other, Dr. Pakhare
            Dental Clinic has now become the reason behind several hundred
            smiles, and counting.
          </p>
          <p className="text-gray-700 mb-4 text-lg">
            At Dr. Pakhare Dental Clinic – we stand for perfection and thus,
            stop at nothing to ensure that you receive the best possible
            treatment options to rectify the issues being faced. From advanced
            whitening to complete mouth rehabilitation – our hi-tech aided
            services will surely leave you with a smile and an impeccable
            experience
          </p>
        </motion.div>

        {/* Right Section: Static Image */}
        <div className="flex-shrink-0 rounded-tr-[10rem] rounded-bl-[10rem] overflow-hidden">
          <img
            src={banner}
            alt="Dental Clinic"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div
        ref={section3Ref} // Attach ref to this section
        className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mb-20"
      >
        {/* Left Section: Static Image */}
        <div className="flex-shrink-0 rounded-tr-[10rem] rounded-bl-[10rem] overflow-hidden">
          <img
            src={banner}
            alt="Dental Clinic"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>

        {/* Right Section: Animated Content */}
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={isSection3InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left max-w-xl"
        >
          <h2 className="text-blue-800 text-3xl font-bold mb-4">
            Excellence in Dental Care
          </h2>
          <p className="text-gray-700 mb-4 text-lg">
            At <span className="font-bold">Dr. Pakhare Dental Clinic</span>, we
            take pride in delivering personalized dental care with advanced
            technology and techniques. Your health, comfort, and satisfaction
            are our top priorities. We’re committed to giving you a bright smile
            you can be proud of.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;

