<template>
  <v-row>
    <v-col cols="12" align="center">
      <h2>Nueva Carrera</h2>
    </v-col>
    <v-col cols="12">
      <v-card class="mx-auto" max-width="90%">
        <v-form ref="form" class="mx-10 py-10" lazy-validation>
          <v-text-field v-model="career.name" label="Nombre" required></v-text-field>
          <div class="text-center">
            <v-btn class="ma-2" @click="createCareer()" tile outlined color="success">
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
import {mapActions, mapState} from 'vuex'
import axios from 'axios'
import ShowCareersVue from './ShowCareers.vue';

export default {
  async created(){
  },

methods: {
  ...mapActions([
  ]),
  cancel () {
    router.push({name: 'ShowCareers'})
  },
  async createCareer (){
    console.log(this.career);
    await axios
      .post(this.serverURL + '/careers/create', this.career)
      .then(response => {
        console.log('vamos bien')
        this.career.name = ''
        this.cancel()
      })
      .catch(e => {
        console.log(e, e.response)
      })
    },
  },
computed: {
  ...mapState([
    'serverURL'
  ]),
},

  data: () => ({
    
    career: {
      name: '',
      faculty: null,
      section: null
    },
  }),
};
</script>