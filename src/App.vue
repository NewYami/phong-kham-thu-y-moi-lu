<script setup>
import TheHeader from './components/common/TheHeader.vue';
import Thefooter from './components/common/TheFooter.vue';
</script>

<template>
  <TheHeader></TheHeader>
  <main class="flex-grow">
      <router-view /> 
  </main>
  <Thefooter></Thefooter>
</template>

<style scoped>

</style>
