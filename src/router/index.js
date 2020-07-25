import Vue from 'vue'
import VueRouter from 'vue-router'
import Task2 from '../views/Task2.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Task2',
    component: Task2
    
  },
 
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
