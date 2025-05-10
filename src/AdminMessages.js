import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import axios from "axios";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/api/messages").then((res) => setMessages(res.data));
  }, []);

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Messages
      </Typography>
      <Paper>
        <List>
          {messages.map((msg, index) => (
            <React.Fragment key={msg._id}>
              <ListItem>
                <ListItemText
                  primary={`${msg.name} (${msg.email})`}
                  secondary={msg.message}
                />
              </ListItem>
              {index !== messages.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default AdminMessages;
