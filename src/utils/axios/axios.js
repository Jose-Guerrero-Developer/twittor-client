import axios from "axios";
import { HOST } from "../../utils/constants";

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
      timeout: 1000, baseURL: HOST,
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
    this.instance.defaults.headers.common["Authorization"] = `Bearer ${ JSON.parse(localStorage.getItem("token"))?.token }`
    return this.instance;
  }
}
