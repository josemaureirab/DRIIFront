
 <template>
  <v-row align="center">
    <v-col cols="12" align="right">
      <v-btn href="/NewConvocatoria" class="mx-2" fab dark color="indigo">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </v-col>
    <v-expansion-panels color="red" multiple v-model="panel">
      <v-expansion-panel>
        <v-expansion-panel-header>
          <v-alert color="blue" dark icon="mdi-microsoft" dense>Convocatorias Guardadas</v-alert>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row justify="center">
            <v-container>
              <v-row dense>
                <v-col cols="4" v-for="item in guardadas" :key="item.id">
                  <v-card class="mx-auto" max-width="400">
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      src="https://brocku.ca/international/wp-content/uploads/sites/17/Website_Carousel_CONAHEC-1800x1100.png"
                    ></v-img>
                    <v-card-title>{{item.name}}</v-card-title>
                    <v-card-subtitle
                      class="pb-0"
                    >
               
                    Intercambios a realizar el semestre {{item.semester}}</v-card-subtitle>
                    <v-card-text class="text--primary">
                      <div>Inicio de postulaciones: {{item.startLine}}</div>
                      <div>Cierre de postulaciones: {{item.deadLine}}</div>
                    </v-card-text>
                    <v-card-actions>
                      <v-row cols="12" justify="center">
                        <v-col cols="3" align="center">
                        
                          <v-btn  @click="viewAgreement(item.id)" icon color="orange">
                            <v-icon>mdi-eye</v-icon>
                          </v-btn>
                        </v-col>
                        <v-col cols="3" align="center">
                          <v-btn @click="editAgreement(item.id)" icon color="orange">
                            <v-icon>mdi-tooltip-edit</v-icon>
                          </v-btn>
                        </v-col>
                        <v-col cols="3" align="center">
                          <v-btn icon @click="deleteAgreement(item.id)" color="orange">
                            <v-icon>mdi-delete</v-icon>
                          </v-btn>
                        </v-col>
                        <v-col cols="3" align="center">
                          <v-btn @click="cerrar(item)" icon color="orange">
                            <v-icon>mdi-clipboard-check</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
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
          <v-alert color="green" dark icon="mdi-microsoft" dense>Convocatorias Cerradas</v-alert>
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
                      <div>Inicio de postulaciones: {{item.startLine}}</div>
                      <div>Cierre de postulaciones: {{item.deadLine}}</div>
                    </v-card-text>
                    <v-card-actions>
                      <v-row cols="12" justify="center">
                        <v-col cols="2" align="center">
                          <v-btn @click="viewAgreement(item.id)" icon color="orange">
                            <v-icon>mdi-eye</v-icon>
                          </v-btn>
                        </v-col>
                        
                       
                        <v-col cols="2" align="center">
                          <v-btn icon  @click="unPublish(item)" color="orange">
                            <v-icon>mdi-close-circle</v-icon>
                          </v-btn>
                        </v-col>
                         <v-col cols="2" align="center">
                          <v-btn icon  @click="publish(item)" color="orange">
                            <v-icon> mdi-checkbox-multiple-marked-outline</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
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
          <v-alert color="green" dark icon="mdi-microsoft" dense>Convocatorias Abiertas</v-alert>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row justify="center">
            <v-container>
              <v-row dense>
                <v-col cols="4" v-for="item in abiertas" :key="item.id">
                  
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
                      <div>Inicio de postulaciones: {{item.startLine}}</div>
                      <div>Cierre de postulaciones: {{item.deadLine}}</div>
                    </v-card-text>
                    <v-card-actions>
                      <v-row cols="12" justify="center">
                        <v-col cols="3" align="center">
                          <v-btn @click="viewAgreement(item.id)" icon color="orange">
                            <v-icon>mdi-eye</v-icon>
                          </v-btn>
                        </v-col>
                       
                        <v-col cols="3" align="center">
                          <v-btn icon  @click="cerrar(item)" color="orange">
                            <v-icon>mdi-bookmark-remove</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
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

  async cerrar(data) {
      await this.axios.put(
        "http://142.93.79.50:8080/backend-drii/agreements/edit/"+ data.id,
        {
          type:"cerrada",
          country: data.country,
          university: data.university,
          coverPhoto: data.coverPhoto,
          form: data.form,
          pagePhoto: data.pagePhoto,
          available: data.available,
          name: data.name,
          startLine: data.startLine,
          deadLine: data.deadLine,
          informationLink: data.informationLink,
          expiration: data.expiration,
          semester: data.semester,
          duration: data.duration,
          introductoryText: data.introductoryText,
          benefits: data.benefits,
          guided: data.guided,
        }
      ).then(response => console.log(response.data));
      this.filtrarAgreements()
    },
  
    async publish(data) {
      await this.axios.put(
        "http://142.93.79.50:8080/backend-drii/agreements/edit/"+ data.id,
        {
          type: "abierta",
          country: data.country,
          university: data.university,
          coverPhoto: data.coverPhoto,
          form: data.form,
          pagePhoto: data.pagePhoto,
          available: data.available,
          name: data.name,
          startLine: data.startLine,
          deadLine: data.deadLine,
          informationLink: data.informationLink,
          expiration: data.expiration,
          semester: data.semester,
          duration: data.duration,
          introductoryText: data.introductoryText,
          benefits: data.benefits,
          guided: data.guided,
        }
      ).then(response => console.log(response.data));
      this.filtrarAgreements()
    },

    async copy(data) {
      await this.axios
        .post("http://142.93.79.50:8080/backend-drii/forms/create", {
          published: data.published,
          deleted: data.deleted,
          typeStep: data.typeStep,
          tittle: data.tittle,
        })
        .then(function (response) {
          // location.reload();
        });
      this.getForm();
    },

    viewAgreement(id){
      this.idConvocatoria = id;
      route.push({
        name: "ViewConvocatoriaAdmin",
      });
    },
    async unPublish(data) {
      await this.axios.put(
        "http://142.93.79.50:8080/backend-drii/agreements/edit/"+ data.id,
        {
          
          published: data.published,
          country: data.country,
          university: data.university,
          coverPhoto: data.coverPhoto,
          form: data.form,
          pagePhoto: data.pagePhoto,
          available: data.available,
          name: data.name,
          startLine: data.startLine,
          deadLine: data.deadLine,
          type: "guardada",
          informationLink: data.informationLink,
          expiration: data.expiration,
          semester: data.semester,
          duration: data.duration,
          introductoryText: data.introductoryText,
          benefits: data.benefits,
          guided: data.guided,
        }
      ).then(response => console.log(response.data));
     this.filtrarAgreements()
    },


    editAgreement(id) {
      this.idConvocatoria = id;
      route.push({
        name: "EditConvocatoria",
      });
    },
    async deleteAgreement(id) {
      await this.axios
        .delete("http://142.93.79.50:8080/backend-drii/agreements/delete/"+id)
        .then(function (response) {
          // location.reload();
        });
        this.filtrarAgreements()
    },

    async filtrarAgreements() {
      let close = [];
      let open = [];
      let guardada = [];
      await this.getAgreements(),
        this.convocatorias.forEach(function (valor) {
          if (valor.type == "abierta") open.push(valor);
          if (valor.type == "cerrada") close.push(valor);
          if (valor.type == "guardada") guardada.push(valor);
        });
      this.abiertas = open;
      this.cerradas = close;
      this.guardadas = guardada;
      console.log(this.abiertas);
      console.log(this.cerradas)
    },
  },

  data: () => ({
    guardadas: [],
    abiertas: [],
    cerradas: [],
    panel: [0, 1],
  }),
};

// TODO : IMAGENES ESTANDERIZADAS ( ANOTARLO Y BUSCARLO!!)
</script>




