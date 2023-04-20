<template>

<pv-card>
  <template #title> {{ $t('CardAb') }} </template>
  <template #content>
   
    <div class="container">
    <div class="my-class"> Name: {{ name }} {{ official }} {{ currencies }} {{ capital }} {{ region }}
      {{ subregion }} {{ lenguages }} {{ area }}{{ population }} {{ flags }} </div>
      

  </div>

  <pv-toast />
  <pv-button label="Show" @click="show()" />

  </template>
 
   
</pv-card>

  
    
  
</template>
  
  
<script>
  
  export default {
      props:['name','official','currencies','capital','region','subregion','lenguages','area','population','flags'], //parametros
      name:"header",
      data() {
          //propiedades internas (encapsular informacion)

      }

      
      

  }
  
</script>
  
  
<style scoped>

.container{
  display:flex;
  gap:10px;
  flex-direction: column;
  align-items: center;
  padding:10px;
  border: #282828 solid;

}




  
</style>