import Keycloak from 'keycloak-js';

const INIT_OPTIONS = {
  url: 'http://127.0.0.1:8180/auth', realm: 'Rafantasy', clientId: 'rafantasy-client', onLoad: 'login-required'
}

class AuthService {
    constructor() {
        this.kc = Keycloak(INIT_OPTIONS);
    }

    init = (callback) => {
        this.kc.init({ onLoad: INIT_OPTIONS.onLoad }).then((auth) => {
            if (!auth) {
                window.location.reload();
            } else {
                callback();
            }

        }).catch(() => {
            console.log("Authenticated Failed");
        });
    }

    logout = () => this.kc.logout();
}

export default new AuthService();