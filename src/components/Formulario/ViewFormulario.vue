<template>
  <div>
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
          <ViewShortAnswer   v-if="item.questionType == '1'" v-bind:item="item" />
          <ViewSelectAnswer
            v-if="item.questionType == '2'" v-bind:item="item"
          />
          <ViewUniversidad
            v-if="item.questionType == '3'"
            v-bind:item="item"
          />
        </v-col>
      </v-list-item-content>
    </v-list-item>

            </v-card>
            <v-btn  v-if="n < steps"
              color="primary"
              @click="nextStep(n)"
            >
              Continue
            </v-btn>
            <v-btn  text>Guardar</v-btn>

            <v-btn  v-if="n == steps"
              color="primary"
              @click="nextStep(n)"
            >
              Enviar Formulario
            </v-btn>

          </v-stepper-content>
        </v-stepper-items>
      </template>
    </v-stepper>
  </div>
</template>

<script>
import { mapState , mapActions } from "vuex";
import ViewShortAnswer from "./ShortAnswer/ViewShortAnswer";
import ViewSelectAnswer from "./SelectAnswer/ViewSelectAnswer";
import ViewUniversidad from "./Universidad/ViewUniversidadAnswer";
import axios from "axios";

  export default {
    components: {

    ViewShortAnswer,
    ViewSelectAnswer,
    ViewUniversidad
  },

    data () {
      return {
        e1: 1,
        steps: -1,
        elements: ['1','2','3'],
        questions: [],
        vertical: false,
        altLabels: false,
        editable: true,
        sections: [],

      }
    },

   async created(){
    await this.getSections();
    this.steps = this.sections.length;
    //console.log(this.sections)
    await this.getQuestions() 
    console.log(2,this.questions[1][1] )
  

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
   ...mapState(["idForm"]),
  },

    methods: {
      // ...mapActions(['getAgressment','getAccount']),


      async getSections(){
      await this.axios.get("http://142.93.79.50:8080/backend-drii/sections/byForm/"+6)
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
  }
</script>