// import React, { useEffect, useState } from "react";
// import banner from '../assets/banner.jpg';

// const Carousel = () => {
//   const posts = [
//     {
//       id: 1,
//       title: "Blog Post 1",
//       description: "Description for Blog Post 1",
//       image: banner,
//     },
//     {
//       id: 2,
//       title: "Blog Post 2",
//       description: "Description for Blog Post 2",
//       image: banner,
//     },
//     {
//       id: 3,
//       title: "Blog Post 3",
//       description: "Description for Blog Post 3",
//       image: banner,
//     },
//     {
//       id: 4,
//       title: "Blog Post 4",
//       description: "Description for Blog Post 4",
//       image: banner,
//     },
//     {
//       id: 5,
//       title: "Blog Post 5",
//       description: "Description for Blog Post 5",
//       image: banner,
//     },
//     {
//       id: 6,
//       title: "Blog Post 6",
//       description: "Description for Blog Post 6",
//       image: banner,
//     },
//     {
//       id: 7,
//       title: "Blog Post 7",
//       description: "Description for Blog Post 7",
//       image: banner,
//     },
//     {
//       id: 8,
//       title: "Blog Post 8",
//       description: "Description for Blog Post 8",
//       image: banner,
//     },
//     {
//       id: 9,
//       title: "Blog Post 9",
//       description: "Description for Blog Post 9",
//       image: banner,
//     },
//     {
//       id: 10,
//       title: "Blog Post 10",
//       description: "Description for Blog Post 10",
//       image: banner,
//     },
//     {
//       id: 11,
//       title: "Blog Post 11",
//       description: "Description for Blog Post 11",
//       image: banner,
//     },
//     {
//       id: 12,
//       title: "Blog Post 12",
//       description: "Description for Blog Post 12",
//       image: banner,
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(true);

//   const totalPosts = posts.length;

//   // Duplicate the first 3 posts at the end to create an infinite loop effect
//   const extendedPosts = [...posts, ...posts.slice(0, 3)];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsAnimating(true);
//       setCurrentIndex((prevIndex) => prevIndex + 1);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     // Reset the position when reaching the duplicate posts
//     if (currentIndex === totalPosts) {
//       const timeout = setTimeout(() => {
//         setIsAnimating(false);
//         setCurrentIndex(0);
//       }, 700); // Match the duration of the transition animation

//       return () => clearTimeout(timeout);
//     }
//   }, [currentIndex, totalPosts]);

//   return (
//     <div className="relative w-full overflow-hidden mt-10">
//       {/* Carousel Wrapper */}
//       <div
//         className={`flex transition-transform ${
//           isAnimating ? "duration-700 ease-in-out" : ""
//         }`}
//         style={{
//           transform: `translateX(-${currentIndex * 33.33}%)`,
//         }}
//       >
//         {extendedPosts.map((post, index) => (
//           <div
//             key={index}
//             className="min-w-[33.33%] flex-shrink-0 p-4 border rounded-lg shadow-md bg-white"
//           >
//             {/* Image Section */}
//             <img
//               src={post.image}
//               alt={post.title}
//               className="w-full h-40 object-cover rounded-t-lg"
//             />
//             {/* Title and Description */}
//             <div className="p-4">
//               <h3 className="text-lg font-bold">{post.title}</h3>
//               <p className="text-sm text-gray-600">{post.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;






import React from "react";
import { motion } from "framer-motion";
import banner from '../assets/banner.jpg';

const posts = [
  {
    id: 1,
    title: "The Importance of Regular Dental Checkups",
    description: "Learn why routine dental visits are vital for your oral health.",
    image: banner, // Replace with actual image
  },
  {
    id: 2,
    title: "Top 5 Tips for a Brighter Smile",
    description: "Discover expert tips to keep your smile shining.",
    image: banner, // Replace with actual image
  },
  {
    id: 3,
    title: "Understanding Advanced Dental Treatments",
    description: "Explore the latest advancements in dental care.",
    image: banner, // Replace with actual image
  },
  {
    id: 4,
    title: "How to Prevent Tooth Decay",
    description: "Simple yet effective ways to maintain healthy teeth.",
    image: banner, // Replace with actual image
  },
  {
    id: 5,
    title: "How to Prevent Tooth Decay",
    description: "Simple yet effective ways to maintain healthy teeth.",
    image: banner, // Replace with actual image
  },
  {
    id: 6,
    title: "How to Prevent Tooth Decay",
    description: "Simple yet effective ways to maintain healthy teeth.",
    image: banner, // Replace with actual image
  },
  {
    id: 7,
    title: "How to Prevent Tooth Decay",
    description: "Simple yet effective ways to maintain healthy teeth.",
    image: banner, // Replace with actual image
  },
  {
    id: 8,
    title: "How to Prevent Tooth Decay",
    description: "Simple yet effective ways to maintain healthy teeth.",
    image: banner, // Replace with actual image
  },
  {
    id: 9,
    title: "How to Prevent Tooth Decay",
    description: "Simple yet effective ways to maintain healthy teeth.",
    image: banner, // Replace with actual image
  },
  {
    id: 10,
    title: "How to Prevent Tooth Decay",
    description: "Simple yet effective ways to maintain healthy teeth.",
    image: banner, // Replace with actual image
  },
];

const Carousel = () => {
  return (
    <div className="carousel-container overflow-hidden relative w-full py-8">
      <motion.div
        className="carousel-track flex w-full gap-4"
        initial={{ x: 0 }}
        animate={{
          x: ["0%", "-100%"], // Animates the slides to the left
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity, // Infinite loop
        }}
        style={{ display: "flex" }}
      >
        {[...posts, ...posts].map((post, index) => (
          <div
            key={index}
            className="carousel-item bg-white rounded-lg shadow-md flex-shrink-0 w-full sm:w-[calc(100%/1)] lg:w-[calc(100%/3)]" // Use Tailwind for responsiveness
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[200px] sm:h-[250px] object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-blue-800">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
