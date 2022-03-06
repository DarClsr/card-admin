import { createRouter, RouteRecordRaw,createWebHashHistory } from "vue-router";
import shopRoute from "./modules/shop"
import cardRoute from "./modules/card"
import nprogress from "nprogress"
import "nprogress/nprogress.css"


import Layout from "@/layout/layout.vue"
const routes:RouteRecordRaw[]=[
   {
       path:"/",
       component:Layout,
       children:[
        {
            path:"/",
            name:"home",
            meta:{
                title:"首页"
            },
            component:()=>import("../views/home/index.vue")
        },
        shopRoute,
        cardRoute,
       ]
   },
   {
    path:"/",
    name:"login",
    component:()=>import("../views/login/index.vue")
    }
]

const router=createRouter({
    history:createWebHashHistory(),
    routes
})

router.beforeEach(()=>{
    nprogress.start();
})

router.afterEach(()=>{
    nprogress.done();
})
export default router