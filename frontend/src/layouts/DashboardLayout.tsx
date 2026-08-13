import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F5F7F6",
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Topbar */}
      <Topbar />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          marginLeft: "250px",
          paddingTop: "64px",
          minHeight: "100vh",
        }}
      >
        <Box sx={{ padding: 3 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardLayout;