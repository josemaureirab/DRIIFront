import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    //documents

    rutFileUser: '',
    actualFileName: '',

    //user

    rutUser: '',

    //alerts

    alerts: [],
    alertsByRut: [],
    actualAlert: {},
    snackbarColor: '',
    activeSnackbar: false,
    snackbarMessage: '',
    snackbarTimeout: 0,

    //others
    career: {},
    step: {},
    university: {},
    account: [],

    serverURL: "http://142.93.79.50:8080/backend-drii", // DEVELOPMENT
    idForm: -1,
    info: [],
    
    idQuestion: -1,
    infoQuestion: [],
    
    idSuitor: 1,
    infoSuitor:[],
    
    idPostulacion: -1,


    idConvocatoria: -1,
    infoConvocatoria:[],
    convocatorias:[],
    actualPostulation:{},

    // all question//
    question: [],
  },
  mutations: {

    updateSnackbarColor(state, payload) { state.snackbarColor = payload },
    updateActiveSnackbar(state, payload) { state.activeSnackbar = payload },
    updateSnackbarMessage(state, payload) { state.snackbarMessage = payload },
    updateSnackbarTimeout(state, payload) { state.snackbarTimeout = payload },

    updateIdConvocatoria(state, payload){
      state.idConvocatoria = payload;
    },
    updateIdForm(state, payload) {
      state.idForm = payload;
    },
    updateIdQuestion(state, payload) {
      state.idQuestion = payload;
    },
    updateIdSuitor(state, payload) {
      state.idSuti = payload;
    },
    updateIdPostulacion(state, payload) {
      state.idPostulacion = payload;
    },

    //alerts

    updateActualAlert(state, payload) {
      state.actualAlert = payload;
    },

    //documents

    updateRutFileUSer(state, payload) {
      state.rutFileUser = payload;
    },
    updateActualFileName(state, payload) {
      state.actualFileName = payload;
    },

    //user

    updateActualFileName(state, payload) {
      state.actualFileName = payload;
    },
    //career

    updateCareer(state, payload) {
      state.career = payload;
    },
    //step
    updateStep(state, payload) {
      state.step = payload;
    },
    //postulation
    updateActualPostulation(state, payload) {
      state.actualPostulation = payload;
    },
    //university

    updateUniversity(state, payload) {
      state.university = payload;
    }
  },
  actions: {
    setSnackbarAlert({ commit }, payload) {
      commit('updateSnackbarColor', payload.color)
      commit('updateSnackbarMessage', payload.message)
      commit('updateSnackbarTimeout', payload.timeout)
      commit('updateActiveSnackbar', true)
    },
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

    async createAlert() {
      await axios
        .post(this.state.serverURL + '/alerts/create', this.state.actualAlert)
        .then(response => {
          const result = response.data
          if (result.length !== 0) {
            console.log('Alerta creada');
          } else {
            console.log('No se ha podido crear la alerta');
          }
        })
        .catch(e => {
          console.log(e.response);
        })
    },
    
    // Documents

    async getDocumentByFileName() {
      await axios
        .get(this.state.serverURL + '/files/downloadByFileName/' + this.state.rutFileUser + '/' + this.state.actualFileName)
        .then(response => {
          const result = response.data
          if (result.length !== 0) {
            console.log('Documento obtenido');
            console.log(response.data);
          } else {
            console.log('No se ha podido obtener el documento');
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

    async getAgreement(){
      await axios
      .get("http://142.93.79.50:8080/backend-drii/agreements/"+this.state.idConvocatoria)
      .then((response) => (this.state.infoConvocatoria = response.data))
      .catch((error) => console.log(error));
    },

    getQuestions() {
      axios
        .get("http://142.93.79.50:8080/backend-drii/questions/byForm/"+this.state.idForm)
        .then((response) => ((this.state.question = response.data)))
        .catch((error) => console.log(error));
    },

   
    async getQuestion() {
      await axios
        .get("http://142.93.79.50:8080/backend-drii/questions/"+this.state.idQuestion)
        .then((response) => ((this.state.infoQuestion = response.data)))
        .catch((error) => console.log(error));
        
    },


    async getSuitor() {
      await axios
        .get("http://142.93.79.50:8080/backend-drii/suitors/"+this.state.idSuitor)
        .then((response) => ((this.state.infoSuitor = response.data)))
        .catch((error) => console.log(error));
        
    },




  },
  modules: {},
});
