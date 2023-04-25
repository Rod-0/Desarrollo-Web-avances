<script setup>
import footerComponent from './components/footer.component.vue';
import navbar from './components/navbar.component.vue';
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
