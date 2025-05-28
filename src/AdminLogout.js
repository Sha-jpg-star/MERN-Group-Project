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

import Sidebar from "./Sidebar";

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
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3, backgroundColor: "#dafbfd" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
          LogOut
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
      </Box>
    </Box>
  );
};

export default AdminLogout;
