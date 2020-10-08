
 <template>
  <div>
       <v-col cols="12" align="right">
        <v-btn href="/newConvocatoria" class="mx-2" fab dark color="indigo">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-col>

    <v-row align="center">
      <v-expansion-panels  multiple v-model="panel">
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert color="blue" dark icon="mdi-arrow-right-bold-box-outline" dense>Step1</v-alert>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
              <v-list> 
 
      <v-list-item
        v-for="item in items2"
        :key="item.title"
     
      >
        <v-list-item-avatar>
         <v-icon color="grey lighten-1">mdi-folder</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"> </v-list-item-title>
          <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="items"
          label="Standard"
        ></v-select>
      </v-col>
        </v-list-item-content>
        <v-list-item-action>
           <v-row cols="12" justify="center">
                      
                          <v-col cols="4" >
                            <v-btn href="/PostulacionAdmin" icon color="orange">
                              <v-icon>mdi-check</v-icon>
                            </v-btn>
                          </v-col>
                         
                           
                        </v-row>
        </v-list-item-action>
      </v-list-item>
    </v-list>

                    
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert color="blue" dark icon="mdi-arrow-right-bold-box-outline" dense>Step 2</v-alert>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
              <v-list> 
      <v-list-item
     
      >
        <v-list-item-avatar>
         <v-icon color="grey lighten-1">mdi-folder</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
            <v-text-field
            label="Nombre Step"
          ></v-text-field>


          <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="items"
          label="Formulario"
        ></v-select>
      </v-col>
        </v-list-item-content>
        <v-list-item-action>
           <v-row cols="12" justify="center">
                      
                          <v-col cols="4" >
                            <v-btn href="/PostulacionAdmin" icon color="orange">
                              <v-icon>mdi-check</v-icon>
                            </v-btn>
                          </v-col>
                            <v-col cols="4" >
                            <v-btn href="/PostulacionAdmin" icon color="orange">
                              <v-icon>mdi-delete</v-icon>
                            </v-btn>
                          </v-col> 
                           
                        </v-row>
        </v-list-item-action>
      </v-list-item>
    </v-list>


              
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>


  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

  </div>

</template>

<script>
export default {
  data: () => ({
    panel: [0, 1],
         dialog: false,
      items2: [
        {  title: 'Universidad de Lisboa', status: ' Aceptado', subtitle: 'Universidad de Lisboa' },
        {  title: 'Universidad de Manchester', subtitle: 'Rechazado' },
      ],
  }),
};

// TODO : IMAGENES ESTANDERIZADAS ( ANOTARLO Y BUSCARLO!!)
</script>




