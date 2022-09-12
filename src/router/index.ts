import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import WeekdayView from "@/views/WeekdayView.vue";
import WeekdayListView from "@/views/WeekdayListView.vue";
import GenreView from "@/views/GenreView.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/weekday"
  },
  {
    path: "/weekday",
    component: WeekdayView
  }, {
    path: "/weekdayList",
    component: WeekdayListView
  }, {
    path: "/genre",
    component: GenreView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router
