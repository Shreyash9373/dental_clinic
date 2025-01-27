import React from 'react';
import { useLocation } from 'react-router-dom';

const DoctorDetails = () => {
  const location = useLocation();
  const { doctorinfo } = location.state || {}; // Get doctor details from state

  // Handle case where no doctor info is provided
  if (!doctorinfo) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        <p>No Doctor details found. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen p-8 bg-gray-50">
      {/* Header Section */}
      <div className=" md:h-[420px] h-auto  flex flex-col overflow-hidden md:flex-row items-center justify-center bg-white rounded-xl shadow-lg p-6 md:pt-6 md:px-8 gap-8">
        {/* Doctor's Photo */}
        <div className="w-full md:w-1/3 h-full flex items-center justify-center">
          <img
            src={doctorinfo.photo}
            alt={doctorinfo.name}
            className="w-full h-full self-center object-cover  object-top rounded-xl shadow-md"
          />
        </div>

        {/* Doctor's Name and Contact */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-blue-800">
            {doctorinfo.name}
          </h1>
          <p className="text-xl text-blue-600 font-medium mt-4">
            <strong>Contact:</strong> {doctorinfo.contact || 'N/A'}
          </p>
          <p className="text-gray-500 mt-2">
            Expert in ensuring healthy smiles with {doctorinfo.exp} of experience.
          </p>
        </div>
      </div>

      {/* Details Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Degree Section */}
        <div className="bg-white p-6 flex flex-col  rounded-xl shadow-lg">
          <h2 className="text-2xl text-left font-bold text-blue-700 mb-4">Degree</h2>
          <img
            src={doctorinfo.degree}
            alt={`${doctorinfo.name}'s Degree`}
            className="w-[60%] h-[224px] self-center object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Experience and Other Details */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Details</h2>
          <p className="text-lg text-gray-600">
            <strong>Experience:</strong> {doctorinfo.exp}
          </p>
          <p className="text-lg text-gray-600 mt-4">
            <strong>Age:</strong> {doctorinfo.age}
          </p>
          <p className="text-lg text-gray-600 mt-4">
            <strong>Description:</strong> {doctorinfo.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
