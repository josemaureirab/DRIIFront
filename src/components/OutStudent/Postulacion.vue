<template>
  <div> 

<div v-if="proceso == 0 && revision == 0 && aceptado == 0 && rechazado == 0 && formulario == 0"> 


   <card>
  <div class="text-center">
    <v-dialog
      v-model="dialog2"
      width="500"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Postulaciones
        </v-card-title>

        <v-card-text>
          <br>
         Actualmente no tienes ninguna postulación asociada a una convocatoria
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
            color="primary"
            text
            @click="backMenu()"
          >
            Volver a Menu
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="backConvocatoria()"
          >
            Ir a Convocatorias
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
    </card>


  </div>
  <div v-if="revision  > 0"> 
   <card>
  <div class="text-center">
    <v-dialog
      v-model="dialog2"
      width="500"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Postulacion
        </v-card-title>

        <v-card-text>
          <br>
          Su proceso de postulación esta siendo revisado.
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
            color="primary"
            text
            @click="backMenu()"
          >
            Volver a Menu
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

      </card>
  </div>

  
  <div v-if="aceptado > 0"> 
   <card>
  <div class="text-center">
    <v-dialog
      v-model="dialog2"
      width="500"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Postulaciones
        </v-card-title>

        <v-card-text>
          <br>
              Fuiste aceptado.
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
            color="primary"
            text
            @click="backMenu()"
          >
            Volver a Menu
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="backMiIntercambio()"
          >
            Ir al Mi Intercambio.
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
    </card>


  </div>
  <div v-if="rechazado > 0"> 
   <card>
  <div class="text-center">
    <v-dialog
      v-model="dialog2"
      width="500"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Postulaciones
        </v-card-title>

        <v-card-text>
          <br>
         Fuiste rechazado en la postulación actual.
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
            color="primary"
            text
            @click="backMenu()"
          >
            Volver a Menu
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="backConvocatoria()"
          >
            Ir a Convocatorias
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
    </card>


  </div>

<div v-if="formulario > 0"> 
   <card>
  <div class="text-center">
    <v-dialog
      v-model="dialog2"
      width="500"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Postulaciones
        </v-card-title>

        <v-card-text>
          <br>
            Debes seleccionar una nueva universidad de destino
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
            color="primary"
            text
            @click="backMenu()"
          >
            Volver a Menu
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
    </card>


  </div>



  <div v-if="proceso > 0"> 
    <v-row justify="space-around">
      <v-col cols="12">
      </v-col>
    </v-row>
    <v-stepper
      v-model="e1"
      :vertical="vertical"
      :alt-labels="altLabels"
    >
      <template>
        <v-stepper-header>
          <template v-for="n in steps">
            <v-stepper-step
              :key="`${n}-step`"
              :complete="e1 > n"
              :step="n"
              :editable="editable"
            >
             {{ sections[n-1].name }}
            </v-stepper-step>

            <v-divider
              v-if="n !== steps"
              :key="n"
            ></v-divider>
          </template>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content
            v-for="n in steps"
            :key="`${n}-content`"
            :step="n"
          >
            <v-card
              class="mb-12"
            >
                <v-list-item v-for="(item, i) in questions[n-1]" :key="i">
      <v-list-item-content>
        <v-col cols="9" justify="center">
          <ViewStudentShortAnswer   v-if="item.questionType == '1'"  :postulacion="postulacion" v-bind:item="item" />
          <ViewStudentSelectAnswer
            v-if="item.questionType == '2'" v-bind:item="item"
          />
          <ViewStudentGrid
            v-if="item.questionType == '3'"
            v-bind:item="item"
          />
        </v-col>
      </v-list-item-content>
    </v-list-item>

            </v-card>

                <v-row>

              <v-col md="3">
            <v-btn  v-if="n < steps"
            
              color="primary"
              @click="nextStep(n)"
            >
              Siguiente
            </v-btn>
              </v-col>
           <v-col md="3">
            <v-btn  v-if="n !== 1"
            
              color="primary"
              @click="nextStep(n-2)"
            >
              Atras
            </v-btn>  
            </v-col>
     <v-col md="3">
              <v-btn  v-if="n == steps"  
              color="primary"
          
            >
              Enviar
            </v-btn>
     </v-col>  

  
     <v-col md="3">
      
             <v-btn
          color="red lighten-2"
          dark
          @click="dialog = true"
        >
         Eliminar Postulación
        </v-btn>
     </v-col>  

      </v-row>


          </v-stepper-content>
        </v-stepper-items>
      </template>
    </v-stepper>


     <v-dialog
      v-model="dialog"
      width="500"
    >
     
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Eliminar Postulación
        </v-card-title>

        <v-card-text>
          <br>
         ¿Estas seguro que deseas eliminar la postulación actual?
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Cerrar
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            text
            @click="deletePostulacion()"
          >
            Borrar  
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  </div>
</template>

