<script>
import Highcharts from 'highcharts/highstock'
import Highcharts3D from 'highcharts/highcharts-3d'

Highcharts3D(Highcharts)

export default {
  name: 'PeopleInfo',
  data() {
    return {
      HighChart: null,
    }
  },
  mounted() {
    this.initHighCart()
    window.addEventListener('resize', () => {
      this.resizeHighcharts()
    })
  },
  methods: {
    initHighCart() {
      this.HighChart = Highcharts.chart('peopleInfo', {
        chart: {
          type: 'pie',
          backgroundColor: 'rgba(0,0,0,0)',
          options3d: {
            enabled: true,
            alpha: 60,
          },
        },
        colors: ['#47FCEB', '#EC7C59', '#01AEFF'],
        title: {
          text: null,
          margin: 0,
        },
        plotOptions: {
          pie: {
            innerSize: 120, // 饼图中心空心圆的大小
            allowPointSelect: true,
            cursor: 'pointer',
            size: 340,
            depth: 60,
            dataLabels: {
              enabled: true,
              color: '#fff',
              distance: -50, // --设置偏移，使文字显示在图形内
              padding: 15,
              style: {
                fontSize: '20px', // --设置文字大小
                textOutline: '1px 1px rgba(255,255,255,.0)',
                textShadow: '2px 2px 2px rgba(2,2,2,.4)',
              },
              formatter() {
                return `
                    <p>${this.key}</p>
                `
              },
            },
          },
        },
        series: [
          {
            name: '人员信息总览',
            data: [
              ['员工数量', 168],
              ['访客数量', 34],
              ['陌生人数量', 10],
            ],
          },
        ],
      })
    },
    resizeHighcharts() {
      // console.log(this.HighChart)
    },
  },
}
</script>

<template>
  <div class="people-info-box">
    <div id="peopleInfo" />
    <div class="people-info">
      <div class="item">
        <span>员工数量</span>
        <span style="color: #47FCEB">168</span>
      </div>
      <div class="item">
        <span>访客数量</span>
        <span style="color: #EC7C59">34</span>
      </div>
      <div class="item">
        <span>陌生人数量</span>
        <span style="color: #01AEFF">10</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.people-info-box {
  display: flex;
  justify-content: space-between;
  margin-top: vh(54);

  #peopleInfo {
    width: vw(160);
    height: vh(138);
    flex: 1;
  }

  .people-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    text-align: left;
    font-family: digital;

    .item {
      display: flex;
      align-items: center;
      span:nth-child(1) {
        font-size: vh(14);
        width: vw(59.07);
      }
      span:nth-child(2) {
        font-size: vh(30.6);
        text-align: left;
        width: vw(48);
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
