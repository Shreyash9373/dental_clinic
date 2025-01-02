import React, { useEffect, useState } from "react";
import banner from '../assets/banner.jpg';

const Carousel = () => {
  const posts = [
    {
      id: 1,
      title: "Blog Post 1",
      description: "Description for Blog Post 1",
      image: banner,
    },
    {
      id: 2,
      title: "Blog Post 2",
      description: "Description for Blog Post 2",
      image: banner,
    },
    {
      id: 3,
      title: "Blog Post 3",
      description: "Description for Blog Post 3",
      image: banner,
    },
    {
      id: 4,
      title: "Blog Post 4",
      description: "Description for Blog Post 4",
      image: banner,
    },
    {
      id: 5,
      title: "Blog Post 5",
      description: "Description for Blog Post 5",
      image: banner,
    },
    {
      id: 6,
      title: "Blog Post 6",
      description: "Description for Blog Post 6",
      image: banner,
    },
    {
      id: 7,
      title: "Blog Post 7",
      description: "Description for Blog Post 7",
      image: banner,
    },
    {
      id: 8,
      title: "Blog Post 8",
      description: "Description for Blog Post 8",
      image: banner,
    },
    {
      id: 9,
      title: "Blog Post 9",
      description: "Description for Blog Post 9",
      image: banner,
    },
    {
      id: 10,
      title: "Blog Post 10",
      description: "Description for Blog Post 10",
      image: banner,
    },
    {
      id: 11,
      title: "Blog Post 11",
      description: "Description for Blog Post 11",
      image: banner,
    },
    {
      id: 12,
      title: "Blog Post 12",
      description: "Description for Blog Post 12",
      image: banner,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const totalPosts = posts.length;

  // Duplicate the first 3 posts at the end to create an infinite loop effect
  const extendedPosts = [...posts, ...posts.slice(0, 3)];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Reset the position when reaching the duplicate posts
    if (currentIndex === totalPosts) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(0);
      }, 700); // Match the duration of the transition animation

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, totalPosts]);

  return (
    <div className="relative w-full overflow-hidden mt-10">
      {/* Carousel Wrapper */}
      <div
        className={`flex transition-transform ${
          isAnimating ? "duration-700 ease-in-out" : ""
        }`}
        style={{
          transform: `translateX(-${currentIndex * 33.33}%)`,
        }}
      >
        {extendedPosts.map((post, index) => (
          <div
            key={index}
            className="min-w-[33.33%] flex-shrink-0 p-4 border rounded-lg shadow-md bg-white"
          >
            {/* Image Section */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            {/* Title and Description */}
            <div className="p-4">
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;