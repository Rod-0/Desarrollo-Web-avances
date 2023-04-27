<template>
    <div class="my-form">
        <div>Edit User {{ id }} </div>
        <label for="name2">Name :</label>
         <pv-inputText v-model="name2" id="name2"></pv-inputText>
        <label for="username">Username :</label>
        <pv-inputText v-model="username" id="username"></pv-inputText>
        <pv-button label="Save" @click="editUser()"></pv-button>
    </div>
</template>

<script>
import {userServices} from "@/services/user-api-services";

export default {
    name: "user-form",
    data(){
        return{
            id:0,
            name2: '',
            username:'',
            userService : new userServices()
        }
    },
    methods:{
        editUser(){
            //generar el body

            const body ={ 'name2':this.name2 ,'username': this.username}

            this.userService.putUser(body,this.id).then((response)=>{
                console.log('response',response)
            })

        }
    },
    mounted() {
        if(this.$route.params.id){
            this.id = this.$route.params.id;
            console.log('getting id ',this.$route.params.id)
            this.userService.getUserbyId(this.id).then((response)=>{

                this.name2 = response.data.name;
                this.username = response.data.username;
            })

        }
    }
}
</script>

<style scoped>

.my-form{
    display:flex;
    flex-direction: column;
    background-color: beige;
    gap:10px;
    width: 250px;
    margin:0 auto;
    margin-top: 50px;
}

</style>