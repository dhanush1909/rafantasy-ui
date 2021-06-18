const getState = () => ({
  user: {
    username: "",
    firstName: "",
    lastName: "",
    loggedIn: false,
    accessToken: "",
    roles: [],
  },
});

const getGetters = () => ({
  user: (state) => state.user,
  fullName: (state) => `${state.user.firstName} ${state.user.lastName}`,
  roles: (state) => state.user.roles,
});

const getActions = () => ({
  loginSuccessful({ commit }, { parsedToken, token }) {
    let user = {
      username: parsedToken.preferred_username,
      firstName: parsedToken.given_name ? parsedToken.given_name : "",
      lastName: parsedToken.family_name ? parsedToken.family_name : "",
      loggedIn: true,
      accessToken: token,
    };

    commit("setUser", user);
  },

  logoutSuccessful({ commit }) {
    commit("setUser", {
      username: "",
      firstName: "",
      lastName: "",
      loggedIn: false,
      accessToken: "",
      roles: [],
    });
  },
});

const getMutations = () => ({
  setUser(state, user) {
    state.user = user;

    console.log(state.user);
  },

  setRoles(state, roles) {
    state.user.roles = roles;
  },
});

export default {
  namespaced: true,
  state: getState(),
  getters: getGetters(),
  actions: getActions(),
  mutations: getMutations(),
};
