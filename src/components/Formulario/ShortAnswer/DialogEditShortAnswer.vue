<template ref="dialog">
  <v-row justify="center">
    <v-dialog v-model="show" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="show = false">
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
    </v-dialog>
  </v-row>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    name: { required },
    select: { required },
  },

  props: {
    value: Boolean,
    item: Object,
  },

  methods: {
    editQuestion: function () {
      this.axios
        .put(
          "http://142.93.79.50:8080/backend-drii/questions/edit/" +
            this.item.id,
          {
          tittle: this.name,
          questionType: 1,
          selectionType: this.select,
          required: this.answerRequired,
          help: this.help,
          }
        )
        .then(function (response) {
          console.log(response);
        });
    },
    submit() {
       this.$v.$touch();
         if (this.$v.$error == false) {
        this.editQuestion();
        this.show = false;
        this.name = ""; // Title
        this.select = ""; // selectionType
        (this.answerRequired = false), (this.help = "");
        } 
    },

    /*clear () {
        this.$v.$reset()
        this.name = ''
    }, */
    
  },
   mounted() {
         
          this.name = this.item.tittle,
          this.select = this.item.selectionType,
          this.answerRequired = this.item.required,
          this.help = this.item.help
   },

  computed: {
    
    
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
    items: ["Respuesta Corta", "Rut", "Correo", "Celular", "Fecha", "Archivo"],
    name: null,
    select: null,
    answerRequired: null,
    help: null,

  }),
};

// TODO: AL CERRAR NO SE BORRA TODO... FUNCION CLEAR QUE BORRE QUE REINICIE TODO LOS PARAMETROS!.
</script>
  

