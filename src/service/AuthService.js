import { LoginRequestDTO } from "@/models/Models";
import AuthController from "@/controllers/AuthController";

class AuthService {
  async login(email, password) {
    let loginDto = new LoginRequestDTO({ email, password });
    try {
      let res = AuthController.login(loginDto);
      Window.localStorage.setItem("jwt", res.jwt);
      console.log("login succesful: " + res.jwt);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new AuthService();
