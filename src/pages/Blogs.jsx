import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import banner from "../assets/banner.jpg";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]); // State for blog data
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for errors
  const navigate = useNavigate(); // Initialize navigate
  
  const goToBlogDetail = (blog) => {
    navigate(`/blogs/${blog._id}`, { state: { blog } }); // Pass event data as state
  };

  // Fetch blogs data
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/patient/get-blog");
        console.log("Fetched blogs:", response.data);
        setBlogs(response.data.data); // Save fetched blogs into state
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to fetch blogs.");
      } finally {
        setLoading(false); // Stop loading regardless of success or failure
      }
    };

    fetchBlogs();
  }, []); // Run only once on component mount

  // Display loading or error messages
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="sm:text-3xl font-bold text-blue-900 mb-10 text-center">
        Explore Our Blogs
      </h1>

      {/* Carousel Section */}
      <div className="carousel-container overflow-hidden relative w-full py-8">
        {blogs.length === 0 ? (
          <div className="text-center text-gray-500">No blogs available at the moment.</div>
        ) : (
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
                onClick={() => goToBlogDetail(post)} // Navigate with state
                className="carousel-item bg-white rounded-lg shadow-md flex-shrink-0 w-full sm:w-[calc(100%/1)] lg:w-[calc(100%/3)]"
              >
                <img
                  src={post.image || banner} // Fallback to default banner if no image
                  alt={post.title ? `Image for ${post.title}` : "Blog Post Image"} // Better alt text for accessibility
                  className="w-full h-[200px] sm:h-[250px] object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-blue-800">
                    {post.title || "Untitled Post"}
                  </h2>
                  <p className="text-gray-600 mt-2">
                    {post.description || "No description available."}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
