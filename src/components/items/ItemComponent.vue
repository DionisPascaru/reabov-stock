<template>
  <div class="item-block">
    <div class="item-image">
      <img :src="require(`@/assets/images/${item.image}`)">
    </div>
    <div class="item-btn">
      <a class="btn" :href="item.url" target="_blank">Download</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemComponent',
  props: {
    item: {
      type: Object
    }
  }
}
</script>
