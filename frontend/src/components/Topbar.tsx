import {
  AccountCircle,
  NotificationsNone,
  Search,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";

function Topbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        left: 250,
        width: "calc(100% - 250px)",
        backgroundColor: "white",
        color: "#1F2937",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Search */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#F3F4F6",
            borderRadius: 2,
            px: 2,
            width: 300,
          }}
        >
          <Search sx={{ color: "#6B7280", mr: 1 }} />

          <InputBase
            placeholder="Search..."
            sx={{
              flex: 1,
            }}
          />
        </Box>

        {/* Right side */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton>
            <NotificationsNone />
          </IconButton>

          <Avatar
            sx={{
              width: 36,
              height: 36,
              backgroundColor: "#2E7D32",
            }}
          >
            <AccountCircle />
          </Avatar>

          <Box sx={{ ml: 1 }}>
            <Typography variant="body2" fontWeight="bold">
              Admin User
            </Typography>

            <Typography variant="caption" color="text.secondary">
              Administrator
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;