<script>
import route from "@/router";
import { mapState , mapActions } from "vuex";
import ViewStudentShortAnswer from "../Formulario/ShortAnswer/ViewStudentShortAnswer";
import ViewStudentSelectAnswer from "../Formulario/SelectAnswer/ViewStudentSelectAnswer";
import ViewStudentGrid from "../Formulario/GridAnswer/ViewStudentGrid";
import axios from "axios";

  export default {
    components: {
    ViewStudentShortAnswer,
    ViewStudentSelectAnswer,
    ViewStudentGrid
  },

   

    
   async created(){

  
    await this.getSuitor();
    await this.getPostulacion();
    await this.getSections();
      this.steps = this.sections.length;
      //console.log(this.sections)
      await this.getQuestions();  
  },
  
    watch: {
      steps (val) {
        if (this.e1 > val) {
          this.e1 = val
        }
      },
      vertical () {
        this.e1 = 2
        requestAnimationFrame(() => this.e1 = 1) // Workarounds
      },
    },

  computed: {
   ...mapState(["infoSuitor"]),
  },

  methods: {
    ...mapActions(['getSuitor']),

    

  backMenu(){
    route.push({
        name: "MenuOutStudent",
      });
  },
  backMiIntercambio(){
     route.push({
        name: "IntercambioOutStudent",
      });
  },
  backConvocatoria(){
    route.push({
        name: "ConvocatoriaOutStudent",
      });
  },
    async deletePostulacion(){
      console.log(this.postulacion)
        await axios.delete("http://142.93.79.50:8080/backend-drii/postulations/delete/"+this.postulacion.id)
        .catch((error) => console.log(error));
        route.push({
        name: "MenuOutStudent",
      });

    },
    async getPostulacion(){
       let op = ['']  
      await axios.post("http://142.93.79.50:8080/backend-drii/suitors/postulations/"+this.infoSuitor.id)
      .then(function (response) {
         op.push(response.data)
      });
        await Promise.all(op).then( 
              this.filtrar(op[1])
          )
              
    },

    async filtrar(data){
      let post = [];
      let rev = [];
      let acep = [];
      let recha = [];
      let form =[];
      let cerr = [];
      await data.forEach(function (valor) {
           if (valor.status == "en proceso" && valor.deleted==false) post.push(valor);
           else if (valor.status == "revision" && valor.deleted == false) rev.push(1);
           else if (valor.status == "aceptado" && valor.deleted == false) acep.push(1);
           else if (valor.status == "rechazado" && valor.deleted == false) recha.push(1);
           else if (valor.status == "nueva universidad" && valor.deleted == false)form.push(1);
           else if (valor.status == "cerrada" && valor.deleted ==false)cerr.push(1);
         
      });
      await Promise.all(acep).then( 

  
        this.postulacion = post[0],
        this.proceso = post.length,
        this.revision = rev.length,
        this.aceptado = acep.length,   
        this.rechazado = recha.length,
        this.formulario = form.length,
        this.cerrada = cerr.length 
      )    
  
    },




  async getSections(){
      this.idForm = this.postulacion.agreement.form.id,
      await this.axios.get("http://142.93.79.50:8080/backend-drii/sections/byForm/"+this.idForm)
        .then((response) => (this.sections = response.data))
        .catch((error) => console.log(error));
      },
      
            
  async getQuestions() {
		const aux = this.sections.map((el) => {
		  return  this.axios.get("http://142.93.79.50:8080/backend-drii/questions/bySection/"+el.id)      
    });
    await Promise.all(aux).then((values) => {this.questions  = values.map((el) => el.data)})
},

      


      onInput (val) {
        this.steps = parseInt(val)
      },
      nextStep (n) {
        if (n === this.steps) {
          this.e1 = 1
        } else {
          this.e1 = n + 1
        }
      },
    },
    data () {
      return {
        dialog2: true,
         dialog: false,
        postulacion :[],
        idForm :'',
        e1: 1,
        steps: -1,
        //elements: ['1','2','3'],
        questions: [],
        vertical: false,
        altLabels: false,
        editable: true,
        sections: [],
        revision : [],
        aceptado : [],
         rechazado : [],
        formulario :[],
        cerrada:[],
        proceso:[],

        respuesta : ''



      }
    },
  }
</script>