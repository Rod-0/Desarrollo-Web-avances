<template>
  <div class="containerGrid">
    <div class="my-class">My component {{ name }} {{ title }} </div>
      <button @click="handleClick(2)" > click me!</button>
      <input type="text" @input="handleChange">

  </div>
   
    
  
</template>
  
  
<script>
  
  export default {
      props:['name'], //parametros
      name:"header",
      data() {
        return{title:'titulo 1'}  //propiedades internas (encapsular informacion)

      },
      mounted(){  //cuando el componente se carga
        console.log('--------montando componente')
      },
      updated(){
        console.log('--------actualizando componente')
      },
      unmounted() {
        console.log('-----unmount component')
      },
      methods:{

        handleClick(numberA){
        console.log('-------haciendo click',numberA)
        this.title='new title'
        },

        handleChange(){
          console.log('-----tipeando')
        }



      }

      
      

  }
  
</script>
  
  
<style scoped>
.my-class{
    color:white;
    background-color: red;
    margin-top: 10px;
    font-size: large;
    padding: 9px;
    /* margin-right: 350px; */

}
.container{
  display:flex;
  flex-direction: row;
  align-items: center;
}

.containerGrid{
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}
  
</style>