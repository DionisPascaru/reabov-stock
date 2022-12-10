<template>
  <div class="container">
    <h1>3D Models</h1>
    <div class="items">
      <div class="item" v-for="item in this.items" :key="item.id">
        <item-component :item="item"></item-component>
      </div>
    </div>
  </div>
</template>

<script>
import { items } from '@/data/models.json';
import ItemComponent from "@/components/items/ItemComponent";

export default {
  name: 'ModelsView',
  components: {
    ItemComponent
  },
  data() {
    return {
      items: items
    }
  }
}
</script>
