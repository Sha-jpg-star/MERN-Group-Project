import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
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

const AdminPharmacyDashboard = () => {
  const [medicines, setMedicines] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentMedicine, setCurrentMedicine] = useState({
    name: "",
    category: "",
    quantity: "",
    price: "",
    expiryDate: "",
  });

  // Fetch all medicines
  const fetchMedicines = async () => {
    try {
      const response = await axios.get("/api/pharmacy", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });
      setMedicines(response.data);
    } catch (error) {
      console.error("Failed to fetch medicines", error);
    }
  };

  useEffect(() => {
    fetchMedicines();
  }, []);

  const handleOpenDialog = (medicine = null) => {
    setEditMode(!!medicine);
    setCurrentMedicine(
      medicine || {
        name: "",
        category: "",
        quantity: "",
        price: "",
        expiryDate: "",
      }
    );
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentMedicine({
      name: "",
      category: "",
      quantity: "",
      price: "",
      expiryDate: "",
    });
  };

  const handleSave = async () => {
    try {
      if (editMode) {
        await axios.put(
          `/api/pharmacy/${currentMedicine._id}`,
          currentMedicine,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
            },
          }
        );
      } else {
        await axios.post("/api/pharmacy", currentMedicine, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        });
      }
      handleCloseDialog();
      fetchMedicines();
    } catch (error) {
      console.error("Error saving medicine", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this medicine?"))
      return;
    try {
      await axios.delete(`/api/pharmacy/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });
      fetchMedicines();
    } catch (error) {
      console.error("Error deleting medicine", error);
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Pharmacy Management
      </Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 2 }}
        onClick={() => handleOpenDialog()}
      >
        Add Medicine
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price (Rs)</TableCell>
              <TableCell>Expiry Date</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {medicines.map((med) => (
              <TableRow key={med._id}>
                <TableCell>{med.name}</TableCell>
                <TableCell>{med.category}</TableCell>
                <TableCell>{med.quantity}</TableCell>
                <TableCell>{med.price}</TableCell>
                <TableCell>{med.expiryDate?.substring(0, 10)}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => handleOpenDialog(med)}>
                    <Edit color="primary" />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(med._id)}>
                    <Delete color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add/Edit Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{editMode ? "Edit Medicine" : "Add Medicine"}</DialogTitle>
        <DialogContent sx={{ minWidth: 400 }}>
          <TextField
            fullWidth
            label="Name"
            value={currentMedicine.name}
            onChange={(e) =>
              setCurrentMedicine({ ...currentMedicine, name: e.target.value })
            }
            sx={{ my: 1 }}
          />
          <TextField
            fullWidth
            label="Category"
            value={currentMedicine.category}
            onChange={(e) =>
              setCurrentMedicine({
                ...currentMedicine,
                category: e.target.value,
              })
            }
            sx={{ my: 1 }}
          />
          <TextField
            fullWidth
            label="Quantity"
            type="number"
            value={currentMedicine.quantity}
            onChange={(e) =>
              setCurrentMedicine({
                ...currentMedicine,
                quantity: e.target.value,
              })
            }
            sx={{ my: 1 }}
          />
          <TextField
            fullWidth
            label="Price"
            type="number"
            value={currentMedicine.price}
            onChange={(e) =>
              setCurrentMedicine({ ...currentMedicine, price: e.target.value })
            }
            sx={{ my: 1 }}
          />
          <TextField
            fullWidth
            type="date"
            label="Expiry Date"
            InputLabelProps={{ shrink: true }}
            value={currentMedicine.expiryDate}
            onChange={(e) =>
              setCurrentMedicine({
                ...currentMedicine,
                expiryDate: e.target.value,
              })
            }
            sx={{ my: 1 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">
            {editMode ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminPharmacyDashboard;
