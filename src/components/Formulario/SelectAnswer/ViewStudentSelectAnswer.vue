 <template>
  <v-card>
    <v-container>
      <v-row justify="space-between">
        <v-col>
          <v-card-text>
            <v-subheader class="pa-0">
              {{this.item.tittle}}
              <v-tooltip v-if="item.help !== '' " v-model="show" top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon color="grey lighten-1">mdi-help</v-icon>
                  </v-btn>
                </template>
                <span></span>
              </v-tooltip>
            </v-subheader>

            <v-select
              v-model="value"
              :items="this.options"
              chips
              label="Seleccione una opcion"
              :multiple="this.item.selectionType ==='Multiple'"
              outlined
            ></v-select>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
    <v-card-subtitle v-if="item.required == false" single-line solo>Pregunta Obligatoria</v-card-subtitle>
  </v-card>
</template>
<script>
//TODO : Arreglar  EDIT para que funcione

import DialogEditSelectAnswer from "./DialogEditSelectAnswer";
import axios from "axios";
import { mapState, mapActions } from "vuex";
import route from "@/router";

export default {
  components: {
    DialogEditSelectAnswer,
  },
  props: {
    item: Object,
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

  async created() {
    await this.axios
      .get(
        "http://142.93.79.50:8080/backend-drii/options/byQuestion/" +
          this.item.id
      )
      .then(
        (response) => (
          (this.options = response.data),
          this.filter(response.data),
          this.bMultiple()
        )
      )
      .catch((error) => console.log(error));
  
  },


  methods: {
        ...mapActions(['getQuestions']),

    bMultiple() {
      if (this.item.selectionType == "Multiple") this.boleanMultiple = true;
      else this.boleanMultiple = false;
    },


    async buttonCopy(){

      let op = ['']
      await this.axios
              .post("http://142.93.79.50:8080/backend-drii/questions/create", {
                tittle: this.item.tittle,
                questionType: this.item.questionType,
                selectionType: this.item.selectionType,
                required: this.item.required,
                form: this.item.form,
                help: this.item.help,
                section: this.item.section
              })
              .then(function (response) {
                  op.push(response.data)
              });
              await Promise.all(op).then( 
          
                   this.copyOptions(op[1]));
              this.getQuestions();      
        },

    filter(data) {
      let opt = [];
      data._embedded.options.forEach(function (valor) {
        opt.push(valor.text);
      });
      this.options = opt;
    },
    buttonEdit: function () {
      this.idQuestion = this.item.id;
      route.push({
        name: "DialogEditSelectAnswer",
      });
    },



    async copyOptions(question){
        let  op = []
        await this.axios.get(
          "http://142.93.79.50:8080/backend-drii/options/byQuestion/" +
            this.item.id
        )
        .then(function (response) {
            op = response.data
        });
        await Promise.all(op).then(
          
          op.map((el) => {
            console.log(el)
		            this.axios.post("http://142.93.79.50:8080/backend-drii/options/create/",{
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



    async buttonDelete () {
      await this.axios
        .delete(
          "http://142.93.79.50:8080/backend-drii/questions/delete/" +
            this.item.id
        )
        .then(function (response) {
          console.log(response);
        });
        this.getQuestions() 
    },
  },
  data: () => ({
    value: ["Opcion"],
    options: null,
    mul: null,
    boleanMultiple: null,
    //TODO: Cambiar items por cols de item.

    //TODO: VARIABLE MULTIPLE -> Sacada de item para saber si es o no.

    //value: ['foo', 'bar', 'fizz', 'buzz'], // Vacio al principio.
  }),
};
</script>
