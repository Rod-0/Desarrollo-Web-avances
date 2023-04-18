<template>
    <div>Add Tutorial</div>
      <div>{{id}}</div>
</template>
    
<script>
    export default {
        name: "form-data",
        data(){
            return{
                id:0
            }
        },
        mounted() {
            if(this.$route.params.id){
                this.id =this.$route.params.id;
                console.log('getting id ',this.$route.params.id)
            }
        }
    }
</script>
    
<style scoped>
</style>