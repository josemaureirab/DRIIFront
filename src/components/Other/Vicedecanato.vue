
 <template>
  <v-expansion-panels color="red" multiple v-model="panel">
    <v-expansion-panel v-for="item in postulaciones" :key="item.id">
      <v-expansion-panel-header>
        <v-alert color="blue" dark icon="mdi-format-list-checks" dense>
             Documentos Sin Firmados
        </v-alert>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-list v-for="post in item[1]" :key="post.id">
          <v-list-item>
            <v-list-item-avatar>
              <v-icon color="grey lighten-1">mdi-folder</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="post.suitor.name"></v-list-item-title>
              <v-list-item-subtitle
                v-text="post.suitor.rut"
              ></v-list-item-subtitle>
              <v-list-item-subtitle
                v-text="post.suitor.career.name"
              ></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-card flat class="py-12">
                <v-card-text>
                  <v-row align="center" justify="center">
                    
                    <v-btn-toggle v-model="toggle_exclusive" mandatory>
                      <v-btn color="blue">
                            <v-icon>mdi-upload</v-icon>  Subir Documento
                      </v-btn>
                      <v-btn color="green">
                            <v-icon>mdi-download</v-icon>  Descargar Documento
                      </v-btn>
                     
                    </v-btn-toggle>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>

      <v-expansion-panel v-for="item in postulaciones" :key="item.id">
      <v-expansion-panel-header>
        <v-alert color="blue" dark icon="mdi-format-list-checks" dense>
             Documentos Firmados
        </v-alert>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-list v-for="post in item[1]" :key="post.id">
          <v-list-item>
            <v-list-item-avatar>
              <v-icon color="grey lighten-1">mdi-folder</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="post.suitor.name"></v-list-item-title>
              <v-list-item-subtitle
                v-text="post.suitor.rut"
              ></v-list-item-subtitle>
              <v-list-item-subtitle
                v-text="post.suitor.career.name"
              ></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-card flat class="py-12">
                <v-card-text>
                  <v-row align="center" justify="center">
                    
                    <v-btn-toggle v-model="toggle_exclusive" mandatory>
                     
                      <v-btn color="green">
                            <v-icon>mdi-download</v-icon>  Descargar Documento
                      </v-btn>
                      <v-btn color="blue">
                          <v-icon>mdi-download</v-icon>   Documento Firmado 
                      </v-btn>
                     
                    </v-btn-toggle>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>




  </v-expansion-panels>
</template>

<script>
import router from "@/router";
import { mapState, mapActions } from "vuex";
import axios from "axios";

export default {
  async created() {
    await this.filtrarAgreements();
    await this.list();
  },

  computed: {
    ...mapState(["serverURL", "convocatorias"]),
    actualPostulation: {
      get() {
        return this.$store.state.actualPostulation;
      },
      set(payload) {
        this.$store.commit("updateActualPostulation", payload);
      },
    },
    idPostulacion: {
      get() {
        return this.$store.state.idPostulacion;
      },
      set(payload) {
        this.$store.commit("updateIdPostulacion", payload);
      },
    },
  },

  methods: {
    ...mapActions(["getAgreements"]),

    // id suitor
    goDocument(id) {
      this.idPostulacion = id;
      router.push({ name: "ViewPostulacionAdministrator" });
    },

    download(id) {
      return id;
    },
    async editStatus(post) {
      this.actualPostulation = post;
      router.push({ name: "EditStatus" });
    },
    async list() {
      let opt = [];
      this.abiertas.forEach(function (valor) {
        axios
          .get(
            "http://142.93.79.50:8080/backend-drii/postulations/byAgreement/" +
              valor.id
          )
          .then((response) => opt.push([valor, response.data]));
      });
      this.postulaciones = opt;
    },

    async filtrarAgreements() {
      let close = [];
      let open = [];
      await this.getAgreements(),
        this.convocatorias.forEach(function (valor) {
          if (valor.type == "cerrada") open.push(valor);
          if (valor.type == "abierta") open.push(valor);
        });
      this.abiertas = open;
      console.log(this.abiertas);
    },
  },

  data: () => ({
    postulaciones: [],
    abiertas: [],
    panel: [0],
    dialog: false,
  }),
};

// TODO : IMAGENES ESTANDERIZADAS ( ANOTARLO Y BUSCARLO!!)
</script>

<style>
.leftbutton {
  margin-left: -600% !important;
}
</style>




