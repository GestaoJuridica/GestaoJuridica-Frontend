<template>
  <div class="sidebar" :class="{ toggle: toggleSideBar }">
    <header class="sidebar__header">
      <h1 v-if="!toggleSideBar">Gestão Juridica</h1>
      <ButtonComponent
        v-if="!toggleSideBar"
        @click="toggleSideBar = !toggleSideBar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z"
          />
        </svg>
      </ButtonComponent>

      <ButtonComponent
        v-if="toggleSideBar"
        @click="toggleSideBar = !toggleSideBar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g transform="translate(24 0) scale(-1 1)">
            <path
              fill="white"
              d="M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z"
            />
          </g>
        </svg>
      </ButtonComponent>
    </header>
    <main class="sidebar__content">
      <ul class="sidebar__ul">
        <li>
          <NuxtLink class="sidebar__link" to="/home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#007ef2"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zM7.35 18.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5s-3.34-.56-4.65-1.5zm10.79-1.38a9.947 9.947 0 0 0-12.28 0A7.957 7.957 0 0 1 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12z"
              />
              <path
                fill="#007ef2"
                d="M12 6c-1.93 0-3.5 1.57-3.5 3.5S10.07 13 12 13s3.5-1.57 3.5-3.5S13.93 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"
              />
            </svg>
            <span v-if="!toggleSideBar">Listar clientes</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="sidebar__link" to="/a">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#007ef2"
                d="M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4s4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2zM1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2c2.69 0 5.78 1.28 6 2H3zm17-3v-3h3v-2h-3V7h-2v3h-3v2h3v3h2z"
              />
            </svg>

            <span v-if="!toggleSideBar">Cadastar novo cliente</span>
          </NuxtLink>
        </li>
      </ul>
    </main>
  </div>
</template>

<script setup lang="ts">
let toggleSideBar = ref<boolean>(false);
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 280px;
  height: 100%;
  background-color: #fff;
  transition: 0.5s;

  &__header {
    display: flex;
    align-items: center;
    margin: 10px;
    justify-content: space-around;
    padding-bottom: 10px;
    border-bottom: solid 2px #0f58f5;

    & h1 {
      color: black;
      font-size: 1.5rem;
    }
  }

  &__content {
    & a {
      color: #000;
      font-weight: bold;
    }
  }

  &__ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: 10px;
  }
  &__link {
    display: flex;
    align-items: center;
    gap: 5px;
    span {
      color: #000;
    }
  }
}

.toggle {
  width: 60px;
}
</style>
