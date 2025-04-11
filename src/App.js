import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Landingpage"; //  Make sure the file exists in src folder
import Login from "./login";
import Dashboard from "./Dashboard";
import Doctors from "./Doctors";
import DashboardDoctors from "./DashboardDoctors";





function App() {
  return (
    <Router>
      
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Doctors" element={<Doctors />} />
        <Route path="/DashboardDoctors" element={<DashboardDoctors />} />
  
      </Routes>
    </Router>
  );
}

export default App;



