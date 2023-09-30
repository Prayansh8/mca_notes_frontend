// src/App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GradeSection from "./components/Subject/GradeSubject";
import GradeDetails from "./components/Subject/GradeSubjectDetails";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="mainContainer">
          <div class="nine">
            <h1>
              MCA - (Master of Computer Applications)
              <span> All Subjects Notes </span>
            </h1>
          </div>
          <div className="mainContainer1">

          <Routes>
            <Route path="/" element={<GradeSection />} />
            <Route path="/grade/:id" element={<GradeDetails />} />
          </Routes>
        </div>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
