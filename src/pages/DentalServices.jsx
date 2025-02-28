import React, { useState, useEffect } from "react";
import ServiceSection from "../components/Service";
import { motion } from "framer-motion"; // For animations

import Service6 from "../assets/service6.jpg";
import Service7 from "../assets/service7.jpg";
import Service8 from "../assets/service8.jpg";

const MicroscopePrecisionSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <section
      className="bg-white py-16 px-4 sm:px-6 lg:px-8 transition-all delay-9000"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: "-100%" }} // Content animates from left
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }} // Added delay for content section
          className="lg:w-1/2 text-left"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
            Microscope for High Precision Procedures
          </h2>
          <p className="text-gray-700 mb-4 text-xl leading-relaxed">
            Our advanced dental microscopes ensure the highest level of precision for complex
            procedures. With enhanced magnification and lighting, we can perform treatments with
            greater accuracy, minimizing risks and improving outcomes. This technology is essential
            for root canals, microsurgeries, and other intricate procedures.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} // Image animates from right
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }} // Added delay for image section
          className="relative lg:w-1/2 flex justify-center"
        >
          {/* Decorative elements */}
          <motion.div
            className="absolute bg-blue-500 rounded-full"
            style={{
              width: "6rem",
              height: "6rem",
              left: "10%",
              top: "10%",
            }}
            animate={{
              x: (mousePosition.x - window.innerWidth / 2) * 0.02,
              y: (mousePosition.y - window.innerHeight / 2) * 0.02,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          ></motion.div>
          <motion.div
            className="absolute bg-yellow-400 rounded-full"
            style={{
              width: "4rem",
              height: "4rem",
              right: "15%",
              bottom: "15%",
            }}
            animate={{
              x: (mousePosition.x - window.innerWidth / 2) * -0.02,
              y: (mousePosition.y - window.innerHeight / 2) * -0.02,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          ></motion.div>

          {/* Image with higher z-index */}
          <img
            src={Service8} // Replace with the actual microscope image path
            alt="Microscope for precision procedures"
            className="rounded-tl-[3rem] rounded-br-[3rem] shadow-lg w-4/5 sm:w-3/5 mx-auto relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

const RootCanalTreatmentSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8" onMouseMove={handleMouseMove}>
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center gap-8">
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: "100%" }} // Content section animates from left
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }} // Added delay for content section
          className="w-full lg:w-1/2 text-left"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
            Root Canal Treatment
          </h2>
          <p className="text-gray-700 mb-4 text-xl leading-relaxed">
            A root canal is a treatment to repair and save a badly damaged or infected tooth. This
            procedure removes the damaged pulp, cleans the tooth, and seals it, providing relief
            from pain and preventing further decay.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} // Image section animates from right
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }} // Added delay for image section
          className="relative w-full lg:w-1/2 flex justify-center"
        >
          {/* Interactive Decorative Elements */}
          <motion.div
            className="absolute bg-blue-500 rounded-full"
            style={{
              width: "6rem",
              height: "6rem",
              left: "10%",
              top: "10%",
            }}
            animate={{
              x: (mousePosition.x - window.innerWidth / 2) * 0.02,
              y: (mousePosition.y - window.innerHeight / 2) * 0.02,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          ></motion.div>
          <motion.div
            className="absolute bg-yellow-400 rounded-full"
            style={{
              width: "4rem",
              height: "4rem",
              right: "15%",
              bottom: "15%",
            }}
            animate={{
              x: (mousePosition.x - window.innerWidth / 2) * -0.02,
              y: (mousePosition.y - window.innerHeight / 2) * -0.02,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          ></motion.div>

          {/* Image with higher z-index */}
          <img
            src={Service6} // Replace with the actual image path
            alt="Root Canal Treatment"
            className="rounded-tl-[3rem] rounded-br-[3rem] shadow-lg w-4/5 sm:w-3/5 mx-auto relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

const FullMouthRehabilitationSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <section
      className="bg-white py-16 px-4 sm:px-6 lg:px-8 transition-all delay-9000"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: "-100%" }} // Content animates from left
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }} // Added delay for content section
          className="lg:w-1/2 text-left"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
            Full Mouth Rehabilitation
          </h2>
          <p className="text-gray-700 mb-4 text-xl leading-relaxed">
            Full mouth rehabilitation is a comprehensive treatment designed to restore the function,
            health, and aesthetics of your smile. Combining various dental procedures, it addresses
            issues such as worn teeth, missing teeth, and misaligned bites. Our customized approach
            ensures a complete transformation of your oral health and appearance.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} // Image animates from right
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }} // Added delay for image section
          className="relative lg:w-1/2 flex justify-center"
        >
          {/* Decorative elements */}
          <motion.div
            className="absolute bg-blue-500 rounded-full"
            style={{
              width: "6rem",
              height: "6rem",
              left: "10%",
              top: "10%",
            }}
            animate={{
              x: (mousePosition.x - window.innerWidth / 2) * 0.02,
              y: (mousePosition.y - window.innerHeight / 2) * 0.02,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          ></motion.div>
          <motion.div
            className="absolute bg-yellow-400 rounded-full"
            style={{
              width: "4rem",
              height: "4rem",
              right: "15%",
              bottom: "15%",
            }}
            animate={{
              x: (mousePosition.x - window.innerWidth / 2) * -0.02,
              y: (mousePosition.y - window.innerHeight / 2) * -0.02,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          ></motion.div>

          {/* Image with higher z-index */}
          <img
            src={Service7} // Replace with the actual image path for full mouth rehabilitation
            alt="Full Mouth Rehabilitation"
            className="rounded-tl-[3rem] rounded-br-[3rem] shadow-lg w-4/5 sm:w-3/5 mx-auto relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

const DentalServices = () => {
  return (
    <>
      <ServiceSection />

      <MicroscopePrecisionSection />
      <RootCanalTreatmentSection />
      <FullMouthRehabilitationSection />
    </>
  );
};

export default DentalServices;
