import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueRouter from 'vue-router';
import { router } from './router/index';
import store from './store'
import Axios from 'axios'
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';

import BaiduMap from 'vue-baidu-map'
//引入百度地图
Vue.use(BaiduMap, {
  ak: 'wUYDdHvNZ2b3iOtLcbRczL9VDFpPhXx0'   //ak 是在百度地图开发者平台申请的密钥
})

Vue.use(iView);

//axios全局引用
Vue.prototype.$axios = Axios

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});
