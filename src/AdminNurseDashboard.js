import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import axios from "axios";

const AdminNurseDashboard = () => {
  const [nurses, setNurses] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentNurse, setCurrentNurse] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
  });

  const fetchNurses = async () => {
    try {
      const res = await axios.get("/api/nurses", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });
      setNurses(res.data);
    } catch (err) {
      console.error("Error fetching nurses:", err);
    }
  };

  useEffect(() => {
    fetchNurses();
  }, []);

  const handleOpenDialog = (nurse = null) => {
    setEditMode(!!nurse);
    setCurrentNurse(
      nurse || { name: "", email: "", phone: "", department: "" }
    );
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentNurse({ name: "", email: "", phone: "", department: "" });
  };

  const handleSave = async () => {
    try {
      if (editMode) {
        await axios.put(`/api/nurses/${currentNurse._id}`, currentNurse, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        });
      } else {
        await axios.post("/api/nurses", currentNurse, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        });
      }
      handleCloseDialog();
      fetchNurses();
    } catch (err) {
      console.error("Error saving nurse:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this nurse?")) return;
    try {
      await axios.delete(`/api/nurses/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });
      fetchNurses();
    } catch (err) {
      console.error("Error deleting nurse:", err);
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Nurse Management
      </Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 2 }}
        onClick={() => handleOpenDialog()}
      >
        Add Nurse
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Department</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {nurses.map((nurse) => (
              <TableRow key={nurse._id}>
                <TableCell>{nurse.name}</TableCell>
                <TableCell>{nurse.email}</TableCell>
                <TableCell>{nurse.phone}</TableCell>
                <TableCell>{nurse.department}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => handleOpenDialog(nurse)}>
                    <Edit color="primary" />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(nurse._id)}>
                    <Delete color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{editMode ? "Edit Nurse" : "Add Nurse"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            margin="dense"
            value={currentNurse.name}
            onChange={(e) =>
              setCurrentNurse({ ...currentNurse, name: e.target.value })
            }
          />
          <TextField
            label="Email"
            fullWidth
            margin="dense"
            value={currentNurse.email}
            onChange={(e) =>
              setCurrentNurse({ ...currentNurse, email: e.target.value })
            }
          />
          <TextField
            label="Phone"
            fullWidth
            margin="dense"
            value={currentNurse.phone}
            onChange={(e) =>
              setCurrentNurse({ ...currentNurse, phone: e.target.value })
            }
          />
          <TextField
            label="Department"
            fullWidth
            margin="dense"
            value={currentNurse.department}
            onChange={(e) =>
              setCurrentNurse({ ...currentNurse, department: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            {editMode ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminNurseDashboard;
