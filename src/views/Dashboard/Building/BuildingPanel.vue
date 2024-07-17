<template>
  <div class="box">
    <div class="right-panel">
      <div class="card person">
        <div class="title">
          <div class="con">
            人员信息总览
          </div>
        </div>
        <div>PersonChart图表</div>
      </div>

      <div class="card assets">
        <div class="title">
          <div class="con">
            资产分类
          </div>
        </div>
        <div>资产分类图表</div>
      </div>

      <div class="card alarm-slide">
        <div class="title">
          <div class="con">
            预警轮播
          </div>
        </div>
        <div>预警轮播图表</div>
      </div>

      <div class="card alarm-type">
        <div class="title">
          <div class="con">
            智能预警
          </div>
        </div>
        <div>智能预警图表</div>
      </div>

      <div class="card car">
        <div class="title">
          <div class="con">
            车辆出入统计分析
          </div>
        </div>
        <div>车辆出入统计分析</div>
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
