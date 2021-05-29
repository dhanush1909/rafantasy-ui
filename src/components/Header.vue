<template>
  <div>
    <v-app-bar color="#1B1A17" dense>
      <v-toolbar-title>
        <img height="100px" src="@/assets/logo/logo.png" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="header-right-buttons">
        <v-btn class="orange">Sign Up</v-btn>
        <v-btn class="orange">Sign In</v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
.header-right-buttons button {
  padding: 0 8px !important;
  height: 25px !important;
  margin: 0 5px;
}
</style>
