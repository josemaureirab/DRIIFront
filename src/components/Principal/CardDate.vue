 <template>
  <v-card>
    <v-container>
      <v-row justify="space-between">
        <v-col>
       

          <v-card-text>
            <v-subheader class="pa-0">{{titleQuestion}}</v-subheader>
  <v-row>
 

    <v-col cols="12" sm="12" md="12">
      <v-menu
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
    </v-col>
    <v-spacer></v-spacer>
    
 


  </v-row>
          </v-card-text>
        </v-col>

        <v-col cols="auto" class="text-center pl-0">
          <v-row class="flex-column ma-0 fill-height" justify="center">
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
      <EditDialogDate  v-model="showDialogDate"/>
  </v-card>
</template>




<script>
//TODO: CAMBIAR COMPONENTES A CARD PARA REUTILIZAR!
import Card from './Card.vue';
import EditDialogDate from '../Buttons/EditDialogDate.vue';

export default {
  components:{
    EditDialogDate
  },
  props: {
     titleQuestion: String,
     setting: Object,
  },
  methods:{
      buttonEdit: function(){
          this.showDialogDate = true;
      } 
  },
   data: () => ({
     showDialogDate: false,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
   }),
}
</script>