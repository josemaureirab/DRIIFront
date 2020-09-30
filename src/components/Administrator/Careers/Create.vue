<template>
  <v-row>
    <v-col cols="12" align="center">
      <h2>Nueva Carrera</h2>
    </v-col>
    <v-col cols="12">
      <v-card class="mx-auto" max-width="90%">
        <v-form ref="form" class="mx-10 py-10" lazy-validation>
          <v-text-field v-model="name" label="Nombre" required></v-text-field>
          <v-text-field v-model="semestre" label="Departamento" required></v-text-field>
          <v-text-field v-model="duracion" label="Facultad" required></v-text-field>
          <v-row>
            <v-col cols="4">
              <v-checkbox v-model="disabled" class="mx-2" label="Postgrado"></v-checkbox>
            </v-col>
        </v-row>
          <div class="text-center">
            <v-btn class="ma-2" @click="add(k)" tile outlined color="success">
            <v-icon left>mdi-plus</v-icon>Crear Carrera
            </v-btn>
            <v-btn class="ma-2" @click="cancel()" tile color="red" dark>Cancelar</v-btn>
        </div>
        </v-form>
        
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

import router from "@/router"

export default {
  async created(){
  },

  methods: {
      cancel () {
          router.push({name: 'ShowCareers'})
      }
  },

  computed: {
  },

  data: () => ({
    
      
    menu: false,
   
    menu2: false,

    formularios: [],
    name: null,
    semestre: null,
    duracion: null,
    inicio: new Date().toISOString().substr(0, 10), // TIENE UQE SER TIPO DATA.
    cierre: new Date().toISOString().substr(0, 10), // TIENE QUE SER TIPO DATA.
    link: null,
    texto: null,
    beneficio: null,
    dirigido: null,
    photoPortada: null,
    photoPagina: null,
    csvUniversidades: null,
    formulario: null,
    listRequerimiento: null,
    listAcademicos: null,
    listPersonales: null,

    count: 1,
    inputs: [
      {
        name: "",
      },
    ],
  }),
};
</script>