import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./Landingpage";
import Login from "./login";
import Dashboard from "./Dashboard";
import Doctors from "./Doctors";
//import DashboardDoctors from "./DashboardDoctors";
//import MyAppointments from "./MyAppointments";
//import MyPatients from "./MyPatients";
//import Notifications from "./Notifications";
//import MyProfile from "./MyProfile";
//import DashboardPatients from "./DashboardPatients";
//import LoginPatients from "./loginpatients";
//import LoginDoctors from "./loginDoctors";
import AdminLogout from "./AdminLogout";
import AdminSetting from "./AdminSetting";
//import AdminNurseDashboard from "./AdminNurseDashboard";
import AdminMessages from "./AdminMessages";
import AdminPharmacyDashboard from "./AdminPharmacyDashboard";
//import Patientlogout from "./Patientlogout";
//import BookAppointments from "./BookAppointments";
//import PatientNotifications from "./PatientNotification";
//import PatientMyProfile from "./PatientMyProfile";
import AdminAppointments from "./AdminAppointments";
import Patients from "./Patients";
import Billing from "./Billing";
import Ward from "./Ward";
import Pharmacy from "./Pharmacy";
import AdminProfile from "./AdminProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Doctors" element={<Doctors />} />

        <Route path="/AdminLogout" element={<AdminLogout />} />
        <Route path="/AdminSetting" element={<AdminSetting />} />

        <Route
          path="/AdminPharmacyDashboard"
          element={<AdminPharmacyDashboard />}
        />
        <Route path="/AdminMessages" element={<AdminMessages />} />

        <Route path="/AdminAppointments" element={<AdminAppointments />} />
        <Route path="/Patients" element={<Patients />} />
        <Route path="/Billing" element={<Billing />} />
        <Route path="/Ward" element={<Ward />} />
        <Route path="/Pharmacy" element={<Pharmacy />} />
        <Route path="/AdminProfile" element={<AdminProfile />} />
      </Routes>
    </Router>
  );
}

export default App;