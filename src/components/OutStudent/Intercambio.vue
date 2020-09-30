<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      >Documentos y Postulación a la Universidad de Destino</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Trámites</v-stepper-step>

      <v-divider></v-divider>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-row justify="center">

            <v-col cols="1" align="right" class="ma-4">
              <v-tooltip  v-model="show" top>
                <template  v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon color="grey lighten-1">mdi-help</v-icon>
                  </v-btn>
                </template>
                <span>
                  Carta de recomendación del profesor blablablablabal
                  <br />blablalbablablabl
                </span>
              </v-tooltip>
            </v-col>
      
          <v-col cols="6" align="left">
              <v-file-input show-size counter label="Carta de Compromiso" />
          </v-col>
          
          <v-col cols="2"  align="right">
            <v-btn class="ma-2" color="green" dark>
              Enviar Archivo
              <v-icon dark right>mdi-upload</v-icon>
            </v-btn>
          </v-col>
        </v-row>

          <v-row justify="center">

            <v-col cols="1" align="right" class="ma-4">
              <v-tooltip  v-model="show" top>
                <template  v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon color="grey lighten-1">mdi-help</v-icon>
                  </v-btn>
                </template>
                <span>
                  Carta de recomendación del profesor blablablablabal
                  <br />blablalbablablabl
                </span>
              </v-tooltip>
            </v-col>
      
          <v-col cols="6" align="left">
              <v-file-input show-size counter label="Pasaporte" />
          </v-col>
          
          <v-col cols="2"  align="right">
            <v-btn class="ma-2" color="green" dark>
              Enviar Archivo
              <v-icon dark right>mdi-upload</v-icon>
            </v-btn>
          </v-col>
        </v-row>

       <v-row justify="center">

            <v-col cols="1" align="right" class="ma-4">
              <v-tooltip  v-model="show" top>
                <template  v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon color="grey lighten-1">mdi-help</v-icon>
                  </v-btn>
                </template>
                <span>
                  Carta de recomendación del profesor blablablablabal
                  <br />blablalbablablabl
                </span>
              </v-tooltip>
            </v-col>
      
          <v-col cols="6" align="left">
              <v-file-input show-size counter label="Notas" />
          </v-col>
          
          <v-col cols="2"  align="right">
            <v-btn class="ma-2" color="green" dark>
              Enviar Archivo
              <v-icon dark right>mdi-upload</v-icon>
            </v-btn>
          </v-col>
        </v-row>


        <v-btn color="primary" @click="e1 = 2">Continuar</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" color="grey lighten-1"></v-card>

        <v-btn color="primary" @click="e1 = 3">Continuar</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1"></v-card>

        <v-btn color="primary" @click="e1 = 4">Continuar</v-btn>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-card class="mb-12" color="grey lighten-1"></v-card>

        <v-btn color="primary" @click="e1 = 1">Continuar</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
    };
  },
};
</script>