<template>
  <div class="container">
    <div class="my-class">{{$t('MyComponent')}} {{ name }} {{ username }} {{ title }} </div>
    <input type="text" @input="handleChange">
    <!-- <img src="ruta" alt="gato"> -->
    <input type="button" @click="handleClick(2)" value="click me!"  />
    <pv-button :label= "$t('ClickMe')"  />
      

  </div>
   
    
  
</template>
  
  
<script>
  
  export default {
      props:['name','username'], //parametros
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
  gap:10px;
  flex-direction: column;
  align-items: center;
  padding:10px;
  border: #282828 solid;

}

.containerGrid{
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  padding: 10px;
  border: #282828 solid;
}


  
</style>