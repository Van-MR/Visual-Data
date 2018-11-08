<template lang="html">
    <div class="layout">
      <Header :style="{background: '#1b2b8c', padding: '0 10px'}">
          <img src="../../../asset/image/logo.png" class="layout-logo" />
          <h3 class="headline">鄂州移动和TV故障检测平台</h3>
          <p class="realtime">{{nowtime}}</p>
          <p class="skip">
            <router-link :to="{ name: 'main_history'}">数据预处理</router-link>
          </p>
          <div class="layout-quit">
              <Icon type="ios-person" class="person"></Icon>
              <span>admin</span>
              <div>
                <Icon type="ios-power" class="power"></Icon>
              </div>
          </div>
      </Header>
    </div>
</template>

<script>
export default {
    data(){
      return {
          nowtime:''
      }
    },
    watch:{
    
    },
    mounted(){
       this.time()
    },
    methods:{
      time(){
          var vWeek,vWeek_s,vDay;
          vWeek = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
          var date =  new Date();
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var day = date.getDate();
          var hours = date.getHours();
          var minutes = date.getMinutes();
          var seconds = date.getSeconds();
          vWeek_s = date.getDay();
          this.nowtime = year + "年" + month + "月" + day + "日" + "\t" + vWeek[vWeek_s] ;
        }

    }
}
</script>

<style lang="scss" scoped>
.layout{
    background: #f5f7f9;
    position: relative;
    height: 100%;
    border: 1px solid #0f50a0;
}
.layout-logo{
    width: 120px;
    height: 30.48px;
     margin-top:18px;
    vertical-align: middle;
    float: left;
    margin-left: 20px;
}
.layout .layout-quit{
    width: 170px;
    height: 35px;
    line-height: 35px;
    color: #FFF;
    border-radius: 100px;
    margin-top: 15px;
    border: 1px solid #f5f7f9;
    position: absolute;
    right: 10px;
    top: 1px;
}
.layout .layout-quit .power{
    font-size: 20px;
    color: #FFF;
    position: absolute;
    right: 10px;
    top: 7px;
}
.layout .layout-quit .person{
    font-size: 20px;
    color: #FFF;
    position: absolute;
    left: 10px;
    top: 7px;
}
.layout .layout-quit span{
    padding-left: 30px;
}
.headline{
  position: absolute;
  left: 40%;
  color:rgb(31, 153, 253);
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  font-style: normal;
}
.realtime{
    position: relative;
    left: 40px;
    font-family: SourceHanSansSC;
    font-weight: 700;
    font-size: 14px;
    color: rgba(220, 242, 255, 1);
    font-style: normal;
    letter-spacing: 0px;
    width: 400px;
}
.skip{
    position: absolute;
    right: 19%;
    top: 2px;
    font-size: 14px;
    font-weight: 700;
    a{
      color:#ffffff;
    }
}
</style>
<style>
  .ivu-breadcrumb{
      margin: 0;
      height: 45px;
      line-height: 45px;
      padding: 0 15px;
      border-bottom: 1px solid #e5e9ee;
      background-color: #f3f6fb;
  }
  .ivu-breadcrumb>span:last-child{
      font-size: 12px;
      font-weight: 600;
      color: #495060;
  }
  .ivu-menu-vertical .ivu-menu-item{
      padding: 12px 24px;
  }
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active{
    border-bottom: none;
  }
  .ivu-menu-light .ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){
    border-right: none;
    color:#447ed9;
  }
  .ivu-menu .ivu-menu-vertical .ivu-menu-light:after{
    background:none;
    width:0;
  }
  .ivu-layout,.ivu-layout-content{
          height: 100%;
  }
  .ivu-menu-light {
    background:none;
    width: 500px;
    margin-left: 300px;
    color:#fff;
  }
  .ivu-menu-horizontal.ivu-menu-light:after {
     content: none;
     display: block;
     width: 100%;
     height: 1px;
     background: #dcdee2;
     position: absolute;
     bottom: 0;
     left: 0;
 }
 .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu {
    height: inherit;
    line-height: inherit;
    border-bottom: 2px solid transparent;
    color: #fff;
}
 .ivu-menu-item {
    width: 150px;
    margin-right: 10px;
    font-weight: 500;
 }
 .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
    color: #fff;
    border-bottom: 2px solid #fff;

}
</style>
