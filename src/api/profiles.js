import { Axios } from "../utils/axios/"

export class Profile {
  static Store(profile) {
    let data = profile
    delete data.repeatPassword
    return Axios.post("api/users", data)
  }
}
