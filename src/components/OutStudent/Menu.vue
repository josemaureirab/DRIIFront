<template>
  <div id="auth-signIn">
    <v-row justify="center">
      <v-container>
        <v-row dense>
          <v-col cols="4">
            <v-card color="#385F73" dark class="cuadra">
              <v-card-title class="headline">Convocatorias</v-card-title>
              <v-card-subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-card-subtitle>
              <v-card-actions>
                <v-btn href="/ConvocatoriaOutStudent" text>Ingresar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card color="#1F7087" dark class="cuadra">
              <v-card-title class="headline">Mis Postulaciones</v-card-title>
              <v-card-subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-card-subtitle>
              <v-card-actions>
                <v-btn text href="/PostulacionesOutStudent">Ingresar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card color="#952175" dark class="cuadra">
              <v-card-title class="headline">Mi Perfil</v-card-title>
              <v-card-subtitle>Lorem asipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-card-subtitle>
              <v-card-actions>
                <v-btn text href="/PerfilOutStudent">Ingresar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="4">
            <v-card color="#385F73" dark class="cuadra">
              <v-card-title class="headline">Mi Intercambio</v-card-title>
              <v-card-subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-card-subtitle>
              <v-card-actions>
                <v-btn text href="/IntercambioOutStudent">Ingresar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </div>
</template>

<!-- TODO: * Si Status =  Aceptado => Intercambio es visible -->

<style scoped>
.nim-btn {
  text-transform: none !important;
}
.btn-enter {
  background-color: #f98a01 !important;
}
.cuadra {
  margin-left: 1% !important;
  margin-right: 1% !important;
  margin-top: 1% !important;
  margin-bottom: 1% !important;
}
</style>























