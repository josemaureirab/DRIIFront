<template>
  <div>
    <v-col cols="12" align="right">
      <v-btn href="/" class="mx-2" fab dark color="indigo">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </v-col>

    <v-row align="center">
      <v-expansion-panels  multiple v-model="panel">

        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert color="#385F73" dark icon="mdi-account" dense>Administradores</v-alert>
          </v-expansion-panel-header>
          <v-expansion-panel-content>

          </v-expansion-panel-content>
        </v-expansion-panel>
        
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert color="#1F7087" dark icon="mdi-account" dense>Alumnos Salientes</v-alert>
          </v-expansion-panel-header>
          <v-expansion-panel-content>

          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert color="#952175" dark icon="mdi-account" dense>Alumnos Entrantes</v-alert>
          </v-expansion-panel-header>
          <v-expansion-panel-content>

          </v-expansion-panel-content>
        </v-expansion-panel>


      </v-expansion-panels>
    </v-row>
  </div>

</template>

<script>
export default {
  data: () => ({
    panel: [0, 1, 2],
    usersAdministrators: [],
    usersOut: [],
    userIn: []
  }),
};

// TODO : IMAGENES ESTANDERIZADAS ( ANOTARLO Y BUSCARLO!!)
</script>




