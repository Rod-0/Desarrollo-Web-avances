<template>
    <div class="grid">  
        <div v-for="values in value">  
            <Home :volts=values.volts :watts=values.watts :hp=values.hp />
           
        </div>

    </div>
    
    
</template>

<script>

import Home from './Home.vue';

import { healthchecksServices } from '../services/health-checks-api.services';

    export default{

        name:"home-component",
        components:{Home},
        data(){
            return {
                value:[],
                healthService: new healthchecksServices()
            }
        },
        methods:{
            getAll(){
                this.healthService.getHealthchecks().then((response)=>{
                console.log('response',response.data)
                this.value=response.data;
            })

            }

            
        }, 

        beforeMount(){
 
            this.getAll();   
        }
    }


</script>

<style scoped>



</style>