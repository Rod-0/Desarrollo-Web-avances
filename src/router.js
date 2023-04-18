import Home from '../src/components/Home.vue'
import FormData from "@/components/form-data.vue";
import ListComponent from "@/components/list-component.vue";
import NotFound from "@/components/NotFound.vue";

import {createRouter,createWebHashHistory}    from 'vue-router'

const routes = [
    {path:'/',component:Home },
    {path:'/AddTutorial/:id',component:FormData },
    {path:'/ListComponent',component:ListComponent },
    {path:'/:cathAll(.*)',component:NotFound}
    

]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default  router;