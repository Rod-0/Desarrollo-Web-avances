<script setup>

</script>

<template>
  <header>
    <nav>

    <ul>
      <li>
        <router-link to="/">Go to Home</router-link>
      </li>
      <li>
        <router-link to="/AddTutorial">Go to add Tutorial</router-link>
      </li>
      <li>
        <router-link to="/ListComponent">Go to list Component</router-link>
      </li>
      <li>
        <router-link to="/Adduser">Go to Add User</router-link>
      </li>
    </ul>









</nav>

  </header>
 
  <main>

    <router-view />
    
    <!-- <ListComponent/> -->

    

  </main>
  <footer>
    <div>Footer</div>
  </footer>
</template>

<style scoped>

</style>
