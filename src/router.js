import Home from '../src/components/Home.vue';
import NotFound from "@/components/NotFound.vue";
import HealthChecks from "@/components/Health-Checks.component.vue";
import {createRouter,createWebHashHistory}    from 'vue-router'



const routes = [
    {path:'/',component:Home },
    {path:'/HealthChecks',component:HealthChecks},
    {path:'/:cathAll(.*)',component:NotFound}
    

]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default  router;