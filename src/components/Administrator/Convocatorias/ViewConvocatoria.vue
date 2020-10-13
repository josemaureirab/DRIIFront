<template >
  <div>

<v-img
                        class="white--text align-center"
                        height="400px"
                        :src="require('../../Extra/Recurso_2.png')" 
                      >
           
        <v-col cols="12" align="center">
            <h1 > {{infoConvocatoria.name}}</h1>
             <v-col cols="12" align="center">
          <v-text>{{infoConvocatoria.semester}}</v-text>
        </v-col>
             <v-text>Cierre de postulaciones: {{infoConvocatoria.deadLine}}</v-text> <br> <br> 
        </v-col>

</v-img>
    <BaseSection>
 <v-row  justify="center">

        <v-col cols="4">
          <br> <br>  
            <p>
              {{infoConvocatoria.introductoryText }}
            </p>
        </v-col>
        <v-col cols="1">
        </v-col>

        <v-col  class=" align-center" cols="4" >
            <h2  align="center"> Condiciones</h2> <br>  
            <p> 
              <ul>
                 <li> <b> Dirigido a</b>: {{infoConvocatoria.guided}} </li>
                 <li> <b> Semestre de intercambio</b>: {{infoConvocatoria.semester}}</li>
                 <li> <b> Beneficios</b>: {{infoConvocatoria.benefits}}</li>
               </ul>
              </p> 
        </v-col>
      </v-row>
    </BaseSection>

  <v-container  >
    <v-row no-gutters >
      <v-col>
         <v-img
                        class="white--text align-end"
                        height="400"
                        width="500"
                        :src="require('../../Extra/Recurso_5.png')" 
                      />
      </v-col>




      <v-col  class=" align-center"> 
          <v-row   class="mb-12" justify="center">

        <v-col cols="6" align="center">
            <h1 > Requerimientos</h1>   
        </v-col>
       <v-col cols="12"   >

           <v-expansion-panels>
              
            
            <v-expansion-panel >
            <v-expansion-panel-header>Requisitos</v-expansion-panel-header>
            <v-expansion-panel-content >

              <v-list-item-group  v-for="docR  in docRequisitos"  :key="docR.id"  color="indigo" mandatory>
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
   
      </v-col>
      
    </v-row>
  </v-container>

 
     
      <v-row  justify="center">
      
        <v-col cols="12" align="center">
            <h1 > Universidades</h1>  
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
  
      <BaseSection>
   
      <v-img
                        class="white--text align-end"
                        height="600px"
                        :src="require('../../Extra/Recurso_2.png')" 
                      >
        <v-container class="fill-height px-4 py-12">
          <v-responsive class="d-flex align-center pb-10" height="100%" max-width="700" width="100%">
             <heading title="POSTULA A LA "/>  
               <heading title="CONVOCATORIA "/>  
            <div class="d-flex flex-wrap">
                <v-btn  @click="postular()">Postular</v-btn>
            </div>
          </v-responsive>
        </v-container>
      </v-img>
    </BaseSection>


  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
    
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Error
        </v-card-title>

        <v-card-text>
          <br>
            Ya  tienes una postuación. Elimina tu postulación actual e intenta nuevamente.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

  </div>
</template>


<script>
//TODO: Si no es estudiante entonces boton postulado desactivado 
import BaseSection from "../../Extra/BaseSection"
import heading from "../../Extra/Heading"
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
  ...mapActions(['getAgreement','getSuitor']),
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
    },


  
    





  async postular(){
      /*console.log('entre ')
        if (this.count ==0 ){
        await axios.post("http://142.93.79.50:8080/backend-drii/postulations/create",{
            agreement: this.infoConvocatoria,  
            suitor: this.infoSuitor,
            status: "en proceso",

        }).then((response) => (console.log(response.data)))
          .catch((error) => console.log(error));
        route.push({
          name: "PostulacionOutStudent",
        });
      }
      else 
        {this.dialog = true
      
        } 
      */
  },

  },
  computed: {
    ...mapState(["infoConvocatoria","infoSuitor"]),
  },

  data: () => ({
    dialog: false,
    count: 0,
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