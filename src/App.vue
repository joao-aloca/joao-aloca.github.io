<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <header>
    <TheHeader></TheHeader>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <TheFooter></TheFooter>
  </footer>
</template>

<style scoped>
main {
  margin-top: 83px;
}
</style>
