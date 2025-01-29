import React, { useState, useEffect } from "react";
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

// Image Data
const imagePairs = [
  { before: BeforeImage1, after: AfterImage1 },
  { before: BeforeImage2, after: AfterImage2 },
  { before: BeforeImage3, after: AfterImage3 },
  { before: BeforeImage4, after: AfterImage4 },
  { before: BeforeImage5, after: AfterImage5 },
  { before: BeforeImage6, after: AfterImage6 },
];

// **Component to Display Before & After Images**
const BeforeAfter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePairs.length);
    }, 3000); // Changes every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h1-screen mt-8 bg-white py-8 rounded-lg flex flex-col items-center">
      {/* Header */}
      <h1 className="text-3xl text-blue-900 font-bold text-center mb-8">
        Before and After images of our patients
      </h1>

      {/* Before & After Sections */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full max-w-5xl">
        
        {/* Before Section */}
        <div className="flex flex-col items-center">
          {/* Label */}
          <div className="text-blue-400 font-semibold text-xl mb-2">
            Before
          </div>
          {/* Image Container */}
          <div className="relative w-80 h-60 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
            {imagePairs.map((pair, index) => (
              <img
                key={index}
                src={pair.before}
                alt="Before"
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>

        {/* After Section */}
        <div className="flex flex-col items-center">
          {/* Label */}
          <div className="text-green-700 font-semibold text-xl mb-2">
            After
          </div>
          {/* Image Container */}
          <div className="relative w-80 h-60 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
            {imagePairs.map((pair, index) => (
              <img
                key={index}
                src={pair.after}
                alt="After"
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BeforeAfter;
