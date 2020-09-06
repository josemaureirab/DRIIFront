<template ref="dialog">
  <v-row justify="center">
    <v-dialog v-model="show" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="show = false">
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
    </v-dialog>
  </v-row>
</template>


<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import axios  from "axios";
export default {


  
  props: {
    value: Boolean,
    item: Object,
    form: Object,
  },

  mixins: [validationMixin],

  validations: {
    name: { required },
    //inputs: {required},
  },

   mounted() {
          console.log(this.item)
          this.name = this.item.tittle,
          this.answerRequired = this.item.required,
          this.help = this.item.help,
          this.option = this.item.selectionType 
   },

  methods: {
    submit(){
      this. $v.$touch();
      if (this.$v.$error == false) {
        this.show = false;
        this.editQuestion().then( ({data})=> {
            // this.createOptions(data);
        });
      }


    },

    partitionInputs(){
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
          let op = []
          let promises   = []
          for (var i = 0; i < cols.length; i++) {
            promises.push (this.axios.post("http://142.93.79.50:8080/backend-drii/options/create", {
                text: cols[i],
                position: i,
                question: data,
              })
              .then(response => {
                  op.push(response)
              })
            )
          }
          Promise.all(promises).then(() => console.log(op));
    },


  editQuestion () {
    this.axios.put(
          "http://142.93.79.50:8080/backend-drii/questions/edit/" +
            this.item.id,
          {
            tittle: this.name,
            questionType: 3,
            selectionType: this.selectOption(this.option),
            required: this.answerRequired,
            help: this.help,
            form: this.form,
        });     
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
    removeRows(index){
       if (this.countRows !== 1) {
        this.rows.splice(this.countRows - 1, 1);
        this.countRows -= 1;
      }
    }
  },
  computed: {
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
    name: null,
    answerRequired: null,
    help: null,
    option: null, 

       countRows: 1,

    // tittle: "", // titulo
   // multiple o no.

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

