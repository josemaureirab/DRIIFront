<template>
  <div>
    <BaseSection>
      <v-row  justify="center">
        <v-col cols="12" align="center">
          <v-text>{{infoConvocatoria.semester}}</v-text>
        </v-col>

        <v-col cols="12" align="center">
  
            <h1 > {{infoConvocatoria.name}}</h1>    <br> 
             <v-text>Cierre de postulaciones: {{infoConvocatoria.deadLine}}</v-text> <br> <br> 
        </v-col>


        <v-col cols="4">
          <br> <br>  
            <p>
              {{infoConvocatoria.introductoryText }}
            </p>
        </v-col>
        <v-col cols="1">
        </v-col>

        <v-col cols="4" >
            <h2  align="center"> Condiciones</h2> <br>  
            <p> 
              <ul>
                 <li> Dirigido a: {{infoConvocatoria.guided}} </li>
                 <li> Semestre de intercambio: {{infoConvocatoria.semester}}</li>
                 <li> Beneficios: {{infoConvocatoria.benefits}}</li>
               </ul>
              </p> 
        </v-col>
      </v-row>
    </BaseSection>

      <BaseSection>
      <v-row  justify="center">
      
        <v-col cols="12" align="center">
            <h1 > Requerimientos</h1> <br> <br> <br>    
        </v-col>
       <v-col cols="10"   >

           <v-expansion-panels>
              
            
            <v-expansion-panel >
            <v-expansion-panel-header>Requisitos</v-expansion-panel-header>
            <v-expansion-panel-content >

              <v-list-item-group  v-for="docR  in docRequisitos"  :key="docR.id" color="indigo" mandatory>
                <v-list-item-content class="pt-0 pb-0">
                  <v-list-item >
                    <v-list-item-title >{{docR.text}}</v-list-item-title>
                  </v-list-item>
                </v-list-item-content>
              </v-list-item-group>

     
            </v-expansion-panel-content>
          </v-expansion-panel>

         
            <v-expansion-panel >
            <v-expansion-panel-header>Documentos Académicos</v-expansion-panel-header>
            <v-expansion-panel-content >

              
            <v-list-item-group  v-for="docA  in docAcademicos"  :key="docA.id" color="indigo" mandatory>
                <v-list-item-content class="pt-0 pb-0">
                  <v-list-item >
                    <v-list-item-title >{{docA.text}}</v-list-item-title>
                  </v-list-item>
                </v-list-item-content>
              </v-list-item-group>

       
            </v-expansion-panel-content>
          </v-expansion-panel>
 
            <v-expansion-panel >
            <v-expansion-panel-header>  Documentos personales</v-expansion-panel-header>
            <v-expansion-panel-content >


             
          
             <v-list-item-group  v-for="docP in docPersonales"  :key="docP.id" color="indigo" mandatory>
                <v-list-item-content class="pt-0 pb-0">
                  <v-list-item >
                    <v-list-item-title >{{docP.text}}</v-list-item-title>
                  </v-list-item>
                </v-list-item-content>
              </v-list-item-group>

              
          
            </v-expansion-panel-content>
          </v-expansion-panel>


        
        </v-expansion-panels>


        </v-col>

        </v-row>
      </BaseSection>
  <BaseSection>
      <v-row  justify="center">
      
        <v-col cols="12" align="center">
            <h1 > Universidades</h1> <br> <br> <br>    
        </v-col>
       <v-col cols="10"   >
          <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>Argentina</v-expansion-panel-header>
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
            <v-expansion-panel-header>Alemania</v-expansion-panel-header>
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
            <v-expansion-panel-header>España</v-expansion-panel-header>
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
       </v-col>
      </v-row>
  </BaseSection>
  
      <BaseSection>
      <v-img
        src="https://atencionciudadana.minvu.gob.cl/wp-content/uploads/2018/08/Postulacion_Linea_Subsidios_250718.jpg"
        class="white--text"
        gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
      >
        <v-container class="fill-height px-4 py-12">
          <v-responsive class="d-flex align-center" height="100%" max-width="700" width="100%">
             <heading title="POSTULAS A LA "/>  
               <heading title="CONVOCATORIA "/>  
            <div class="d-flex flex-wrap">
                <v-btn disabled small>Postular</v-btn>
            </div>
          </v-responsive>
        </v-container>
      </v-img>
    </BaseSection>
  </div>
</template>


<script>
//TODO: Si no es estudiante entonces boton postulado desactivado 
import heading from "../../Extra/Heading.vue";
import BaseSection from "../../Extra/BaseSection.vue";
import { mapState , mapActions } from "vuex";
import route from "@/router";
import axios from "axios";


export default {
components: {
    heading,
    BaseSection,
  },

  async created(){
    await this.getAgreement();
    await this.getRequeriments();
    // await this.getAccount()
  },
 methods: {
  ...mapActions(['getAgreement']),
  //  ...mapActions(['getAgressment','getAccount']),

   async getRequeriments(){
    await axios.get("http://142.93.79.50:8080/backend-drii/requirements/byAgreement/"+this.infoConvocatoria.id).then((response) => (this.filterRequeriments(response.data)))
        .catch((error) => console.log(error));
   },

    filterRequeriments(data){
      let a = [];
      let b = [];
      let c = [];
      data.forEach(function (valor) {
          if(valor.type == 1)
                a.push(valor);     
          if (valor.type ==2)
                b.push(valor);
          if (valor.type ==3)
                c.push(valor);
      });
    
      this.docRequisitos = a,
      this.docAcademicos = b,
      this.docPersonales = c
    }
  


  /*async postular(){
      await axios.post("http://142.93.79.50:8080/backend-drii/postulations/create",{
          "agreement": this.convocatoria,  
           "suitor": this.account,

      }).then((response) => (console.log(response.data)))
        .catch((error) => console.log(error));
      route.push({
        name: "PostulacionesOutStudent",
      });
  }, */

  },
  computed: {
    ...mapState(["infoConvocatoria"]),
  },

  data: () => ({

    docRequisitos: [],
    docAcademicos: [],
    docPersonales: [],
    Universidad: [
      {
        name: "Universidad de Berlin",
        calories: 'Ingles, Aleman',
        fat: 'A1',
        carbs: 'Si',
        protein: '5',
        iron: "www.universidaddeberlin.cl",
      },
      {
        name: "Universidad de Koln",
        calories: 'Ingles, Aleman',
        fat: 'A1',
        carbs: 'Si',
        protein: '5',
        iron: "www.universidaddeKoln.cl",
      },
    ],
    headers: [
      {
        text: "Universidad",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Idioma", value: "calories" },
      { text: "Nivel Idioma", value: "fat" },
      { text: "Certificado", value: "carbs" },
      { text: "Cupos", value: "protein" },
      { text: "Sitio Web", value: "iron" },
    ],

 
  
  }),
};
</script>