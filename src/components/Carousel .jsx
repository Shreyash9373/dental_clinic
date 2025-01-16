import React from "react";
import { motion } from "framer-motion";
import banner from "../assets/banner.jpg";

const Carousel = ({ blogs = [] }) => {
  console.log("Blogs from carousel:", blogs);

  if (!blogs || blogs.length === 0) {
    return (
      <div className="carousel-container w-full py-8 text-center text-gray-500">
        No blogs available at the moment.
      </div>
    );
  }

  return (
    <div className="carousel-container overflow-hidden relative w-full py-8">
      <motion.div
        className="carousel-track flex w-full gap-4"
        initial={{ x: 0 }}
        animate={{
          x: ["0%", "-100%"], // Animate the slides to move left
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity, // Infinite loop
        }}
      >
        {[...blogs, ...blogs].map((post, index) => (
          <div
            key={index}
            className="carousel-item bg-white rounded-lg shadow-md flex-shrink-0 w-full sm:w-[calc(100%/1)] lg:w-[calc(100%/3)]"
          >
            <img
              src={post.image || banner} // Fallback to default banner if no image
              alt={post.title ? `Image for ${post.title}` : "Blog Post Image"} // Better alt text for accessibility
              className="w-full h-[200px] sm:h-[250px] object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-blue-800">{post.title || "Untitled Post"}</h2>
              <p className="text-gray-600 mt-2">
                {post.description || "No description available."}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
