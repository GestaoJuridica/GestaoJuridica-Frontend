<template>
  <div class="login">
    <header class="login__header">
      <img
        class="login__background"
        src="../public/imgs/loginImage.svg"
        alt="Imagem de um forum com a marreta do juiz"
      />
      <img
        class="login__logo"
        src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
        alt="Logo do nosso app"
      />
    </header>
    <FormLogin />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.login {
  display: flex;
  flex-direction: column;
  max-width: 350px;

  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__background {
    opacity: 0.1;
    width: 100%;
  }

  &__logo {
    position: absolute;
  }
}
</style>
