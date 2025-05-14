import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  IconButton,
} from "@mui/material";
import { Delete, Edit, Add } from "@mui/icons-material";
import axios from "axios";

const AdminNurseDashboard = () => {
  const [nurses, setNurses] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    shift: "",
  });

  // Fetch nurses
  const fetchNurses = async () => {
    try {
      const response = await axios.get("/api/admin/nurses", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });
      setNurses(response.data);
    } catch (error) {
      console.error("Error fetching nurses", error);
    }
  };

  useEffect(() => {
    fetchNurses();
  }, []);

  const handleAddNurse = async () => {
    try {
      await axios.post("/api/admin/nurses", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });
      fetchNurses();
      setOpenDialog(false);
      setFormData({ name: "", email: "", phone: "", shift: "" });
    } catch (error) {
      console.error("Error adding nurse", error);
    }
  };

  const handleDeleteNurse = async (id) => {
    if (window.confirm("Are you sure you want to delete this nurse?")) {
      try {
        await axios.delete(`/api/admin/nurses/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        });
        fetchNurses();
      } catch (error) {
        console.error("Error deleting nurse", error);
      }
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Nurse Management
      </Typography>

      <Button
        variant="contained"
        startIcon={<Add />}
        onClick={() => setOpenDialog(true)}
        sx={{ mb: 2 }}
      >
        Add Nurse
      </Button>

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Shift</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {nurses.map((nurse) => (
              <TableRow key={nurse._id}>
                <TableCell>{nurse.name}</TableCell>
                <TableCell>{nurse.email}</TableCell>
                <TableCell>{nurse.phone}</TableCell>
                <TableCell>{nurse.shift}</TableCell>
                <TableCell align="right">
                  <IconButton color="primary" disabled>
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDeleteNurse(nurse._id)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* Add Nurse Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add New Nurse</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            margin="dense"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <TextField
            label="Email"
            fullWidth
            margin="dense"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <TextField
            label="Phone"
            fullWidth
            margin="dense"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <TextField
            label="Shift"
            fullWidth
            margin="dense"
            value={formData.shift}
            onChange={(e) =>
              setFormData({ ...formData, shift: e.target.value })
            }
            placeholder="e.g., Morning, Evening, Night"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAddNurse}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminNurseDashboard;
