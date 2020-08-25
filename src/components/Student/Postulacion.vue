<template>
    <div> 
    <v-list-item v-for="(item, i) in info" :key="i" >     
      <v-list-item-content >
        <v-col cols="12" justify="center">
          <ViewShortAnswer   v-if="item.questionType == '1'" v-bind:item="item" />
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
    </div>
</template>

<script>

import ViewShortAnswer from "../ViewFormulario/ViewShortAnswer.vue";
import CardSelect from "../Principal/CardSelect";
import CardGridOption from "../Principal/CardGridOption.vue";
import axios from "axios";

export default {
  components: {

    ViewShortAnswer,
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