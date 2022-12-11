<template>
  <div>
    <!-- descktop -->
    <div class="navigation-bar shadow" v-if="!isMobile">
      <el-menu mode="horizontal" :default-active="activeIndex"
               class="navigation-bar-menu"
               @select="handleSelect"
               background-color="transparent"
               :router="true">
        <el-menu-item class="menu-item" index="1" :route="{ name: 'ModelsView'}">3D MODELS</el-menu-item>
        <el-menu-item class="menu-item" index="2" :route="{ name: 'FontsView'}">FONTS</el-menu-item>
        <el-menu-item class="menu-item" index="4" :route="{ name: 'SoundsView'}">SOUND</el-menu-item>
        <el-menu-item class="menu-item" index="3">ABOUT</el-menu-item>
        <el-menu-item class="menu-item" index="5">CONTACT</el-menu-item>
      </el-menu>
    </div>

    <!-- mobile -->
    <div v-if="isMobile">
      <div class="navigation-bar-mobile collapse-menu shadow" :class="{active: this.isActive}">
        <el-menu
            :default-active="activeIndex"
            :class="{active: this.isActive}"
            class="navigation-bar-menu"
            @select="handleSelect"
            background-color="transparent"
            :router="true">
          <el-menu-item class="menu-item" index="1" @click="this.collabseMenu" :route="{ name: 'ModelsView'}">3D MODELS</el-menu-item>
          <el-menu-item class="menu-item" index="2" @click="this.collabseMenu" :route="{ name: 'FontsView'}">FONTS</el-menu-item>
          <el-menu-item class="menu-item" index="4" @click="this.collabseMenu" :route="{ name: 'SoundsView'}">SOUND</el-menu-item>
          <el-menu-item class="menu-item" index="3" @click="this.collabseMenu">ABOUT</el-menu-item>
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
      activeIndex: '1',
      isActive: false,
      windowWidth: window.innerWidth,
    }
  },
  computed: {
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
    handleSelect(key) {
      this.activeIndex = key;
    },
    collabseMenu() {
      this.isActive = !this.isActive;
    },
  }
}
</script>
<style scoped>

</style>
