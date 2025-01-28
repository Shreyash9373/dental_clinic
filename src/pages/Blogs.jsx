import React, { useState, useEffect } from "react";
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
    <section className="bg-blue-50 pt-8 pb-12 px-6 sm:px-12 lg:px-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 text-center mb-12">
        Explore Our Blogs
      </h1>

      {/* Carousel Section */}
      <div className="carousel-container overflow-x-auto py-2 scrollbar-hidden">
        {blogs.length === 0 ? (
          <div className="text-center text-gray-500">No blogs available at the moment.</div>
        ) : (
          <div className="carousel-track flex gap-4">
            {[...blogs, ...blogs].map((post, index) => (
              <div
                key={index}
                onClick={() => goToBlogDetail(post)} // Navigate with state
                className="carousel-item bg-white cursor-pointer rounded-lg shadow-md flex-shrink-0 w-full sm:w-[calc(100%/1)] lg:w-[calc(100%/3.7)]"
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
                  <p className="text-gray-600 mt-2 line-clamp-4">
                    {post.description || "No description available."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
