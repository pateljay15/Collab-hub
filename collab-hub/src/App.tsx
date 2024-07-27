import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./features/landing-page/LandingPageScreen";
import ContactUs from "./features/ContactUs/ContactUs";
import Faqs from "./features/Faqs/Faqs";
import Home from "./features/Home/Home";
import { LoginPage, NavBar } from './components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Projects from "./features/ProjectsPage/Projects";

function App() {
  return (
    <>
      <ToastContainer />
      
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
