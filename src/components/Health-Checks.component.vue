<template>
    
    
       

    
    
    
    <pv-datatable :value="checks"  paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
        <pv-column field="id" header="Record Id"  sortable style="width: 25%"></pv-column>
        <pv-column field="treadmillId" header="Treadmill Id"  sortable style="width: 25%"></pv-column>
        <pv-column field="category" header="Serial Number"  sortable style="width: 25%"></pv-column>
        <pv-column field="quantity" header="Center Name"  sortable style="width: 25%"></pv-column>
        <pv-column field="day" header="Date"  sortable style="width: 25%"></pv-column> 
        <pv-column field="quantity" header="Time"  sortable style="width: 25%"></pv-column>
        <pv-column field="volts" header="Volts"  sortable style="width: 25%"></pv-column>
        <pv-column field="watts" header="Watts"  sortable style="width: 25%"></pv-column>
        <pv-column field="hp" header="HP"  sortable style="width: 25%"></pv-column>
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
    this.healthService.getChecks().then(data=>this.checks=data);
  }


  
  
}

</script>
    
<style scoped>
</style>