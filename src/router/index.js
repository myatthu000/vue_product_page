import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "@/views/EventList";
import AboutView from "@/views/AboutView";
import EventDetail from "@/views/EventDetail";

// dist folder not found
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event",
    component: EventList,
  },
  {
    path: "/event/:id",
    name: "EventDetail",
    props: true,
    component: EventDetail,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
