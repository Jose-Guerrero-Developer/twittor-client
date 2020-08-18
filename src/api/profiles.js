import { Auth  } from "../api/"
import { Axios } from "../utils/axios/";

export class Profile extends Axios {
  /**
   * En: Service to obtain an account profile by ID
   * Es: Servicio para obtener el perfil de una cuenta por ID
   * @param {*} id
   * @return Promise
   */
  getID(id) {
    this.axios().defaults.headers.common["Authorization"] = `Bearer ${ Auth.getToken()?.token }`
    return this.axios().get("api/profiles", {
      params: {
        id
      }
    });
  }
  /**
   * En: Service to store a new user account
   * Es: Servicio para almacenar una nueva cuenta de usuario
   * @param {*} profile
   * @return Promise 
   */
  Store(profile) {
    let data = profile;
    delete data.repeatPassword;
    return this.axios().post("api/users", data);
  }
}
