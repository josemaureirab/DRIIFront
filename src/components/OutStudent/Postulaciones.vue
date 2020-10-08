
 <template>
  <div>
   
    <v-row align="center">
      <v-expansion-panels color="red" multiple v-model="panel">
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert color="blue" dark icon="mdi-format-list-checks" dense>Primera Fase</v-alert>
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
              :items="historial"
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

import { mapState , mapActions } from "vuex";
import route from "@/router";
import axios from "axios";

export default {
  components: {
    Postulacion,
    Wait,
  },
  async created(){
    await this.getSuitor();
    await this.getHistorial();
    console.log(this.historial)

  },
  computed: {
    ...mapState(["infoSuitor"]),
  },

  methods: {
  ...mapActions(['getSuitor']),

    async getHistorial(){
      await axios.post("http://142.93.79.50:8080/backend-drii/suitors/postulations/"+this.infoSuitor.id).then((response) => (this.filtrar(response.data)))
        .catch((error) => console.log(error));
  
    },

    filtrar(data){
      let post = [];
      let hist = [];
      data.forEach(function (valor) {
          if (valor.status !== "actual") hist.push(valor);
          else post.push(valor);
        });
      this.historial = hist;
      this.actual = post;
    }

   
  },


  data: () => ({

    actual:[],
    historial:[],
    panel: [0, 1],
    e1: 1,
    
  
  
    headers: [
      {
        text: "Semestre de Postulación",
        align: "start",
        sortable: false,
        value: "agreement.semester" ,
      },
      { text: "Programa", value:  "agreement.name" },
      { text: "Status", value: "status" }, 
    ],
  }),
};
</script>
-> Semestre de la postulación
	-> Programa
	-> Status  ( Seleccionado / Rechazado, Ejecutada, No Ejecutada)
		-> SOLO SI FUE ACEPTADO:
	-> Pais