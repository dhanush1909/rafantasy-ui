<template>
  <div>
    <v-btn
      fab
      dark
      small
      color="#A35709"
      style="margin-left: 5%; margin-bottom: -4%; z-index: 100">
      {{num}}
    </v-btn>
    <v-card
      class="justify-center"
      min-width="350"
      max-width="350"
      min-height="150"
      max-height="150"
      outlined
      rounded
      color="#F0E3CA"
    >
      <div class="info-class">
        <p>{{content}}</p>
      </div>
  </v-card>
</div>
</template>

<script>
export default {
  name: "Info",
  props: {
    num: {
      type: Number,
      required: true
    },
    content: {
      type: String
    }
  }
}
</script>

<style scoped>
.info-class {
  margin: auto;
  text-align: center;
  padding: 70px 0;
}
</style>