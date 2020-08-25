<template>
 <v-navigation-drawer  :permanent="true"   right="true" absolute>
    <v-list  flat mandatory="false">
      <v-list-item-group  v-model="model" v-bind:color="colorSelect">
        <v-list-item
         v-for ="(item, i) in items"
          :key="i"   v-on:click="chickButton(i)">
        
          <v-list-item-icon >
            <v-icon   v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>

     

    </v-list>
      <DialogShortAnswer v-model="showDialogShort"/>
      <DialogSelectAnswer v-model="showDialogSelect"/>
      <DialogGridAnswer v-model="showDialogGridOption"/>
    
   </v-navigation-drawer>
</template>

<script>
 import DialogShortAnswer from './ShortAnswer/DialogShortAnswer.vue';
 import DialogSelectAnswer from './SelectAnswer/DialogSelectAnswer.vue'; 
 import DialogGridAnswer from './GridAnswer/DialogGridAnswer';

  export default {
 components: {
           DialogShortAnswer,
           DialogSelectAnswer,
           DialogGridAnswer,
    },

 methods:  {
       chickButton: function (i){
         console.log(i);
          switch (i){
            case 0:
              this.showDialogShort = true;
              break;
            case 1:
               this.showDialogSelect = true;
               break;
            case 2:
               this.showDialogGridOption = true;
               break;
            case 3:
                this.showDialogUploadFile = true;
                break;
            case 4:
                this.showDialogDate = true;

      
          }
       }         

      /*clickButton: function (){
        this.isClick= false,
        this.idClick = -1,
        this.colorSelect="", // volver a ser el original.
        this.colorButton =  "rgb(102,99,102)"
     
        // apagar el hover
      },
      changeColor: function(i){
        if(this.idClick == i && this.isClick){
    
             this.isClick= false
             this.colorButton =  "rgb(102,99,102)"
             this.colorSelect= ""
        }
        else{
          this.isClick =true
          this.idClick = i
          this.colorButton = "rgb(233, 142, 76)"
          this.colorSelect= "rgb(233, 142, 76)"
        } */ 
      
 }
      ,
    data: () => ({
      // TODO: Arreglar Disabled button
      // TODO: al momento de apretar nuevamente el ultimo select (ya seleccionado y enviado) no cambia de color el select
      showDialogShort: false,
      showDialogSelect: false,
      showDialogGridOption: false,

      isClick: false,
      idClick: -1,
      colorSelect: "",
      colorButton: "rgb(102,99,102)",
          
      items: [
        {
          icon: 'mdi-card-text',
          text: 'Respuesta Corta',
        },
        {
          icon: 'mdi-format-list-checks',
          text: 'Selección Simple',
        },
         {
        icon: 'mdi-apps',
        text: 'Cuadricula Opciones',
        },
        {
        icon: 'mdi-shape-rectangle-plus',
        text: 'Sección',
        },
        { 
        icon: 'mdi-shape-rectangle-plus',
        text: 'Visualizar Arbol',
        },
          {
        icon: 'mdi-shape-rectangle-plus',
        text: 'Guardar',
        },
          {
        icon: 'mdi-shape-rectangle-plus',
        text: 'Publicar',
        },
           {
        icon: 'mdi-shape-rectangle-plus',
        text: 'Salir',
        href: '/Formulario'
        },

      ],
      model: 1,
    }),
  }

  // En MOSTAR .. COPIAR -> copiar value en el dialoge
  //              ELIMINAR -> 
  //              EDITAR -> 
  // BOTONES CREADOS   en viutiful.com


  // Select result : https://vuetifyjs.com/en/components/combobox/
  // file input : https://vuetifyjs.com/en/components/file-inputs/


</script>