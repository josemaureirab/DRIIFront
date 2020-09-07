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

            <v-list-item v-for="(item, i) in options" :key="i">
              <v-list-item-content>
                <v-col cols="2" justify="center">{{item}}</v-col>
              </v-list-item-content>
            </v-list-item>

            <v-list-item v-for="(item, i) in selections" :key="i">
              <v-list-item-content>
                <v-col cols="9" justify="center">{{selections}}</v-col>
              </v-list-item-content>
            </v-list-item>
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

            <v-col class="px-0">
              <v-btn icon>
                <v-icon>mdi-content-copy</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <DialogEditGridAnswer  v-model="showDialogGrid" v-bind:item="item" />
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
          "http://142.93.79.50:8080/backend-drii/options/byQuestion/" +
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
