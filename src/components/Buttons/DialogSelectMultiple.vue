<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog

          answer
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Nueva Pregunta Seleción</v-toolbar-title>
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
  <v-form  v-for ="(input,k) in inputs" :key="k">
   <v-container>
 <v-row>
        <v-col cols="12">
                <v-text-field
            v-label="k" 
            required
            prepend-icon="mdi-map-marker"
            v-model="input.name"
          ></v-text-field>
         </v-col>
      </v-row>
    </v-container>
  </v-form>
 

<div class="text-center">
  <v-btn class="ma-2" @click="add(k)"   tile outlined color="success">
      <v-icon left>mdi-plus</v-icon> Agregar
    </v-btn>
    <v-btn class="ma-2" @click="remove(k)" tile color="red" dark>Eliminar</v-btn>
    
  </div>



  
</v-list >


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
      methods: {
        add(index) {
            this.inputs.push({ name: '' });
            this.count +=1
        },
        remove(index) {
            this.inputs.splice(this.count-1, 1);
            this.count -=1;
        }
    },
    data: () => ({
            count: 1,
            inputs:[{
                name: '', 
    
                    }
                ]  
    }),
  }
</script>

