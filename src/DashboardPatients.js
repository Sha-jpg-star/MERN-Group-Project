import {
    Box,
    Grid,
    Card,
    CardContent,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
  } from '@mui/material';
  
  import EventIcon from '@mui/icons-material/Event';
  import PersonIcon from '@mui/icons-material/Person';
  import LogoutIcon from '@mui/icons-material/Logout';
  import PaymentsIcon from '@mui/icons-material/Payments';
  import MedicationIcon from '@mui/icons-material/Medication';
  
  const drawerWidth = 240;
  
  const DashboardPatients = () => {
    return (
      <Box sx={{ display: 'flex' }}>
        {/* Sidebar */}
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: '#8e24aa', // purple like original
              color: 'white',
            },
          }}
        >
          <List>
            <ListItem button>
              <ListItemIcon><EventIcon sx={{ color: 'white' }} /></ListItemIcon>
              <ListItemText primary="Appointments" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><MedicationIcon sx={{ color: 'white' }} /></ListItemIcon>
              <ListItemText primary="Prescriptions" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><PaymentsIcon sx={{ color: 'white' }} /></ListItemIcon>
              <ListItemText primary="Bills" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><PersonIcon sx={{ color: 'white' }} /></ListItemIcon>
              <ListItemText primary="My Profile" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><LogoutIcon sx={{ color: 'white' }} /></ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Drawer>
  
        {/* Main Dashboard Content */}
        <Box component="main" sx={{ flexGrow: 1, bgcolor: '#ccf4ff', p: 3 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Patient Dashboard
          </Typography>
  
          {/* Cards */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ backgroundColor: '#1976d2', color: 'white' }}>
                <CardContent>
                  <Typography variant="h6">Appointments</Typography>
                  <Typography variant="h4">3</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ backgroundColor: '#43a047', color: 'white' }}>
                <CardContent>
                  <Typography variant="h6">Prescriptions</Typography>
                  <Typography variant="h4">5</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ backgroundColor: '#e53935', color: 'white' }}>
                <CardContent>
                  <Typography variant="h6">Pending Bills</Typography>
                  <Typography variant="h4">$250</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ backgroundColor: '#fbc02d', color: 'white' }}>
                <CardContent>
                  <Typography variant="h6">Health Tips</Typography>
                  <Typography variant="body1">Drink more water!</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  };
  
  export default DashboardPatients;
  

