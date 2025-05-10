import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy"; // Pharmacy
import MedicalServicesIcon from "@mui/icons-material/MedicalServices"; // Nurse
import DescriptionIcon from "@mui/icons-material/Description"; // Lab Reports
import EventAvailableIcon from "@mui/icons-material/EventAvailable"; // Appointments
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom"; // Import Link for navigation

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        "& .MuiDrawer-paper": {
          width: 250,
          backgroundColor: "purple",
          color: "#ffff",
          alignItems: "center",
        },
      }}
    >
      {/* Logo and Title */}
      <img
        src="/landingPageIcon2.png"
        alt="Logo"
        style={{
          height: "40px",
          padding: "10px",
          width: "40px",
          marginTop: "5px",
          borderRadius: "50%",
        }}
      />
      <Typography
        variant="h6"
        sx={{
          flexGrow: 1,
          color: "yellow",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        MediCare
      </Typography>

      {/* Sidebar List Items */}
      <List sx={{ width: "200px" }}>
        {[
          { text: "Dashboard", path: "/Dashboard", icon: <DashboardIcon /> },
          { text: "Doctors", path: "/Doctors", icon: <PeopleIcon /> },
          { text: "Patients", path: "/Patients", icon: <PersonIcon /> },
          {
            text: "Pharmacy",
            path: "/AdminPharmacyDashboard",
            icon: <LocalPharmacyIcon />,
          },
          {
            text: "Nurse",
            path: "/AdminNurseDashboard",
            icon: <MedicalServicesIcon />,
          },
          {
            text: "Lab Reports",
            path: "/AdminLabReports",
            icon: <DescriptionIcon />,
          },
          {
            text: "Appointment",
            path: "/Appointment",
            icon: <EventAvailableIcon />,
          },
          { text: "Messages", path: "/AdminMessages", icon: <MessageIcon /> },
          { text: "Settings", path: "/AdminSetting", icon: <SettingsIcon /> },
          { text: "Logout", path: "/AdminLogout", icon: <ExitToAppIcon /> },
        ].map((item, index) => (
          <ListItem
            button
            key={index}
            sx={{
              backgroundColor: "rgb(155, 8, 155)",
            }}
          >
            {/* Link for Navigation */}
            <Link
              to={item.path}
              style={{ color: "white", textDecoration: "none" }}
            >
              <ListItemIcon sx={{ color: "#ffff" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
