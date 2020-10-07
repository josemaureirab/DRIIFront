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
                  placeholder="¿Realmente desea ELIMINAR este step?"
                >
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="ma-2" color="#385F73" dark @click="cancel">Cancelar</v-btn>
          <v-btn class="ma-2" color="red" @click="activeSoftDeleteStep">Eliminar Step</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-col cols="12" align="right">
      <v-btn @click="goCreateStep" class="mx-2" fab dark color="indigo">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </v-col>
    <v-row align="center">
      <v-expansion-panels  multiple v-model="panel">
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert color="#385F73" dark icon="mdi-account" dense>Steps</v-alert>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-data-table
                :headers="headersStepsList"
                :items="steps"
                :items-per-page="10"
                loading-text="Cargando los steps"
                no-data-text="No se han encontrado steps"
                class="elevation-1"
                >
                <template v-slot:item.action="{ item }">
                  <v-icon small class="mr-2"
                    @click="editStep(item)"
                  >
                    mdi-pencil
                  </v-icon>
                  <v-icon small
                    @click="deleteStep(item)"
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
    headersStepsList: [
      { text: 'Id', value: 'id', align: 'center' },
      { text: 'Nombre', value: 'text', align: 'center' },
      { text: 'Formulario', value: 'form.title', align: 'center' },
      { text: 'Acciones', value: 'action', align: 'center' }
      /* { text: 'Acciones', value: 'action', sortable: false, align: 'center' } */
    ],
    panel: [0],
    steps: [
    ],
    deleteDialog: false,
  }),
  async created(){
    this.showSteps()
  },
  methods: {
    ...mapActions([
      'setSnackbarAlert'
  ]),
    goCreateStep() {
      router.push({name: 'AddStep'})
    },
    async showSteps(){
      await axios
      .get(this.serverURL + '/steps/')
      .then(response => {
        console.log(response.data)
        this.steps=response.data
      })
      .catch(e => {
        console.log(e, e.response)
      })
    },
    editStep(item){
      this.step = item
      router.push({name: 'EditStep'})
    },
    deleteStep(item) {
      this.step = item
      this.deleteDialog = true
    },
    async cancel () {
      this.step = {}
      this.deleteDialog = false
    },
    async activeSoftDeleteStep () {
      await this.softDeleteStep()
      await this.showSteps()
    },
    async softDeleteStep () {
      await axios
        .delete(this.serverURL + `/steps/delete/${this.step.id}`)
        .then(response => {
          console.log('El step ha sido eliminada.')
          this.deleteDialog = false
          this.setSnackbarAlert({ color: 'success', timeout: 2500, message: 'El step ha sido eliminada' })
        })
        .catch(e => {
          console.log(e)
          this.setSnackbarAlert({ color: 'error', timeout: 2500, message: 'No se ha podido eliminar el step' })
        })
    },
  },
  computed: {
    ...mapState([
      'serverURL'
    ]),
    step: {
      get () { return this.$store.state.step },
      set (payload) { this.$store.commit('updateStep', payload) }
    },
  },
};
</script>




