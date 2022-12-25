<template>
  <div class="container">
    <div class="page-description">
      <logo-component></logo-component>
      <h1>FONTS</h1>
      <h2>PRINTABLE 3D MODELS</h2>
      <p>Select, download, modify, print and sell more than 5000 3D printable files in different sizes and different
        formats - .obj .stl and .3dm</p>
    </div>


      <div class="items">
        <div class="item" v-for="item in fonts" :key="item.id">
          <item-component :item="item"></item-component>
        </div>
      </div>

    <div class="coming-soon">
      <span>That's it... but</span>
      <span>MORE IS COMING</span>
      <a class="btn" href="#">JOIN ON PATREON</a>
    </div>
  </div>
</template>

<script>
import LogoComponent from "@/components/common/LogoComponent.vue";
import ItemComponent from "@/components/items/ItemComponent.vue";
import {fonts} from "@/data/fonts.json";

export default {
  name: 'FontsView',
  components: {
    LogoComponent,
    ItemComponent
  },
  data() {
    return {
      fonts: fonts
    }
  }
}
</script>
