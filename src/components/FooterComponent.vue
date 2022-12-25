<template>
  <div class="container">
    <div class="footer">
      <div class="copyright">
        <span>Designed by</span>
        <img :src="require('@/assets/images/copyright.svg')" />
      </div>
      <div class="social-media">
        <div class="social-media-text">
          <span>Follow to</span>
          <span>be updated</span>
        </div>
        <div class="social-media-icon">
          <a href="https://instagram.com/reabovstock?igshid=YmMyMTA2M2Y=">
            <img :src="require('@/assets/images/instagram.svg')" />
          </a>
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
