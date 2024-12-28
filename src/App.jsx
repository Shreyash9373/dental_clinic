import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
// import SmallFooter from "./components/SmallFooter";
// import ContactUs from "./pages/ContactUs";
// import AboutUs from "./pages/AboutUs";
// import DoctorsTeam from "./pages/DoctorsTeam";
// import DentalServices from "./pages/DentalServices";
// import BookAppointment from "./pages/BookAppointment";

// function App() {
//   return (
//     <Router>
//        <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<ContactUs />} />
//         <Route path="/aboutus" element={<AboutUs />} />
//         <Route path="/doctorsteam" element={<DoctorsTeam />} />
//         <Route path="/dentalservices" element={<DentalServices />} />
//         <Route path="/bookappointment" element={<BookAppointment />} />
//       </Routes>
//       <Footer />
//       <SmallFooter/>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SmallFooter from "./components/SmallFooter";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import DoctorsTeam from "./pages/DoctorsTeam";
import DentalServices from "./pages/DentalServices";
import BookAppointment from "./pages/BookAppointment";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/doctorsteam" element={<DoctorsTeam />} />
            <Route path="/dentalservices" element={<DentalServices />} />
            <Route path="/bookappointment" element={<BookAppointment />} />
          </Routes>
        </div>
        <Footer />
        <SmallFooter />
      </Router>
    </div>

  );
}

export default App;
