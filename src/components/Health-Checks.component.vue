<template>
    
    
       

    
    
    
    <pv-datatable :value="checks" tableStyle="min-width: 50rem">
        <pv-column field="id" header="Record Id"></pv-column>
        <pv-column field="name" header="Treadmill Id"></pv-column>
        <pv-column field="category" header="Serial Number"></pv-column>
        <pv-column field="quantity" header="Center Name"></pv-column>
        <pv-column field="quantity" header="Date"></pv-column>
        <pv-column field="quantity" header="Time"></pv-column>
        <pv-column field="quantity" header="Volts"></pv-column>
        <pv-column field="quantity" header="Watts"></pv-column>
        <pv-column field="quantity" header="HP"></pv-column>
    </pv-datatable>


</template>
    
<script>
import { healthchecksServices } from '../services/health-checks-api.services';
export default {
  
    name: "records",
    data(){
        return {
        checks:[],
        healthService: null
        }
      
  },

  created(){
    this.healthService=new healthchecksServices();
  },
  mounted(){
    this.healthService.getHealthchecks().then(data=>this.checks=data)
  }


  
  
}

</script>
    
<style scoped>
</style>