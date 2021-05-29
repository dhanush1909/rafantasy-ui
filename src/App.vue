<template>
  <div id="app">
    <Header />
    <AuthCommon />
  </div>
</template>

<script>
import Header from "@/components/Header";
import AuthCommon from "@/views/authCommon/AuthCommon";

export default {
  name: "app",
  components: {
    Header,
    AuthCommon,
  },
};
</script>
