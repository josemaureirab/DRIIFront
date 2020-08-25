 <template>
  <v-card>
    <v-container>
      <v-row justify="space-between">
        <v-col>
       

          <v-card-text>
            <v-subheader class="pa-0">{{titleQuestion}}</v-subheader>
  <v-row>
           <v-col cols="12" sm="12" md="12">
               <v-row class="dark--text">
                <v-col cols="3"></v-col>
                <v-col cols="3">Opción 1</v-col>
                <v-col cols="3">Opción 2</v-col>
                 <v-col cols="3">Opción 3</v-col>
            </v-row>
          </v-col>


  
          <v-col cols="12" sm="12" md="12">


            <v-row class="dark--text">
                <v-col cols="3">Pregunta 1</v-col>
                <v-col cols="3"> <v-checkbox
              v-model="ex4"
            
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            
            </v-col>
                <v-col cols="3"><v-checkbox
              v-model="ex4"
            
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            </v-col>
                 <v-col cols="3"><v-checkbox
              v-model="ex4"
            
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            </v-col>
           </v-row>


          </v-col>


 <v-col cols="12" sm="12" md="12">


            <v-row class="dark--text">
                <v-col cols="3">Pregunta 2</v-col>
                <v-col cols="3"> <v-checkbox
              v-model="ex4"
            
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            
            </v-col>
                <v-col cols="3"><v-checkbox
              v-model="ex4"
            
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            </v-col>
                 <v-col cols="3"><v-checkbox
              v-model="ex4"
            
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            </v-col>
           </v-row>


          </v-col>
           <v-col cols="12" sm="12" md="12">


            <v-row class="dark--text">
                <v-col cols="3">Pregunta 3</v-col>
                <v-col cols="3"> <v-checkbox
              v-model="ex4"
            
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            
            </v-col>
                <v-col cols="3"><v-checkbox
              v-model="ex4"
            
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            </v-col>
                 <v-col cols="3"><v-checkbox
              v-model="ex4"
            
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            </v-col>
           </v-row>


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
              <v-btn icon v-on:click="buttonDelete">
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
      <DialogEditGridAnswer  v-model="showDialogGridOption"/>
  </v-card>
</template>




<script>
//TODO: CAMBIAR COMPONENTES A CARD PARA REUTILIZAR!
import DialogEditGridAnswer from './DialogEditGridAnswer.vue';

export default {
  components:{
      DialogEditGridAnswer
  },
  props: {
    
    item: Object,

     titleQuestion: String,
     setting: Object,
  },
  methods:{
      buttonEdit: function(){
          this.showDialogGridOption = true;
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
     showDialogGridOption: false,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
   }),
}
</script>