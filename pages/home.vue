<template>
  <div class="home">
    <NuxtLayout></NuxtLayout>
    <div class="home__content">
      <h1>Home content</h1>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.home {
  display: flex;
  height: 100%;
  width: 100%;

  .home__content {
    width: 100%;
  }
}
</style>
