import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BlogImage from "../assets/blogImg.jpg"; // Replace with the actual blog image path
import Carousel from "../components/Carousel ";

const Blogs = () => {
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
            src={BlogImage} // Replace with the actual blog image path
            alt="Blogs"
            className="rounded-tl-[3rem] rounded-br-[3rem] shadow-lg w-4/5 sm:w-3/5 mx-auto relative z-10 h-[200px] sm:h-[300px] lg:h-[300px] object-cover"
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
          <h1 className=" sm:text-3xl font-bold text-blue-900 mb-4">
            Explore Our Blogs
          </h1>
          <p className="text-gray-700 mb-4 text-xl leading-relaxed">
            Stay updated with the latest trends, insights, and tips on dental care. Our
            blogs are written by experts to provide you with accurate and valuable
            information.
          </p>
          <p className="text-gray-700 mb-4 text-xl leading-relaxed">
            From preventive care to advanced treatments, explore various topics to
            enhance your knowledge and maintain a healthier smile.
          </p>
          <button className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-3xl shadow-md hover:bg-blue-700 flex items-center gap-2">
            <span>📖</span> Read More
          </button>
        </motion.div>
      </div>

      <Carousel/>
    </section>
  );
};

export default Blogs;