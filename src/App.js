import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./Landingpage"; //  Make sure the file exists in src folder
import Login from "./login";
import Dashboard from "./Dashboard";
import Doctors from "./Doctors";
import DashboardDoctors from "./DashboardDoctors";
import MyAppointments from "./MyAppointments";
import MyPatients from "./MyPatients";
import Notifications from "./Notifications";
import MyProfile from "./MyProfile";

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
      </Routes>
    </Router>
  );
}

export default App;
