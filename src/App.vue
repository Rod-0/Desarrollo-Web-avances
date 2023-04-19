<script setup>
import footerComponent from './components/footer.vue';
import navbar from './components/navbar.vue';
</script>

<template>

  <header>
    <navbar />
    
  </header>
 
  <main>

    <router-view />
    

  </main>

  <footer>
    <footerComponent />
  </footer>
  
</template>

<style scoped>

main{
  margin:100px;
}

</style>
