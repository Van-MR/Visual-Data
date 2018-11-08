<template>
    <div class="layout"  style="overflow-y:hidden">
        <Layout :style="{height: '100%'}">
            <Header :style="{background: '#2786d0', padding: '0 10px'}">
                <img src="../asset/image/logo.png" class="layout-logo" />
                <h3 :style="{float:'left',color:'#fff',marginLeft:'18px'}">和TV故障检测平台</h3>
                <!-- <Menu mode="horizontal"  active-name="/main/fault" @on-select="changeMenu">
                    <MenuItem name="/main/fault">
                        故障检测
                    </MenuItem>
                    <MenuItem name="/main/history">
                        检测历史
                    </MenuItem>
                </Menu> -->
                <shrinkableMenu
                  :menu-list="menuList"
                  :iconSize='12'
                  >
                </shrinkableMenu>
                <div class="layout-quit">
                    <Icon type="ios-person" class="person"></Icon>
                    <span>admin</span>
                    <div @click="logout">
                      <Icon type="ios-power" class="power"></Icon>
                    </div>
                </div>
            </Header>
        </Layout>
        <Layout>
          <Content :style="{padding: '0px', minHeight: '695px', background: '#fff'}">
              <router-view></router-view>
          </Content>
        </Layout>
    </div>
</template>
<script>
import  { mapState } from 'vuex'
import shrinkableMenu from './components/shrinkable-menu.vue'
const Main = r => require.ensure([], () => r(require('../views/main.vue')), 'Main')
const login = r => require.ensure([], () => r(require('../views/login.vue')), 'login')
const malfunction = r => require.ensure([], () => r(require('../views/malfunction/malfunction.vue')), 'malfunction')
const history = r => require.ensure([], () => r(require('../views/history/history.vue')), 'history')

let datas = [
  {
     path: '/main',
     name: 'fault',
     component: Main,
     children: [
         { path: 'fault', title: '故障大屏可视化', name: 'home_index', component: malfunction },

     ]
  },
  {
    path: '/main',
    name: 'history',
    component: Main,
    children: [
         { path: 'history', title: '数据预处理', name: 'main_history', component: history }
     ]
  }
]

    export default {
        data() {
          return {
            minH:null,
            loading:true,
            modal6: false
          }
        },
        components:{
          shrinkableMenu
        },
        created(){
          // 模拟拿到侧边栏菜单
          this.$store.commit('updateMenulist',datas);
        },
        computed: {
          ...mapState({
            names : state => state.user.username,
            menuList: state => state.app.menuList
          })
         },
        methods: {
            changeMenu (to) {
              this.$router.push({path: to});
            },
            logout() {
               //this.modal6 = true
               this.$Modal.confirm({
                            title: '提示',
                            content: '<h5>确定要退出吗?</h5>',
                            onOk: () => {
                                this.asyncOK()
                            },
                            onCancel: () => {
                                //this.$Message.info('Clicked cancel');
                            }
                        });
            },
            asyncOK() {
                setTimeout(()=> {
                    this.model6=false
                    //this.$store.commit('LoginOut')
                    this.$router.push('/login')
                },1000)
            },
            cancel() {
              this.modal6 = false;
            }
        },

    }
</script>
<style lang="scss" scoped>
.layout{
    background: #f5f7f9;
    position: relative;
    height: 100%;
}
.layout-logo{
    width: 120px;
    height: 30.48px;
     margin-top:18px;
    vertical-align: middle;
    float: left;
}
.layout .layout-quit{
    width: 170px;
    height: 35px;
    line-height: 35px;
    color: #FFF;
    float: right;
    border-radius: 100px;
    margin-top: 15px;
    border: 1px solid #f5f7f9;
    position: relative;
    top:-64px;
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
