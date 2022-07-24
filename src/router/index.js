import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "@/views/EventList";
import AboutView from "@/views/AboutView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event",
    component: EventList,
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
