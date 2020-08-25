<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
        <v-col   cols="4" >
          <v-card
            class="pa-2"
            outlined
            tile
          >


  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
       
      src="https://edicine.com/wp-content/uploads/2017/10/form-icon.png"
    >
    </v-img>

      <v-card-title>Nuevo Formulario</v-card-title>

    <v-card-text class="text--primary">
      <div>Formulario en blanco</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        href="/"
      >
        Crear
      </v-btn>
    </v-card-actions>
  </v-card>
</v-card>
 </v-col>

<v-col   cols="4" >
          <v-card
            class="pa-2"
            outlined
            tile
          >
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://i.pinimg.com/originals/70/e9/c2/70e9c2ecb855710da133070c9ecc1934.png"
    >
    </v-img>

      <v-card-title>Formularios Guardados</v-card-title>

    <v-card-text class="text--primary">
      <div>10 Formularios Guardados</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        href="/formulariosGuardados" 
      >
        Visualizar
      </v-btn>

     
    </v-card-actions>
  </v-card>

          </v-card>


        </v-col>
        <v-col  cols="4" >
          <v-card
            class="pa-2"
            outlined
            tile
          >
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://www.marketinet.com/hs-fs/hubfs/Formularios%20de%20Pardot%20y%20Form%20Handlers.png?width=640&name=Formularios%20de%20Pardot%20y%20Form%20Handlers.png"
    >
     
    </v-img>

   <v-card-title>Formularios Publicados</v-card-title>
    <v-card-text class="text--primary">
      <div>4 Formularios Publicados</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        href="/formulariosPublicados" 
      >
        Visualizar
      </v-btn>

    
    </v-card-actions>
  </v-card>

          </v-card>


        </v-col><v-col >
          <v-card
            class="pa-2"
            outlined
            tile
          >


          </v-card>


        </v-col>
    


    </v-row>
  </v-container>
</template>