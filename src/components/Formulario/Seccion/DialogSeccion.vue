<template ref="dialog">
  <v-row justify="center">
    <v-dialog v-model="show" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="show = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Sección</v-toolbar-title>
          <v-spacer></v-spacer>
         
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>Nueva Sección</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-form>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-text-field
                        v-model="name"
                        :error-messages="nameErrors"
                        label="Nombre Sección"
                        required
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()"
                        outlined
                        shaped
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12">
                      <v-btn class="ma-2" @click="add" tile outlined color="success">
                        <v-icon left>mdi-plus</v-icon>Agregar
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>Edicionesa</v-subheader>
          <v-form v-for="(input,k) in inputs" :key="k">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-select :items="items" label="Standard"></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-form>

          <div class="text-center">
            <v-btn class="ma-2" @click="add" tile outlined color="success">
              <v-icon left>mdi-plus</v-icon>Editar
            </v-btn>
            <v-btn class="ma-2" @click="remove(k)" tile color="red" dark>Eliminar</v-btn>
          </div>
        </v-list>

        
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  props: {
    value: Boolean,
  },

  mixins: [validationMixin],

  validations: {
    name: { required },
    //inputs: {required},
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$error == false) {
        this.show = false;
        this.createQuestion().then(({ data }) => {
          this.createOptions(data);
        });
      }
    },

    partitionInputs() {
      let cols = [];
      this.inputs.forEach(function (valor) {
        cols.push(valor.name);
      });
      return cols;
    },

    selectOption(el) {
      if (el == "Multiple") return el;
      else return "Simple"; // TODO: CAMBIAR EN SELECTION TYPE POR  LINE ABAJODE CRETION QUESTION
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
              op.push(response);
            })
        );
      }
      Promise.all(promises).then(() => console.log(op));
    },

    createQuestion() {
      if (this.option == null) this.option = "Simple";
      return axios.post(
        "http://142.93.79.50:8080/backend-drii/questions/create",
        {
          tittle: this.name,
          questionType: 2,
          selectionType: this.selectOption(this.option),
          required: this.answerRequired,
          help: this.help,
        }
      );
    },

    add(index) {
      this.inputs.push({ name: "" });
      this.count += 1;
    },
    remove(index) {
      if (this.count !== 1) {
        this.inputs.splice(this.count - 1, 1);
        this.count -= 1;
      }
    },
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push("Nombre es requerido");
      return errors;
    },

    inputErrors() {
      /*const errors = [];
        if (!this.$v.inputs.name.$dirty) return errors;
        !this.$v.inputs.required && errors.push("Seleccionar una pregunta");
        return errors; */
    },

    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },

  data: () => ({
    count: 1,
    question: null,
    // tittle: "", // titulo
    option: "Simple", // multiple o no.
    answerRequired: false, // requerido o no.
    name: "",
    help: "",
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

