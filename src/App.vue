<script setup lang="js">
import { RouterView } from 'vue-router';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <div class="app-layout">
    <AppHeader/>
    <main>
      <RouterView/>
    </main>
    <AppFooter/>
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
}

.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
