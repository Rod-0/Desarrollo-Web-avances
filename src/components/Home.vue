<template>

    <div class="form-user">
        <div class="input-control">
          <label class="label-input">email : </label>
          <pv-inputText v-model="email"></pv-inputText>
        </div>
        <p/>
        <div  class="input-control">
          <label class="label-input">Password : </label>
          <pv-inputText  v-model="password"></pv-inputText>
        </div>
        <p/>
        <pv-button label="login" @click="loginUser()" />
    </div>

</template>

<script>
import {userServices} from "@/services/user-api-services";

export default {
  name: "Home",
  data(){
      return{
          email:'',
          password:'',
          userService :new userServices()
      }
  },
  methods:{
      loginUser(){

          const body ={
              email:this.email,
              password : this.password
          }

          this.userService.login(body).then((response)=>{
                console.log(response.data.accessToken)
                window.localStorage.setItem('jwt',response.data.accessToken)
              


          })

       console.log('login')
      }
  }
}
</script>

<style scoped>
.form-user{
    padding: 10px;
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