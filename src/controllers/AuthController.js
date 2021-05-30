import BaseController from "./BaseController";

//TODO: Export all controllers into prototype

const URL = "/auth";
class AuthController extends BaseController {
  constructor() {
    super(URL);
  }

  async login(loginDto) {
    let res = await this.api.post("/login", loginDto);
    return res;
  }
}

export default new AuthController();
