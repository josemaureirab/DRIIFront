<template>
  <v-row>
    <v-col cols="12">
      <v-card class="mx-auto" max-width="90%">
        <v-form ref="form" class="mx-10 py-10" v-model="valid" lazy-validation>
          <v-text-field v-model="name" label="Nombre del programa" required></v-text-field>

          <v-text-field v-model="email" :rules="emailRules" label="Semestre a realizar" required></v-text-field>

          <v-text-field v-model="email" :rules="emailRules" label="Duración" required></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Inicio de Postulaciones"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Cierre de Postulaciones"
            required
          ></v-text-field>

          <v-text-field v-model="email" :rules="emailRules" label="Link Informativa" required></v-text-field>
        </v-form>
      </v-card>
    </v-col>

    <v-col cols="12">
      <v-card class="mx-auto" max-width="90%">
        <v-form ref="form" class="mx-10 py-10" v-model="valid" lazy-validation>
          <v-textarea solo name="input-7-4" label="Texto Introductorio"></v-textarea>
          <v-textarea solo name="input-7-4" label="Beneficios"></v-textarea>
          <v-textarea solo name="input-7-4" label="Dirigido"></v-textarea>
        </v-form>
      </v-card>
    </v-col>

      <v-col cols="12">
      <v-card class="mx-auto" max-width="90%">
        <v-form ref="form" class="mx-10 py-10" v-model="valid" lazy-validation>
           <v-file-input accept="image/*" label="Foto Portada"></v-file-input>
            <v-file-input accept="image/*" label="Foto Pagina"></v-file-input>
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
        <v-form ref="form" class="mx-10 py-10" v-model="valid" lazy-validation>
           <v-file-input accept="image/*" label="Universidades"></v-file-input>
          
        </v-form>
      </v-card>
    </v-col>

<v-col cols="12">
      <v-card class="mx-auto" max-width="90%">
        <v-form ref="form" class="mx-10 py-10" v-model="valid" lazy-validation>
           <v-select
          :items="items"
          label="Formulario"
        ></v-select>
          
        </v-form>
      </v-card>
    </v-col>





      <v-col cols="12" class="m-2 px-10">
      
      <v-btn block color="primary" dark>Guardar Formulario</v-btn>
        
    </v-col>

  </v-row>
  

</template>

<script>
export default {
  props: {
    value: Boolean
  },

  methods: {
      add(index) {
        this.inputs.push({ name: "" });
        this.count += 1;
      },
      remove(index) {
        this.inputs.splice(this.count - 1, 1);
        this.count -= 1;
      }
    },
    
  computed: {
    
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
    count: 1,
    inputs: [
      {
        name: ""
      }
    ]
  })
};
</script>