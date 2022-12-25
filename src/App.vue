<template>
  <div id="app">
    <menu-component></menu-component>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import MenuComponent from "./components/MenuComponent";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: 'App',
  components: {
    MenuComponent,
    FooterComponent
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Poppins:wght@400;700&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  margin-top: 60px;
}
</style>
