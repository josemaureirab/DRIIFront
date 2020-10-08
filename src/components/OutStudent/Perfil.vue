<template>

<card> 
  <v-form >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="name"
            :disabled="edit"
            label="Nombre"
            required
          ></v-text-field>
        </v-col>

     


        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="email"
            disabled
            label="E-mail"
            required
          ></v-text-field>
    </v-col> 
    
        
         <v-col class="d-flex" cols="6" md="6">
       <v-select
            return-object
            v-model="selectCarrer"
            :items="carrers"
            item-text="name"
            label="Carrera"
             :disabled="edit"
          ></v-select>
        </v-col>

        <v-col
          cols="3"
          md="3">

           <v-text-field
            v-model="rut"
            label="Rut"
            required
            :disabled="edit"
          >
        </v-text-field>

        </v-col>
            <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="incomeSemester"
            label="Semestre de Ingreso"
            required
            :disabled="edit"
          ></v-text-field>

          
            </v-col> 

              <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="incomeYear"
            label="Año de Ingreso"
            required
            :disabled="edit"
          ></v-text-field>
            </v-col> 
             <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="actualSemester"
            label="Semestre Actual"
            :disabled="edit"
          ></v-text-field>
            </v-col> 
            <v-col
          cols="12"
          md="12"
        >
         <v-btn block  @click="editar()" color="primary">Editar Información</v-btn>  
            </v-col> 



      </v-row>
    </v-container>
  </v-form>
  </card> 
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";
  export default {

    

    async created(){
      await this.getSuitor();
      await this.getCarrer();
       
    },
    computed: {
    ...mapState(["idSuitor"]),
    },

    


   methods: {

    editar(){
      
      if (this.e == 0){
          this.edit = false
          this.e = 1;
      }
      else {
          this.edit = true
          this.e = 0;
          this.submit();
      }

    },

 async  submit(){
     await this.axios
        .put(" http://142.93.79.50:8080/backend-drii/suitors/edit/"+this.idSuitor, {
              name: this.name,
              rut: this.rut,
              email: this.email,
              incomeYear: this.incomeYear,
              incomeSemester: this.incomeSemester,
              actualSemester:  this.actualSemester,
              career: this.selectCarrer
        })
        .then(function (response) {
          console.log(response);
        });
        this.getSuitor();
    },


     getCarrer(){
      return this.axios.get("http://142.93.79.50:8080/backend-drii/careers/")
      .then((response) => (( this.carrers = response.data),console.log(response.data)))
      .catch((error) => console.log(error));

     },
     getSuitor(){
       
      return this.axios.get("http://142.93.79.50:8080/backend-drii/suitors/"+this.idSuitor)
      .then((response) => (( this.filterData(response.data),console.log(response.data))))
      .catch((error) => console.log(error));
    },  

    filterData(data){
      this.name = data.name,
      this.email = data.email,
      this.rut = data.rut,
      this.incomeYear = data.incomeYear,
      this.incomeSemester =  data.incomeSemester,
      this.actualSemester = data.actualSemester
      this.selectCarrer = data.career 
    }
    
  

    //...mapActions(["getAgreements"]),
   },
    data: () => ({
        e: 0,
        selectCarrer:[],
        carrers: [],
        edit: true,
        name : '',
        email : '',
        rut : '',
        incomeYear : '',
        incomeSemester : '',
        actualSemester : '',
    }),
  }
</script>

