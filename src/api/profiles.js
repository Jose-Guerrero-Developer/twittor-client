import { Axios } from "../utils/axios/"

export class Profile {
  /**
   * En: Service to store a new user account
   * Es: Servicio para almacenar una nueva cuenta de usuario
   * @param {*} profile
   * @return Promise 
   */
  static Store(profile) {
    let data = profile
    delete data.repeatPassword
    return Axios.post("api/users", data)
  }
}
