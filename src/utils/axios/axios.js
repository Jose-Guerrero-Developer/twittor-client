import axios from "axios"

/**
 * En: Instance of Axios
 * Es: Instancia de Axios
 */
export const Axios = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json"
  }
});
