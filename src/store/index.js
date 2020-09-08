import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    account: [],

    serverURL: "hhttp://142.93.79.50:8080/backend-drii", // DEVELOPMENT
    idForm: -1,
    info: [],
    
    idQuestion: -1,
    infoQuestion: [],
    
    idStudent: -1,

    
    idConvocatoria: -1,
    convocatoria:[],
    convocatorias:[],

    // all question//
    question: [],
  },
  mutations: {

    updateIdConvocatoria(state, payload){
      state.idConvocatoria = payload;
    },
    updateIdForm(state, payload) {
      state.idForm = payload;
    },
    updateIdQuestion(state, payload) {
      state.idQuestion = payload;
    },

  },
  actions: {

  async getAccount(){
    await axios
    .get("http://142.93.79.50:8080/backend-drii/suitors/2")
    .then((response) => (this.state.account = response.data))
    .catch((error) => console.log(error));
  },

  

   postular(){
      axios.post("http://142.93.79.50:8080/backend-drii/postulations/create",{
          "agreement": this.state.convocatoria,  
      }).then((response) => (console.log(response.data)))
        .catch((error) => console.log(error));

    },

    getForm() {
      axios
        .get("http://142.93.79.50:8080/backend-drii/forms/")
        .then((response) => (this.state.info = response.data))
        .catch((error) => console.log(error));
    },

    async getAgreements(){
      await axios
      .get("http://142.93.79.50:8080/backend-drii/agreements/")
      .then((response) => (this.state.convocatorias = response.data))
      .catch((error) => console.log(error));
    },

    async getAgressment(){
      await axios
      .get("http://142.93.79.50:8080/backend-drii/agreements/"+this.state.idConvocatoria)
      .then((response) => (this.state.convocatoria = response.data))
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
