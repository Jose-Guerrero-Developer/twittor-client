import JwtDecode from "jwt-decode"
import { Axios } from "../utils/axios/"

export class Auth {
  /**
   * En: Expose the service to log in
   * Es: Expone el servicio para iniciar sesión
   * @param {*} profile
   * @return Promise
   */
  static Sign(profile) {
    let data = profile;
    return Axios.post("api/sign", data);
  }
  /**
   * En: Returns the access token stored on the client
   * Es: Retorna el token de acceso almacenado en el cliente
   * @return String
   */
  static GetToken() {
    return JSON.parse(localStorage.getItem("token")) || {};
  }
  /**
   * En: Set the session data on the client
   * Es: Establecer los datos de sesión en el cliente
   * @param {*} data 
   */
  static SetSession(token) {
    const { name, email, exp } = JwtDecode(token);
    localStorage.setItem("token", JSON.stringify({ name, email, exp }));
  }
  /**
   * En: Validate session status
   * Es: Validar estado de la sesión
   * @return Boolean
   */
  static StatusSession() {
    const token = this.GetToken();
    if (token.length <= 0) {
      return false;
    }
    const { exp } = token;
    const expires = exp - Date.now();
    if (expires < 1) {
      return true;
    }
    return false;
  }
  /**
   * En: Remove session status
   * Es: Remover estado de sesión
   */
  static LogOff() {
    localStorage.removeItem("token")
  }
}
