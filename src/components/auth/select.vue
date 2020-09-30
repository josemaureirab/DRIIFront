<template>
  <v-container fluid class="Bground">
    <v-row
    justify="center"
    >
      <v-col cols="6" sm="2">
      <v-img
        src="@/assets/logoInternacional.png"
      >
      </v-img>
      </v-col>
    </v-row>
    <v-row
    justify="center">
      <v-col @click="goToEU()" cols="6" sm="2" class="marginWindow">
        <v-img
          class="imageSelect"
          src="@/assets/ventana1.png"
        ></v-img>
        <center>
          <br>
          <h1 class="fontSelect">Estudiantes</h1>
          <h1 class="fontSelect">USACH</h1>
        </center>
      </v-col>
      <v-col  @click="goToLoginEI()" cols="6" sm="2" class="marginWindow">
        <v-img
        class="imageSelect"
          src="@/assets/ventana2.png"
        ></v-img>
        <center>
          <br>
          <h1 class="fontSelect">Estudiantes</h1>
          <h1 class="fontSelect">internacionales</h1>
        </center>
      </v-col>
      <v-col @click="goToLoginFU()" cols="6" sm="2" class="marginWindow">
        <v-img
        class="imageSelect"
          src="@/assets/ventana2.png"
        ></v-img>
        <center>
          <br>
          <h1 class="fontSelect">Funcionario</h1>
          <h1 class="fontSelect">USACH</h1>
        </center>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>

import router from '@/router'


export default {
  components: {

  },
  data: () => ({
    }),
  methods: {
    goToEU () {
        router.push({ name: 'SignIn' })
      },
    goToLoginEI () {
      router.push({ name: 'SignIn' })
    },
    goToLoginFU () {
      router.push({ name: 'SignInAdm' })
    }
  }
};
</script>

<style>
.fontSelect{
  color: white;
  line-height: 1.1;
  cursor: pointer;
}
.marginWindow{
  margin-left: 2%;
  margin-right: 2%;
}
.imageSelect{
  cursor: pointer;
}
.imageSelect:hover{
  transform: scale(1.1);
}
</style>

<style scoped>
  .Bground {
    background-color: rgb(43, 41, 41) !important;
  }
</style>