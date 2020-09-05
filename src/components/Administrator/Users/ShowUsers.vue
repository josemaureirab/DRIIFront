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
            <v-alert color="#385F73" dark icon="mdi-account" dense>Administradores</v-alert>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-data-table
                :headers="headersAdministratorsList"
                :items="usersAdministrators"
                :items-per-page="10"
                loading-text="Cargando las administradores"
                no-data-text="No se han encontrado administadores"
                class="elevation-1"
                >
                <template v-slot:item.action="{ item }">
                  <v-icon small class="mr-2"
                    @click="editAdmin(item)"
                  >
                    mdi-pencil
                  </v-icon>
                  <v-icon small
                    @click="deleteAdmin(item)"
                  >
                    mdi-delete
                  </v-icon>
                </template>
              </v-data-table>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert color="#1F7087" dark icon="mdi-account" dense>Alumnos Salientes</v-alert>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-data-table
                :headers="headersOutList"
                :items="usersOut"
                :items-per-page="10"
                loading-text="Cargando alumnos salientes"
                no-data-text="No se han alumnos salientes"
                class="elevation-1"
                >
                <template v-slot:item.action="{ item }">
                  <v-icon small class="mr-2"
                    @click="editOut(item)"
                  >
                    mdi-pencil
                  </v-icon>
                  <v-icon small
                    @click="deleteOut(item)"
                  >
                    mdi-delete
                  </v-icon>
                </template>
              </v-data-table>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert color="#952175" dark icon="mdi-account" dense>Alumnos Entrantes</v-alert>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-data-table
                :headers="headersInList"
                :items="usersIn"
                :items-per-page="10"
                loading-text="Cargando alumnos entrantes"
                no-data-text="No se han encontrado alumnos entrantes"
                class="elevation-1"
                >
                <template v-slot:item.action="{ item }">
                  <v-icon small class="mr-2"
                    @click="editIn(item)"
                  >
                    mdi-pencil
                  </v-icon>
                  <v-icon small
                    @click="deleteIn(item)"
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
    headersAdministratorsList: [
      { text: 'Nombre', value: 'firstName', align: 'center' },
      { text: 'Apellido', value: 'lastName', align: 'center' },
      { text: 'Rut', value: 'rut', align: 'center' },
      { text: 'Cargo', value: 'rut', align: 'center' },
      { text: 'Acciones', value: 'action', align: 'center' }
      /* { text: 'Acciones', value: 'action', sortable: false, align: 'center' } */
    ],
    headersOutList: [
      { text: 'Nombre', value: 'firstName', align: 'center' },
      { text: 'Apellido', value: 'lastName', align: 'center' },
      { text: 'Rut', value: 'rut', align: 'center' },
      { text: 'Carrera', value: 'rut', align: 'center' },
      { text: 'Acciones', value: 'action', align: 'center' }
      /* { text: 'Acciones', value: 'action', sortable: false, align: 'center' } */
    ],
    headersInList: [
      { text: 'Nombre', value: 'firstName', align: 'center' },
      { text: 'Apellido', value: 'lastName', align: 'center' },
      { text: 'Rut', value: 'rut', align: 'center' },
      { text: 'Nacionalidad', value: 'rut', align: 'center' },
      { text: 'Universidad', value: 'rut', align: 'center' },
      { text: 'Acciones', value: 'action', align: 'center' }
      /* { text: 'Acciones', value: 'action', sortable: false, align: 'center' } */
    ],
    panel: [0, 1, 2],
    usersAdministrators: [],
    usersOut: [],
    usersIn: []
  }),
  methods: {
    editAdministrator(){

    },
    delteAdministrator(){

    },
    editOut(){

    },
    delteOut(){

    },
    editIn(){

    },
    delteIn(){

    },
  }
};
</script>




