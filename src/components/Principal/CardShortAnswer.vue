 <template>
  <v-card>
    <v-container>
      <v-row justify="space-between">
        <v-col>   
          <v-card-text>
            <v-subheader class="pa-0">{{titleQuestion}}</v-subheader>
            <v-text-field label="Respuesta Corta" single-line solo></v-text-field>
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
      <EditDialogShortAnswer  v-model="showDialogShort"/>
  </v-card>
  
</template>

<script>
//TODO: CAMBIAR COMPONENTES A CARD PARA REUTILIZAR!
import Card from './Card.vue';
import EditDialogShortAnswer from '../Buttons/EditDialogShortAnswer';

export default {
  components:{
    EditDialogShortAnswer
  },
  props: {
     titleQuestion: String,
     setting: Object,
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