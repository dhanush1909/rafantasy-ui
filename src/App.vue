<template>
  <div id="app">
    <Header />
    <!-- <AuthCommon /> -->
    <LoginPage />
  </div>
</template>

<script>
import Header from "@/components/Header";
// import AuthCommon from "@/views/authCommon/AuthCommon";
import LoginPage from "@/views/loginPage/LoginPage";

export default {
  name: "app",
  components: {
    Header,
    LoginPage,
    // AuthCommon,
  },
};
</script>
