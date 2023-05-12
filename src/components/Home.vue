<template>
    

        <pv-card>
            <template #title> Avarage Performance </template>
            <template #content>
                <div v-for="values in value">  
                    <div> Volts {{ values.volts }}</div>

                    <div> Watts {{ values.watts }}</div>

                    <div> HP {{ values.hp }}</div>

                </div>

            </template>
        </pv-card>
          
           



    

</template>

<script>

import { healthchecksServices } from '../services/health-checks-api.services';
export default {
  
  name: "home",
  data(){
    return {
        value:[],
        healthService: new healthchecksServices()
    }
      
  },
  beforeMount(){
    this.getAll();
  },

  methods:{
     getAll(){
        this.healthService.getHealthchecks().then((response)=>{
            console.log('response',response.data)
            this.value=response.data;
        })

    },

    getProm(){
       
    }
  }
  
}
</script>

<style scoped>


</style>