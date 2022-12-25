<template>
  <div class="container">
    <div class="footer">
      <div class="copyright">
        <span>Designed by</span>
        <img :src="require('@/assets/images/copyright.svg')" />
      </div>
      <div class="social-media">
        <div class="social-media-icon">
          <img :src="require('@/assets/images/instagram.svg')" />
        </div>
        <div class="social-media-text">
          <span>Follow to</span>
          <span>be updated</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>
