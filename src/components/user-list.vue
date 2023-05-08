<template>

    <div v-for="user in users" class="container">
        <div>user {{user.id}}</div>
        <router-link :to="{ name: 'user', params: { id: user.id}}">Edit</router-link>  <!-- ruta dinamica, la ruta se llama user -->
        
    </div>
  
</template>
  
<script>
import {userServices} from "@/services/user-api-services";
  
export default {
      name: "list-user",
      data(){
          return{
              users:[],
              userService : new userServices()
          }
      },
      beforeMount() {
          console.log('getting')
          this.GetAll();
          window.sessionStorage.setItem("test",1),
          window.sessionStorage.setItem("test2",2),
          window.sessionStorage.setItem("test3",3),
          window.sessionStorage.setItem("test4",4)
      },
      methods:{
          GetAll(){
              this.userService.getUser().then((response)=>{
                  console.log('response',response.data);
                  this.users = response.data;
              })
          }
      }
  
  }
</script>
  
<style scoped>
  .container{
      display: flex;
      flex-direction: row;
      gap:10px;
  }
  
</style>