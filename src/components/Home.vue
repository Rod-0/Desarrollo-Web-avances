<template>

<pv-card>
    <template #title> Avarage Performance </template>
    <template #content>
       <div> Volts {{ volts }}</div>

       <div> Watts {{ watts }}</div>

       <div> HP {{ hp }}</div>

    </template>
</pv-card>

    

</template>

<script>


export default {
  props:['volts','watts','hp'],
  name: "Home",
  data(){
      
  }
  
}
</script>

<style scoped>


</style>