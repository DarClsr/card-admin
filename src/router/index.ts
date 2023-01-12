import { useStore } from 'vuex';
import { createRouter, RouteRecordRaw,createWebHashHistory } from "vue-router";
import shopRoute from "./modules/shop"
import cardRoute from "./modules/card"
import VideoRoute from "./modules/video"
import gameRoute from "./modules/game"
import nprogress from "nprogress"
import "nprogress/nprogress.css"
import store from "@/store";
import Layout from "@/layout/layout.vue"


const routes:RouteRecordRaw[]=[
   {
       path:"/",
       component:Layout,
       meta:{
           requireAuth:true
       },
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
        VideoRoute,
        gameRoute,
       ]
   },
   {
    path:"/login",
    name:"login",
    component:()=>import("../views/login/index.vue")
    },
    {
    path: "/:pathMatch(.*)*",
    name:"404",
    component:()=>import("../views/404/index.vue")
    }
]

const router=createRouter({
    history:createWebHashHistory(),
    routes
})

router.beforeEach((to,from)=>{
    nprogress.start();
    if(to.meta.requireAuth&&!store.state.user){
        return {
            path:"/login",
            query:{
                redirect:to.fullPath
            }
        }
    }
})

router.afterEach(()=>{
    nprogress.done();
})
export default router