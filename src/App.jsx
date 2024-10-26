import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MainComponents from "./components/MainComponents";
import PersonalDetials from "./Pages/PersonalDetials/PersonalDetials";
import Footer from "./components/footer/Footer";
import Skills from "./Pages/SkillsPage/Skills";
import Project from "./Pages/Projects/Project";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainComponents />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/personaldetials" element={<PersonalDetials />} />
        <Route path="/contactme" element={<Footer />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
