<template>
  <v-row>
    <v-col cols="12" align="center">
      <h2>Edición de estado</h2>
    </v-col>
    <v-col cols="12">
      <v-card class="mx-auto" max-width="90%">
        <v-form ref="form" class="mx-10 py-10" lazy-validation>
          <v-select
          :items="items"
          v-model="actualPostulation.status"
          placeholder="En proceso"
        ></v-select>
          <div class="text-center">
            <v-btn class="ma-2" @click="editStatus()" tile outlined color="success">
            <v-icon left>mdi-plus</v-icon>Editar estado
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
import ListPostulaciones from './ListPostulaciones.vue';

export default {
  async created(){
      console.log(this.actualPostulation.status);
  },

methods: {
  ...mapActions([
  ]),
  cancel () {
    router.push({name: 'ListPostulaciones'})
	},
	
  async editStatus (){
    console.log(this.career);
    await axios
      .put(this.serverURL + '/postulations/edit/' + `${this.actualPostulation.id}`, this.actualPostulation)
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
		'actualPostulation'
  ]),
},

  data: () => ({
      items: [
          'revisión',
          'aceptado',
          'rechazado',
          'nueva universidad'
      ]
  }),
};
</script>