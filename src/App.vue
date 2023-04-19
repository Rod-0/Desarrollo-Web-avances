<script setup>

</script>

<template>

  <header>
    <nav class="navbar">

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

  </header>
 
  <main>

    <router-view />
    

  </main>

  <footer>
    <div>Footer</div>
  </footer>
  
</template>

<style scoped>
template{
  margin:auto;
}

.navbar{
 
  width: 1500px;
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
