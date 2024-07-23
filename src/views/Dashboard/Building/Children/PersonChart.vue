<script>
import { PieChart } from '@/components/Chart'

const SOCKET_TYPE_PEOPLE_DATA = 'peopleData'

export default {
  name: 'PeopleInfo',
  components: {
    PieChart,
  },
  data() {
    return {
      dataList: [],
      extraOption: {
        title: {
          text: '人员信息数据',
        },
        series: [
          {
            name: '人员占比',
            center: ['50%', '90%'],
            radius: ['30%', '50%'],
            startAngle: 180,
            endAngle: 360,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#333C41',
              borderWidth: 2,
            },
          },
        ],
      },
    }
  },
  beforeDestroy() {
    this.$socket.unRegisterCallBack(SOCKET_TYPE_PEOPLE_DATA)
  },
  created() {
    this.$socket.registerCallBack(SOCKET_TYPE_PEOPLE_DATA, this.updatePeopleChart.bind(this))

    this.$socket.send({
      action: 'getData',
      socketType: SOCKET_TYPE_PEOPLE_DATA,
      chartName: 'people',
      value: 'type=year', // 参数
    })

    // 获取数据
    // setTimeout(() => {
    //   this.dataList = [
    //     {
    //       name: '教师',
    //       value: 20,
    //     },
    //     {
    //       name: '学生',
    //       value: 60,
    //     },
    //     {
    //       name: '清洁工',
    //       value: 20,
    //     },
    //   ]
    // }, 200)

    // // 更新数据
    // setTimeout(() => {
    //   this.dataList = [
    //     {
    //       name: '教师',
    //       value: 20,
    //     },
    //     {
    //       name: '学生',
    //       value: 120,
    //     },
    //     {
    //       name: '清洁工',
    //       value: 20,
    //     },
    //   ]
    // }, 2000)
  },
  methods: {
    // 更新echart的方法
    updatePeopleChart(recvData) {
      console.log('通过webSocket获取的图表数据', recvData)
      const { data } = recvData
      this.dataList = data
    },
  },
}
</script>

<template>
  <div class="people-info-box">
    <div id="peopleInfo">
      <PieChart :series-data="dataList" :extra-option="extraOption" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.people-info-box {
  display: flex;
  justify-content: space-between;

  #peopleInfo {
    width: vw(160);
    height: vh(240);
    flex: 1;
  }
}
</style>
