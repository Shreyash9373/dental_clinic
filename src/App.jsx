import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SmallFooter from "./components/SmallFooter";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import DoctorsTeam from "./pages/DoctorsTeam";
import DentalServices from "./pages/DentalServices";
import WhatsappContact from "./components/whatsappContact";
import Appointments from "./components/Appointments";
import Events from "./pages/Events";
import Blogs from "./pages/Blogs";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="app-container">
      <Router>
        <ScrollToTop />
        <Navbar />
        <WhatsappContact /> 
        <div className="content px-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/doctorsteam" element={<DoctorsTeam />} />
            <Route path="/dentalservices" element={<DentalServices />} />
            <Route path="/appointment" element={<Appointments />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </div>
        <Footer />
        <SmallFooter />
      </Router>
    </div>
  );
}

export default App;
