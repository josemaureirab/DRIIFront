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
     <v-btn  @click="showDialogGridOption = true" >
      <span >Grid</span>
      <v-icon>mdi-grid</v-icon>
    </v-btn>

     <v-btn @click="showDialogSeccion" >
      <span >Sección</span>
      <v-icon>mdi-format-color-text</v-icon>
    </v-btn>

<v-btn @click="close" >
      <span>Nombre</span>
      <v-icon>mdi-close</v-icon>
    </v-btn>
  

   <v-btn @click="submit" >
      <span>Guardar</span>
      <v-icon>mdi-content-save-all</v-icon>
    </v-btn>
   

  </v-bottom-navigation>
   
  
    <DialogGridAnswer v-model="showDialogGridOption" />
   <!-- <DialogSeccion v-model="showDialogSeccion"  /> -->
</div>
</template>
  


<script>
import DialogGridAnswer from "./GridAnswer/DialogGridAnswer.vue";
import route from '@/router';

export default {

  components: {
    DialogGridAnswer,
    //DialogSeccion,
  },

  methods: {
    submit() {
      route.push({
          name:'ListFormularios',
      })
    },
    close() {
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
     }
  },
  



 
  data: () => ({
 
    showDialogGridOption: false,

    isClick: false,
    idClick: -1,
    colorSelect: "",
    colorButton: "rgb(102,99,102)",

  }),
};

</script>