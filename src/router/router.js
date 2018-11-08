const Main = r => require.ensure([], () => r(require('../views/main.vue')), 'Main')
const login = r => require.ensure([], () => r(require('../views/login.vue')), 'login')
const malfunction = r => require.ensure([], () => r(require('../views/malfunction/malfunction.vue')), 'malfunction')
const history = r => require.ensure([], () => r(require('../views/history/history.vue')), 'history')


export const normalRouter = [
    {
        path: '/',
        redirect:'/login'
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
      path: '/fault',
      name: 'home_index',
      component: malfunction
    }
]
export const appRouter = [
  {
    path: '/main',
    name: 'history',
    component: Main,
    children: [
         { path: 'history', title: '数据预处理', name: 'main_history', component: history }
     ]
  }
]


export const routers = [
    ...normalRouter,
    ...appRouter
];
