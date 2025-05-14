import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
  IconButton,
  Chip,
  Tooltip,
  TextField,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { Visibility } from "@mui/icons-material";
import axios from "axios";

const AdminLabReports = () => {
  const [reports, setReports] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    axios.get("/api/labreports").then((res) => {
      setReports(res.data);
      setFiltered(res.data);
    });
  }, []);

  useEffect(() => {
    filterData();
  }, [statusFilter, searchTerm, reports]);

  const filterData = () => {
    let filteredData = [...reports];

    if (statusFilter !== "All") {
      filteredData = filteredData.filter((r) => r.status === statusFilter);
    }

    if (searchTerm.trim() !== "") {
      filteredData = filteredData.filter((r) =>
        r.patientName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFiltered(filteredData);
  };

  const handleViewPDF = (url) => {
    setPdfUrl(url);
    setOpenDialog(true);
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom color="primary">
        Lab Reports Dashboard
      </Typography>

      {/* Filters */}
      <Box display="flex" gap={2} mb={2}>
        <TextField
          label="Search by Patient"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
        />
        <TextField
          select
          label="Filter by Status"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          sx={{ minWidth: 200 }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </TextField>
      </Box>

      {/* Table */}
      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#e3f2fd" }}>
              <TableCell>Report ID</TableCell>
              <TableCell>Patient Name</TableCell>
              <TableCell>Test Type</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((report) => (
              <TableRow key={report._id}>
                <TableCell>{report._id.slice(-5)}</TableCell>
                <TableCell>{report.patientName}</TableCell>
                <TableCell>{report.testType}</TableCell>
                <TableCell>
                  {new Date(report.date).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Chip
                    label={report.status}
                    color={
                      report.status === "Completed"
                        ? "success"
                        : report.status === "Pending"
                        ? "warning"
                        : "default"
                    }
                  />
                </TableCell>
                <TableCell>
                  <Tooltip title="View Report">
                    <IconButton onClick={() => handleViewPDF(report.reportUrl)}>
                      <Visibility />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No reports match the criteria.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* PDF Preview Dialog */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Lab Report Preview</DialogTitle>
        <DialogContent>
          <iframe
            src={pdfUrl}
            width="100%"
            height="500px"
            title="Lab Report PDF"
            style={{ border: "none" }}
          ></iframe>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} variant="outlined">
            Close
          </Button>
          <Button href={pdfUrl} target="_blank" variant="contained">
            Open Fullscreen
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminLabReports;
