<template>
  <div id="auth-signIn">
    <v-row justify="center">
      <v-container>
        <v-row dense>
          <v-col cols="4">
            <v-card color="#385F73" dark class="cuadra">
              <v-card-title class="headline">Convocatorias</v-card-title>
              <v-card-subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-card-subtitle>
              <v-card-actions>
                <v-btn href="/ConvocatoriaOutStudent" text>Ingresar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card color="#1F7087" dark class="cuadra">
              <v-card-title class="headline">Mi Postulacion</v-card-title>
              <v-card-subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-card-subtitle>
              <v-card-actions>
                <v-btn text @click="myPostultion()">Ingresar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card color="#952175" dark class="cuadra">
              <v-card-title class="headline">Mi Perfil</v-card-title>
              <v-card-subtitle>Lorem asipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-card-subtitle>
              <v-card-actions>
                <v-btn text href="/PerfilOutStudent">Ingresar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
     <!--          <v-row dense  v-if="aceptado.length !==  0"> -->

        <v-row dense>
          <v-col cols="4">
            <v-card color="#385F73" dark class="cuadra">
              <v-card-title class="headline">Mi Intercambio</v-card-title>
              <v-card-subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-card-subtitle>
              <v-card-actions>
                <v-btn text href="/IntercambioOutStudent">Ingresar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </div>
</template>

<!-- TODO: * Si Status =  Aceptado => Intercambio es visible -->

<script>
import route from "@/router";
import { mapState, mapActions } from "vuex";
import axios from "axios";

export default {
  async created(){
    await this.getPostulacion();

  },

  data () {
    return {
     aceptado : []
      }
  },
    
      computed: {
   ...mapState(["idSuitor"]),
  },


  methods: {
    
  async getPostulacion(){
      await axios.post("http://142.93.79.50:8080/backend-drii/suitors/postulations/"+this.idSuitor).then((response) => (this.filtrar(response.data)))
        .catch((error) => console.log(error));
          
    },

 filtrar(data){
   console.log(data)
      let acep = [];
      data.forEach(function (valor) {
          if (valor.status == "aceptado" && valor.deleted == false) {
                acep.push(valor)
           }
       
        });
      this.aceptado = acep;
      //console.log(this.id.idForm)
    },

     myPostultion(){    
        route.push({
        name: "PostulacionOutStudent",
      });
     }
  }
}
</script>



<style scoped>
.nim-btn {
  text-transform: none !important;
}
.btn-enter {
  background-color: #f98a01 !important;
}
.cuadra {
  margin-left: 1% !important;
  margin-right: 1% !important;
  margin-top: 1% !important;
  margin-bottom: 1% !important;
}
</style>























