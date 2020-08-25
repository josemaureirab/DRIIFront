
 <template>
  <div>
    <v-row align="center">
      <v-col cols="12" align="right">
        <v-btn href="/newConvocatoria" class="mx-2" fab dark color="indigo">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-col>
      <v-expansion-panels color="red" multiple v-model="panel">
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert color="blue" dark icon="mdi-bookmark-remove" dense>Convocatorias Guardadas</v-alert>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row justify="center">
              <v-container>
                <v-row dense>
                  <v-col cols="4">
                    <v-card class="mx-auto" max-width="400">
                      <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://brocku.ca/international/wp-content/uploads/sites/17/Website_Carousel_CONAHEC-1800x1100.png"
                      ></v-img>
                      <v-card-title>Convocatoria CONAHEC</v-card-title>
                      <v-card-subtitle class="pb-0">Intercambios a realizar el semestre 2-2020.</v-card-subtitle>

                      <v-card-text class="text--primary">
                        <div>Cierre de postulaciones: domingo 23 de marzo 2020 a las 23:59 horas</div>
                      </v-card-text>

                      <v-card-actions>
                        <v-row cols="12" justify="center">
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-eye</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-tooltip-edit</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-delete</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-clipboard-check</v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                  <v-col cols="4">
                    <v-card class="mx-auto" max-width="400">
                      <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://brocku.ca/international/wp-content/uploads/sites/17/Website_Carousel_CONAHEC-1800x1100.png"
                      ></v-img>
                      <v-card-title>Convocatoria CONAHEC</v-card-title>
                      <v-card-subtitle class="pb-0">Intercambios a realizar el semestre 2-2020.</v-card-subtitle>

                      <v-card-text class="text--primary">
                        <div>Cierre de postulaciones: domingo 23 de marzo 2020 a las 23:59 horas</div>
                      </v-card-text>

                      <v-card-actions>
                        <v-row cols="12" justify="center">
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-eye</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-tooltip-edit</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-delete</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-clipboard-check</v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                  <v-col cols="4">
                    <v-card class="mx-auto" max-width="400">
                      <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://brocku.ca/international/wp-content/uploads/sites/17/Website_Carousel_CONAHEC-1800x1100.png"
                      ></v-img>
                      <v-card-title>Convocatoria CONAHEC</v-card-title>
                      <v-card-subtitle class="pb-0">Intercambios a realizar el semestre 2-2020.</v-card-subtitle>

                      <v-card-text class="text--primary">
                        <div>Cierre de postulaciones: domingo 23 de marzo 2020 a las 23:59 horas</div>
                      </v-card-text>

                      <v-card-actions>
                        <v-row cols="12" justify="center">
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-eye</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-tooltip-edit</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-delete</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
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
            <v-alert color="green" dark icon="mdi-bookmark-remove" dense>Convocatorias Publicadas</v-alert>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row justify="center">
              <v-container>
                <v-row dense>
                  <v-col cols="4">
                    <v-card class="mx-auto" max-width="400">
                      <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://brocku.ca/international/wp-content/uploads/sites/17/Website_Carousel_CONAHEC-1800x1100.png"
                      ></v-img>
                      <v-card-title>Convocatoria CONAHEC</v-card-title>
                      <v-card-subtitle class="pb-0">Intercambios a realizar el semestre 2-2020.</v-card-subtitle>

                      <v-card-text class="text--primary">
                        <div>Cierre de postulaciones: domingo 23 de marzo 2020 a las 23:59 horas</div>
                      </v-card-text>

                      <v-card-actions>
                        <v-row cols="12" justify="center">
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-eye</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-tooltip-edit</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-delete</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-bookmark-remove</v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                  <v-col cols="4">
                    <v-card class="mx-auto" max-width="400">
                      <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://brocku.ca/international/wp-content/uploads/sites/17/Website_Carousel_CONAHEC-1800x1100.png"
                      ></v-img>
                      <v-card-title>Convocatoria CONAHEC</v-card-title>
                      <v-card-subtitle class="pb-0">Intercambios a realizar el semestre 2-2020.</v-card-subtitle>

                      <v-card-text class="text--primary">
                        <div>Cierre de postulaciones: domingo 23 de marzo 2020 a las 23:59 horas</div>
                      </v-card-text>

                      <v-card-actions>
                        <v-row cols="12" justify="center">
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-eye</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-tooltip-edit</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-delete</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-bookmark-remove</v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                  <v-col cols="4">
                    <v-card class="mx-auto" max-width="400">
                      <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://brocku.ca/international/wp-content/uploads/sites/17/Website_Carousel_CONAHEC-1800x1100.png"
                      ></v-img>
                      <v-card-title>Convocatoria CONAHEC</v-card-title>
                      <v-card-subtitle class="pb-0">Intercambios a realizar el semestre 2-2020.</v-card-subtitle>

                      <v-card-text class="text--primary">
                        <div>Cierre de postulaciones: domingo 23 de marzo 2020 a las 23:59 horas</div>
                      </v-card-text>

                      <v-card-actions>
                        <v-row cols="12" justify="center">
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-eye</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-tooltip-edit</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-delete</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
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
  </div>
</template>

<script>
export default {
  data: () => ({
    panel: [0, 1],
  }),
};

// TODO : IMAGENES ESTANDERIZADAS ( ANOTARLO Y BUSCARLO!!)
</script>




