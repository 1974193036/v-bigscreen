<script>
import PersonChart from './Children/PersonChart'
import WarningCarousel from './Children/WarningCarousel.vue'
import WarningChart from './Children/WarningChart.vue'
import VehicleChart from './Children/VehicleChart.vue'

export default {
  name: 'RightCharts',
  components: {
    PersonChart,
    WarningCarousel,
    WarningChart,
    VehicleChart,
  },
  data() {
    return {
      assetsData: [
        {
          icon: require('./images/icon_room.png'),
          name: '房间',
          unit: '间',
          value: 105,
        },
        {
          icon: require('./images/icon_architecture.png'),
          name: '建筑面积',
          unit: 'm2',
          value: 1359800,
        },
        {
          icon: require('./images/icon_renting.png'),
          name: '可租面积',
          unit: 'm2',
          value: 2565,
        },
        {
          icon: require('./images/icon_equipment.png'),
          name: '机器设备',
          unit: '台',
          value: 122,
        },
        {
          icon: require('./images/icon_electron.png'),
          name: '电子设备',
          unit: '台',
          value: 104,
        },
        {
          icon: require('./images/icon_property.png'),
          name: '无形资产',
          unit: '个',
          value: 56,
        },
      ],
    }
  },
}
</script>

<template>
  <div class="box">
    <div class="right-panel">
      <div class="card person">
        <div class="title">
          <div class="con">
            人员信息总览
          </div>
        </div>
        <PersonChart />
      </div>

      <div class="card assets">
        <div class="title">
          <div class="con">
            资产分类
          </div>
        </div>
        <div class="assets-list">
          <div v-for="item in assetsData" :key="item.value" class="assets-item">
            <img class="icon" :src="item.icon" alt="">
            <div class="name-unit">
              {{ item.name }}/{{ item.unit }}
            </div>
            <div class="value">
              {{ item.value }}
            </div>
          </div>
        </div>
      </div>

      <div class="card alarm-slide">
        <div class="title">
          <div class="con">
            预警轮播
          </div>
        </div>
        <WarningCarousel />
      </div>

      <div class="card alarm-type">
        <div class="title">
          <div class="con">
            智能预警
          </div>
        </div>
        <WarningChart />
      </div>

      <div class="card car">
        <div class="title">
          <div class="con">
            车辆出入统计分析
          </div>
        </div>
        <VehicleChart />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.right-panel {
  width: vw(590);
  float: left;

  .person {
    float: left;
    margin-right: vw(3.7);
    margin-bottom: vh(5.5);
  }

  .assets {
    float: left;
    margin-bottom: vh(5.5);

    .assets-list {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-evenly;
      margin-top: vh(21.95);
      .assets-item {
        min-width: vw(88.85);
        margin-bottom: vh(9.76);
        .icon {
          width: vh(31.22);
          height: vh(31.22);
          margin-bottom: vh(10.73);
        }
        .name-unit {
          font-size: vh(11.71);
          color: #E8F7FF;
          line-height: vh(17.075);
          text-align: center;
        }
        .value {
          font-size: vh(19.51);
          font-weight: bold;
          color: #00E6FF;
          background: linear-gradient(0deg, #FFFFFF 0%, #B2E6FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }

  .alarm-slide {
    height: vh(618);
    float: left;
    margin-right: vw(3.7);
    margin-bottom: vh(5.5);
  }

  .alarm-type {
    height: vh(273);
    float: left;
    margin-bottom: vh(4.9);
  }

  .car {
    float: left;
    margin-bottom: vh(4.9);
  }

  .card {
    width: vw(288);
    min-height: vh(306);
    box-sizing: border-box;
    background-color: rgba(0, 12, 19, .8);
    border: 1px solid rgba(0,0,0,0);
    padding-left: vw(9);
    padding-right: vw(9);
    border-radius: vw(3);
    .title {
      border-bottom: 2px solid rgba(255,255,255,.3) ;
      padding-bottom: vh(8);
      padding-top: vh(8);
      position: relative;
      &::after {
        content: '';
        position: absolute;
        border: 1px solid rgba(255,255,255,.15);
        width: 100%;
        left: 0;
        bottom: vh(-5);
      }
      .con {
        width: fit-content;
        margin: 0 auto;
        font-size: vh(22);
        font-weight: 400;
        color: #FFFFFF;
        text-align: center;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          width: vh(17);
          height: vh(17);
          background-image: url("./images/title_decorate.png");
          background-size: 100% 100%;
          left: vw(-18);
          top: vh(4);
        }
        &::after {
          content: '';
          position: absolute;
          width: vh(17);
          height: vh(17);
          background-image: url("./images/title_decorate.png");
          background-size: 100% 100%;
          right: vw(-18);
          top: vh(4);
        }
      }

    }
  }
}
</style>
