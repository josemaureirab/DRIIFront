 <template>
  <v-card>
    <v-container>
      <v-row justify="space-between">
        <v-col>
          <v-card-text>
            <v-subheader class="pa-0">{{this.item.tittle}}</v-subheader>
            <v-tooltip v-if="item.help !== '' " v-model="show" top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon color="grey lighten-1">mdi-help</v-icon>
                </v-btn>
              </template>
              <span>{{this.item.help}}</span>
            </v-tooltip>


        
            
          </v-card-text>

     <v-card flat>
    <v-card-text>
      <v-container fluid>
        <v-row cols="12" sm="6" md="6" v-for="(item, i) in options" :key="i">
          
        


          <v-col cols="12" sm="6" md="6" v-for="(item, i) in selections" :key="i">
              {{item}}

            <v-radio-group v-model="ex8" column>
              <v-radio
                label="primary"
                color="primary"
                value="primary"
              ></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>

            <v-list-item v-for="(item, i) in selections" :key="i">
              <v-list-item-content>
                <v-col cols="6" justify="center">{{item}}</v-col>
              </v-list-item-content>
            </v-list-item>


            <v-list-item v-for="(item, i) in options" :key="i">
              <v-list-item-content>
                <v-col cols="2" justify="center">{{item}}</v-col>
              </v-list-item-content>
            </v-list-item>

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
    //await this.generateSelect();
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


    

    bMultiple() {
      if (this.item.selectionType == "Multiple") this.boleanMultiple = true;
      else this.boleanMultiple = false;
    },

    
    /*generateSelect(){
        let i = this.option.length;
        let j = this.selections.length;

    },*/

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
    },

  },
  data: () => ({
    showDialogGrid: false,
    items: ["Opcion 1", "Opcion 2", "Opcion 3"],
    value: ["Opcion"],
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
