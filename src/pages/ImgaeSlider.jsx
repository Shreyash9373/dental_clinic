import { useState, useEffect } from "react";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ImageSlider = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [totalSlides, setTotalSlides] = useState(Math.ceil(events.length / itemsPerPage));
  const navigate = useNavigate(); // Initialize navigate

  const goToEventDetail = (event) => {
    navigate(`/events/${event._id}`, { state: { event } }); // Pass event data as state
  };

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

  return (
    <div className="relative w-full h-[500px] mx-auto">
      {/* Slider Content */}
      <div className="flex gap-4 justify-center overflow-hidden h-full">
        {currentEvents.map((event) => (
          <div
            key={event._id}
            className="relative bg-gray-100 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 w-full sm:w-64 md:w-80 h-full"
            style={{
              backgroundImage: `url(${event.image || "placeholder.jpg"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
              <h2 className="text-lg font-semibold mb-1">
                {event.title || "Untitled Event"}
              </h2>
              <p className="text-sm">
                <span className="font-bold">Date:</span> {event.date || "TBD"}
              </p>
              <p className="text-sm">
                <span className="font-bold">Time:</span> {event.time || "TBD"}
              </p>
              <p className="text-sm">
                <span className="font-bold">Location:</span>{" "}
                {event.location || "TBD"}
              </p>

              <button
                className="text-sm w-[40%] text-center font-semibold hover:bg-blue-700 hover:bg-opacity-90 text-white bg-blue-100 bg-opacity-20 rounded-full px-3 py-2"
                onClick={() => goToEventDetail(event)} // Navigate with state
              >
                See more
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute top-[50%] -left-4 shadow-sm shadow-gray-200 transform -translate-y-[50%] p-2 bg-cyan-600 text-white rounded-md focus:outline-none hover:bg-gray-900"
        onClick={prevSlide}
      >
        <FaCaretLeft />
      </button>
      <button
        className="absolute top-[50%] -right-4 shadow-sm shadow-gray-200 transform -translate-y-[50%] p-2 bg-cyan-600 text-white rounded-md focus:outline-none hover:bg-gray-900"
        onClick={nextSlide}
      >
        <FaCaretRight />
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
