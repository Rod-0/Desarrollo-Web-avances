import NotFound from "@/components/NotFound.component.vue";
import Footer from "@/components/footer.component.vue";
import GetInformation from "@/components/getInfo.component.vue";

import {createRouter,createWebHashHistory}    from 'vue-router'

const routes = [
    {path:'/',component:GetInformation },
    {path:'/GetInformation',component:GetInformation },
    {path:'/Footer',component:Footer },
    {path:'/:cathAll(.*)',component:NotFound}
    

]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default  router;