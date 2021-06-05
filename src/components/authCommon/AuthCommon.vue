<template>
  <v-container fluid>
    <v-row
      class="main"
      :style="{ 'background-image': `url(${backgroundUrl})` }"
      no-gutter
    >
      <v-col cols="6"> </v-col>
      <v-col cols="6" class="greysclae-bg">
        <slot name="auth"></slot>
      </v-col>
    </v-row>
    <v-row gutters="30" style="margin-top: 1%; margin-left: 2%" >
      <v-col v-for="(item, index) in dummyContent" :style="{'margin-top': '30px'}" :key="index">
        <Info :num="index+1" :content="item.content"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import backgroundUrl from "@/assets/authentication/login-background.jpg";
import Info from "../../components/Info";

export default {
  name: "AuthCommon",
  data() {
    return {
      backgroundUrl,
      dummyContent: [{content: "Some Info goes here"}, {content: "test 1"}, {content: "test 2"}],
    };
  },
  components: {
    Info
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
