<template>

<card> 
  <v-form >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            v-disabled="valid"
            label="Primer nombre"
            required
            disabled="valid"
          ></v-text-field>
        </v-col>

     <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="secondname"
            :rules="nameRules"
                   disabled="valid"
            label="Segundo nombre"
            required
          ></v-text-field>
        </v-col>


        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="firstLastName"
            :rules="nameRules"
            disabled="valid"
            label="Primer Apellido"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="secondLastName"
            :rules="nameRules"
                    disabled="valid"
            label="Segundo Apellido"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
                        disabled="valid"
          ></v-text-field>
    </v-col> 
    <v-col
          cols="12"
          md="6">

           <v-text-field
            v-model="rut"
            :rules="emailRules"
            label="Rut"
            required
                        disabled="valid"
          >
        </v-text-field>

        </v-col>
         <v-col class="d-flex" cols="12" md="6">
        <v-select
          :items="items"
          label="Facultad"
           v-model="facultad"
                disabled="valid"
        ></v-select>
        </v-col>
         <v-col class="d-flex" cols="12" md="6">
        <v-select
          :items="items"
          label="Carrera"
            v-model="carrera"
                      disabled="valid"
        ></v-select>
        </v-col>

            <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="semestre"
            :rules="emailRules"
            label="Semestre de Ingreso"
            required
                        disabled="valid"
          ></v-text-field>
            </v-col> 

             <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="ano"
            :rules="emailRules"
            label="Año de Ingreso"
            required
          ></v-text-field>
            </v-col> 

                  <v-col
          cols="12"
          md="12"
        >
         <v-btn block  v-click="valid=false" color="primary"  >Editar Información</v-btn>  
            </v-col> 



      </v-row>
    </v-container>
  </v-form>
  </card> 
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      firstname: 'Nicolás',
      secondname: 'Tomas',
      firstLastName: 'Alarcón',
      secondLastName: 'Laserna',
      email: 'nicolas.alarcon.l@usach.cl',
      rut:'19.386.607-7',
      facultad: 'Ingenieria',
      carrera: 'Ingenieria Civil en Informatica',
      semestre: '1',
      ano:'2014'
    
    }),
  }
</script>

