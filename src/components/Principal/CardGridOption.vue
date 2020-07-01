 <template>
  <v-card>
    <v-container>
      <v-row justify="space-between">
        <v-col>
       

          <v-card-text>
            <v-subheader class="pa-0">{{titleQuestion}}</v-subheader>
  <v-row>

  
          <v-col cols="12" sm="4" md="4">
            <v-checkbox
              v-model="ex4"
             
              color="red"
              value="red"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
             
              color="red darken-3"
              value="red darken-3"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-checkbox
              v-model="ex4"
            
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
             
              color="indigo darken-3"
              value="indigo darken-3"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-checkbox
              v-model="ex4"
            
              color="orange"
              value="orange"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
            
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>

        <v-row class="mt-12">
          <v-col cols="12" sm="4" md="4">
            <v-checkbox
              v-model="ex4"
             
              color="primary"
              value="primary"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
            
              color="secondary"
              value="secondary"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-checkbox
              v-model="ex4"
             
              color="success"
              value="success"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
             
              color="info"
              value="info"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-checkbox
              v-model="ex4"
            
              color="warning"
              value="warning"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
            
              color="error"
              value="error"
              hide-details
            ></v-checkbox>
          </v-col>
    

  </v-row>
          </v-card-text>
        </v-col>

        <v-col cols="auto" class="text-center pl-0">
          <v-row class="flex-column ma-0 " justify="center">
            <v-col class="px-0">
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
      <EditDialogOption  v-model="showDialogGridOption"/>
  </v-card>
</template>




<script>
//TODO: CAMBIAR COMPONENTES A CARD PARA REUTILIZAR!
import Card from './Card.vue';
import EditDialogOption from '../Buttons/EditDialogGridOption.vue';

export default {
  components:{
      EditDialogOption
  },
  props: {
     titleQuestion: String,
     setting: Object,
  },
  methods:{
      buttonEdit: function(){
          this.showDialogGridOption = true;
      } 
  },
   data: () => ({
     showDialogGridOption: false,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
   }),
}
</script>