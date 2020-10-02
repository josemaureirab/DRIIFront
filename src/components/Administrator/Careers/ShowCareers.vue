<template>
  <div>
    <v-col cols="12" align="right">
      <v-btn @click="goCreateCarreer" class="mx-2" fab dark color="indigo">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </v-col>
    <v-row align="center">
      <v-expansion-panels  multiple v-model="panel">
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert color="#385F73" dark icon="mdi-account" dense>Carreras</v-alert>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-data-table
                :headers="headersCareersList"
                :items="careers"
                :items-per-page="10"
                loading-text="Cargando las carreras"
                no-data-text="No se han encontrado carreras"
                class="elevation-1"
                >
                <template v-slot:item.action="{ item }">
                  <v-icon small class="mr-2"
                    @click="editCareers(item)"
                  >
                    mdi-pencil
                  </v-icon>
                  <v-icon small
                    @click="deleteCareers(item)"
                  >
                    mdi-delete
                  </v-icon>
                </template>
              </v-data-table>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>

import router from "@/router";
import {mapActions, mapState} from 'vuex'
import axios from 'axios'

export default {
  data: () => ({
    headersCareersList: [
      { text: 'Id', value: 'id', align: 'center' },
      { text: 'Nombre', value: 'name', align: 'center' },
      { text: 'Facultad', value: 'faculty', align: 'center' },
      { text: 'Sección', value: 'section', align: 'center' },
      { text: 'Acciones', value: 'action', align: 'center' }
      /* { text: 'Acciones', value: 'action', sortable: false, align: 'center' } */
    ],
    panel: [0],
    careers: [
    ],
  }),
  async created(){
    this.showCareers()
  },
  methods: {
    goCreateCarreer() {
      router.push({name: 'AddCarreer'})
    },
    async showCareers(){
      await axios
      .get(this.serverURL + '/careers/')
      .then(response => {
        console.log(response.data)
        this.careers=response.data
      })
      .catch(e => {
        console.log(e, e.response)
      })
    },
    editCareer(){

    },
    deleteCareer(){

    }
  },
  computed: {
    ...mapState([
      'serverURL'
    ]),
  },
};
</script>




