<template ref="dialog">
  <v-row justify="center">
    <v-dialog v-model="show" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="show = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Nueva Pregunta de Cuadricula</v-toolbar-title>
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
          <v-subheader>Opciones</v-subheader>

          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="6">
                <h3 class="text-center">Columnas</h3>
                <v-form v-for="(input,k) in columns" :key="k">
                  <v-text-field
                    v-label="k"
                    required
                    prepend-icon="mdi-tooltip-edit"
                    v-model="input.name"
                  ></v-text-field>
                </v-form>
                <div class="text-center">
                  <v-btn class="ma-2" @click="addColumn(k)" tile outlined color="success">
                    <v-icon left>mdi-plus</v-icon>Agregar
                  </v-btn>
                  <v-btn class="ma-2" @click="removeColumn(k)" tile color="red" dark>Eliminar</v-btn>
                </div>
              </v-col>
              <v-col cols="12" sm="6">
                <h3 class="text-center">Filas</h3>
                <v-form v-for="(input,k) in rows" :key="k">
                  <v-text-field
                    v-label="k"
                    required
                    prepend-icon="mdi-tooltip-edit"
                    v-model="input.name"
                  ></v-text-field>
                </v-form>
                <div class="text-center">
                  <v-btn class="ma-2" @click="addRow(k)" tile outlined color="success">
                    <v-icon left>mdi-plus</v-icon>Agregar
                  </v-btn>
                  <v-btn class="ma-2" @click="removeRow(k)" tile color="red" dark>Eliminar</v-btn>
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
                <v-switch v-model="answerRequired" label="No Obligatoria" color="red"  hide-details></v-switch>
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
    </v-dialog>
  </v-row>
</template>

<script>

import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";



export default {
  props: {
    value: Boolean
  },

  mixins: [validationMixin],

  validations: {  
    name: { required },
    //inputs: {required},
  },


  methods: {

    submit() {
      this.$v.$touch();
      if(this.$v.$error == false){
        this.createQuestion();
        this.show = false
      }
    },   

    addColumn(index) {
      this.columns.push({ name: "" });
      this.countColumns += 1;
    },
    removeColumn(index) {
      this.columns.splice(this.countColumns - 1, 1);
      this.countColumns -= 1;
    },
    addRow(index) {
      this.rows.push({ name: "" });
      this.countRow += 1;
    },
    removeRow(index) {
      this.rows.splice(this.countRow - 1, 1);
      this.countRow -= 1;
    },

    add(index) {
      this.inputs.push({ name: "" });
      this.count += 1;
    },
    remove(index) {
      this.inputs.splice(this.count - 1, 1);
      this.count -= 1;
    },

    selectOption(el) {
      if (el == "Multiple") return el;
      else return "Simple";
    },

    createQuestion: function() {
      this.axios
        .post("http://142.93.79.50:8080/backend-drii/questions/create", {
          tittle: this.name,
          questionType: 3,
          selectionType: this.selectOption(this.option),
           // TODO: agregar preguntas en cols string []
          // utilizar la función = partitionInputs: function()
          
            // TODO: agregar opciones en rows string []
          // utilizar la función = partitionInputs: function()
          
           required: this.answerRequired,
          // TODO: pregunta requerida
           help: this.help
          // TODO: string help
        })
        .then(function(response) {
          console.log(response);
        });
    }
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push("Pregunta es requerida");
      return errors;
    },

    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },

  data: () => ({
    countColumns: 1,
    countRow: 1,

    name: "", // titulo
    questionType: 3, ///tipo selección.
    option: "simple", // multiple o no. // multiple o no.
    answerRequired: false, // requerido o no.
    help: "",
  
 // requerido o no.
    // preguntas para la  selección
    columns: [
      {
        name: ""
      }
    ],
    // opciones para la selección
    rows: [
      {
        name: ""
      }
    ]
  })
};
//TODO: de los dialogos reutizar codigo mas compacto.. entre ellos por ejemplo  la primera parte y ultima.
</script>

