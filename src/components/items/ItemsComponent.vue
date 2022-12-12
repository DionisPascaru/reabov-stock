<template>
  <div>
    <el-tabs type="card" v-if="categories">
      <el-tab-pane v-for="category in categories" :key="category.id" :label="category.label">
        <div class="items">
          <div class="item" v-for="item in filterItems(items, category.id)" :key="item.id">
            <item-component :item="item"></item-component>
          </div>
        </div>
        <div class="in-progress" v-if="!filterItems(items, category.id).length">
          <h1>{{ category.label }} in progress...</h1>
          <img :src="require('@/assets/progress.gif')" />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ItemComponent from "@/components/items/ItemComponent";

export default {
  name: 'ItemsComponent',
  props: {
    items: {
      type: Array,
    },
    categories: {
      type: Array
    }
  },
  components: {
    ItemComponent
  },
  methods: {
    filterItems(items, category) {
      if (category !== 'all') {
        return items.filter(item => item.category === category);
      }

      return items;
    }
  }
}
</script>
