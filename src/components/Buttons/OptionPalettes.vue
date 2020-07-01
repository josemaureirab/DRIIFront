<template>
 <v-navigation-drawer  :permanent="true"   right="true" absolute>
    <v-list  flat mandatory="false">
      <v-list-item-group  v-model="model" v-bind:color="colorSelect">
        <v-list-item
         v-for ="(item, i) in items"
          :key="i" v-on:click="chickButton(i)">
        
          <v-list-item-icon >
            <v-icon  v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>

       <div id="example" class="text-center">
          <v-btn   v-bind:disabled="disableButton" class="mx-4 mt-4" fab dark v-bind:color="colorButton">
        <v-icon dark>mdi-plus</v-icon>
        </v-btn>
        </div>

    </v-list>
    <DialogShortAnswer v-model="showDialogShort"/>
    <DialogSelect v-model="showDialogSelect"/>
    <DialogUploadFile v-model="showDialogUploadFile"/>
    <DialogDate v-model="showDialogDate"/>
    <DialogGridOption v-model="showDialogGridOption"/>
   </v-navigation-drawer>
</template>

<script>
 import DialogShortAnswer from './DialogShortAnswer.vue';
 import DialogSelect from './DialogSelect.vue';
 import DialogUploadFile from './DialogUploadFile.vue';
 import DialogDate from './DialogDate.vue';
 import DialogGridOption from './DialogGridOption.vue';

  export default {
 components: {
           DialogShortAnswer,
           DialogSelect,
           DialogUploadFile,
           DialogDate,
           DialogGridOption,
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
      showDialogUploadFile: false,
      showDialogDate: false,
      showDialogGridOption: false,

      disabledButton: true,
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
        icon: 'mdi-cloud-upload-outline',
        text: 'Subir Archivo',
        },
        {
        icon: 'mdi-calendar-month',
        text: 'Fecha',
        },
          {
        icon: 'mdi-shape-rectangle-plus',
        text: 'Sección',
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