import React, { useState, useEffect } from "react";
import axios from "axios";
import banner from "../assets/banner.jpg";

const Events = () => {
  const [events, setEvents] = useState([]); // State to store events data
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track errors

  // Fetch events data from the API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/patient/get-event");
        console.log("Fetched events:", response.data);
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

  // Display loading or error messages
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center mb-10">
        Upcoming Events
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.length === 0 ? (
          <div className="text-center text-gray-500">No events available at the moment.</div>
        ) : (
          events.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={event.image || banner} // Fallback to default banner if no image is provided
                alt={event.name || "Event Image"} // Better alt text for accessibility
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-blue-800 mb-2">
                  {event.title || "Untitled Event"}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  <span className="font-bold">Date:</span> {event.date || "TBD"} <br />
                  <span className="font-bold">Time:</span> {event.time || "TBD"} <br />
                  <span className="font-bold">Location:</span> {event.location || "TBD"}
                </p>
                <p className="text-gray-700 mb-6">
                  {event.description || "No description available."}
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-3xl shadow-md hover:bg-blue-700">
                  Register Now
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Events;
