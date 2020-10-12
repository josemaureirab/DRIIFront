 <template>
  <v-card>
    <v-container>

        <v-row justify="space-between">
        <v-col>
           <v-card-text>
            <v-subheader class="pa-0">
              {{this.item.tittle}} 
             <v-tooltip v-if="item.help !== ''" top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon color="grey lighten-1">mdi-help</v-icon>
                  </v-btn>
                </template>
                <span>{{this.item.help}}</span>
              </v-tooltip>
            </v-subheader>   

            <v-col cols="12">
      <v-card class="mx-auto" max-width="90%">
        <v-form ref="form" class="mx-10 py-10">
          <v-select
            return-object
            v-model="selectUniversidad"
            :items="universidades"
            item-text="name"
            label="Universidades"
          ></v-select>
        </v-form>
      </v-card>
    </v-col>


         </v-card-text>
        </v-col>
        <v-col cols="auto" class="text-center pl-0">
          <v-row class="flex-column ma-0 fill-height" justify="center">
            <v-col class="px-0">
              <v-btn icon v-on:click="buttonEdit">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </v-col>
            <v-col class="px-0">
              <v-btn icon v-on:click="buttonDelete">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-card-subtitle v-if="item.required == false" single-line solo>Pregunta Obligatoria</v-card-subtitle>
  </v-card>
</template>
<script>

//TODO : Arreglar  EDIT para que funcione

import axios from "axios";
import { mapState, mapActions } from "vuex";
import route from "@/router";

export default {

  props: {
    item: Object,
  },

  async created() {
    await this.getUniversidades();
  },

   computed: {
    ...mapState(["infoQuestion"]),
    idQuestion: {
      get() {
        return this.$store.state.idQuestion;
      },
      set(payload) {
        this.$store.commit("updateIdQuestion", payload);
      },
    },
  },
  
  methods: {
    ...mapActions(["getQuestions"]),


     getUniversidades() {
      axios
        .get(
          "http://142.93.79.50:8080/backend-drii/universities/"
        )
        .then((response) => this.universidades = response.data)
        .catch((error) => console.log(error));
    },

 

    
     buttonEdit: function () {
      this.idQuestion = this.item.id;
      route.push({
        name: "DialogEditUniversidad",
      });
    },
    async buttonDelete() {
      await this.axios
        .delete(
          "http://142.93.79.50:8080/backend-drii/questions/delete/" +
            this.item.id
        )
        .then(function (response) {
          console.log(response);
        });
      this.getQuestions();
    },





   async copySelect(question){
        let  op = []
        await this.axios.get(
          "http://142.93.79.50:8080/backend-drii/selections/byQuestion/" +
            this.item.id
        )
        .then(function (response) {
            op = response.data
        });
        await Promise.all(op).then(
          op.map((el) => {
            console.log(el)
		            this.axios.post("http://142.93.79.50:8080/backend-drii/selections/create/",{
                      text: el.text,
                      position: el.position, 
                      question: question
                }).then(function (response) {
                console.log(response);
              });
              // }) 
          })
        );
    },


  },
  data: () => ({
    options: [],
    selections: [],
    selectUniversidad:[],
    mul: null,
    boleanMultiple: null,
    universidades: [],

    //TODO: Cambiar items por cols de item.

    //TODO: VARIABLE MULTIPLE -> Sacada de item para saber si es o no.

    //value: ['foo', 'bar', 'fizz', 'buzz'], // Vacio al principio.
  }),
};
</script>
