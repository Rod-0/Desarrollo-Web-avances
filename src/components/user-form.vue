<template>
    <div class="my-form">
        <label for="name">Name:</label>
        <pv-inputText v-model="name2" id="name" ></pv-inputText>
        <label for="username">Username:</label> 
        <pv-inputText v-model="username" id="username" ></pv-inputText> 
        <label for="email">Email:</label> 
        <pv-inputText v-model="email" id="email" ></pv-inputText> 


        <pv-button label="Save" @click="saveuser()" ></pv-button>

    </div>
    
</template>
     
<script>
import { userServices } from '../services/user-api-services';

export default{
    name:"user-form",
    data(){
        
        return{
            name2:'',
            username:'',
            email:'',
            userService:new userServices()
        }
    },

    methods:{
        saveuser(){
        const body={'name':this.name2,'username':this.username,'email':this.email}
        this.userService.postUser(body).then((response)=>{
            if(response.status==201){
                alert('Created')
            }
            else{
                alert('error creating user')
            }
            // console.log('response',response)
        })
     }
    }   
}
</script>
    
<style scoped>

.my-form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border: 1px solid black;
    border-radius: 1rem;
    padding: 1rem;
    height: 100%;
    width: 500px;
    margin:0 auto;
}


</style>