import { appRouter, otherRouter } from '../../router/router';
import Util from '../../libs/util.js';
import Cookies from 'js-cookie';
import Vue from 'vue';

const app = {
   state:{
     opendSubmenuArr:[],
     pageOpendList:[{
       path: 'fault',
       title: '故障检测',
       name: 'home_index'
     }],
     currentPageName:'',
     currenPath:[
       {
         path: 'fault',
         title: '故障检测',
         name: 'home_index'
       }
     ],
      menuList: []
   },
   mutations:{
     updateMenulist :(state,data) => {
           //序列化后储存
           localStorage.setItem('menuList',JSON.stringify(data));
           //解析成json对象读取
           state.menuList = JSON.parse(localStorage.getItem('menuList'));
       },
       cleanMenu: (state) => {
            localStorage.removeItem('menuList');
            state.menuList = [] ;
      },
     addOpenSubmenu (state, name) {
         let hasThisName = false;
         let isEmpty = false;
         if (name.length === 0) {
             isEmpty = true;
         }
         if (state.openedSubmenuArr.indexOf(name) > -1) {
             hasThisName = true;
         }
         if (!hasThisName && !isEmpty) {
             state.openedSubmenuArr.push(name);
         }
     }
   }
}

export default app;
