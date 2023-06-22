<script setup>
import HelloWorld from './components/HelloWorld.vue'

import ListComponent from './components/list-component.vue';
</script>

<template>
  <header>
 <!--    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      
    </div> -->
    <nav>
    <router-link to="/"> Home</router-link>

    <router-link to="/AddTutorial">add Tutorial</router-link>

    <router-link to="/ListComponent">list Component</router-link>

    <router-link to="/User">Add User</router-link>

    <router-link to="/ListUser">List User</router-link>

    <router-link to="/Posts"> View Posts</router-link>

    <router-link to="/CreatePosts"> Create Posts</router-link>
   
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

nav{
    display : flex;
    flex-direction:row;
    grid-gap:10px;

}

</style>
