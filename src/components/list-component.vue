<template>
    <div class="grid">  <!--class=""-->
        <div v-for="category in categories">  <!--directivas -->
        <HeaderProject :name=category.name  />
    </div>

    </div>
    
    
</template>

<script>

import HeaderProject from './HeaderProject.vue';

    export default{

        name:"list-component",
        components:{HeaderProject},
        data(){
            return {
                categories:[] //se llena antes de ser renderizado en el before mount
            }
        },
        beforeMount(){
            //invocando el supuesto api

            this.categories=[{name:'nombre 1'},{name:'nombre 2'},{name:'nombre 3'},{name:'nombre 4'}]
        }
    }


</script>

<style scoped>

.grid{
    display: grid;
    grid-template-columns:1fr 1fr;
    grid-gap: 10px;
}

</style>