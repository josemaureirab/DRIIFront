<template >
     <v-card>
        <v-toolbar dark color="primary">
          <v-toolbar-title>Editar Formulario</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-row>
          <v-col cols="12">
          <Panel />
          </v-col>
          
         <v-list-item v-for="(item, i) in question" :key="i">
            <v-list-item-content>
              <v-col cols="10" justify="center">
                <ViewShortAnswer
                  v-if="item.questionType == '1'"
                  v-bind:item="item"
                />
                <ViewSelectAnswer
                  v-if="item.questionType == '2'"
                  v-bind:item="item"
                />
                <ViewUniversidadAnswer
                  v-if="item.questionType == '3' "
                  v-bind:item="item"
                />
              </v-col>
          
            </v-list-item-content>
          </v-list-item> 
        </v-row>
      </v-card>
</template>

<script>
import Panel from "./Panel.vue";
import ViewShortAnswer from "./ShortAnswer/ViewShortAnswer";
import ViewSelectAnswer from "./SelectAnswer/ViewSelectAnswer";
import ViewGrid from "./GridAnswer/ViewGridAnswer";
import ViewUniversidadAnswer from "./Universidad/ViewUniversidadAnswer";
import axios from "axios";
import { mapState , mapActions } from "vuex";

export default {
  props: {
    value: Boolean,
  },

  components: {
    Panel,
    ViewShortAnswer,
    ViewSelectAnswer,
    ViewUniversidadAnswer,
  },

 async created() {
    await this.getQuestions();
  },

  methods: {
  ...mapActions(['getQuestions']),

  },
  computed: {
    ...mapState(["question"]),
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },

 async created() {
    await this.getQuestions()
  },

  data: () => ({
    info: null,
  }),
};
</script>
