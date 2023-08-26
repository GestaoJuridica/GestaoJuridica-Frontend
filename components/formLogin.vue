<template>
  <form class="formLogin">
    <div class="formLogin__content">
      <header class="formLogin__header">
        <h1 class="formLogin__title">Login</h1>
        <h2 class="formLogin__description">Faça login para continuar</h2>
      </header>
      <main class="formLogin__inputs">
        <div class="formLogin__email">
          <InputComponent
            place-holder="Digite seu email"
            icon-name="fa6-solid:envelope"
            type="email"
          />
        </div>
        <div class="formLogin__password">
          <InputComponent
            place-holder="Digite sua senha aqui"
            icon-name="fa6-solid:key"
            type="password"
          />
        </div>
        <div class="formLogin__buttonSubmit">
          <h4 class="formLogin__forgetPassword">
            <NuxtLink to="/forget-password">Esqueci a senha</NuxtLink>
          </h4>
          <ButtonComponent text="ENTRAR" @click="authenticateLogin" />
        </div>
      </main>
    </div>
  </form>
</template>

<script setup lang="ts">

const isAuthenticated = ref<boolean>(false);


const authenticateLogin = async (event: Event) => {
  event.preventDefault();


	const response = {
		status: "adasdasd"
	}
	

	response.status === "sucess" ? isAuthenticated.value = true : false;
	
	isAuthenticated.value ? goNextPage(): null;
};

const goNextPage = () => {
  const router = useRouter();
	router.push({path: "/home",});
}
</script>

<style scoped lang="scss">
.formLogin {
  display: flex;
  flex-direction: column;
  gap: 35px;
  max-width: 350px;
  background-color: #ffff;
  border-radius: 16px 16px 0 0;

  &__header {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  &__title {
    color: #007ef2;
  }

  &__description {
    font-size: 16px;
    color: #000;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 35px;
    margin: 53px 27px;
  }

  &__inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-height: 240px;
  }

  &__buttonSubmit {
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

  &__forgetPassword > a {
    color: #007ef2;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>
