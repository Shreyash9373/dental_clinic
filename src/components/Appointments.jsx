import React, { useEffect } from "react";
import Aos from "aos";

const Appointments = () => {
  useEffect(()=>{
    Aos.init({duration:1500,once:true})
  },[])
  return (
    <div data-aos="fade-right">
    <div className="flex justify-center items-center h-auto py-8 bg-gray-100">
  <div className="w-11/12 md:w-3/4 lg:w-2/3 bg-gradient-to-r from-blue-400 to-blue-700 rounded-xl shadow-lg p-6">
    <h2 className="text-1xl md:text-3xl font-bold text-white mb-6 flex items-center">
      Book Your Appointment <span className="ml-2">📅</span>
    </h2>
    <form className="grid gap-4">
      {/* Row 1: Full Name, Mobile No., Email ID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="bg-white p-3 rounded-md border focus:outline-none"
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
      </div>

      {/* Row 2: Location, Appointment Date, Service */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select className="bg-white p-3 rounded-md border focus:outline-none">
          <option>Choose your location</option>
          <option>Location 1</option>
          <option>Location 2</option>
        </select>
        <input
          type="date"
          className="bg-white p-3 rounded-md border focus:outline-none"
        />
        <select className="bg-white p-3 rounded-md border focus:outline-none">
          <option>Select your Prefer Service</option>
          <option>Root Canal Treatment</option>
          <option>Crown and Bridges</option>
        </select>
      </div>

      {/* Row 3: Time Slot */}
      <div>
        <p className="text-white font-medium mb-2">
          Select Time Slot <span className="text-red-500">*</span>
        </p>
        <div className="grid grid-cols-2 w-4/5  md:grid-cols-4 gap-4">
          {[
            "10:00 AM - 11:00 AM",
            "11:00 AM - 12:00 PM",
            "12:00 PM - 01:00 PM",
            "01:00 PM - 02:00 PM",
            "05:00 PM - 06:00 PM",
            "06:00 PM - 07:00 PM",
            "07:00 PM - 08:00 PM",
            "08:00 PM - 09:00 PM",
          ].map((slot, index) => (
            <label
              key={index}
              className={`text-white flex items-center space-x-2 ${
                index % 2 === 0 ? "justify-self-start" : "justify-self-end"
              }`}
            >
              <input
                type="radio"
                name="timeSlot"
                className="focus:ring-2 focus:ring-blue-300"
              />
              <span>{slot}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Row 4: Prescription Upload and Submit */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-white font-medium mb-2 block">
            Upload Doctor's prescription (If you have)
          </label>
          <input
            type="file"
            className="bg-white p-3 rounded-md border focus:outline-none w-full"
          />
        </div>

        <div className="flex justify-center md:justify-end items-center mt-6">
          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium"
          >
            Book an appointment
          </button>
        </div>
      </div>
    </form>
  </div>
</div>
</div>

  );
};

export default Appointments;
