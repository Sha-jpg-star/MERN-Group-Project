import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  CircularProgress,
  Alert,
} from "@mui/material";
import axios from "axios";
import Sidebar from "./Sidebar"; // assuming you have a sidebar component

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/api/messages")
      .then((res) => {
        setMessages(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch messages.");
        setLoading(false);
      });
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1, p: 4, backgroundColor: "#f9f9f9" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Admin Messages
        </Typography>

        <Paper elevation={3} sx={{ padding: 2 }}>
          {loading ? (
            <Box display="flex" justifyContent="center" mt={4}>
              <CircularProgress />
            </Box>
          ) : error ? (
            <Alert severity="error">{error}</Alert>
          ) : messages.length === 0 ? (
            <Typography>No messages found.</Typography>
          ) : (
            <List>
              {messages.map((msg, index) => (
                <React.Fragment key={msg._id || index}>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary={`${msg.name} (${msg.email})`}
                      secondary={msg.message}
                    />
                  </ListItem>
                  {index < messages.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          )}
        </Paper>
      </Box>
    </Box>
  );
};

export default AdminMessages;
