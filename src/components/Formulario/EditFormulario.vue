<template>
  <v-row>
    <v-col cols="2">
      <Panel />
    </v-col>
    <v-list-item v-for="(item, i) in info" :key="i">
      <v-list-item-content>
        <v-col cols="9" justify="center">
          <ViewShortAnswer   v-if="item.questionType == '1'" v-bind:item="item" />
          <ViewSelectAnswer
            v-if="item.questionType == '2'" v-bind:item="item"
          />
          <ViewGrid
            v-if="item.questionType == '3'"
            v-bind:item="item"
          />
        </v-col>
      </v-list-item-content>
    </v-list-item>
  </v-row>
</template>

<script>
import Panel from "./Panel.vue";
import ViewShortAnswer from "./ShortAnswer/ViewShortAnswer";
import ViewSelectAnswer from "./SelectAnswer/ViewSelectAnswer";
import ViewGrid from "./GridAnswer/ViewGridAnswer";
import axios from "axios";

export default {
  components: {
    Panel,
    ViewShortAnswer,
    ViewSelectAnswer,
    ViewGrid
  },

  /* methods: {
   },*/

  mounted() {
    axios
      .get("http://142.93.79.50:8080/backend-drii/questions/")
      .then(response => (this.info = response.data))
      .catch(error => console.log(error));
  },

  data: () => ({
    info: null
  })

// TODO: AL AGREGAR UN NUEVO ELEMENTO REINICIAR LA PAGINA O QUE SE MUESTRE
// TODO: AL COPIAR UN ELEMENTO QUE SE AGREGA ABAJO AUTOMATICAMENTE..
// TODO: AL BORRAR UN ELEMENTO QUE SE BORRE AUTOMATICAMENTE.

  // TODO: Arreglar cHILD COMPONENTS..
};
</script>