<template>

    <div class="form-user">
        <div class="input-control">
          <label class="label-input">Username : </label>
          <pv-inputText v-model="username"></pv-inputText>
        </div>
        <p/>
        <div  class="input-control">
          <label class="label-input">Password : </label>
          <pv-inputText  v-model="password"></pv-inputText>
        </div>
        <p/>
        <div class="buttons">
            <pv-button label="login" @click="loginUser()" />
            <pv-button label="logOut" @click="logOut()" />
        </div>
        
    </div>

</template>

<script>
import {userServices} from "@/services/user-api-services";

export default {
  name: "Home",
  data(){
      return{
          username:'',
          password:'',
          userService :new userServices()
      }
  },
  methods:{
      loginUser(){

          const body ={
              username:this.username,
              password : this.password
          }

          this.userService.login(body).then((response)=>{
                console.log(response.data.accessToken)
                window.localStorage.setItem('jwt',response.data)
                //this.$router.push('/Posts')
                
              


          })

       console.log('login')
      },
      logOut(){
        window.localStorage.removeItem('jwt')
      
        location.reload()

      }
  }
}
</script>

<style scoped>
.form-user{
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 250px;
    margin: 0 auto;
    margin-top: 150px;
    
}
.label-input{
    width: 150px;
}

.input-control{
    margin-bottom: 20px;
    width: 290px;
    display: flex;
}

</style>