import { useEffect, useState } from "react";

import {
  Agriculture,
  Grass,
  Sensors,
  WaterDrop,
  Cloud,
  Warning,
} from "@mui/icons-material";

import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

import { getDashboardStats } from "../../services/api";

interface DashboardStats {
  total_farms: number;
  total_crops: number;
  active_sensors: number;
  active_irrigation: number;
}

function Dashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    total_farms: 0,
    total_crops: 0,
    active_sensors: 0,
    active_irrigation: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboardStats = async () => {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error("Failed to load dashboard statistics:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardStats();
  }, []);

  const statCards = [
    {
      title: "Total Farms",
      value: stats.total_farms,
      icon: <Agriculture />,
      description: "Active farms",
    },
    {
      title: "Total Crops",
      value: stats.total_crops,
      icon: <Grass />,
      description: "Growing crops",
    },
    {
      title: "Active Sensors",
      value: stats.active_sensors,
      icon: <Sensors />,
      description: "Online sensors",
    },
    {
      title: "Irrigation",
      value: stats.active_irrigation,
      icon: <WaterDrop />,
      description: "Systems active",
    },
  ];

  return (
    <Box>
      {/* Page Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold">
          Smart Agriculture Dashboard
        </Typography>

        <Typography color="text.secondary" sx={{ mt: 0.5 }}>
          Monitor your farms, crops, sensors and irrigation systems.
        </Typography>
      </Box>

      {/* Statistics */}
      <Grid container spacing={3}>
        {statCards.map((stat) => (
          <Grid key={stat.title} size={{ xs: 12, sm: 6, md: 3 }}>
            <Card
              elevation={0}
              sx={{
                border: "1px solid #E5E7EB",
                borderRadius: 3,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      {stat.title}
                    </Typography>

                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      sx={{ mt: 1 }}
                    >
                      {loading ? "..." : stat.value}
                    </Typography>

                    <Typography variant="caption" color="text.secondary">
                      {stat.description}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: "#E8F5E9",
                      color: "#2E7D32",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {stat.icon}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Second Row */}
      <Grid container spacing={3} sx={{ mt: 1 }}>
        {/* Weather */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            elevation={0}
            sx={{
              border: "1px solid #E5E7EB",
              borderRadius: 3,
              height: "100%",
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Cloud color="primary" />

                <Typography variant="h6" fontWeight="bold">
                  Weather
                </Typography>
              </Box>

              <Typography variant="h2" fontWeight="bold" sx={{ mt: 2 }}>
                28°C
              </Typography>

              <Typography color="text.secondary">
                Partly cloudy
              </Typography>

              <Box sx={{ mt: 3 }}>
                <Typography variant="body2">
                  Humidity: <strong>64%</strong>
                </Typography>

                <Typography variant="body2" sx={{ mt: 1 }}>
                  Wind: <strong>12 km/h</strong>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Irrigation */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            elevation={0}
            sx={{
              border: "1px solid #E5E7EB",
              borderRadius: 3,
              height: "100%",
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <WaterDrop color="primary" />

                <Typography variant="h6" fontWeight="bold">
                  Irrigation Status
                </Typography>
              </Box>

              <Box sx={{ mt: 3 }}>
                <Typography variant="body2">
                  Field A
                </Typography>

                <Typography color="success.main" fontWeight="bold">
                  ● Active
                </Typography>

                <Typography variant="body2" sx={{ mt: 2 }}>
                  Field B
                </Typography>

                <Typography color="warning.main" fontWeight="bold">
                  ● Scheduled
                </Typography>

                <Typography variant="body2" sx={{ mt: 2 }}>
                  Field C
                </Typography>

                <Typography color="error.main" fontWeight="bold">
                  ● Needs Attention
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Alerts */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            elevation={0}
            sx={{
              border: "1px solid #E5E7EB",
              borderRadius: 3,
              height: "100%",
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Warning color="warning" />

                <Typography variant="h6" fontWeight="bold">
                  Recent Alerts
                </Typography>
              </Box>

              <Box sx={{ mt: 3 }}>
                <Typography variant="body2">
                  ⚠ Soil moisture is low
                </Typography>

                <Typography variant="caption" color="text.secondary">
                  Field A · 10 minutes ago
                </Typography>

                <Typography variant="body2" sx={{ mt: 2 }}>
                  ⚠ Sensor battery low
                </Typography>

                <Typography variant="caption" color="text.secondary">
                  Sensor S-102 · 25 minutes ago
                </Typography>

                <Typography variant="body2" sx={{ mt: 2 }}>
                  ✓ Irrigation completed
                </Typography>

                <Typography variant="caption" color="text.secondary">
                  Field B · 1 hour ago
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}


export default Dashboard;