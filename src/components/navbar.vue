<template>
    <nav class="navbar">
      <h1>NombreEmpresa</h1>
    

      <ul>
        <li>
          <router-link to="/" class="elements" >Go to Home</router-link>
        </li>
        <li>
          <router-link to="/AddTutorial"  class="elements">Go to add Tutorial</router-link>
        </li>
        <li>
          <router-link to="/ListComponent" class="elements" >Go to list Component</router-link>
        </li>
        <li>
          <router-link to="/Adduser" class="elements">Go to Add User</router-link>
        </li>
      </ul>


</nav>

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



</style>