<script>
export default {

}
</script>

<template>
  <div class="header">
    <div class="title">
      数字大厦数字孪生可视化平台
    </div>
    <div class="bg" />
  </div>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  height: vh(100);
  position: relative;
  margin: 0;
  font-family: "microsoft yahei";

  .title {
    font-size: vh(38);
    position: absolute;
    z-index: 33;
    color: #fff;
    left: vw(37);
    top: vh(27);
    font-weight: 600;
    font-style: italic;
  }

  .bg {
    width: vw(1613);
    height: 100%;
    position: absolute;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("images/bg_top.png");
  }
}
</style>
