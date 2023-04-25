<template>
    <div class="grid">  
        <div v-for="category in categories"> 
         <!--directivas -->
            <Card  :name=category.name.common :official=category.name.official :currencies=category.currencies.PEN :capital=category.capital[0]
            :region=category.region :subregion=category.subregion  :lenguages=Object.values(category.languages||{}).join()  :area=category.area  :population=category.population :flags=category.flags.png :coatOfarms=category.coatOfArms.png />
           
            </div>

    </div>
    
    
</template>

<script>

import Card from './card.component.vue';

import { userServices } from '../services/user-api.services';

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