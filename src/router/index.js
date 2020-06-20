import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Banner.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',  //路径
    redirect:'/home' //重定向
  },
  {
    path: '/part1/:id',  //模块一
    name:'part1',
    meta:{title:'模块一'},
    //props:true,
    props:{
      data:{
        a:1,
        b:2
      }
    },
    component: ()=>import('../views/Part/part1.vue')  //匹配的组件
  },
  {
    path: '/part2',  //模块二
    name:'part2',
    meta:{title:'模块二'},
    component: ()=>import('../views/Part/part2.vue')  //匹配的组件
  },
  {
    path: '/home',  //路径
    name:'home',
    meta:{title:'首页'},
    component: ()=>import('../views/Banner.vue')  //匹配的组件
  },
  {
    path: '/list',  //路径
    name:'list',
    meta:{title:'列表页'},
    component: ()=>import('../views/List.vue'), //匹配的组件
    children:[
      {
        path: '/list/info',  //路径
        //path:'info',  //二级路由
        name:'listInfo',
        meta:{title:'列表详情页'},
        component: ()=>import('../views/Banner.vue'), //匹配的组件
      }
    ]
  },
  {
    path: '/table',  //表格组件
    name:'table',
    meta:{title:'表格'},
    component: ()=>import('../views/Table/index.vue'), //匹配的组件
    children:[
      {
        path: '/table/testa',  //路径
        //path:'info',  //二级路由
        name:'tableTesta',
        meta:{title:'表格A'},
        component: ()=>import('../views/Table/testA.vue'), //匹配的组件
      },
      {
        path:'testb',  //二级路由
        name:'tableTestb',
        meta:{title:'表格B'},
        component: ()=>import('../views/Table/testB.vue'), //匹配的组件
      }
    ]
  },
  {
    path: '/slot',  //路径
    name:'slot',
    meta:{title:'插槽'},
    component: ()=>import('../views/slot/part1.vue')  //匹配的组件
  },
  {
    path: '/axios',  //路径
    name:'axios',
    meta:{title:'axios'},
    component: ()=>import('../views/axios/index.vue')  //匹配的组件
  }
]

const router = new VueRouter({
  linkActiveClass:'selected',    //默认路由样式
  routes
})

//路由拦截
router.beforeEach(function(to,from,next){
  // console.log(12345)
  if(!localStorage.getItem('sign')){
    if(to.path !=='/home'){
      next('/home')
    }
  }
  next()
})

export default router
