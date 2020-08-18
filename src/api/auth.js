import JwtDecode from "jwt-decode"
import { Axios } from "../utils/axios/"

export class Auth extends Axios {
  /**
   * En: Expose the service to log in
   * Es: Expone el servicio para iniciar sesión
   * @param {*} profile
   * @return Promise
   */
  sign(profile) {
    let data = profile;
    return this.axios().post("api/sign", data);
  }
  /**
   * En: Returns the access token stored on the client
   * Es: Retorna el token de acceso almacenado en el cliente
   * @return String
   */
  getToken() {
    return JSON.parse(localStorage.getItem("token")) || {};
  }
  /**
   * En: Set the session data on the client
   * Es: Establecer los datos de sesión en el cliente
   * @param {*} data 
   */
  setSession(token) {
    const { _id: id, name, email, exp } = JwtDecode(token);
    localStorage.setItem("token", JSON.stringify({ id, name, email, exp, token }));
  }
  /**
   * En: Upload session data from local storage
   * Es: Cargar los datos de la sesión desde el local storage
   * @return {*}
   */
  payload() {
    const  { id, name, email } = JSON.parse(localStorage.getItem("token")) || {};
    return { id, name, email };
  }
  /**
   * En: Validate session status
   * Es: Validar estado de la sesión
   * @return Boolean
   */
  statusSession() {
    const token = this.getToken();
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
  logOff() {
    localStorage.removeItem("token")
  }
}
