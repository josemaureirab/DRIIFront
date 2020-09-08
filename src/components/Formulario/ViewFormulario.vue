
 <template>
  <div>
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
                  {{question}}  
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
      
  </div>
</template>

<script>


import Wait from '../Extra/Wait.vue'
import { mapState , mapActions } from "vuex";




export default {
    components: {
   Wait,
  },
  async created() {
    await this.getQuestions();
    await this.getSecciones();
  },
 methods: {
  ...mapActions(['getQuestions']),


async getSecciones(){
    await axios
    .get(" http://142.93.79.50:8080/backend-drii/sections/byForm/"+this.idForm)
    .then((response) => (this.secciones = response.data))
    .catch((error) => console.log(error));
  },

  },
  computed: {
    ...mapState(["question","idForm"])
  },

  data: () => ({
    panel: [0, 1],
    secciones: [],
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