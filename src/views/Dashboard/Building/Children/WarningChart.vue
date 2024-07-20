<script>
import { BarChart } from '@/components/Chart'

export default {
  name: 'WarningChart',
  components: {
    BarChart,
  },
  data() {
    return {
      dataList: [],
      extraOption: {
        color: '#2d90d1',
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
      },
    }
  },
  created() {
    // 获取数据
    setTimeout(() => {
      this.dataList = [120, 200, 150, 80, 70, 110, 130]
    }, 200)

    // 更新数据
    setTimeout(() => {
      this.dataList = [400, 800, 150, 80, 70, 110, 130]
    }, 2000)
  },
  methods: {

  },
}
</script>

<template>
  <div id="warningChart">
    <BarChart :series-data="dataList" :extra-option="extraOption" />
  </div>
</template>

<style scoped lang="scss">
#warningChart {
  width: vw(258.461);
  height: vh(251.414);
  color: #fff;
}
</style>
