import Vue from "vue";
import VueRouter from "vue-router";
import MapData from "./../pages/MapData";
import ChartsData from "./../pages/ChartsData";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: MapData,
        },
        {
            path: '/charts',
            component: ChartsData,
        }
    ],
    mode: 'history'
});