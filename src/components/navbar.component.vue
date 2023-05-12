<template>
    <nav class="navbar">
      <h1>TechnoGym TechnoRun Analytics</h1>
    

      <ul>
        <li>
          <router-link to="/" class="elements" >{{ $t('Home') }} </router-link>
        </li>
       
        <li>
          <router-link to="/HealthChecks" class="elements" > {{ $t('Health Checks') }} </router-link>
        </li>

     
      
      </ul>


</nav>

<pv-toolBar class="toolbar">
   
    <template #start>
        <p> {{ $t('About') }} </p>
        <pv-button label="New" icon="pi pi-plus" class="mr-2" />
        
    </template>


</pv-toolBar>

</template>

<script>
    
export default {
    name:"navbar"
   

    
    

}

</script>

<style scoped>

.navbar{
  display:flex;
  justify-content: space-between;
  background-color: #333;
  color:white;
  
} 
.navbar h1{
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-transform: uppercase;
  padding: 14px 16px;
}

.navbar ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}


.navbar li{
  float: left;
  
}

.elements{
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.toolbar p{
    font-size: 35px;
    margin:10px;
}



</style>