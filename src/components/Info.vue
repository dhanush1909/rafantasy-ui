<template>
  <div>
    <v-card class="text-container" outlined rounded>
      <v-btn fab dark small class="number-text">
        {{ num }}
      </v-btn>
      <div class="info-class">
        <p>{{ content }}</p>
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
      required: true,
    },
    content: {
      type: String,
    },
  },
};
</script>

<style scoped>
.info-class {
  margin: auto;
  text-align: center;
  padding: 70px 0;
}
.text-container {
  min-width: 250px;
  max-width: 70%;
  min-height: 150px;
  max-height: 150px;
  background-color: #f0e3ca !important;
  margin: 0 auto;
}

.number-text {
  background-color: #a35709 !important;
  position: absolute;
  top: -20px;
  left: 5%;
}
</style>
