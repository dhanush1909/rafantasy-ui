<template>
  <div id="app">
    <Header />
    <LoginPage />
  </div>
</template>

<script>
import Header from "@/components/Header";
import LoginPage from "@/views/loginPage/LoginPage";

export default {
  name: "app",
  components: {
    Header,
    LoginPage,
  },
};
</script>
