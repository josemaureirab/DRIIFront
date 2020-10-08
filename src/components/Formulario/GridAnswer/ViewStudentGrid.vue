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


      <v-row class="md-12">
          <v-col :md="2"> 
          </v-col>
          <v-col :md="2" v-for="(item, i) in selections" :key="i">
            {{item}}
          </v-col>
      </v-row>

      <div v-for="(item, i) in options" :key="i">
        <v-row>
             <v-col :md="2" class="py-8"  >  {{item}}  </v-col>
             <v-col :md="2"  v-for="(item, i) in selections" :key="i"> 
                   <v-radio-group  class="py-0" v-model="ex8" column>
              <v-radio
               
                color="primary"
                value="primary"
              ></v-radio>
            </v-radio-group>
              </v-col>
        </v-row>
        </div>


    

         </v-card-text>
        </v-col>
       
      </v-row>
    </v-container>
    <v-card-subtitle v-if="item.required == false" single-line solo>Pregunta Obligatoria</v-card-subtitle>
  </v-card>
</template>
<script>

//TODO : Arreglar  EDIT para que funcione

import DialogEditGridAnswer from "./DialogEditGridAnswer";
import axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    DialogEditGridAnswer,
  },
  props: {
    item: Object,
  },

  async created() {
    await this.getOptions();
    await this.getSelections();
    await this.bMultiple();
  },

  methods: {
    ...mapActions(["getQuestions"]),
    getOptions() {
      axios
        .get(
          "http://142.93.79.50:8080/backend-drii/options/byQuestion/" +
            this.item.id
        )
        .then((response) => this.filterOptions(response.data))
        .catch((error) => console.log(error));
    },
    getSelections() {
      axios
        .get(
          "http://142.93.79.50:8080/backend-drii/selections/byQuestion/" +
            this.item.id
        )
        .then((response) => this.filterSelections(response.data))
        .catch((error) => console.log(error));
    },

    bMultiple() {
      if (this.item.selectionType == "Multiple") this.boleanMultiple = true;
      else this.boleanMultiple = false;
    },

    
    filterOptions(data) {
      let opt = [];
      data.forEach(function (valor) {
        opt.push(valor.text);
      });
      this.options = opt;
    },

    filterSelections(data) {
      
      let opt = [];
      data.forEach(function (valor) {
        opt.push(valor.text);
        
      });
      this.selections = opt;
     console.log(selections);
    },

    buttonEdit: function () {
      this.showDialogGrid = true;
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
  },
  data: () => ({
    showDialogGrid: false,
    options: [],
    selections: [],
    mul: null,
    boleanMultiple: null,

    //TODO: Cambiar items por cols de item.

    //TODO: VARIABLE MULTIPLE -> Sacada de item para saber si es o no.

    //value: ['foo', 'bar', 'fizz', 'buzz'], // Vacio al principio.
  }),
};
</script>
