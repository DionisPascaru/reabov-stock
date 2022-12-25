<template>
  <div>
    <el-tabs type="card" v-if="categories.length > 1">
      <el-tab-pane v-for="category in categories" :key="category.id" :label="category.label">
        <div class="items">
          <div class="item" v-for="item in filterItems(items, category.id)" :key="item.id">
            <item-component :item="item"></item-component>
          </div>
        </div>
        <in-progress-component v-if="!filterItems(items, category.id).length"></in-progress-component>
      </el-tab-pane>
    </el-tabs>
    <div v-if="categories.length <= 1">
        <div class="items">
          <div class="item" v-for="item in items" :key="item.id">
            <item-component :item="item"></item-component>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import ItemComponent from "@/components/items/ItemComponent";
import InProgressComponent from "@/components/common/InProgressComponent.vue";

export default {
  name: 'ItemsComponent',
  props: {
    items: {
      type: Array,
    },
    categories: {
      default: () => {
        return [
          {
            id: 'all',
            label: 'All'
          }
        ]
      }
    }
  },
  components: {
    ItemComponent,
    InProgressComponent
  },
  methods: {
    filterItems(items, category) {
      if (category !== 'all') {
        return items.filter(item => item.category.includes(category));
      }

      return items;
    }
  }
}
</script>
