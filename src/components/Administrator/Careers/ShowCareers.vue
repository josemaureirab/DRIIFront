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
export default {
  data: () => ({
    headersCareersList: [
      { text: 'Nombre', value: 'firstName', align: 'center' },
      { text: 'Departamento', value: 'lastName', align: 'center' },
      { text: 'Facultad', value: 'rut', align: 'center' },
      { text: 'Postgrado', value: 'rut', align: 'center' },
      { text: 'Acciones', value: 'action', align: 'center' }
      /* { text: 'Acciones', value: 'action', sortable: false, align: 'center' } */
    ],
    panel: [0],
    careers: ['Ingeniería Informática','Ingeniería Ambiental','Ingeniería Mecánica'],
  }),
  methods: {
    editCareer(){

    },
    deleteCareer(){

    }
  }
};
</script>




