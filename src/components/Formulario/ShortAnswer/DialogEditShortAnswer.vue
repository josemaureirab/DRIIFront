<template ref="dialog">
  <v-row justify="center">
    <v-dialog v-model="show" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="show = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Nueva Pregunta Simple</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text v-on:click="createQuestion">{{item.tittle}}</v-btn>
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
                      <v-text-field v-model="item.tittle"  required  label="Pregunta" outlined shaped></v-text-field>
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
                      :items="items"
                      label="Tipo de Respuesta"
                      v-model="item.selectionType"
                      outlined
                    ></v-select>
                  </v-row>
                </v-container>
              </v-col>

              <v-col cols="10" sm="10" md="10">
                <v-switch
                 
                  label="Respuesta No Obligatoria"
                  color="red"
                  value="red"
                  hide-details
                ></v-switch>
              </v-col>

              <v-col cols="10" sm="10" md="10">
                <v-card-text>
                  <v-row align="center">
                    <v-text-field label="Ayuda"></v-text-field>
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

/*import { required} from 'vuelidate/lib/validators' */

export default {
  props: {
    value: Boolean,
    item: Object,
  },

/*validations: {
      question: { required },
      select: { required },
}, */ 

  methods: {

    createQuestion: function() {
      this.axios
        .post("http://142.93.79.50:8080/backend-drii/questions/create", {
          item     
        })
        .then(function(response) {
          console.log(response);
        });
    },
    /*clear () {
        this.$v.$reset()
        this.name = ''
    }, */ 

  },
  computed: {
   /* questionErrors () {
        const errors = []
        if (!this.$v.question.$dirty) return errors
        !this.$v.question.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.question.required && errors.push('Question is required.')
        return errors
      }, */ 

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

    items: ["Respuesta Corta", "Rut", "Correo", "Celular", "Fecha", "Archivo"],
  
    
  })
};
</script>