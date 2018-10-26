import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login')
    },
    {
      path: '/layout',
      component: () => import('@/views/Layout'),
      redirect: '/layout/home', // 重定向
      meta: {
        title: '首页'
      },
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/Home')
        },
        {
          path: 'adminUser',
          name: 'adminUser',
          meta: {
            title: '管理员列表'
          },
          component: () => import('@/views/admin')
        },   
        {
          path: 'addAdmin',
          name: 'addAdmin',
          meta: {
            title: '添加管理员'
          },
          component: () => import('@/views/admin/add')
        },   
        {
          path: 'news',
          name: 'news',
          meta: {
            title: '新闻列表'
          },
          component: () => import('@/views/news')
        },   
        {
          path: 'addNews',
          name: 'addNews',
          meta: {
            title: '添加新闻'
          },
          component: () => import('@/views/news/add')
        },   
        {
          path: 'swiper',
          name: 'swiper',
          meta: {
            title: '轮播图列表'
          },
          component: () => import('@/views/swiper')
        },   
        {
          path: 'addSwiper',
          name: 'addSwiper',
          meta: {
            title: '添加轮播图'
          },
          component: () => import('@/views/swiper/add')
        },   
      ]
    }
  ]
})
