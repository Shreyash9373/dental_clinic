import React, { useRef, useState, useEffect } from "react";
import BeforeImage1 from "../assets/BeforeAfter/before_1.jpg";
import AfterImage1 from "../assets/BeforeAfter/after_1.jpg";
import BeforeImage2 from "../assets/BeforeAfter/before_2.jpg";
import AfterImage2 from "../assets/BeforeAfter/after_2.jpg";
import BeforeImage3 from "../assets/BeforeAfter/before_3.jpg";
import AfterImage3 from "../assets/BeforeAfter/after_3.jpg";
import BeforeImage4 from "../assets/BeforeAfter/before_4.jpg";
import AfterImage4 from "../assets/BeforeAfter/after_4.jpg";
import BeforeImage5 from "../assets/BeforeAfter/before_5.jpg";
import AfterImage5 from "../assets/BeforeAfter/after_5.jpg";
import BeforeImage6 from "../assets/BeforeAfter/before_6.jpg";
import AfterImage6 from "../assets/BeforeAfter/after_6.jpg";
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";

// Individual BeforeAfter Component
const MBeforeAfter = ({ beforeImage, afterImage }) => {
  const [isAfterVisible, setIsAfterVisible] = useState(false);

  // Toggle between "Before" and "After" images
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAfterVisible((prev) => !prev); // Toggle visibility every 3 seconds
    }, 3000); // 3 seconds interval
    return () => clearInterval(interval); // Clear interval when the component unmounts
  }, []);

  return (
    //rounded-tr-[6rem] rounded-bl-[6rem]
    <div className="relative w-80 h-60 rounded-2xl overflow-hidden flex-shrink-0 ">
      {/* Before Image */}
      <img
        src={beforeImage}
        alt="Before"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isAfterVisible ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* After Image */}
      <img
        src={afterImage}
        alt="After"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isAfterVisible ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Overlay Labels */}
      <div
        className={`absolute top-4 left-4 bg-blue-700 text-white text-sm px-4 py-2 rounded-full shadow-lg transition-opacity duration-1000 ${
          isAfterVisible ? "opacity-0" : "opacity-100"
        }`}
      >
        Before
      </div>
      <div
        className={`absolute top-4 right-4 bg-green-700 text-white text-sm px-4 py-2 rounded-full shadow-lg transition-opacity duration-1000 ${
          isAfterVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        After
      </div>
    </div>
  );
};

// Multi BeforeAfter Component
const BeforeAfter = () => {
  const scrollContainerRef = useRef(null);
  const imagePairs = [
    { before: BeforeImage1, after: AfterImage1 },
    { before: BeforeImage2, after: AfterImage2 },
    { before: BeforeImage3, after: AfterImage3 },
    { before: BeforeImage4, after: AfterImage4 },
    { before: BeforeImage5, after: AfterImage5 },
    { before: BeforeImage6, after: AfterImage6 },
  ];

  // Scroll function
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350; // Adjust scroll amount as needed
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h1-screen mt-2 mb-2 bg-white py-8 rounded-lg">
      {/* Header */}
      <h1 className="text-3xl text-blue-900 font-bold text-center mb-8">
        Before and After images of our patients
      </h1>
      {/* Horizontal Scrollable Section */}
      <div className="relative px-6 py-4">
        {/* Scroll Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none z-10"
        >
          <IoArrowBackOutline />
        </button>

        {/* Scrollable Container */}
        <div
          className="overflow-x-auto flex gap-6 scrollbar-hide"
          ref={scrollContainerRef}
        >
          {imagePairs.map((pair, index) => (
            <MBeforeAfter
              key={index}
              beforeImage={pair.before}
              afterImage={pair.after}
            />
          ))}
        </div>

        {/* Scroll Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none z-10"
        >
          <IoArrowForwardOutline />
        </button>
        
      </div>
    </div>
  );
};

export default BeforeAfter;
