<template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Nueva Sección</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="submit">Editar</v-btn>
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
                        label="Nombre Formulario"
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


   async created(){
          await this.getIdForm(),
          await this.setData()
  },
  methods: {
  
     setData(){
           this.name  = this.formulario.tittle
     },
     getIdForm(){
      return this.axios.get("http://142.93.79.50:8080/backend-drii/forms/"+this.idForm)
      .then((response) => ((this.formulario = response.data), console.log(response.data)))
      .catch((error) => console.log(error));
    },
    
    close(){
      route.push({
          name:'NewFormulario',
      })
    },

    async editForm() {
        console.log(this.name),
        console.log(this.formulario)
        await this.axios
        .put("http://142.93.79.50:8080/backend-drii/forms/edit/"+this.idForm,{
          deleted: this.formulario.deleted,
          created: this.formulario.created,
          tittle: this.name,
          published: this.formulario.published
        }).then(function (response) {
            console.log(response.data)
        });
        route.push({
                name:'NewFormulario',
        })
    },

    async submit() {
            await this.editForm()
           /* route.push({
                name:'NewFormulario',
            }) */ 
    }
  },

  computed: {
    ...mapState(["idForm"]),
  
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