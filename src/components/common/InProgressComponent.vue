<template>
  <div>
    <div class="in-progress">
      <h1>Ops, we are working hard to upload new products soon...</h1>
      <img :src="require('@/assets/progress.gif')"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InProgressComponent'
}
</script>
