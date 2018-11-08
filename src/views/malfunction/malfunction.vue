<template lang="html">
       <div class="home_main">
           <Row>
              <VHeader></VHeader>
           </Row>
           <Row>
               <Col span="16">
                  <div class="left">
                      <p class="titleinfo">
                        <span class="ico"></span>
                        鄂州市和TV故障热力图
                      </p>
                      <!--左上边框-->
                      <div class="line-box">
                          <i class="t-l-line"></i>
                          <i class="l-t-line"></i>
                      </div>
                      <!--右上边框-->
                      <div class="line-box">
                          <i class="t-r-line"></i>
                          <i class="r-t-line"></i>
                      </div>
                      <!--左下边框-->
                      <div class="line-box">
                          <i class="l-b-line"></i>
                          <i class="b-l-line"></i>
                      </div>
                          <!--右下边框-->
                      <div class="line-box">
                          <i class="r-b-line"></i>
                          <i class="b-r-line"></i>
                      </div>
                      <VMap></VMap>
                  </div>
               </Col>
               <Col span="8">
                    <div class="right">
                         <Row>
                             <div class="r_top" :style="{boxShadow:'0px 0px 5px #4788fb'}">
                               <p class="titleinfo">
                                 <span class="ico"></span>
                                 网络带宽故障图
                               </p>
                               <VBar height='240px'></VBar>
                             </div>
                         </Row>
                         <Row>
                           <div  class="r_bot" :style="{boxShadow:'0px 0px 5px #4788fb'}">
                             <p class="titleinfo">
                               <span class="ico"></span>
                                 故障分类
                             </p>
                             <VPie width="100%" height='240px' ></VPie>
                           </div>
                         </Row>
                    </div>
               </Col>
           </Row>
           <Row class="middle">
               <Col span="8" :style="{border:'1px solid #0f3262',marginRight:'8px',boxShadow:'0px 0px 5px #4788fb'}">
                 <p class="titleinfo">
                   <span class="ico"></span>
                     和TV型号
                 </p>
                 <VBar1 height='240px'></VBar1>
               </Col>
               <Col span="8" :style="{border:'1px solid #0f3262',marginRight:'8px',boxShadow:'0px 0px 5px #4788fb'}">
                 <p class="titleinfo">
                   <span class="ico"></span>
                     光猫
                 </p>
                 <VBar2 width="100%" height='240px'></VBar2>
               </Col>
               <Col span="8" :style="{width:'32.2%',border:'1px solid #0f3262',marginRight:'8px',boxShadow:'0px 0px 5px #4788fb'}">
                 <p class="titleinfo">
                   <span class="ico"></span>
                     时间段故障统计图
                 </p>
                 <div class="tablist1" :style="{marginBottom:'50px'}">
                    <ul>
                       <li v-for="(item,index) in  tabList" :class="{'active':currentIndex === index}"   @click="changeTab(index)">{{item}}</li>
                     </ul>
                  </div>
                 <VLine height='240px'></VLine>
               </Col>
           </Row>
           <Row class="bottom">
               <Col span="8" :style="{border:'1px solid #0f3262',marginRight:'8px',boxShadow:'0px 0px 5px #4788fb'}">
                 <p class="titleinfo">
                   <span class="ico"></span>
                     和TV厂家
                 </p>
                  <VBar3 height='240px'></VBar3>
               </Col>
               <Col span="8" :style="{border:'1px solid #0f3262',marginRight:'8px',boxShadow:'0px 0px 5px #4788fb'}">
                 <p class="titleinfo">
                   <span class="ico"></span>
                     电视盒子
                 </p>
                  <VBar4 height='240px'></VBar4>
               </Col>
               <Col span="8" :style="{width:'32.2%',border:'1px solid #0f3262',marginRight:'8px',boxShadow:'0px 0px 5px #4788fb'}">
                 <p class="titleinfo">
                   <span class="ico"></span>
                     地区故障统计图
                 </p>
                 <VBar5 height='240px'></VBar5>
               </Col>
           </Row>
       </div>

