import React from "react";
import banner from '../assets/banner.jpg'

const events = [
  {
    id: 1,
    name: "Free Dental Checkup Camp",
    date: "January 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Smile Dental Clinic, Main Street",
    description:
      "Join us for a free dental checkup camp where our experienced dentists will provide comprehensive oral health consultations.",
    image: banner, // Image for the event
  },
  {
    id: 2,
    name: "Kids' Dental Health Workshop",
    date: "January 25, 2025",
    time: "11:00 AM - 1:00 PM",
    location: "Smile Dental Clinic, Kids' Zone",
    description:
      "A fun and interactive workshop to teach kids the importance of oral hygiene and proper brushing techniques.",
    image: banner, // Image for the event
  },
  {
    id: 3,
    name: "Advanced Cosmetic Dentistry Seminar",
    date: "February 5, 2025",
    time: "3:00 PM - 6:00 PM",
    location: "Smile Dental Clinic, Conference Hall",
    description:
      "Learn about the latest advancements in cosmetic dentistry, including teeth whitening, veneers, and smile makeovers.",
    image: banner, // Image for the event
  },
  {
    id: 4,
    name: "Advanced Cosmetic Dentistry Seminar",
    date: "February 5, 2025",
    time: "3:00 PM - 6:00 PM",
    location: "Smile Dental Clinic, Conference Hall",
    description:
      "Learn about the latest advancements in cosmetic dentistry, including teeth whitening, veneers, and smile makeovers.",
    image: banner, // Image for the event
  },
  {
    id: 5,
    name: "Advanced Cosmetic Dentistry Seminar",
    date: "February 5, 2025",
    time: "3:00 PM - 6:00 PM",
    location: "Smile Dental Clinic, Conference Hall",
    description:
      "Learn about the latest advancements in cosmetic dentistry, including teeth whitening, veneers, and smile makeovers.",
    image: banner, // Image for the event
  },
];

const Events = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center mb-10">
        Upcoming Events
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                {event.name}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                <span className="font-bold">Date:</span> {event.date} <br />
                <span className="font-bold">Time:</span> {event.time} <br />
                <span className="font-bold">Location:</span> {event.location}
              </p>
              <p className="text-gray-700 mb-6">{event.description}</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-3xl shadow-md hover:bg-blue-700">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
