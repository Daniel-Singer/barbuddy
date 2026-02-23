import axios from "axios";

// axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

axios.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("authToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});
