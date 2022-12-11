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
#app {
  margin-top: 60px;
}
</style>
