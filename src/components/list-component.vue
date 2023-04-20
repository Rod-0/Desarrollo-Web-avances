<template>
    <div class="grid">  
        <div v-for="category in categories"> 
         <!--directivas -->
            <Card  :name=category.name :official=category.official :currencies=category.currencies :capital=category.capital 
            :region=category.region :subregion=category.subregion  :lenguages=category.lenguages :area=category.area  :population=category.population :flags=category.flags />
           
            </div>

    </div>
    
    
</template>

<script>

import Card from './Card.vue';

import { userServices } from '../services/user-api-services';

    export default{

        name:"list-component",
        components:{Card},
        data(){
            return {
                categories:[],//se llena antes de ser renderizado en el before mount
                 userService: new userServices()
            }
        },
       

        beforeMount(){
            
            this.userService.getUser().then(({data})=>{
                this.categories=data
            })
           
        }
    }


</script>

<style scoped>


</style>