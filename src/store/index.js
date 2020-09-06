import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    serverURL: "hhttp://142.93.79.50:8080/backend-drii", // DEVELOPMENT
    idForm: -1,
    info: [],
    
    idQuestion: -1,
    infoQuestion: [],

    // all question//
    question: [],
  },
  mutations: {
    updateIdForm(state, payload) {
      state.idForm = payload;
    },
    updateIdQuestion(state, payload) {
      state.idQuestion = payload;
    },

  },
  actions: {
    getForm() {
      axios
        .get("http://142.93.79.50:8080/backend-drii/forms/")
        .then((response) => (this.state.info = response.data))
        .catch((error) => console.log(error));
    },

    getQuestions() {
      axios
        .get("http://142.93.79.50:8080/backend-drii/questions/byForm/"+this.state.idForm)
        .then((response) => ((this.state.question = response.data)))
        .catch((error) => console.log(error));
    },

   
 
    async getQuestion() {
      console.log('id ENTRANTE:'+this.state.idQuestion);
      await axios
        .get("http://142.93.79.50:8080/backend-drii/questions/"+this.state.idQuestion)
        .then((response) => ((this.state.infoQuestion = response.data)))
        .catch((error) => console.log(error));
        console.log(this.state.infoQuestion);
        
    },



  },
  modules: {},
});
