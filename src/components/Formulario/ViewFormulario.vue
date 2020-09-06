<template >
     <v-card>
        <v-toolbar dark color="primary">
          <v-toolbar-title> Formulario</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-row>
          <v-col cols="12">
          </v-col>
         <v-list-item v-for="(item, i) in question" :key="i">
            <v-list-item-content>
              <v-col cols="9" justify="center">
                <ViewShortAnswer
                  v-bind:idForm="idForm"
                  v-if="item.questionType == '1'"
                  v-bind:item="item"
                />
                <ViewSelectAnswer
                  v-bind:idForm="idForm"
                  v-if="item.questionType == '2'"
                  v-bind:item="item"
                />
                <ViewGrid
                  v-bind:idForm="idForm"
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
    ViewGrid,
  },

 async created() {
    await this.getQuestions();
    console.log
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
