<template>
  <form class="formLogin">
    <div class="formLogin__content">
      <header class="formLogin__header">
        <h1 class="formLogin__title">Login</h1>
        <h2 class="formLogin__description">Faça login para continuar</h2>
      </header>
      <main class="formLogin__inputs">
        <div class="formLogin__email">
          <Icon name="fa6-solid:envelope" />
          <input @input="clearError" placeholder="Digite seu email" type="email" v-model="email" />
        </div>
        <div class="formLogin__password">
          <Icon name="fa6-solid:key" />
          <input @input="clearError" placeholder="Digite sua senha aqui" type="password" v-model="password" />
        </div>
        <div class="formLogin__buttonSubmit">
          <ButtonComponent type="submit" text="ENTRAR" @click="authenticateLogin" />
        </div>
        <h2 v-if="formInvalid" style="color: red; text-align: center;">Usuario ou senha invalidos</h2>
      </main>
    </div>
  </form>
</template>

<script setup lang="ts">
import api from '../api/axios'
let isAuthenticated = ref<boolean>(false);
const email = ref<string>("");
const password = ref<string>("");
let formInvalid = ref<boolean>(false);

onMounted(() => {
  localStorage.clear();
})


const authenticateLogin = async (event: Event) => {
  event.preventDefault();

  try {
    const response = await api.post('user/login', {email: email.value, password: password.value});
    localStorage.setItem('token', response.data.token);
    isAuthenticated.value = true;
  	isAuthenticated.value ? goNextPage(): null;
    return response;
  } catch (error: any) {
    formInvalid.value = true;
    throw new Error(error);
  }
	
};

const clearError = (): void => {
  formInvalid.value = false;
}

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
  background-color: #ffff;
  border-radius: 16px 16px 0 0;
  height: 100%;

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
    align-items: center;
    justify-content: center;
  }

  &__forgetPassword > a {
    color: #007ef2;
    font-weight: bold;
    cursor: pointer;
  }
}
@media (min-width: 768px) {
  .formLogin {
    width: 100%;
  }
}

.formLogin__password {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #007ef2;
  min-height: 60px;
  border-radius: 10px;
  gap: 20px;

  input {
    background-color: transparent;
  }
}

.icon {
  margin-left: 18px;
}

::placeholder {
  color: #fff;
}

.formLogin__email {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #007ef2;
  min-height: 60px;
  border-radius: 10px;
  gap: 20px;

  input {
    background-color: transparent;
  }
}

.icon {
  margin-left: 18px;
}

::placeholder {
  color: #fff;
}
</style>
