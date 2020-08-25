 <template>
  <v-card>
    <v-container>


      <v-row justify="space-between">
        <v-col>   
          <v-card-text>
            <v-subheader class="pa-0">
              {{this.item.tittle}} 
            </v-subheader>
                <v-text-field  
                v-if="item.selectionType == 'Respuesta Corta'" 
                    label="Respuesta Corta" 
                    single-line 
                    solo /> 
                 <v-text-field  
                v-if="item.selectionType == 'Correo'" 
                    label="Correo" 
                    single-line 
                    solo /> 

                <v-file-input 
                v-if="item.selectionType == 'Archivo'"
                   
                    color="deep-purple accent-4"
                    counter
                    label="File input"
                    multiple
                    placeholder="Select your files"
                    prepend-icon="mdi-paperclip"
                    outlined
                    :show-size="1000"
                />
         
              <v-text-field  
                v-if="item.selectionType == 'Rut'" 
                    label="Rut" 
                    single-line 
                    solo /> 

               <v-text-field  
                v-if="item.selectionType == 'Celular'" 
                    label="Celular" 
                    single-line 
                    solo /> 
                  
            <v-menu  v-if="item.selectionType == 'Fecha'"  
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Picker in menu"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
              </v-date-picker>
            </v-menu>
          </v-card-text>
        </v-col>

      </v-row>
    </v-container>
      <EditDialogShortAnswer v-model="showDialogShort"  v-bind:item="item" />
  </v-card>
  
</template>

<script>
//TODO: CAMBIAR COMPONENTES A CARD PARA REUTILIZAR!

import EditDialogShortAnswer from '../Buttons/EditDialogShortAnswer';
import axios from 'axios'


  export default {
 components: {
           EditDialogShortAnswer,
  },

  props: {
     item: Object,
  },
  methods:{
      buttonEdit: function(){
          this.showDialogShort = true;
      },
      buttonDelete: function(){
          this.axios
          .delete("http://142.93.79.50:8080/backend-drii/questions/delete/"+this.item.id)
          .then(function(response) {
            console.log(response);
          });
      },
  },
   data: () => ({
     showDialogShort: false,
     date: "",
     menu: "",
   }),
}
</script>