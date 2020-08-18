import axios from "axios";

/**
 * En: Instance of Axios
 * Es: Instancia de Axios
 */
export class Axios {
  /**
   * En: It contains the instance of axios
   * Es: Contiene la instancia de axios
   */
  instance = undefined
  constructor() {
    this.instance = axios.create({
      timeout: 1000, baseURL: "http://localhost:8080",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  /**
   * En: Returns the instance of axios
   * Es: Retorna la instancia de axios
   * @return {*}
   */
  axios() {
    return this.instance;
  }
}
