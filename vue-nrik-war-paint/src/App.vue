<script setup>
import NavBar from './components/NavBar.vue';
import FooterNavBar from './components/FooterNavBar.vue';
</script>

<template>
  <header>
    <NavBar />
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer>
    <FooterNavBar />
  </footer>


</template>

<style scoped>

</style>
