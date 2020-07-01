
<template>
  <v-row>
    <v-col cols="2">
      <OptionPalettes />
    </v-col>

<v-list-item
         v-for ="(item, i) in questions"
          :key="i" >
      <v-list-item-content>
            <v-col cols="9" justify="center">
            <CardShortAnswer v-if="item.type == 1" v-bind:title-question="item.question" v-bind:setting="item.setting" />
            <CardSelect v-if="item.type == 2" v-bind:title-question="item.question" v-bind:setting="item.setting" />
            <CardUploadFile v-if="item.type == 3"  v-bind:title-question="item.question" v-bind:setting="item.setting" />
            <CardDate v-if="item.type == 4"  v-bind:title-question="item.question" v-bind:setting="item.setting"  />
            <CardGridOption v-if="item.type == 5"  v-bind:title-question="item.question" v-bind:setting="item.setting"  />

        </v-col>
      </v-list-item-content>
 </v-list-item>
  </v-row>
</template>

<script>
import OptionPalettes from "../Buttons/OptionPalettes.vue";
import CardShortAnswer from "./CardShortAnswer.vue";
import CardSelect from "./CardSelect.vue";
import CardUploadFile from "./CardUploadFile.vue";
import CardDate from "./CardDate.vue";
import CardGridOption from "./CardGridOption.vue";

export default {
  components: {
    CardShortAnswer,
    OptionPalettes,
    CardSelect, 
    CardUploadFile,
    CardDate,
    CardGridOption,
  },
  data: () => ({
      questions: [
          { 
                question: "¿Titulo Pregunta Simple?",
                type:  1,
                setting: Object,
          },
          {   
                question: '¿Titulo Pregunta Selección Simple?',
                type:  2,
                setting: Object,
          },
           { 
                question: '¿ Titulo Pregunta Upload File?',
                type:  3,
                 setting: Object,
          },
          { 
                question: '¿Titulo Pregunta Date ?',
                type:  4,
                setting: Object,
          },
          { 
                question: '¿ Titulo Cuadricula? ',
                type:  5,
                 setting: Object,
          }
      ],
    }),

  // TODO: Arreglar cHILD COMPONENTS..

};
</script>