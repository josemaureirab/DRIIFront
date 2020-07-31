<template>
  <v-row>
    <v-col cols="2">
      <OptionPalettes />
    </v-col>
    <v-list-item v-for="(item, i) in info" :key="i">
      <v-list-item-content>
        <v-col cols="9" justify="center">
          <CardShortAnswer   v-if="item.questionType == '1'" v-bind:item="item" />


          <CardSelect
            v-if="item.questionType == '2'" v-bind:item="item"
          />

    
          <CardGridOption
            v-if="item.questionType == '3'"
            v-bind:title-question="item.question"
             v-bind:item="item"
          />
        </v-col>
      </v-list-item-content>
    </v-list-item>
  </v-row>
</template>

<script>
import OptionPalettes from "../Buttons/OptionPalettes.vue";
import CardShortAnswer from "./CardShortAnswer.vue";
import CardSelect from "./CardSelect.vue";
import CardGridOption from "./CardGridOption.vue";
import axios from "axios";

export default {
  components: {
    OptionPalettes,
    CardShortAnswer,
    CardSelect,
    CardGridOption
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