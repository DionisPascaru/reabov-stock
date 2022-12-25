<template>
  <div>
    <!-- desktop -->
    <div class="navigation-bar shadow" v-if="!isMobile">
      <el-menu mode="horizontal" :default-active="activeMenuItem"
               class="navigation-bar-menu"
               background-color="transparent"
               :router="true">
        <el-menu-item class="menu-item" index="ModelsView" :route="{ name: 'ModelsView'}">3D MODELS</el-menu-item>
        <el-menu-item class="menu-item" index="FontsView" :route="{ name: 'FontsView'}">FONTS</el-menu-item>
        <el-menu-item class="menu-item" index="SoundsView" :route="{ name: 'SoundsView'}">SOUND</el-menu-item>
        <el-menu-item class="menu-item" index="4">ABOUT</el-menu-item>
        <el-menu-item class="menu-item" index="5">CONTACT</el-menu-item>
      </el-menu>
    </div>

    <!-- mobile -->
    <div v-if="isMobile">
      <div class="navigation-bar-mobile collapse-menu shadow" :class="{active: this.isActive}">
        <el-menu
            :default-active="activeMenuItem"
            :class="{active: this.isActive}"
            class="navigation-bar-menu"
            background-color="transparent"
            :router="true">
          <el-menu-item class="menu-item" index="ModelsView" @click="this.collabseMenu" :route="{ name: 'ModelsView'}">3D MODELS</el-menu-item>
          <el-menu-item class="menu-item" index="FontsView" @click="this.collabseMenu" :route="{ name: 'FontsView'}">FONTS</el-menu-item>
          <el-menu-item class="menu-item" index="SoundsView" @click="this.collabseMenu" :route="{ name: 'SoundsView'}">SOUND</el-menu-item>
          <el-menu-item class="menu-item" index="4" @click="this.collabseMenu">ABOUT</el-menu-item>
          <el-menu-item class="menu-item" index="5" @click="this.collabseMenu">CONTACT</el-menu-item>
        </el-menu>
        <div class="collapse-btn" :class="{active: this.isActive}" @click="this.collabseMenu">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MenuComponent',
  components: {},
  data() {
    return {
      isActive: false,
      windowWidth: window.innerWidth,
    }
  },
  computed: {
    activeMenuItem() {
      return this.$route.name;
    },
    isMobile() {
      return this.windowWidth < 768;
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
  methods: {
    collabseMenu() {
      this.isActive = !this.isActive;
    },
  }
}
</script>
<style scoped>

</style>
