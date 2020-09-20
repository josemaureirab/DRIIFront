<template>
  <v-row>
    <v-col cols="12" align="center">
      <h2>Nueva Convocatoria</h2>
    </v-col>
    <v-col cols="12">
      <v-card class="mx-auto" max-width="90%">
        <v-form ref="form" class="mx-10 py-10" v-model="valid" lazy-validation>
          <v-text-field v-model="name" label="Nombre del programa" required></v-text-field>
          <v-text-field v-model="semestre" label="Semestre a realizar" required></v-text-field>
          <v-text-field v-model="duracion" label="Duración" required></v-text-field>
          

        


   

      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="inicio"
            label="Inicio Postulación"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="inicio" @input="menu = false"></v-date-picker>
      </v-menu>

       <v-menu
         v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="cierre"
            label="Inicio Postulación"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="cierre" @input="menu2 = false"></v-date-picker>
      </v-menu>
    
          <v-text-field v-model="link" label="Link Informativo" required></v-text-field>
        </v-form>
      </v-card>
    </v-col>

    <v-col cols="12">
      <v-card class="mx-auto" max-width="90%">
        <v-form ref="form" class="mx-10 py-10" v-model="valid" lazy-validation>
          <v-textarea solo v-model="texto" name="input-7-4" label="Texto Introductorio"></v-textarea>
          <v-textarea solo v-model="beneficio" name="input-7-4" label="Beneficios"></v-textarea>
          <v-textarea solo v-model="dirigido" name="input-7-4" label="Dirigido"></v-textarea>
        </v-form>
      </v-card>
    </v-col>

    <v-col cols="12">
      <v-card class="mx-auto" max-width="90%">
        <v-form ref="form" class="mx-10 py-10" v-model="valid" lazy-validation>
          <v-file-input v-model="photoPortada" accept="image/*" label="Foto Portada"></v-file-input>
          <v-file-input v-model="photoPagina" accept="image/*" label="Foto Pagina"></v-file-input>
        </v-form>
      </v-card>
    </v-col>

    <v-col cols="12">
      <v-card class="mx-auto" max-width="90%">
        <v-form ref="form" class="mx-10 py-10" v-model="valid" lazy-validation>
          <v-list three-line subheader>
            <v-subheader>Lista de Requisitos</v-subheader>
            <v-form v-for="(input,k) in inputs" :key="k">
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-label="k"
                      required
                      prepend-icon="mdi-tooltip-edit"
                      v-model="input.name"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>

            <div class="text-center">
              <v-btn class="ma-2" @click="add(k)" tile outlined color="success">
                <v-icon left>mdi-plus</v-icon>Agregar
              </v-btn>
              <v-btn class="ma-2" @click="remove(k)" tile color="red" dark>Eliminar</v-btn>
            </div>
          </v-list>
        </v-form>
      </v-card>
    </v-col>

    <v-col cols="12">
      <v-card class="mx-auto" max-width="90%">
        <v-form ref="form" class="mx-10 py-10" v-model="valid" lazy-validation>
          <v-list three-line subheader>
            <v-subheader>Lista de Documentos Academicos</v-subheader>
            <v-form v-for="(input,k) in inputs" :key="k">
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-label="k"
                      required
                      prepend-icon="mdi-tooltip-edit"
                      v-model="input.name"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>

            <div class="text-center">
              <v-btn class="ma-2" @click="add(k)" tile outlined color="success">
                <v-icon left>mdi-plus</v-icon>Agregar
              </v-btn>
              <v-btn class="ma-2" @click="remove(k)" tile color="red" dark>Eliminar</v-btn>
            </div>
          </v-list>
        </v-form>
      </v-card>
    </v-col>

    <v-col cols="12">
      <v-card class="mx-auto" max-width="90%">
        <v-form ref="form" class="mx-10 py-10" v-model="valid" lazy-validation>
          <v-list three-line subheader>
            <v-subheader>Lista de documentos Personales</v-subheader>
            <v-form v-for="(input,k) in inputs" :key="k">
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-label="k"
                      required
                      prepend-icon="mdi-tooltip-edit"
                      v-model="input.name"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>

            <div class="text-center">
              <v-btn class="ma-2" @click="add(k)" tile outlined color="success">
                <v-icon left>mdi-plus</v-icon>Agregar
              </v-btn>
              <v-btn class="ma-2" @click="remove(k)" tile color="red" dark>Eliminar</v-btn>
            </div>
          </v-list>
        </v-form>
      </v-card>
    </v-col>

    <v-col cols="12">
      <v-card class="mx-auto" max-width="90%">
        <v-form ref="form" class="mx-10 py-10" v-model="csvUniversidades" lazy-validation>
          <v-file-input accept="image/*" label="Universidades"></v-file-input>
        </v-form>
      </v-card>
    </v-col>

    <v-col cols="12">
      <v-card class="mx-auto" max-width="90%">
        <v-form ref="form" class="mx-10 py-10"  lazy-validation>
          <v-select return-object v-model="selectFormulario" :items="formularios"  item-text="tittle"  label="Formulario"></v-select> 
        </v-form>
      </v-card>
    </v-col>

    <v-col cols="12" class="m-2 px-10">
      <v-btn block @click="submit" color="primary" dark>Guardar Formulario</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import route from "@/router";
