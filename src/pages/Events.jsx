import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const [events, setEvents] = useState([]); // State to store events data
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track errors
  const [currentIndex, setCurrentIndex] = useState(0); // State for current slide
  const [itemsPerPage, setItemsPerPage] = useState(3); // State for items per page
  const [totalSlides, setTotalSlides] = useState(0); // State for total slides
  const navigate = useNavigate(); // Initialize navigate

  // Fetch events data from the API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/patient/get-event");
        setEvents(response.data.data); // Save fetched events into state
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Failed to fetch events.");
      } finally {
        setLoading(false); // Stop loading regardless of success or failure
      }
    };

    fetchEvents();
  }, []); // Run only once on component mount

  // Update the number of items per page based on screen width
  useEffect(() => {
    const updateSlides = () => {
      const newItemsPerPage = window.innerWidth < 768 ? 1 : 3;
      setItemsPerPage(newItemsPerPage);
      setTotalSlides(Math.ceil(events.length / newItemsPerPage));
      setCurrentIndex(0);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => {
      window.removeEventListener("resize", updateSlides);
    };
  }, [events.length]);

  const goToEventDetail = (event) => {
    navigate(`/events/${event._id}`, { state: { event } }); // Pass event data as state
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentEvents = events.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  // Display loading or error messages
  if (loading) {
    return <div className="text-center text-xl text-gray-600">Loading events...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-600">{error}</div>;
  }

  return (
    <section className="bg-blue-50 pt-8 pb-12 px-6 sm:px-12 lg:px-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 text-center mb-12">
        Upcoming Dental Clinic Events
      </h1>

      {events.length === 0 ? (
        <div className="text-center text-gray-500">No events available at the moment.</div>
      ) : (
        <div className="w-full min-h-72 mx-auto">
          {/* Slider Content */}
          <div className="relative w-full h-[500px] mx-auto">
            <div className="flex gap-6 justify-center overflow-hidden h-full">
              {currentEvents.map((event) => (
                <div
                key={event._id}
                className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 w-full sm:w-64 md:w-80 h-full hover:scale-105 hover:shadow-xl"
                style={{
                  backgroundImage: `url(${event.image || "placeholder.jpg"})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white opacity-90 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="text-xl font-semibold mb-2">{event.title || "Untitled Event"}</h2>
                  <p className="text-sm mb-2">
                    <span className="font-bold">Date:</span> {event.date || "TBD"}
                  </p>
                  <p className="text-sm mb-2">
                    <span className="font-bold">Time:</span> {event.time || "TBD"}
                  </p>
                  <p className="text-sm mb-4">
                    <span className="font-bold">Location:</span> {event.location || "TBD"}
                  </p>
              
                  <button
                    className="text-sm w-[40%] text-center font-semibold hover:bg-blue-700 hover:bg-opacity-90 text-white bg-blue-100 bg-opacity-20 rounded-full px-3 py-2"
                    onClick={() => goToEventDetail(event)} // Navigate with state
                  >
                    Learn More
                  </button>
                </div>
              </div>
              
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              className="absolute top-[50%] -left-6 shadow-md shadow-gray-300 transform -translate-y-[50%] p-3 bg-blue-600 text-white rounded-full focus:outline-none hover:bg-blue-700"
              onClick={prevSlide}
            >
              <FaCaretLeft />
            </button>
            <button
              className="absolute top-[50%] -right-6 shadow-md shadow-gray-300 transform -translate-y-[50%] p-3 bg-blue-600 text-white rounded-full focus:outline-none hover:bg-blue-700"
              onClick={nextSlide}
            >
              <FaCaretRight />
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-6">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 mx-2 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"}`}
                  onClick={() => goToSlide(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Events;
