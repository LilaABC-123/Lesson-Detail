import Vue from 'vue'
import VueRouter from 'vue-router'
import LessonListContent from '../components/LessonListContent.vue'
import LessonDetailContent from '../components/LessonDetailContent.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/lesson-list' },
  { path: '/lesson-list', name: 'LessonList', component: LessonListContent },
  { path: '/lesson-detail/:id', name: 'LessonDetail', component: LessonDetailContent, props: true }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
