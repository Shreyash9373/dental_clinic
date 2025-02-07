import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import motion and useInView hook
import banner from "../assets/banner.jpg";
import pakhre from "../assets/pakhre2.jpg"
import pakhre1 from "../assets/pakhre1.jpg"
import pakhre2 from "../assets/pakhre3.jpg"

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
    <div className="flex flex-col items-center bg-white py-10 px-5 md:px-20 lg:px-32 overflow-hidden">

      {/* Section 1 */}
      <div
        ref={section1Ref} // Attach ref to this section
        className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mb-20"
      >
        {/* Left Section: Static Image */}
        <div className="flex-shrink-0 w-72 h-[28rem] rounded-tr-[6rem] rounded-bl-[6rem] overflow-hidden">
          <img
            src={pakhre1}
            alt="Dental Clinic"
            className="w-full h-full object-cover"
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
          <p className="text-gray-700 mb-4 text-xl">
            Welcome to <span className="font-bold">Dr. Pakhare Dental Clinic</span>, where we provide quality, compassionate dental care. We build lasting relationships by offering honest guidance and modern treatments tailored to your needs. We also provide sedation options for anxiety. Call us to schedule an appointment in Pune!
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
          <p className="text-gray-700 mb-4 text-xl">
            <span className="font-bold">Dr. Pakhare Dental Clinic</span> in Pune provides top-quality dental care with advanced treatments and a luxury experience. From teeth whitening to full mouth rehabilitation, we ensure the best solutions for a perfect smile.
          </p>
        </motion.div>

        {/* Right Section: Static Image */}
        {/* <div className="flex-shrink-0 rounded-tr-[10rem] rounded-bl-[10rem] overflow-hidden ">
          <img
            src={pakhre}
            alt="Dental Clinic"
            className="w-full max-w-md  lg:max-w-lg"
          />
        </div> */}
        <div className="flex-shrink-0 w-72 h-[28rem] rounded-tr-[6rem] rounded-bl-[6rem] overflow-hidden">
            <img
              src={pakhre}
              alt="Dental Clinic"
              className="w-full h-full object-cover"
            />
        </div>
      </div>  

      {/* Section 3 */}
      <div
        ref={section3Ref} // Attach ref to this section
        className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mb-20"
      >
        {/* Left Section: Static Image */}
        <div className="flex-shrink-0 w-72 h-[28rem] rounded-tr-[6rem] rounded-bl-[6rem] overflow-hidden">
          <img
            src={pakhre2}
            alt="Dental Clinic"
            className="w-full h-full object-cover"
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
          <p className="text-gray-700 mb-4 text-xl">
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

