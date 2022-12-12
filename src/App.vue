<template>
  <div id="app">
    <menu-component></menu-component>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuComponent from "./components/MenuComponent";

export default {
  name: 'App',
  components: {
    MenuComponent
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
