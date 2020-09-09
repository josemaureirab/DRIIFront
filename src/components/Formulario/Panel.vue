<template>
<div>
  <v-bottom-navigation
  >
    <v-btn @click="showDialogShort" >
      <span>Simple</span>
      <v-icon >mdi-comment-text-outline</v-icon>
    </v-btn>
     <v-btn  @click="showDialogSelect">
      <span >Selección</span>
      <v-icon>mdi-format-list-bulleted</v-icon>
    </v-btn>
     <v-btn  @click="showDialogGrid" >
      <span >Grid</span>
      <v-icon>mdi-grid</v-icon>
    </v-btn>

     <v-btn @click="showDialogSeccion" >
      <span >Sección</span>
      <v-icon>mdi-format-color-text</v-icon>
    </v-btn>

<v-btn @click="showDialogName" >
      <span>Nombre</span>
      <v-icon>mdi-format-title</v-icon>
    </v-btn>
  

   <v-btn @click="submit" >
      <span>Guardar</span>
      <v-icon>mdi-content-save-all</v-icon>
    </v-btn>
  </v-bottom-navigation>  
</div>
</template>
  


<script>
import route from '@/router';

export default {



  methods: {
    submit() {
      route.push({
          name:'ListFormularios',
      })
    },
    showDialogShort(){
       route.push({
          name:'DialogShortAnswer',
      })
    },
    showDialogSeccion (){
        route.push({
          name:'DialogSeccion',
      })
     },
    showDialogSelect (){
        route.push({
          name:'DialogSelectAnswer',
      })
     },
    showDialogGrid (){
        route.push({
          name:'DialogGridAnswer',
      })
     },
     showDialogName(){
          route.push({
          name:'EditNameFormulario',
      })
     }
  },
  

 
  data: () => ({
    isClick: false,
    idClick: -1,
    colorSelect: "",
    colorButton: "rgb(102,99,102)",

  }),
};

</script>