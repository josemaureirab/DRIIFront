
 <template>
  <div>
   
    <v-row align="center">
      <v-expansion-panels color="red" multiple v-model="panel">
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert color="blue" dark icon="mdi-format-list-checks" dense>Primere Fase</v-alert>
          </v-expansion-panel-header>
          <v-expansion-panel-content>





            <v-col cols="12" align="center">
                    <Postulacion/>        
            </v-col>
       

       
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert color="blue" dark icon="mdi-timetable" dense>Postulaciones Pasadas</v-alert>
          </v-expansion-panel-header>
          <v-expansion-panel-content>

    
               
            <v-data-table
              dense
              :headers="headers"
              :items="Universidad"
              item-key="name"
              class="elevation-1"
            ></v-data-table>

          </v-expansion-panel-content>
        </v-expansion-panel>


   

        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert color="blue" dark icon="mdi-file-document" dense>Segunda Fase</v-alert>
          </v-expansion-panel-header>
          <v-expansion-panel-content>

    <ViewStep>  </ViewStep>
               
            
          </v-expansion-panel-content>
        </v-expansion-panel>

      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>



import Postulacion from  '../../Formulario/ViewFormulario'
import Wait from '../../Extra/Wait.vue'
import ViewStep from '../Steps/ViewSteps.vue'


export default {
    components: {
   Postulacion,
   Wait,
   ViewStep

  },

  data: () => ({
    panel: [0, 1],
    e1: 1,
    Universidad: [
      {
        name: "1-2018",
        calories: "Convenio Bilateral",
        fat: 'Seleccionado',
    
      },
      {
        name: "2-2018",
        calories: "AUGM",
        fat: 'Rechazado',
        
      },
      {
        name: "1-2019",
        calories: "Convenio Bilateral",
        fat: 'No Ejecutada',
        carbs: 23,
        carbs: 'Francia',
        protein: 'Universidad de Metz',
      },
      {
        name: "2-2021",
        calories:  "AUGM",
        fat: 'Ejecutada',
        carbs: 'Alemania',
        protein: 'Universidad de Koln',
     
      },
    
    ],
    headers: [
      {
        text: "Semestre de Postulación",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Programa", value: "calories" },
      { text: "Status", value: "fat" },
      { text: "Pais", value: "carbs" },
      { text: "Universidad", value: "protein" },
 
    ],
  }),
};
</script>
-> Semestre de la postulación
	-> Programa
	-> Status  ( Seleccionado / Rechazado, Ejecutada, No Ejecutada)
		-> SOLO SI FUE ACEPTADO:
	-> Pais