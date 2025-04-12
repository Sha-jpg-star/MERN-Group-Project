import React, { useState } from "react";
import { Box, Typography, List, ListItem, ListItemText, Button, Divider } from "@mui/material";

const Notifications = () => {
  // Sample notifications (can be replaced with API data)
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Appointment Scheduled",
      message: "You have a new appointment with John Doe on 2025-04-15.",
      date: "2025-04-10",
      isRead: false,
    },
    {
      id: 2,
      title: "Patient Status Updated",
      message: "Jane Smith's treatment status has been updated to 'Under Treatment'.",
      date: "2025-04-09",
      isRead: true,
    },
    {
      id: 3,
      title: "New Message from Admin",
      message: "Please check your dashboard for the latest updates on patient care.",
      date: "2025-04-08",
      isRead: false,
    },
  ]);

  // Function to toggle read/unread status
  const toggleReadStatus = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notif) =>
        notif.id === id ? { ...notif, isRead: !notif.isRead } : notif
      )
    );
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        Notifications
      </Typography>

      {/* Notification List */}
      <List>
        {notifications.map((notification) => (
          <ListItem
            key={notification.id}
            sx={{
              backgroundColor: notification.isRead ? "#f5f5f5" : "#e3f2fd",
              marginBottom: 1,
              borderRadius: 2,
              padding: 2,
            }}
          >
            <ListItemText
              primary={
                <>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: notification.isRead ? "#000" : "#1976d2" }}
                  >
                    {notification.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555" }}>
                    {notification.message}
                  </Typography>
                </>
              }
              secondary={<Typography variant="caption">{notification.date}</Typography>}
            />
            <Button
              variant="outlined"
              onClick={() => toggleReadStatus(notification.id)}
              sx={{ marginLeft: 2 }}
            >
              {notification.isRead ? "Mark as Unread" : "Mark as Read"}
            </Button>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ marginTop: 2 }} />
    </Box>
  );
};

export default Notifications;
