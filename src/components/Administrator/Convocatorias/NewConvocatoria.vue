<template>
  <v-row>
    <v-col cols="12" align="center">
      <h2>Nueva Convocatoria</h2>
    </v-col>
    <v-col cols="12">
      <v-card class="mx-auto" max-width="90%">
        <v-form ref="form" class="mx-10 py-10">
          <v-text-field
            v-model="name"
            label="Nombre del programa"
            required
          ></v-text-field>
          <v-text-field
            v-model="semestre"
            label="Semestre a realizar"
            required
          ></v-text-field>
          <v-text-field
            v-model="duracion"
            label="Duración"
            required
          ></v-text-field>

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
            <v-date-picker
              v-model="inicio"
              @input="menu = false"
            ></v-date-picker>
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
            <v-date-picker
              v-model="cierre"
              @input="menu2 = false"
            ></v-date-picker>
          </v-menu>

          <v-text-field
            v-model="link"
            label="Link Informativo"
            required
          ></v-text-field>
        </v-form>
      </v-card>
    </v-col>

    <v-col cols="12">
      <v-card class="mx-auto" max-width="90%">
        <v-form ref="form" class="mx-10 py-10">
          <v-textarea
            solo
            v-model="texto"
            name="input-7-4"
            label="Texto Introductorio"
          ></v-textarea>
          <v-textarea
            solo
            v-model="beneficio"
            name="input-7-4"
            label="Beneficios"
          ></v-textarea>
          <v-textarea
            solo
            v-model="dirigido"
            name="input-7-4"
            label="Dirigido"
          ></v-textarea>
        </v-form>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card class="mx-auto" max-width="90%">
        <v-form ref="form" class="mx-10 py-10">
          <v-list three-line subheader>
            <v-subheader>Lista de Requisitos</v-subheader>
            <v-form v-for="(input, k) in input_requirements" :key="k">
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      required
                      prepend-icon="mdi-tooltip-edit"
                      v-model="input.name"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>

            <div class="text-center">
              <v-btn
                class="ma-2"
                @click="addR(k)"
                tile
                outlined
                color="success"
              >
                <v-icon left>mdi-plus</v-icon>Agregar
              </v-btn>
              <v-btn class="ma-2" @click="removeR(k)" tile color="red" dark
                >Eliminar</v-btn
              >
            </div>
          </v-list>
        </v-form>
      </v-card>
    </v-col>

    <v-col cols="12">
      <v-card class="mx-auto" max-width="90%">
        <v-form ref="form" class="mx-10 py-10">
          <v-list three-line subheader>
            <v-subheader>Lista de Documentos Academicos</v-subheader>
            <v-form v-for="(input, k) in input_requirementsA" :key="k">
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      required
                      prepend-icon="mdi-tooltip-edit"
                      v-model="input.name"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>

            <div class="text-center">
              <v-btn
                class="ma-2"
                @click="addA(k)"
                tile
                outlined
                color="success"
              >
                <v-icon left>mdi-plus</v-icon>Agregar
              </v-btn>
              <v-btn class="ma-2" @click="removeA(k)" tile color="red" dark
                >Eliminar</v-btn
              >
            </div>
          </v-list>
        </v-form>
      </v-card>
    </v-col>

    <v-col cols="12">
      <v-card class="mx-auto" max-width="90%">
        <v-form ref="form" class="mx-10 py-10">
          <v-list three-line subheader>
            <v-subheader>Lista de documentos Personales</v-subheader>
            <v-form v-for="(input, k) in input_requirementsP" :key="k">
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      required
                      prepend-icon="mdi-tooltip-edit"
                      v-model="input.name"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>

            <div class="text-center">
              <v-btn
                class="ma-2"
                @click="addP(k)"
                tile
                outlined
                color="success"
              >
                <v-icon left>mdi-plus</v-icon>Agregar
              </v-btn>
              <v-btn class="ma-2" @click="removeP(k)" tile color="red" dark
                >Eliminar</v-btn
              >
            </div>
          </v-list>
        </v-form>
      </v-card>
    </v-col>

    <v-col cols="12">
      <v-card class="mx-auto" max-width="90%">
        <v-form ref="form" class="mx-10 py-10" v-model="csvUniversidades">
          <v-file-input accept="image/*" label="Universidades"></v-file-input>
        </v-form>
      </v-card>
    </v-col>

    <v-col cols="12">
      <v-card class="mx-auto" max-width="90%">
        <v-form ref="form" class="mx-10 py-10">
          <v-select
            return-object
            v-model="selectFormulario"
            :items="formularios"
            item-text="tittle"
            label="Formulario"
          ></v-select>
        </v-form>
      </v-card>
    </v-col>

    <v-col cols="12" class="m-2 px-10">
      <v-btn block @click="submit" color="primary" dark
        >Guardar Formulario</v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
