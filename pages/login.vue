<template>
  <div class="login">
    <header class="login__header">
      <img
        src="../public/imgs/loginImage.svg"
        alt="Imagem de um forum com a marreta do juiz"
      />
      <img
        src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
        alt="Logo do nosso app"
      />
    </header>
    <FormLogin />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
}
</style>
