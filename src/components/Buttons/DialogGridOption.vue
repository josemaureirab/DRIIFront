<template ref="dialog">
  <v-row justify="center">
    <v-dialog v-model="show" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="show = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Nueva Pregunta de Cuadricula</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">Agregar</v-btn>
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
            v-model="first"
            label="Pregunta"
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
 <v-list  three-line subheader >
 <v-subheader>Opciones</v-subheader>


  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="6">
              <h3 class="text-center">Columnas</h3>
           <v-form  v-for ="(input,k) in columns" :key="k">
           <v-text-field
            v-label="k" 
            required
            prepend-icon="mdi-map-marker"
            v-model="input.name"
          ></v-text-field>
 </v-form>
    <div class="text-center">
  <v-btn class="ma-2" @click="addColumn(k)"   tile outlined color="success">
      <v-icon left>mdi-plus</v-icon> Agregar
    </v-btn>
    <v-btn class="ma-2" @click="removeColumn(k)" tile color="red" dark>Eliminar</v-btn>
    
  </div>
      </v-col>
      <v-col cols="12" sm="6">
              <h3 class="text-center">Filas</h3>        
           <v-form  v-for ="(input,k) in rows" :key="k">
          <v-text-field
            v-label="k" 
            required
            prepend-icon="mdi-map-marker"
            v-model="input.name"
          ></v-text-field>
        </v-form>
        <div class="text-center">
  <v-btn class="ma-2" @click="addRow(k)"   tile outlined color="success">
      <v-icon left>mdi-plus</v-icon> Agregar
    </v-btn>
    <v-btn class="ma-2" @click="removeRow(k)" tile color="red" dark>Eliminar</v-btn>
    
  </div>
      </v-col>
      
    </v-row>
  </v-container>

</v-list> 





        <v-divider></v-divider>
        <v-list  three-line subheader >
          <v-subheader>Configuración de Respuesta</v-subheader>
          <v-list-item  >
            <v-list-item-action>
              <v-checkbox  ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Selección Multiple</v-list-item-title>
              <v-list-item-subtitle>Pueden tener mas de una respuesta</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item  >
            <v-list-item-action>
              <v-checkbox  ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Obligatorio</v-list-item-title>
              <v-list-item-subtitle>La respuesta debe responderse obligatoriamente</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Maximo de caracteres</v-list-item-title>
              <v-list-item-subtitle> Maximo de caracters por respuesta (te envia para escribir maximo de caracteres)</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox ></v-checkbox>
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
  computed: {
    methods: {
       addColumn(index) {
            this.columns.push({ name: '' });
            this.countColumns +=1
        },
        removeColumn(index) {
            this.columns.splice(this.countColumns-1, 1);
            this.countColumns -=1;
        },
         addRow(index) {
            this.rows.push({ name: '' });
            this.countRow +=1
        },
        removeRow(index) {
            this.rows.splice(this.countRow-1, 1);
            this.countRow -=1;
        },

      add(index) {
        this.inputs.push({ name: "" });
        this.count += 1;
      },
      remove(index) {
        this.inputs.splice(this.count - 1, 1);
        this.count -= 1;
      }
    },
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
            countColumns: 1,
            countRow:1,
            columns:[{
                name: '', 
    
                    }
                ],
            rows:[{
                name: '', 
    
                    }
                ],
            
            
              
    }),
  }

  //TODO: de los dialogos reutizar codigo mas compacto.. entre ellos por ejemplo  la primera parte y ultima.


</script>

