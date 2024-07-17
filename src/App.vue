<script>
import TheHeader from '@/components/TheHeader/Header.vue'
import NavMenu from '@/components/NavMenu/NavMenu.vue'

export default {
  components: {
    TheHeader,
    NavMenu,
  },
  data() {
    return {
      transitionName: '',
    }
  },
}
</script>

<template>
  <div id="app" class="cmpt">
    <TheHeader />
    <NavMenu />
    <div class="viewer">
      <transition name="slide-right" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  overflow: hidden;
}
.viewer {
  width: 100%;
  height: vh(980);
  overflow: hidden;
}
</style>

<style>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.slide-right-enter-from {
  transform: translateX(-50%);
  opacity: 0;
}

.slide-right-leave-to {
  transform: translateX(50%);
  opacity: 0;
}
</style>
