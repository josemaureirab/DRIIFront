
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
            <v-alert color="green" dark icon="mdi-bookmark-check" dense>Convocatorias Abiertas (6)</v-alert>
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
                        <v-btn color="orange" text href="\informativo">Ingresar</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>

                  <v-col cols="4">
                    <v-card class="mx-auto" max-width="400">
                      <v-img
                        class="white--text align-end"
                        height="200px"
                        width="400px"
                        src="https://trabajosocialsantafe.org/wp-content/uploads/2017/05/logo-augm.jpg"
                      ></v-img>
                      <v-card-title>Convocatoria AUGM</v-card-title>
                      <v-card-subtitle class="pb-0">Intercambios a realizar el semestre 2-2020.</v-card-subtitle>

                      <v-card-text class="text--primary">
                        <div>Cierre de postulaciones: domingo 19 de abril a las 23:59 horas.</div>
                      </v-card-text>

                      <v-card-actions>
                        <v-btn color="orange" text href="\informativo">Ingresar</v-btn>
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
                        <v-btn color="orange" text href="\informativo">Ingresar</v-btn>
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
            <v-alert color="red" dark icon="mdi-bookmark-remove" dense>Convocatorias Cerradas (3)</v-alert>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row justify="center">
              <v-container>
                 <v-row dense>
                  <v-col cols="4">
                    <v-card  disabled class="mx-auto" max-width="400">
                      <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://brocku.ca/international/wp-content/uploads/sites/17/Website_Carousel_CONAHEC-1800x1100.png"
                      ></v-img>
                      <v-card-title>Convocatoria CONAHEC</v-card-title>
                     

                      <v-card-actions>
                        <v-btn color="orange" text href="\informativo">Ver detalles</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>

                  <v-col cols="4">
                    <v-card   class="mx-auto" max-width="400">
                      <v-img
                        class="white--text align-end"
                        height="200px"
                        width="400px"
                        src="https://trabajosocialsantafe.org/wp-content/uploads/2017/05/logo-augm.jpg"
                      ></v-img>
                      <v-card-title>Convocatoria AUGM</v-card-title>
                      

                      <v-card-actions>
                        <v-btn color="orange" text href="\informativo">Ver Detalles</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>

                  <v-col cols="4">
                    <v-card  disabled class="mx-auto" max-width="400">
                      <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://brocku.ca/international/wp-content/uploads/sites/17/Website_Carousel_CONAHEC-1800x1100.png"
                      ></v-img>
                      <v-card-title>Convocatoria CONAHEC</v-card-title>
                   

                      <v-card-actions>
                          <v-btn   color="orange" text href="\informativo">Ver Detalles</v-btn>
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




