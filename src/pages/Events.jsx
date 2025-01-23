import React, { useState, useEffect } from "react";
import axios from "axios";
import banner from "../assets/banner.jpg";
import ImageSlider from '../pages/ImgaeSlider'; // Import the ImageSlider component

const Events = () => {
  const [events, setEvents] = useState([]); // State to store events data
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track errors

  // Fetch events data from the API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URI}/api/patient/get-event`);
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
    <section className="bg-gray-50 pt-8 pb-12 px-6 sm:px-12 lg:px-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center mb-10">
        Upcoming Events
      </h1>

      {events.length === 0 ? (
        <div className="text-center text-gray-500">No events available at the moment.</div>
      ) : (
        <div className="w-full min-h-72 mx-auto">
          {/* Use ImageSlider to display the events */}
          <ImageSlider events={events} />
        </div>
      )}
    </section>
  );
};

export default Events;
