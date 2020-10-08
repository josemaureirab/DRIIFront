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
                <v-btn href="/ListConvocatorias" text>Ingresar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card color="#1F7087" dark class="cuadra">
              <v-card-title class="headline">Formularios</v-card-title>
              <v-card-subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-card-subtitle>
              <v-card-actions>
                <v-btn text href="/ListFormularios">Ingresar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card color="#952175" dark class="cuadra">
              <v-card-title class="headline">Postulaciones</v-card-title>

              <v-card-subtitle>Lorem asipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-card-subtitle>

              <v-card-actions>
                <v-btn text href="/ListPostulaciones">Ingresar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="4">
            <v-card color="#385F73" dark class="cuadra">
              <v-card-title class="headline"> Gestión de Step's</v-card-title>
              <v-card-subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-card-subtitle>
              <v-card-actions>
                <v-btn text href="/ShowSteps">Ingresar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card color="#1F7087" dark class="cuadra">
              <v-card-title class="headline"> Gestión de Usuarios</v-card-title>
              <v-card-subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-card-subtitle>
              <v-card-actions>
                <v-btn text href="/ShowUsers">Ingresar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card color="#952175" dark class="cuadra">
              <v-card-title class="headline"> Gestión de Carreras</v-card-title>
              <v-card-subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-card-subtitle>
              <v-card-actions>
                <v-btn text href="/ShowCareers">Ingresar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card color="#385F73" dark class="cuadra">
              <v-card-title class="headline">Gestión de Universidades</v-card-title>
              <v-card-subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-card-subtitle>
              <v-card-actions>
                <v-btn text href="/ShowUniversities">Ingresar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </div>
</template>


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