import { mapState, mapActions } from "vuex";


export default {
  props: {
    value: Boolean,
  },
  async created(){
    console.log(this.idConvocatoria)
    await this.getFormularios()
  },

  methods: {

    getFormularios(){
      return this.axios.get("http://142.93.79.50:8080/backend-drii/forms/")
      .then((response) => ((this.formularios = this.filterPublished(response.data)), console.log(response.data)))
      .catch((error) => console.log(error));
    },  

    filterPublished(data){
      let cols = [];
      data.forEach(function (valor) {
          if(valor.published == true)
                cols.push(valor);     
      });
      return cols;
    },

    async createAgreements(){
     await this.axios
        .post(" http://142.93.79.50:8080/backend-drii/agreements/create", {
                name: this.name,
                semester: this.semestre,
                duration:  this.duracion,
                startLine: new Date(this.inicio),
                deadLine: new Date(this.cierre),
                expiration: new Date(this.cierre),

                informationLink: this.link,
                introductoryText: this.texto,
                benefits: this.beneficio,
                guided: this.dirigido,
               //pagePhoto: this.photoPagina,
               // coverPhoto:  this.photoPortada,
               // university: this.csvUniversidades,
                published: false,
                 form: this.selectFormulario 
        })
        .then(function (response) {
          console.log(response);
        });

  },

   async submit(){
      await this.createAgreements();
      route.push({
        name: "ListConvocatorias",
      });
    },

    add(index) {
      this.inputs.push({ name: "" });
      this.count += 1;
    },
    remove(index) {
      this.inputs.splice(this.count - 1, 1);
      this.count -= 1;
    },
  },

  computed: {
    ...mapState(["idConvocatoria"]),
  },

  data: () => ({
    
      
    menu: false,
   
    menu2: false,

    formularios: [],
    selectFormulario: '',
    
    name: null,
    semestre: null,
    duracion: null,
    inicio: new Date().toISOString().substr(0, 10), // TIENE UQE SER TIPO DATA.
    cierre: new Date().toISOString().substr(0, 10), // TIENE QUE SER TIPO DATA.
    link: null,
    texto: null,
    beneficio: null,
    dirigido: null,
    photoPortada: null,
    photoPagina: null,
    csvUniversidades: null,
    formulario: null,
    listRequerimiento: null,
    listAcademicos: null,
    listPersonales: null,

    count: 1,
    inputs: [
      {
        name: "",
      },
    ],
  }),
};
</script>