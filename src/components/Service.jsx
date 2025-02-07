import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // For animations
import Service1 from "../assets/service1.jpg"; // Adjust the path as needed for your project
import Service2 from "../assets/service2.jpg"; // Replace with the second image
import Service3 from "../assets/service3.jpg"; // Replace with the second image
import Service4 from "../assets/service4.jpg"; // Replace with the second image
import Service5 from "../assets/service5.jpg"; // Replace with the second image

const ImplantDentistrySection = () => {
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
            Implant Dentistry
          </h2>
          <p className="text-gray-700 mb-4 text-xl leading-relaxed">
            Dental implants are a popular and effective solution for replacing missing teeth. A titanium post is surgically inserted into the jawbone to act as a tooth root, and a crown is placed on top to resemble a natural tooth. Implants look, feel, and function like natural teeth.
            Tooth Implants not only look and feel like your natural teeth but also
            function like natural teeth.
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
            src={Service2}
            alt="Dental service"
            className="rounded-tl-[3rem] rounded-br-[3rem] shadow-lg w-4/5 sm:w-3/5 mx-auto relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

const CavityProtectionSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  // Delay the animations once the component is mounted
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true); // Trigger visibility after a delay
    }, 500); // 500ms delay before the animations start
    return () => clearTimeout(timeoutId); // Clean up the timeout if the component unmounts
  }, []);

  return (
    <section
      className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center gap-8">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: "-100%" }} // Image section from left
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: "-100%" }}
          transition={{ duration: 0.8 }}
          className="relative w-full lg:w-1/2 order-1 lg:order-2 flex justify-center"
        >
          <img
            src={Service1} // Replace with the actual image path
            alt="Cavity Protection"
            className="rounded-tl-[3rem] rounded-br-[3rem] shadow-lg w-4/5 sm:w-3/5 mx-auto relative z-10"
          />
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
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: "100%" }} // Content section from right
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-left order-2 lg:order-1"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
            Cavity Protection
          </h2>
          <p className="text-gray-700 mb-4 text-xl leading-relaxed">
            Dental cavities can be prevented with good oral hygiene, regular dental visits, and treatments like sealants and fluoride. Cavities occur when bacteria produce acids that damage enamel. Early treatment is essential to avoid pain and infections. Prevention is better than treatment and involves proper dental care and professional cleanings.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const CosmeticDentistrySection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  // Delay the animations once the component is mounted
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true); // Trigger visibility after a delay
    }, 500); // 500ms delay before the animations start
    return () => clearTimeout(timeoutId); // Clean up the timeout if the component unmounts
  }, []);

  return (
    <section
      className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center gap-8">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: "-100%" }} // Image section animates from left
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: "-100%" }}
          transition={{ duration: 0.8 }}
          className="relative w-full lg:w-1/2 order-1 lg:order-2 flex justify-center"
        >
          <img
            src={Service3} // Replace with the actual image path
            alt="Cosmetic Dentistry"
            className="rounded-tl-[3rem] rounded-br-[3rem] shadow-lg w-4/5 sm:w-3/5 mx-auto relative z-10"
          />
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
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: "100%" }} // Content section animates from right
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-left order-2 lg:order-1"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
            Cosmetic Dentistry
          </h2>
          <p className="text-gray-700 mb-4 text-xl leading-relaxed">
            Tooth-colored (composite) fillings are made from a durable resin material that mimics natural teeth. They are molded to the tooth's shape and set with blue light, offering a long-lasting and aesthetic alternative to silver amalgam fillings.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const TeethWhiteningSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <section
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: "-100%" }} // Content animates from left
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }} // Added delay for content animation
          className="w-full lg:w-1/2 text-left"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
            Teeth Whitening
          </h2>
          <p className="text-gray-700 mb-4 text-xl leading-relaxed">
            Teeth whitening is a safe, effective way to brighten your smile, especially for stains caused by smoking, coffee, or certain foods. While some tooth discoloration can be prevented, other causes are beyond control.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} // Image animates with scale effect
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }} // Added delay for image animation
          className="relative w-full lg:w-1/2 flex justify-center"
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
            src={Service4}
            alt="Teeth Whitening"
            className="rounded-tl-[3rem] rounded-br-[3rem] shadow-lg w-4/5 sm:w-3/5 mx-auto relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

const OrthodonticTreatmentSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <section
      className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center gap-8">
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: "100%" }} // Content section animates from left
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }} // Added delay for content section
          className="w-full lg:w-1/2 text-left"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
            Orthodontic Treatment
          </h2>
          <p className="text-gray-700 mb-4 text-xl leading-relaxed">
            An orthodontist diagnoses, prevents, and treats teeth and jaw irregularities for all ages. They address issues like bad bites and gaps between teeth. Consult an orthodontist for specialized care.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} // Image section animates from right
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }} // Added delay for image section
          className="relative w-full lg:w-1/2 flex justify-center"
        >
          <img
            src={Service5} // Replace with the actual image path
            alt="Orthodontic Treatment"
            className="rounded-tl-[3rem] rounded-br-[3rem] shadow-lg w-4/5 sm:w-3/5 mx-auto relative z-10"
          />
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
        </motion.div>
      </div>
    </section>
  );
};

const ServiceSection = () => {
  return (
    <div>
      <CavityProtectionSection />
      <ImplantDentistrySection />
      <CosmeticDentistrySection />
      <TeethWhiteningSection />
      <OrthodonticTreatmentSection />   
    </div>
  );
};

export default ServiceSection;