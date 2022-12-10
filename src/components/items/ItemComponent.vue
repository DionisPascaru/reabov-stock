<template>
  <div class="item-block">
    <div class="item-image">
      <img :src="require(`@/assets/images/${item.image}`)">
    </div>
    <div class="item-btn">
      <a class="btn" :href="item.url">See item on Patreon</a>
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
