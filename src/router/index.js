import {createRouter,createWebHashHistory} from 'vue-router'
import Home from '@/view/Home/index.vue'
import RegTest from '@/view/Test/regTest/index.vue'
import LeafletMap from '@/view/LeafletMap/index.vue'

  const routes=[
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      // name:'home',
      component:Home,
      
    },
    {
      path:'/reg-test',
      name:'regTest',
      component:RegTest
    },
    // {
    //   path:'/radio',
    //   name:'radio',
    //   component:()=>import('@/view/Test/radio/index.vue'),
    // },
    {
      path:'/canvas',
      name:'canvas',
      component:()=>import('@/view/Test/canvas/index.vue'),
    },
    {
      path:'/leaflet-map',
      name:'leafletMap',
      component:LeafletMap
    }
    
  ] 
  const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass:'router-active',
    routes
  })
export default router