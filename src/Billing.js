import React, { useState, useEffect } from "react";
import axios from "axios";
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
} from "@mui/material";
import Sidebar from "./Sidebar";

function Billing() {
  const [billingList, setBillingList] = useState([]);

  const [patientName, setPatientName] = useState("");
  const [service, setService] = useState("");
  const [amount, setAmount] = useState("");
  const [billingDate, setBillingDate] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/billing")
      .then((res) => setBillingList(res.data))
      .catch((err) => console.error("Error fetching billing data:", err));
  }, []);

  const resetFields = () => {
    setPatientName("");
    setService("");
    setAmount("");
    setBillingDate("");
    setEditId(null);
  };

  const handleAddBilling = () => {
    if (patientName && service && amount && billingDate) {
      const newBilling = {
        patientName,
        service,
        amount: parseFloat(amount),
        billingDate,
      };

      axios
        .post("http://localhost:5000/api/billing", newBilling)
        .then((res) => {
          setBillingList([...billingList, res.data]);
          resetFields();
        })
        .catch((err) => console.error("Error adding billing:", err));
    } else {
      alert("Please fill all fields");
    }
  };

  const handleUpdateBilling = () => {
    if (patientName && service && amount && billingDate) {
      const updatedBilling = {
        patientName,
        service,
        amount: parseFloat(amount),
        billingDate,
      };

      axios
        .put(`http://localhost:5000/api/billing/${editId}`, updatedBilling)
        .then((res) => {
          const updatedList = billingList.map((b) =>
            b._id === editId ? res.data : b
          );
          setBillingList(updatedList);
          resetFields();
        })
        .catch((err) => console.error("Error updating billing:", err));
    } else {
      alert("Please fill all fields");
    }
  };

  const handleDeleteBilling = (id) => {
    axios
      .delete(`http://localhost:5000/api/billing/${id}`)
      .then(() => {
        setBillingList(billingList.filter((b) => b._id !== id));
      })
      .catch((err) => console.error("Error deleting billing:", err));
  };

  const handleEdit = (billing) => {
    setEditId(billing._id);
    setPatientName(billing.patientName);
    setService(billing.service);
    setAmount(billing.amount.toString());
    setBillingDate(billing.billingDate.split("T")[0]); // Assuming ISO date format
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Container
        sx={{
          flex: 1,
          paddingTop: 4,
          backgroundColor: "#dafbfd",
          paddingBottom: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Billing Management
        </Typography>

        <TextField
          label="Patient Name"
          fullWidth
          margin="normal"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />

        <TextField
          label="Service"
          fullWidth
          margin="normal"
          value={service}
          onChange={(e) => setService(e.target.value)}
        />

        <TextField
          label="Amount"
          type="number"
          fullWidth
          margin="normal"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <TextField
          label="Billing Date"
          type="date"
          fullWidth
          margin="normal"
          value={billingDate}
          onChange={(e) => setBillingDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />

        {editId ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleUpdateBilling}
            sx={{ mt: 2 }}
          >
            Update Billing
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddBilling}
            sx={{ mt: 2 }}
          >
            Add Billing
          </Button>
        )}

        <TableContainer component={Paper} sx={{ mt: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Patient Name</TableCell>
                <TableCell>Service</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Billing Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {billingList.map((bill, index) => (
                <TableRow key={bill._id}>
                  <TableCell>{index + 1}</TableCell> {/* ID → Serial Number */}
                  <TableCell>{bill.patientName}</TableCell>
                  <TableCell>{bill.service}</TableCell>
                  <TableCell>{bill.amount}</TableCell>
                  <TableCell>
                    {new Date(bill.billingDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleEdit(bill)}
                      sx={{ mr: 1 }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDeleteBilling(bill._id)}
                    >
                      Delete
                    </Button>
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

export default Billing;
