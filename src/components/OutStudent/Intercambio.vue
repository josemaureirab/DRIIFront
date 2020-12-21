<template>
  <div>
    <v-row align="center">
      <v-expansion-panels color="red" multiple v-model="panel">
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert color="blue" dark icon="mdi-format-list-checks" dense
              >Documentos Universidad de Destino</v-alert
            >
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list v-for="item in documentosUniversidad" :key="item">
              <v-list-item>
                <v-row justify="center">
                  <v-col cols="6" align="left">
                    <v-file-input show-size counter :label="item.name" />
                  </v-col>

                  <v-col cols="2" align="right">
                    <v-btn class="ma-4" color="blue" dark>
                      Enviar
                      <v-icon dark right>mdi-upload</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="1" align="right">
                    <v-btn class="ma-4" color="green" dark>
                      Descargar 
                      <v-icon dark right>mdi-download</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-list-item>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>

      <v-row align="center">
      <v-expansion-panels color="red" multiple v-model="panel">
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert color="blue" dark icon="mdi-format-list-checks" dense
              >Documentos Intercambio</v-alert
            >
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list v-for="item in documentos2" :key="item">
              <v-list-item>
                <v-row justify="center">
                  <v-col cols="6" align="left">
                    <v-file-input show-size counter :label="item.name" />
                  </v-col>

                  <v-col cols="2" align="right">
                    <v-btn class="ma-4" color="blue" dark>
                      Enviar
                      <v-icon dark right>mdi-upload</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="1" align="right">
                    <v-btn class="ma-4" color="green" dark>
                      Descargar 
                      <v-icon dark right>mdi-download</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-list-item>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>

     <v-row align="center">
      <v-expansion-panels color="red" multiple v-model="panel">
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert color="blue" dark icon="mdi-format-list-checks" dense
              >Contrato de estudio</v-alert
            >
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list v-for="item in documentos3" :key="item">
              <v-list-item>
                <v-row justify="center">
                  <v-col cols="6" align="left">
                    <v-file-input show-size counter :label="item.name" />
                  </v-col>

                  <v-col cols="2" align="right">
                    <v-btn class="ma-4" color="blue" dark>
                      Enviar
                      <v-icon dark right>mdi-upload</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="1" align="right">
                    <v-btn class="ma-4" color="green" dark>
                      Descargar 
                      <v-icon dark right>mdi-download</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-list-item>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>


     <v-row align="center">
      <v-expansion-panels color="red" multiple v-model="panel">
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert color="blue" dark icon="mdi-format-list-checks" dense
              >Notas</v-alert
            >
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list v-for="item in documentos4" :key="item">
              <v-list-item>
                <v-row justify="center">
                  <v-col cols="6" align="left">
                    <v-file-input show-size counter :label="item.name" />
                  </v-col>

                  <v-col cols="2" align="right">
                    <v-btn class="ma-4" color="blue" dark>
                      Enviar
                      <v-icon dark right>mdi-upload</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="1" align="right">
                    <v-btn class="ma-4" color="green" dark>
                      Descargar 
                      <v-icon dark right>mdi-download</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-list-item>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>


  
  </div>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,

      documentosUniversidad: [
        {
          name: "Pasaporte",
          id: 1
        },
        {
          name: "Notas",
          id: 1
        },
        {
          name: "Otros",
          id: 1
        },

      ],
        documentos2: [
        {
          name: "Compromiso estudiante seleccionado",
          id: 1
        },
        {
          name: "Certificado de alumno regular",
          id: 1
        },
        {
          name: "Certificado de notas",
          id: 1
        },
        {
          name: "Traducción del Certificado de notas",
          id: 1
        },
        {
          name: "Pasaporte",
          id: 1
        },
        {
          name: "Carta de aceptación",
          id: 1
        },
        {
          name: "Pasajes aéreos",
          id: 1
        },
        {
          name: "Seguro médico y de viaje",
          id: 1
        },
         {
          name: "Visa de estudiante",
          id: 1
        },
         {
          name: "Constancia de llegada",
          id: 1
        },
         {
          name: "Constancia de salida",
          id: 1
        },

      ],


      documentos3: [
        {
          name: "Contrato de estudio",
          id: 1
        },
        {
          name: "Modificación contrato de estudio",
          id: 1
        },
      ],


      documentos4: [
        {
          name: "Notas del intercambio",
          id: 1
        },
      ],


    };
    
  },
};
</script>