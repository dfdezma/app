import axios from "axios";
import Constants from "expo-constants";

const apiUrl =
  (Constants.expoConfig?.extra as { apiUrl: string })?.apiUrl ||
  "http://localhost:8000";

const client = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 segundos
});

export default client;
