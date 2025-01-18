import React from "react";
import { useLocation } from "react-router-dom";

const blogDetail = () => {
  const location = useLocation();
  const { blog } = location.state || {}; // Get blog data from state

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        <p>No blog data found. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
  {/* blog Header */}
  <div className="relative w-full h-64 sm:h-80 md:h-[400px] rounded-lg mb-8 bg-gray-200 flex items-center justify-center overflow-hidden">
    <img
      src={blog.image || "placeholder.jpg"}
      alt={blog.title || "blog"}
      className="object-contain w-full rounded-md h-full"
    />
    <div className="absolute bottom-0 left-0 w-full  bg-white bg-opacity-70 py-2 px-4">
      <h1 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        {blog.title}
      </h1>
    </div>
  </div>

      {/* blog Details */}
      <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 md:p-10">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-4">
            blog Details
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <strong className="text-gray-700">Date:</strong>{" "}
              <span className="text-gray-800">{blog.date || "TBD"}</span>
            </div>
            <div>
              <strong className="text-gray-700">Time:</strong>{" "}
              <span className="text-gray-800">{blog.time || "TBD"}</span>
            </div>
            <div>
              <strong className="text-gray-700">Location:</strong>{" "}
              <span className="text-gray-800">{blog.location || "TBD"}</span>
            </div>
          </div>
        </div>

        {/* blog Description */}
        <div className="mb-6">
          <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2">
            Description
          </h3>
          <p className="text-gray-700">
            {blog.description || "No description available."}
          </p>
        </div>

        {/* Extra Image Section (optional) */}
        {/* <div className="flex justify-center mt-6">
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="rounded-lg shadow-md max-w-full h-auto sm:w-[70%] md:w-[50%]"
            />
          )}
        </div> */}
      </div>
    </div>
  );
};

export default blogDetail;
