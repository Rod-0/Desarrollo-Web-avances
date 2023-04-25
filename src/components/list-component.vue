<template>
    <div class="grid">  <!--class=""-->
        <div v-for="category in categories">  <!--directivas -->
            <HeaderProject :name=category.name :username=category.username />
           
        </div>

    </div>
    
    
</template>

<script>

import HeaderProject from './HeaderProject.vue';

import { userServices } from '../services/user-api-services';

    export default{

        name:"list-component",
        components:{HeaderProject},
        data(){
            return {
                categories:null,//se llena antes de ser renderizado en el before mount
                 userService: new userServices()
            }
        },
        methods:{
            getAllUser:function(){
                this.userService.getUser().then((response)=>{
                console.log('response',response.data)
                this.categories=response.data;
            });

            }

            
        }, 

        beforeMount(){
            //invocando el supuesto api

            //get
           /*  this.userService.getUser().then(({data})=>{
                this.categories=data
            }) */



            this.getAllUser();

            //single responsibility
            //this.categories=[{name:'nombre 1'},{name:'nombre 2'},{name:'nombre 3'},{name:'nombre 4'}]
        }
    }


</script>

<style scoped>

.grid{
    display: grid;
    grid-template-columns:1fr 1fr;
    gap: 20px;
    width: 350px;
    
}

</style>