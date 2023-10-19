<template>
  <div class="userInfo">
    <NuxtLayout></NuxtLayout>
    <div class="userInfo__content">
      <section class="userInfo__costumerData">
        <h1 class="userInfo__title">Dados do cliente</h1>
        <div class="userInfo__data">
          <h3 class="userInfo__dataAttributes">
            <span class="userInfo__info">Nome:</span>
            {{ costumerData.name }}
          </h3>
          <h3 class="userInfo__dataAttributes">
            <span class="userInfo__info">CPF:</span> {{ costumerData.cpf }}
          </h3>
          <h3 class="userInfo__dataAttributes">
            <span class="userInfo__info"> Telefone:</span>
            {{ costumerData.cellPhone }}
          </h3>
          <h3 class="userInfo__dataAttributes">
            <span class="userInfo__info">CEP: </span> {{ publicPlace.cep }}
          </h3>
          <h3 class="userInfo__dataAttributes">
            <span class="userInfo__info"> Bairro:</span>
            {{ publicPlace.neighborhood }}
          </h3>
          <h3 class="userInfo__dataAttributes">
            <span class="userInfo__info"> Rua: </span> {{ publicPlace.road }}
          </h3>
          <h3 class="userInfo__dataAttributes">
            <span class="userInfo__info">Nº: </span>
            {{ publicPlace.numberOfHouse }}
          </h3>
        </div>
      </section>
      <section class="userInfo__costumerPhotos">
        <h1 class="userInfo__title">Fotos</h1>
        <div class="userInfo__photoContent">
          <PhotoCard
            v-for="(photo, index) of photosArray"
            :key="index"
            :url="photo.url"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import api from "../api/axios";
import { CostumerData, PublicPlace } from "interfaces/ICostumerData";
import { Photos } from "interfaces/IPhotoData";

const headers = {
  client_id: "651b499deea53e30e99dc6e3",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTYzNjYzNzIsImV4cCI6MTY5NjQ1Mjc3Miwic3ViIjoiNjUxNzYwNmYzNDNlNjA5N2Y3YzY0NGQ2In0.wUBC3zK0ivWSFG3TjrkS-dhRSoAQRfk5soR2_rqs09g",
};

onMounted(() => {
  getPhotoData();
});
const getPhotoData = async (): Promise<void> => {
  try {
    const sendCostumerData: Photos = await api.get(
      "photos/getAllPhotosForCostumer",
      {
        headers,
      }
    );

    photosArray.value.push(sendCostumerData);
  } catch (error: any | undefined) {
    throw new Error(error);
  }
};
const costumerData = ref<CostumerData>({
  name: "Felipe Fernandes de Carvalho",
  cpf: "155.555.555-23",
  cellPhone: "(31) 986212400",
});

const publicPlace = ref<PublicPlace>({
  cep: "35171375",
  neighborhood: "Sylvio Pereira 1",
  road: "Jequiri",
  numberOfHouse: 205,
});

const photosArray = ref<Photos[]>([
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRFPJ0j3n5KvDjuaeThkqxp5t_ItypNjIS7w&usqp=CAU",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRFPJ0j3n5KvDjuaeThkqxp5t_ItypNjIS7w&usqp=CAU",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRFPJ0j3n5KvDjuaeThkqxp5t_ItypNjIS7w&usqp=CAU",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRFPJ0j3n5KvDjuaeThkqxp5t_ItypNjIS7w&usqp=CAU",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRFPJ0j3n5KvDjuaeThkqxp5t_ItypNjIS7w&usqp=CAU",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRFPJ0j3n5KvDjuaeThkqxp5t_ItypNjIS7w&usqp=CAU",
  },
]);
</script>

<style lang="scss" scoped>
.userInfo {
  width: 100vw;
  height: 100vh;
  display: flex;

  &__content {
    width: 100%;
    height: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  &__costumerData {
    padding: 12px;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 14px;
    opacity: 0.9;
    width: 100%;
    height: 233px;

    @media (min-width: 768px) {
      height: 260px;
    }
    @media (min-width: 820px) {
      height: 270px;
    }

    @media (min-width: 912px) {
      height: 360px;
    }
    & > .userInfo__title {
      color: black;
      font-size: 26px;

      @media (min-width: 820px) {
        font-size: 30px;
      }

      @media (min-width: 912px) {
        font-size: 35px;
      }
    }

    & > .userInfo__data {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 4px;

      & > .userInfo__dataAttributes {
        display: flex;
        // flex-direction: column;
        color: black;
        font-weight: bold;
        flex-wrap: wrap;
        font-size: 14px;
        gap: 4px;

        @media (min-width: 400px) {
          font-size: 16px;
        }

        @media (min-width: 768px) {
          font-size: 20px;
        }

        @media (min-width: 912px) {
          font-size: 30px;
        }
        & > .userInfo__info {
          font-weight: bold;
          color: black;
          font-size: 14px;
          min-width: 85px;

          @media (min-width: 400px) {
            font-size: 16px;
          }

          @media (min-width: 768px) {
            font-size: 20px;
          }
          @media (min-width: 912px) {
            font-size: 30px;
            min-width: 140px;
          }
        }
      }
    }
  }
  &__costumerPhotos {
    padding: 10px;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 14px;
    opacity: 0.9;
    width: 100%;
    height: 100%;

    & > .userInfo__title {
      color: black;
      font-size: 20px;

      @media (min-width: 400px) {
        font-size: 25px;
      }

      @media (min-width: 768px) {
        font-size: 30px;
      }
    }

    & > .userInfo__photoContent {
      width: 100%;
      height: 450px;
      display: flex;
      margin-top: 5px;
      flex-direction: column;
      align-items: center;
      padding: 4px;
      gap: 10px;
      overflow-y: scroll;

      @media (min-width: 360px) {
        height: 365px;
      }

      @media (min-width: 390px) {
        height: 500px;
      }

      @media (min-width: 400px) {
        height: 520px;
      }

      @media (min-width: 412px) {
        height: 580px;
      }
      @media (min-width: 540px) {
        height: 350px;
      }

      @media (min-width: 768px) {
        height: 680px;
      }

      @media (min-width: 912px) {
        height: 920px;
      }
    }
  }

  // Media Query
}
</style>
