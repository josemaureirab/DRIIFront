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
            <v-select
              v-model="value"
              :items="this.options"
              chips
              label="Seleccione una opcion"
              :multiple="boleanMultiple"
              outlined
            ></v-select>
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
    await axios
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
    bMultiple() {
      if (this.item.selectionType == "Multiple") this.boleanMultiple = true;
      else this.boleanMultiple = false;
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
    buttonDelete: function () {
      this.axios
        .delete(
          "http://142.93.79.50:8080/backend-drii/questions/delete/" +
            this.item.id
        )
        .then(function (response) {
          console.log(response);
        });
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
