import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/core/Navbar";
import CourseListingPage from "./pages/CourseListingPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import StudentDashboardPage from "./pages/StudentDashboardPage";
import Footer from "./components/core/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<CourseListingPage />} />
        <Route path='/course/:courseId' element={<CourseDetailsPage />} />
        <Route path='/dashboard' element={<StudentDashboardPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
