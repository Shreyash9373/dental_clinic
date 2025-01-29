// import React from "react";
// import { useLocation } from "react-router-dom";

// const EventDetail = () => {
//   const location = useLocation();
//   const { event } = location.state || {}; // Get event data from state

//   if (!event) {
//     return (
//       <div className="flex items-center justify-center h-screen text-gray-500">
//         <p>No event data found. Please try again.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//   {/* Event Header */}
//   <div className="relative w-full h-64 sm:h-80 md:h-[400px] rounded-lg mb-8 bg-gray-200 flex items-center justify-center overflow-hidden">
//     <img
//       src={event.image || "placeholder.jpg"}
//       alt={event.title || "Event"}
//       className="object-contain w-full rounded-md h-full"
//     />
//     <div className="absolute bottom-0 left-0 w-full  bg-white bg-opacity-70 py-2 px-4">
//       <h1 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl font-bold text-center">
//         {event.title}
//       </h1>
//     </div>
//   </div>

//       {/* Event Details */}
//       <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 md:p-10">
//         <div className="mb-6">
//           <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-4">
//             Event Details
//           </h2>
//           <div className="flex flex-col gap-4">
//             <div>
//               <strong className="text-gray-700">Date:</strong>{" "}
//               <span className="text-gray-800">{event.date || "TBD"}</span>
//             </div>
//             <div>
//               <strong className="text-gray-700">Time:</strong>{" "}
//               <span className="text-gray-800">{event.time || "TBD"}</span>
//             </div>
//             <div>
//               <strong className="text-gray-700">Location:</strong>{" "}
//               <span className="text-gray-800">{event.location || "TBD"}</span>
//             </div>
//           </div>
//         </div>

//         {/* Event Description */}
//         <div className="mb-6">
//           <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2">
//             Description
//           </h3>
//           <p className="text-gray-700">
//             {event.description || "No description available."}
//           </p>
//         </div>

//         {/* Extra Image Section (optional) */}
//         {/* <div className="flex justify-center mt-6">
//           {event.image && (
//             <img
//               src={event.image}
//               alt={event.title}
//               className="rounded-lg shadow-md max-w-full h-auto sm:w-[70%] md:w-[50%]"
//             />
//           )}
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default EventDetail;





import React from "react";
import { useLocation } from "react-router-dom";
import { format, parseISO, isValid } from "date-fns"; // Import necessary methods

const EventDetail = () => {
  const location = useLocation();
  const { event } = location.state || {}; // Get event data from state

  if (!event) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        <p>No event data found. Please try again.</p>
      </div>
    );
  }

  // Function to validate and format the time (24-hour format)
  const formatTime = (timeString) => {
    // If timeString is missing or empty, return empty time part
    if (!timeString) return "";

    // Attempt to parse the time directly in 24-hour format (e.g., "20:00")
    const time24HourPattern = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/; // Regex for 24-hour time format (e.g., 20:30)

    // If the timeString matches 24-hour format
    if (time24HourPattern.test(timeString)) {
      return timeString; // Return the time directly in 24-hour format
    }

    return "TBD"; // If time is invalid, return "TBD"
  };

  // Function to format the date and time
  const formatDateTime = (dateString, timeString) => {
    const date = dateString ? parseISO(dateString) : null;

    if (!date || !isValid(date)) {
      return "TBD"; // Return "TBD" if the date is invalid
    }

    const formattedDate = format(date, "dd/MM/yyyy"); // Format the date part
    const formattedTime = formatTime(timeString); // Format the time part

    return `${formattedDate} ${formattedTime}`; // Return formatted date and time
  };

  return (
    <div className="container bg-gray-200 mx-auto px-4 py-8">
      {/* Event Header */}
      <div className="relative  w-full flex items-center justify-center h-72 sm:h-96 md:h-[450px] rounded-lg mb-8 overflow-hidden">
        <img
          src={event.image || "placeholder.jpg"}
          alt={event.title || "Event"}
          className="object-cover w-[70%] rounded-md object-top h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 right-0 py-4 px-6">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center drop-shadow-md">
            {event.title}
          </h1>
        </div>
      </div>

      {/* Event Details */}
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-6">
          Event Details
        </h2>

        <div className="space-y-6">
          {/* Date, Time, Location */}
          <div>
            <strong className="text-gray-700 text-lg">Date & Time:</strong>{" "}
            <span className="text-gray-800 text-lg">
              {formatDateTime(event.date, event.time)}
            </span>
          </div>
          <div>
            <strong className="text-gray-700 text-lg">Location:</strong>{" "}
            <span className="text-gray-800 text-lg">{event.location || "TBD"}</span>
          </div>
        </div>

        {/* Event Description */}
        <div className="mt-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-4">
            Event Description
          </h3>
          <p className="text-gray-700 text-lg">
            {event.description || "No description available."}
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default EventDetail;
