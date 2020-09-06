<template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Nueva Sección</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="submit">Agregar</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>Configuración</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-form>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-text-field
                        v-model="name"
                        :error-messages="nameErrors"
                        label="Nombre de la Sección"
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
          <v-subheader>Carreras Asociadas</v-subheader>
          <v-card flat>
            <v-card-text>
              <v-col class="d-flex" cols="10" sm="6">
                <v-container fluid>
                  <v-row align="center">
                    <v-select
                      v-model="select"
                      :items="items"
                      :error-messages="selectErrors"
                      label="Universidades"
                      required
                      @change="$v.select.$touch()"
                      @blur="$v.select.$touch()"
                      outlined
                    ></v-select>
                  </v-row>
                </v-container>
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
import { mapState , mapActions } from "vuex";
import route from '@/router';


export default {
  mixins: [validationMixin],
  validations: {
    name: { required },
    select: { required },
  },

  methods: {
    ...mapActions(['getQuestions']),

     getIdForm(){
      return this.axios.get("http://142.93.79.50:8080/backend-drii/forms/"+this.idForm)
      .then((response) => ((this.formulario = response.data), console.log(response.data)))
      .catch((error) => console.log(error));
    },
    
    async createSection() {
      await this.axios
        .post("http://142.93.79.50:8080/backend-drii/sections/create", {
          name: this.name,
          form: this.formulario,
        })
        .then(function (response) {
          console.log(response);
        });
        this.getQuestions()
    },  
    close(){
      route.push({
          name:'NewFormulario',
      })
    },
    async submit() {
      this.$v.$touch();
      if (this.$v.$error == false) { 
            await this.getIdForm()
            await this.createSection()
            route.push({
                name:'NewFormulario',
            })
      };
       /* route.push({
          name:'NewFormulario',
        }) */ 
      
    },
  },

  computed: {
    ...mapState(["idForm"]),
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
    formulario: [],
    items: ["Respuesta Corta", "Rut", "Correo", "Celular", "Fecha", "Archivo"],
    name: "", // Title
   
  }),
};

</script>