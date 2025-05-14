import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

const AdminLogout = () => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(true);

  const handleConfirm = () => {
    // Clear token and navigate
    localStorage.removeItem("adminToken");
    navigate("/login");
  };

  const handleCancel = () => {
    // Navigate back or to dashboard if canceling
    navigate("/Dashboard");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{ backgroundColor: "#f5f5f5" }}
    >
      <Paper elevation={3} sx={{ p: 5, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Admin Logout
        </Typography>
        <Typography variant="body1" mt={2}>
          You are about to log out. Please confirm your action.
        </Typography>

        <Dialog
          open={openDialog}
          onClose={handleCancel}
          aria-labelledby="logout-confirmation"
        >
          <DialogTitle id="logout-confirmation">Confirm Logout</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to log out of the admin panel?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={handleConfirm} color="error" variant="contained">
              Logout
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Box>
  );
};

export default AdminLogout;
