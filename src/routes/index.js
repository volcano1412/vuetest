import Vue from 'vue'
import Router from 'vue-router';
import HelloWorld from "@/components/HelloWorld";
import List from "@/components/board/List";

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/'
            ,component:HelloWorld
        }
        ,{
            path: '/board/list'
            ,component: List
        }
    ]
})