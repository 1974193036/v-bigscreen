<script>
import TheHeader from '@/components/TheHeader/Header.vue'

export default {
  components: {
    TheHeader,
  },
}
</script>

<template>
  <div id="app" class="cmpt">
    <TheHeader />
    <div class="viewer">
      <router-view />
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
