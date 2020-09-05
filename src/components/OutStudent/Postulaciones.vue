
 <template>
  <div>
   
    <v-row align="center">
      <v-expansion-panels color="red" multiple v-model="panel">
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert color="blue" dark icon="mdi-format-list-checks" dense>Primere Fase</v-alert>
          </v-expansion-panel-header>
          <v-expansion-panel-content>

  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1"> Sección 1</v-stepper-step>

      <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 2" step="2"> Sección 2</v-stepper-step>

      <v-divider></v-divider>


      <v-stepper-step :complete="e1 > 3" step="3"> Sección 3</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="4">Respuesta</v-stepper-step>
       <v-divider></v-divider>

      <v-stepper-step step="5">Nueva Universidad</v-stepper-step>
       <v-divider></v-divider>

      <v-stepper-step step="6">Respuesta</v-stepper-step>

    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">


        <v-row  justify="center">
            <v-col cols="10" align="center">
                    <Postulacion/>        
            </v-col>
        </v-row>
        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continuar
        </v-btn>

       
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-row  justify="center">
            <v-col cols="10" align="center">
                    <Postulacion/>        
            </v-col>
        </v-row>
        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continuar
        </v-btn>

        <v-btn text>Atras</v-btn>
      </v-stepper-content>



     <v-stepper-content step="3">
        <v-row  justify="center">
            <v-col cols="10" align="center">
                    <Postulacion/>        
            </v-col>
        </v-row>
        <v-btn
          color="primary"
          @click="e1 = 4"
        >
          Enviar Formulario
        </v-btn>

        <v-btn text>Atras</v-btn>
      </v-stepper-content>

     
      <v-stepper-content step="4">
       
        
    
       
        
          <Wait/>

           <v-col cols="12" md="6">
        <v-textarea
          name="input-7-1"
          label="Respuesta"
          value="MOVER A LA DERECHA"
       
        ></v-textarea>
      </v-col>
        

         <v-btn
          color="primary"
          @click="e1 = 5"
        >
         Aceptar
        </v-btn>

         <v-btn
          color="primary"
          @click="e1 = 5"
        >
         Rechazar
        </v-btn>



       <v-btn
          color="primary"
          @click="e1 = 5"
        >
          Nueva Universidad
        </v-btn>

       

      
      </v-stepper-content>
         <v-stepper-content step="5">
             

             <v-col class="d-flex" cols="12" sm="6">
                <v-select
                :items="items"
                label="Asignar Formulario"
                ></v-select>
             </v-col>

         <v-btn
          color="primary"
          @click="e1 = 6"
        >
          Nueva Universidad
        </v-btn>


        
      </v-stepper-content>

  <v-stepper-content step="6">
       
          <Wait/>
           <v-col cols="12" md="6">
        <v-textarea
          name="input-7-1"
          label="Respuesta"
          value="MOVER A LA DERECHA"
       
        ></v-textarea>
      </v-col>
        

         <v-btn
          color="primary"
          @click="e1 = 5"
        >
         Aceptar
        </v-btn>

         <v-btn
          color="primary"
          @click="e1 = 5"
        >
         Rechazar
        </v-btn>
      
       

      
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>

            
       
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


      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>



import Postulacion from  '../Formulario/ViewFormulario.vue'
import Wait from '../Extra/Wait.vue'


export default {
    components: {
   Postulacion,
   Wait,


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