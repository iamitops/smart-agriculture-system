import axios from "axios";

const API_URL = "http://localhost:8000";

export const getDashboardStats = async () => {
  const response = await axios.get(`${API_URL}/api/dashboard`);
  return response.data;
};