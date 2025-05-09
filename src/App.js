import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./Landingpage";
import Login from "./login";
import Dashboard from "./Dashboard";
import Doctors from "./Doctors";
import DashboardDoctors from "./DashboardDoctors";
import MyAppointments from "./MyAppointments";
import MyPatients from "./MyPatients";
import Notifications from "./Notifications";
import MyProfile from "./MyProfile";
import DashboardPatients from "./DashboardPatients";
import LoginPatients from "./loginpatients"; // ✅ FIX: Correct casing
import LoginDoctors from "./loginDoctors";  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Doctors" element={<Doctors />} />
        <Route path="/DashboardDoctors" element={<DashboardDoctors />} />
        <Route path="/MyAppointments" element={<MyAppointments />} />
        <Route path="/MyPatients" element={<MyPatients />} />
        <Route path="/Notifications" element={<Notifications />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/DashboardPatients" element={<DashboardPatients />} />
        <Route path="/loginpatients" element={<LoginPatients />} /> 
        <Route path="/loginDoctors" element={<LoginDoctors />} />
      </Routes>
    </Router>
  );
}

export default App;
