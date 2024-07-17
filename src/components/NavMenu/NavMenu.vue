<script>
import { showRoutes } from '@/router/index'
import styleUtil from '@/utils/styleUtil.js'

export default {
  name: 'NavMenu',
  data() {
    return {
      routeData: showRoutes,
      styleUtil,
    }
  },
}
</script>

<template>
  <div class="nav-menu">
    <div v-for="(item) in routeData" :key="item.name" class="menu">
      <router-link
        :to="{ name: item.children[0].name }"
        tag="div"
        class="menu-icon normal"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav-menu {
  min-width: vw(74);
  min-height: vh(109);
  position: absolute;
  left: vw(22);
  top: vh(246);
  z-index: 999;

  .menu {
    height: vh(66);
    width: 100%;
    margin-bottom: vh(44);
    position: relative;
    cursor: pointer;

    &:hover .menu-list{
      display: block;
      transition: all .2s;
      z-index: 44;
    }

    &:nth-of-type(1){
      .normal {
        background-image: url("images/menu_全局总览_normat.png");
      }
      &:hover .menu-icon{
        background-image: url("images/menu_全局总览_selected.png");
        z-index: 55;
      }

      .menu-icon {
        &.router-link-exact-active,
        &.router-active-class {
          background-image: url("images/menu_全局总览_selected.png");
        }
      }
    }

    &:nth-of-type(2){
      .normal {
        background-image: url("images/menu_数字运营管理_normat.png");
      }
      &:hover .menu-icon{
        background-image: url("images/menu_数字运营管理_selected.png");
        z-index: 55;
      }
      .menu-icon {
        &.router-link-exact-active,
        &.router-active-class {
          background-image: url("images/menu_数字运营管理_selected.png");
        }
      }
    }

    &:nth-of-type(3){
      .normal {
        background-image: url("images/menu_数字产业发展_normat.png");
      }
      &:hover .menu-icon{
        background-image: url("images/menu_数字产业发展_normat.png");
        z-index: 55;
      }
      .menu-icon {
        &.router-link-exact-active,
        &.router-active-class {
          background-image: url("images/menu_数字产业发展_selected.png");
        }
      }
    }

    .menu-icon {
      position: absolute;
      left: 0;
      height: 120px;
      width: 120px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      z-index: 33;
      transition: all .2s;

    }
  }
}
</style>
