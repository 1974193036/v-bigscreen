<script>
import { PieChart } from '@/components/Chart'

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
  created() {
    // 获取数据
    setTimeout(() => {
      this.dataList = [
        {
          name: '教师',
          value: 20,
        },
        {
          name: '学生',
          value: 60,
        },
        {
          name: '清洁工',
          value: 20,
        },
      ]
    }, 200)

    // 更新数据
    setTimeout(() => {
      this.dataList = [
        {
          name: '教师',
          value: 20,
        },
        {
          name: '学生',
          value: 120,
        },
        {
          name: '清洁工',
          value: 20,
        },
      ]
    }, 2000)
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
