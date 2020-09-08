<template ref="dialog">
  <v-card>
    <v-toolbar dark color="primary">
      <v-btn icon dark @click="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Nueva Pregunta Selección</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark text @click="submit">Agregar</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-list three-line subheader>
      <v-subheader>Configuración de Pregunta</v-subheader>
      <v-list-item>
        <v-list-item-content>
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12">
                  <v-text-field
                    v-model="name"
                    :error-messages="nameErrors"
                    label="Pregunta"
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                    outlined
                    shaped
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>
    <v-list three-line subheader>
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="6">
            <v-subheader>Columnas</v-subheader>
            <v-form v-for="(input,k) in inputs" :key="k">
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field required prepend-icon="mdi-tooltip-edit" v-model="input.name"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>

            <div class="text-center">
              <v-btn class="ma-2" @click="add" tile outlined color="success">
                <v-icon left>mdi-plus</v-icon>Agregar
              </v-btn>
              <v-btn class="ma-2" @click="remove(k)" tile color="red" dark>Eliminar</v-btn>
            </div>
          </v-col>

          <v-col cols="12" sm="6">
            <v-subheader>Filas</v-subheader>
            <v-form v-for="(rows,k) in rows" :key="k">
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field required prepend-icon="mdi-tooltip-edit" v-model="rows.name"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>

            <div class="text-center">
              <v-btn class="ma-2" @click="addRows" tile outlined color="success">
                <v-icon left>mdi-plus</v-icon>Agregar
              </v-btn>
              <v-btn class="ma-2" @click="removeRows(k)" tile color="red" dark>Eliminar</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-list>

    <v-divider></v-divider>
    <v-list three-line subheader>
      <v-subheader>Configuración de Respuesta</v-subheader>
      <v-card flat>
        <v-card-text>
          <v-col cols="10" sm="10" md="10">
            <v-switch
              v-model="option"
              label="Selección Multiple"
              color="green"
              value="Multiple"
              hide-details
            ></v-switch>
          </v-col>

          <v-col cols="10" sm="10" md="10">
            <v-switch v-model="answerRequired" label="No Obligatoria" color="red" hide-details></v-switch>
          </v-col>

          <v-col cols="10" sm="10" md="10">
            <v-card-text>
              <v-row align="center">
                <v-text-field v-model="help" label="Ayuda"></v-text-field>
              </v-row>
            </v-card-text>
          </v-col>
        </v-card-text>
      </v-card>
    </v-list>
  </v-card>
</template>


<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import axios from "axios";
import { mapState, mapActions } from "vuex";
import route from "@/router";

export default {
  mixins: [validationMixin],
  validations: {
    name: { required },
    //inputs: {required},
  },
  methods: {
    ...mapActions(["getQuestions"]),

    async getIdForm() {
      await this.axios
        .get("http://142.93.79.50:8080/backend-drii/forms/" + this.idForm)
        .then((response) => (this.formulario = response.data))
        .catch((error) => console.log(error));
    },

    async createQuestion() {
      if (this.option == null) this.option = "Simple";
      return await axios.post(
        "http://142.93.79.50:8080/backend-drii/questions/create",
        {
          tittle: this.name,
          questionType: 3,
          selectionType: this.selectOption(this.option),
          required: this.answerRequired,
          help: this.help,
          form: this.formulario,
        }
      );
    },

    close() {
      route.push({
        name: "NewFormulario",
      });
    },

    async submit() {
    
      this.$v.$touch();

      if (this.$v.$error == false) await this.getIdForm();
      await this.createQuestion().then(({ data }) => {
           this.createOptions(data);
           this.createSelections(data);
      });
      route.push({
          name: "NewFormulario",
        });
    },

    partitionInputs() {
      let cols = [];
      this.inputs.forEach(function (valor) {
        cols.push(valor.name);
      });
      return cols;
    },

    partitionSelections() {
      let cols = [];
      this.rows.forEach(function (valor) {
        cols.push(valor.name);
      });
      return cols;
    },

    selectOption(el) {
      if (el == "Multiple") return el;
      else return "Simple"; // TODO: CAMBIAR EN SELECTION TYPE POR  LINE ABAJODE CRETION QUESTION
    },

    async createSelections(data) {
      let cols = this.partitionSelections();
      let op = [];
      let promises = [];
      for (var i = 0; i < cols.length; i++) {
        promises.push(
          this.axios
            .post("http://142.93.79.50:8080/backend-drii/selections/create", {
              text: cols[i],
              position: i,
              question: data,
            })
            .then((response) => {
              this.createSelections(response.data);
            })
        );
      }
      await Promise.all(promises).then(() => console.log(op));
      this.getQuestions();
    },

    createOptions(data) {
      let cols = this.partitionInputs();
      let op = [];
      let promises = [];
      for (var i = 0; i < cols.length; i++) {
        promises.push(
          this.axios
            .post("http://142.93.79.50:8080/backend-drii/options/create", {
              text: cols[i],
              position: i,
              question: data,
            })
            .then((response) => {
              this.createSelections(response.data);
            })
        );
      }
    },

    add(index) {
      this.inputs.push({ name: "" });
      this.count += 1;
    },
    addRows(index) {
      this.rows.push({ name: "" });
      this.countRows += 1;
    },
    remove(index) {
      if (this.count !== 1) {
        this.inputs.splice(this.count - 1, 1);
        this.count -= 1;
      }
    },
    removeRows(index) {
      if (this.countRows !== 1) {
        this.rows.splice(this.countRows - 1, 1);
        this.countRows -= 1;
      }
    },
  },
  computed: {
    ...mapState(["idForm"]),
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push("Pregunta es requerida");
      return errors;
    },

    inputErrors() {
      /*const errors = [];
        if (!this.$v.inputs.name.$dirty) return errors;
        !this.$v.inputs.required && errors.push("Seleccionar una pregunta");
        return errors; */
    },
  },

  data: () => ({
    count: 1,
    countRows: 1,
    question: null,
    // tittle: "", // titulo
    option: "Simple", // multiple o no.
    answerRequired: false, // requerido o no.
    name: "",
    help: "",
    rows: [
      {
        name: "",
      },
    ],

    inputs: [
      {
        name: "",
      },
    ], // preguntas para la  selección
  }),
};

// TODO:  VALIDAR INPUTS ANTES DE ENVIARSE

// TODO: AL CERRAR NO SE BORRA TODO... FUNCION CLEAR QUE BORRE QUE REINICIE TODO LOS PARAMETROS!.
</script>

