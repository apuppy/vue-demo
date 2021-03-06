import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import Brazil from "./views/Brazil.vue"
import Hawaii from "./views/Hawaii.vue"
import Jamaica from "./views/Jamaica.vue"
import Panama from "./views/Panama.vue"


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            
            component: () =>
                import(/* webpackChunkName:"about"*/ "./views/About.vue")
        },
        {
            path: "/brazil",
            name: "brazil",
            component: Brazil
        },
        {
            path: "/hawaii",
            name: "hawaii",
            component: Hawaii
        },
        {
            path: "/jamaica",
            name: "jamaica",
            component: Jamaica
        },
        {
            path: "/panama",
            name: "panama",
            component: Panama
        },
    ]
});