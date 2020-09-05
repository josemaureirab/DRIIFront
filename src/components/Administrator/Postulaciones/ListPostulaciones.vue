
 <template>
  <div>
    <v-row align="center">

        
      <v-expansion-panels color="red" multiple v-model="panel">
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert color="blue" dark icon="mdi-account-card-details" dense>PROGRAMA 1 </v-alert>
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
          <v-list-item-subtitle v-text="item.subtitle +' | Status: '+ item.status"></v-list-item-subtitle>


        </v-list-item-content>

        <v-list-item-action>
           <v-row cols="12" justify="center">

                        

                          

                          <v-col cols="4" >
                            <v-btn href="/ViewPostulacionAdministrator" icon color="orange">
                              <v-icon>mdi-eye</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="4" >
                            <v-btn icon color="orange">
                              <v-icon>mdi-download</v-icon>
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
            <v-alert color="blue" dark icon="mdi-account-card-details" dense>PROGRAMA 2 </v-alert>
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
          <v-list-item-subtitle v-text="item.subtitle +' | Status: '+ item.status"></v-list-item-subtitle>


        </v-list-item-content>

        <v-list-item-action>
           <v-row cols="12" justify="center">

                        

                          

                          <v-col cols="4" >
                            <v-btn href="/ViewPostulacionAdministrator" icon color="orange">
                              <v-icon>mdi-eye</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="4" >
                            <v-btn icon color="orange">
                              <v-icon>mdi-download</v-icon>
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
        {  title: 'Nicolas Alarcón Laserna', status: ' Aceptado', subtitle: 'Universidad de Lisboa' },
        {  title: 'Tomas Olivares Docher', subtitle: 'Rechazado' },
      ],
  }),
};

// TODO : IMAGENES ESTANDERIZADAS ( ANOTARLO Y BUSCARLO!!)
</script>




