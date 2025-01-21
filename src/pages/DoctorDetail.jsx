import React from "react";
import { useLocation } from "react-router-dom";

const DoctorDetail = () => {
  const location = useLocation();
  const { doctor } = location.state || {};

  if (!doctor) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        <p>No doctor data found. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img
          src={doctor.img}
          alt={doctor.name}
          className="w-48 h-48 rounded-lg object-cover shadow-md"
        />
        <div className="text-left">
          <h1 className="text-2xl font-semibold text-gray-800">{doctor.name}</h1>
          <p className="text-gray-600 text-sm mt-1">{doctor.specialty}</p>
          <p className="text-gray-600 text-sm mt-1">Experience: {doctor.experience}</p>
          <p className="text-gray-600 text-sm mt-1">
            {/* Age: {doctor.age ? doctor.age : "Not available"} */}
          </p>
        </div>
      </div>

      {/* Schedule Section */}
      <div>
  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Doctor's Schedule</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {doctor.schedule.map((daySchedule, index) => (
      <div
        key={index}
        className="p-6 border rounded-lg shadow-md bg-gradient-to-r from-blue-200 to-blue-300 hover:from-blue-200 hover:to-blue-400 transition duration-300"
      >
        <h3 className="text-lg font-bold text-blue-800 mb-2">
          {daySchedule.day}
        </h3>
        <p className="text-sm text-gray-700 mb-2">
          <span className="font-semibold text-blue-600">Time:</span>{" "}
          {daySchedule.time}
        </p>
        <div className="mt-2">
          <h4 className="text-sm font-medium text-blue-700">Available Slots:</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {daySchedule.slots.map((slot, slotIndex) => (
              <span
                key={slotIndex}
                className="inline-block bg-white text-blue-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm border border-blue-300"
              >
                {slot}
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default DoctorDetail;
