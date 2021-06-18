import Vue from "vue";
import Vuex from "vuex";
import UserStore from "./module/UserStore";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: UserStore,
  },
});
