<template>
  <v-container fluid>
    <v-row
      class="main"
      :style="{ 'background-image': `url(${backgroundUrl})` }"
      no-gutter
    >
      <v-col cols="6"> </v-col>
      <v-col cols="6" class="greysclae-bg">
        <!-- <Login /> -->
        <slot name="auth"></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import backgroundUrl from "@/assets/loginPage/login-background.jpg";
// import Login from "@/components/Login";

export default {
  name: "AuthCommon",
  data() {
    return {
      backgroundUrl,
    };
  },
  components: {
    // Login,
  },
};
</script>

<style lang="scss" scoped>
.main {
  background-size: cover;
  background-position: center;
  height: 70vh;

  .col {
    padding: 0px;
  }
}
</style>
