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
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADQ0lEQVR4nO2ay24TMRSGJ5UKtOWygyeAfcVLINEdEmqlFIlNIy4lTQIqIBBddsPtHbjtwy7bbLlsWVABLZSLAKk8wIem8QTHTBJ7bCeTxL/kRWacc8785/fxZSaKAgIChgHgFLAFvAdORpMG4Db/cCsaBQCLwLqj1pAIaDi0e97Xw5cYHZRcP/xBYJvRwRdgxiUBqylOXgGbFq0p2Wpa2opjUbHqO/tfgVkLuxuSrQ0LO4eAz95UQGf2d0RLUMsBARXJzkfgt/T7Wla73bJ/JTbqQgUuCEjJ/gpwz5kK6Mz+vjHh1FoFjghQs38AOAb8tFYB/2f/snSvbKsCWwLSsi/duytd382kAjqz/ykmRHFupQIHBKyp2ZfuHVVUULbN/qWUPlYqsCEgJQErKX3uKCqYdZJ9VyqwJKDcLftSn8PAd6nfWtbslzRl+CN26psAnex32XDpqQC42o9dqe+MmB2MVWBBgBzfhz7xHRGJSVDRcVDXyX4XFWjXAgsC6jrZl/rfNJoRgHPAL+BlL3YVFeyaqsCCgCS+umZ8ai3orwJTAFXTWuBqKawZ37pxLbBclNRyRsAc8E3yV/XhpGaigkESIPzdyFKrvKlgCATMiQfvVAEwBSw7Oo9r6rKsS4D3+IAL+MNFBwT4jY/OsesaVQcE+I0PWJIubFmezcXtnWRv0QEBfuMDTivjohBZQGyeEsw7IMBvfEBB2fwsWBg/I9nZ6RWsAQH+4wMeSjfeANMZjE8rx9P3XU2D3uMDTgB/pJuPMjh4LP1/DzjukAD/8QHXpQ77TnSYFgeRsnGtDYfpQsh7fLTG2jOl42vgbNpYFv0XgLfKf57oFKoMBPiPj9ZyVnWS7KCex+NGtBfKsjLB09hGv4fJQsDA4qPFXE0Zc/2wJ87otacoi/OAgcQXicLzQDl/U7EtGO9Z8FwSMKj4VMbnxYqsItqSuFbIwbtBL/F5x6C3w7kDgQCCAghDoI1QA6JJA6EGEGoAoQa0EWpANGkg1ABCDSDUgDYmvgY0NF5sxi9Ip6IxLYK6WI7GBbQyaopiNC6g9d6/aPBSszhWQyBg1IDbT1V8Nj+zBX4/VXGN5bxU7WGhmIeqvTmkZjRb/AX4zdI6eFOekAAAAABJRU5ErkJggg=="
      />
    </header>
    <header class="login__header--desktop">
      <img
        class="login__logo"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADQ0lEQVR4nO2ay24TMRSGJ5UKtOWygyeAfcVLINEdEmqlFIlNIy4lTQIqIBBddsPtHbjtwy7bbLlsWVABLZSLAKk8wIem8QTHTBJ7bCeTxL/kRWacc8785/fxZSaKAgIChgHgFLAFvAdORpMG4Db/cCsaBQCLwLqj1pAIaDi0e97Xw5cYHZRcP/xBYJvRwRdgxiUBqylOXgGbFq0p2Wpa2opjUbHqO/tfgVkLuxuSrQ0LO4eAz95UQGf2d0RLUMsBARXJzkfgt/T7Wla73bJ/JTbqQgUuCEjJ/gpwz5kK6Mz+vjHh1FoFjghQs38AOAb8tFYB/2f/snSvbKsCWwLSsi/duytd382kAjqz/ykmRHFupQIHBKyp2ZfuHVVUULbN/qWUPlYqsCEgJQErKX3uKCqYdZJ9VyqwJKDcLftSn8PAd6nfWtbslzRl+CN26psAnex32XDpqQC42o9dqe+MmB2MVWBBgBzfhz7xHRGJSVDRcVDXyX4XFWjXAgsC6jrZl/rfNJoRgHPAL+BlL3YVFeyaqsCCgCS+umZ8ai3orwJTAFXTWuBqKawZ37pxLbBclNRyRsAc8E3yV/XhpGaigkESIPzdyFKrvKlgCATMiQfvVAEwBSw7Oo9r6rKsS4D3+IAL+MNFBwT4jY/OsesaVQcE+I0PWJIubFmezcXtnWRv0QEBfuMDTivjohBZQGyeEsw7IMBvfEBB2fwsWBg/I9nZ6RWsAQH+4wMeSjfeANMZjE8rx9P3XU2D3uMDTgB/pJuPMjh4LP1/DzjukAD/8QHXpQ77TnSYFgeRsnGtDYfpQsh7fLTG2jOl42vgbNpYFv0XgLfKf57oFKoMBPiPj9ZyVnWS7KCex+NGtBfKsjLB09hGv4fJQsDA4qPFXE0Zc/2wJ87otacoi/OAgcQXicLzQDl/U7EtGO9Z8FwSMKj4VMbnxYqsItqSuFbIwbtBL/F5x6C3w7kDgQCCAghDoI1QA6JJA6EGEGoAoQa0EWpANGkg1ABCDSDUgDYmvgY0NF5sxi9Ip6IxLYK6WI7GBbQyaopiNC6g9d6/aPBSszhWQyBg1IDbT1V8Nj+zBX4/VXGN5bxU7WGhmIeqvTmkZjRb/AX4zdI6eFOekAAAAABJRU5ErkJggg=="
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
  width: 100%;
  height: 100vh;
  justify-content: space-between;

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

@media (min-width: 768px) {
  .login {
    width: 500px;
    height: 500px;
    align-items: center;
    gap: 20px;

    &__header {
      display: none;
    }

    &__logo {
      position: unset;
    }
  }
}
</style>
