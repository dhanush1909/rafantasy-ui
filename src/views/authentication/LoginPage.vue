<template>
  <AuthCommon>
    <template slot="auth">
      <Login @toggleLogin="toggleAuth" v-if="isLogin" />
      <Register @toggleLogin="toggleAuth" v-else />
    </template>
  </AuthCommon>
</template>
<script>
import AuthCommon from "@/components/authCommon/AuthCommon";
import Login from "@/components/Login";
import Register from "../../components/Register";
export default {
  components: {
    AuthCommon,
    Login,
    Register,
  },
  data() {
    return {
      isLogin: true,
    };
  },
  methods: {
    toggleAuth() {
      this.isLogin = !this.isLogin;
    },
  },
};
</script>
