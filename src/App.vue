<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    //HelloWorld
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
#particles canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: #1a202c !important;
}
</style>
