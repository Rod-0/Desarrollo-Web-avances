<template>
<!-- <pv-input-text></pv-input-text> -->
    <pv-button label="Save"></pv-button>
</template>
    
<script>
export default{
    name:"user-form",
    data(){
        return{
            userService:new userService()
        }
    },

    methods:{
        saveuser(){
        this.userService.postUser()
     }
    }   
}
</script>
    
<style scoped>
</style>