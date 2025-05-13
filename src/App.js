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
import LoginPatients from "./loginpatients"; 
import LoginDoctors from "./loginDoctors";  
import AdminLogout from "./AdminLogout";
import AdminSetting from "./AdminSetting";
import AdminNurseDashboard from "./AdminNurseDashboard";
import AdminPharmacyDashboard from "./AdminPharmacyDashboard";
import AdminLabReports from "./AdminLapReports";
import AdminMessages from "./AdminMessages";


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
        <Route path="/AdminLogout" element={<AdminLogout />} />
        <Route path="/AdminSetting" element={<AdminSetting />} />
        <Route path="/AdminNurseDashboard" element={<AdminNurseDashboard />} />
        <Route path="/AdminPharmacyDashboard"element={<AdminPharmacyDashboard />}/>
        <Route path="/AdminLabReports" element={<AdminLabReports />} />
        <Route path="/AdminMessages" element={<AdminMessages />} />
      </Routes>
    </Router>
  );
}

export default App;
