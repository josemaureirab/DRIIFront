
 <template>
  <div>
    <v-row align="center" v-for="item in abiertas" :key="item.id" >
        
     
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert color="blue" dark icon="mdi-account-card-details" dense>{{item.name}}</v-alert>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
                   <v-list> 
      <v-list-item
        v-for="item in items3"
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


  


  </div>

</template>

<script>
import { mapState, mapActions } from "vuex";
export default {

  async created() {
    await this.filtrarAgreements();
  },

  computed: {
    ...mapState(["convocatorias"]),
  },
   methods: {
    ...mapActions(["getAgreements"]),
    
      async filtrarAgreements() {
      let close = [];
      let open = [];
      await this.getAgreements(),
        this.convocatorias.forEach(function (valor) {
          if (valor.published == true) open.push(valor);
        });
      this.abiertas = open;
      console.log(this.abiertas);
    },


   },

  data: () => ({

    abiertas: [],

    panel: [0],
         dialog: false,
      items2: [
        {  title: 'Rut: 19.386.607-7', status: ' Aceptado', subtitle: 'Universidad de Lisboa' },
        {  title: 'Rut: 18.886.502-1', status: ' Rechazado', subtitle: 'Universidad de Manchester' },
      ],
      items3: [
      ],
  }),
};

// TODO : IMAGENES ESTANDERIZADAS ( ANOTARLO Y BUSCARLO!!)
</script>




