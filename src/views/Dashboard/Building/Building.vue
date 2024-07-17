<script>
import { roamData, seasonData, timeData, weatherData } from './staticData.js'
import BuildingPanel from './BuildingPanel'

export default {
  name: 'Building',
  components: {
    BuildingPanel,
  },
  data() {
    return {
      currentMenuIndex: -1,
      roamData,
      timeData,
      seasonData,
      weatherData,
    }
  },
  methods: {
    // 复原场景
    reset() {
      console.log('复原场景')
    },
    // 底部菜单切换
    onMenuSelect(index) {
      if (index === this.currentMenuIndex)
        return

      this.currentMenuIndex = index
      this.reset()
    },
    // 漫游
    startMapRoam(index) {
      console.log(index)
    },
    // 切换时间
    switchTime(data) {
      const { value } = data
      console.log(value)
    },
    // 切换天气
    switchWeather(data) {
      const { value } = data
      console.log(value)
    },
    // 切换季节
    switchSeason(data) {
      const { value } = data
      console.log(value)
    },
  },
}
</script>

<template>
  <div class="building">
    <div class="right-panel">
      <BuildingPanel />
    </div>
    <div class="bottom-bg" />
    <div class="bottom-menu">
      <div class="outer-menu roma" :class="currentMenuIndex === 0 ? 'show' : '' ">
        <div
          v-for="(item, index) in roamData"
          :key="index"
          class="menu"
          @click="startMapRoam(index)"
        >
          <div class="icon" />
          <div class="name">
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="outer-menu time" :class="currentMenuIndex === 1 ? 'show' : '' ">
        <div
          v-for="(item) in timeData"
          :key="item.value"
          class="menu"
          @click="switchTime(item)"
        >
          <div class="icon" />
          <div class="name">
            {{ item.title }}
          </div>
        </div>
      </div>
      <div class="outer-menu weather" :class="currentMenuIndex === 2 ? 'show' : '' ">
        <div
          v-for="(item) in weatherData"
          :key="item.value"
          class="menu"
          @click="switchWeather(item)"
        >
          <div class="icon" />
          <div class="name">
            {{ item.title }}
          </div>
        </div>
      </div>
      <div class="outer-menu season" :class="currentMenuIndex === 3 ? 'show' : '' ">
        <div
          v-for="(item) in seasonData"
          :key="item.value"
          class="menu"
          @click="switchSeason(item)"
        >
          <div class="icon" />
          <div class="name">
            {{ item.title }}
          </div>
        </div>
      </div>

      <div class="inner-menu">
        <div
          class="menu roma"
          :class="currentMenuIndex === 0 ? 'active' : '' "
          @click="onMenuSelect(0, 'roma')"
        >
          <img src="./images/icon_roam.png" class="icon" alt="">
          <span class="name">漫游</span>
        </div>
        <div
          class="menu time"
          :class="currentMenuIndex === 1 ? 'active' : '' "
          @click="onMenuSelect(1, 'time')"
        >
          <img src="./images/icon_diurnalchange.png" class="icon" alt="">
          <span class="name">昼夜</span>
        </div>
        <div
          class="menu weather"
          :class="currentMenuIndex === 2 ? 'active' : '' "
          @click="onMenuSelect(2, 'weather')"
        >
          <img src="./images/icon_weather.png" class="icon" alt="">
          <span class="name">天气</span>
        </div>
        <div
          class="menu season"
          :class="currentMenuIndex === 3 ? 'active' : '' "
          @click="onMenuSelect(3, 'season')"
        >
          <img src="./images/icon_seasons.png" class="icon" alt="">
          <span class="name">季节</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .building {
    position: relative;
    width: 100%;
    height: 100%;
    .right-panel {
      position: absolute;
      right: 0;
      z-index: 335;
    }
    .bottom-bg {
      width: 100%;
      height: vh(219);
      background: linear-gradient(0deg, rgba(0, 12, 19, 0.9) 0%, rgba(0, 12, 19, 0) 100%);
      position: absolute;
      bottom: 0;
    }
    .bottom-menu {
      width: vw(665);
      height: vh(109);
      position: absolute;
      bottom: 10px;
      left: vw(406);

      .outer-menu {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url("images/bg02.png");
        background-size: 100% 100%;
        transition: all .2s;
        transform: translateY(100%);
        &.show{
          transform: translateY(0);
        }
        .menu {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: vw(48);
          flex-wrap: wrap;
          cursor: pointer;
         //  border: 1px solid red;
          &:nth-of-type(1) {
            left: vw(175);
            top: vh(15);
          }
          &:nth-of-type(2) {
            left: vw(274);
            top: vh(7);
          }
          &:nth-of-type(3) {
            left: vw(371);
            top: vh(7);
          }
          &:nth-of-type(4) {
            left: vw(470);
            top: vh(16);
          }
          .icon {
            width: vw(7);
            height: vw(7);
            background: linear-gradient(0deg, #47FCEB, #47C3FC);
            border-radius: 50%;
          }
          .name {
            font-size: vh(14);
            color: #fff;
            font-weight: 300;
            width: 100%;
          }
        }
      }

      .inner-menu {
        position: absolute;
        width: 100%;
        height: 50%;
        background-image: url("images/bg01.png");
        background-size: 100% 100%;
        z-index: 9;
        bottom: 0;
        .menu {
          width: vw(59);
          height: vh(35);
          background-image: url("images/box_normat.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          cursor: pointer;
          .icon {
            width: vw(15);
            height: vh(16);
          }
          .name {
            font-size: vh(17);
            color: #fff;
            text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.3);
            font-weight: 500;
          }

          &.roma{
            left: vw(177);
          }
          &.time {
            left: vw(263);
            top: vh(-10);
          }
          &.weather {
            left: vw(347);
            top: vh(-10);
          }

          &.season {
            left: vw(431);
          }
          &.active {
            background-image: url("images/box_selected.png");
          }
        }
      }
    }
  }
  </style>
