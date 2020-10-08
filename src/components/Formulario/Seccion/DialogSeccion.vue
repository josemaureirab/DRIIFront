<template ref="dialog">
  <v-card>
    <v-toolbar dark color="primary">
      <v-btn icon dark @click="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Nueva Pregunta Selección</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-list three-line subheader>
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
                <v-card-title class="headline grey lighten-2">Nueva Sección</v-card-title>
                <v-col cols="12" sm="12">
                  <v-list three-line subheader>
                    <v-subheader>Configuración</v-subheader>
                    <v-list-item>
                      <v-list-item-content>
                        <v-form>
                          <v-container>
                            <v-row>
                              <v-col cols="12" sm="12">
                                <v-text-field
                                  v-model="name"
                                  :error-messages="nameErrors"
                                  label="Nombre de la Sección"
                                  required
                                  @input="$v.name.$touch()"
                                  @blur="$v.name.$touch()"
                                  outlined
                                  shaped
                                ></v-text-field>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-form>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>

                  <v-divider></v-divider>

                  <v-list three-line subheader>
                    <v-subheader>Carreras Asociadas</v-subheader>
                    <v-card flat>
                      <v-card-text>
                        <v-col class="d-flex" cols="12" sm="12">
                          <v-container fluid>
                            <v-row align="center">
                              <v-select
                                v-model="selectCarrer"
                                :items="carrers"
                                item-text="name"
                                return-object
                                :error-messages="selectErrors"
                                label="Carreras"
                                required
                                multiple
                                outlined
                              ></v-select>
                              {{ selectCarrer}}
                            </v-row>
                          </v-container>
                        </v-col>
                      </v-card-text>
                    </v-card>
                  </v-list>
                </v-col>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="closeDialog">Cerrar</v-btn>
                  <v-btn color="primary" text @click="submit">Crear</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
          <v-col cols="12" align="right">
            <v-dialog v-model="dialogEdit" width="500">
              <v-card>
                <v-card-title class="headline grey lighten-2">Editar Sección</v-card-title>
                <v-col cols="12" sm="12">
                  <v-list three-line subheader>
                    <v-subheader>Configuración</v-subheader>
                    <v-list-item>
                      <v-list-item-content>
                        <v-form>
                          <v-container>
                            <v-row>
                              <v-col cols="12" sm="12">
                                <v-text-field
                                  v-model="nameEdit"
                                  label="Nombre de la Sección"
                                  required
                                  outlined
                                  shaped
                                ></v-text-field>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-form>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>

                  <v-divider></v-divider>

                  <v-list three-line subheader>
                    <v-subheader>Carreras Asociadas</v-subheader>
                    <v-card flat>
                      <v-card-text>
                        <v-col class="d-flex" cols="12" sm="12">
                          <v-container fluid>
                            <v-row align="center">
                              <v-select
                                v-model="selectCarrerEdit"
                                :items="carrers"
                                item-text="name"
                                return-object
                                label="Carreras"
                                required
                                multiple
                                outlined
                              ></v-select>
                              {{ selectCarrer}}
                            </v-row>
                          </v-container>
                        </v-col>
                      </v-card-text>
                    </v-card>
                  </v-list>
                </v-col>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="closeDialogEdit">Cerrar</v-btn>
                  <v-btn color="primary" text @click="submitEdit">Crear</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
          <v-expansion-panels color="red" multiple v-model="panel">
            <v-expansion-panel>
              <v-expansion-panel-header>
                <v-alert color="blue" dark icon="mdi-format-list-checks" dense>Secciones</v-alert>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list v-for="item in seccions" :key="item.id">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.name"></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-row cols="12" justify="center">
                        <v-col cols="2" align="center">
                          <v-btn @click="buttonEdit(item)" icon color="orange">
                            <v-icon>mdi-tooltip-edit</v-icon>
                          </v-btn>
                        </v-col>

                        <v-col cols="2" align="center">
                          <v-btn icon @click="deleteSeccion(item.id)" color="orange">
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
      </div>
    </v-list>
  </v-card>
</template>


<script>
import axios from "axios";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import { mapState, mapActions } from "vuex";
import route from "@/router";

export default {
  mixins: [validationMixin],
  validations: {
    name: { required },
    select: { required },
  },

  async created() {
    await this.getCareers();
    await this.getSeccion();
  },

  methods: {
    ...mapActions(["getQuestions"]),

    getIdForm() {
      return this.axios
        .get("http://142.93.79.50:8080/backend-drii/forms/" + this.idForm)
        .then(
          (response) => (
            (this.formulario = response.data), console.log(response.data)
          )
        )
        .catch((error) => console.log(error));
    },

    getCareers() {
      return this.axios
        .get("http://142.93.79.50:8080/backend-drii/careers/")
        .then((response) => {
          this.carrers = response.data;
          console.log(this.carrers);
        })
        .catch((error) => console.log(error));
    },

    async deleteSeccion(id) {
      await this.axios
        .delete("http://142.93.79.50:8080/backend-drii/sections/delete/" + id)
        .then(function (response) {
          // location.reload();
        });
      this.getSeccion();
    },

    getSeccion() {
      this.axios
        .get(
          "http://142.93.79.50:8080/backend-drii/sections/byForm/" + this.idForm
        )
        .then(
          (response) => (this.seccions = response.data),
          console.log(this.seccion)
        )
        .catch((error) => console.log(error));
    },

    async createSection() {
      await this.axios
        .post("http://142.93.79.50:8080/backend-drii/sections/create", {
          name: this.name,
          form: this.formulario,
          // career: this.selectCarrer,
        })
        .then(function (response) {
          console.log(response);
        });
      this.getSeccion();
    },
    buttonEdit(item) {
      (this.nameEdit = item.name),
        (this.idSeccionEdit = item.id),
        (this.dialogEdit = true);
      // AGREGAR EDITAR CARRERA.
    },
    async EditSection() {
      await this.axios
        .put(
          "http://142.93.79.50:8080/backend-drii/sections/edit/" +
            this.idSeccionEdit,
          {
            name: this.nameEdit,
            form: this.formulario,
            // career: this.selectCarrerEdit,
          }
        )
        .then(function (response) {
          console.log(response);
        });
      this.getSeccion();
    },

    closeDialog() {
      this.dialog = false;
      this.name = "";
    },

    closeDialogEdit() {
      this.dialogEdit = false;
      this.nameEdit = "";
    },

    close() {
      route.push({
        name: "NewFormulario",
      });
    },
    async submit() {
      await this.getIdForm();
      await this.createSection();
      this.dialog = false;
      this.name = "";
    },

    async submitEdit(id) {
      await this.getIdForm();
      await this.EditSection(id);
      this.dialogEdit = false;
      this.nameEdit = "";
    },
  },

  computed: {
    ...mapState(["idForm"]),

    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Requerido");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push("Requerido");
      return errors;
    },
  },

  data: () => ({
    seccions: [],
    selectCarrer: "",
    selectCarrerEdit: "",
    carrers: [],
    idCarrers: [],
    formulario: [],
    name: "", // Title
    nameEdit: "",

    dialog: false,
    dialogEdit: false,
    idSeccionEdit: -1,

    panel: [0],
  }),
};
</script>