</template>

<script>
import VHeader from './components/header.vue'
import VMap from './components/heatmap.vue'
import VBar from './components/bar.vue'
import VBar1 from './components/bar_1.vue'
import VBar2 from './components/bar_2.vue'
import VBar3 from './components/bar_3.vue'
import VBar4 from './components/bar_4.vue'
import VBar5 from './components/bar_5.vue'
import VPie from './components/pie.vue'
import VLine from './components/line.vue'

export default {
  data() {
    return {
          currentIndex:1,
          tabList:['日','周','月','年']
    }

  },
  components:{
    VHeader,
    VMap,
    VBar,
    VBar1,
    VBar2,
    VBar3,
    VBar4,
    VBar5,
    VPie,
    VLine
  },
  methods: {
    //echart  tab切换
       changeTab(index){
         this.currentIndex = index
       }
  },
  created() {

  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.home_main{
  width: 100%;
  height: 100%;
  background-color: #101638;
}
.titleinfo{
  color:#2898fb;
  position: relative;
  left: 10px;
  top: 5px;
  font-size: 14px;
  font-weight: 600;
}
.ico{
  display:inline-block;
  width: 12px;
  height: 12px;
  position: relative;
  bottom: -1px;
  background-color: #2898fb;
}
.left{
  height: 537px;
  margin-left: 13px;
  margin-top: 18px;
  border:1px solid #0f3262;
  box-shadow: 0px 0px 5px #4788fb;
}
.line-box {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 0;
        i {
            background-color: #4788fb;
            box-shadow: 0px 0px 10px #4788fb;
            position: absolute;
            &.l-t-line{
                width: 5px;
                height: 24px;
                left: -4px;
                top: -21px;
            }
            &.t-l-line{
                height: 5px;
                width: 26px;
                left: -3px;
                top: -23px;
            }
            &.t-r-line{
                height: 5px;
                width: 26px;
                right:11px;
                top: -24px;
            }
            &.r-t-line{
                width: 5px;
                height: 24px;
                right: 11px;
                top: -21px;
            }
            &.l-b-line{
                width: 5px;
                height: 24px;
                left: -3px;
                bottom: 40px;
            }
            &.b-l-line{
                height: 5px;
                width: 26px;
                left: -3px;
                bottom: 37px;
            }
            &.r-b-line{
                width: 5px;
                height: 24px;
                right: 10px;
                bottom: 41px;
            }
            &.b-r-line{
                height: 5px;
                width: 26px;
                right: 10px;
                bottom: 38px;
            }
        }
  }
.right{
  height: 537px;
  margin-left: 11px;
  margin-right: 13px;
  margin-top: 18px;
  box-shadow: 0px 0px 10px #4788fb;
}
.r_top{
  height: 270px;
  border:1px solid #0f3262;
  margin-bottom: 8px;

}
.r_bot{
  height: 259px;
  border:1px solid #0f3262;

}
.middle{
  height: 259px;
  margin-left: 13px;
  margin-top: 18px;
  display: flex;
  flex:1;
  margin-right: 13px;
}

.bottom{
  height: 259px;
  margin-left: 13px;
  margin-top: 18px;
  margin-bottom: 20px;
  display: flex;
  flex:1;
  margin-right: 13px;
}
.tablist1{
       position: absolute;
       right: 9px;
       top: 5px;
       margin-bottom: 20px;
       ul{
         width: 200px;
         list-style: none;
         display:flex;
         height: 25px;

         border-radius: 3px;
         li{
           display: flex;
           cursor: pointer;
           justify-content: center;
           width: 50%;
           color: #2898fb;
           font-weight: 600;
           line-height: 23px;
           border:1px solid #2898fb;
           &:nth-child(1){
             border-right: none;
           }
           &:nth-child(3){
             border-left: none;
             border-right: none;
           }
           &.active{
             border:1px solid #2786d3;
             color:#fff;
             background-color: #2898fb;
           }
           &:last-child{

           }

         }
       }
    }
</style>
