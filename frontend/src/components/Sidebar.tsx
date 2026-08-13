import {
  Dashboard,
  Agriculture,
  People,
  Grass,
  WaterDrop,
  Sensors,
  Cloud,
  Warning,
  Assessment,
  Settings,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const menuItems = [
  { label: "Dashboard", icon: <Dashboard /> },
  { label: "Farms", icon: <Agriculture /> },
  { label: "Farmers", icon: <People /> },
  { label: "Crops", icon: <Grass /> },
  { label: "Irrigation", icon: <WaterDrop /> },
  { label: "Sensors", icon: <Sensors /> },
  { label: "Weather", icon: <Cloud /> },
  { label: "Alerts", icon: <Warning /> },
  { label: "Reports", icon: <Assessment /> },
  { label: "Settings", icon: <Settings /> },
];

function Sidebar() {
  return (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        backgroundColor: "#12372A",
        color: "white",
        position: "fixed",
        left: 0,
        top: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Logo */}
      <Box sx={{ padding: 3 }}>
        <Typography variant="h5" fontWeight="bold">
          🌱 Smart Agriculture
        </Typography>

        <Typography
          variant="body2"
          sx={{ opacity: 0.7, marginTop: 0.5 }}
        >
          Management System
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.15)" }} />

      {/* Navigation */}
      <List sx={{ padding: 2 }}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.label}
            sx={{
              borderRadius: 2,
              marginBottom: 0.5,
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.12)",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
                minWidth: 40,
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>

      {/* Version */}
      <Box sx={{ marginTop: "auto", padding: 3 }}>
        <Typography variant="caption" sx={{ opacity: 0.6 }}>
          Smart Agriculture v1.0
        </Typography>
      </Box>
    </Box>
  );
}

export default Sidebar;