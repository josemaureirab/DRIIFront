
 <template>
  <div>
    <v-alert dense border="left" type="warning">
      Solo puedes postular a
      <strong>una convocatoria</strong> por semestre.
    </v-alert>
    <v-row align="center">
      <v-expansion-panels color="red" multiple v-model="panel">
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert
              color="green"
              dark
              icon="mdi-bookmark-check"
              dense
            >Convocatorias Abiertas {{cAbiertas}}</v-alert>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <!-- <v-list-item v-if="item.published == false"> -->
            <v-row justify="center">
              <v-container>
                <v-row dense>
                  <v-col cols="3" v-for="item in abiertas" :key="item.id">
                    <v-card class="mx-auto" max-width="400">
                      <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://brocku.ca/international/wp-content/uploads/sites/17/Website_Carousel_CONAHEC-1800x1100.png"
                      ></v-img>
                      <v-card-title>{{item.name}}</v-card-title>
                      <v-card-subtitle
                        class="pb-0"
                      >Intercambios a realizar el semestre {{item.semester}}</v-card-subtitle>

                      <v-card-text class="text--primary">
                        <div>Cierre de postulaciones: {{item.deadLine}}</div>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="orange" text @click="submit(item.id)">Ingresar</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert color="red" dark icon="mdi-bookmark-remove" dense>Convocatorias Cerradas {{cCerradas}}</v-alert>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row justify="center">
              <v-container>
                <v-row dense>
                  <v-col cols="4" v-for="item in cerradas" :key="item.id">
                    <v-card class="mx-auto" max-width="400">
                      <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://brocku.ca/international/wp-content/uploads/sites/17/Website_Carousel_CONAHEC-1800x1100.png"
                      ></v-img>
                      <v-card-title>{{item.name}}</v-card-title>
                      <v-card-subtitle
                        class="pb-0"
                      >Intercambios a realizar el semestre {{item.semester}}</v-card-subtitle>

                      <v-card-text class="text--primary">
                        <div>Cierre de postulaciones: {{item.deadLine}}</div>
                      </v-card-text>
                      <v-card-actions>
                    <v-btn color="orange" text @click="send(item.informationLink)">Ver Más</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>


<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
import route from "@/router";

export default {


  async created() {
  
    await this.filtrarAgreements();
  },

  computed: {
    ...mapState(["convocatorias"]),
    idConvocatoria: {
      get() {
        return this.$store.state.idConvocatoria;
      },
      set(payload) {
        this.$store.commit("updateIdConvocatoria", payload);
      },
    },
  },
  methods: {
    ...mapActions(["getAgreements"]),

    send(url){
      window.location.href = url;
    },

    submit(id) {
      this.idConvocatoria = id;
      route.push({
        name: "ViewConvocatoria",
      });
    },
     async filtrarAgreements() {
       
      let countAbiertas = 0;
      let countCerradas = 0;
      let close = [];
      let open = [];

      let cols = [];
       await this.getAgreements(), 
       this.convocatorias.forEach(function (valor) {
    
        if (valor.type == "abierta") {
          countAbiertas += 1,
          open.push(valor);
        }
        if ( valor.type =="cerrada"){
             countCerradas += 1;
            close.push(valor);
        } 
      });
      this.cAbiertas = countAbiertas;
      this.abiertas = open;
      this.cCerradas = countCerradas;
      this.cerradas = close;
    },
  },

  data: () => ({
    abiertas: [],
    cerradas: [],
    cAbiertas: 0,
    cCerradas: 0,
    panel: [0, 1],
  }),
};

// TODO : IMAGENES ESTANDERIZADAS ( ANOTARLO Y BUSCARLO!!)
</script>




