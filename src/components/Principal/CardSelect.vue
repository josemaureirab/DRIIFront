 <template>
  <v-card>
    <v-container>

  
      <v-row justify="space-between">
        <v-col>   
          <v-card-text>
            <v-subheader class="pa-0">

              {{this.item.tittle}} 

            </v-subheader>
               <v-select
            v-model="value"
            :items="items"
            chips
            label="Chips"
            multiple
            outlined
          ></v-select>
              
     
          
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
         <EditDialogSelect v-model="showDialogShort" />
  </v-card>
  
</template>

<script>  
//TODO : Arreglar  EDIT para que funcione


import EditDialogSelect from "../Buttons/EditDialogSelect";

export default {  
  components: {
    EditDialogSelect
  },
  props: {
    item: Object
  },
  methods: {
    buttonEdit: function() {
      this.showDialogShort = true;
    }
  },
  data: () => ({
    showDialogShort: false,
    items: ['foo', 'bar', 'fizz', 'buzz'],
    //TODO: Cambiar items por cols de item.

    //TODO: VARIABLE MULTIPLE -> Sacada de item para saber si es o no. 

    value: [], // Vacio al principio.
  })
};
</script>
