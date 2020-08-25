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
            <v-btn dark text @click="dialog = false">Editar</v-btn>
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
                      <v-text-field v-model="first" label="Pregunta" outlined shaped></v-text-field>
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

        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>Configuración de Respuesta</v-subheader>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Obligatorio</v-list-item-title>
              <v-list-item-subtitle>La respuesta debe responderse obligatoriamente</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Maximo de caracteres</v-list-item-title>
              <v-list-item-subtitle>Maximo de caracters por respuesta (te envia para escribir maximo de caracteres)</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Ayuda</v-list-item-title>
              <v-list-item-subtitle>Crear un boton de ayuda ( te envia para escribir un texto)</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
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

