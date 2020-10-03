<template>
  <v-row>
    <v-col cols="12" align="center">
      <h2>Edición de Universidad</h2>
    </v-col>
    <v-col cols="12">
      <v-card class="mx-auto" max-width="90%">
        <v-form ref="form" class="mx-10 py-10" lazy-validation>
          <v-text-field v-model="university.name" label="Nombre" required></v-text-field>
          <div class="text-center">
            <v-btn class="ma-2" @click="editUniversity()" tile outlined color="success">
            <v-icon left>mdi-plus</v-icon>Editar Universidad
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
import ShowUniversitiesVue from './ShowUniversities.vue';

export default {
  async created(){
  },

methods: {
  ...mapActions([
  ]),
  cancel () {
    router.push({name: 'ShowUniversities'})
	},
	
  async editUniversity (){
    console.log(this.university);
    await axios
      .put(this.serverURL + '/universities/edit/' + `${this.university.id}`, this.university)
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
		'university'
  ]),
},

  data: () => ({
  }),
};
</script>