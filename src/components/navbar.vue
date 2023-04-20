<template>
    <nav class="navbar">
      <h1>RESTCountries</h1>
    

      <ul>
        <li>
          <router-link to="/" class="elements" >Inicio</router-link>
        </li>
       
        <li>
          <router-link to="/ListComponent" class="elements" >Go to list Component</router-link>
        </li>
        <li>
          <router-link to="/Adduser" class="elements">Form</router-link>
        </li>
      </ul>


</nav>

<pv-toolBar class="toolbar">
    <p>About Peru</p>
    <template #start>
        <pv-button label="New" icon="pi pi-plus" class="mr-2" />
        <pv-button  label="Upload" icon="pi pi-upload" severity="success" />
        <i class="pi pi-bars p-toolbar-separator mr-2" />
        <pv-splitButton label="Save" icon="pi pi-check" severity="warning"></pv-splitButton>
    </template>

    <template #end>
        <pv-button  icon="pi pi-search" class="mr-2" />
        <pv-button  icon="pi pi-calendar" severity="success" class="mr-2" />
        <pv-button  icon="pi pi-times" severity="danger" />
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

.toolbar{
    
}



</style>