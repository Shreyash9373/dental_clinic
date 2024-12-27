import React from 'react';

const Appointments = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-11/12 md:w-3/4 lg:w-2/3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl shadow-lg p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
          Book Your Appointment <span className="ml-2">📅</span>
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="col-span-1 md:col-span-2 bg-white p-3 rounded-md border focus:outline-none"
          />
          <input
            type="text"
            placeholder="+91- Enter Mobile no."
            className="bg-white p-3 rounded-md border focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email id"
            className="bg-white p-3 rounded-md border focus:outline-none"
          />
          <select
            className="bg-white p-3 rounded-md border focus:outline-none"
          >
            <option>Choose your location</option>
            <option>Location 1</option>
            <option>Location 2</option>
          </select>
          <input
            type="date"
            className="bg-white p-3 rounded-md border focus:outline-none"
          />
          <select
            className="bg-white p-3 rounded-md border focus:outline-none"
          >
            <option>Select your Prefer Service</option>
            <option>Service 1</option>
            <option>Service 2</option>
          </select>
          
          <div className="col-span-1 md:col-span-2 flex flex-col">
            <p className="text-white font-medium mb-2">Select Time Slot <span className="text-red-500">*</span></p>
            <div className="grid grid-rows-4 grid-cols-2 gap-4">
              {["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "12:00 PM - 01:00 PM", "01:00 PM - 02:00 PM", "05:00 PM - 06:00 PM", "06:00 PM - 07:00 PM", "07:00 PM - 08:00 PM", "08:00 PM - 09:00 PM"].map((slot, index) => (
                <label key={index} className="text-white flex items-center space-x-2">
                  <input type="radio" name="timeSlot" className="focus:ring-2 focus:ring-blue-300" />
                  <span>{slot}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="text-white font-medium mb-2 block">Upload Doctor's prescription (If you have)</label>
            <input
              type="file"
              className="bg-white p-3 rounded-md border focus:outline-none"
            />
          </div>
          <div className="col-span-1 md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium"
            >
              Book an appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointments;
