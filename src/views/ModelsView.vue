<template>
  <div class="container">
    <div class="page-description">
      <logo-component></logo-component>
      <h1>JEWELRY</h1>
      <h2>PRINTABLE 3D MODELS</h2>
      <p>Select, download, modify, print and sell more than 5000 3D printable files in different sizes and different
        formats - .obj .stl and .3dm</p>
    </div>

    <el-tabs type="card">
      <el-tab-pane label="All">
        <items-component :items="allItems"></items-component>
      </el-tab-pane>
      <el-tab-pane label="Rings">
        <items-component :items="rings" :categories="this.ringCategoriesEnum"></items-component>
      </el-tab-pane>
      <el-tab-pane label="Earrings">
        <items-component :items="earrings"></items-component>
      </el-tab-pane>
    </el-tabs>
    <div class="coming-soon">
      <span>That's it... but</span>
      <span>MORE IS COMING</span>
      <a class="btn" href="#">JOIN ON PATREON</a>
    </div>
  </div>
</template>

<script>
/** External data */
import { rings } from '@/data/rings.json';
import { earrings } from '@/data/earrings.json';

/** Categories enums */
import ringCategoriesEnum from '@/enums/rings-category.enum';

/** Components */
import LogoComponent from '@/components/common/LogoComponent';
import ItemsComponent from "@/components/items/ItemsComponent";

export default {
  name: 'ModelsView',
  components: {
    LogoComponent,
    ItemsComponent
  },
  data() {
    return {
      rings: rings,
      earrings: earrings,
      ringCategoriesEnum: ringCategoriesEnum
    }
  },
  computed: {
    allItems() {
      return [...this.rings, ...this.earrings];
    }
  }
}
</script>
