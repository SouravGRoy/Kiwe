import React from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import Home from "./components/Home";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OurWork from "./pages2/ourWork";
import AboutUs from "./pages3/aboutUs";
import Insights from "./pages4/insights";
import Contact from "./pages5/contact";

function AppContent() {
  const location = useLocation();
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<OurWork />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
