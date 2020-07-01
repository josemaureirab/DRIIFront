 <template>
  <v-card>
    <v-container>
      <v-row justify="space-between">
        
        <v-col>
    
          <v-card-text>
            <v-subheader class="pa-0">{{titleQuestion}}</v-subheader>
            <v-container fluid>
            
    <v-list
      subheader
      two-line
      flat
    >
   
      <v-list-item-group
        v-model="settings"
        multiple
      >
        <v-list-item>
          <template v-slot:default="{ active, toggle }">
            <v-list-item-action>
              <v-checkbox
                v-model="active"
                color="primary"
                @click="toggle"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Opción 1</v-list-item-title>
              <v-list-item-subtitle> ayuda opcion 1</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active, toggle }">
            <v-list-item-action>
              <v-checkbox
                v-model="active"
                color="primary"
                @click="toggle"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Opción 2</v-list-item-title>
              <v-list-item-subtitle>ayuda opción 3</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active, toggle }">
            <v-list-item-action>
              <v-checkbox
                v-model="active"
                color="primary"
                @click="toggle"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Opción 3 </v-list-item-title>
              <v-list-item-subtitle>ayuda opción 3</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

       
      </v-list-item-group>
    </v-list>



          
            </v-container>
          </v-card-text>
        </v-col>

        <v-col cols="auto"  justify="center" class="text-center pl-0">
          <v-row class="flex-column ma-0 align-center" justify="center">
            <v-col class="px-0" >
              <v-btn icon v-on:click="buttonEdit">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </v-col>

            <v-col class="px-0">
              <v-btn icon>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-col>

            <v-col class="px-0">
              <v-btn icon>
                <v-icon>mdi-content-copy</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
          <EditDialogSelect v-model="showDialogShort"/>
  </v-card>
</template>

<script>
// TODO : MULTIPLE VARIBLE PARA SER MULTIPLE LAS RESPUESTAS! 
import EditDialogSelect from '../Buttons/EditDialogSelect';

export default {
  components:{
    EditDialogSelect
  },
  props: {
     titleQuestion: String,
     setting: Object,
     Questions: Object,
  },
  methods:{
      buttonEdit: function(){
          this.showDialogShort = true;
      } 
  },
   data: () => ({
     showDialogShort: false,
   }),
}
</script>
