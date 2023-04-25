<template>

<pv-card>
  <template #title> {{ $t('CardAb') }} </template>
  <template #content>
   
    <div class="container">
      <div class="elements"> 
        <label for="name">Name:</label>
        <div id="name">{{ name }}</div>
      </div>

      <div class="elements"> 
        <label for="oficialName">Official Name:</label>
        <div id="oficalName"> {{ official }}</div>
      </div>

      <div class="elements"> 
        <label for="currencies"> Currencie:</label>
        <div id="currencies">  {{ currencies }}</div>
      </div>

      <div class="elements"> 
        <label for="capital"> Capital:</label>
        <div id="capital">   {{ capital }}</div>
      </div>

      <div class="elements"> 
        <label for="region"> Region:</label>
        <div id="region">{{ region }}</div>
      </div>

      <div class="elements"> 
        <label for="subRegion">Subregion: </label>
        <div id="subRegion">{{ subregion }}</div>
      </div>

      <div class="elements"> 
        <label for="lenguages">Languages: </label>
        <div id="lenguages"> {{ lenguages }}</div>
      </div>

      <div class="elements"> 
        <label for="area"> Area:  </label>
        <div id="area">{{ area }}</div>
      </div>

      <div class="elements"> 
        <label for="population">  Population:  </label>
        <div id="population"> {{ population }} </div>
      </div>

      




         
        Imagen:  <img :src="(flags)"> 
      

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