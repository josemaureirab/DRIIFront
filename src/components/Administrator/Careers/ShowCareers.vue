<template>
  <div>
    <v-dialog v-model="deleteDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Confirmación de Eliminación</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md8>
                <v-text-field
                  disabled
                  placeholder="¿Realmente desea ELIMINAR esta carrera?"
                >
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="ma-2" color="#385F73" dark @click="cancel">Cancelar</v-btn>
          <v-btn class="ma-2" color="red" @click="activeSoftDeleteCareer">Eliminar Carrera</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
                    @click="editCareer(item)"
                  >
                    mdi-pencil
                  </v-icon>
                  <v-icon small
                    @click="deleteCareer(item)"
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
      { text: 'Acciones', value: 'action', align: 'center' }
      /* { text: 'Acciones', value: 'action', sortable: false, align: 'center' } */
    ],
    panel: [0],
    careers: [
    ],
    cereer: {},
    deleteDialog: false,
  }),
  async created(){
    this.showCareers()
  },
  methods: {
    ...mapActions([
      'setSnackbarAlert'
  ]),
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
    editCareer(item){
      this.career = item
      router.push({name: 'EditCareer'})
    },
    deleteCareer(item) {
      this.career = item
      this.deleteDialog = true
    },
    async cancel () {
      this.career = {}
      this.deleteDialog = false
    },
    async activeSoftDeleteCareer () {
      await this.softDeleteCareer()
      await this.showCareers()
    },
    async softDeleteCareer () {
      await axios
        .delete(this.serverURL + `/careers/delete/${this.career.id}`)
        .then(response => {
          console.log('La carrera ha sido eliminada.')
          this.deleteDialog = false
          this.setSnackbarAlert({ color: 'success', timeout: 2500, message: 'La carrera ha sido eliminada' })
        })
        .catch(e => {
          console.log(e)
          this.setSnackbarAlert({ color: 'error', timeout: 2500, message: 'No se ha podido eliminar la carrera' })
        })
    },
  },
  computed: {
    ...mapState([
      'serverURL'
    ]),
    career: {
      get () { return this.$store.state.career },
      set (payload) { this.$store.commit('updateCareer', payload) }
    },
  },
};
</script>




