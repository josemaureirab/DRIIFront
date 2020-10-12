<template>
  <v-card>
    <v-toolbar dark color="primary">
      <v-btn icon dark @click="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Editar Pregunta Simple</v-toolbar-title>
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
      <v-subheader>Configuración de Respuesta</v-subheader>

      <v-card flat>
        <v-card-text>
          <v-col class="d-flex" cols="10" sm="6">
            <v-container fluid>
              <v-row align="center">
                <v-select
                  v-model="select"
                  :items="items"
                  :error-messages="selectErrors"
                  label="Tipo de Respuesta"
                  required
                  @change="$v.select.$touch()"
                  @blur="$v.select.$touch()"
                  outlined
                ></v-select>
              </v-row>
            </v-container>
          </v-col>

          <v-col class="d-flex" cols="10" sm="6">
            <v-container fluid>
              <v-row align="center">
                <v-select
                  v-model="selectSeccion"
                  :items="seccions"
                  item-text="name"
                  return-object
                  required
                  label="Sección"
                  outlined
                ></v-select>
              </v-row>
            </v-container>
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
    select: { required },
  },

  async created() {
    console.log(this.idQuestion);
    await this.getQuestion(), await this.setData(), await this.getSeccion();
  },

  methods: {
    ...mapActions(["getQuestions", "getQuestion"]),

    setData() {
      (this.name = this.infoQuestion.tittle),
        (this.select = this.infoQuestion.selectionType),
        (this.answerRequired = this.infoQuestion.required),
        (this.selectSeccion = this.infoQuestion.section),
        (this.help = this.infoQuestion.help);
    },

    close() {
      route.push({
        name: "NewFormulario",
      });
    },

    getSeccion() {
      this.axios
        .get(
          "http://142.93.79.50:8080/backend-drii/sections/byForm/" + this.idForm
        )
        .then(
          (response) => (this.seccions = response.data),
          console.log(this.seccion)
        )
        .catch((error) => console.log(error));
    },

    async editQuestion() {
      console.log(this.formulario);
      await this.axios
        .put(
          "http://142.93.79.50:8080/backend-drii/questions/edit/" +
            this.infoQuestion.id,
          {
            tittle: this.name,
            questionType: 1,
            selectionType: this.select,
            required: this.answerRequired,
            help: this.help,
            form: this.infoQuestion.form,
            section: this.selectSeccion,
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
        await this.editQuestion();
        route.push({
          name: "NewFormulario",
        });
      }
    },

    /*clear () {
        this.$v.$reset()
        this.name = ''
    }, */
  },

  computed: {
    ...mapState(["infoQuestion", "idQuestion", "idForm"]),

    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Requerido");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push("Requerido");
      return errors;
    },
  },

  data: () => ({
    seccions: [],
    selectSeccion: "",
    items: ["Respuesta Corta", "Fecha", "Archivo"],
    name: null,
    select: null,
    answerRequired: null,
    help: null,
  }),
};

// TODO: AL CERRAR NO SE BORRA TODO... FUNCION CLEAR QUE BORRE QUE REINICIE TODO LOS PARAMETROS!.
</script>
  

