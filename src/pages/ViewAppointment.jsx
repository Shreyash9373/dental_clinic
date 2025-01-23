import React from "react";
import { useNavigate } from "react-router-dom";

const doctorData = [
    {
      id: 1,
      name: "Dr. John Doe",
      specialty: "Cardiologist",
      img: "https://via.placeholder.com/150",
      experience: "10 years",
      schedule: [
        {
          day: "Monday",
          time: "9:00 AM - 12:00 PM",
          slots: ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"],
        },
        {
          day: "Wednesday",
          time: "2:00 PM - 5:00 PM",
          slots: ["2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"],
        },
      ],
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      specialty: "Dermatologist",
      img: "https://via.placeholder.com/150",
      experience: "8 years",
      schedule: [
        {
          day: "Tuesday",
          time: "10:00 AM - 1:00 PM",
          slots: ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM"],
        },
        {
          day: "Friday",
          time: "3:00 PM - 6:00 PM",
          slots: ["3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"],
        },
      ],
    },
    {
      id: 3,
      name: "Dr. Emily Johnson",
      specialty: "Pediatrician",
      img: "https://via.placeholder.com/150",
      experience: "12 years",
      schedule: [
        {
          day: "Monday",
          time: "1:00 PM - 4:00 PM",
          slots: ["1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM"],
        },
        {
          day: "Thursday",
          time: "9:00 AM - 12:00 PM",
          slots: ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"],
        },
      ],
    },
    {
      id: 4,
      name: "Dr. Michael Brown",
      specialty: "Orthopedic Surgeon",
      img: "https://via.placeholder.com/150",
      experience: "15 years",
      schedule: [
        {
          day: "Wednesday",
          time: "9:00 AM - 12:00 PM",
          slots: ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"],
        },
        {
          day: "Saturday",
          time: "10:00 AM - 1:00 PM",
          slots: ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM"],
        },
      ],
    },
    {
      id: 5,
      name: "Dr. Sophia White",
      specialty: "Neurologist",
      img: "https://via.placeholder.com/150",
      experience: "9 years",
      schedule: [
        {
          day: "Tuesday",
          time: "2:00 PM - 5:00 PM",
          slots: ["2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"],
        },
        {
          day: "Friday",
          time: "10:00 AM - 1:00 PM",
          slots: ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM"],
        },
      ],
    },
    {
      id: 6,
      name: "Dr. Liam Black",
      specialty: "Endocrinologist",
      img: "https://via.placeholder.com/150",
      experience: "7 years",
      schedule: [
        {
          day: "Thursday",
          time: "3:00 PM - 6:00 PM",
          slots: ["3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"],
        },
        {
          day: "Saturday",
          time: "1:00 PM - 4:00 PM",
          slots: ["1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM"],
        },
      ],
    },
  ];
  
  

const ViewAppointment = () => {
  const navigate = useNavigate();

  const goToDoctorDetail = (doctor) => {
    navigate(`/bookappointment/${doctor.id}`, { state: { doctor } }); // Pass doctor data as state
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Our Doctors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {doctorData.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-gray-100 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={doctor.img}
              alt={doctor.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{doctor.name}</h2>
              <p className="text-sm text-gray-600">{doctor.specialty}</p>
              <p className="text-sm text-gray-500">
                Experience: {doctor.experience}
              </p>
              <button
                className="mt-4 text-sm font-semibold bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-700"
                onClick={() => goToDoctorDetail(doctor)}
              >
                View Schedule
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAppointment;
