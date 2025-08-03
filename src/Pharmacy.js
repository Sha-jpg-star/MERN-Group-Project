import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import Sidebar from "./Sidebar";

function Pharmacy() {
  const [pharmacyData, setPharmacyData] = useState([]);
  const [form, setForm] = useState({
    MedicineName: "",
    Quantity: "",
    ExpireDate: "",
  });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm({
      MedicineName: "",
      Quantity: "",
      ExpireDate: "",
    });
    setEditId(null);
  };

  const handleSubmit = () => {
    if (editId !== null) {
      const updated = pharmacyData.map((item, index) =>
        index === editId ? form : item
      );
      setPharmacyData(updated);
    } else {
      setPharmacyData([...pharmacyData, form]);
    }
    resetForm();
  };

  const handleEdit = (index) => {
    setEditId(index);
    setForm(pharmacyData[index]);
  };

  const handleDelete = (index) => {
    const filtered = pharmacyData.filter((_, i) => i !== index);
    setPharmacyData(filtered);
    resetForm();
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Container sx={{ flex: 1, mt: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
          Pharmacy Management
        </Typography>

        {/* Form */}
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography
            variant="h6"
            gutterBottom
            fontWeight="bold"
            color="primary"
          >
            {editId !== null ? "Update Medicine" : "Add New Medicine"}
          </Typography>

          <TextField
            fullWidth
            label="Medicine Name"
            name="MedicineName"
            value={form.MedicineName}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Quantity"
            name="Quantity"
            value={form.Quantity}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Expire Date"
            name="ExpireDate"
            value={form.ExpireDate}
            onChange={handleChange}
            margin="normal"
          />

          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Button
              variant="contained"
              color={editId !== null ? "secondary" : "primary"}
              onClick={handleSubmit}
            >
              {editId !== null ? "Update Medicine" : "Add Medicine"}
            </Button>
            {editId !== null && (
              <Button variant="outlined" onClick={resetForm}>
                Cancel
              </Button>
            )}
          </Box>
        </Paper>

        {/* Table */}
        <TableContainer component={Paper} sx={{ mt: 4 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
              <TableRow>
                <TableCell><b>ID</b></TableCell>
                <TableCell><b>Medicine Name</b></TableCell>
                <TableCell><b>Quantity</b></TableCell>
                <TableCell><b>Expire Date</b></TableCell>
                <TableCell><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pharmacyData.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#fafafa" : "white",
                    transition: "background-color 0.3s",
                    "&:hover": { backgroundColor: "#f0f0f0" },
                  }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.MedicineName}</TableCell>
                  <TableCell>{item.Quantity}</TableCell>
                  <TableCell>{item.ExpireDate}</TableCell>
                  <TableCell>
                    <IconButton color="primary" onClick={() => handleEdit(index)}>
                      <Edit />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDelete(index)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default Pharmacy;