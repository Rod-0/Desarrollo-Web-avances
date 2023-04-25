<template>

<pv-card>
  <template #title> {{ $t('CardAb') }} </template>
  <template #content>
   
    <div class="container">
      <div class="elements"> 
        <label for="name">{{ $t('Name') }} :</label>
        <div id="name">{{ name }}</div>
      </div>

      <div class="elements"> 
        <label for="oficialName">{{ $t('OfficialName') }}:</label>
        <div id="oficalName"> {{ official }}</div>
      </div>

      <div class="elements"> 
        <label for="currencies"> {{ $t('Currencie') }}:</label>
        <div id="currencies">  {{ currencies }}</div>
      </div>

      <div class="elements"> 
        <label for="capital"> {{ $t('Capital') }}:</label>
        <div id="capital">   {{ capital }}</div>
      </div>

      <div class="elements"> 
        <label for="region"> {{ $t('Region') }}:</label>
        <div id="region">{{ region }}</div>
      </div>

      <div class="elements"> 
        <label for="subRegion">{{ $t('SubRegion') }}: </label>
        <div id="subRegion">{{ subregion }}</div>
      </div>

      <div class="elements"> 
        <label for="lenguages">{{ $t('Languages') }}: </label>
        <div id="lenguages"> {{ lenguages }}</div>
      </div>

      <div class="elements"> 
        <label for="area"> {{ $t('Area') }}:  </label>
        <div id="area">{{ area }}</div>
      </div>

      <div class="elements"> 
        <label for="population">  {{ $t('Population') }}:  </label>
        <div id="population"> {{ population }} </div>
      </div>


      <div class="imagenes">
        
        <div class="flag">
          <label for="peruFlag"> {{ $t('PeruFlag') }}:  </label>
          <img :src="(flags)" id="peruFlag"> 
         </div>

         <div class="coatOfarms">
          <label for="perucoat"> {{ $t('CoatOfArms') }}:  </label>
          <img :src="(coatOfarms)" id="perucoat"> 
         </div>
        

        
      </div>

      




         
       
      

  </div>

  <pv-toast />
  <pv-button label="Show" @click="show()" />

  </template>
 
   
</pv-card>

  
    
  
</template>
  
  
<script>
  
  export default {
      props:['name','official','currencies','capital','region','subregion','lenguages','area','population','flags','coatOfarms'], //parametros
      name:"header",
      data() {
          

      }

      
      

  }
  
</script>
  
  
<style scoped>

.container{
  display:flex;
  gap:10px;
  flex-direction: column;
  border:black solid;
  padding: 1rem;
  

}

.elements label,.imagenes label{
  font-weight: bold;
}

.elements div{
  margin-left: 30px;
}

.elements{
  display: flex;
  font-size: 1.2rem;
  padding: 8px;
}

.imagenes{
  display: flex;
  flex-direction:row;
  font-size: 1.2rem;
  padding: 8px;
  gap:150px;

}
.imagenes label{
  float:left;
  font-weight: bold;
}

.imagenes img{
  margin-left: 50px;
  width: 300px;
}



  
</style>