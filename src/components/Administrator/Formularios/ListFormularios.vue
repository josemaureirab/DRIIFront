
 <template>
  <div>
    <v-row align="center">
      <v-col cols="12" align="right">
      
          <v-dialog v-model="dialog" width="500">
            
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" class="mx-2" fab dark color="indigo">
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="headline grey lighten-2">Nuevo Formulario</v-card-title>
              <v-col cols="12" sm="12">
              <v-card-text>
                <v-text-field
                  v-model="name"
                  label="Nombre Formulario"
                  required
                  outlined
                  
                ></v-text-field>
              </v-card-text>
              </v-col>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="close">Cerrar</v-btn>
                <v-btn color="primary" text @click="submit">Crear</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        
      </v-col>
      <v-expansion-panels color="red" multiple v-model="panel">
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert color="blue" dark icon="mdi-format-list-checks" dense>Formularios Guardadas</v-alert>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list v-for="item in info" :key="item.id">
              <v-list-item v-if="item.published == false">
                <!-- Cambiar a guardados-->
                <v-list-item-avatar>
                  <v-icon color="grey lighten-1">mdi-folder</v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-text="'title: '+item.tittle"></v-list-item-title>
                  <v-list-item-subtitle v-text="'date :'+item.id"></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-row cols="12" justify="center">
                    <v-col cols="2" align="center">
                      <v-btn icon href="/ViewFormulario" color="orange">
                        <v-icon>mdi-eye</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col cols="2" align="center">
                      <v-btn @click="editForm(item.id)" icon color="orange">
                        <v-icon>mdi-tooltip-edit</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col cols="2" align="center">
                      <v-btn icon color="orange">
                        <v-icon>mdi-content-copy</v-icon>
                      </v-btn>
                    </v-col>

                    <v-col cols="2" align="center">
                      <v-btn icon @click="deleteForm(item.id)" color="orange">
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col cols="2" align="center">
                      <v-btn icon @click="publish(item.id)" color="orange">
                        <v-icon>mdi-clipboard-check</v-icon>
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
            <v-alert color="green" dark icon="mdi-format-list-checks" dense>Formularios Publicadas</v-alert>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list v-for="item in this.info" :key="item.id">
              <v-list-item v-if="item.published  == true">
                <!-- Cambiar  a publicados-->
                <v-list-item-avatar>
                  <v-icon color="grey lighten-1">mdi-folder</v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-text="'title: '+item.tittle"></v-list-item-title>
                  <v-list-item-subtitle v-text="'date :'+item.id"></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-row cols="12" justify="center">
                    <v-col cols="2" align="center">
                      <v-btn icon @click="submit" href="/ViewFormulario" color="orange">
                        <v-icon>mdi-eye</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col cols="2" align="center">
                      <v-btn icon @click="editForm(item.id)" color="orange">
                        <v-icon>mdi-tooltip-edit</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col cols="2" align="center">
                      <v-btn icon color="orange">
                        <v-icon>mdi-content-copy</v-icon>
                      </v-btn>
                    </v-col>

                    <v-col cols="2" align="center">
                      <v-btn icon @click="deleteForm(item.id)" color="orange">
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col cols="2" align="center">
                      <v-btn icon @click="unPublish(item.id)" color="orange">
                        <v-icon>mdi-bookmark-remove</v-icon>
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
import NewFormulario from "../../Formulario/NewFormulario.vue";
import axios from "axios";
import { mapState, mapActions } from "vuex";
import route from "@/router";
export default {
  components: {
    NewFormulario,
  },

  async created() {
    await this.getForm();
  },

  computed: {
    ...mapState(["info"]),
    idForm: {
      get() {
        return this.$store.state.idForm;
      },
      set(payload) {
        this.$store.commit("updateIdForm", payload);
      },
    },
  },

  methods: {
    ...mapActions(["getForm"]),

    submit() {
      this.createForm();
      this.dialog = false;
      this.name  = '';
    },
     close() {
      this.dialog = false;
      this.name  = '';
    },


    async publish(id) {
      await this.axios
        .put("http://142.93.79.50:8080/backend-drii/forms/edit/" + id, {
          published: true,
        })
        .then(function (response) {
          // location.reload();
        });
      this.getForm();
    },
    async unPublish(id) {
      await this.axios
        .put("http://142.93.79.50:8080/backend-drii/forms/edit/" + id, {
          published: false,
        })
        .then(function (response) {
          // location.reload();
        });
      this.getForm();
    },

    editForm(id) {
      this.idForm = id;
      route.push({
        name: "NewFormulario",
      });
    },
    async deleteForm(id) {
      await this.axios
        .delete("http://142.93.79.50:8080/backend-drii/forms/delete/" + id)
        .then(function (response) {
          // location.reload();
        });
      this.getForm();
    },

    async createForm() {
      await this.axios
        .post("http://142.93.79.50:8080/backend-drii/forms/create", {
          published: false,
          tittle: this.name,
        })
        .then(function (response) {
          // location.reload();
        });
      this.getForm();
    },
  },

  data: () => ({
    name: "", // Title
    dialog: false,
    showEdit: false,
    panel: [0, 1],
  }),
};

// TODO : IMAGENES ESTANDERIZADAS ( ANOTARLO Y BUSCARLO!!)
</script>




