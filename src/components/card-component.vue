<template>
    <div class="grid">  
        <div v-for="category in categories"> 
         <!--directivas -->
            <Card  :name=category.name.common :official=category.name.official :currencies=category.currencies.PEN.name :capital=category.capital
            :region=category.region :subregion=category.subregion  :lenguages=category.languages.aym  :area=category.area  :population=category.population :flags=category.flags.png />
           
            </div>

    </div>
    
    
</template>

<script>

import Card from './Card.vue';

import { userServices } from '../services/user-api-services';

    export default{

        name:"card-componer",
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