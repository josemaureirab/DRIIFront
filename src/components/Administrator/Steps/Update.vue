<template>
  <v-row>
    <v-col cols="12" align="center">
      <h2>Edición de Step</h2>
    </v-col>
    <v-col cols="12">
      <v-card class="mx-auto" max-width="90%">
        <v-form ref="form" class="mx-10 py-10" lazy-validation>
          <v-text-field v-model="step.text" label="Nombre" required></v-text-field>
          <v-select
          :items="formularios"
          label="Seleccionar formulario"
          item-text="tittle"
          v-model="step.form"
        ></v-select>
          <div class="text-center">
            <v-btn class="ma-2" @click="editStep()" tile outlined color="success">
            <v-icon left>mdi-plus</v-icon>Editar Step
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
import ShowStepsVue from './ShowSteps.vue';

export default {
  async created(){
  },

methods: {
  ...mapActions([
  ]),
   getFormularios(){
      return this.axios.get("http://142.93.79.50:8080/backend-drii/forms/")
      .then((response) => ((this.formularios = this.filterPublished(response.data)), console.log(response.data)))
      .catch((error) => console.log(error));
    },  
    filterPublished(data){
      let cols = [];
      data.forEach(function (valor) {
          if(valor.published == true)
                cols.push(valor);     
      });
      return cols;
    },
  cancel () {
    router.push({name: 'ShowSteps'})
	},
	
  async editStep (){
    console.log(this.career);
    await axios
      .put(this.serverURL + '/steps/edit/' + `${this.step.id}`, this.step)
      .then(response => {
        this.cancel()
      })
      .catch(e => {
        console.log(e, e.response)
      })
    },
  },
computed: {
  ...mapState([
		'serverURL',
		'step'
  ]),
},

  data: () => ({
    formularios: []
  }),
};
</script>