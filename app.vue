<template>
  <div class="app">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Gestão Juridica",
});
</script>

<style lang="scss" scoped>
.app {
  display: flex;
}

@media (min-width: 768px) {
  .app {
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
}
</style>