import route from "@/router";

export default {
  props: {
    value: Boolean,
  },

  async created(){
    await this.getFormularios()
  },

  methods: {

    getFormularios(){
      return this.axios.get("http://142.93.79.50:8080/backend-drii/forms/")
      .then((response) => ((this.formularios = this.filterPublished(response.data))))
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

      //formData.append("pagePhoto",this.photoPortada)
   
      //console.log(this.photoPortada)
      //formData.append("coverPhoto",this.photoPortada),
      //formData.append("name",this.name)
      //console.log({formData})
      
      //formData.append("name",this.name)
      return await this.axios.post("http://142.93.79.50:8080/backend-drii/agreements/create",{
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
                //coverPhoto: formData,
               // university: this.csvUniversidades,
                published: false,
                type:"guardada",
                form: this.selectFormulario })   
  },

  async createRequirements(data) {
      let cols = this.partitionRequirements();
      let op = [];
      let promises = [];
      for (var i = 0; i < cols.length; i++) {
        promises.push(
          this.axios
            .post("http://142.93.79.50:8080/backend-drii/requirements/create", {
              text: cols[i],
              type: 1,
              agreement: data,
            })
            .then((response) => {
              op.push(response);
            })
        );
      }
      Promise.all(promises).then(() => console.log()); 
    },

    async createRequirementsAcademics(data) {
      let cols = this.partitionRequirementsAcademics();
      let op = [];
      let promises = [];
      for (var i = 0; i < cols.length; i++) {
        promises.push(
          this.axios
            .post("http://142.93.79.50:8080/backend-drii/requirements/create", {
              text: cols[i],
              type: 2,
              agreement: data,
            })
            .then((response) => {
              op.push(response);
            })
        );
      }
      Promise.all(promises).then(() => console.log()); 
    },

    async createRequirementsPersonal(data) {
  
      let cols = this.partitionRequirementsPersonal();
      let op = [];
      let promises = [];
      for (var i = 0; i < cols.length; i++) {
        promises.push(
          this.axios
            .post("http://142.93.79.50:8080/backend-drii/requirements/create", {
              text: cols[i],
              type: 3,
              agreement: data,
            })
            .then((response) => {
              op.push(response);
            })
        );
      }
      Promise.all(promises).then(() => console.log()); 
    },


   async submit(){
      await this.createAgreements().then(({ data }) => {
          this.createRequirements(data);
          this.createRequirementsPersonal(data);
          this.createRequirementsAcademics(data);
       });
      route.push({
        name: "ListConvocatorias",
      });
    },

     partitionRequirements() {
      let cols = [];
      this.input_requirements.forEach(function (valor) {
        cols.push(valor.name);
      });
      return cols;
    },

      partitionRequirementsPersonal() {
      let cols = [];
      this.input_requirementsP.forEach(function (valor) {
        cols.push(valor.name);
      });
      return cols;
    },
    partitionRequirementsAcademics() {
      let cols = [];
      this.input_requirementsA.forEach(function (valor) {
        cols.push(valor.name);
      });
      return cols;
    },

    addR(index) {
      this.input_requirements.push({ name: "" });
      this.countR += 1;
    },
    removeR(index) {
      this.input_requirements.splice(this.count - 1, 1);
      this.countR -= 1;
    },
    addP(index) {
      this.input_requirementsP.push({ name: "" });
      this.countP += 1;
    },
    removeP(index) {
      this.input_requirementsP.splice(this.count - 1, 1);
      this.countP -= 1;
    },
    addA(index) {
      this.input_requirementsA.push({ name: "" });
      this.countA += 1;
    },
    removeA(index) {
      this.input_requirementsA.splice(this.count - 1, 1);
      this.countA -= 1;
    },
  },

  computed: {
  },

  data: () => ({
    
      
    menu: false,
   
    menu2: false,

    formularios: [],
    selectFormulario: '',
    
    objConv:{
        photoPagina: null,
        name: null,
        semester: null,
        duration: null,
        startLine: null,
        deadLine: null,
        expiration: null,
        informationLink: null,
        introductoryText: null,
        benefits: null,
        guided: null,
        pagePhoto: null,
        coverPhoto: null,
        university:null,
        published: null,
        form: null, 
    },
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

    countR: 1,
    countA: 1,
    countP: 1,
    input_requirements: [
      {
        name: "",
      },
    ],
    input_requirementsA: [
      {
        name: "",
      },
      ],
       input_requirementsP: [
      {
        name: "",
      },
       ]
  }),
};
</script>