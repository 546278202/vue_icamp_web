
// import Router from 'vue-router'

// Vue.use(Router)
// //require.ensure实现代码打包分离
// const login = r =>require.ensure([],() =>r(require('../page/login')),login);
// const routes = [
//   {
//     path:'/',
//     component: login
//   }
// ]
// export default new Router({
//     routes,
//     strict:process.env.NODE_ENV !== 'production',  //设置环境变量
// })
import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
