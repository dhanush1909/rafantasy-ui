import Keycloak from "keycloak-js";
import store from "../store";

const INIT_OPTIONS = {
  url: "http://127.0.0.1:8180/auth",
  realm: "Rafantasy",
  clientId: "rafantasy-client",
  onLoad: "login-required",
};

class AuthService {
  constructor() {
    this.kc = Keycloak(INIT_OPTIONS);
  }

  init = (callback) => {
    this.kc
      .init({ onLoad: INIT_OPTIONS.onLoad })
      .then((auth) => {
        if (!auth) {
          window.location.reload();
        } else {
          store.dispatch("user/loginSuccessful", {
            parsedToken: this.kc.tokenParsed,
            token: this.kc.token,
          });
          localStorage.setItem("accessToken", this.kc.token);
          callback();
        }
      })
      .catch(() => {
        console.log("Authenticated Failed");
      });
  };

  logout = () => {
    this.kc.logout();
    store.dispatch("user/logoutSuccessful");
  };
}

export default new AuthService();
