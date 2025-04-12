import React, { useState } from 'react';
import { Box, Typography, TextField, List, ListItem, ListItemText, Button, Divider } from '@mui/material';
import SidebarDoctors from './SidebarDoctors';  // Assuming the sidebar is imported

const MyPatients = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const allPatients = [
    { id: 1, name: "John Doe", age: 30, condition: "Fever", status: "Active" },
    { id: 2, name: "Jane Smith", age: 45, condition: "Diabetes", status: "Under Treatment" },
    { id: 3, name: "Tom Hanks", age: 60, condition: "Heart Disease", status: "Recovered" },
  ];

  const filteredPatients = allPatients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <SidebarDoctors /> {/* Now using SidebarDoctors in the layout */}
      <Box sx={{ padding: 2, flexGrow: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>My Patients</Typography>
        
        <TextField
          label="Search Patients"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        
        <List>
          {filteredPatients.length > 0 ? (
            filteredPatients.map((patient) => (
              <ListItem key={patient.id} sx={{ backgroundColor: "#f5f5f5", marginBottom: 1, borderRadius: 2 }}>
                <ListItemText
                  primary={`${patient.name}, Age: ${patient.age}`}
                  secondary={`Condition: ${patient.condition}, Status: ${patient.status}`}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginLeft: 2 }}
                  onClick={() => alert(`Scheduling appointment for ${patient.name}`)}
                >
                  Schedule Appointment
                </Button>
              </ListItem>
            ))
          ) : (
            <Typography>No patients found</Typography>
          )}
        </List>

        <Divider sx={{ marginTop: 2 }} />
      </Box>
    </Box>
  );
};

export default MyPatients;