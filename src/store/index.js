import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    //user

    rutUser: '',

    //alerts

    alerts: [],
    alertsByRut: [],
    actualAlert: {},

    //others

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

    //alerts

    updateActualAlert(state, payload) {
      state.actualAlert = payload;
    },

  },
  actions: {
  
    // Alerts

    async createAlert() {
      await axios
      .post(this.state.serverURL + '/alerts/create', this.state.actualAlert)
      .then(response => {
        const result = response.data
        if(result.length !== 0) {
          console.log('Alerta creada');
        } else {
          console.log('No se ha podido crear la alerta');
        }
      })
      .catch(e =>{
        console.log(e.response);
      })
    },

    async getAlerts() {
      await axios
        .get(this.state.serverURL + '/alerts')
        .then(response => {
          const result = response.data
          if (result.length !== 0) {
            console.log('Alertas obtenidas');
            this.state.alerts = result
          } else {
            console.log('No se han podido obtener las alertas');
          }
        })
        .catch(e => {
          console.log(e.response);
        })
    },

    async getAlertsByRut() {
      await axios
        .get(this.state.serverURL + '/alerts/get/ByRut/' + this.state.rutUser)
        .then(response => {
          const result = response.data
          if (result.length !== 0) {
            console.log('Alertas por rut obtenidas');
            this.state.alertsByRut = result
          } else {
            console.log('No se han podido obtener las alertas por rut');
          }
        })
        .catch(e => {
          console.log(e.response);
        })
    },
    

    // Others

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
