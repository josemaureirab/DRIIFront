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
                  placeholder="¿Realmente desea ELIMINAR esta universidad?"
                >
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="ma-2" color="#385F73" dark @click="cancel">Cancelar</v-btn>
          <v-btn class="ma-2" color="red" @click="activeSoftDeleteUniversity">Eliminar Universidad</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-col cols="12" align="right">
      <v-btn @click="goCreateUniversity" class="mx-2" fab dark color="indigo">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </v-col>
    <v-row align="center">
      <v-expansion-panels  multiple v-model="panel">
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert color="#385F73" dark icon="mdi-account" dense>Universidad</v-alert>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-data-table
                :headers="headersUniversitiesList"
                :items="universities"
                :items-per-page="10"
                loading-text="Cargando las universidades"
                no-data-text="No se han encontrado universidades"
                class="elevation-1"
                >
                <template v-slot:item.action="{ item }">
                  <v-icon small class="mr-2"
                    @click="editUniversity(item)"
                  >
                    mdi-pencil
                  </v-icon>
                  <v-icon small
                    @click="deleteUniversity(item)"
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
    headersUniversitiesList: [
      { text: 'Id', value: 'id', align: 'center' },
      { text: 'Nombre', value: 'name', align: 'center' },
      { text: 'Formulario', value: 'form.tittle', align: 'center' },
      { text: 'Acciones', value: 'action', align: 'center' }
      /* { text: 'Acciones', value: 'action', sortable: false, align: 'center' } */
    ],
    panel: [0],
    universities: [
    ],
    deleteDialog: false,
  }),
  async created(){
    this.showUniversities()
  },
  methods: {
    ...mapActions([
      'setSnackbarAlert'
  ]),
    goCreateUniversity() {
      router.push({name: 'AddUniversity'})
    },
    async showUniversities(){
      await axios
      .get(this.serverURL + '/universities/')
      .then(response => {
        console.log(response.data)
        this.universities=response.data
      })
      .catch(e => {
        console.log(e, e.response)
      })
    },
    editUniversity(item){
      this.university = item
      router.push({name: 'EditUniversity'})
    },
    deleteUniversity(item) {
      this.university = item
      this.deleteDialog = true
    },
    async cancel () {
      this.university = {}
      this.deleteDialog = false
    },
    async activeSoftDeleteUniversity () {
      await this.softDeleteUniversity()
      await this.showUniversities()
    },
    async softDeleteUniversity () {
      await axios
        .delete(this.serverURL + `/universities/delete/${this.university.id}`)
        .then(response => {
          console.log('La universidad ha sido eliminada.')
          this.deleteDialog = false
          this.setSnackbarAlert({ color: 'success', timeout: 2500, message: 'La universidad ha sido eliminada' })
        })
        .catch(e => {
          console.log(e)
          this.setSnackbarAlert({ color: 'error', timeout: 2500, message: 'No se ha podido eliminar la universidad' })
        })
    },
  },
  computed: {
    ...mapState([
      'serverURL'
    ]),
    university: {
      get () { return this.$store.state.university },
      set (payload) { this.$store.commit('updateUniversity', payload) }
    },
  },
};
</script>




