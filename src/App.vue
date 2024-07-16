<template>
  <div id="app" class="cmpt">
    <el-button>按钮</el-button>
    <div class="text">
      hellow world
      哈哈哈
      123456789
    </div>
    <div class="viewer">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text {
  width: vw(200);
  height: vh(100);
  font-size: px2font(24);
  /* font-family: 'digital'; */
  /* font-family: 'douyu-light'; */
  /* font-family: 'date'; */
  font-family: 'DinMedium';
}
</style>
