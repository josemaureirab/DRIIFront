<template>
  <v-card>
    <v-toolbar dark color="primary">
      <v-btn icon dark @click="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Editar Pregunta Selección</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark text @click="submit">Editar</v-btn>
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
import axios from "axios";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import { mapState, mapActions } from "vuex";
import route from "@/router";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required },
    //inputs: {required},
  },

  async created() {
    await this.getQuestion(), await this.setData();
  },

  methods: {
    setData() {
      (this.name = this.infoQuestion.tittle),
        (this.option = this.infoQuestion.selectionType),
        (this.answerRequired = this.infoQuestion.required),
        (this.help = this.infoQuestion.help);
    },

    close() {
      route.push({
        name: "NewFormulario",
      });
    },

    async editQuestion() {
      await this.axios.put(
        "http://142.93.79.50:8080/backend-drii/questions/edit/" + this.infoQuestion.id,
        {
          tittle: this.name,
          questionType: 2,
          selectionType: this.selectOption(this.option),
          required: this.answerRequired,
          help: this.help,
          form: this.infoQuestion.form
        }
        )
        .then(function (response) {
          console.log(response);
        });
        this.getQuestions();
    },

   async submit() {
      this.$v.$touch();
      if (this.$v.$error == false) {
        await this.editQuestion().then(({ data }) => {
          // this.createOptions(data);
        });
        route.push({
                name:'NewFormulario',
        })
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
    ...mapState(["infoQuestion", "idQuestion"]),

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
    name: null,
    answerRequired: null,
    help: null,
    option: null,

    inputs: [
      {
        name: "",
      },
    ],
  }),
};

// TODO:  VALIDAR INPUTS ANTES DE ENVIARSE

// TODO: AL CERRAR NO SE BORRA TODO... FUNCION CLEAR QUE BORRE QUE REINICIE TODO LOS PARAMETROS!.
</script>

